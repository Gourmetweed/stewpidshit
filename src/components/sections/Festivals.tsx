import { Music, Utensils, Building2, Users } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: Music, label: "MUSIC FESTIVALS" },
  { icon: Utensils, label: "FOOD FESTIVALS" },
  { icon: Users, label: "PRIVATE EVENTS" },
  { icon: Building2, label: "CORPORATE CATERING" },
];

export function Festivals() {
  return (
    <section id="events" className="relative bg-charcoal px-4 sm:px-6 py-24 border-t border-mustard/20 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-mustard text-xs tracking-[0.4em] mb-4"
        >
          — TAKE US ANYWHERE
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-tight"
        >
          FESTIVALS <span className="text-mustard">•</span> EVENTS <span className="text-mustard">•</span> CATERING
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-white/70 mt-6 max-w-2xl mx-auto text-base sm:text-lg"
        >
          Available for music festivals, food festivals, private events and corporate catering.
        </motion.p>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4, borderColor: "rgba(245,197,24,0.9)" }}
              className="p-6 border border-mustard/25 bg-white/[0.02] rounded-sm flex flex-col items-center gap-3"
            >
              <it.icon className="text-mustard" size={28} />
              <p className="font-display text-white text-xs tracking-[0.2em]">{it.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="mailto:hello@stewpidlygood.no"
          whileHover={{ scale: 1.04, boxShadow: "0 12px 30px -10px rgba(245,197,24,0.6)" }}
          whileTap={{ scale: 0.97 }}
          className="mt-12 inline-flex items-center gap-2 bg-mustard text-charcoal font-display tracking-[0.2em] text-sm px-8 py-4 rounded-sm"
        >
          GET IN TOUCH
        </motion.a>
      </div>
    </section>
  );
}
