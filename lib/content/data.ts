export type SolutionCategory = {
  slug: string;
  name: string;
  description: string;
};

// As 4 categorias que agrupam as soluções — usadas no mega-menu "Soluções"
// do Header e para o rótulo de categoria nos cards da home.
export const SOLUTION_CATEGORIES: SolutionCategory[] = [
  {
    slug: "conectividade",
    name: "Conectividade",
    description: "Internet e conexão empresarial de alta disponibilidade.",
  },
  {
    slug: "telefonia",
    name: "Telefonia",
    description: "Voz e telefonia corporativa para o dia a dia da empresa.",
  },
  {
    slug: "mobilidade",
    name: "Mobilidade",
    description: "Planos móveis e gestão de linhas para equipes.",
  },
  {
    slug: "digitais",
    name: "Digitais",
    description: "Nuvem, segurança e soluções para transformar a operação.",
  },
];

export type SolutionPlan = {
  name: string;
  desc: string;
  features: string[];
};

export type Solution = {
  slug: string;
  title: string;
  desc: string;
  category: string;
  specs: string[];
  benefits?: string[];
  plans?: SolutionPlan[];
  targetAudience?: string[];
};

export const SOLUTIONS: Record<string, Solution> = {
  "telefonia-movel": {
    slug: "telefonia-movel",
    title: "Telefonia Móvel Empresarial",
    desc: "Planos corporativos Vivo com gestão centralizada de linhas, portabilidade ágil e controle total de custos para empresas de todos os portes.",
    category: "mobilidade",
    specs: [
      "Planos Corporativos",
      "Gestão de Linhas",
      "Portabilidade",
      "Pacotes de Dados",
      "Roaming Internacional",
      "Controle de Custos",
    ],
    benefits: [
      "Cobertura 5G da Vivo em todo o Brasil",
      "Fatura única consolidada para todas as linhas",
      "Portal empresarial para gestão centralizada",
      "Portabilidade ativada em até 24 horas",
      "Roaming nacional e internacional inclusos em planos selecionados",
      "Atendimento B2B prioritário com SLA corporativo",
      "Limite de consumo configurável por linha",
    ],
    plans: [
      {
        name: "Controle Empresarial",
        desc: "Franquia de dados definida com ligações ilimitadas. Ideal para previsibilidade de gastos.",
        features: [
          "Franquia de dados fixa",
          "Ligações ilimitadas para fixos e móveis",
          "Sem surpresas na fatura",
          "A partir de 5 linhas",
        ],
      },
      {
        name: "Pós-pago Empresarial",
        desc: "Flexibilidade total com franquia generosa e acesso prioritário à rede 5G.",
        features: [
          "Franquia de dados ampliada",
          "Acesso prioritário a 5G",
          "Compartilhamento entre linhas",
          "Roaming nacional incluso",
        ],
      },
      {
        name: "Plano Compartilhado",
        desc: "Pool de dados dividido entre múltiplas linhas. Quanto mais linhas, maior a economia.",
        features: [
          "Pool de dados entre linhas",
          "Economia de escala",
          "Gestão flexível do consumo",
          "Ideal para equipes grandes",
        ],
      },
      {
        name: "Plano Executivo",
        desc: "Para diretores e gestores com necessidade de dados em roaming internacional e benefícios premium.",
        features: [
          "Roaming internacional incluso",
          "Dados ilimitados no Brasil",
          "Benefícios premium",
          "Suporte VIP 24h",
        ],
      },
    ],
    targetAudience: [
      "Equipes de vendas externas e representantes comerciais",
      "Empresas com 5 ou mais linhas ativas",
      "Negócios com funcionários em campo ou múltiplas filiais",
      "Gestores que precisam de visibilidade e controle de gastos",
      "Empresas que buscam consolidar telefonia em um único fornecedor",
    ],
  },
  "internet-empresarial": {
    slug: "internet-empresarial",
    title: "Internet Empresarial",
    desc: "Conectividade de alta performance com SLA corporativo, IP fixo e suporte especializado para empresas de todos os portes.",
    category: "conectividade",
    specs: [
      "Fibra Óptica Empresarial",
      "Internet Dedicada",
      "Backup de Link",
      "VPN Corporativa",
      "Conectividade Multilocalidades",
    ],
    benefits: [
      "Fibra óptica de alta capacidade com SLA garantido em contrato",
      "Backup de link automático para zero downtime",
      "IP fixo incluso para acesso remoto e VPN",
      "Monitoramento 24/7 com NOC dedicado",
      "Instalação e suporte técnico especializado",
      "Escalabilidade de banda sem troca de equipamento",
      "Interligação de múltiplas unidades em uma única solução",
    ],
    plans: [
      {
        name: "Fibra Empresarial",
        desc: "Conexão de alta performance para pequenas e médias empresas com SLA de atendimento.",
        features: [
          "Velocidade simétrica",
          "IP fixo opcional",
          "Instalação inclusa",
          "Suporte técnico prioritário",
        ],
      },
      {
        name: "Internet Dedicada",
        desc: "Banda 100% exclusiva com SLA de disponibilidade garantido em contrato.",
        features: [
          "Banda simétrica garantida",
          "SLA 99,5% de uptime",
          "IP fixo incluso",
          "Monitoramento 24/7",
        ],
      },
      {
        name: "Link Backup",
        desc: "Redundância automática para garantir continuidade mesmo em falhas no link principal.",
        features: [
          "Failover automático",
          "Tecnologia diferente do link principal",
          "Sem interrupção visível",
          "Configuração inclusa",
        ],
      },
      {
        name: "Multilocalidades",
        desc: "Interliga filiais, lojas e escritórios em uma rede privada corporativa gerenciada.",
        features: [
          "MPLS / VPN gerenciada",
          "QoS para aplicações críticas",
          "Painel de monitoramento centralizado",
          "Escalável por unidade",
        ],
      },
    ],
    targetAudience: [
      "Empresas com necessidade de alta disponibilidade (varejo, saúde, financeiro)",
      "Negócios com múltiplas filiais ou pontos de venda",
      "Empresas que utilizam aplicações críticas em nuvem",
      "Operações com videoconferência e VoIP intensivos",
      "Indústrias com monitoramento e automação remota",
    ],
  },
  "telefonia-fixa-pabx": {
    slug: "telefonia-fixa-pabx",
    title: "Telefonia Fixa e PABX",
    desc: "Comunicação corporativa moderna com PABX virtual em nuvem, ramais ilimitados e integração a CRM.",
    category: "telefonia",
    specs: [
      "PABX Virtual",
      "Troncos SIP",
      "Ramais Inteligentes",
      "Gravação de Chamadas",
      "Integração com CRM",
    ],
    benefits: [
      "PABX em nuvem sem necessidade de hardware local",
      "Ramais ilimitados com número fixo único para a empresa",
      "Gravação e monitoramento de chamadas incluso",
      "Integração nativa com CRM e sistemas de atendimento",
      "Portabilidade do número existente sem troca de ramal",
      "Redução de até 60% nos custos de telefonia com VoIP",
      "Atendimento automático (URA) e fila de chamadas",
    ],
    plans: [
      {
        name: "PABX Virtual Essencial",
        desc: "Ideal para pequenas empresas com até 10 ramais. Setup simples e sem hardware.",
        features: [
          "Até 10 ramais",
          "Número fixo incluso",
          "URA básica",
          "App mobile para ramais",
        ],
      },
      {
        name: "PABX Virtual Avançado",
        desc: "Para médias empresas com recursos avançados de atendimento e relatórios.",
        features: [
          "Ramais ilimitados",
          "Gravação de chamadas",
          "Fila e distribuição automática",
          "Relatórios de atendimento",
        ],
      },
      {
        name: "Tronco SIP",
        desc: "Conecta o PABX existente à rede VoIP, reduzindo custos com ligações.",
        features: [
          "Integração com PABX existente",
          "Custo por minuto reduzido",
          "Portabilidade inclusa",
          "Configuração remota",
        ],
      },
      {
        name: "PABX + CRM Integrado",
        desc: "Identificação automática de clientes e histórico completo de atendimento.",
        features: [
          "Integração Salesforce / HubSpot",
          "Pop-up de cliente na chamada",
          "Histórico de contatos",
          "Relatórios de produtividade",
        ],
      },
    ],
    targetAudience: [
      "Empresas com centrais de atendimento e SAC",
      "Negócios que recebem alto volume de chamadas diárias",
      "Empresas que precisam de número fixo profissional",
      "Escritórios com equipes distribuídas ou home office",
      "Negócios que buscam reduzir custos de telefonia",
    ],
  },
  cloud: {
    slug: "cloud",
    title: "Soluções Cloud",
    desc: "Infraestrutura em nuvem escalável com backup automatizado, disaster recovery e segurança de dados conforme a LGPD.",
    category: "digitais",
    specs: ["Servidores Virtuais", "Backup em Nuvem", "Disaster Recovery", "Armazenamento Corporativo"],
    benefits: [
      "Infraestrutura escalável sem investimento inicial em hardware",
      "Backup automático com retenção configurável",
      "Recuperação de desastres com RTO e RPO definidos em contrato",
      "Segurança com criptografia em trânsito e em repouso",
      "Acesso de qualquer lugar com alta disponibilidade",
      "Conformidade com LGPD para armazenamento de dados",
      "Suporte técnico especializado 24/7",
    ],
    plans: [
      {
        name: "Servidor Virtual (VPS)",
        desc: "Servidor dedicado na nuvem com recursos exclusivos para sua aplicação.",
        features: [
          "CPU e RAM dedicados",
          "SSD NVMe de alta performance",
          "IP fixo incluso",
          "Backup diário",
        ],
      },
      {
        name: "Backup em Nuvem",
        desc: "Backup automatizado para arquivos, sistemas e bancos de dados.",
        features: [
          "Backup incremental diário",
          "Retenção configurável",
          "Restauração com 1 clique",
          "Criptografia AES-256",
        ],
      },
      {
        name: "Disaster Recovery",
        desc: "Réplica em ambiente secundário para retomada rápida em caso de falha.",
        features: [
          "RTO < 4 horas",
          "Failover automático",
          "Testes de recuperação periódicos",
          "Ambiente espelhado",
        ],
      },
      {
        name: "Armazenamento Corporativo",
        desc: "Armazenamento seguro para compartilhamento e colaboração entre equipes.",
        features: [
          "Capacidade escalável",
          "Compartilhamento seguro",
          "Controle de acesso por usuário",
          "Sincronização automática",
        ],
      },
    ],
    targetAudience: [
      "Empresas que precisam eliminar servidores físicos locais",
      "Negócios com necessidade de continuidade e plano de DR",
      "Startups e PMEs que precisam escalar sem investimento em TI",
      "Empresas com equipes remotas que precisam de acesso a dados",
      "Gestores de TI buscando reduzir CAPEX com infraestrutura",
    ],
  },
  "seguranca-digital": {
    slug: "seguranca-digital",
    title: "Segurança Digital",
    desc: "Proteção completa com firewall gerenciado, monitoramento contínuo e resposta rápida a incidentes para empresas de todos os segmentos.",
    category: "digitais",
    specs: [
      "Firewall Gerenciado",
      "Antivírus Corporativo",
      "Proteção Contra Ataques",
      "Monitoramento de Rede",
    ],
    benefits: [
      "Firewall gerenciado com atualização automática de regras",
      "Monitoramento 24/7 de ameaças e acessos suspeitos",
      "Resposta a incidentes com equipe especializada",
      "Proteção contra ransomware, phishing e ataques DDoS",
      "Conformidade com LGPD e normas setoriais",
      "Relatórios periódicos de segurança e vulnerabilidades",
      "VPN corporativa para acesso remoto seguro",
    ],
    plans: [
      {
        name: "Proteção Essencial",
        desc: "Antivírus corporativo e filtro de conteúdo web para pequenas empresas.",
        features: [
          "Antivírus para todos os dispositivos",
          "Filtro de conteúdo web",
          "Bloqueio de sites maliciosos",
          "Painel centralizado",
        ],
      },
      {
        name: "Firewall Gerenciado",
        desc: "Firewall de última geração com gestão remota e regras atualizadas continuamente.",
        features: [
          "UTM / NGFW gerenciado",
          "Inspeção SSL",
          "Controle de aplicações",
          "Relatório mensal",
        ],
      },
      {
        name: "Segurança Avançada (SOC)",
        desc: "Monitoramento contínuo com detecção e resposta a incidentes em tempo real.",
        features: [
          "SOC 24/7",
          "SIEM correlacionado",
          "Resposta a incidentes",
          "Threat intelligence",
        ],
      },
      {
        name: "Conformidade LGPD",
        desc: "Diagnóstico e adequação da infraestrutura digital às exigências da LGPD.",
        features: [
          "Mapeamento de dados pessoais",
          "Políticas de privacidade",
          "DPO as a Service",
          "Relatório de conformidade",
        ],
      },
    ],
    targetAudience: [
      "Empresas que armazenam dados sensíveis de clientes",
      "Negócios regulados: financeiro, saúde e jurídico",
      "Empresas que sofreram incidentes de segurança anteriores",
      "Gestores de TI com equipe enxuta sem segurança especializada",
      "Organizações que precisam comprovar conformidade com a LGPD",
    ],
  },
  iot: {
    slug: "iot",
    title: "Internet das Coisas (IoT)",
    desc: "Soluções de IoT para rastrear, monitorar e automatizar operações com dados em tempo real e integração a sistemas de gestão.",
    category: "digitais",
    specs: [
      "Rastreamento de Frotas",
      "Telemetria",
      "Monitoramento Remoto",
      "Smart Cities",
      "Agronegócio Inteligente",
    ],
    benefits: [
      "Rastreamento em tempo real de frotas e ativos",
      "Redução de custos operacionais com dados precisos de consumo",
      "Automação de processos com sensores e atuadores conectados",
      "Dashboards em tempo real para tomada de decisão",
      "Integração com sistemas ERP e plataformas de gestão",
      "Rede dedicada de baixa latência para dispositivos IoT",
      "Escalável de poucos a milhares de dispositivos conectados",
    ],
    plans: [
      {
        name: "Rastreamento de Frotas",
        desc: "GPS em tempo real para veículos, máquinas e equipamentos.",
        features: [
          "Localização em tempo real",
          "Histórico de rotas",
          "Alertas de desvio",
          "Telemetria de veículos",
        ],
      },
      {
        name: "Monitoramento Remoto",
        desc: "Sensores para temperatura, umidade, pressão e outras variáveis críticas.",
        features: [
          "Sensores multiparâmetro",
          "Alertas por limite configurável",
          "Histórico de dados",
          "Acesso via app e web",
        ],
      },
      {
        name: "Automação Industrial",
        desc: "Integração de máquinas e processos para aumentar eficiência e reduzir erros.",
        features: [
          "PLC e SCADA integrados",
          "Integração com ERP",
          "Manutenção preditiva",
          "Relatórios de OEE",
        ],
      },
      {
        name: "Smart Cities / Agro",
        desc: "Soluções especializadas para cidades inteligentes e agronegócio de precisão.",
        features: [
          "Iluminação pública inteligente",
          "Monitoramento de lavouras",
          "Controle de irrigação",
          "Plataforma de dados integrada",
        ],
      },
    ],
    targetAudience: [
      "Empresas de logística e transporte com frota própria",
      "Indústrias que precisam monitorar processos e máquinas",
      "Agronegócios com necessidade de precisão e automação",
      "Prefeituras e gestoras de infraestrutura urbana",
      "Empresas de facilities com ativos físicos distribuídos",
    ],
  },
};

