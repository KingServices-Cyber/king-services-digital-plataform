/**
 * Typography tokens — King Services Digital Platform Design System.
 *
 * `display` (Poppins) e `body` (Inter) preservam as famílias tipográficas
 * já carregadas via `next/font` em `app/layout.tsx` (`--font-poppins`,
 * `--font-inter`). Nenhuma fonte nova é adicionada.
 */

export const fontFamily = {
  display: "var(--font-poppins), sans-serif",
  body: "var(--font-inter), sans-serif",
  mono: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
} as const;

export type FontSizeToken = {
  fontSize: string;
  lineHeight: string;
};

export const fontSize = {
  xs: { fontSize: "0.75rem", lineHeight: "1rem" },
  sm: { fontSize: "0.875rem", lineHeight: "1.25rem" },
  base: { fontSize: "1rem", lineHeight: "1.5rem" },
  md: { fontSize: "1.125rem", lineHeight: "1.75rem" },
  lg: { fontSize: "1.25rem", lineHeight: "1.75rem" },
  xl: { fontSize: "1.5rem", lineHeight: "2rem" },
  "2xl": { fontSize: "1.875rem", lineHeight: "2.25rem" },
  "3xl": { fontSize: "2.25rem", lineHeight: "2.5rem" },
  "4xl": { fontSize: "2.75rem", lineHeight: "1.15" },
  "5xl": { fontSize: "3.5rem", lineHeight: "1.1" },
  "6xl": { fontSize: "4.5rem", lineHeight: "1.05" },
} as const satisfies Record<string, FontSizeToken>;

export const fontWeight = {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
} as const;

export const lineHeight = {
  none: "1",
  tight: "1.15",
  snug: "1.3",
  normal: "1.5",
  relaxed: "1.65",
  loose: "2",
} as const;

export const letterSpacing = {
  tighter: "-0.02em",
  tight: "-0.01em",
  normal: "0em",
  wide: "0.01em",
  wider: "0.02em",
  widest: "0.08em",
} as const;

export const typography = {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
} as const;

export type FontFamilyToken = keyof typeof fontFamily;
export type FontSizeKey = keyof typeof fontSize;
export type FontWeightToken = keyof typeof fontWeight;

export default typography;
