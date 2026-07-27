/**
 * Color tokens — King Services Digital Platform Design System.
 *
 * `primary` and `secondary` são âncoras da identidade visual aprovada na Fase 1
 * (ver `design-system/tokens.json` e `tailwind.config.ts`):
 *   - primary-600  = #5B2A8C (purple-600)
 *   - primary-700  = #4A2172 (purple-700)
 *   - primary-900  = #2A1240 (purple-900)
 *   - secondary-300 = #C9A0F0 (lilac-300)
 *   - secondary-500 = #A873E0 (lilac-500)
 *
 * As demais posições da escala (50–900) foram interpoladas a partir dessas
 * âncoras para compor uma escala Enterprise completa, sem alterar os tokens
 * legados. Qualquer mudança de paleta deve ser aprovada antes de propagar
 * para `tailwind.config.ts`.
 */

export type ColorScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

/** Escala primária (Purple) — cor de marca. */
export const primary: ColorScale = {
  50: "#F5F0FB",
  100: "#E9DDF6",
  200: "#D3BBED",
  300: "#BC98E3",
  400: "#9F75D4",
  500: "#7D4FB8",
  600: "#5B2A8C",
  700: "#4A2172",
  800: "#391A58",
  900: "#2A1240",
};

/** Escala secundária (Lilac) — acentos e destaques. */
export const secondary: ColorScale = {
  50: "#FBF7FE",
  100: "#F3E9FC",
  200: "#E4D0F7",
  300: "#C9A0F0",
  400: "#B989E8",
  500: "#A873E0",
  600: "#9159C7",
  700: "#7642A3",
  800: "#5A3179",
  900: "#3E2254",
};

/** Escala neutra (grayscale) — âncoras: graphite, mist, fog. */
export const neutral: ColorScale = {
  50: "#F7F6FA",
  100: "#EFEDF4",
  200: "#D8D3E0",
  300: "#C0B8CC",
  400: "#9C93AC",
  500: "#7A7189",
  600: "#5C5468",
  700: "#443D4E",
  800: "#342E3C",
  900: "#2A2438",
};

/** Estado de sucesso (verde). */
export const success: ColorScale = {
  50: "#F0FCF4",
  100: "#DBF7E3",
  200: "#B8EFC9",
  300: "#86E0A6",
  400: "#4FC97D",
  500: "#2EAD5C",
  600: "#1F8A47",
  700: "#1B6C39",
  800: "#18542F",
  900: "#144328",
};

/** Estado de atenção (âmbar). */
export const warning: ColorScale = {
  50: "#FFFAEB",
  100: "#FFEFC2",
  200: "#FFDD8A",
  300: "#FFC24D",
  400: "#FFA71F",
  500: "#F2900A",
  600: "#C96F06",
  700: "#9F5308",
  800: "#7C400D",
  900: "#64350F",
};

/** Estado de perigo/erro (vermelho). */
export const danger: ColorScale = {
  50: "#FEF2F2",
  100: "#FDDEDE",
  200: "#FBC0C0",
  300: "#F79999",
  400: "#F16969",
  500: "#E63C3C",
  600: "#C22525",
  700: "#9E1F1F",
  800: "#7C1D1D",
  900: "#641C1C",
};

/** Estado informativo (azul). */
export const info: ColorScale = {
  50: "#EFF7FF",
  100: "#DBEBFF",
  200: "#B8D9FF",
  300: "#8AC2FF",
  400: "#55A3FF",
  500: "#2E85F0",
  600: "#1C67D1",
  700: "#1A52A8",
  800: "#1B4384",
  900: "#1A386B",
};

/** Cores absolutas, sem escala. */
export const base = {
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
  current: "currentColor",
} as const;

/**
 * Aliases semânticos para superfícies e fundo.
 * Valores default (modo claro) — o modo escuro é definido em `themes/dark.ts`.
 */
export const surface = {
  DEFAULT: base.white,
  raised: base.white,
  sunken: neutral[50],
  overlay: "rgba(42, 18, 64, 0.6)", // baseado em primary-900
} as const;

export const background = {
  DEFAULT: neutral[50],
  tinted: neutral[50], // equivalente ao "mist" legado
  inverted: primary[900],
} as const;

export const colors = {
  primary,
  secondary,
  neutral,
  success,
  warning,
  danger,
  info,
  surface,
  background,
  ...base,
} as const;

export type ColorToken = keyof typeof colors;
export type SemanticColorScale = "success" | "warning" | "danger" | "info";

export default colors;
