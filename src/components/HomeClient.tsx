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
import { SectionRail } from "@/components/SectionRail";
import { Corner, Cross, Bracket, Plus, Barcode, Micro } from "@/components/Glyphs";

const work = [
  {
    title: "Axiom Learning",
    tags: "AI Tutor",
    desc: "A study plan built around what you actually know, not what the syllabus guesses.",
    descBn: "সিলেবাস যা ধরে নেয় তা নয়, আপনি আসলে কী জানেন সেটাই মাপ হয়ে যায়। ওই মাপেই পড়ার পরিকল্পনা সাজায় এই শেখার সঙ্গী।",
    href: "https://axiom-learning-psi.vercel.app/",
    videoSrc: "/axiom-learning.mp4",
  },
  {
    title: "Seeing SMOTE Clearly",
    tags: "Data Visualisation",
    desc: "Oversampling looks like a fix until you see what it does to the data. This is that, drawn out.",
    descBn: "ডেটা বাড়ানোর কৌশল দূরের সমস্যা মনে হয়, যতক্ষণ না গঠনটা চোখের সামনে বদলে যেতে দেখি। এখানে সেই বদলটাই আঁকা আছে।",
    href: "https://smote-dashboard.vercel.app/",
    img: "/smote.png",
  },
];

const research = [
  {
    title: "CPU-Constrained Deep Learning for Tomato Disease Detection: Traditional, Modern, and Hybrid CNN Comparison",
    meta: "Under Review · Springer",
    desc: "With Lipon Chandra Das, Arnab Aich, Abu Saiman Md Taiham, and Atif Ibna Latif. Three models, one CPU, 16,012 leaf images: the smallest reads a leaf in 0.022 seconds and still gets it right almost every time.",
    href: "/cpu",
  },
  {
    title: "Pathways from digital distractions and study habits to academic performance, exploring self-regulation as a mediator among Bangladeshi university students",
    meta: "SCRIS 2026",
    desc: "With Md. Ali Arman Rafi. 225 students surveyed: self-regulation predicts grades better than raw study hours.",
    href: "https://doi.org/10.13140/RG.2.2.24207.24483",
  },
  {
    title: "Quantifying the congestion premium: disentangling the determinants of non-metered fares in a developing port city",
    meta: "SCRIS 2026",
    desc: "With Sifatul Islam. 100 commuter trips modelled: traffic, time of day, and waterlogging drive fares more than distance.",
    href: "https://doi.org/10.13140/RG.2.2.16906.53448",
  },
];

/* Swap in real photos here. One figure, four windows: each frame
   shows a different crop of the same image, like a contact sheet. */
