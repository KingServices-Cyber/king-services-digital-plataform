/**
 * cn — utilitário de composição de classNames.
 *
 * Combina o papel do `clsx` (filtrar valores falsy, aceitar arrays/objetos)
 * com o do `tailwind-merge` (resolver classes utilitárias conflitantes),
 * sem depender de nenhum dos dois pacotes — ver `mergeClasses.ts`.
 */

import { mergeClasses } from "./mergeClasses";

export type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | Record<string, boolean | null | undefined>
  | ClassValue[];

function toClassString(value: ClassValue): string {
  if (!value) return "";

  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value.map(toClassString).filter(Boolean).join(" ");
  }

  if (typeof value === "object") {
    return Object.entries(value)
      .filter(([, enabled]) => Boolean(enabled))
      .map(([className]) => className)
      .join(" ");
  }

  return "";
}

/**
 * @example
 * cn("btn", isActive && "btn-active", { "btn-disabled": disabled })
 * cn("p-2 bg-primary-500", "p-4") // => "bg-primary-500 p-4"
 */
export function cn(...inputs: ClassValue[]): string {
  const combined = inputs.map(toClassString).filter(Boolean).join(" ");
  return mergeClasses(combined);
}

export default cn;
