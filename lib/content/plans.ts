export type PlanCategory = "pf" | "pj";

export type Plan = {
  id: string;
  name: string;
  subtitle: string;
  speed: string;
  priceMonthly: number;
  priceAnnual: number;
  features: string[];
  highlighted: boolean;
  badge?: string;
  category: PlanCategory;
  consultOnly?: boolean;
};

// Preços conforme catálogo oficial Vivo — Fixa Básica FTTH (residencial)
export const PF_PLANS: Plan[] = [
  {
    id: "pf-400mega",
    name: "400 Mega",
    subtitle: "Ideal para navegar, assistir séries e trabalhar em casa.",
    speed: "400 Mbps",
    priceMonthly: 79.99,
    priceAnnual: 71.99,
    features: [
      "Streaming HD e 4K, redes sociais, home office",
      "Até 4 dispositivos simultâneos com estabilidade",
      "Wi-Fi incluso — instalação grátis em até 48h",
      "Suporte técnico especializado",
    ],
    highlighted: false,
    category: "pf",
  },
  {
    id: "pf-600mega",
    name: "600 Mega",
    subtitle: "Para famílias conectadas que não abrem mão da velocidade.",
    speed: "600 Mbps",
    priceMonthly: 94.99,
    priceAnnual: 84.99,
    features: [
      "Streaming 4K em vários dispositivos ao mesmo tempo",
      "Games online, vídeo chamadas em alta qualidade",
      "Wi-Fi potente incluso — instalação grátis",
      "Suporte técnico 24/7",
    ],
    highlighted: true,
    badge: "Mais Popular",
    category: "pf",
  },
  {
    id: "pf-1giga",
    name: "1 Giga",
    subtitle: "Ultra velocidade para quem exige o melhor da fibra.",
    speed: "1 Gbps",
    priceMonthly: 199.99,
    priceAnnual: 179.99,
    features: [
      "Velocidade máxima para toda a família",
      "Games, 4K e home office sem qualquer travamento",
      "Wi-Fi de alta performance incluso",
      "Suporte prioritário 24/7",
    ],
    highlighted: false,
    category: "pf",
  },
  {
    id: "pf-2giga",
    name: "2 Giga",
    subtitle: "O plano mais rápido para power users e home offices exigentes.",
    speed: "2 Gbps",
    priceMonthly: 399.99,
    priceAnnual: 359.99,
    features: [
      "2 Gbps de velocidade — o mais rápido disponível",
      "Downloads e uploads instantâneos",
      "Wi-Fi mesh de longo alcance incluso",
      "Suporte prioritário 24/7 com atendimento dedicado",
    ],
    highlighted: false,
    badge: "Velocidade Máxima",
    category: "pf",
  },
];

// Preços conforme catálogo oficial Vivo — Fixa Básica FTTH e Fixa Avançada (empresarial)
export const PJ_PLANS: Plan[] = [
  {
    id: "pj-fibra-400mega",
    name: "Fibra 400 Mega",
    subtitle: "Internet fibra óptica para pequenas empresas e escritórios.",
    speed: "400 Mbps",
    priceMonthly: 79.99,
    priceAnnual: 71.99,
    features: [
      "Internet fibra óptica 400 Mega",
      "Ideal para escritórios com até 10 colaboradores",
      "Wi-Fi empresarial incluso — instalação grátis",
      "Suporte técnico especializado",
    ],
    highlighted: false,
    category: "pj",
  },
  {
    id: "pj-fibra-1giga",
    name: "Fibra 1 Giga",
    subtitle: "Alta velocidade fibra para médias empresas e home offices corporativos.",
    speed: "1 Gbps",
    priceMonthly: 199.99,
    priceAnnual: 179.99,
    features: [
      "Internet fibra óptica 1 Giga simétrico",
      "Para equipes com muitos dispositivos conectados",
      "IP fixo para VPN e acesso remoto",
      "Suporte prioritário 24/7",
    ],
    highlighted: true,
    badge: "Mais Contratado",
    category: "pj",
  },
  {
    id: "pj-dedicado-100mega",
    name: "Dedicado 100 Mega",
    subtitle: "Link dedicado com velocidade e disponibilidade garantidas.",
    speed: "100 Mbps dedicado",
    priceMonthly: 500.0,
    priceAnnual: 450.0,
    features: [
      "Link dedicado 100% — velocidade garantida",
      "Velocidade simétrica: upload = download",
      "SLA de disponibilidade 99,7%",
      "Monitoramento 24/7 + IP fixo incluso",
    ],
    highlighted: false,
    badge: "Link Garantido",
    category: "pj",
  },
  {
    id: "pj-dedicado-200mega",
    name: "Dedicado 200 Mega",
    subtitle: "Solução de alta disponibilidade para grandes empresas.",
    speed: "200 Mbps dedicado",
    priceMonthly: 0,
    priceAnnual: 0,
    consultOnly: true,
    features: [
      "Link dedicado 100% — 200 Mega simétrico",
      "SLA de disponibilidade 99,9%",
      "NOC dedicado e monitoramento proativo",
      "Gerente de conta + proposta personalizada",
    ],
    highlighted: false,
    badge: "Grandes Empresas",
    category: "pj",
  },
];

