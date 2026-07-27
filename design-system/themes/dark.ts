/**
 * Dark theme — preparado para suporte futuro a Dark Mode (Release 2.1 não
 * ativa a troca de tema na aplicação, apenas disponibiliza os valores).
 *
 * Tipado como `Theme` (mesma interface de `lightTheme`), então qualquer novo
 * papel semântico adicionado a um dos dois arquivos quebra a build do outro
 * até ser espelhado.
 */

import { colors } from "../tokens/colors";
import type { Theme } from "./light";

export const darkTheme: Theme = {
  mode: "dark",
  background: {
    page: colors.neutral[900],
    surface: colors.neutral[800],
    surfaceRaised: colors.neutral[700],
    inverted: colors.neutral[50],
  },
  text: {
    primary: colors.neutral[50],
    secondary: colors.neutral[200],
    muted: colors.neutral[400],
    inverted: colors.neutral[900],
    onPrimary: colors.white,
  },
  border: {
    DEFAULT: colors.neutral[700],
    strong: colors.neutral[600],
    focus: colors.secondary[400],
  },
  brand: {
    primary: colors.secondary[400],
    primaryHover: colors.secondary[300],
    secondary: colors.secondary[500],
  },
  feedback: {
    success: colors.success[400],
    warning: colors.warning[400],
    danger: colors.danger[400],
    info: colors.info[400],
  },
};

export default darkTheme;
