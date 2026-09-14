"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE, useReducedMotion } from "@/lib/motion";
import { Corner, Cross, Micro } from "@/components/Glyphs";

/**
 * Full-screen intro on first visit of a session: dark poster with the
 * mark and a red line filling like a barcode scan, then the whole
 * sheet lifts away. Skipped entirely for reduced motion.
 */
export function Intro() {
  const reduced = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (reduced) return;
    let played = false;
    try {
      played = sessionStorage.getItem("intro") === "1";
    } catch { /* storage unavailable */ }
    if (played) return;

    setShow(true);
    document.documentElement.style.overflow = "hidden";
    const t = setTimeout(() => {
      setShow(false);
      document.documentElement.style.overflow = "";
      try {
        sessionStorage.setItem("intro", "1");
      } catch { /* storage unavailable */ }
    }, 1600);
    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = "";
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="intro"
          key="intro"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <div className="intro-glyphs" aria-hidden>
            <Corner pos="tl" size={30} color="var(--w-mute)" />
            <Corner pos="br" size={30} color="var(--w-mute)" />
            <div style={{ position: "absolute", top: "18%", right: "12%" }}>
              <Cross size={72} color="rgba(255,255,255,0.1)" drift />
            </div>
            <div style={{ position: "absolute", bottom: "20%", left: "10%" }}>
              <Cross size={48} fill color="rgba(255,255,255,0.05)" drift delay={0.8} />
            </div>
          </div>
          <motion.div
            className="intro-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <Micro color="var(--w-soft)">O.RAHMAN</Micro>
            <div className="intro-bar" aria-hidden>
              <motion.div
                className="intro-bar-fill"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.05, ease: "easeInOut", delay: 0.15 }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
