/**
 * mergeClasses — resolução de conflitos entre classes utilitárias Tailwind.
 *
 * Implementação local e sem dependências (o projeto não usa `tailwind-merge`
 * e a Release 2.1 não deve instalar pacotes novos). Cobre os grupos de
 * conflito mais comuns do dia a dia (cor, espaçamento, layout, tipografia).
 * Para casos extremos de classes arbitrárias muito específicas, prefira
 * compor className condicionalmente em vez de depender só do merge.
 *
 * Regra: a última classe do mesmo "grupo" (e mesmo prefixo de variante,
 * ex. `hover:`, `md:`, `dark:`) vence.
 */

const CONFLICT_PREFIXES = [
  "bg-",
  "text-",
  "border-",
  "rounded-",
  "shadow-",
  "font-",
  "leading-",
  "tracking-",
  "z-",
  "opacity-",
  "duration-",
  "ease-",
  "w-",
  "h-",
  "min-w-",
  "min-h-",
  "max-w-",
  "max-h-",
  "gap-x-",
  "gap-y-",
  "gap-",
  "top-",
  "right-",
  "bottom-",
  "left-",
  "inset-",
  "p-",
  "px-",
  "py-",
  "pt-",
  "pr-",
  "pb-",
  "pl-",
  "m-",
  "mx-",
  "my-",
  "mt-",
  "mr-",
  "mb-",
  "ml-",
  "justify-",
  "items-",
  "content-",
  "self-",
  "object-",
].sort((a, b) => b.length - a.length);

const DISPLAY_VALUES = new Set([
  "block",
  "inline-block",
  "inline",
  "flex",
  "inline-flex",
  "grid",
  "inline-grid",
  "hidden",
  "table",
  "contents",
]);

const POSITION_VALUES = new Set([
  "static",
  "relative",
  "absolute",
  "fixed",
  "sticky",
]);

function splitVariant(className: string): { variant: string; rest: string } {
  const lastColon = className.lastIndexOf(":");
  if (lastColon === -1) {
    return { variant: "", rest: className };
  }
  return {
    variant: className.slice(0, lastColon + 1),
    rest: className.slice(lastColon + 1),
  };
}

function groupKey(rest: string): string {
  if (DISPLAY_VALUES.has(rest)) return "display";
  if (POSITION_VALUES.has(rest)) return "position";

  const prefix = CONFLICT_PREFIXES.find((p) => rest.startsWith(p));
  return prefix ?? rest;
}

/**
 * Recebe uma string de classes (já concatenadas, ex. pelo `cn`) e remove
 * classes conflitantes, mantendo a última ocorrência de cada grupo.
 */
export function mergeClasses(classNames: string): string {
  const classes = classNames.split(/\s+/).filter(Boolean);

  const order: string[] = [];
  const resolved = new Map<string, string>();

  for (const className of classes) {
    const { variant, rest } = splitVariant(className);
    const key = `${variant}${groupKey(rest)}`;

    if (!resolved.has(key)) {
      order.push(key);
    }
    resolved.set(key, className);
  }

  return order.map((key) => resolved.get(key)).join(" ");
}

export default mergeClasses;