export const PLANS: Plan[] = [...PF_PLANS, ...PJ_PLANS];

export type Benefit = {
  icon: string;
  title: string;
  description: string;
};

export const BENEFITS: Benefit[] = [
  {
    icon: "clock",
    title: "Atendimento 24/7",
    description: "Suporte dedicado para tirar dúvidas e resolver problemas a qualquer hora.",
  },
  {
    icon: "map-pin",
    title: "Cobertura local especializada",
    description: "Conhecemos a região e oferecemos o melhor sinal para sua área.",
  },
  {
    icon: "infinity",
    title: "Sem limite de franquia",
    description: "Navegue à vontade, sem se preocupar com bloqueios ou redução de velocidade.",
  },
  {
    icon: "zap",
    title: "Instalação rápida e gratuita",
    description: "Nossa equipe chega até você com agilidade e sem custos extras.",
  },
];

export type HeroFeature = {
  icon: string;
  title: string;
  description: string;
};

export const HERO_FEATURES: HeroFeature[] = [
  {
    icon: "wifi",
    title: "Fibra Óptica Forte",
    description: "Conexão ultra estável para navegar sem interrupções.",
  },
  {
    icon: "heart",
    title: "Atendimento Humanizado",
    description: "Fale com pessoas reais, sem burocracia ou robôs.",
  },
  {
    icon: "rocket",
    title: "Instalação Rápida e Gratuita",
    description: "Conecte-se a usar no mesmo dia, sem pagar a mais por isso.",
  },
];

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "A KingServices transformou nossa infraestrutura de telecomunicação. O atendimento consultivo fez toda a diferença na escolha das soluções certas para nosso negócio.",
    name: "Roberto M.",
    role: "Diretor de TI — Indústria",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "Desde que migramos para a KingServices, nosso suporte técnico ficou muito mais ágil. O pós-venda ativo realmente funciona.",
    name: "Carla S.",
    role: "Gerente de Operações — Comércio",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "Conectividade estável em todas as nossas filiais era um desafio. A KingServices entregou a solução completa com internet dedicada e monitoramento 24/7.",
    name: "Fernando L.",
    role: "CEO — Logística",
    rating: 5,
  },
  {
    id: "4",
    quote:
      "Excelente custo-benefício e o melhor: sem burocracia. Em poucos dias já estava tudo funcionando perfeitamente.",
    name: "Mariana T.",
    role: "Proprietária — Escritório de Advocacia",
    rating: 5,
  },
];

export const FAQ_ITEMS = [
  {
    question: "Qual a cobertura da KingServices?",
    answer:
      "Atendemos São José do Rio Preto e região com fibra óptica de alta velocidade. Consulte a disponibilidade para o seu endereço.",
  },
  {
    question: "Como funciona a instalação?",
    answer:
      "A instalação é gratuita e feita em até 48h após a contratação. Nossa equipe técnica cuida de tudo, incluindo a configuração do Wi-Fi.",
  },
  {
    question: "Posso trocar de plano depois?",
    answer:
      "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento, sem multa ou burocracia.",
  },
  {
    question: "Existe fidelidade?",
    answer:
      "No plano mensal não há fidelidade. O plano anual tem desconto especial com permanência mínima de 12 meses.",
  },
  {
    question: "Como funciona o suporte técnico?",
    answer:
      "Nosso suporte funciona 24/7 via WhatsApp, telefone e chat. Você fala com pessoas reais, sem robôs.",
  },
];
