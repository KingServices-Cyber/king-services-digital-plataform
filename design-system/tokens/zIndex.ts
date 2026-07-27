/**
 * Z-Index tokens — King Services Digital Platform Design System.
 * Escala em camadas nomeadas para evitar "z-index wars" (valores mágicos
 * espalhados pelo código). Use sempre o token, nunca um número solto.
 */

export const zIndex = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
  toast: 1700,
  max: 9999,
} as const;

export type ZIndexToken = keyof typeof zIndex;

export default zIndex;
