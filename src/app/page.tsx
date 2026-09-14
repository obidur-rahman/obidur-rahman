import type { Metadata } from "next";
import { HomeClient } from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Obidur Rahman",
  description:
    "Research engineer in Chattogram. I build AI that runs on ordinary laptops, for people who need it.",
  openGraph: {
    title: "Obidur Rahman",
    description:
      "Research engineer in Chattogram. I build AI that runs on ordinary laptops, for people who need it.",
    type: "website",
    url: "https://obidur.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Obidur Rahman",
    description:
      "Research engineer in Chattogram. I build AI that runs on ordinary laptops, for people who need it.",
    images: ["https://framerusercontent.com/assets/TTpb510CPWLBQ8CSIL7fug2g2Q.jpg"],
  },
};

export default function Page() {
  return <HomeClient />;
}
