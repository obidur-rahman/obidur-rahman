"use client";

import { motion, useReducedMotion } from "motion/react";

/** Corner bracket: ⌜ ⌝ ⌞ ⌟ drawn with borders. */
export function Corner({
  pos,
  size = 28,
  color = "var(--w)",
  className = "",
}: {
  pos: "tl" | "tr" | "bl" | "br";
  size?: number;
  color?: string;
  className?: string;
}) {
  const borderStyle: React.CSSProperties = {
    borderTopWidth: pos === "tl" || pos === "tr" ? 2 : 0,
    borderBottomWidth: pos === "bl" || pos === "br" ? 2 : 0,
    borderLeftWidth: pos === "tl" || pos === "bl" ? 2 : 0,
    borderRightWidth: pos === "tr" || pos === "br" ? 2 : 0,
  };
  return (
    <span
      aria-hidden
      className={`z-corner ${className}`}
      style={{
        width: size,
        height: size,
        borderColor: color,
        ...borderStyle,
      }}
    />
  );
}

/** Chunky X glyph, outlined or filled. */
export function Cross({
  size = 90,
  fill = false,
  color = "var(--w)",
  drift = false,
  delay = 0,
}: {
  size?: number;
  fill?: boolean;
  color?: string;
  drift?: boolean;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={drift && !reduced ? { willChange: "transform" } : undefined}
      animate={drift && !reduced ? { y: [0, -12, 0], rotate: [0, 2, 0] } : undefined}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <path
        d="M30 8 L50 28 L70 8 L92 30 L72 50 L92 70 L70 92 L50 72 L30 92 L8 70 L28 50 L8 30 Z"
        fill={fill ? color : "none"}
        stroke={color}
        strokeWidth={fill ? 0 : 2.5}
      />
    </motion.svg>
  );
}

/** Tiny mono micro-label, e.g. "12 COL · X ROWS". */
export function Micro({
  children,
  color = "var(--w-mute)",
  className = "",
}: {
  children: React.ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <span aria-hidden className={`z-micro ${className}`} style={{ color }}>
      {children}
    </span>
  );
}
