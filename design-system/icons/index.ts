/**
 * Barrel export — Icons.
 *
 * Reservado para ícones do Design System (SVG como componentes React).
 * Ainda não há ícones migrados para cá nesta release — os ícones atuais
 * (ex. `components/ui/WhatsAppIcon.tsx`) permanecem onde estão para não
 * gerar mudanças fora do escopo da Release 2.1. Novos ícones compartilhados
 * devem ser adicionados aqui, um arquivo por ícone, usando `IconProps`.
 */

import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};
