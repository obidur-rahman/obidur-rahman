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
      target="_blank"
      rel="noopener noreferrer"
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

const contact = [
  {
    when: "GitHub",
    lead: "github.com/obidur-rahman",
    href: "https://github.com/obidur-rahman",
    tip: "code, papers, and messy experiments",
  },
];

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
    tip: "that's me — head full of disco",
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

          <div className="ab-collage" aria-hidden>
            {collage.map((t, i) =>
              t.src ? (
                <span
                  key={i}
                  className="ab-tile ab-tile--img"
                  data-tip={t.tip}
                  data-tip-pos={t.tip ? "over" : undefined}
                  style={{ left: `${t.x}%`, top: `${t.y}%`, width: `${t.w}%`, aspectRatio: t.a }}
                >
                  <Image
                    src={t.src}
                    alt={t.alt ?? ""}
                    width={t.fit === "contain" ? 848 : 681}
                    height={t.fit === "contain" ? 1176 : 1376}
                    sizes="(max-width: 760px) 40vw, 22vw"
                    style={t.fit ? { objectFit: t.fit } : undefined}
                  />
                </span>
              ) : (
                <span
                  key={i}
                  className="ab-tile ab-tile--ph"
                  style={{ left: `${t.x}%`, top: `${t.y}%`, width: `${t.w}%`, aspectRatio: t.a }}
                >
                  {t.n}
                </span>
              )
            )}
          </div>

          <motion.div className="ab-prose" {...rise(0)}>
            <p>
              Hi there! I&apos;m Obidur, a research engineer in Chittagong. I started in pure
              mathematics, wandered into machine learning, and landed on the unglamorous end of it
              — getting models to behave on the laptops people actually own. That turned out to be
              the right place to be the mathematician and the engineer at the same time. These days
              I&apos;m heading toward work that sits between research, product, and whatever the
              hardware will tolerate.
            </p>
            <p>
              BSc in Mathematics at the University of Chittagong, expected 2027. Student researcher
              at{" "}
              <a
                className="ab-inline-link"
                href="https://elitelab.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Elite Research Lab
              </a>
              , R&amp;D engineer at{" "}
              <a
                className="ab-inline-link"
                href="https://northaxis.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                NorthAxis
              </a>
              . Born and raised right here in Chittagong.
            </p>
            <p>Some things I&apos;m working on at the moment include:</p>
            <ul className="ab-list">
              <li>
                CPU-constrained deep learning for tomato leaf disease detection — ResNet-50,
                ConvNeXt-Tiny and FastViT-T8 on a plain Ryzen with no GPU, because the farmers
                who need this can&apos;t wait for a data centre. Under review at Springer.
              </li>
              <li>
                <a
                  className="ab-inline-link"
                  href="https://axiom-learning-psi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Axiom Learning
                </a>
                , an AI tutor that builds a study plan around what you actually know rather than what
                the syllabus assumes.
              </li>
              <li>
                A{" "}
                <a
                  className="ab-inline-link"
                  href="https://smote-dashboard.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  visual teardown of SMOTE
                </a>{" "}
                — drawing out how an oversampling method that looks like it&apos;s fixing your
                imbalance problem quietly invents a different one.
              </li>
              <li>
                A survey of 225 students on digital distraction and self-regulation, and a study on
                what really drives a rickshaw fare in a port city.
              </li>
            </ul>
            <p>
              I&apos;ve also been told my conference talks are more fun than my papers, which I
              choose to take as a compliment.
            </p>
          </motion.div>

          <motion.div className="ab-cta" {...rise(0.06)}>
            <p className="ab-cta-title">Let&apos;s make something together!</p>
            <p className="ab-cta-line">
              Graduating in 2027 and open to research collaborations and full-time roles. You can
              reach me at{" "}
              <a className="ab-inline-link" href="mailto:obidur.shawal@gmail.com">
                obidur.shawal@gmail.com
              </a>{" "}
              or via{" "}
              <a
                className="ab-inline-link"
                href="https://linkedin.com/in/obidur-rahman-shawal"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              .
            </p>
          </motion.div>

          <Group label="Contact">
            {contact.map((c, i) => (
              <Row key={c.when} when={c.when} lead={c.lead} href={c.href} tip={c.tip} i={i} />
            ))}
          </Group>

          <Group label="Education">
            <Row
              when="Expected 2027"
              lead="BSc in Mathematics"
              note="University of Chittagong, Bangladesh"
            />
          </Group>

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
              lead="Bengali · বাংলা · Chittagonian · চাটগাঁইয়া — native"
              note="English — fluent · Hindi · हिन्दी and Urdu · اردو — conversational"
            />
            <Row
              when="Studied"
              lead="Arabic · العربية — reading"
              note="Japanese · 日本語 — learning"
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
