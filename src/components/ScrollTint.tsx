"use client";

import { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";

/** A paper-white veil that fades in across the top edge once the page
 *  starts moving, so content slides under a soft wash instead of a hard
 *  line. Purely visual; sits under the nav and never takes the pointer. */
export function ScrollTint() {
  const { scrollY } = useScroll();
  const [on, setOn] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setOn(y > 48));

  return <div className="scroll-tint" data-on={on ? "" : undefined} aria-hidden />;
}
