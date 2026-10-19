export type KingIACategory = {
  slug: string;
  label: string;
  tagline: string;
};

export type KingIASolution = {
  id: number;
  slug: string;
  title: string;
  desc: string;
  category: string;
  tags: string[];
};

export type KingIAPlan = {
  slug: string;
  name: string;
  price: string;
  highlight?: boolean;
  features: string[];
};

export const KING_IA_CATEGORIES: KingIACategory[] = [
  { slug: "atrair", label: "Atrair", tagline: "Gere mais leads e visibilidade" },
  { slug: "converter", label: "Converter", tagline: "Transforme interesse em vendas" },
  { slug: "atender", label: "Atender", tagline: "Atendimento inteligente 24/7" },
  { slug: "operar", label: "Operar", tagline: "Automatize processos internos" },
  { slug: "analisar", label: "Analisar", tagline: "Dados e insights para decidir melhor" },
  { slug: "evoluir", label: "Evoluir", tagline: "Estratégia e consultoria em IA" },
];

export const KING_IA_SOLUTIONS: KingIASolution[] = [
  // Atrair
  {
    id: 1,
    slug: "agente-captacao-leads",
    title: "Agente de Captação de Leads",
    desc: "Robô que prospecta ativamente por WhatsApp, Instagram e e-mail, qualificando contatos antes de passar ao comercial.",
    category: "atrair",
    tags: ["WhatsApp", "Prospecção", "Automação"],
  },
  {
    id: 2,
    slug: "seo-ia",
    title: "SEO com IA",
    desc: "Geração automatizada de conteúdo otimizado para buscadores — artigos, meta descriptions e palavras-chave com IA.",
    category: "atrair",
    tags: ["SEO", "Conteúdo", "Google"],
  },
  {
    id: 3,
    slug: "gestao-trafego-pago",
    title: "Gestão de Tráfego Pago com IA",
    desc: "Otimização contínua de campanhas no Google e Meta Ads com ajuste automático de lances e segmentação.",
    category: "atrair",
    tags: ["Google Ads", "Meta Ads", "ROI"],
  },
  // Converter
  {
    id: 4,
    slug: "assistente-vendas",
    title: "Assistente de Vendas IA",
    desc: "Copiloto de vendas que sugere argumentos, detecta objeções e guia o vendedor em tempo real durante a negociação.",
    category: "converter",
    tags: ["Vendas", "Copiloto", "Conversão"],
  },
  {
    id: 5,
    slug: "proposta-automatica",
    title: "Proposta Automática",
    desc: "Geração instantânea de propostas comerciais personalizadas com base no perfil e histórico do lead.",
    category: "converter",
    tags: ["Propostas", "Personalização", "Agilidade"],
  },
  {
    id: 6,
    slug: "chatbot-qualificacao",
    title: "Chatbot de Qualificação",
    desc: "Agente conversacional que qualifica leads via chat no site ou WhatsApp, agendando reuniões automaticamente.",
    category: "converter",
    tags: ["Chatbot", "Agendamento", "WhatsApp"],
  },
  // Atender
  {
    id: 7,
    slug: "atendente-virtual-whatsapp",
    title: "Atendente Virtual WhatsApp",
    desc: "IA que responde dúvidas, emite 2ª via de boleto, abre chamados e escala para humano quando necessário — 24/7.",
    category: "atender",
    tags: ["WhatsApp", "Suporte", "24/7"],
  },
  {
    id: 8,
    slug: "voice-bot",
    title: "Voice Bot",
    desc: "Atendimento telefônico automatizado com voz natural para triagem de chamadas, agendamentos e FAQs.",
    category: "atender",
    tags: ["Telefonia", "Voz", "Automação"],
  },
  {
    id: 9,
    slug: "central-omnichannel",
    title: "Central Omnichannel com IA",
    desc: "Unifica WhatsApp, e-mail, chat e redes sociais em uma única fila inteligente com roteamento automático.",
    category: "atender",
    tags: ["Omnichannel", "Roteamento", "CRM"],
  },
  {
    id: 10,
    slug: "agente-pos-venda",
    title: "Agente de Pós-venda",
    desc: "Robô que acompanha a jornada pós-compra, coleta NPS, antecipa churn e dispara ações de retenção.",
    category: "atender",
    tags: ["Retenção", "NPS", "Churn"],
  },
  // Operar
  {
    id: 11,
    slug: "automacao-documentos",
    title: "Automação de Documentos",
    desc: "Leitura, extração e classificação automática de contratos, notas fiscais e formulários com OCR + IA.",
    category: "operar",
    tags: ["OCR", "Documentos", "Extração"],
  },
  {
    id: 12,
    slug: "integracao-sistemas",
    title: "Integração de Sistemas com IA",
    desc: "Conexão inteligente entre ERP, CRM e ferramentas legadas sem necessidade de desenvolvimento manual.",
    category: "operar",
    tags: ["ERP", "CRM", "Integração"],
  },
  {
    id: 13,
    slug: "agente-rh",
    title: "Agente de RH",
    desc: "Automatiza triagem de currículos, onboarding de colaboradores e responde dúvidas frequentes de RH.",
    category: "operar",
    tags: ["RH", "Recrutamento", "Onboarding"],
  },
  {
    id: 14,
    slug: "automacao-financeira",
    title: "Automação Financeira",
    desc: "Conciliação bancária, categorização de despesas e alertas de inadimplência com zero intervenção manual.",
    category: "operar",
    tags: ["Finanças", "Conciliação", "Inadimplência"],
  },
  // Analisar
  {
    id: 15,
    slug: "dashboard-ia",
    title: "Dashboard de IA",
    desc: "Painel executivo com insights automáticos sobre vendas, operação e clientes — atualizado em tempo real.",
    category: "analisar",
    tags: ["Dashboard", "Insights", "Tempo real"],
  },
  {
    id: 16,
    slug: "analise-sentimento",
    title: "Análise de Sentimento",
    desc: "Monitora avaliações, menções e conversas para medir a percepção de marca e antecipar crises.",
    category: "analisar",
    tags: ["Sentimento", "Reputação", "Monitoramento"],
  },
  {
    id: 17,
    slug: "previsao-demanda",
    title: "Previsão de Demanda",
    desc: "Modelos preditivos que antecipam variações de vendas, estoque e sazonalidade para decisões mais assertivas.",
    category: "analisar",
    tags: ["Previsão", "Estoque", "Machine Learning"],
  },
  // Evoluir
  {
    id: 18,
    slug: "consultoria-ia",
    title: "Consultoria em IA",
    desc: "Diagnóstico completo dos processos da empresa e mapa de oportunidades para implementação de IA.",
    category: "evoluir",
    tags: ["Consultoria", "Diagnóstico", "Estratégia"],
  },
  {
    id: 19,
    slug: "treinamento-equipes",
    title: "Treinamento de Equipes em IA",
    desc: "Capacitação prática para times comerciais, operacionais e de liderança usarem IA no dia a dia.",
    category: "evoluir",
    tags: ["Treinamento", "Capacitação", "Equipe"],
  },
  {
    id: 20,
    slug: "ia-sob-medida",
    title: "IA Sob Medida",
    desc: "Desenvolvimento de agentes e modelos de IA personalizados para as necessidades específicas do seu negócio.",
    category: "evoluir",
    tags: ["Custom AI", "Desenvolvimento", "Personalizado"],
  },
];

