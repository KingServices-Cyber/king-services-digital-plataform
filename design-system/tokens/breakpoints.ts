/**
 * Breakpoint tokens — King Services Digital Platform Design System.
 * Espelha os breakpoints default do Tailwind CSS para manter consistência
 * entre classes utilitárias e lógica JS (ex.: matchMedia, hooks de resize).
 */

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export type BreakpointToken = keyof typeof breakpoints;

export default breakpoints;
