/**
 * Shadow tokens — King Services Digital Platform Design System.
 * `card`, `header` e `mega` preservam os valores legados de
 * `tailwind.config.ts`, em tons de roxo (nunca cinza puro), reforçando a
 * identidade de marca mesmo na profundidade.
 */

export const shadows = {
  none: "none",
  sm: "0 1px 2px -1px rgba(42, 18, 64, 0.12)",
  md: "0 4px 12px -4px rgba(42, 18, 64, 0.18)",
  lg: "0 10px 30px -12px rgba(91, 42, 140, 0.3)",
  xl: "0 20px 40px -16px rgba(91, 42, 140, 0.32)",
  inner: "inset 0 2px 4px 0 rgba(42, 18, 64, 0.12)",
  card: "0 10px 30px -12px rgba(91,42,140,0.3)",
  header: "0 4px 24px -8px rgba(42,18,64,0.15)",
  mega: "0 20px 60px -20px rgba(91,42,140,0.35)",
} as const;

export type ShadowToken = keyof typeof shadows;

export default shadows;
