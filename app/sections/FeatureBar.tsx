import { HERO_FEATURES } from "@/lib/content/plans";
import { Icon } from "@/components/ui/Icons";

export function FeatureBar() {
  return (
    <section className="relative -mt-8 z-10 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {HERO_FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl border border-border p-5 flex items-start gap-4 shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                <Icon name={feature.icon} className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-text">{feature.title}</h3>
                <p className="text-sm text-text-secondary mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
