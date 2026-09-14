"use client";

import { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { EASE, SPRING, useReducedMotion } from "@/lib/motion";
import { Corner, Cross, Bracket, Plus, Barcode, Micro } from "@/components/Glyphs";

const work = [
  {
    title: "Axiom Learning",
    tags: "AI Tutor",
    desc: "A tutor that builds a study plan around what you actually know, not what the syllabus assumes.",
    descBn: "যা সিলেবাস ধরে নেয়, সেটা নয় — আপনি আসলে কী জানেন, সেই ভিত্তিতে পড়ার পরিকল্পনা সাজায় এমন একটা শেখার সঙ্গী।",
    href: "https://axiom-learning-psi.vercel.app/",
    videoSrc: "/axiom-learning.mp4",
    tone: "c-lav",
  },
  {
    title: "Seeing SMOTE Clearly",
    tags: "Data Visualisation",
    desc: "Oversampling looks like a fix until you see what it does to the data. This is that, drawn out.",
    descBn: "ডেটা বাড়ানোর কৌশল যেভাবে ডেটার গঠন বদলে দেয়, তা চোখে দেখার মতো করে সাজানো একটা চিত্র।",
    href: "https://smote-dashboard.vercel.app/",
    img: "/smote.png",
    tone: "c-dark",
  },
];

const research = [
  {
    title: "CPU-Constrained Deep Learning for Tomato Disease Detection: Traditional, Modern, and Hybrid CNN Comparison",
    meta: "Under Review · Springer",
    desc: "Three image models, one CPU. The smallest one reads a leaf in a fraction of a second and still gets it right almost every time.",
    href: "/cpu",
  },
  {
    title: "Pathways from digital distractions and study habits to academic performance, exploring self-regulation as a mediator among Bangladeshi university students",
    meta: "SCRIS 2026",
    desc: "A survey of 300+ university students. Phone use during study hours tracks with lower grades, and weak self-regulation is the bridge between the two.",
    href: "/obidur_cv.pdf",
  },
  {
    title: "Disentangling the determinants of non-metered fares in a developing port city (Chattogram)",
    meta: "SCRIS 2026",
    desc: "Fares measured and modelled. Distance matters less than passengers think; time of day matters more.",
    href: "/obidur_cv.pdf",
  },
];

const photos = [
  { src: "/img1.jpg", pos: "20% center" },
  { src: "/img1.jpg", pos: "50% center" },
  { src: "/img1.jpg", pos: "80% center" },
  { src: "/img1.jpg", pos: "center 20%" },
];

function CharReveal({ text, delay = 0.1 }: { text: string; delay?: number }) {
  const reduced = useReducedMotion();
  return (
    <span aria-hidden>
      {text.split("").map((c, i) => (
        <motion.span
          key={i}
          className="char"
          initial={reduced ? false : { y: "110%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: delay + i * 0.045, duration: 0.7, ease: EASE }}
        >
          {c}
        </motion.span>
      ))}
    </span>
  );
}

/** Crosshair that follows the pointer (desktop only, reduced-motion aware). */
function CursorCross() {
  const reduced = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40 });
  const sy = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    if (reduced) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX - 14);
      y.set(e.clientY - 14);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y, reduced]);

  if (reduced) return null;
  return (
    <motion.div className="z-cursor-cross" style={{ x: sx, y: sy }} aria-hidden>
      <svg width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 0 V10 M14 18 V28 M0 14 H10 M18 14 H28" stroke="#fff" strokeWidth="1" />
      </svg>
    </motion.div>
  );
}

