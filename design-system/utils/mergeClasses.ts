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
  "rounded-",
  "shadow-",
  "font-",
  "leading-",
  "tracking-",
  "z-",
  "opacity-",
  "duration-",
  "ease-",
  "pointer-events-",
  "translate-x-",
  "translate-y-",
  "scale-x-",
  "scale-y-",
  "scale-",
  "rotate-",
  "skew-x-",
  "skew-y-",
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

const VISIBILITY_VALUES = new Set(["visible", "invisible", "collapse"]);

/**
 * Prefixos sobrecarregados no Tailwind: a mesma raiz (`border-`, `text-`,
 * `bg-`) tanto ajusta cor quanto uma propriedade diferente (largura, tamanho
 * de fonte, imagem de fundo). Agrupá-los apenas pelo prefixo apagaria, por
 * exemplo, `border-[1.5px]` ao lado de `border-purple-600` — só o valor
 * "tipo cor" desses prefixos entra no grupo compartilhado; o resto vira
 * chave própria (equivalente a não mesclar, o comportamento seguro).
 */
const AMBIGUOUS_COLOR_PREFIXES = ["bg-", "text-", "border-"];

const COLOR_KEYWORDS = new Set([
  "white",
  "black",
  "transparent",
  "current",
  "inherit",
]);

function isColorValue(value: string): boolean {
  if (COLOR_KEYWORDS.has(value)) return true;
  // ex.: purple-600, primary-500, neutral-50
  if (/^[a-z]+-(50|100|200|300|400|500|600|700|800|900|950)$/.test(value)) {
    return true;
  }
  // ex.: [#5B2A8C], [rgb(...)], [hsl(...)]
  if (/^\[(#|rgb|hsl)/.test(value)) return true;
  return false;
}

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
  if (VISIBILITY_VALUES.has(rest)) return "visibility";

  const ambiguousPrefix = AMBIGUOUS_COLOR_PREFIXES.find((p) => rest.startsWith(p));
  if (ambiguousPrefix) {
    const value = rest.slice(ambiguousPrefix.length);
    return isColorValue(value) ? `${ambiguousPrefix}color` : rest;
  }

  // Normaliza o sinal de negativo (ex.: `-translate-y-1`) para o mesmo grupo
  // da versão positiva (`translate-y-0`) — ambos disputam o mesmo eixo do
  // transform / a mesma propriedade, só com valores diferentes.
  const unsigned = rest.startsWith("-") ? rest.slice(1) : rest;
  const prefix = CONFLICT_PREFIXES.find((p) => unsigned.startsWith(p));
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
