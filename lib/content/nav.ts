export type NavLink = { label: string; href: string };
export type NavColumn = { title?: string; links: NavLink[] };
export type NavItem = { label: string; href: string; columns?: NavColumn[]; alignRight?: boolean };

export const NAV_ITEMS: NavItem[] = [
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
    label: "Segmentos",
    href: "/segmentos",
    columns: [
      {
        title: "Setores atendidos",
        links: [
          { label: "Comércio", href: "/segmentos/comercio" },
          { label: "Indústria", href: "/segmentos/industria" },
          { label: "Agronegócio", href: "/segmentos/agronegocio" },
          { label: "Saúde", href: "/segmentos/saude" },
          { label: "Educação", href: "/segmentos/educacao" },
        ],
      },
      {
        links: [
          { label: "Construção Civil", href: "/segmentos/construcao-civil" },
          { label: "Logística", href: "/segmentos/logistica" },
          { label: "Escritórios Profissionais", href: "/segmentos/escritorios-profissionais" },
          { label: "Instituições Financeiras", href: "/segmentos/instituicoes-financeiras" },
          { label: "Setor Público", href: "/segmentos/setor-publico" },
        ],
      },
    ],
  },
  {
    label: "Parceiro Vivo Empresas",
    href: "/vivo-empresas",
    columns: [
      {
        title: "Sobre a parceria",
        links: [
          { label: "Portfólio completo Vivo Empresas", href: "/vivo-empresas#beneficios" },
          { label: "Consultoria especializada", href: "/vivo-empresas#beneficios" },
          { label: "Atendimento nacional", href: "/vivo-empresas#beneficios" },
          { label: "Processo comercial ágil", href: "/vivo-empresas#beneficios" },
        ],
      },
      {
        title: "Como trabalhamos",
        links: [
          { label: "Nossa metodologia", href: "/vivo-empresas#metodologia-vivo" },
          { label: "Ver página completa", href: "/vivo-empresas" },
        ],
      },
    ],
  },
  {
    label: "Cases",
    href: "/cases",
    columns: [
      {
        title: "Por segmento",
        links: [
          { label: "Indústria", href: "/cases" },
          { label: "Varejo", href: "/cases" },
          { label: "Saúde", href: "/cases" },
        ],
      },
      { links: [{ label: "Ver todos os cases", href: "/cases" }] },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    columns: [
      {
        title: "Categorias",
        links: [
          { label: "Internet Empresarial", href: "/blog?categoria=Internet+Empresarial" },
          { label: "Segurança Digital", href: "/blog?categoria=Segurança+Digital" },
          { label: "Redes Corporativas", href: "/blog?categoria=Redes+Corporativas" },
          { label: "Cloud", href: "/blog?categoria=Cloud" },
        ],
      },
      {
        title: "Recursos",
        links: [
          { label: "Central de Conteúdo", href: "/central-de-conteudo" },
          { label: "Ver todos os artigos", href: "/blog" },
        ],
      },
    ],
  },
  {
    label: "Sobre a Empresa",
    href: "/sobre",
    alignRight: true,
    columns: [
      {
        title: "A empresa",
        links: [
          { label: "Quem somos", href: "/sobre#quem-somos" },
          { label: "Nossa Atuação", href: "/sobre#nossa-atuacao" },
          { label: "Missão e Visão", href: "/sobre#missao-e-visao" },
          { label: "Nossos Valores", href: "/sobre#nossos-valores" },
          { label: "Metodologia de trabalho", href: "/sobre#metodologia-sobre" },
        ],
      },
      {
        title: "Saiba mais",
        links: [
          { label: "Diferenciais", href: "/diferenciais" },
          { label: "Parceiro Vivo Empresas", href: "/vivo-empresas" },
          { label: "Cases", href: "/cases" },
        ],
      },
    ],
  },
];
