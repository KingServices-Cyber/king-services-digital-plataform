/**
 * Animation tokens — King Services Digital Platform Design System.
 * Durações e easings centralizados para transições e microinterações
 * consistentes em toda a plataforma.
 */

export const duration = {
  instant: "0ms",
  fast: "150ms",
  normal: "250ms",
  moderate: "350ms",
  slow: "500ms",
  slower: "750ms",
} as const;

export const easing = {
  linear: "linear",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  easeOut: "cubic-bezier(0, 0, 0.2, 1)",
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  bounce: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
} as const;

export const animations = {
  duration,
  easing,
} as const;

export type DurationToken = keyof typeof duration;
export type EasingToken = keyof typeof easing;

export default animations;
