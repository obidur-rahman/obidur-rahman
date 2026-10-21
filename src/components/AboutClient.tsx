"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { EASE } from "@/lib/motion";
import { SiteFooter } from "@/components/SiteFooter";

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
    x: 62,
    y: 14,
    w: 14,
    a: "2 / 3",
    src: "/disco.png",
    alt: "Illustration: a figure with a mirrored disco ball for a head",
    fit: "contain",
    tip: "that's me, head full of disco",
  },
  /* The hobbies that used to sit in an "Off the clock" ledger, scattered
     across the tiles instead. */
  { x: 62, y: 0, w: 9, a: "1 / 1", n: "01", tip: "video games, mostly at unholy hours" },
  { x: 84, y: 10, w: 15, a: "3 / 2", n: "02" },
  { x: 3, y: 16, w: 8, a: "3 / 4", n: "03" },
  { x: 37, y: 8, w: 12, a: "2 / 3", n: "04" },
  {
    x: 78,
    y: 40,
    w: 15,
    a: "4 / 3",
    n: "05",
    tip: "long-form video essays: forty minutes, no regrets",
  },
  { x: 10, y: 46, w: 10, a: "1 / 1", n: "06", tip: "the occasional internet meme, professionally" },
  { x: 60, y: 52, w: 13, a: "3 / 4", n: "07" },
  { x: 88, y: 60, w: 8, a: "2 / 3", n: "08" },
  { x: 34, y: 64, w: 13, a: "2 / 3", n: "09", tip: "clean interfaces and good typography" },
  {
    x: 3,
    y: 72,
    w: 18,
    a: "3 / 2",
    n: "10",
    tip: "always happy to talk about ai, games or design",
  },
  { x: 74, y: 78, w: 20, a: "8 / 5", n: "11" },
];

/* The four photographs that close the page. Only the first has a real
   file; the rest stay dashed boxes. */
const photos: { src?: string; alt?: string; tip: string }[] = [
  {
    src: "/me.jpg",
    alt: "Obidur Rahman",
    tip: "Hi! It's me",
  },
  {
    src: "/tour.jpg",
    alt: "A boat gliding through a rain-soaked mangrove forest",
    tip: "boat ride through the mangroves, monsoon and all",
  },
  { tip: "proofs on the desk, cold coffee" },
  { tip: "still to be photographed" },
];

export function AboutClient() {
  const reduced = useReducedMotion();

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
                  whileHover={
                    reduced
                      ? undefined
                      : {
                          scale: 1.06,
                          rotate: i % 2 ? 2 : -2,
                          transition: { duration: 0.35, ease: EASE },
                        }
                  }
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
                  data-tip={t.tip}
                  data-tip-pos={t.tip ? "over" : undefined}
                  style={{ left: `${t.x}%`, top: `${t.y}%`, width: `${t.w}%`, aspectRatio: t.a }}
                  variants={tileVariants}
                  whileHover={
                    reduced
                      ? undefined
                      : {
                          scale: 1.06,
                          rotate: i % 2 ? 2 : -2,
                          transition: { duration: 0.35, ease: EASE },
                        }
                  }
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

          <div className="ab-photos" aria-hidden>
            {photos.map((p, i) =>
              p.src ? (
                <span
                  key={i}
                  className="ab-photo ab-photo--img"
                  data-tip={p.tip}
                  data-tip-pos="over"
                >
                  <Image
                    src={p.src}
                    alt={p.alt ?? ""}
                    width={1536}
                    height={1536}
                    sizes="(max-width: 760px) 50vw, 25vw"
                  />
                </span>
              ) : (
                <span key={i} className="ab-photo" data-tip={p.tip} data-tip-pos="over">
                  {String(i + 1).padStart(2, "0")}
                </span>
              )
            )}
          </div>

          <SiteFooter />        </div>
      </div>
    </div>
  );
}
