import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";

const links = [
  { href: "#home", label: "HOME" },
  { href: "#what", label: "WHAT WE DO" },
  { href: "#featured", label: "THE BOWL" },
  { href: "#events", label: "EVENTS" },
  { href: "#story", label: "STORY" },
  { href: "#gallery", label: "GALLERY" },
  { href: "#contact", label: "CONTACT" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-charcoal/85 backdrop-blur-md border-b border-mustard/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <a href="#home" className="font-display text-lg sm:text-xl tracking-wider text-white">STEWPIDLY <span className="text-mustard">GOOD</span></a>
        <nav className="hidden lg:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="font-display text-xs text-white/80 hover:text-mustard transition-colors tracking-[0.15em]">{l.label}</a>
          ))}
          <a href="https://instagram.com/stewpidly.good" target="_blank" rel="noreferrer" className="text-white/80 hover:text-mustard transition-colors" aria-label="Instagram">
            <Instagram size={18} />
          </a>
        </nav>
        <button className="lg:hidden text-mustard cursor-pointer" onClick={() => setOpen(v => !v)} aria-label="menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-mustard/30 bg-charcoal">
          <div className="px-4 py-4 grid gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-display text-sm text-white hover:text-mustard tracking-[0.15em]">{l.label}</a>
            ))}
            <a href="https://instagram.com/stewpidly.good" target="_blank" rel="noreferrer" className="font-display text-sm text-mustard tracking-[0.15em] inline-flex items-center gap-2">
              <Instagram size={16} /> @STEWPIDLY.GOOD
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
