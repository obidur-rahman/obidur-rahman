import type { Metadata } from "next";
import { AboutClient } from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "Obidur Rahman — About",
  description: "Research & development engineer building intelligent systems across machine learning, agentic workflows, and backend architecture.",
  openGraph: {
    title: "Obidur Rahman — About",
    description: "Research & development engineer building intelligent systems across machine learning, agentic workflows, and backend architecture.",
    type: "website",
    images: ["https://framerusercontent.com/assets/q70Pg134FKc5aYLp7Ipk8R6U.jpg"],
    url: "https://obidur.vercel.app/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "Obidur Rahman — About",
    description: "Research & development engineer building intelligent systems across machine learning, agentic workflows, and backend architecture.",
    images: ["https://framerusercontent.com/assets/q70Pg134FKc5aYLp7Ipk8R6U.jpg"],
  },
};

export default function Page() {
  return <AboutClient />;
}
