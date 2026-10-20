"use client";

import { useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import Image from "next/image";
import { EASE, SPRING } from "@/lib/motion";
import { SectionRail } from "@/components/SectionRail";

const work = [
  {
    title: "Axiom Learning",
    tags: "AI Tutor",
    desc: "A study plan built around what you actually know, not what the syllabus guesses.",
    descBn: "পরীক্ষার আগে সবাই ভাবে কী পড়তে হবে। আসল প্রশ্নটা হওয়া উচিত, আমি আসলে কী জানি না।",
    href: "https://axiom-learning-psi.vercel.app/",
    videoSrc: "/axiom-learning.mp4",
    tip: "live project — go try a study plan",
  },
  {
    title: "Geometric Dilution of Smote",
    tags: "Data Visualisation",
    desc: "SMOTE looks like it's solving your imbalance problem. Draw it out, and you can watch it quietly inventing a different one.",
    descBn: "",
    href: "https://smote-dashboard.vercel.app/",
    img: "/smote.svg",
    tip: "live demo — watch SMOTE invent data",
  },
  {
    title: "Order Khata",
    tags: "Multilingual AI Message Triage",
    desc: "A triage inbox for Bangla, Banglish, and English shop messages — sorting Order, Price, Delivery, Complaint, Scam or Other, and routing uncertain cases to human review. FastAPI with a CPU-capable classifier, a TF-IDF fallback, and 107 passing backend tests.",
    descBn: "",
    href: "https://order-khata.onrender.com/",
    links: [
      { label: "Demo", href: "https://order-khata.onrender.com/" },
      { label: "Source", href: "https://github.com/obidur-rahman/order-khata" },
    ],
    tip: "live triage inbox — Bangla, Banglish, English",
  },
];

const research = [
  {
    title: "Pathways from digital distractions and study habits to academic performance, exploring self-regulation as a mediator among Bangladeshi university students",
    meta: "SCRIS 2026",
    authors: "Obidur Rahman, Md. Ali Arman Rafi",
    desc: "225 students surveyed: self-regulation predicts grades better than raw study hours.",
    href: "https://doi.org/10.13140/RG.2.2.24207.24483",
    tip: "survey study — full text on doi.org",
  },
  {
    title: "Quantifying the congestion premium: disentangling the determinants of non-metered fares in a developing port city",
    meta: "SCRIS 2026",
    authors: "Obidur Rahman, Sifatul Islam",
    desc: "100 commuter trips modelled: traffic, time of day, and waterlogging drive fares more than distance.",
    href: "https://doi.org/10.13140/RG.2.2.16906.53448",
    tip: "fare study — full text on doi.org",
  },
];

export function HomeClient() {
  const [bandReady, setBandReady] = useState(false);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, SPRING);

  return (
    <div className="home">
      <motion.div className="ob-progress" style={{ scaleX: progress }} aria-hidden />

      {/* ================= HERO — Japanese-editorial cover, cloud band ================= */}
      <section className="ed-hero">
        <span className="ed-hero-glyph" aria-hidden>ও</span>

        <div className="ed-hero-rail" aria-hidden>
          <span className="ed-hero-rail-line" />
          <span className="ed-hero-rail-text" lang="bn">ওবায়দুর রহমান</span>
          <span className="ed-hero-rail-line" />
        </div>        <div className="ed-hero-top">
          {/* The name lives in the navbar; the h1 stays for SEO and screen readers. */}
          <h1 className="sr-only">Obidur Rahman</h1>
          {/* Hairline closing the cover, anchored just above the cloud band */}
          <motion.div
            className="ed-hero-rule"
            aria-hidden
            initial={reduced ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.75, duration: 1.1, ease: EASE }}
          />
        </div>

        <motion.div
          className="ed-hero-band"
          data-ready={bandReady ? "" : undefined}
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.8 }}
        >
          {/* Optimised still shows instantly and covers reduced motion,
              autoplay failure, and slow connections. */}
          <Image
            src="/cloud.png"
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 90vw"
            className="ed-hero-band-img ed-hero-band-poster"
          />
          {!reduced && (
            <video
              className="ed-hero-band-img ed-hero-band-video"
              src="/cloud.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden
              onCanPlay={() => setBandReady(true)}
            />
          )}
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
              data-tip={r.tip}
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
              <p className="ed-research-authors">
                {r.authors.split(/(Obidur Rahman)/).map((part, j) =>
                  part === "Obidur Rahman" ? (
                    <b key={j} className="ed-research-me">Obidur Rahman</b>
                  ) : (
                    <span key={j}>{part}</span>
                  )
                )}
              </p>
              <p className="ed-research-desc">{r.desc}</p>
            </motion.a>
          ))}
        </div>
      </SectionRail>

      {/* ================= WORK ================= */}
      <SectionRail bn="কাজ" en="Work">
        <div className="ed-work-list">
          {work.map((p, i) => {
            const anim = {
              initial: reduced ? false : { opacity: 0, y: 32 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-60px" },
              transition: { duration: 0.65, ease: EASE },
            };

            const body = (
              <div className="ed-work-body">
                <div className="ed-work-meta">
                  <span className="ed-work-idx" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                  <p className="ed-work-tags">{p.tags}</p>
                </div>
                <h3 className="ed-work-title">{p.title}</h3>
                <p className="ed-work-desc">{p.desc}</p>
                <p className="ed-work-desc bn" lang="bn">{p.descBn}</p>
              </div>
            );

            /* No screenshot? A dashed plate carrying the demo and source links
               instead — links can't nest inside the card's own anchor. */
            if (p.links) {
              return (
                <motion.div key={i} className="ed-work-card" data-tip={p.tip} {...anim}>
                  <div className="ed-work-media">
                    <div className="ed-work-links">
                      {p.links.map((l) => (
                        <a
                          key={l.label}
                          className="ed-work-link"
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {l.label} ↗
                        </a>
                      ))}
                    </div>
                  </div>
                  {body}
                </motion.div>
              );
            }

            return (
              <motion.a
                key={i}
                href={p.href}
                className="ed-work-card"
                data-tip={p.tip}
                target="_blank"
                rel="noopener noreferrer"
                {...anim}
              >
                <div className="ed-work-media">
                  {"videoSrc" in p ? (
                    <video src={p.videoSrc} loop muted autoPlay playsInline preload="metadata" />
                  ) : (
                    /* eslint-disable-next-line @next/next/no-img-element -- static SVG, nothing to optimize */
                    <img src={p.img} alt={`${p.title} preview`} loading="lazy" />
                  )}
                </div>
                {body}
              </motion.a>
            );
          })}
        </div>
      </SectionRail>
    </div>
  );
}
