import { cn } from "@/design-system";

export function PageHero({
  eyebrow,
  title,
  description,
  id,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
  className?: string;
}) {
  return (
    <div
      id={id}
      className={cn(
        "bg-gradient-to-br from-purple-900 to-purple-600 text-white px-4 md:px-6 py-8 md:py-11",
        className,
      )}
    >
      <div className="max-w-[1280px] mx-auto">
        <span className="text-[11px] font-semibold border border-white/25 rounded-pill px-2.5 py-1 text-lilac-300">
          {eyebrow}
        </span>
        <h1 className="font-display font-semibold mt-3.5 max-w-[640px] text-[clamp(22px,5vw,30px)]">
          {title}
        </h1>
        {description && <p className="mt-3 max-w-[560px] text-white/85 text-sm">{description}</p>}
      </div>
    </div>
  );
}
