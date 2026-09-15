import type { Metadata } from "next";
import { AboutClient } from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Obidur Rahman's background, experience, research directions, skills, and languages. Mathematics undergrad in Chattogram, research engineer at Northaxis.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About · Obidur Rahman",
    description:
      "Background, experience, research directions, skills, and languages. Mathematics undergrad in Chattogram, research engineer at Northaxis.",
    type: "profile",
    url: "/about",
    siteName: "Obidur Rahman",
  },
  twitter: {
    card: "summary_large_image",
    title: "About · Obidur Rahman",
    description:
      "Background, experience, research directions, skills, and languages. Mathematics undergrad in Chattogram, research engineer at Northaxis.",
  },
};

export default function Page() {
  return <AboutClient />;
}
