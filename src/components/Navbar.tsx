"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="ob-nav">
      <div className="ob-nav-inner">
        <Link className="ob-nav-link" href="/">home</Link>
        <div className="ob-nav-links">
          <Link className="ob-nav-link" href="/#work">work</Link>
{/*}          <Link className="ob-nav-link" href="/playground">playground</Link> */}
          <Link className="ob-nav-link" href="/about">about</Link>
        </div>
      </div>
    </nav>
  );
}