const photos = [
  { src: "/img1.jpg", pos: "20% center", label: "FIG. A · CITY" },
  { src: "/img1.jpg", pos: "50% center", label: "FIG. B · STREET" },
  { src: "/img1.jpg", pos: "80% center", label: "FIG. C · DETAIL" },
  { src: "/img1.jpg", pos: "center 20%", label: "FIG. D · LIGHT" },
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

/** Word-by-word reveal for the statement. Real text first, motion on top. */
function WordReveal({ text, className }: { text: string; className: string }) {
  const reduced = useReducedMotion();
  const words = text.split(" ");
  const last = words.length - 1;
  return (
    <motion.p
      className={className}
      initial={reduced ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2 }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block" }}
          initial={reduced ? false : { opacity: 0.14, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.045, duration: 0.5, ease: EASE }}
        >
          {w}
          {i < last ? " " : ""}
        </motion.span>
      ))}
    </motion.p>
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
  const stripRotate = useTransform(scrollY, [0, 1200], [0, -1.5]);

  /* Poster panel: subtle 3D tilt that follows the pointer. */
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const tiltX = useSpring(useTransform(py, [-0.5, 0.5], [4, -4]), {
    stiffness: 120,
    damping: 18,
  });
  const tiltY = useSpring(useTransform(px, [-0.5, 0.5], [-4, 4]), {
    stiffness: 120,
    damping: 18,
  });

  const onPosterMove = (e: React.PointerEvent) => {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onPosterLeave = () => {
    px.set(0);
    py.set(0);
  };

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

      {/* ================= HERO — one full-bleed dark poster ================= */}
      <section
        className="ed-hero"
        onPointerMove={onPosterMove}
        onPointerLeave={onPosterLeave}
      >
        {/* Glyph field behind everything */}
        <div className="ed-hero-glyphs" aria-hidden>
          <div style={{ position: "absolute", top: "8%", right: "6%" }}>
            <Bracket size={130} flip drift />
          </div>
          <div style={{ position: "absolute", top: "52%", right: "18%" }}>
            <Bracket size={90} drift delay={1.2} />
          </div>
          <div style={{ position: "absolute", bottom: "22%", right: "8%" }}>
            <Cross size={100} color="rgba(255,255,255,0.12)" drift delay={0.6} />
          </div>
          <div style={{ position: "absolute", top: "30%", right: "38%" }}>
            <Cross size={56} fill color="rgba(255,255,255,0.05)" drift delay={2} />
          </div>
          <div style={{ position: "absolute", top: "18%", left: "46%" }}>
            <Plus size={28} spin />
          </div>
          <div style={{ position: "absolute", bottom: "30%", right: "42%" }}>
            <Plus size={20} color="rgba(255,255,255,0.25)" spin delay={6} />
          </div>
          <Corner pos="tr" size={28} color="var(--w-mute)" />
          <Corner pos="bl" size={28} color="var(--w-mute)" />
          <motion.div
            className="z-trace"
            style={{ scaleY: reduced ? 1 : traceScale }}
            aria-hidden
          />
        </div>

        <div className="ed-hero-inner">
          <div className="ed-hero-grid">
            <div>
              <h1 className="ed-hero-name">
                <span className="sr-only">Obidur Rahman</span>
                <span className="ed-hero-line" aria-hidden>
                  <CharReveal text="Obidur" />
                </span>{" "}
                <span className="ed-hero-line" aria-hidden>
                  <CharReveal text="Rahman" delay={0.35} />
                </span>
                <motion.span
                  className="ed-hero-accent"
                  aria-hidden
                  initial={reduced ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0 }}
                >
                  .
                </motion.span>
              </h1>

              <motion.p
                className="ed-hero-role"
                initial={reduced ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.55, ease: EASE }}
              >
                I build AI that runs <em>anywhere</em>, for people who need it.
              </motion.p>

              <motion.p
                className="ed-hero-bn"
                lang="bn"
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                গণিত শেষ হয় যেখানে, সেখান থেকেই কাজের শুরু। সাধারণ ল্যাপটপ, প্রতিবেশীর সমস্যা। ব্যাস, এইটাই কাজ।
              </motion.p>
            </div>

            {/* Role ledger, right column, rows slide in one by one */}
            <motion.div
              className="ed-hero-facts"
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              {[
                { role: "Student Researcher", org: "Elite Research Lab", href: "https://elitelab.ai" },
                { role: "R&D Engineer", org: "Northaxis", href: "https://northaxis.xyz" },
                { role: "Mathematics Undergrad", org: "University of Chittagong", href: null },
              ].map((f, i) => (
                <motion.div
                  className="ed-hero-fact"
                  key={f.role}
                  initial={reduced ? false : { opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.65 + i * 0.12, duration: 0.5, ease: EASE }}
                >
                  <b>{f.role}</b>
                  {f.href ? (
                    <a href={f.href} target="_blank" rel="noopener noreferrer">{f.org}</a>
                  ) : (
                    <span>{f.org}</span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Hero floor: links + barcode */}
        <motion.div
          className="ed-hero-foot"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
        >
          <nav className="ed-hero-links" aria-label="Social links">
            <a href="https://github.com/obidur-rahman" target="_blank" rel="noopener noreferrer">GitHub</a>
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
          </nav>
          <Barcode />
        </motion.div>
      </section>

      {/* ================= FIGURE STRIP — one image, four windows ================= */}
      <motion.div
        className="ed-photo-strip"
        style={{ y: reduced ? 0 : stripY, rotate: reduced ? 0 : stripRotate }}
      >
        {photos.map((p, i) => (
          <motion.figure
            className="ed-photo"
            key={i}
            initial={reduced ? false : { clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: i * 0.09, duration: 0.65, ease: EASE }}
            style={{ margin: 0 }}
          >
            <img
              src={p.src}
              alt=""
              loading={i === 0 ? "eager" : "lazy"}
              style={{ objectPosition: p.pos }}
            />
            <figcaption className="ed-photo-label">
              <Micro color="var(--ink-mid)">{p.label}</Micro>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>

      {/* ================= STATEMENT — dark band, word-stagger ================= */}
      <section className="ed-statement">
        <motion.div
          className="ed-statement-inner"
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          <div style={{ position: "absolute", top: 16, left: 16 }} aria-hidden>
            <Corner pos="tl" size={26} color="var(--w-mute)" />
          </div>
          <div style={{ position: "absolute", bottom: 16, right: 16 }} aria-hidden>
            <Corner pos="br" size={26} color="var(--w-mute)" />
          </div>
          <div>
            <WordReveal
              className="ed-statement-text"
              text="Good questions make good machines. I ask them, then I build what answers."
            />
            <motion.p
              className="ed-statement-bn"
              lang="bn"
              initial={reduced ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              ভালো প্রশ্ন থেকেই ভালো যন্ত্র জন্মায়। আমি প্রশ্ন করি, তারপর সেই প্রশ্নের উত্তর হয়ে ওঠা যন্ত্রটা বানাই। শুরুটা হয় পাশের বাড়ির সমস্যা থেকে, বিশ্বজুড়ে প্রতিযোগিতা থেকে নয়।
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* ================= RESEARCH ================= */}
      <SectionRail bn="গবেষণা" en="Research">
        <div className="ed-research-list">
          {research.map((r, i) => (
            <motion.a
              key={i}
              href={r.href}
              className="ed-research-item"
              initial={reduced ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: EASE }}
            >
              <div className="ed-research-top">
                <span className="ed-research-idx">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="ed-research-title">{r.title}</h3>
                <span className="ed-research-dots" aria-hidden />
                <span className="ed-research-meta">{r.meta}</span>
              </div>
              <p className="ed-research-desc">{r.desc}</p>
            </motion.a>
          ))}
        </div>
      </SectionRail>

      {/* ================= WORK ================= */}
      <SectionRail bn="কাজ" en="Work">
        <div className="ed-work-list">
          {work.map((p, i) => (
            <motion.a
              key={i}
              href={p.href}
              className="ed-work-card"
              target="_blank"
              rel="noopener noreferrer"
              initial={reduced ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: EASE }}
            >
              <motion.div
                className="ed-work-media"
                initial={reduced ? false : { clipPath: "inset(0 0 100% 0)" }}
                whileInView={{ clipPath: "inset(0 0 0% 0)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: EASE }}
              >
                {"videoSrc" in p ? (
                  <video src={p.videoSrc} loop muted autoPlay playsInline preload="metadata" />
                ) : (
                  <img src={p.img} alt="" loading="lazy" />
                )}
              </motion.div>
              <div className="ed-work-body">
                <p className="ed-work-tags">{p.tags}</p>
                <h3 className="ed-work-title">{p.title}</h3>
                <p className="ed-work-desc">{p.desc}</p>
                <p className="ed-work-desc bn" lang="bn">{p.descBn}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </SectionRail>

      {/* ================= FOOTER ================= */}
      <footer className="ed-footer">
        <div className="ed-footer-left">
          <span className="ed-footer-name">Obidur Rahman</span>
          <span className="ed-footer-bangla" lang="bn">ওবায়দুর রহমান</span>
          <span className="ed-footer-copy">CHITTOGRAM · ©2026</span>
        </div>
        <nav className="ed-footer-links">
          <a href="https://github.com/obidur-rahman" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/obidur-rahman-shawal" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:obidur.shawal@gmail.com">Email</a>
          <a href="/obidur_cv.pdf" target="_blank" rel="noopener noreferrer">CV</a>
          <a href="/about">About</a>
        </nav>
      </footer>
    </div>
  );
}
