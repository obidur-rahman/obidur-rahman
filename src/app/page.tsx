import type { Metadata } from "next";
import { HomeClient } from "@/components/HomeClient";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "Obidur Rahman",
    description:
      "Student researcher and R&D engineer in Chattogram. I build AI that runs on ordinary laptops, for people who need it.",
    type: "website",
    url: "/",
    siteName: "Obidur Rahman",
  },
  twitter: {
    card: "summary_large_image",
    title: "Obidur Rahman",
    description:
      "Student researcher and R&D engineer in Chattogram. I build AI that runs on ordinary laptops, for people who need it.",
  },
};

export default function Page() {
  return <HomeClient />;
}
