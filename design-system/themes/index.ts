/**
 * Barrel export — Themes.
 * Ponto único de acesso aos temas claro/escuro. A aplicação hoje usa
 * apenas `light`; `themes` existe para permitir alternância futura sem
 * refatorar os componentes.
 */

export { lightTheme } from "./light";
export type { Theme } from "./light";
export { darkTheme } from "./dark";

import { lightTheme } from "./light";
import { darkTheme } from "./dark";

export const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const;

export type ThemeMode = keyof typeof themes;

export default themes;
