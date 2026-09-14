import type { Metadata } from "next";
import { AboutClient } from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "About · Obidur Rahman",
  description:
    "Who I am, how I work, and what I can help with. Research engineer and mathematics student in Chattogram, Bangladesh.",
};

export default function Page() {
  return <AboutClient />;
}
