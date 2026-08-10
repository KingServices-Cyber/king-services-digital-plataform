import type { Metadata } from "next";
import { fetchFAQItems, fetchPlans, fetchTestimonials } from "@/lib/data";
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
  const [plans, testimonials, faqItems] = await Promise.all([
    fetchPlans(),
    fetchTestimonials(),
    fetchFAQItems(),
  ]);

  return (
    <>
      <HeroSection />
      <FeatureBar />
      <StatsSection />
      <WhyChooseSection />
      <PlansSection plans={plans} />
      <TestimonialsSection testimonials={testimonials} />
      <FAQSection items={faqItems} />
      <CTASection />
    </>
  );
}
