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
};

export const PLANS: Plan[] = [
  {
    id: "basico",
    name: "Básico",
    subtitle: "Navegue com estabilidade para o dia a dia.",
    speed: "50 Mbps",
    priceMonthly: 99.9,
    priceAnnual: 79.9,
    features: [
      "Navegação leve, redes sociais, vídeos em HD",
      "Instalação grátis",
      "Wi-Fi potente",
      "Suporte ágil e dedicado",
    ],
    highlighted: false,
  },
  {
    id: "essencial",
    name: "Essencial",
    subtitle: "Mais velocidade para trabalho, vídeo e diversão.",
    speed: "150 Mbps",
    priceMonthly: 149.9,
    priceAnnual: 119.9,
    features: [
      "Streaming em Full HD, chamadas de vídeo, home office",
      "Instalação grátis",
      "Wi-Fi potente",
      "Suporte ágil e dedicado",
    ],
    highlighted: true,
    badge: "Mais Popular",
  },
  {
    id: "turbo",
    name: "Turbo",
    subtitle: "Navegue com estabilidade para o dia a dia.",
    speed: "300 Mbps",
    priceMonthly: 199.9,
    priceAnnual: 169.9,
    features: [
      "Casas conectadas, jogos online, múltiplos dispositivos",
      "Instalação grátis",
      "Wi-Fi com alcance ampliado",
      "Suporte ágil e dedicado",
    ],
    highlighted: false,
  },
  {
    id: "ultra",
    name: "Ultra",
    subtitle: "Velocidade máxima para quem exige o melhor.",
    speed: "500 Mbps",
    priceMonthly: 279.9,
    priceAnnual: 229.9,
    features: [
      "Ideal para empresas e escritórios",
      "Upload simétrico",
      "Wi-Fi mesh incluso",
      "Suporte prioritário 24/7",
      "IP fixo disponível",
    ],
    highlighted: false,
    badge: "Empresarial",
  },
];

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
      "A King Services transformou nossa infraestrutura de telecomunicação. O atendimento consultivo fez toda a diferença na escolha das soluções certas para nosso negócio.",
    name: "Roberto M.",
    role: "Diretor de TI — Indústria",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "Desde que migramos para a King Services, nosso suporte técnico ficou muito mais ágil. O pós-venda ativo realmente funciona.",
    name: "Carla S.",
    role: "Gerente de Operações — Comércio",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "Conectividade estável em todas as nossas filiais era um desafio. A King Services entregou a solução completa com internet dedicada e monitoramento 24/7.",
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
    question: "Qual a cobertura da King Services?",
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
