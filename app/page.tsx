import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://apstic.com";
const description = "Apstic designs and builds AI-enabled workflows that connect the tools your team already uses—with clear human review and a focus on dependable operations.";

export const metadata: Metadata = {
  title: "AI Workflows Built Around Your Business",
  description,
  keywords: [
    "AI workflow automation",
    "business process automation",
    "AI integrations",
    "CRM automation",
    "document processing",
    "Apstic",
  ],
  openGraph: {
    title: "AI Workflows Built Around Your Business | Apstic",
    description,
    url: siteUrl,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        alt: "Apstic builds AI-enabled workflows around the tools your team already uses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Workflows Built Around Your Business | Apstic",
    description,
    images: [`${siteUrl}/og-image.jpg`],
  },
};

export default function Home() {
  return <HomePage />;
}
