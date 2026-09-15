"use client";

import { motion } from "motion/react";
import { EASE, useReducedMotion } from "@/lib/motion";
import { SectionRail } from "@/components/SectionRail";
import { Corner, Cross, Micro } from "@/components/Glyphs";

function Reveal({
  children,
  delay = 0,
  className = "",
  from: dir = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  from?: "up" | "left" | "right";
}) {
  const reduced = useReducedMotion();
  const initial =
    dir === "left"
      ? { opacity: 0, x: -36 }
      : dir === "right"
        ? { opacity: 0, x: 36 }
        : { opacity: 0, y: 20 };
  return (
    <motion.div
      className={className}
      initial={reduced ? false : initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.6, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Chip that pops in with a slight scale, staggered by index. */
function Chip({ label, i }: { label: string; i: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.span
      className="ed-chip"
      initial={reduced ? false : { opacity: 0, scale: 0.85, y: 8 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay: i * 0.045, duration: 0.4, ease: EASE }}
    >
      {label}
    </motion.span>
  );
}

/** Ledger row that slides in, staggered by index. */
function Row({
  when,
  children,
  i,
}: {
  when: string;
  children: React.ReactNode;
  i: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="ed-mini-row"
      initial={reduced ? false : { opacity: 0, x: -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay: i * 0.06, duration: 0.45, ease: EASE }}
    >
      <span className="ed-mini-when">{when}</span>
      <p>{children}</p>
    </motion.div>
  );
}

export function AboutClient() {
  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="ed-about-hero">
        <div>
          <motion.h1
            className="ed-about-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: EASE }}
          >
            The problem comes first. <em>The math follows.</em>
          </motion.h1>
          <motion.p
            className="ed-about-bn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            A few paragraphs on what I actually do, why I do it, and what I&apos;m still trying to get right.
          </motion.p>
        </div>
        <motion.div
          aria-hidden
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: EASE }}
        >
          <Cross size={80} color="var(--ink-faint)" drift />
        </motion.div>
      </section>

      {/* ================= BACKGROUND ================= */}
      <SectionRail bn="পরিচয়" en="Background">
        <Reveal className="ed-about-body">
          <p>
            Hi, people from the Internet. I&apos;m Obidur Rahman (
            <span lang="bn" className="bn">ওবায়দুর রহমান</span>).
          </p>
          <p>
            I&apos;m a <b>Student Researcher</b> at{" "}
            <a href="https://elitelab.ai" target="_blank" rel="noopener noreferrer">Elite Research Lab</a>{" "}
            and <b>Research and Development Engineer</b> at{" "}
            <a href="https://northaxis.xyz" target="_blank" rel="noopener noreferrer">Northaxis</a>,
            where I build AI features and intelligent agent systems for real-world products.
            I&apos;m also completing a <b>BSc in Mathematics</b> at the University of
            Chittagong, expected 2027. I was born and raised in Chittagong, Bangladesh.
          </p>
          <p>
            You can find my work on{" "}
            <a href="https://github.com/obidur-rahman" target="_blank" rel="noopener noreferrer">GitHub</a>.
            Say hello at{" "}
            <a href="mailto:obidur.shawal@gmail.com">obidur.shawal@gmail.com</a> or find me on{" "}
            <a href="https://linkedin.com/in/obidur-rahman-shawal" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
          </p>
          <p lang="bn" className="bn">
            আমার জন্ম ও বেড়ে ওঠা চট্টগ্রামে। বিশ্ববিদ্যালয়ে গণিত এ পড়ছি, Northaxis-এ কাজ করছি, Elite-Lab এ research করছি।
          </p>
        </Reveal>
      </SectionRail>

      {/* ================= ROLES / EXPERIENCE ================= */}
      <SectionRail bn="এখন" en="What I do">
        <div className="ed-roles">
          {[0, 1].map((idx) => (
            <Reveal key={idx} from={idx === 0 ? "left" : "right"} delay={idx * 0.1}>
              <div className="ed-role">
                {idx === 0 ? (
                  <>
                    <p className="ed-role-title">Student Researcher</p>
                    <p className="ed-role-org">
                      ELITE Research Lab LLC · Contract · Remote (Queens, NY)
                    </p>
                    <p className="ed-role-when">Sep 2026 · Present</p>
                    <p className="ed-role-desc">
                      I dig into how language models break, why they get biased,
                      why they&apos;re confidently wrong, and try to write that up
                      somewhere useful.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="ed-role-title">Research and Development Engineer</p>
                    <p className="ed-role-org">NorthAxis · Full-time · Remote</p>
                    <p className="ed-role-when">Dec 2025 · Present</p>
                    <p className="ed-role-desc">
                      Half my job is figuring out if an AI idea actually survives
                      contact with a real product. The other half is making sure it does.
                    </p>
                  </>
                )}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15}>
          <div className="ed-award">
            <Micro color="var(--red)">AWARD</Micro>
            <p>
              <b>Best Presenter</b>, 24th International Mathematics Conference, 2025.
              Awarded for the presentation of <a href="/cpu">the tomato disease detection paper</a>.
            </p>
          </div>
        </Reveal>
      </SectionRail>

      {/* ================= RESEARCH ================= */}
      <SectionRail bn="গবেষণা" en="Research">
        <Reveal className="ed-about-body">
          <p>
            I care about the moments where machine learning quietly goes wrong: the rare
            case nobody sampled, the dataset nobody checked, the benchmark that flatters
            the model. My interests sit in that gap.
          </p>
        </Reveal>
        <div className="ed-direction-stack">
          {[
            {
              tone: "b",
              corner: "tr" as const,
              title: "Imbalanced learning",
              body: "Most models learn to ignore whoever's outnumbered. I spend a lot of time arguing with that instinct.",
            },
            {
              tone: "g",
              corner: "bl" as const,
              title: "Low-resource NLP, Banglish and Bengali",
              body: "Every benchmark forgets a language eventually. Usually mine.",
            },
            {
              tone: "b",
              corner: "tr" as const,
              title: "Survey methodology and data quality",
              body: "A bad question asked to a thousand people is still a bad question. I care more about the asking than the thousand.",
            },
            {
              tone: "g",
              corner: "bl" as const,
              title: "Vision on constrained hardware / scientific ML / LLM bias",
              body: "If it only works on a GPU cluster, it doesn't work where I'm from. I build for the laptop, not the lab.",
            },
          ].map((d, i) => (
            <Reveal key={d.title} from={i % 2 === 0 ? "left" : "right"} delay={i * 0.08}>
              <div
                className={`ed-direction ${d.tone}`}
                style={{ position: "relative" }}
              >
                <Corner
                  pos={d.corner}
                  size={22}
                  color={d.tone === "b" ? "var(--w-mute)" : "var(--ink-soft-dark)"}
                />
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
          <p lang="bn" className="bn" style={{ marginTop: 16, maxWidth: "66ch" }}>
            আমার সব আগ্রহ এক জায়গায় মিলে: যেখানে তথ্য অসম্পূর্ণ, সামগ্রী সীমিত, কিংবা প্রশ্নটা শুরুতেই ভুল হয়েছে। সেখানেই মডেল সবচেয়ে বেশি ভুল করে, আর ভালো কাজের সুযোগও তখনই সবচেয়ে বেশি।
          </p>
      </SectionRail>

      {/* ================= SKILLS ================= */}
      <SectionRail bn="দক্ষতা" en="Skills">
        <Reveal>
          <div className="ed-skills">
            <div className="ed-skill-row">
              <span className="ed-skill-label">AI, ML &amp; Deep Learning</span>
              <div className="ed-chips">
                {["Agentic AI", "RAG", "LLMOps", "MLOps", "PyTorch", "LangChain", "Computer Vision"].map((s, i) => (
                  <Chip key={s} label={s} i={i} />
                ))}
              </div>
            </div>
            <div className="ed-skill-row">
              <span className="ed-skill-label">Programming</span>
              <div className="ed-chips">
                {["Python", "TypeScript", "Next.js", "React", "FastAPI", "Git"].map((s, i) => (
                  <Chip key={s} label={s} i={i} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </SectionRail>

      {/* ================= LANGUAGES ================= */}
      <SectionRail bn="ভাষা" en="Languages">
        <Reveal>
          <div className="ed-mini-rows">
            <Row when="Native" i={0}>Bengali · বাংলা</Row>
            <Row when="Native" i={1}>Chittagonian · চাটগাঁইয়া</Row>
            <Row when="Fluent" i={2}>English</Row>
            <Row when="Conversational" i={3}>Urdu · اردو</Row>
            <Row when="Conversational" i={4}>Hindi · हिन्दी</Row>
            <Row when="Reading" i={5}>Arabic · العربية</Row>
            <Row when="Learning" i={6}>Japanese · 日本語</Row>
          </div>
          <p lang="bn" className="bn" style={{ marginTop: 16, maxWidth: "66ch" }}>
            বাংলা মায়ের ভাষা, চাটগাঁইয়া মনের ভাষা। ইংরেজিতে কথা এমন ভাবে চলে, যেন বাড়িতে বড় হয়েছি। হিন্দি, আর উর্দু চলে বন্ধুদের আড্ডায়।
          </p>
        </Reveal>
      </SectionRail>

      {/* ================= HOBBIES ================= */}
      <SectionRail bn="শখ" en="Hobbies">
        <Reveal className="ed-about-body">
          <p>
            Outside of research, I play video games, watch long-form video essays, and lose a
            fair share of evenings doom-scrolling Instagram. I enjoy clean user interfaces,
            good typography, and well-made indie games.
          </p>
          <p>
            Always happy to talk about AI, games, design, or the occasional internet meme.
          </p>
          <p lang="bn" className="bn">
            কাজের ফাঁকে ভিডিও গেম খেলি, আর হাতড়ে হাতড়ে লম্বা ভিডিও প্রতিবেদন দেখি। ইনস্টাগ্রামে অযথা সময় কাটে, এ তো স্বীকারই করছি। চোখে পড়লেই ভালো লাগে: পরিচ্ছন্ন ইন্টারফেস, যত্নে সাজানো অক্ষর, আর মন দিয়ে বানানো ইন্ডি গেম।
          </p>
        </Reveal>
      </SectionRail>

      {/* ================= FOOTER ================= */}
      <footer className="ed-footer">
        <div className="ed-footer-left">
          <span className="ed-footer-name">Obidur Rahman</span>
          <span className="ed-footer-bangla" lang="bn">ওবায়দুর রহমান</span>
          <span className="ed-footer-copy">CHITTOGRAM · ©2026</span>
        </div>
        <Micro color="var(--ink-mid)">ABOUT · NO. 02/02</Micro>
        <nav className="ed-footer-links">
          <a href="https://github.com/obidur-rahman" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/obidur-rahman-shawal" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:obidur.shawal@gmail.com">Email</a>
          <a href="/obidur_cv.pdf" target="_blank" rel="noopener noreferrer">CV</a>
          <a href="/">Home</a>
        </nav>
      </footer>
    </div>
  );
}
