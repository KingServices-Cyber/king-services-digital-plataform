import { FAQ_ITEMS } from "@/lib/content/plans";
import { FAQ } from "@/components/ui/FAQ";

export function FAQSection() {
  return (
    <section className="py-16 md:py-24 px-6 bg-surface-secondary">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Dúvidas Frequentes
          </span>
          <h2 className="font-display font-bold text-[clamp(24px,3.5vw,36px)] text-text mt-3">
            Perguntas Frequentes
          </h2>
          <p className="text-text-secondary mt-3">
            Tire suas dúvidas sobre nossos planos e serviços.
          </p>
        </div>

        <FAQ items={FAQ_ITEMS} />
      </div>
    </section>
  );
}
