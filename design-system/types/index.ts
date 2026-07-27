/**
 * Tipos compartilhados do Design System.
 * Tipos específicos de cada domínio (cor, tipografia etc.) ficam junto ao
 * seu token em `tokens/*.ts` e são re-exportados por `tokens/index.ts`;
 * este arquivo cobre tipos transversais, usados por múltiplos domínios.
 */

import type { colors } from "../tokens/colors";

/** Uma das dez posições de uma escala de cor (50–900). */
export type ScaleStep = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

/** Nome de qualquer família de cor definida em `tokens/colors.ts`. */
export type ColorFamily = keyof typeof colors;

/** Tamanhos padrão usados em variantes de componentes (botões, inputs...). */
export type ComponentSize = "sm" | "md" | "lg";

/** Intenções semânticas padrão usadas em variantes de componentes. */
export type ComponentIntent =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "neutral";
