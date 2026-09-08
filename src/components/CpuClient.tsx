"use client";

export function CpuClient() {
  return (
    <>
      <style>{`
        .kc-hero {
          width: 100%;
          padding: 72px 128px 64px;
          background:
            radial-gradient(ellipse at 25% 25%, rgba(168, 213, 162, 0.25) 0%, transparent 55%),
            radial-gradient(ellipse at 75% 15%, rgba(248, 199, 216, 0.15) 0%, transparent 45%),
            radial-gradient(ellipse at 50% 85%, rgba(255, 244, 214, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 60%, rgba(155, 212, 229, 0.12) 0%, transparent 40%),
            linear-gradient(165deg, #fcfcfa 0%, #f9f7f4 40%, #f5f3ef 100%);
          background-blend-mode: normal, screen, lighten, overlay, normal;
          display: flex;
          justify-content: center;
          border-bottom: 1px solid rgba(31, 29, 28, 0.06);
        }
        .kc-hero-inner { max-width: 1725px; width: 100%; }
        .kc-hero-label {
          font-family: "PP Lettra Mono Ultralight Italic", monospace;
          font-size: 14px;
          font-weight: 200;
          font-style: italic;
          letter-spacing: -0.06em;
          color: rgba(31, 29, 28, 0.25);
          margin-bottom: 16px;
        }
        .kc-hero-title {
          font-family: "PP Lettra Mono Ultralight Italic", monospace;
          font-size: clamp(28px, 3.6vw, 48px);
          font-weight: 200;
          font-style: italic;
          letter-spacing: -0.1em;
          line-height: 1.1;
          color: rgb(31, 29, 28);
          margin: 0 0 20px;
          max-width: 900px;
        }
        .kc-hero-authors {
          font-family: var(--font-dm-sans), "DM Sans", sans-serif;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: -0.02em;
          color: rgba(31, 29, 28, 0.45);
          line-height: 1.6;
          margin: 0 0 2px;
        }
        .kc-hero-authors a {
          color: inherit;
          text-decoration: underline;
          text-decoration-style: dashed;
          text-decoration-thickness: 1px;
          text-underline-offset: 4px;
          text-decoration-color: rgba(31, 29, 28, 0.3);
          transition: color 0.4s cubic-bezier(0.44, 0, 0.56, 1), text-decoration-color 0.4s cubic-bezier(0.44, 0, 0.56, 1);
        }
        .kc-hero-authors a:hover { color: rgb(31, 29, 28); text-decoration-style: solid; text-decoration-color: rgba(31, 29, 28, 0.65); }
        .kc-hero-venue {
          font-family: var(--font-dm-sans), "DM Sans", sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: -0.01em;
          color: rgba(31, 29, 28, 0.3);
          margin: 0 0 20px;
        }
        .kc-hero-abstract {
          font-family: var(--font-dm-sans), "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 300;
          line-height: 1.65;
          letter-spacing: -0.02em;
          color: rgba(31, 29, 28, 0.5);
          max-width: 780px;
          margin: 0 0 24px;
        }
        .kc-hero-links { display: flex; flex-flow: row wrap; gap: 12px; }
        .kc-hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-dm-sans), "DM Sans", sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 10px 22px;
          border: 1px solid rgba(31, 29, 28, 0.15);
          color: rgba(31, 29, 28, 0.5);
          transition: color 0.4s cubic-bezier(0.44, 0, 0.56, 1), border-color 0.4s cubic-bezier(0.44, 0, 0.56, 1);
        }
        .kc-hero-btn:hover { color: rgb(31, 29, 28); border-color: rgb(31, 29, 28); }

        .kc-body { width: 100%; }
        .kc-content { padding: 0 128px 64px; }

        .kc-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin: 20px 0;
        }
        .kc-card {
          border: 1px solid rgba(31, 29, 28, 0.08);
          padding: 20px;
          background: rgba(255, 255, 255, 0.5);
        }
        .kc-card h4 {
          font-family: var(--font-dm-sans), "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 400;
          letter-spacing: -0.03em;
          margin: 0 0 2px;
          color: rgb(31, 29, 28);
        }
        .kc-card .kc-card-meta {
          font-family: var(--font-dm-sans), "DM Sans", sans-serif;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: -0.02em;
          color: rgba(31, 29, 28, 0.25);
          margin-bottom: 10px;
        }
        .kc-card p {
          font-family: var(--font-dm-sans), "DM Sans", sans-serif;
          font-size: 13px;
          font-weight: 300;
          line-height: 1.55;
          letter-spacing: -0.02em;
          color: rgba(31, 29, 28, 0.5);
          margin: 0;
        }
        .kc-card.rec { border-color: rgba(31, 29, 28, 0.2); background: rgba(31, 29, 28, 0.02); }

        .kc-chips {
          display: flex;
          flex-flow: row wrap;
          gap: 6px;
          margin: 16px 0;
        }
        .kc-chip {
          font-family: var(--font-dm-sans), "DM Sans", sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: -0.01em;
          color: rgba(31, 29, 28, 0.4);
          border: 1px solid rgba(31, 29, 28, 0.08);
          padding: 4px 10px;
        }

        .kc-table-wrap {
          overflow-x: auto;
          margin: 20px 0;
          border: 1px solid rgba(31, 29, 28, 0.06);
        }
        .kc-table {
          width: 100%;
          border-collapse: collapse;
          font-family: var(--font-dm-sans), "DM Sans", sans-serif;
          font-size: 13.5px;
          font-weight: 300;
          letter-spacing: -0.02em;
        }
        .kc-table th {
          font-weight: 400;
          color: rgba(31, 29, 28, 0.35);
          text-align: left;
          padding: 12px 16px;
          background: rgba(31, 29, 28, 0.02);
          border-bottom: 1px solid rgba(31, 29, 28, 0.08);
        }
        .kc-table td {
          padding: 12px 16px;
          border-bottom: 1px solid rgba(31, 29, 28, 0.04);
          color: rgba(31, 29, 28, 0.55);
        }
        .kc-table tr:last-child td { border-bottom: none; }
        .kc-table .hl td { color: rgb(31, 29, 28); font-weight: 400; background: rgba(31, 29, 28, 0.02); }

        .kc-ph {
          border: 1px dashed rgba(31, 29, 28, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 48px 24px;
          margin: 24px 0;
          font-family: var(--font-dm-sans), "DM Sans", sans-serif;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: -0.01em;
          color: rgba(31, 29, 28, 0.2);
          background: rgba(31, 29, 28, 0.01);
        }
        .kc-ph-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin: 24px 0;
        }
        .kc-ph-row .kc-ph { margin: 0; }

        .kc-cite {
          font-family: var(--font-dm-sans), "DM Sans", sans-serif;
          font-size: 12.5px;
          font-weight: 300;
          line-height: 1.7;
          letter-spacing: -0.01em;
          color: rgba(31, 29, 28, 0.5);
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(31, 29, 28, 0.06);
          padding: 20px 24px;
          margin: 16px 0 0;
          white-space: pre-wrap;
          word-break: break-word;
        }

        @media (max-width: 1199.98px) {
          .kc-hero { padding: 48px 32px 40px; }
          .kc-content { padding: 0 32px 48px; }
        }
        @media (max-width: 809.98px) {
          .kc-hero { padding: 36px 16px 32px; }
          .kc-hero-title { font-size: 24px; }
          .kc-hero-abstract { font-size: 14px; }
          .kc-hero-links { flex-flow: column; gap: 8px; }
          .kc-content { padding: 0 16px 32px; }
          .kc-grid-3 { grid-template-columns: 1fr; }
          .kc-ph-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <div>
        <header className="kc-hero">
          <div className="kc-hero-inner">
            <p className="kc-hero-label">Original Research &middot; 2026</p>
            <h1 className="kc-hero-title">
              CPU-Constrained Deep Learning<br />
              for Tomato Disease Detection
            </h1>
            <p className="kc-hero-authors">
              <a href="/">Obidur Rahman</a><sup>*</sup>, Lipon Chandra Das,
              Arnab Aich, Abu Saiman Md Taiham, Atif Ibna Latif
            </p>
            <p className="kc-hero-venue">Under Review, Springer Book Proceedings</p>
            <p className="kc-hero-abstract">
              Agriculture faces 40% yield loss from disease. While GPUs power modern AI, they
              remain inaccessible to developing regions where farmers rely on basic laptops.
              We benchmark ResNet-50, ConvNeXt-Tiny, and FastViT-T8 on consumer CPU hardware,
              identifying models that balance accuracy with real-world deployability.
            </p>
            <div className="kc-hero-links">
              <a href="#" className="kc-hero-btn">Paper PDF</a>
              <a href="#" className="kc-hero-btn">GitHub Repo</a>
              <a href="#" className="kc-hero-btn">Dataset</a>
            </div>
          </div>
        </header>

        <div className="kc-body">
          <div className="kc-content">

            <div className="ob-sections">
              <p className="ob-section-label">Introduction</p>
              <div className="ob-section-body">
                <p>
                  Prior studies (DenseNet, Inception V3) relied on NVIDIA Tesla or RTX GPUs &mdash;
                  hardware financially inaccessible to smallholder farmers in South Asia and Africa.
                  These farmers depend on consumer-grade laptops or mobile devices. Our work addresses
                  this gap by identifying a model that balances <strong>accuracy</strong> and{" "}
                  <strong>inference speed</strong> on standard CPUs, enabling accessible disease
                  detection for the 180M+ ton global tomato market.
                </p>
              </div>
            </div>

            <div className="ob-sections">
              <p className="ob-section-label">Method</p>
              <div className="ob-section-body">
                <p>
                  We evaluated three architectures on an AMD Ryzen 5 5600G (6C/12T, no GPU).
                </p>

                <div className="kc-grid-3">
                  <div className="kc-card">
                    <h4>ResNet-50</h4>
                    <div className="kc-card-meta">25.6M params &middot; Baseline</div>
                    <p>Traditional CNN. Established stability but computationally heavy for CPU inference.</p>
                  </div>
                  <div className="kc-card">
                    <h4>ConvNeXt-Tiny</h4>
                    <div className="kc-card-meta">29.0M params &middot; Modern CNN</div>
                    <p>Transformer-inspired architecture with 7&times;7 kernels. Highest parameter count.</p>
                  </div>
                  <div className="kc-card rec">
                    <h4>FastViT-T8</h4>
                    <div className="kc-card-meta">4.03M params &middot; Hybrid</div>
                    <p>CNN-Transformer hybrid. 6&times; smaller. Optimized for edge inference.</p>
                  </div>
                </div>

                <div className="kc-chips">
                  <span className="kc-chip">Batch: 8 (Eff: 32)</span>
                  <span className="kc-chip">Optimizer: AdamW</span>
                  <span className="kc-chip">LR: 1e-4 &rarr; 5e-5</span>
                  <span className="kc-chip">Cosine Decay</span>
                  <span className="kc-chip">RandomResizedCrop + Flip</span>
                  <span className="kc-chip">Input: 224&times;224</span>
                </div>

                <div className="kc-ph">
                  <span>PLACEHOLDER: architecture_diagram.jpg — Model architecture comparison</span>
                </div>
              </div>
            </div>

            <div className="ob-sections">
              <p className="ob-section-label">Dataset</p>
              <div className="ob-section-body">
                <p>
                  PlantVillage subset &mdash; 16,012 images across 10 disease classes. Class imbalance
                  ratio of 8.6:1 (Yellow Leaf Curl: 3,209 vs Mosaic Virus: 373). Standard 70/15/15
                  train/val/test split.
                </p>
                <div className="kc-ph">
                  <span>PLACEHOLDER: dataset_samples.jpg — Sample leaf images per class</span>
                </div>
              </div>
            </div>

            <div className="ob-sections">
              <p className="ob-section-label">Results</p>
              <div className="ob-section-body">
                <p>
                  FastViT-T8 delivers the best speed-accuracy tradeoff:{" "}
                  <strong>99.66% accuracy</strong> at <strong>0.022s/img</strong> (45 FPS),
                  57% faster than ConvNeXt-Tiny while losing only 0.22% accuracy.
                  ConvNeXt-Tiny achieves the highest accuracy (99.88%) but at 0.051s/img.
                </p>

                <div className="kc-table-wrap">
                  <table className="kc-table">
                    <thead>
                      <tr>
                        <th>Model</th>
                        <th>Accuracy</th>
                        <th>Precision</th>
                        <th>Recall</th>
                        <th>F1</th>
                        <th>Latency</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>ConvNeXt-Tiny</td>
                        <td>99.88%</td>
                        <td>0.999</td>
                        <td>0.998</td>
                        <td>0.998</td>
                        <td>0.051s</td>
                      </tr>
                      <tr className="hl">
                        <td>FastViT-T8</td>
                        <td>99.66%</td>
                        <td>0.997</td>
                        <td>0.996</td>
                        <td>0.996</td>
                        <td>0.022s</td>
                      </tr>
                      <tr>
                        <td>ResNet-50</td>
                        <td>97.69%</td>
                        <td>0.978</td>
                        <td>0.976</td>
                        <td>0.976</td>
                        <td>0.055s</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="kc-ph-row">
                  <div className="kc-ph">
                    <span>PLACEHOLDER: benchmark_chart.png<br />Accuracy vs speed scatter plot</span>
                  </div>
                  <div className="kc-ph">
                    <span>PLACEHOLDER: confusion_matrix.png<br />Confusion matrix heatmap</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="ob-sections">
              <p className="ob-section-label">Limitations</p>
              <div className="ob-section-body">
                <p>Several caveats limit the generalisability of these findings:</p>
                <ul>
                  <li><b>Data leakage.</b> Images split randomly, not by plant ID. Reported accuracies are likely upper bounds.</li>
                  <li><b>Single seed.</b> Results based on seed=42. Multi-seed validation needed to confirm the 0.22% gap significance.</li>
                  <li><b>Lab conditions.</b> PlantVillage is a controlled dataset. Real-world field images with complex backgrounds will degrade performance.</li>
                  <li><b>Overfitting signal.</b> ConvNeXt reached 100% training accuracy vs 99.88% validation &mdash; suggests memorisation in the largest model.</li>
                </ul>
              </div>
            </div>

            <div className="ob-sections">
              <p className="ob-section-label">Citation</p>
              <div className="ob-section-body">
                <p>If this work is useful in your research, please cite:</p>
                <div className="kc-cite">
                  @inproceedings&#123;rahman2026cpu,{"\n"}
                  &nbsp;&nbsp;title=&#123;CPU-Constrained Deep Learning for Tomato Disease Detection:
                  Traditional, Modern, and Hybrid CNN Comparison&#125;,{"\n"}
                  &nbsp;&nbsp;author=&#123;Rahman, Obidur and Das, Lipon Chandra and Aich, Arnab and
                  Taiham, Abu Saiman Md and Latif, Atif Ibna&#125;,{"\n"}
                  &nbsp;&nbsp;booktitle=&#123;Springer Book Proceedings&#125;,{"\n"}
                  &nbsp;&nbsp;year=&#123;2026&#125;,{"\n"}
                  &nbsp;&nbsp;note=&#123;Under Review&#125;,{"\n"}
                  &#125;
                </div>
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
                <a href="/">Home</a>
              </nav>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
