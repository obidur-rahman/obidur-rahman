"use client";

import { useEffect } from "react";

/** Cursor-following tooltip: one shared bubble that reads any element's
 *  data-tip and rides the pointer for as long as it stays hovered. The
 *  CSS pseudo-bubble in responsive.css now only fires on keyboard focus. */
export function TipTracker() {
  useEffect(() => {
    const el = document.createElement("div");
    el.className = "tip-live";
    el.setAttribute("aria-hidden", "true");
    document.body.appendChild(el);

    let active: Element | null = null;
    let visible = false;

    const place = (x: number, y: number) => {
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      const px = Math.min(x + 14, window.innerWidth - w - 8);
      /* Rest above the cursor; drop below it only when the top edge
         hasn't room for the bubble. */
      let py = y - h - 14;
      if (py < 8) py = y + 20;
      el.style.transform = `translate3d(${Math.max(8, px)}px, ${py}px, 0)`;
    };

    const show = (target: Element, x: number, y: number) => {
      const text = target.getAttribute("data-tip");
      if (!text) return hide();
      if (el.textContent !== text) el.textContent = text;
      place(x, y);
      if (!visible) {
        el.setAttribute("data-show", "");
        visible = true;
      }
    };

    function hide() {
      active = null;
      if (visible) {
        el.removeAttribute("data-show");
        visible = false;
      }
    }

    const tipAt = (node: EventTarget | null) =>
      node instanceof Element ? node.closest("[data-tip]") : null;

    const onOver = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const found = tipAt(e.target);
      if (found) {
        active = found;
        show(found, e.clientX, e.clientY);
      } else if (active) {
        hide();
      }
    };

    const onMove = (e: PointerEvent) => {
      if (!active) return;
      const found = tipAt(e.target);
      if (found !== active) {
        if (!found) return hide();
        active = found;
      }
      show(active, e.clientX, e.clientY);
    };

    const onOut = (e: PointerEvent) => {
      const to = e.relatedTarget;
      if (active && (!(to instanceof Node) || !active.contains(to))) hide();
    };

    window.addEventListener("pointerover", onOver, true);
    window.addEventListener("pointermove", onMove, true);
    window.addEventListener("pointerout", onOut, true);
    window.addEventListener("blur", hide);
    window.addEventListener("scroll", hide, true);

    return () => {
      window.removeEventListener("pointerover", onOver, true);
      window.removeEventListener("pointermove", onMove, true);
      window.removeEventListener("pointerout", onOut, true);
      window.removeEventListener("blur", hide);
      window.removeEventListener("scroll", hide, true);
      el.remove();
    };
  }, []);

  return null;
}
