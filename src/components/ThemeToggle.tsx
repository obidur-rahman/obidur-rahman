"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

/** Read the theme the inline script already applied. */
function currentTheme(): "light" | "dark" {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(currentTheme());
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch { /* storage unavailable */ }
    setTheme(next);
  };

  const dark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggle}
      className="theme-toggle"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      initial={{ opacity: 0 }}
      animate={{ opacity: mounted ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      style={{ cursor: "pointer" }}
    >
      <motion.span
        className="theme-toggle-knob"
        animate={mounted ? { x: dark ? 18 : 0 } : { x: dark ? 18 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {dark ? (
          /* Moon */
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          /* Sun */
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
            <path
              d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M19.4 4.6l-2.1 2.1M6.7 17.3l-2.1 2.1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </motion.span>
      <span className="theme-toggle-track" aria-hidden />
    </motion.button>
  );
}
