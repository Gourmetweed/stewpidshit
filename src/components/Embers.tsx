import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

/**
 * Constant, visible mustard-tinted embers + drifting steam.
 * Client-only to avoid SSR hydration mismatches from Math.random().
 */
export function Embers({ count = 36, className = "" }: { count?: number; className?: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const particles = useMemo(
    () =>
      Array.from({ length: Math.floor(count / 4) }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 1.2 + Math.random() * 2,
        delay: Math.random() * 10,
        duration: 12 + Math.random() * 10,
        drift: (Math.random() - 0.5) * 60,
        opacity: 0.12 + Math.random() * 0.18,
        flicker: 0.4 + Math.random() * 0.5,
      })),
    [count],
  );

  const steam = useMemo(
    () =>
      Array.from({ length: Math.max(10, Math.floor(count / 1.6)) }).map((_, i) => ({
        id: i,
        left: 2 + Math.random() * 96,
        size: 160 + Math.random() * 220,
        delay: Math.random() * 12,
        duration: 16 + Math.random() * 12,
        drift: (Math.random() - 0.5) * 120,
        opacity: 0.08 + Math.random() * 0.10,
      })),
    [count],
  );

  if (!mounted) {
    return <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden />;
  }

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {steam.map((s) => (
        <motion.span
          key={`st-${s.id}`}
          initial={{ y: "115%", x: 0, opacity: 0 }}
          animate={{ y: "-35%", x: s.drift, opacity: [0, s.opacity, s.opacity * 0.8, 0] }}
          transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: "linear" }}
          style={{
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            background: "radial-gradient(circle, rgba(255,243,200,0.28), rgba(245,197,24,0.10) 45%, rgba(245,197,24,0) 75%)",
            filter: "blur(28px)",
          }}
          className="absolute bottom-0 rounded-full"
        />
      ))}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ y: "112%", x: 0, opacity: 0 }}
          animate={{
            y: "-25%",
            x: [0, p.drift * 0.5, p.drift],
            opacity: [0, p.opacity, p.opacity * p.flicker, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            boxShadow: `0 0 ${p.size * 3}px rgba(245,197,24,0.55), 0 0 ${p.size * 6}px rgba(245,197,24,0.20)`,
          }}
          className="absolute bottom-0 rounded-full bg-mustard"
        />
      ))}
    </div>
  );
}
