"use client";

import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: [0.44, 0, 0.56, 1] as [number, number, number, number],
    },
  }),
};

export function CpuClient() {
  return (
    <>
      <style>{`
        .kc-hero {
          width: 100%;
          padding: 80px 64px 56px;
          border-bottom: 1px solid var(--line);
        }
        .kc-hero-inner { max-width: 1100px; width: 100%; }
        .kc-hero-label {
          font-family: var(--font-body), "Inter", sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink-mid);
          margin-bottom: 14px;
        }
        .kc-hero-title {
          font-family: var(--font-display), "Spectral", Georgia, serif;
          font-size: clamp(28px, 4vw, 52px);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: var(--ink);
          margin: 0 0 24px;
          max-width: 680px;
        }
        .kc-hero-authors {
          font-family: var(--font-body), "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: var(--ink-mid);
          line-height: 1.7;
          margin: 0 0 4px;
        }
        .kc-hero-authors a {
          color: var(--ink);
          text-decoration: none;
          border-bottom: 1px solid var(--accent);
          padding-bottom: 1px;
          transition: color 0.3s;
        }
        .kc-hero-authors a:hover { color: var(--accent); }
        .kc-hero-venue {
          font-family: var(--font-body), "Inter", sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-mid);
          margin: 0 0 24px;
        }
        .kc-hero-abstract {
          font-family: var(--font-body), "Inter", sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.75;
          color: var(--ink-soft);
          max-width: 620px;
          margin: 0 0 32px;
        }
        .kc-hero-links { display: flex; flex-flow: row wrap; gap: 10px; }
        .kc-hero-btn {
          display: inline-flex;
          align-items: center;
          font-family: var(--font-body), "Inter", sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 10px 20px;
          border: 1px solid var(--line);
          border-radius: 0;
          color: var(--ink-mid);
          background: transparent;
          transition: border-color 0.3s, color 0.3s;
        }
        .kc-hero-btn:hover { border-color: var(--accent); color: var(--accent); }

        .kc-body { width: 100%; }
        .kc-content { padding: 64px; max-width: 1100px; margin: 0 auto; }

        .kc-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin: 28px 0;
        }
        .kc-card {
          padding: 24px;
          border: 1px solid var(--line);
          border-radius: 0;
          background: var(--paper);
        }
        .kc-card h3 {
          font-family: var(--font-display), "Spectral", Georgia, serif;
          font-size: 17px;
          font-weight: 700;
          letter-spacing: -0.01em;
          margin: 0 0 4px;
          color: var(--ink);
        }
        .kc-card .kc-card-meta {
          font-family: var(--font-body), "Inter", sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-faint);
          margin-bottom: 10px;
        }
        .kc-card p {
          font-family: var(--font-body), "Inter", sans-serif;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.6;
          color: var(--ink-mid);
          margin: 0;
        }
        .kc-card.rec { border-color: var(--accent); background: var(--accent-soft); }

        .kc-chips {
          display: flex;
          flex-flow: row wrap;
          gap: 8px;
          margin: 24px 0;
        }
        .kc-chip {
          font-family: var(--font-body), "Inter", sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: var(--ink-mid);
          border: 1px solid var(--line);
          padding: 5px 12px;
          border-radius: 0;
        }

        .kc-table-wrap {
          overflow-x: auto;
          margin: 28px 0;
          border: 1px solid var(--line);
          border-radius: 0;
        }

        .kc-table {
          width: 100%;
          border-collapse: collapse;
          font-family: var(--font-body), "Inter", sans-serif;
          font-size: 13px;
        }
        .kc-table th {
          font-weight: 600;
          text-align: left;
          padding: 14px 16px;
          background: var(--paper-warm);
          color: var(--ink-mid);
          text-transform: uppercase;
          font-size: 11px;
          letter-spacing: 0.08em;
          border-bottom: 1px solid var(--line);
        }
        .kc-table td {
          padding: 14px 16px;
          border-bottom: 1px solid var(--line);
          color: var(--ink-soft);
        }
        .kc-table tr:last-child td { border-bottom: none; }
        .kc-table .hl td { font-weight: 600; background: var(--accent-soft); color: var(--ink); }

        .kc-ph {
          border: 1px dashed var(--line);
          border-radius: 0;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 48px 20px;
          margin: 28px 0;
          font-family: var(--font-body), "Inter", sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: var(--ink-mid);
        }
        .kc-ph-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin: 28px 0;
        }
        .kc-ph-row .kc-ph { margin: 0; }

        .kc-cite {
          font-family: var(--font-body), "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.7;
          color: var(--ink-mid);
          background: var(--paper-warm);
          border: 1px solid var(--line);
          border-radius: 0;
          padding: 20px;
          margin: 20px 0 0;
          white-space: pre-wrap;
          word-break: break-word;
        }

        @media (max-width: 1024px) {
          .kc-hero { padding: 56px 40px; }
          .kc-content { padding: 40px; }
        }
        @media (max-width: 640px) {
          .kc-hero { padding: 40px 20px; }
          .kc-hero-title { font-size: 32px; }
          .kc-hero-abstract { font-size: 14px; }
          .kc-hero-links { flex-flow: column; gap: 8px; }
          .kc-content { padding: 24px 20px; }
          .kc-grid-3 { grid-template-columns: 1fr; }
          .kc-ph-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <div>
        <header className="kc-hero">
          <div className="kc-hero-inner">
            <motion.p className="kc-hero-label" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>Original Research · 2026</motion.p>
            <motion.h1 className="kc-hero-title" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] as [number, number, number, number] }}>
              CPU-Constrained Deep Learning<br />
              for Tomato Disease Detection
            </motion.h1>
            <motion.p className="kc-hero-authors" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.4 }}>
              <a href="/">Obidur Rahman</a>, Lipon Chandra Das,
              Arnab Aich, Abu Saiman Md Taiham, Atif Ibna Latif
            </motion.p>
            <motion.p className="kc-hero-venue" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15, duration: 0.4 }}>Under Review, Springer Book Proceedings</motion.p>
            <motion.p className="kc-hero-abstract" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.4 }}>
              Agriculture loses 40% of its yield to disease. GPUs power modern AI, but they
              stay out of reach for farmers in developing regions who rely on basic laptops.
              We benchmark ResNet-50, ConvNeXt-Tiny, and FastViT-T8 on consumer CPU hardware,
              looking for models that balance accuracy with real-world deployability.
            </motion.p>
            <motion.div className="kc-hero-links" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.4 }}>
              <a href="/obidur_cv.pdf" target="_blank" rel="noopener noreferrer" className="kc-hero-btn">Paper PDF</a>
              <a href="https://github.com/obidur-rahman" target="_blank" rel="noopener noreferrer" className="kc-hero-btn">GitHub Repo</a>
              <a href="https://www.kaggle.com/datasets/emmarex/plantdisease" target="_blank" rel="noopener noreferrer" className="kc-hero-btn">Dataset</a>
            </motion.div>
          </div>
        </header>

        <div className="kc-body">
          <div className="kc-content">
            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "48px" }}>
              <motion.p className="ob-section-label" custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ margin: 0, border: "none", padding: 0 }}>Introduction</motion.p>
              <div className="ob-section-body">
                <motion.p custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  Earlier studies ran their models on NVIDIA Tesla or RTX GPUs. Most farmers in
                  South Asia and Africa can&apos;t buy that hardware; they have ordinary laptops
                  and phones. We looked for a model that stays <strong>accurate</strong> and{" "}
                  <strong>fast</strong> on a plain CPU, so disease detection can reach the
                  180M+ ton global tomato market.
                </motion.p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "48px" }}>
              <motion.p className="ob-section-label" custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ margin: 0, border: "none", padding: 0 }}>Method</motion.p>
              <div className="ob-section-body">
                <motion.p custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  We evaluated three architectures on an AMD Ryzen 5 5600G (6C/12T, no GPU).
                </motion.p>
                <motion.div className="kc-grid-3" custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <div className="kc-card">
                    <h3>ResNet-50</h3>
                    <div className="kc-card-meta">25.6M params · Baseline</div>
                    <p>Traditional CNN. Stable but computationally heavy for CPU inference.</p>
                  </div>
                  <div className="kc-card">
                    <h3>ConvNeXt-Tiny</h3>
                    <div className="kc-card-meta">29.0M params · Modern CNN</div>
                    <p>Transformer-inspired architecture with 7×7 kernels. Highest parameter count.</p>
                  </div>
                  <div className="kc-card rec">
                    <h3>FastViT-T8</h3>
                    <div className="kc-card-meta">4.03M params · Hybrid</div>
                    <p>CNN-Transformer hybrid. 6× smaller. Optimized for edge inference.</p>
                  </div>
                </motion.div>
                <motion.div className="kc-chips" custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <span className="kc-chip">Batch: 8 (Eff: 32)</span>
                  <span className="kc-chip">Optimizer: AdamW</span>
                  <span className="kc-chip">LR: 1e-4 → 5e-5</span>
                  <span className="kc-chip">Cosine Decay</span>
                  <span className="kc-chip">Input: 224×224</span>
                </motion.div>
                <div className="kc-ph"><span>PLACEHOLDER: architecture_diagram.jpg</span></div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "48px" }}>
              <motion.p className="ob-section-label" custom={6} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ margin: 0, border: "none", padding: 0 }}>Dataset</motion.p>
              <div className="ob-section-body">
                <motion.p custom={7} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  PlantVillage subset, 16,012 images across 10 disease classes. Class imbalance
                  ratio of 8.6:1 (Yellow Leaf Curl: 3,209 vs Mosaic Virus: 373). Standard 70/15/15
                  train/val/test split.
                </motion.p>
                <div className="kc-ph"><span>PLACEHOLDER: dataset_samples.jpg</span></div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "48px" }}>
              <motion.p className="ob-section-label" custom={8} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ margin: 0, border: "none", padding: 0 }}>Results</motion.p>
              <div className="ob-section-body">
                <motion.p custom={9} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  FastViT-T8 gives the best balance of speed and accuracy:{" "}
                  <strong>99.66% accuracy</strong> at <strong>0.022s per image</strong> (45 FPS),
                  57% faster than ConvNeXt-Tiny while giving up only 0.22% accuracy.
                  ConvNeXt-Tiny reaches 99.88% but takes 0.051s per image.
                </motion.p>
                <motion.div className="kc-table-wrap" custom={10} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <table className="kc-table">
                    <thead>
                      <tr><th>Model</th><th>Accuracy</th><th>Precision</th><th>Recall</th><th>F1</th><th>Latency</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>ConvNeXt-Tiny</td><td>99.88%</td><td>0.999</td><td>0.998</td><td>0.998</td><td>0.051s</td></tr>
                      <tr className="hl"><td>FastViT-T8</td><td>99.66%</td><td>0.997</td><td>0.996</td><td>0.996</td><td>0.022s</td></tr>
                      <tr><td>ResNet-50</td><td>97.69%</td><td>0.978</td><td>0.976</td><td>0.976</td><td>0.055s</td></tr>
                    </tbody>
                  </table>
                </motion.div>
                <div className="kc-ph-row">
                  <div className="kc-ph"><span>PLACEHOLDER: benchmark_chart.png</span></div>
                  <div className="kc-ph"><span>PLACEHOLDER: confusion_matrix.png</span></div>
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "48px" }}>
              <motion.p className="ob-section-label" custom={11} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ margin: 0, border: "none", padding: 0 }}>Limitations</motion.p>
              <div className="ob-section-body">
                <motion.p custom={12} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>A few honest caveats before you trust these numbers:</motion.p>
                <motion.ul custom={13} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <li><b>Data leakage.</b> Images were split at random, not per plant. The reported accuracy is likely an upper bound.</li>
                  <li><b>One run.</b> Results come from a single training run. More runs are needed to confirm the 0.22% gap is real.</li>
                  <li><b>Lab photos.</b> PlantVillage was shot against plain backgrounds. Field photos will do worse.</li>
                  <li><b>Memorisation.</b> ConvNeXt hit 100% training accuracy against 99.88% validation, a sign it memorised part of the data.</li>
                </motion.ul>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "48px" }}>
              <motion.p className="ob-section-label" custom={14} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ margin: 0, border: "none", padding: 0 }}>Citation</motion.p>
              <div className="ob-section-body">
                <motion.p custom={15} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>If this work is useful in your research, please cite:</motion.p>
                <motion.div className="kc-cite" custom={16} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  @inproceedings&#123;rahman2026cpu,{"\n"}
                  &nbsp;&nbsp;title=&#123;CPU-Constrained Deep Learning for Tomato Disease Detection: Traditional, Modern, and Hybrid CNN Comparison&#125;,{"\n"}
                  &nbsp;&nbsp;author=&#123;Rahman, Obidur and Das, Lipon Chandra and Aich, Arnab and Taiham, Abu Saiman Md and Latif, Atif Ibna&#125;,{"\n"}
                  &nbsp;&nbsp;booktitle=&#123;Springer Book Proceedings&#125;,{"\n"}
                  &nbsp;&nbsp;year=&#123;2026&#125;,{"\n"}
                  &nbsp;&nbsp;note=&#123;Under Review&#125;,{"\n"}
                  &#125;
                </motion.div>
              </div>
            </div>
          </div>

          <footer className="ob-footer">
            <div className="ob-footer-left">
              <span className="ob-footer-name">Obidur Rahman</span>
              <span className="ob-footer-bangla">ওবায়দুর রহমান</span>
              <span className="ob-footer-copy">&copy;2026</span>
            </div>
            <nav className="ob-footer-links">
              <a href="https://github.com/obidur-rahman" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/obidur-rahman-shawal" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:obidur.shawal@gmail.com">Email</a>
              <a href="/">Home</a>
            </nav>
          </footer>
        </div>
      </div>
    </>
  );
}
