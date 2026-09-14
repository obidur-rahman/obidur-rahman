"use client";

import { motion } from "motion/react";
import { EASE, useReducedMotion } from "@/lib/motion";
import { SectionRail } from "@/components/SectionRail";

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.55, ease: EASE }}
    >
      {children}
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
            lang="bn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            প্রশ্নটা আগে আসে, গণিত আসে পরে। এই পাতায় আমার পরিচয়, গবেষণার দিক, আর কাজের বাইরের জীবন।
          </motion.p>
        </div>
        <motion.span
          className="ed-rail-arrow"
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          ↓
        </motion.span>
      </section>

      {/* ================= BACKGROUND ================= */}
      <SectionRail bn="পরিচয়" en="Background">
        <Reveal className="ed-about-body">
          <p>
            Hi, people from the Internet. I&apos;m Obidur Rahman (
            <span lang="bn" className="bn">ওবায়দুর রহমান</span> in Bangla characters).
          </p>
          <p>
            I&apos;m a research and development engineer at Northaxis, where I build AI features
            and intelligent agent systems for real-world products. I&apos;m also completing a
            BSc in Mathematics at the University of Chittagong. I was born and raised in
            Chattogram, Bangladesh.
          </p>
          <p>
            You can find my work on{" "}
            <a href="https://github.com/ashfinnn" target="_blank" rel="noopener noreferrer">GitHub</a>.
            Say hello at{" "}
            <a href="mailto:obidur.shawal@gmail.com">obidur.shawal@gmail.com</a> or find me on{" "}
            <a href="https://linkedin.com/in/obidur-rahman-shawal" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
          </p>
          <p lang="bn" className="bn">
            চট্টগ্রামে জন্ম ও বেড়ে ওঠা। চট্টগ্রাম বিশ্ববিদ্যালয়ে গণিত পড়ছি, Northaxis-এ গবেষণা ও
            উন্নয়নের কাজ করছি। মেইল করলে উত্তর পাবেন, এক–দুই দিনের মধ্যে।
          </p>
        </Reveal>
      </SectionRail>

      {/* ================= RESEARCH ================= */}
      <SectionRail bn="গবেষণা" en="Research">
        <Reveal className="ed-about-body">
          <p>
            I do research in artificial intelligence: how intelligent systems learn, reason,
            and solve real-world problems. The work follows two connected directions.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="ed-direction b">
            <h3>Learning and Representation</h3>
            <p>
              Machine learning methods that improve how systems learn from data: deep learning,
              representation learning, computer vision, speech emotion recognition, model
              evaluation, and generalisation. I also enjoy learning theory and efficient ways
              of learning.
            </p>
            <p>
              Recent work: agricultural disease detection, cross-corpus speech emotion
              recognition, and the theory behind interpolation-based oversampling.
            </p>
          </div>
          <div className="ed-direction g">
            <h3>Intelligent Systems</h3>
            <p>
              AI that reasons, interacts, and solves practical problems: large language models,
              AI agents, retrieval-augmented generation, and intelligent software systems.
              I like turning research ideas into reliable tools people can actually use.
            </p>
            <p>
              Also curious about multimodal AI and where general-purpose intelligent systems
              go next.
            </p>
          </div>
          <p lang="bn" className="bn" style={{ marginTop: 16, maxWidth: "66ch" }}>
            গবেষণার দুটো দিক: একদিকে মডেল কীভাবে ডেটা থেকে শেখে, অন্যদিকে সেই শেখা মানুষের কাজে
            লাগে এমন যন্ত্রে রূপ নেয়।
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
            কাজের বাইরে: ভিডিও গেম, লম্বা ভিডিও-এসে, আর ইনস্টাগ্রাম ঘেঁটে সময় কাটে। পরিষ্কার
            ইন্টারফেস, ভালো টাইপোগ্রাফি আর ভালো ইন্ডি গেম ভালো লাগে।
          </p>
        </Reveal>
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
          <a href="/">Home</a>
        </nav>
      </footer>
    </div>
  );
}
