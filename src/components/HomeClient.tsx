"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { EASE, SPRING } from "@/lib/motion";
import { SiteFooter } from "@/components/SiteFooter";

const work = [
  {
    title: "Axiom Learning",
    tags: ["AI Tutor", "live project"],
    desc: "A study plan built around what you actually know, not what the syllabus guesses.",
    descBn: "",
    href: "https://axiom-learning-psi.vercel.app/",
    videoSrc: "/axiom-learning.mp4",
    tip: "live project, go try a study plan",
  },
  {
    title: "Geometric Dilution of Smote",
    tags: ["Data Visualisation", "live demo"],
    desc: "Draw SMOTE out and watch it quietly invent data to balance a problem you never had.",
    descBn: "",
    href: "https://smote-dashboard.vercel.app/",
    img: "/smote.svg",
    tip: "live demo, watch SMOTE invent data",
  },
  {
    title: "Order Khata",
    tags: ["Multilingual AI", "message triage"],
    desc: "A triage inbox for Bangla, Banglish, and English shop messages; anything uncertain goes to a human.",
    descBn: "",
    href: "https://order-khata.onrender.com/",
    links: [
      { label: "Demo", href: "https://order-khata.onrender.com/" },
      { label: "Source", href: "https://github.com/obidur-rahman/order-khata" },
    ],
    tip: "live triage inbox: Bangla, Banglish, English",
  },
];

const research = [
  {
    title: "Pathways from digital distractions and study habits to academic performance, exploring self-regulation as a mediator among Bangladeshi university students",
    meta: "SCRIS 2026",
    tags: ["survey study", "SCRIS 2026"],
    authors: "Obidur Rahman, Md. Ali Arman Rafi",
    desc: "225 students surveyed: self-regulation predicts grades better than raw study hours.",
    href: "https://doi.org/10.13140/RG.2.2.24207.24483",
    videoSrc: "/pathways-animation.mp4",
    tip: "survey study, full text on doi.org",
  },
  {
    title: "Quantifying the congestion premium: disentangling the determinants of non-metered fares in a developing port city",
    meta: "SCRIS 2026",
    tags: ["fare study", "SCRIS 2026"],
    authors: "Obidur Rahman, Sifatul Islam",
    desc: "100 commuter trips modelled: traffic, time of day, and waterlogging drive fares more than distance.",
    href: "https://doi.org/10.13140/RG.2.2.16906.53448",
    videoSrc: "/congestion-premium.mp4",
    tip: "fare study, full text on doi.org",
  },
];

/* Moved over from the About page. */
const recognition = [
  {
    when: "2025",
    lead: "Best Presenter, 24th International Mathematics Conference",
    note: "Recognized for delivering the session's best presentation.",
    tip: "best presenter at the 24th imc",
  },
];

