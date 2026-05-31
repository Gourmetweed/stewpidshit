import logo from "@/assets/mad-pot-logo.png";
import heroBowl from "@/assets/hero-bowl.jpg";
import { Instagram, ChevronDown, CalendarCheck } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Embers } from "@/components/Embers";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden bg-charcoal px-4 sm:px-6 min-h-screen flex items-center justify-center"
    >
      {/* Bowl backdrop — soft, behind logo */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="relative w-[90vw] max-w-[760px] aspect-square opacity-[0.18] sm:opacity-[0.22]">
          <div className="absolute -inset-10 rounded-full bg-mustard/15 blur-3xl" />
          <img
            src={heroBowl}
            alt=""
            aria-hidden
            className="relative w-full h-full object-cover rounded-full"
            style={{ maskImage: "radial-gradient(circle, #000 45%, transparent 75%)", WebkitMaskImage: "radial-gradient(circle, #000 45%, transparent 75%)" }}
          />
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <Embers count={32} />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center text-center py-20"
      >
        {/* Big centered logo */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 mb-8"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 30px rgba(245,197,24,0.18)",
                "0 0 60px rgba(245,197,24,0.32)",
                "0 0 30px rgba(245,197,24,0.18)",
              ],
              scale: [1, 1.015, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full border-2 border-mustard/70 p-2 bg-charcoal"
          >
            <img src={logo} alt="STEWPIDLY GOOD logo" className="w-full h-full object-contain rounded-full" />
          </motion.div>
        </motion.div>

        {/* Wordmark — brand treatment */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-display text-white leading-[0.9] text-6xl sm:text-7xl md:text-8xl"
        >
          <span className="block">STEWPIDLY</span>
          <span className="block text-mustard">GOOD</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-display text-mustard mt-6 text-sm sm:text-base tracking-[0.4em]"
        >
          MAD BOWLS · HAPPY SOULS
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="text-white/70 mt-5 text-base sm:text-lg max-w-lg leading-relaxed"
        >
          Slow-cooked comfort food inspired by the world's greatest stews.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, boxShadow: "0 12px 30px -10px rgba(245,197,24,0.55)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-mustard text-charcoal font-display tracking-[0.15em] text-sm px-6 py-3.5 rounded-sm"
          >
            <CalendarCheck size={16} /> BOOK AN EVENT
          </motion.a>
          <motion.a
            href="https://instagram.com/stewpidly.good"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03, borderColor: "rgba(245,197,24,1)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 border border-white/30 text-white font-display tracking-[0.15em] text-sm px-6 py-3.5 rounded-sm hover:text-mustard transition-colors"
          >
            <Instagram size={16} /> FOLLOW ON INSTAGRAM
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-mustard z-10"
      >
        <span className="font-display text-[10px] tracking-[0.3em]">SCROLL</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
}
