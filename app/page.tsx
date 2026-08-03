import type { Metadata } from "next";
import { HeroSection } from "./sections/HeroSection";
import { FeatureBar } from "./sections/FeatureBar";
import { WhyChooseSection } from "./sections/WhyChooseSection";
import { PlansSection } from "./sections/PlansSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { FAQSection } from "./sections/FAQSection";
import { CTASection } from "./sections/CTASection";
import { StatsSection } from "./sections/StatsSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureBar />
      <StatsSection />
      <WhyChooseSection />
      <PlansSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
