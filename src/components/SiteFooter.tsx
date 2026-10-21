"use client";

import { useEffect, useState } from "react";

/** The site's closing row: the design credit on the left, the live
 *  Chittagong clock on the right. Shared by the home and about pages. */
export function SiteFooter() {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const tick = () =>
      setNow(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
          .format(new Date())
          .toLowerCase()
          .replace(" ", "")
      );
    const id = window.setInterval(tick, 30000);
    const first = window.setTimeout(tick, 0);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(first);
    };
  }, []);

  return (
    <div className="ab-foot">
      <p className="ab-credit">
        I plagiarised the website design from{" "}
        <a
          className="ab-inline-link"
          href="https://www.christina-lu.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          christina lu
        </a>{" "}
        :3
      </p>
      {now ? <p className="ab-clock">{now}, chittagong</p> : null}
    </div>
  );
}
