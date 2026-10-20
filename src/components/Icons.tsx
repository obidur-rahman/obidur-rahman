/** Inline 24×24 interface icons — no icon dependency. */

type IconProps = { size?: number; className?: string };

/** Interface marks: hairline strokes so they sit level with the brand glyphs. */
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Menu toggle — three hairlines, the same weight as the rules. */
export function MenuIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" width={size} height={size} className={className} {...stroke}>
      <path d="M3.5 8h17" />
      <path d="M3.5 13h17" />
      <path d="M3.5 18h17" />
    </svg>
  );
}

export function CloseIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" width={size} height={size} className={className} {...stroke}>
      <path d="m5.5 5.5 13 13" />
      <path d="m18.5 5.5-13 13" />
    </svg>
  );
}