export type Segment = {
  slug: string;
  title: string;
  desc: string;
  challenges: string[];
  benefits: string[];
  recommended: string[];
};

export const SEGMENTS: Record<string, Segment> = {
  comercio: {
    slug: "comercio",
    title: "Comércio",
    desc: "Conectividade estável para lojas, filiais e pontos de venda.",
    challenges: [
      "Gestão de conectividade em múltiplas lojas",
      "Instabilidade afeta PDV e maquininhas",
      "Picos sazonais exigem escalabilidade",
    ],
    benefits: [
      "Continuidade operacional em todos os PDVs",
      "Atendimento mais rápido e confiável",
      "Escalabilidade em datas de pico",
    ],
    recommended: ["internet-empresarial", "telefonia-movel", "cloud"],
  },
  industria: {
    slug: "industria",
    title: "Indústria",
    desc: "Conectividade robusta para operações fabris e monitoramento remoto.",
    challenges: [
      "Monitoramento remoto de produção",
      "Integração entre plantas",
      "Proteção de dados industriais",
    ],
    benefits: [
      "Monitoramento em tempo real",
      "Redução de paradas não planejadas",
      "Proteção de dados sensíveis",
    ],
    recommended: ["iot", "internet-empresarial", "seguranca-digital"],
  },
  agronegocio: {
    slug: "agronegocio",
    title: "Agronegócio",
    desc: "Conectividade em áreas rurais e monitoramento inteligente da produção.",
    challenges: [
      "Conectividade em áreas remotas",
      "Monitoramento de safras e maquinário",
      "Operação sazonal",
    ],
    benefits: [
      "Rastreamento de maquinário em tempo real",
      "Decisões baseadas em dados de campo",
      "Comunicação confiável em áreas remotas",
    ],
    recommended: ["iot", "internet-empresarial", "telefonia-movel"],
  },
  saude: {
    slug: "saude",
    title: "Saúde",
    desc: "Disponibilidade e segurança para operações de saúde, com suporte à telemedicina.",
    challenges: [
      "Continuidade de sistemas críticos",
      "Proteção de dados (LGPD)",
      "Conectividade para telemedicina",
    ],
    benefits: ["Maior conformidade com a LGPD", "Disponibilidade de sistemas 24/7", "Suporte à telemedicina"],
    recommended: ["seguranca-digital", "cloud", "internet-empresarial"],
  },
  educacao: {
    slug: "educacao",
    title: "Educação",
    desc: "Infraestrutura de conectividade para ensino híbrido e gestão de unidades.",
    challenges: [
      "Conectividade para ensino híbrido/EAD",
      "Gestão de múltiplos campi",
      "Proteção de dados de alunos",
    ],
    benefits: [
      "Aulas online sem interrupções",
      "Gestão centralizada de unidades",
      "Comunicação com a comunidade escolar",
    ],
    recommended: ["internet-empresarial", "cloud", "telefonia-fixa-pabx"],
  },
  "construcao-civil": {
    slug: "construcao-civil",
    title: "Construção Civil",
    desc: "Comunicação e monitoramento remoto para canteiros de obra.",
    challenges: [
      "Conectividade em canteiros temporários",
      "Comunicação entre obra e escritório",
      "Monitoramento de equipamentos",
    ],
    benefits: [
      "Comunicação ágil entre obra e escritório",
      "Monitoramento remoto e segurança",
      "Mobilidade para equipes de campo",
    ],
    recommended: ["telefonia-movel", "iot", "internet-empresarial"],
  },
  logistica: {
    slug: "logistica",
    title: "Logística",
    desc: "Rastreamento de frotas e comunicação em tempo real.",
    challenges: ["Rastreamento de frotas em tempo real", "Comunicação com motoristas", "Segurança da carga"],
    benefits: [
      "Visibilidade total da frota",
      "Redução de custos operacionais",
      "Resposta rápida a imprevistos",
    ],
    recommended: ["iot", "telefonia-movel", "internet-empresarial"],
  },
  "escritorios-profissionais": {
    slug: "escritorios-profissionais",
    title: "Escritórios Profissionais",
    desc: "Comunicação unificada e mobilidade para equipes e clientes.",
    challenges: ["Comunicação unificada", "Mobilidade para atendimento externo", "Colaboração em nuvem"],
    benefits: [
      "Atendimento mais profissional",
      "Colaboração facilitada",
      "Mobilidade sem perda de produtividade",
    ],
    recommended: ["telefonia-fixa-pabx", "cloud", "telefonia-movel"],
  },
  "instituicoes-financeiras": {
    slug: "instituicoes-financeiras",
    title: "Instituições Financeiras",
    desc: "Segurança e alta disponibilidade para operações críticas.",
    challenges: [
      "Segurança de dados e transações",
      "Alta disponibilidade de sistemas",
      "Conformidade regulatória",
    ],
    benefits: [
      "Maior proteção contra fraudes",
      "Continuidade de operações críticas",
      "Conformidade com o setor financeiro",
    ],
    recommended: ["seguranca-digital", "cloud", "internet-empresarial"],
  },
  "setor-publico": {
    slug: "setor-publico",
    title: "Setor Público",
    desc: "Modernização de infraestrutura com custo controlado.",
    challenges: ["Modernização com orçamento limitado", "Atendimento ao cidadão", "Integração entre órgãos"],
    benefits: [
      "Modernização com custo controlado",
      "Melhor integração entre unidades",
      "Atendimento mais ágil ao cidadão",
    ],
    recommended: ["internet-empresarial", "cloud", "seguranca-digital"],
  },
};