export const KING_IA_PLANS: KingIAPlan[] = [
  {
    slug: "start",
    name: "King Start",
    price: "sob consulta",
    features: [
      "Até 2 soluções ativas",
      "Suporte por e-mail",
      "Relatórios mensais",
      "Integrações básicas",
    ],
  },
  {
    slug: "pro",
    name: "King Pro",
    price: "sob consulta",
    highlight: false,
    features: [
      "Até 5 soluções ativas",
      "Suporte via WhatsApp (horário comercial)",
      "Relatórios semanais",
      "Integrações avançadas",
      "Dashboard de IA incluso",
    ],
  },
  {
    slug: "business",
    name: "King Business",
    price: "sob consulta",
    highlight: true,
    features: [
      "Até 10 soluções ativas",
      "Suporte dedicado 24/7",
      "Relatórios em tempo real",
      "Integrações ilimitadas",
      "Dashboard de IA incluso",
      "Consultoria mensal (2h)",
    ],
  },
  {
    slug: "enterprise",
    name: "King Enterprise",
    price: "sob consulta",
    features: [
      "Soluções ilimitadas",
      "Gerente de conta exclusivo",
      "SLA contratual",
      "Integrações ilimitadas",
      "Dashboard personalizado",
      "Consultoria mensal (8h)",
      "IA Sob Medida incluso",
    ],
  },
];

export const KING_IA_PRICING_NOTE =
  "Todos os planos são cotados conforme o volume de uso, número de integrações e complexidade das automações. Solicite uma proposta personalizada.";
