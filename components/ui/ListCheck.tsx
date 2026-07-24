export function ListCheck({ items }: { items: string[] }) {
  return (
    <ul className="list-none m-0 p-0">
      {items.map((item) => (
        <li key={item} className="text-sm text-graphite py-1.5 flex gap-2">
          <span className="text-lilac-500 font-bold">✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}
