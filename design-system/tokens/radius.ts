/**
 * Border radius tokens — King Services Digital Platform Design System.
 * `card` e `pill` preservam os valores legados definidos em
 * `tailwind.config.ts` (16px e 999px).
 */

export const radius = {
  none: "0px",
  sm: "0.25rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  "2xl": "1.25rem",
  "3xl": "1.5rem",
  card: "16px",
  pill: "999px",
  full: "9999px",
} as const;

export type RadiusToken = keyof typeof radius;

export default radius;
