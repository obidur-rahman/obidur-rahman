"use client";

import { motion } from "motion/react";
import { EASE, useReducedMotion } from "@/lib/motion";

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

/** Chunky L-bracket glyph (the chevron shapes in the reference). */
export function Bracket({
  size = 70,
  color = "rgba(255,255,255,0.08)",
  flip = false,
  drift = false,
  delay = 0,
}: {
  size?: number;
  color?: string;
  flip?: boolean;
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
      style={{
        transform: flip ? "scaleX(-1)" : undefined,
        ...(drift && !reduced ? { willChange: "transform" } : {}),
      }}
      animate={drift && !reduced ? { y: [0, 10, 0], x: [0, -6, 0] } : undefined}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <path
        d="M12 0 H62 Q100 0 100 38 V88 H62 V42 Q62 38 58 38 H12 Z"
        fill={color}
      />
    </motion.svg>
  );
}

/** Plus mark, optional slow spin. */
export function Plus({
  size = 34,
  color = "var(--w-mute)",
  spin = false,
  delay = 0,
}: {
  size?: number;
  color?: string;
  spin?: boolean;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 40 40"
      animate={spin && !reduced ? { rotate: 360 } : undefined}
      transition={{ duration: 24, repeat: Infinity, ease: "linear", delay }}
    >
      <path d="M20 4 V36 M4 20 H36" stroke={color} strokeWidth="2" />
    </motion.svg>
  );
}

/** Faux barcode with scanning shimmer. */
export function Barcode({
  width = 150,
  height = 34,
  dark = true,
  label = "OBR·2026",
}: {
  width?: number;
  height?: number;
  dark?: boolean;
  label?: string;
}) {
  const reduced = useReducedMotion();
  const bars = Array.from({ length: 34 }, (_, i) => {
    const w = ((i * 7919) % 4) + 1;
    return <span key={i} style={{ width: w, marginRight: ((i * 104729) % 3) + 1, height: "100%", background: dark ? "var(--w)" : "var(--ink-dark)", display: "inline-block" }} />;
  });
  return (
    <div aria-hidden className="z-barcode" style={{ width }}>
      <div className="z-barcode-bars" style={{ height }}>{bars}</div>
      <motion.div
        className="z-barcode-scan"
        style={{ background: dark ? "var(--red)" : "var(--red)" }}
        animate={reduced ? undefined : { x: ["-10%", "110%"] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 2.2 }}
      />
      <span className="z-barcode-label" style={{ color: dark ? "var(--w-soft)" : "var(--ink-soft-dark)" }}>
        {label}
      </span>
    </div>
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
