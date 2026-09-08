"use client";

import { useState } from "react";

export function AboutClient() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("obidur.shawal@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* noop */ }
  };

  return (
    <div className="ob-about">
      <div className="ob-about-inner" id="first-content">
        <div className="ob-page-title">
          <h1 className="ob-page-title-text">About Me</h1>
        </div>

        <div className="ob-sections">
          <p className="ob-section-label">Background</p>
          <div className="ob-section-body">
            <p>
              Hi, people from the Internet. I&apos;m Obidur Rahman (ওবায়দুর রহমান in Bangla characters).
            </p>
            <p>
              I am currently a Research and Development Engineer at{" "}
              <a href="https://northaxis.xyz" className="ob-tag" target="_blank" rel="noopener noreferrer" style={{ background: "rgba(15, 37, 64, 1.0)", color: "#fff" }}>Northaxis</a>, where I build AI features and intelligent agent systems for real-world products. I am also completing a Bachelor of Science in Mathematics at{" "}
              <a href="https://cu.ac.bd" className="ob-tag" target="_blank" rel="noopener noreferrer" style={{ background: "#A3423C", color: "#fff" }}>University of Chittagong</a>. I was born and raised in Chattogram, Bangladesh.
            </p>
            <p>
              You can find my work on{" "}
              <a href="https://github.com/ashfinnn" className="ob-tag" target="_blank" rel="noopener noreferrer" style={{ background: "#1a1a1a", color: "#fff" }}>GitHub</a>. Say hello at{" "}
              <span className="ob-email" onClick={handleCopyEmail}>
                obidur.shawal@gmail.com
              </span>{" "}{copied && <span className="ob-copied">Copied!</span>} or find me on{" "}
              <a href="https://linkedin.com/in/obidur-rahman-shawal" className="ob-tag" target="_blank" rel="noopener noreferrer" style={{ background: "#0077B5", color: "#fff" }}>LinkedIn</a>.
            </p>
          </div>

          <p className="ob-section-label">Research</p>
          <div className="ob-section-body">
            <p>I do research in artificial intelligence. I enjoy studying how intelligent systems learn, reason, and solve real-world problems. My work follows two connected directions: Learning and Representation and Intelligent Systems.</p>
            <ul>
              <li>
                <b>Learning and Representation</b> — I study machine learning methods that improve how intelligent systems learn from data. My interests include deep learning, representation learning, computer vision, speech emotion recognition, model evaluation, and generalisation. I also enjoy studying learning theory and efficient learning methods. My recent work includes{" "}
                <a href="public/obidur_cv.pdf" className="ob-tag" target="_blank" rel="noopener noreferrer" style={{ background: "#1a365d", color: "#fff" }}>agricultural disease detection</a>,{" "}
                cross-corpus speech emotion recognition, and the theoretical study of interpolation-based oversampling.
              </li>
              <li>
                <b>Intelligent Systems</b> — I build AI systems that can reason, interact, and solve practical problems. My work focuses on large language models,{" "}
                <a href="https://northaxis.xyz" className="ob-tag" target="_blank" rel="noopener noreferrer" style={{ background: "#0081FB", color: "#fff" }}>AI agents</a>,{" "}
                <a href="https://github.com/ashfinnn" className="ob-tag" target="_blank" rel="noopener noreferrer" style={{ background: "#DDCECD", color: "#1a1a1a" }}>retrieval-augmented generation</a>,{" "}
                and intelligent software systems. I enjoy turning research ideas into reliable tools that people can use. I am also interested in multimodal AI and the future of general-purpose intelligent systems.
              </li>
            </ul>
          </div>

          <p className="ob-section-label">Hobbies</p>
          <div className="ob-section-body">
            <p>
              Outside of research, I love playing video games, watching long-form video essays, and wasting time doom-scrolling Instagram. I enjoy clean user interfaces, good typography, and well-made indie games. I am always happy to talk about AI, games, design, or the occasional internet meme.
            </p>
          </div>
        </div>
      </div>

      <footer className="ob-footer">
        <div className="ob-footer-inner">
          <div className="ob-footer-left">
            <span className="ob-footer-name">Obidur Rahman</span>
            <span className="ob-footer-copy">&copy;2026</span>
          </div>
          <nav className="ob-footer-links">
            <a href="https://github.com/ashfinnn" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/obidur-rahman-shawal" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:obidur.shawal@gmail.com">Email</a>
            <a href="public/obidur_cv.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
