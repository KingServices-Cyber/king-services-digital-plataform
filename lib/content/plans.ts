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
};

export const PF_PLANS: Plan[] = [
  {
    id: "pf-basico",
    name: "Básico",
    subtitle: "Navegue com estabilidade para o dia a dia.",
    speed: "50 Mbps",
    priceMonthly: 99.9,
    priceAnnual: 79.9,
    features: [
      "Navegação leve, redes sociais, vídeos em HD",
      "Instalação grátis",
      "Wi-Fi potente incluso",
      "Suporte ágil e dedicado",
    ],
    highlighted: false,
    category: "pf",
  },
  {
    id: "pf-essencial",
    name: "Essencial",
    subtitle: "Mais velocidade para trabalho, vídeo e diversão.",
    speed: "150 Mbps",
    priceMonthly: 149.9,
    priceAnnual: 119.9,
    features: [
      "Streaming Full HD, vídeo chamadas, home office",
      "Instalação grátis",
      "Wi-Fi potente incluso",
      "Suporte ágil e dedicado",
    ],
    highlighted: true,
    badge: "Mais Popular",
    category: "pf",
  },
  {
    id: "pf-turbo",
    name: "Turbo",
    subtitle: "Para famílias conectadas e gamers exigentes.",
    speed: "300 Mbps",
    priceMonthly: 199.9,
    priceAnnual: 169.9,
    features: [
      "Múltiplos dispositivos simultâneos",
      "Games online sem lag",
      "Wi-Fi com alcance ampliado",
      "Suporte ágil e dedicado",
    ],
    highlighted: false,
    category: "pf",
  },
  {
    id: "pf-ultra",
    name: "Ultra",
    subtitle: "Velocidade máxima para quem exige o melhor.",
    speed: "500 Mbps",
    priceMonthly: 279.9,
    priceAnnual: 229.9,
    features: [
      "Streaming 4K em todos os dispositivos",
      "Upload simétrico de alta velocidade",
      "Wi-Fi mesh de longo alcance incluso",
      "Suporte prioritário 24/7",
    ],
    highlighted: false,
    badge: "Top de Linha",
    category: "pf",
  },
];

export const PJ_PLANS: Plan[] = [
  {
    id: "pj-starter",
    name: "Starter PME",
    subtitle: "Ideal para pequenas empresas e escritórios.",
    speed: "100 Mbps",
    priceMonthly: 199.9,
    priceAnnual: 169.9,
    features: [
      "Internet fibra dedicada 100 Mbps",
      "IP fixo incluído",
      "Suporte técnico prioritário 24/7",
      "SLA de disponibilidade 99,5%",
      "Wi-Fi empresarial incluso",
    ],
    highlighted: false,
    category: "pj",
  },
  {
    id: "pj-business",
    name: "Business",
    subtitle: "Para médias empresas que precisam de performance.",
    speed: "300 Mbps",
    priceMonthly: 349.9,
    priceAnnual: 299.9,
    features: [
      "Internet fibra dedicada 300 Mbps",
      "IP fixo + bloco IPv4",
      "Suporte técnico prioritário 24/7",
      "SLA de disponibilidade 99,8%",
      "Monitoramento proativo da rede",
    ],
    highlighted: true,
    badge: "Mais Contratado",
    category: "pj",
  },
  {
    id: "pj-corporate",
    name: "Corporate",
    subtitle: "Para empresas que exigem alta disponibilidade.",
    speed: "500 Mbps",
    priceMonthly: 549.9,
    priceAnnual: 469.9,
    features: [
      "Internet fibra dedicada 500 Mbps",
      "IP fixo + bloco IPv4 dedicado",
      "Gerente de conta exclusivo",
      "SLA de disponibilidade 99,9%",
      "Monitoramento 24/7 + relatórios",
    ],
    highlighted: false,
    category: "pj",
  },
  {
    id: "pj-enterprise",
    name: "Enterprise",
    subtitle: "Solução completa para grandes corporações.",
    speed: "1 Gbps",
    priceMonthly: 899.9,
    priceAnnual: 749.9,
    features: [
      "Internet dedicada simétrica 1 Gbps",
      "Bloco IPv4 dedicado + IPv6",
      "NOC e gerente de conta dedicados",
      "SLA 99,99% com penalidades contratuais",
      "Failover automático incluso",
    ],
    highlighted: false,
    badge: "Grandes Corporações",
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
