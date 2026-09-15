import type { Metadata } from "next";
import { CpuClient } from "@/components/CpuClient";

export const metadata: Metadata = {
  title: "CPU-Constrained Deep Learning for Tomato Disease Detection",
  description:
    "Benchmarking ResNet-50, ConvNeXt-Tiny, and FastViT-T8 for tomato leaf disease classification on consumer CPU hardware. Under review, Springer Book Proceedings.",
  alternates: { canonical: "/cpu" },
  openGraph: {
    title: "CPU-Constrained Deep Learning for Tomato Disease Detection",
    description:
      "Benchmarking ResNet-50, ConvNeXt-Tiny, and FastViT-T8 for tomato leaf disease classification on consumer CPU hardware.",
    type: "article",
    url: "/cpu",
    siteName: "Obidur Rahman",
  },
  twitter: {
    card: "summary_large_image",
    title: "CPU-Constrained Deep Learning for Tomato Disease Detection",
    description:
      "Benchmarking ResNet-50, ConvNeXt-Tiny, and FastViT-T8 for tomato leaf disease classification on consumer CPU hardware.",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    name: "CPU-Constrained Deep Learning for Tomato Disease Detection: Traditional, Modern, and Hybrid CNN Comparison",
    abstract:
      "Benchmarking ResNet-50, ConvNeXt-Tiny, and FastViT-T8 for tomato leaf disease classification on consumer CPU hardware using the PlantVillage dataset.",
    url: "https://obidur.vercel.app/cpu",
    isAccessibleForFree: true,
    author: [
      { "@type": "Person", name: "Obidur Rahman", url: "https://obidur.vercel.app" },
      { "@type": "Person", name: "Lipon Chandra Das" },
      { "@type": "Person", name: "Arnab Aich" },
      { "@type": "Person", name: "Abu Saiman Md Taiham" },
      { "@type": "Person", name: "Atif Ibna Latif" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CpuClient />
    </>
  );
}