// Os artigos do blog vivem em content/blog/*.mdx (ver lib/content/blog.ts).

export const CONTACT_INFO = {
  phone: "(17) 99715-0462",
  whatsapp: "5517997150462",
  email: "atendimento@kingservices.com.br",
  offices: [
    {
      label: "Escritório Matriz",
      companyName: "KingServices Ltda.",
      cnpj: "54.384.252/0001-90",
      addressStreet: "Rua Souza Barros, nº75 - Vila Aurora",
      addressCity: "São José do Rio Preto / SP",
      addressCep: "CEP: 15.014-380",
      mapsEmbedUrl:
        "https://maps.google.com/maps?q=Rua+Souza+Barros+75+Vila+Aurora+São+José+do+Rio+Preto+SP+Brazil&output=embed&hl=pt",
    },
    {
      label: "Escritório Filial",
      companyName: "KingServices Ltda.",
      cnpj: "000.000.000/0001-90",
      addressStreet: "Avenida Brasil, 2836",
      addressCity: "Brasilândia - Franca / SP",
      addressCep: "CEP: 14.402-450",
      mapsEmbedUrl:
        "https://maps.google.com/maps?q=Avenida+Brasil+2836+Brasilândia+Franca+SP+Brazil&output=embed&hl=pt",
    },
  ],
};
