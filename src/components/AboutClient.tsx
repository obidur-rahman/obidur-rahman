"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { EASE } from "@/lib/motion";

/** One row of a row-group: mono key, a value or two, and an arrow when it links. */
function Row({
  when,
  lead,
  note,
  href,
  tip,
  i = 0,
}: {
  when: string;
  lead: string;
  note?: string;
  href?: string;
  tip?: string;
  i?: number;
}) {
  const reduced = useReducedMotion();
  const body = (
    <>
      <span className="ab-row-key">{when}</span>
      <span className="ab-row-body">
        <span className="ab-row-lead">{lead}</span>
        {note ? <span className="ab-row-note">{note}</span> : null}
      </span>
      <span className="ab-row-arrow" aria-hidden>
        {href ? "→" : ""}
      </span>
    </>
  );

  const anim = {
    initial: reduced ? false : { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-30px" },
    transition: { delay: i * 0.05, duration: 0.45, ease: EASE },
  };

  return href ? (
    <motion.a
      className="ab-row"
      href={href}
      data-tip={tip}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      {...anim}
    >
      {body}
    </motion.a>
  ) : (
    <motion.div className="ab-row" {...anim}>
      {body}
    </motion.div>
  );
}

/** A label in the gutter plus a stack of rows beside it. */
function Group({
  label,
  animate = true,
  children,
}: {
  label: string;
  animate?: boolean;
  children: React.ReactNode;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.section
      className="ab-block"
      initial={reduced || !animate ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <h2 className="ab-block-label">{label}</h2>
      <div className="ab-rows">{children}</div>
    </motion.section>
  );
}

const toolkit = [
  { when: "AI and ML", lead: "PyTorch · Computer vision · Agentic AI · RAG · LangChain" },
  { when: "Programming", lead: "Python · TypeScript · FastAPI · Next.js · React.js · Git" },
  {
    when: "Research",
    lead: "Statistical analysis · Experimental evaluation · LLMOps · MLOps",
  },
];

const recognition = [
  {
    when: "2025",
    lead: "Best Presenter, 24th International Mathematics Conference",
    note: "Recognized for delivering the session's best presentation.",
  },
];

/* Objects scattered across the top of the page, after the reference's
   cut-out collage. x/y/w are percentages of the field, `a` is each tile's
   own aspect ratio; dashed boxes stand in for the photographs still to come. */
type Tile = {
  x: number;
  y: number;
  w: number;
  a: string;
  n?: string;
  src?: string;
  alt?: string;
  fit?: "cover" | "contain";
  tip?: string;
};

/* Tiles drift up and fade in one after another when the page loads. */
const tileVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const collage: Tile[] = [
  {
    x: 4,
    y: 0,
    w: 11,
    a: "1 / 1",
    src: "/math.png",
    alt: "Handwritten mathematics",
    tip: "notes from my first love, pure maths",
  },
  {
    x: 36,
    y: 6,
    w: 18,
    a: "1 / 2",
    src: "/art.jpg",
    alt: "Ink-wash landscape drawn in blue-black clouds",
    tip: "ink clouds I paint when a proof won't close",
  },
  {
    x: 62,
    y: 14,
    w: 14,
    a: "2 / 3",
    src: "/disco.png",
    alt: "Illustration: a figure with a mirrored disco ball for a head",
    fit: "contain",
    tip: "that's me, head full of disco",
  },
  { x: 62, y: 0, w: 9, a: "1 / 1", n: "01" },
  { x: 84, y: 10, w: 15, a: "3 / 2", n: "02" },
  { x: 3, y: 16, w: 8, a: "3 / 4", n: "03" },
  { x: 18, y: 24, w: 12, a: "1 / 1", n: "04" },
  { x: 78, y: 40, w: 15, a: "4 / 3", n: "05" },
  { x: 10, y: 46, w: 10, a: "1 / 1", n: "06" },
  { x: 60, y: 52, w: 13, a: "3 / 4", n: "07" },
  { x: 88, y: 60, w: 8, a: "2 / 3", n: "08" },
  { x: 34, y: 64, w: 13, a: "2 / 3", n: "09" },
  { x: 3, y: 72, w: 18, a: "3 / 2", n: "10" },
  { x: 74, y: 78, w: 20, a: "8 / 5", n: "11" },
];

/* The four photographs that close the page. Only the first has a real
   file; the rest stay dashed boxes. */
const photos: { src?: string; alt?: string }[] = [
  { src: "/me.png", alt: "Obidur Rahman by the water in Chittagong" },
  {},
  {},
  {},
];

export function AboutClient() {
  const reduced = useReducedMotion();
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

  const rise = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: EASE },
  });

  return (
    <div>
      <div className="ab-page">
        <div className="ab-main">
          <p className="ab-kicker">About</p>

          <motion.div
            className="ab-collage"
            aria-hidden
            initial={reduced ? false : "hidden"}
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.045 } } }}
          >
            {collage.map((t, i) =>
              t.src ? (
                <motion.span
                  key={i}
                  className="ab-tile ab-tile--img"
                  data-tip={t.tip}
                  data-tip-pos={t.tip ? "over" : undefined}
                  style={{ left: `${t.x}%`, top: `${t.y}%`, width: `${t.w}%`, aspectRatio: t.a }}
                  variants={tileVariants}
                >
                  <Image
                    src={t.src}
                    alt={t.alt ?? ""}
                    width={t.fit === "contain" ? 848 : 681}
                    height={t.fit === "contain" ? 1176 : 1376}
                    sizes="(max-width: 760px) 40vw, 22vw"
                    style={t.fit ? { objectFit: t.fit } : undefined}
                  />
                </motion.span>
              ) : (
                <motion.span
                  key={i}
                  className="ab-tile ab-tile--ph"
                  style={{ left: `${t.x}%`, top: `${t.y}%`, width: `${t.w}%`, aspectRatio: t.a }}
                  variants={tileVariants}
                >
                  {t.n}
                </motion.span>
              )
            )}
          </motion.div>

          <motion.div className="ab-prose" {...rise(0)}>
            <p>
              Hi there! I&apos;m Shawal, an AI engineer and researcher based in Chittagong. I
              started in pure mathematics at CU, then shifted my focus to AI systems. I&apos;m
              currently a student researcher at{" "}
              <a
                className="ab-inline-link"
                href="https://elitelab.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Elite Research Lab
              </a>
              , doing research on LLM bias, image classification and class imbalance, while
              working as an R&amp;D engineer at{" "}
              <a
                className="ab-inline-link"
                href="https://northaxis.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                NorthAxis
              </a>
              .
            </p>
            <p>Some things I&apos;m working on at the moment include:</p>
            <ul className="ab-list">
              <li>
                A paper under review on the viability of traditional, modern and hybrid
                architectures for leaf disease detection in a CPU-constrained system.
              </li>
              <li>
                Analysing and theorising the biases in large language models: how they form, and why
                they behave the way they do.
              </li>
              <li>
                Surviving and graduating from a pure mathematics bachelor&apos;s at the University
                of Chittagong.
              </li>
              <li>Tutoring and teaching mathematics and science to students.</li>
            </ul>
            <p>
              You can check out more about me on{" "}
              <a
                className="ab-inline-link"
                href="https://linkedin.com/in/obidur-rahman-shawal"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              and my projects on{" "}
              <a
                className="ab-inline-link"
                href="https://github.com/obidur-rahman"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </p>
          </motion.div>

          <motion.div className="ab-cta" {...rise(0.06)}>
            <p className="ab-cta-title">Let&apos;s make something together!</p>
            <p className="ab-cta-line">
              Graduating in 2027 and open to full-time roles and research collaborations. You can
              reach me at{" "}
              <a className="ab-inline-link" href="mailto:obidur.shawal@gmail.com">
                obidur.shawal@gmail.com
              </a>
              .
            </p>
          </motion.div>

          <Group label="Toolkit">
            {toolkit.map((t, i) => (
              <Row key={t.when} when={t.when} lead={t.lead} i={i} />
            ))}
          </Group>

          <Group label="Recognition">
            {recognition.map((r, i) => (
              <Row key={r.lead} when={r.when} lead={r.lead} note={r.note} i={i} />
            ))}
          </Group>

          <Group label="Languages">
            <Row
              when="Spoken"
              lead="Bengali · বাংলা · Chittagonian · চাটগাঁইয়া (native)"
              note="English (fluent) · Hindi · हिन्दी and Urdu · اردو (conversational)"
            />
            <Row
              when="Studied"
              lead="Arabic · العربية (reading)"
              note="Japanese · 日本語 (learning)"
            />
          </Group>

          <Group label="Off the clock">
            <Row
              when="Hobbies"
              lead="Video games, long-form video essays, clean interfaces and good typography."
              note="Always happy to talk about AI, games, design, or the occasional internet meme."
            />
          </Group>

          <div className="ab-photos" aria-hidden>
            {photos.map((p, i) =>
              p.src ? (
                <span key={i} className="ab-photo ab-photo--img">
                  <Image
                    src={p.src}
                    alt={p.alt ?? ""}
                    width={1536}
                    height={1536}
                    sizes="(max-width: 760px) 50vw, 25vw"
                  />
                </span>
              ) : (
                <span key={i} className="ab-photo">
                  {String(i + 1).padStart(2, "0")}
                </span>
              )
            )}
          </div>

          {now ? <p className="ab-clock">{now}, chittagong</p> : null}
        </div>
      </div>
    </div>
  );
}
