/**
 * Light theme — tema padrão atual da KSDP.
 * Mapeia tokens primitivos (`tokens/colors.ts`) para papéis semânticos de
 * interface. Componentes devem consumir o tema (`theme.background.page`),
 * nunca o token primitivo diretamente (`neutral[50]`), para que a troca de
 * tema (ver `dark.ts`) funcione sem tocar em componentes.
 */

import { colors } from "../tokens/colors";

export interface Theme {
  mode: "light" | "dark";
  background: {
    page: string;
    surface: string;
    surfaceRaised: string;
    inverted: string;
  };
  text: {
    primary: string;
    secondary: string;
    muted: string;
    inverted: string;
    onPrimary: string;
  };
  border: {
    DEFAULT: string;
    strong: string;
    focus: string;
  };
  brand: {
    primary: string;
    primaryHover: string;
    secondary: string;
  };
  feedback: {
    success: string;
    warning: string;
    danger: string;
    info: string;
  };
}

export const lightTheme: Theme = {
  mode: "light",
  background: {
    page: colors.neutral[50],
    surface: colors.white,
    surfaceRaised: colors.white,
    inverted: colors.primary[900],
  },
  text: {
    primary: colors.neutral[900],
    secondary: colors.neutral[600],
    muted: colors.neutral[400],
    inverted: colors.white,
    onPrimary: colors.white,
  },
  border: {
    DEFAULT: colors.neutral[200],
    strong: colors.neutral[300],
    focus: colors.primary[600],
  },
  brand: {
    primary: colors.primary[600],
    primaryHover: colors.primary[700],
    secondary: colors.secondary[500],
  },
  feedback: {
    success: colors.success[600],
    warning: colors.warning[600],
    danger: colors.danger[600],
    info: colors.info[600],
  },
};

export default lightTheme;
