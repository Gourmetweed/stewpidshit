import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export function Unsubscribe() {
  const [state, setState] = useState<"loading" | "valid" | "already" | "invalid" | "done" | "error">("loading");
  const [submitting, setSubmitting] = useState(false);
  const token = new URLSearchParams(window.location.search).get("token");

  useEffect(() => {
    if (!token) {
      setState("invalid");
      return;
    }
    const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`;
    fetch(url, { headers: { apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY } })
      .then((r) => r.json())
      .then((data) => {
        if (data.valid) setState("valid");
        else if (data.reason === "already_unsubscribed") setState("already");
        else setState("invalid");
      })
      .catch(() => setState("error"));
  }, [token]);

  async function confirm() {
    if (!token) return;
    setSubmitting(true);
    const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", { body: { token } });
    setSubmitting(false);
    if (error) return setState("error");
    if (data?.success) setState("done");
    else if (data?.reason === "already_unsubscribed") setState("already");
    else setState("error");
  }

  return (
    <div className="min-h-screen bg-charcoal text-white flex items-center justify-center px-6">
      <div className="max-w-md w-full border border-mustard/25 p-10 rounded-sm text-center">
        <h1 className="font-display text-3xl mb-2">
          STEWPIDLY <span className="text-mustard">GOOD</span>
        </h1>
        <p className="text-xs tracking-[0.3em] text-mustard mb-8">— EMAIL PREFERENCES</p>

        {state === "loading" && <p className="text-white/70">Checking your link...</p>}
        {state === "valid" && (
          <>
            <p className="text-white/80 mb-6">Click below to unsubscribe from Stewpidly Good emails.</p>
            <button
              onClick={confirm}
              disabled={submitting}
              className="bg-mustard text-charcoal font-display tracking-[0.2em] text-sm px-6 py-4 rounded-sm hover:opacity-90 disabled:opacity-60"
            >
              {submitting ? "PROCESSING..." : "CONFIRM UNSUBSCRIBE"}
            </button>
          </>
        )}
        {state === "already" && <p className="text-white/70">You're already unsubscribed.</p>}
        {state === "done" && <p className="text-white/80">You've been unsubscribed. Sorry to see you go.</p>}
        {state === "invalid" && <p className="text-white/70">This link is invalid or has expired.</p>}
        {state === "error" && <p className="text-white/70">Something went wrong. Try again later.</p>}
      </div>
    </div>
  );
}
