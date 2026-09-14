"use client";

import { motion } from "motion/react";
import { EASE, useReducedMotion } from "@/lib/motion";

/**
 * Section rail in the editorial style: a vertical Bangla display word
 * on the left, a thin rule with a slow-tracing line, and an arrow.
 */
export function SectionRail({
  bn,
  en,
  children,
}: {
  bn: string;
  en: string;
  children: React.ReactNode;
}) {
  const reduced = useReducedMotion();

  return (
    <section className="ed-section">
      <div className="ed-rail">
        <motion.h2
          className="ed-rail-word"
          lang="bn"
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {bn}
        </motion.h2>
        <div className="ed-rail-meta">
          <span className="ed-rail-en">{en}</span>
          <motion.span
            className="ed-rail-line"
            aria-hidden
            initial={reduced ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          />
          <span className="ed-rail-arrow" aria-hidden>↓</span>
        </div>
      </div>
      <div className="ed-section-body">{children}</div>
    </section>
  );
}