export function HomeClient() {
  const [copied, setCopied] = useState(false);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, SPRING);

  const { scrollY } = useScroll();
  const traceScale = useTransform(scrollY, [0, 600], [0.15, 1]);
  const stripY = useTransform(scrollY, [0, 1200], [0, -50]);

  useEffect(() => {
    if (copied) {
      const t = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(t);
    }
  }, [copied]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("obidur.shawal@gmail.com");
      setCopied(true);
    } catch { /* clipboard unavailable */ }
  };

  return (
    <div>
      <motion.div className="ob-progress" style={{ scaleX: progress }} aria-hidden />
      <CursorCross />

      {/* ================= HERO — dark glyph field ================= */}
      <section className="z-hero">
        <div className="z-hero-left">
          <div className="z-hero-glyphs" aria-hidden>
            {/* drifting brackets + crosses, very low contrast */}
            <div style={{ position: "absolute", top: "6%", left: "3%" }}>
              <Bracket size={110} flip drift />
            </div>
            <div style={{ position: "absolute", top: "2%", right: "8%" }}>
              <Bracket size={80} drift delay={1.2} />
            </div>
            <div style={{ position: "absolute", bottom: "18%", left: "8%" }}>
              <Cross size={72} fill color="rgba(255,255,255,0.05)" drift delay={0.6} />
            </div>
            <div style={{ position: "absolute", bottom: "8%", right: "12%" }}>
              <Cross size={96} color="rgba(255,255,255,0.14)" drift delay={2} />
            </div>
            <div style={{ position: "absolute", top: "38%", right: "4%" }}>
              <Plus size={30} spin />
            </div>
            <div style={{ position: "absolute", bottom: "34%", left: "42%" }}>
              <Plus size={22} color="rgba(255,255,255,0.25)" spin delay={6} />
            </div>
            <Corner pos="tl" size={26} color="var(--w-mute)" className="hero-corner-tl" />
          </div>

          <h1 className="z-hero-name">
            <span className="sr-only">Obidur Rahman</span>
            <CharReveal text="Obidur" />
            <motion.span
              className="z-hero-accent"
              aria-hidden
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              .
            </motion.span>
          </h1>

          <motion.p
            className="z-hero-role"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.55, ease: EASE }}
          >
            I build AI that runs <em>anywhere</em>, for people who need it.
          </motion.p>

          <motion.p
            className="z-hero-bn"
            lang="bn"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            গণিত শেষ হয় যেখানে, সেখান থেকেই কাজের শুরু — সাধারণ ল্যাপটপে, প্রতিবেশীর সমস্যা নিয়ে।
          </motion.p>

          <motion.div
            className="z-hero-facts"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <span><b>R&amp;D Engineer</b> · Northaxis</span>
            <span><b>Mathematics</b> · University of Chittagong</span>
            <span><b>Chattogram</b>, Bangladesh</span>
          </motion.div>
        </div>

        {/* Right column: mono links + barcode, tracing line */}
        <div className="z-hero-right">
          <motion.div
            className="z-trace"
            style={{ scaleY: reduced ? 1 : traceScale }}
            aria-hidden
          />
          <Micro color="var(--w-mute)">ZUJIMODE · O.RAHMAN · 2026</Micro>
          <motion.div
            className="z-hero-right-mid"
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6, ease: EASE }}
          >
            <Cross size={110} color="rgba(255,255,255,0.2)" drift />
            <p className="z-hero-desc">
              Research engineer and mathematics student. Models that fit the laptops people
              already own, built from problems a few doors down.
            </p>
          </motion.div>
          <motion.nav
            className="z-hero-links"
            aria-label="Social links"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.5 }}
          >
            <a href="https://github.com/ashfinnn" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/obidur-rahman-shawal" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/obidur_cv.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            <a href="/about">About</a>
            <a
              href="mailto:obidur.shawal@gmail.com"
              onClick={(e) => {
                e.preventDefault();
                handleCopyEmail();
              }}
            >
              {copied ? "Copied!" : "Email"}
            </a>
          </motion.nav>
          <Barcode />
        </div>
      </section>

      {/* ================= PHOTO STRIP — B&W with parallax ================= */}
      <motion.div className="ed-photo-strip" style={{ y: reduced ? 0 : stripY }} aria-hidden>
        {photos.map((p, i) => (
          <div className="ed-photo" key={i}>
            <img
              src={p.src}
              alt=""
              loading={i === 0 ? "eager" : "lazy"}
              style={{ objectPosition: p.pos }}
            />
          </div>
        ))}
      </motion.div>

      {/* ================= STATEMENT — lavender panel ================= */}
      <section className="z-statement">
        <motion.div
          className="z-statement-inner"
          initial={reduced ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div style={{ position: "absolute", top: 18, left: 18 }} aria-hidden>
            <Corner pos="tl" size={30} color="var(--ink-dark)" />
          </div>
          <div style={{ position: "absolute", bottom: 18, right: 18 }} aria-hidden>
            <Corner pos="br" size={30} color="var(--ink-dark)" />
          </div>
          <p className="z-statement-text">
            Good questions make good machines. <em>I ask them, then I build what answers.</em>
          </p>
          <p className="z-statement-bn" lang="bn">
            ভালো প্রশ্ন থেকেই ভালো যন্ত্র তৈরি হয়। আমি প্রশ্ন করি, তারপর উত্তর দেওয়ার যন্ত্র বানাই — পাশের বাড়ির সমস্যা থেকে, সারা পৃথিবীর প্রতিযোগিতা থেকে নয়।
          </p>
        </motion.div>
      </section>

      {/* ================= WORK ================= */}
      <section className="z-section" id="work">
        <div className="z-sec-head">
          <h2 className="z-sec-title">
            Work <span className="bn" lang="bn">কাজ</span>
          </h2>
          <Micro>2 PROJECTS · 16:10</Micro>
        </div>
        <div className="z-work-list">
          {work.map((p, i) => (
            <motion.a
              key={i}
              href={p.href}
              className={`z-work-card ${p.tone}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={reduced ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: EASE }}
            >
              <div className="z-work-media">
                {"videoSrc" in p ? (
                  <video src={p.videoSrc} loop muted autoPlay playsInline preload="metadata" />
                ) : (
                  <img src={p.img} alt="" loading="lazy" />
                )}
              </div>
              <div className="z-work-body">
                <p className="z-work-tags">{p.tags}</p>
                <h3 className="z-work-title">{p.title}</h3>
                <p className="z-work-desc">{p.desc}</p>
                <p className="z-work-desc bn" lang="bn">{p.descBn}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ================= RESEARCH ================= */}
      <section className="z-section" id="research">
        <div className="z-sec-head">
          <h2 className="z-sec-title">
            Research <span className="bn" lang="bn">গবেষণা</span>
          </h2>
          <Micro>3 PAPERS · 2026</Micro>
        </div>
        <div className="z-research-list">
          {research.map((r, i) => (
            <motion.a
              key={i}
              href={r.href}
              className="z-research-item"
              initial={reduced ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: EASE }}
            >
              <span className="z-research-idx">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="z-research-title">{r.title}</h3>
                <p className="z-research-desc">{r.desc}</p>
              </div>
              <span className="z-research-meta">{r.meta}</span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ================= FOOTER — lavender strip ================= */}
      <footer className="z-footer">
        <div className="z-footer-inner">
          <div className="ed-footer-left">
            <span className="z-footer-name">Obidur Rahman</span>
            <span className="z-footer-bangla" lang="bn">ওবায়দুর রহমান</span>
            <span className="z-footer-copy">CHITTOGRAM · ©2026</span>
          </div>
          <span className="z-footer-no">
            NO. <b>06</b>/06 · S [M] · L · XL
          </span>
          <nav className="z-footer-links">
            <a href="https://github.com/ashfinnn" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/obidur-rahman-shawal" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:obidur.shawal@gmail.com">Email</a>
            <a href="/obidur_cv.pdf" target="_blank" rel="noopener noreferrer">CV</a>
            <a href="/about">About</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
