import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, alt: "Stirring stew", span: "row-span-2" },
  { src: g2, alt: "Ingredients", span: "" },
  { src: g4, alt: "Pouring sauce", span: "" },
  { src: g5, alt: "Finishing herbs", span: "" },
  { src: g6, alt: "Bubbling stew", span: "" },
  { src: g3, alt: "Pot over flame", span: "row-span-2" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-charcoal px-4 sm:px-6 py-24 border-t border-mustard/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <p className="font-display text-mustard text-xs tracking-[0.4em] mb-4">— GALLERY</p>
            <h2 className="font-display text-4xl sm:text-5xl text-white leading-tight">
              STEAM. SAUCE. <span className="text-mustard">FIRE.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-sm">A look inside the pot — the textures, the process, the obsession.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden rounded-sm border border-mustard/15 ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
