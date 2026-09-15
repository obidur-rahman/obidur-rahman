/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Obidur Rahman, research engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#111113",
          color: "#f5f4f0",
          padding: 64,
        }}
      >
        {/* glyph field */}
        <div style={{ position: "absolute", top: 48, left: 56, display: "flex", fontSize: 40, letterSpacing: 6, color: "#55555c" }}>+_+</div>
        <div style={{ position: "absolute", top: 40, right: 64, display: "flex", fontSize: 30, color: "#55555c" }}>↓</div>
        <div style={{ position: "absolute", bottom: 48, right: 64, display: "flex", fontSize: 44, color: "#3c3c42" }}>×</div>
        <div style={{ position: "absolute", bottom: 56, left: 64, display: "flex", fontSize: 24, letterSpacing: 4, color: "#55555c" }}>CHITTOGRAM · BD</div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 28,
            width: "100%",
          }}
        >
          <div style={{ display: "flex", fontSize: 26, letterSpacing: 8, color: "#8a8a92" }}>
            STUDENT RESEARCHER · R&amp;D ENGINEER
          </div>
          <div style={{ display: "flex", fontSize: 110, fontWeight: 700, letterSpacing: -4 }}>
            Obidur Rahman<span style={{ color: "#e5312b" }}>.</span>
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#b9b9c0" }}>
            AI that runs anywhere, for people who need it.
          </div>
        </div>
      </div>
    ),
    size
  );
}
