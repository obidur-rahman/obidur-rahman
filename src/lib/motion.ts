import { useEffect, useState } from "react";

/** One expo-out curve used across the whole site. */
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Spring for the scroll progress bar. */
export const SPRING = { stiffness: 140, damping: 26, mass: 0.4 } as const;

/** True once the OS asks for reduced motion (client only). */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}
