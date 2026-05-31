import { motion } from "framer-motion";
import gallery3 from "@/assets/gallery-3.jpg";

export function Story() {
  return (
    <section id="story" className="bg-charcoal px-4 sm:px-6 py-24 border-t border-mustard/20 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-2"
        >
          <img
            src={gallery3}
            alt="Cast iron pot over open flame"
            loading="lazy"
            width={1024}
            height={1280}
            className="w-full h-[55vh] object-cover rounded-sm border border-mustard/20"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <p className="font-display text-mustard text-xs tracking-[0.4em] mb-4">— OUR STORY</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white leading-tight">
            BORN IN <span className="text-mustard">PORTUGAL.</span><br />RAISED BY FIRE.
          </h2>
          <div className="mt-6 space-y-4 text-white/75 text-base sm:text-lg leading-relaxed max-w-xl">
            <p>
              Stewpidly Good started in a Portuguese kitchen, around a family table, with a wood-fired pot that never really stopped simmering.
            </p>
            <p>
              We grew up believing the best meals weren't rushed — they were waited for. Hours of patience, simple ingredients, and the kind of flavour you can't fake.
            </p>
            <p>
              That's the bowl we're still cooking today.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
