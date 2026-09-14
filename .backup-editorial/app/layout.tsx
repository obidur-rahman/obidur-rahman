import type { Metadata } from "next";
import { Spectral, Inter, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import "./responsive.css";
import { Navbar } from "@/components/Navbar";

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
  title: "Obidur Rahman",
  description:
    "Research engineer in Chattogram. I build AI that runs on ordinary laptops, for people who need it.",
  openGraph: {
    title: "Obidur Rahman",
    description:
      "Research engineer in Chattogram. I build AI that runs on ordinary laptops, for people who need it.",
    images: [{
      url: "https://framerusercontent.com/images/U2x1VERveHLImjvyW4YEcPI65MI.jpg",
      width: 2700,
      height: 2160,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Obidur Rahman",
    description:
      "Research engineer in Chattogram. I build AI that runs on ordinary laptops, for people who need it.",
    images: ["https://framerusercontent.com/images/U2x1VERveHLImjvyW4YEcPI65MI.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spectral.variable} ${inter.variable} ${notoBengali.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
