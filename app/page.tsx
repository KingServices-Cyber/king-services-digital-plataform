import type { Metadata } from "next";
import { fetchPFPlans, fetchPJPlans, fetchTestimonials } from "@/lib/data";
import { HeroSection } from "./sections/HeroSection";
import { FeatureBar } from "./sections/FeatureBar";
import { WhyChooseSection } from "./sections/WhyChooseSection";
import { PlansSection } from "./sections/PlansSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { CTASection } from "./sections/CTASection";
import { StatsSection } from "./sections/StatsSection";
import { KingIASection } from "./sections/KingIASection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const [pfPlans, pjPlans, testimonials] = await Promise.all([
    fetchPFPlans(),
    fetchPJPlans(),
    fetchTestimonials(),
  ]);

  return (
    <>
      <HeroSection />
      <FeatureBar />
      <StatsSection />
      <WhyChooseSection />
      <KingIASection />
      <PlansSection pfPlans={pfPlans} pjPlans={pjPlans} />
      <TestimonialsSection testimonials={testimonials.slice(0, 4)} />
      <CTASection />
    </>
  );
}
