import { Hero } from "@/components/hero";
import { MarqueeSection } from "@/components/marquee-section";
import { IntegrationsSection } from "@/components/integrations-section";
import { ImpactSection } from "@/components/impact-section";
import { BeforeAfter } from "@/components/before-after";
import { WhoWeBuildFor } from "@/components/who-we-build-for";
import { StepsSection } from "@/components/steps-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { BenefitsSection } from "@/components/benefits-section";
import { CustomSystemsSection } from "@/components/custom-systems-section";
import { OtherServicesSection } from "@/components/other-services-section";
import { FinalCTASection } from "@/components/final-cta-section";
import { BlogsSection } from "@/components/blogs-section";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://apstic.com";
const ogImage = `${siteUrl}/og-image.jpg`;

export const metadata: Metadata = {
  title: "AI Business Automation Services | Apstic",
  description: "Save time, reduce costs, and automate everything that slows you down. Apstic delivers AI-powered automation for businesses of all sizes.",
  keywords: ["AI", "Automation", "Business", "AI-powered", "Automation systems", "Connect your tools", "Handle repetitive work", "Business run smoother", "Business run faster", "Business run smarter"],
  openGraph: {
    title: "AI Business Automation Services | Apstic",
    description: "Save time, reduce costs, and automate everything that slows you down. Apstic delivers AI-powered automation for businesses of all sizes.",
    url: siteUrl,
    type: "website",
    images: [
      {
        url: ogImage,
        alt: "Apstic - AI Business Automation Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Business Automation Services | Apstic",
    description: "Save time, reduce costs, and automate everything that slows you down. Apstic delivers AI-powered automation for businesses of all sizes.",
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
          {/* <TestimonialsSection /> */}
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
