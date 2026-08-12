import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { Plan, PlanCategory, Testimonial } from "@/lib/content/plans";
import { PF_PLANS, PJ_PLANS, PLANS, TESTIMONIALS, FAQ_ITEMS } from "@/lib/content/plans";

export type FAQItem = { question: string; answer: string };

function rowToPlan(row: {
  id: string; name: string; subtitle: string | null; speed: string;
  price_monthly: number; price_annual: number; features: unknown;
  highlighted: boolean; badge: string | null; category?: string | null;
}): Plan {
  const consultOnly = Number(row.price_monthly) === 0;
  return {
    id: row.id,
    name: row.name,
    subtitle: row.subtitle ?? "",
    speed: row.speed,
    priceMonthly: row.price_monthly,
    priceAnnual: row.price_annual,
    features: (row.features as string[]) ?? [],
    highlighted: row.highlighted,
    badge: row.badge ?? undefined,
    category: (row.category === "pj" ? "pj" : "pf") as PlanCategory,
    consultOnly,
  };
}

export async function fetchPlans(): Promise<Plan[]> {
  try {
    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase.from("plans").select("*").order("sort_order");
    if (error || !data?.length) return PLANS;
    return data.map(rowToPlan);
  } catch {
    return PLANS;
  }
}

export async function fetchPFPlans(): Promise<Plan[]> {
  try {
    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase
      .from("plans").select("*").eq("category", "pf").order("sort_order");
    if (error || !data?.length) return PF_PLANS;
    return data.map(rowToPlan);
  } catch {
    return PF_PLANS;
  }
}

export async function fetchPJPlans(): Promise<Plan[]> {
  try {
    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase
      .from("plans").select("*").eq("category", "pj").order("sort_order");
    if (error || !data?.length) return PJ_PLANS;
    return data.map(rowToPlan);
  } catch {
    return PJ_PLANS;
  }
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  try {
    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .order("sort_order");

    if (error || !data?.length) return TESTIMONIALS;

    return data.map((row) => ({
      id: row.id,
      name: row.name,
      role: row.role ?? "",
      quote: row.quote,
      rating: row.rating,
    }));
  } catch {
    return TESTIMONIALS;
  }
}

export async function fetchFAQItems(): Promise<FAQItem[]> {
  try {
    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase
      .from("faqs")
      .select("*")
      .order("sort_order");

    if (error || !data?.length) return FAQ_ITEMS;

    return data.map((row) => ({
      question: row.question,
      answer: row.answer,
    }));
  } catch {
    return FAQ_ITEMS;
  }
}
