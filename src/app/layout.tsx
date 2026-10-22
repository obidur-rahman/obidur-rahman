import type { Metadata } from "next";
import { Spectral, Geist, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import "./responsive.css";
import { Sidebar } from "@/components/Sidebar";
import { ScrollTint } from "@/components/ScrollTint";
import { TipTracker } from "@/components/TipTracker";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const notoBengali = Noto_Serif_Bengali({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-bengali",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://obidur.vercel.app"),
  title: {
    default: "Obidur Rahman",
    template: "%s · Obidur Rahman",
  },
  description:
    "Research engineer in Chittagong. I build AI that runs on ordinary laptops, for people who need it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${spectral.variable} ${geist.variable} ${notoBengali.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Sidebar />
        <ScrollTint />
        <TipTracker />
        <main className="site-main">{children}</main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Obidur Rahman",
              alternateName: "ওবায়দুর রহমান",
              url: "https://obidur.vercel.app",
              email: "mailto:obidur.shawal@gmail.com",
              jobTitle: "Research and Development Engineer",
              knowsLanguage: ["Bengali", "Chittagonian", "Urdu", "English", "Hindi"],
              knowsAbout: [
                "Imbalanced learning",
                "Low-resource deep learning",
                "Survey methodology",
                "Data quality",
                "LLM biasedness",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "University of Chittagong",
              },
              worksFor: [
                { "@type": "Organization", name: "ELITE Research Lab LLC" },
                { "@type": "Organization", name: "NorthAxis" },
              ],
              sameAs: [
                "https://github.com/obidur-rahman",
                "https://linkedin.com/in/obidur-rahman-shawal",
              ],
              homeLocation: {
                "@type": "Place",
                name: "Chittagong, Bangladesh",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
