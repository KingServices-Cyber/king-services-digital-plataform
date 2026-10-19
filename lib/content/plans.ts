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

export type TestimonialSegment =
  | "Todos"
  | "Indústria"
  | "Comércio"
  | "Logística"
  | "Advocacia"
  | "Saúde"
  | "Tecnologia"
  | "Educação"
  | "Serviços";

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
  segment: TestimonialSegment;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "A KingServices transformou nossa infraestrutura de telecomunicação. O atendimento consultivo fez toda a diferença na escolha das soluções certas para nosso negócio.",
    name: "Roberto M.",
    role: "Diretor de TI",
    rating: 5,
    segment: "Indústria",
  },
  {
    id: "2",
    quote:
      "Desde que migramos para a KingServices, nosso suporte técnico ficou muito mais ágil. O pós-venda ativo realmente funciona.",
    name: "Carla S.",
    role: "Gerente de Operações",
    rating: 5,
    segment: "Comércio",
  },
  {
    id: "3",
    quote:
      "Conectividade estável em todas as nossas filiais era um desafio. A KingServices entregou a solução completa com internet dedicada e monitoramento 24/7.",
    name: "Fernando L.",
    role: "CEO",
    rating: 5,
    segment: "Logística",
  },
  {
    id: "4",
    quote:
      "Excelente custo-benefício e o melhor: sem burocracia. Em poucos dias já estava tudo funcionando perfeitamente.",
    name: "Mariana T.",
    role: "Proprietária",
    rating: 5,
    segment: "Advocacia",
  },
  {
    id: "5",
    quote:
      "Precisávamos de IP fixo e SLA garantido para o nosso sistema hospitalar. A KingServices entendeu a criticidade e entregou exatamente o que precisávamos.",
    name: "Dr. Paulo R.",
    role: "Diretor Administrativo",
    rating: 5,
    segment: "Saúde",
  },
  {
    id: "6",
    quote:
      "Nossa startup cresceu e a internet residencial não dava mais conta. Com o plano empresarial da KingServices, temos estabilidade para trabalhar remotamente sem quedas.",
    name: "Thiago A.",
    role: "CTO",
    rating: 5,
    segment: "Tecnologia",
  },
  {
    id: "7",
    quote:
      "Utilizamos a internet dedicada para as aulas online da nossa escola. A qualidade do sinal melhorou muito e os alunos pararam de ter problemas de conexão.",
    name: "Ana P.",
    role: "Coordenadora Pedagógica",
    rating: 5,
    segment: "Educação",
  },
  {
    id: "8",
    quote:
      "Atendo clientes em vídeo chamada o dia todo. Com o plano da KingServices nunca mais tive queda no meio de uma reunião importante.",
    name: "Juliana F.",
    role: "Consultora de RH",
    rating: 5,
    segment: "Serviços",
  },
  {
    id: "9",
    quote:
      "Tínhamos queda constante de internet nas linhas de produção. A solução dedicada da KingServices eliminou o problema e hoje operamos com zero interrupção.",
    name: "Marcos V.",
    role: "Gerente Industrial",
    rating: 5,
    segment: "Indústria",
  },
  {
    id: "10",
    quote:
      "Loja online com alto volume de pedidos precisa de conexão estável. A KingServices entregou velocidade e suporte que nosso e-commerce exigia.",
    name: "Patricia L.",
    role: "Gestora de E-commerce",
    rating: 5,
    segment: "Comércio",
  },
  {
    id: "11",
    quote:
      "Precisávamos de conectividade para nossa frota rastrear em tempo real. O suporte da KingServices foi fundamental na implantação do sistema.",
    name: "Eduardo S.",
    role: "Diretor de Operações",
    rating: 5,
    segment: "Logística",
  },
  {
    id: "12",
    quote:
      "A migração foi feita em um final de semana sem impacto nenhum nas consultas. Equipe extremamente profissional e comprometida.",
    name: "Dra. Renata C.",
    role: "Clínica Médica",
    rating: 5,
    segment: "Saúde",
  },
];