export function HomeClient() {
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, SPRING);

  const anim = (i: number) => ({
    initial: reduced ? false : { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.65, ease: EASE, delay: i * 0.05 },
  });

  /* The reference's stagger: even cards run down the left column, odd
     cards down the right one, which drops in late. */
  const grid = (items: React.ReactNode[]) => (
    <div className="wk-grid">
      <div className="wk-col">{items.filter((_, i) => i % 2 === 0)}</div>
      <div className="wk-col wk-col--stagger">{items.filter((_, i) => i % 2 === 1)}</div>
    </div>
  );

  /* The pills that fade up over a card's media on hover. */
  const badges = (tags: string[]) => (
    <div className="wk-badges">
      {tags.map((t) => (
        <span key={t} className="wk-badge">
          {t}
        </span>
      ))}
    </div>
  );

  const workCard = (p: (typeof work)[number], i: number) => {
    /* Caption under the media: title, then the small grey note. */
    const caption = (
      <div className="wk-caption">
        <h3 className="wk-title">{p.title}</h3>
        <p className="wk-desc">{p.desc}</p>
        {p.descBn ? (
          <p className="wk-desc wk-desc--bn" lang="bn">{p.descBn}</p>
        ) : null}
      </div>
    );

    /* No screenshot? A dashed plate carrying the demo and source links
       instead — links can't nest inside the card's own anchor. */
    if (p.links) {
      return (
        <motion.div key={i} className="wk-card" data-tip={p.tip} {...anim(i)}>
          <div className="wk-media">
            <div className="wk-links">
              {p.links.map((l) => (
                <a
                  key={l.label}
                  className="wk-link"
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
            {badges(p.tags)}
          </div>
          {caption}
        </motion.div>
      );
    }

    return (
      <motion.a
        key={i}
        href={p.href}
        className="wk-card"
        data-tip={p.tip}
        target="_blank"
        rel="noopener noreferrer"
        {...anim(i)}
      >
        <div className="wk-media">
          {"videoSrc" in p ? (
            <video src={p.videoSrc} loop muted autoPlay playsInline preload="metadata" />
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element -- static SVG, nothing to optimize */
            <img src={p.img} alt={`${p.title} preview`} loading="lazy" />
          )}
          {badges(p.tags)}
        </div>
        {caption}
      </motion.a>
    );
  };

  /* Caption-only card, the same shape without the media: the award. */
  const noteCard = (
    i: number,
    c: { title: string; desc: string; meta?: string; href?: string; tip?: string }
  ) => {
    const caption = (
      <div className="wk-caption">
        <h3 className="wk-title">{c.title}</h3>
        <p className="wk-desc">{c.desc}</p>
        {c.meta ? <p className="wk-meta">{c.meta}</p> : null}
      </div>
    );

    if (c.href) {
      return (
        <motion.a
          key={i}
          href={c.href}
          className="wk-card wk-card--note"
          data-tip={c.tip}
          target="_blank"
          rel="noopener noreferrer"
          {...anim(i)}
        >
          {caption}
        </motion.a>
      );
    }

    return (
      <motion.div key={i} className="wk-card wk-card--note" data-tip={c.tip} {...anim(i)}>
        {caption}
      </motion.div>
    );
  };

  const [first, second, third] = work;

  return (
    <div className="home">
      <motion.div className="ob-progress" style={{ scaleX: progress }} aria-hidden />

      {/* The name lives in the navbar; the h1 stays for SEO and screen readers. */}
      <h1 className="sr-only">Obidur Rahman</h1>

      {/* ================= WORK — kicker + two staggered columns ================ */}
      <section className="wk-section">
        <h2 className="wk-kicker">work</h2>

        <div className="wk-grid">
          {/* Left column carries two cards; the right one drops in late. */}
          <div className="wk-col">
            {workCard(first, 0)}
            {workCard(third, 2)}
          </div>
          <div className="wk-col wk-col--stagger">
            {workCard(second, 1)}
          </div>
        </div>
      </section>

      {/* ============ RESEARCH — the same cards, the whole card is the link === */}
      <section className="wk-section" id="research">
        <h2 className="wk-kicker">research</h2>

        {grid(
          research.map((r, i) => (
            <motion.a
              key={i}
              href={r.href}
              className="wk-card"
              data-tip={r.tip}
              target="_blank"
              rel="noopener noreferrer"
              {...anim(i)}
            >
              <div className="wk-media">
                <video src={r.videoSrc} loop muted autoPlay playsInline preload="metadata" />
                {badges(r.tags)}
              </div>
              <div className="wk-caption">
                <h3 className="wk-title">{r.title}</h3>
                <p className="wk-desc">{r.desc}</p>
                <p className="wk-meta">
                  {r.meta} · with {r.authors.replace("Obidur Rahman, ", "")}
                </p>
              </div>
            </motion.a>
          ))
        )}
      </section>

      {/* ================= RECOGNITION ========================================== */}
      <section className="wk-section">
        <h2 className="wk-kicker">recognition</h2>

        {grid(
          recognition.map((r, i) =>
            noteCard(i, { title: r.lead, desc: r.note, meta: r.when, tip: r.tip })
          )
        )}
      </section>

      <div className="site-foot">
        <SiteFooter />
      </div>
    </div>
  );
}
