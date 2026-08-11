import type { Metadata } from "next";
import { fetchFAQItems, fetchPFPlans, fetchPJPlans, fetchTestimonials } from "@/lib/data";
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

export default async function HomePage() {
  const [pfPlans, pjPlans, testimonials, faqItems] = await Promise.all([
    fetchPFPlans(),
    fetchPJPlans(),
    fetchTestimonials(),
    fetchFAQItems(),
  ]);

  return (
    <>
      <HeroSection />
      <FeatureBar />
      <StatsSection />
      <WhyChooseSection />
      <PlansSection pfPlans={pfPlans} pjPlans={pjPlans} />
      <TestimonialsSection testimonials={testimonials} />
      <FAQSection items={faqItems} />
      <CTASection />
    </>
  );
}