export const FAQ_ITEMS = [
  // Planos & Contratação
  {
    category: "Planos & Contratação",
    question: "Qual a cobertura da KingServices?",
    answer:
      "Atendemos São José do Rio Preto e região com fibra óptica de alta velocidade. Consulte a disponibilidade para o seu endereço diretamente pelo WhatsApp ou pelo formulário de contato — verificamos em minutos.",
  },
  {
    category: "Planos & Contratação",
    question: "Como funciona a instalação?",
    answer:
      "A instalação é gratuita e realizada em até 48h úteis após a assinatura do contrato. Nossa equipe técnica cuida de tudo: passagem de cabo, configuração do roteador e teste de qualidade do sinal antes de sair.",
  },
  {
    category: "Planos & Contratação",
    question: "Posso trocar de plano depois?",
    answer:
      "Sim. Upgrade ou downgrade podem ser feitos a qualquer momento, sem multa e sem necessidade de novo contrato. Basta entrar em contato com nossa equipe.",
  },
  {
    category: "Planos & Contratação",
    question: "Existe fidelidade nos planos?",
    answer:
      "No plano mensal não há fidelidade mínima. O plano anual oferece desconto diferenciado com permanência de 12 meses. Em ambos os casos, os termos estão detalhados no contrato antes da assinatura.",
  },
  // Suporte Técnico
  {
    category: "Suporte Técnico",
    question: "Como funciona o suporte técnico?",
    answer:
      "Nosso suporte funciona 24 horas por dia, 7 dias por semana, via WhatsApp, telefone e chat. Você fala com técnicos reais — não com atendimento automatizado. Para empresas, oferecemos gerente de conta dedicado.",
  },
  {
    category: "Suporte Técnico",
    question: "Qual o prazo para reparo em caso de queda do serviço?",
    answer:
      "Para planos residenciais, o prazo de reparo é de até 24 horas úteis. Para planos empresariais com SLA contratado, o prazo é de 4 horas. O tempo começa a contar a partir da abertura do chamado.",
  },
  {
    category: "Suporte Técnico",
    question: "A KingServices oferece monitoramento proativo do link?",
    answer:
      "Sim, para clientes empresariais. Monitoramos disponibilidade, latência e perda de pacotes em tempo real — e abrimos chamado preventivo antes que a instabilidade impacte a operação.",
  },
  // Vivo Empresas
  {
    category: "Vivo Empresas",
    question: "O que é um link dedicado e como difere da internet residencial?",
    answer:
      "Um link dedicado entrega banda simétrica e garantida exclusivamente para a sua empresa — sem compartilhamento com outros usuários. Inclui SLA de disponibilidade, IP fixo e latência previsível, essenciais para VoIP, sistemas em nuvem e videoconferências críticas.",
  },
  {
    category: "Vivo Empresas",
    question: "A KingServices atende pequenas empresas ou só grandes corporações?",
    answer:
      "Atendemos empresas de todos os portes: MEI, PME e grandes corporações. As soluções são dimensionadas para a realidade de cada operação — desde um plano empresarial básico até topologias complexas com múltiplas filiais e SD-WAN.",
  },
  {
    category: "Vivo Empresas",
    question: "É possível contratar telefonia móvel corporativa junto com o link?",
    answer:
      "Sim. Como parceira autorizada Vivo Empresas, oferecemos pacotes de telefonia móvel corporativa integrados ao contrato de conectividade. Isso simplifica a gestão e pode gerar economia na fatura consolidada.",
  },
  {
    category: "Vivo Empresas",
    question: "Como funciona o gerente de conta para empresas?",
    answer:
      "Cada cliente empresarial tem um gerente de conta dedicado: um ponto de contato único para solicitações, upgrades, renovações e resolução de problemas. O atendimento é proativo — não espere ter um problema para entrar em contato.",
  },
  // Cloud & Segurança Digital
  {
    category: "Cloud & Segurança",
    question: "A KingServices oferece backup em nuvem?",
    answer:
      "Sim. Implantamos soluções de backup em nuvem com retenção configurável, criptografia em repouso e em trânsito, e teste periódico de restauração. O backup inclui servidores, arquivos compartilhados e e-mails corporativos.",
  },
  {
    category: "Cloud & Segurança",
    question: "O que está incluído no serviço de firewall gerenciado?",
    answer:
      "Instalação e configuração do firewall de próxima geração, atualização contínua de regras e assinaturas de ameaças, monitoramento 24/7, alertas em tempo real, relatórios mensais e suporte em caso de incidentes de segurança.",
  },
  {
    category: "Cloud & Segurança",
    question: "Preciso ter equipe de TI própria para contratar soluções Cloud?",
    answer:
      "Não. Nosso modelo de serviço gerenciado cuida de toda a operação — implantação, configuração, monitoramento e atualizações. Você foca no negócio enquanto a infraestrutura funciona.",
  },
  // King IA
  {
    category: "King IA",
    question: "O que é o King IA?",
    answer:
      "King IA é o portfólio de soluções de inteligência artificial e automação da KingServices. São 20 soluções em 6 frentes — atrair, converter, atender, operar, analisar e evoluir — que ajudam empresas a ganhar eficiência sem precisar contratar uma equipe de TI ou IA dedicada.",
  },
  {
    category: "King IA",
    question: "As soluções de IA funcionam integradas com sistemas que já uso?",
    answer:
      "Sim. As soluções King IA são desenvolvidas com foco em integração: CRM, ERP, WhatsApp Business, e-mail, planilhas e sistemas específicos do seu setor. Na avaliação inicial, mapeamos os sistemas existentes e definimos as integrações necessárias.",
  },
  {
    category: "King IA",
    question: "Como começar com King IA?",
    answer:
      "O primeiro passo é um diagnóstico gratuito: entendemos os processos que você quer automatizar e recomendamos as soluções com maior retorno no menor prazo. Entre em contato e agendamos uma conversa.",
  },
];
