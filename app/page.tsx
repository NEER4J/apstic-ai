import { Hero } from "@/components/hero";
import { MarqueeSection } from "@/components/marquee-section";
import { IntegrationsSection } from "@/components/integrations-section";
import { ImpactSection } from "@/components/impact-section";
import { BeforeAfter } from "@/components/before-after";
import { WhoWeBuildFor } from "@/components/who-we-build-for";
import { StepsSection } from "@/components/steps-section";
import { BenefitsSection } from "@/components/benefits-section";
import { CustomSystemsSection } from "@/components/custom-systems-section";
import { OtherServicesSection } from "@/components/other-services-section";
import { FinalCTASection } from "@/components/final-cta-section";
import { BlogsSection } from "@/components/blogs-section";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://apstic.com";
const ogImage = `${siteUrl}/og-image.jpg`;

export const metadata: Metadata = {
  title: "AI Workflows Built Around Your Business | Apstic",
  description: "Apstic designs AI-enabled workflows that connect your existing tools, handle routine steps, and keep people in control of important decisions.",
  keywords: ["AI workflow automation", "business process automation", "AI integrations", "CRM automation", "document processing", "Apstic"],
  openGraph: {
    title: "AI Workflows Built Around Your Business | Apstic",
    description: "Apstic designs AI-enabled workflows that connect your existing tools, handle routine steps, and keep people in control of important decisions.",
    url: siteUrl,
    type: "website",
    images: [
      {
        url: ogImage,
          alt: "Apstic builds AI-enabled workflows around the tools your team already uses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Workflows Built Around Your Business | Apstic",
    description: "Apstic designs AI-enabled workflows that connect your existing tools, handle routine steps, and keep people in control of important decisions.",
    images: [ogImage],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col bg-[#fffefb] dark:bg-[#1f1515]">

        <div className="flex-1 flex flex-col w-full">
          <Hero />
          <MarqueeSection />
          <IntegrationsSection />
          <BeforeAfter />
          <ImpactSection />
          <WhoWeBuildFor />
          <StepsSection />
          <BenefitsSection />
          <CustomSystemsSection />
          <OtherServicesSection />
          <BlogsSection />
          <FinalCTASection />
        </div>
      </div>
    </main>
  );
}
