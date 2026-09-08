import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import "./responsive.css";
import { Navbar } from "@/components/Navbar";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Obidur Rahman",
  description: "Research & development engineer translating complexity into intelligent systems.",
  openGraph: {
    title: "Obidur Rahman",
    description: "Research & development engineer building AI features and intelligent agent systems.",
    images: [{
      url: "https://framerusercontent.com/images/U2x1VERveHLImjvyW4YEcPI65MI.jpg",
      width: 2700,
      height: 2160,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Obidur Rahman",
    description: "Research & development engineer building AI features and intelligent agent systems.",
    images: ["https://framerusercontent.com/images/U2x1VERveHLImjvyW4YEcPI65MI.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
