import { Globe2, Flame, PartyPopper } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  { icon: Globe2, title: "GLOBAL COMFORT FOOD", body: "Inspired by the world's greatest stews and braises." },
  { icon: Flame, title: "SLOW COOKED", body: "Built for flavour, not shortcuts." },
  { icon: PartyPopper, title: "EVENT READY", body: "Perfect for festivals, catering, pop-ups and private events." },
];

export function WhatWeDo() {
  return (
    <section id="what" className="bg-charcoal px-4 sm:px-6 py-24 border-t border-mustard/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="font-display text-mustard text-xs tracking-[0.4em] mb-4">— WHAT WE DO</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white leading-tight">
            WHAT IS <span className="text-mustard">STEWPIDLY GOOD?</span>
          </h2>
          <p className="text-white/70 mt-6 text-base sm:text-lg leading-relaxed">
            Stewpidly Good celebrates slow-cooked comfort food. From Portuguese classics to global favourites, every bowl is built around patience, flavour and honest cooking.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, borderColor: "rgba(245,197,24,0.8)" }}
              className="p-7 border border-mustard/25 bg-white/[0.02] rounded-sm transition-colors"
            >
              <c.icon className="text-mustard mb-5" size={28} />
              <h3 className="font-display text-white text-xl tracking-[0.05em]">{c.title}</h3>
              <p className="text-white/65 mt-3 leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
