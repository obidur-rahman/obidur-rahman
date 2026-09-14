"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const links = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      className="ob-nav"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="ob-nav-inner">
        <Link className="ob-nav-name" href="/">
          Obidur Rahman
        </Link>
        <div className="ob-nav-links">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className="ob-nav-link"
                data-active={active}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
