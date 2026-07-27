import { cn } from "@/design-system";

export function ListCheck({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("list-none m-0 p-0", className)}>
      {items.map((item) => (
        <li key={item} className="text-sm text-graphite py-1.5 flex gap-2">
          <span className="text-lilac-500 font-bold">✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}
