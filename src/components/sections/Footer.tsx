import logo from "@/assets/mad-pot-logo.png";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-mustard/30 px-4 sm:px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Stewpidly Good" className="w-10 h-10 rounded-full border border-mustard/40" />
          <div>
            <p className="font-display text-base tracking-wider text-white">STEWPIDLY <span className="text-mustard">GOOD</span></p>
            <p className="text-white/50 text-xs">Mad bowls. Happy souls.</p>
          </div>
        </div>
        <a href="https://instagram.com/stewpidly.good" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/70 hover:text-mustard font-display text-xs tracking-[0.2em]">
          <Instagram size={16} /> @STEWPIDLY.GOOD
        </a>
        <p className="text-white/40 text-xs font-display tracking-[0.2em]">© {new Date().getFullYear()} STEWPIDLY GOOD</p>
      </div>
    </footer>
  );
}
