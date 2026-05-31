import featured from "@/assets/featured-bowl.jpg";
import { motion } from "framer-motion";

export function FeaturedBowl() {
  return (
    <section id="featured" className="bg-charcoal px-4 sm:px-6 py-24 border-t border-mustard/20 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-8 bg-mustard/10 blur-3xl rounded-full" aria-hidden />
          <img
            src={featured}
            alt="#1 Stewpid Chicken bowl"
            loading="lazy"
            width={1080}
            height={1920}
            className="relative w-full h-[60vh] sm:h-[70vh] object-cover rounded-sm border border-mustard/20"
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute top-5 left-5 bg-mustard text-charcoal font-display text-[11px] tracking-[0.25em] px-3 py-2 rounded-sm"
          >
            LIMITED BOWLS AVAILABLE
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <p className="font-display text-mustard text-xs tracking-[0.4em] mb-4">— FEATURED BOWL</p>
          <h2 className="font-display text-5xl sm:text-6xl text-white leading-[0.95]">
            <span className="text-mustard">#1</span> STEWPID<br />CHICKEN
          </h2>
          <p className="text-white/75 mt-6 text-base sm:text-lg leading-relaxed max-w-md">
            Slow-cooked chicken stew in a rich tomato sauce served over pasta and finished with fresh herbs, olives and cornichons.
          </p>
          <div className="mt-8 flex flex-wrap gap-2 font-display text-[11px] tracking-[0.25em] text-white/70">
            {["SLOW-COOKED", "TOMATO BASE", "FRESH HERBS", "OLIVES", "CORNICHONS"].map((t) => (
              <span key={t} className="border border-mustard/30 px-3 py-1.5 rounded-sm">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
