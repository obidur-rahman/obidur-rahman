import type { Metadata } from "next";
import { CpuClient } from "@/components/CpuClient";

export const metadata: Metadata = {
  title: "CPU-Constrained Deep Learning for Tomato Disease Detection · Obidur Rahman",
  description:
    "Benchmarking traditional, modern, and hybrid deep learning models for tomato disease classification on consumer CPU hardware.",
  openGraph: {
    title: "CPU-Constrained Deep Learning for Tomato Disease Detection",
    description:
    "Benchmarking ResNet-50, ConvNeXt-Tiny, and FastViT-T8 on consumer CPU for accessible agricultural AI.",
    type: "website",
    url: "https://obidur.vercel.app/cpu",
  },
  twitter: {
    card: "summary_large_image",
    title: "CPU-Constrained Deep Learning for Tomato Disease Detection",
    description:
      "Benchmarking ResNet-50, ConvNeXt-Tiny, and FastViT-T8 on consumer CPU for accessible agricultural AI.",
  },
};

export default function Page() {
  return <CpuClient />;
}
