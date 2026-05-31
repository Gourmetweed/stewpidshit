import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(3, "Phone is required").max(40),
  details: z.string().trim().min(5, "Tell us a little about the event").max(2000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", details: "" });
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    setLoading(true);
    try {
      const id = crypto.randomUUID();
      const { error: insertError } = await supabase
        .from("bookings")
        .insert({ id, ...parsed.data });
      if (insertError) throw insertError;

      const [notification, confirmation] = await Promise.all([
        supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "booking-notification",
            recipientEmail: "hello@stewpidlygood.no",
            idempotencyKey: `booking-notify-${id}`,
            templateData: parsed.data,
          },
        }),
        supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "booking-confirmation",
            recipientEmail: parsed.data.email,
            idempotencyKey: `booking-confirm-${id}`,
            templateData: { name: parsed.data.name },
          },
        }),
      ]);

      if (notification.error || confirmation.error) {
        console.error("Email send failed", { notification, confirmation });
        toast.error("REQUEST SAVED — EMAIL IS DELAYED");
        return;
      }

      toast.success("REQUEST SENT — WE'LL BE IN TOUCH");
      setForm({ name: "", email: "", phone: "", details: "" });
    } catch (err) {
      console.error(err);
      toast.error("SOMETHING WENT WRONG — TRY AGAIN");
    } finally {
      setLoading(false);
    }
  }

  const input = "w-full bg-white/[0.03] border border-mustard/25 text-white placeholder:text-white/30 px-4 py-3.5 font-display text-sm tracking-wide rounded-sm focus:border-mustard focus:outline-none transition-colors";

  return (
    <section id="contact" className="bg-charcoal px-4 sm:px-6 py-24 border-t border-mustard/20">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2"
        >
          <p className="font-display text-mustard text-xs tracking-[0.4em] mb-4">— GET IN TOUCH</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white leading-tight">
            BOOK STEWPIDLY <span className="text-mustard">GOOD</span>
          </h2>
          <p className="text-white/70 mt-6 leading-relaxed">
            Tell us about your event. Festivals, weddings, parties, corporate days — we'll bring the pot.
          </p>

          <div className="mt-8 space-y-3 font-display text-sm">
            <a href="mailto:hello@stewpidlygood.no" className="flex items-center gap-3 text-white/80 hover:text-mustard transition-colors">
              <Mail size={16} className="text-mustard" /> hello@stewpidlygood.no
            </a>
            <a href="https://instagram.com/stewpidly.good" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/80 hover:text-mustard transition-colors">
              <Instagram size={16} className="text-mustard" /> @stewpidly.good
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-3 grid gap-4 p-6 sm:p-8 border border-mustard/25 rounded-sm bg-white/[0.015]"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              className={input}
              placeholder="NAME"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
            />
            <input
              className={input}
              placeholder="EMAIL"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
            />
          </div>
          <input
            className={input}
            placeholder="PHONE"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            maxLength={40}
          />
          <textarea
            className={`${input} min-h-[140px] resize-y`}
            placeholder="EVENT DETAILS — DATE, LOCATION, GUESTS"
            value={form.details}
            onChange={(e) => setForm({ ...form, details: e.target.value })}
            maxLength={2000}
          />
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02, boxShadow: "0 12px 30px -10px rgba(245,197,24,0.6)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 bg-mustard text-charcoal font-display tracking-[0.2em] text-sm px-6 py-4 rounded-sm disabled:opacity-60"
          >
            <Send size={16} /> {loading ? "SENDING..." : "SEND REQUEST"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
