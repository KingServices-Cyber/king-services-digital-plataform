/**
 * Barrel export — Design Tokens.
 * Fonte única de verdade para todos os valores primitivos do Design System.
 */

export * from "./colors";
export * from "./typography";
export * from "./spacing";
export * from "./radius";
export * from "./shadows";
export * from "./breakpoints";
export * from "./zIndex";
export * from "./opacity";
export * from "./animations";

import { colors } from "./colors";
import { typography } from "./typography";
import { spacing } from "./spacing";
import { radius } from "./radius";
import { shadows } from "./shadows";
import { breakpoints } from "./breakpoints";
import { zIndex } from "./zIndex";
import { opacity } from "./opacity";
import { animations } from "./animations";

export const tokens = {
  colors,
  typography,
  spacing,
  radius,
  shadows,
  breakpoints,
  zIndex,
  opacity,
  animations,
} as const;

export type DesignTokens = typeof tokens;

export default tokens;
