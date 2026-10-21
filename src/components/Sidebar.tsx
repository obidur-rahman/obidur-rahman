"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CloseIcon, MenuIcon } from "@/components/Icons";

/** Primary routes, numbered like a magazine table of contents. */
const primary = [
  { href: "/", label: "work" },
  { href: "/#research", label: "research" },
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

/** Bump by hand whenever the content of the site changes. */
const LAST_UPDATED = "21-10-2026";

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

  /* Hash links jump to a section, so only real routes carry the marker. */
  const isActive = (href: string) => {
    if (href.includes("#")) return false;
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  };

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
            AI engineer and researcher working on LLMs and AI-native apps.
          </p>
          <p className="side-bio side-bio--dim">
            Math undergrad at the{" "}
            <a href="https://www.cu.ac.bd" target="_blank" rel="noopener noreferrer">
              University of Chittagong
            </a>
            . R&amp;D engineer at{" "}
            <a href="https://northaxis.xyz" target="_blank" rel="noopener noreferrer">
              NorthAxis
            </a>{" "}
            and student researcher at{" "}
            <a href="https://elitelab.ai" target="_blank" rel="noopener noreferrer">
              Elite Research Lab
            </a>
            .
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
          <span className="side-updated">
            last updated <span className="side-updated-date">{LAST_UPDATED}</span>
          </span>
        </div>
      </div>
    </aside>
  );
}
