import type { Metadata } from "next";
import { HomeClient } from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Obidur Rahman",
  description: "Applied research and technical discovery for core AI product features, autonomous agentic workflows, and machine learning models.",
  openGraph: {
    title: "Obidur Rahman",
    description: "Applied research and technical discovery for core AI product features, autonomous agentic workflows, and machine learning models.",
    type: "website",
    images: [""],
    url: "https://obidur.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Obidur Rahman",
    description: "Applied research and technical discovery for core AI product features, autonomous agentic workflows, and machine learning models.",
    images: ["https://framerusercontent.com/assets/TTpb510CPWLBQ8CSIL7fug2g2Q.jpg"],
  },
};

export default function Page() {
  return <HomeClient />;
}
