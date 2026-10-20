"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CloseIcon, MenuIcon } from "@/components/Icons";

/** Primary routes, numbered like a magazine table of contents. */
const primary = [
  { href: "/", label: "work" },
  { href: "/about", label: "about" },
];

/** Elsewhere — everything that leaves the site. */
const elsewhere = [
  { href: "mailto:obidur.shawal@gmail.com", label: "email", external: false },
  {
    href: "https://linkedin.com/in/obidur-rahman-shawal",
    label: "linkedin",
    external: true,
  },
  { href: "https://github.com/obidur-rahman", label: "github", external: true },
  { href: "/obidur_cv.pdf", label: "resume", external: true },
];

const num = (i: number) => String(i + 1).padStart(2, "0");

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Escape closes; lock the page behind the open drawer.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.documentElement.setAttribute("data-side-open", "");
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.removeAttribute("data-side-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <aside className="side" data-open={open ? "" : undefined}>
      <div className="side-bar">
        <Link className="side-bar-name" href="/" onClick={() => setOpen(false)}>
          Obidur <span className="side-surname">Rahman</span>
        </Link>
        <button
          type="button"
          className="side-burger"
          aria-expanded={open}
          aria-controls="side-panel"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      <div className="side-panel" id="side-panel">
        <div className="side-intro">
          <Link className="side-name" href="/" onClick={() => setOpen(false)}>
            Obidur <span className="side-surname">Rahman</span>
          </Link>
          <p className="side-bio">
            Research engineer in Chittagong. I build AI that runs on ordinary laptops, for people
            who need it.
          </p>
          <p className="side-bio side-bio--dim">
            BSc in Mathematics at the University of Chittagong. Student researcher at Elite
            Research Lab, R&amp;D engineer at NorthAxis.
          </p>
        </div>

        <nav className="side-nav" aria-label="Sections">
          {primary.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="side-link"
              data-active={isActive(l.href) ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              <span className="side-num">{num(i)}.</span>
              <span className="side-label">{l.label}</span>
            </Link>
          ))}
        </nav>

        <hr className="side-rule" />

        <nav className="side-nav side-nav--out" aria-label="Elsewhere">
          {elsewhere.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              className="side-link"
              onClick={() => setOpen(false)}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className="side-num">{num(primary.length + i)}.</span>
              <span className="side-label">{l.label}</span>
              <span className="side-arrow" aria-hidden>
                ↗
              </span>
            </a>
          ))}
        </nav>

        <div className="side-foot">
          <span className="side-copy">©2026 Obidur Rahman</span>
        </div>
      </div>
    </aside>
  );
}
