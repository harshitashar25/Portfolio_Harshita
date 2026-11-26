import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className, y = 28 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({ id, eyebrow, children, sub }: { id: string; eyebrow: string; children: ReactNode; sub?: string }) {
  return (
    <Reveal className="mb-12 max-w-4xl">
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id} className="h-section mt-5">{children}</h2>
      {sub && <p className="mt-5 max-w-2xl text-lg text-ink-soft">{sub}</p>}
    </Reveal>
  );
}

export const bg = {
  yellow: "bg-sun",
  lilac: "bg-lilac",
  white: "bg-white",
  lav: "bg-lav-pale",
} as const;
