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
import { FinalCTASection } from "@/components/final-cta-section";

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
          <TestimonialsSection />
          <BenefitsSection />
          <CustomSystemsSection />
          <FinalCTASection />
        </div>
      </div>
    </main>
  );
}
