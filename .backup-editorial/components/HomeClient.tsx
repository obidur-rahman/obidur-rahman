"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { EASE, SPRING, useReducedMotion } from "@/lib/motion";
import { SectionRail } from "@/components/SectionRail";

const work = [
  {
    title: "Axiom Learning",
    tags: "AI Tutor",
    desc: "A tutor that builds a study plan around what you actually know, not what the syllabus assumes.",
    descBn: "যা সিলেবাস ধরে নেয়, সেটা নয় — আপনি আসলে কী জানেন, সেই ভিত্তিতে পড়ার পরিকল্পনা সাজায় এমন একটা শেখার সঙ্গী।",
    href: "https://axiom-learning-psi.vercel.app/",
    videoSrc: "/axiom-learning.mp4",
  },
  {
    title: "Seeing SMOTE Clearly",
    tags: "Data Visualisation",
    desc: "Oversampling looks like a fix until you see what it does to the data. This is that, drawn out.",
    descBn: "ডেটা বাড়ানোর কৌশল যেভাবে ডেটার গঠন বদলে দেয়, তা চোখে দেখার মতো করে সাজানো একটা চিত্র।",
    href: "https://smote-dashboard.vercel.app/",
    img: "/smote.png",
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

/* Swap in real photos here. Until then, four crops of one image
   read as four frames, like a contact sheet. */
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

export function HomeClient() {
  const [copied, setCopied] = useState(false);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, SPRING);

  const { scrollY } = useScroll();
  const stripY = useTransform(scrollY, [0, 1200], [0, -60]);

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

      {/* ================= HERO ================= */}
      <section className="ed-hero">
        <div className="ed-hero-main">
          <h1 className="ed-hero-name">
            <span className="sr-only">Obidur Rahman</span>
            <CharReveal text="Obidur" />
            <motion.span
              className="ed-hero-accent"
              aria-hidden
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
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
            গণিত শেষ হয় যেখানে, সেখান থেকেই কাজের শুরু — সাধারণ ল্যাপটপে, প্রতিবেশীর সমস্যা নিয়ে।
          </motion.p>

          <motion.div
            className="ed-hero-facts"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <span>
              <b>R&amp;D Engineer</b> · Northaxis
            </span>
            <span>
              <b>Mathematics</b> · University of Chittagong
            </span>
            <span>
              <b>Chattogram</b>, Bangladesh
            </span>
          </motion.div>
        </div>

        {/* Vertical link list, like the reference */}
        <motion.div
          className="ed-hero-side"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <nav className="ed-links" aria-label="Social links">
            <a href="https://github.com/ashfinnn" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/obidur-rahman-shawal" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/obidur_cv.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            <a href="mailto:obidur.shawal@gmail.com">
              <span
                className="ob-email"
                role="button"
                tabIndex={0}
                onClick={handleCopyEmail}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCopyEmail();
                  }
                }}
              >
                Email
              </span>
            </a>
          </nav>
          <span className="ed-rail-arrow" aria-hidden>↓</span>
          {copied && (
            <span className="ob-copied" role="status"> copied</span>
          )}
        </motion.div>
      </section>

      {/* ================= PHOTO STRIP — B&W ================= */}
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

      {/* ================= STATEMENT ================= */}
      <section className="ed-statement">
        <motion.p
          className="ed-statement-text"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          Good questions make good machines. <em>I ask them, then I build what answers.</em>
        </motion.p>
        <motion.p
          className="ed-statement-bn"
          lang="bn"
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          ভালো প্রশ্ন থেকেই ভালো যন্ত্র তৈরি হয়। আমি প্রশ্ন করি, তারপর উত্তর দেওয়ার যন্ত্র বানাই — পাশের বাড়ির সমস্যা থেকে, সারা পৃথিবীর প্রতিযোগিতা থেকে নয়।
        </motion.p>
      </section>

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
              <div className="ed-work-media">
                {"videoSrc" in p ? (
                  <video src={p.videoSrc} loop muted autoPlay playsInline preload="metadata" />
                ) : (
                  <img src={p.img} alt="" loading="lazy" />
                )}
              </div>
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
                <h3 className="ed-research-title">{r.title}</h3>
                <span className="ed-research-dots" aria-hidden />
                <span className="ed-research-meta">{r.meta}</span>
              </div>
              <p className="ed-research-desc">{r.desc}</p>
            </motion.a>
          ))}
        </div>
      </SectionRail>

      {/* ================= FOOTER ================= */}
      <footer className="ed-footer">
        <div className="ed-footer-left">
          <span className="ed-footer-name">Obidur Rahman</span>
          <span className="ed-footer-bangla" lang="bn">ওবায়দুর রহমান</span>
          <span className="ed-footer-copy">Chattogram · &copy;2026</span>
        </div>
        <nav className="ed-footer-links">
          <a href="https://github.com/ashfinnn" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/obidur-rahman-shawal" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:obidur.shawal@gmail.com">Email</a>
          <a href="/obidur_cv.pdf" target="_blank" rel="noopener noreferrer">CV</a>
          <a href="/about">About</a>
        </nav>
      </footer>
    </div>
  );
}
