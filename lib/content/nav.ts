export type NavLink = { label: string; href: string };
export type NavColumn = { title?: string; links: NavLink[] };
export type NavItem = { label: string; href: string; columns?: NavColumn[]; alignRight?: boolean };

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Planos",
    href: "/#planos",
  },
  {
    label: "Soluções",
    href: "/solucoes",
    columns: [
      {
        title: "Conectividade",
        links: [{ label: "Internet Empresarial", href: "/solucoes/internet-empresarial" }],
      },
      {
        title: "Telefonia",
        links: [{ label: "Telefonia Fixa e PABX", href: "/solucoes/telefonia-fixa-pabx" }],
      },
      {
        title: "Mobilidade",
        links: [{ label: "Telefonia Móvel Empresarial", href: "/solucoes/telefonia-movel" }],
      },
      {
        title: "Digitais",
        links: [
          { label: "Soluções Cloud", href: "/solucoes/cloud" },
          { label: "Segurança Digital", href: "/solucoes/seguranca-digital" },
          { label: "Internet das Coisas (IoT)", href: "/solucoes/iot" },
        ],
      },
    ],
  },
  {
    label: "Sobre Nós",
    href: "/sobre",
  },
  {
    label: "Depoimentos",
    href: "/#depoimentos",
  },
  {
    label: "Contato",
    href: "/contato",
  },
];
