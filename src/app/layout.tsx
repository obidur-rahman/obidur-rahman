import type { Metadata } from "next";
import { Spectral, Inter, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import "./responsive.css";
import { Navbar } from "@/components/Navbar";
import { Intro } from "@/components/Intro";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
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
    "Research engineer in Chattogram. I build AI that runs on ordinary laptops, for people who need it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spectral.variable} ${inter.variable} ${notoBengali.variable}`} suppressHydrationWarning>
      <head>
        {/* Apply stored theme before paint to avoid a flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <Intro />
        <Navbar />
        {children}
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
                name: "Chattogram, Bangladesh",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
