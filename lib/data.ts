export type Solution = {
  slug: string;
  title: string;
  desc: string;
  specs: string[];
};

export const SOLUTIONS: Record<string, Solution> = {
  "telefonia-movel": {
    slug: "telefonia-movel",
    title: "Telefonia Móvel Empresarial",
    desc: "Planos corporativos com gestão centralizada de linhas, portabilidade e controle de custos.",
    specs: ["Planos Corporativos", "Gestão de Linhas", "Portabilidade", "Pacotes de Dados", "Roaming Internacional", "Controle de Custos"],
  },
  "internet-empresarial": {
    slug: "internet-empresarial",
    title: "Internet Empresarial",
    desc: "Conectividade de alta performance com SLA corporativo e suporte especializado.",
    specs: ["Fibra Óptica Empresarial", "Internet Dedicada", "Backup de Link", "VPN Corporativa", "Conectividade Multilocalidades"],
  },
  "telefonia-fixa-pabx": {
    slug: "telefonia-fixa-pabx",
    title: "Telefonia Fixa e PABX",
    desc: "Comunicação corporativa moderna, com PABX virtual e integração a CRM.",
    specs: ["PABX Virtual", "Troncos SIP", "Ramais Inteligentes", "Gravação de Chamadas", "Integração com CRM"],
  },
  cloud: {
    slug: "cloud",
    title: "Soluções Cloud",
    desc: "Infraestrutura em nuvem escalável, com backup automatizado e recuperação de desastres.",
    specs: ["Servidores Virtuais", "Backup em Nuvem", "Disaster Recovery", "Armazenamento Corporativo"],
  },
  "seguranca-digital": {
    slug: "seguranca-digital",
    title: "Segurança Digital",
    desc: "Proteção completa com monitoramento contínuo e resposta rápida a incidentes.",
    specs: ["Firewall Gerenciado", "Antivírus Corporativo", "Proteção Contra Ataques", "Monitoramento de Rede"],
  },
  iot: {
    slug: "iot",
    title: "Internet das Coisas (IoT)",
    desc: "Soluções de IoT para rastrear, monitorar e automatizar operações.",
    specs: ["Rastreamento de Frotas", "Telemetria", "Monitoramento Remoto", "Smart Cities", "Agronegócio Inteligente"],
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
    challenges: ["Gestão de conectividade em múltiplas lojas", "Instabilidade afeta PDV e maquininhas", "Picos sazonais exigem escalabilidade"],
    benefits: ["Continuidade operacional em todos os PDVs", "Atendimento mais rápido e confiável", "Escalabilidade em datas de pico"],
    recommended: ["internet-empresarial", "telefonia-movel", "cloud"],
  },
  industria: {
    slug: "industria",
    title: "Indústria",
    desc: "Conectividade robusta para operações fabris e monitoramento remoto.",
    challenges: ["Monitoramento remoto de produção", "Integração entre plantas", "Proteção de dados industriais"],
    benefits: ["Monitoramento em tempo real", "Redução de paradas não planejadas", "Proteção de dados sensíveis"],
    recommended: ["iot", "internet-empresarial", "seguranca-digital"],
  },
  agronegocio: {
    slug: "agronegocio",
    title: "Agronegócio",
    desc: "Conectividade em áreas rurais e monitoramento inteligente da produção.",
    challenges: ["Conectividade em áreas remotas", "Monitoramento de safras e maquinário", "Operação sazonal"],
    benefits: ["Rastreamento de maquinário em tempo real", "Decisões baseadas em dados de campo", "Comunicação confiável em áreas remotas"],
    recommended: ["iot", "internet-empresarial", "telefonia-movel"],
  },
  saude: {
    slug: "saude",
    title: "Saúde",
    desc: "Disponibilidade e segurança para operações de saúde, com suporte à telemedicina.",
    challenges: ["Continuidade de sistemas críticos", "Proteção de dados (LGPD)", "Conectividade para telemedicina"],
    benefits: ["Maior conformidade com a LGPD", "Disponibilidade de sistemas 24/7", "Suporte à telemedicina"],
    recommended: ["seguranca-digital", "cloud", "internet-empresarial"],
  },
  educacao: {
    slug: "educacao",
    title: "Educação",
    desc: "Infraestrutura de conectividade para ensino híbrido e gestão de unidades.",
    challenges: ["Conectividade para ensino híbrido/EAD", "Gestão de múltiplos campi", "Proteção de dados de alunos"],
    benefits: ["Aulas online sem interrupções", "Gestão centralizada de unidades", "Comunicação com a comunidade escolar"],
    recommended: ["internet-empresarial", "cloud", "telefonia-fixa-pabx"],
  },
  "construcao-civil": {
    slug: "construcao-civil",
    title: "Construção Civil",
    desc: "Comunicação e monitoramento remoto para canteiros de obra.",
    challenges: ["Conectividade em canteiros temporários", "Comunicação entre obra e escritório", "Monitoramento de equipamentos"],
    benefits: ["Comunicação ágil entre obra e escritório", "Monitoramento remoto e segurança", "Mobilidade para equipes de campo"],
    recommended: ["telefonia-movel", "iot", "internet-empresarial"],
  },
  logistica: {
    slug: "logistica",
    title: "Logística",
    desc: "Rastreamento de frotas e comunicação em tempo real.",
    challenges: ["Rastreamento de frotas em tempo real", "Comunicação com motoristas", "Segurança da carga"],
    benefits: ["Visibilidade total da frota", "Redução de custos operacionais", "Resposta rápida a imprevistos"],
    recommended: ["iot", "telefonia-movel", "internet-empresarial"],
  },
  "escritorios-profissionais": {
    slug: "escritorios-profissionais",
    title: "Escritórios Profissionais",
    desc: "Comunicação unificada e mobilidade para equipes e clientes.",
    challenges: ["Comunicação unificada", "Mobilidade para atendimento externo", "Colaboração em nuvem"],
    benefits: ["Atendimento mais profissional", "Colaboração facilitada", "Mobilidade sem perda de produtividade"],
    recommended: ["telefonia-fixa-pabx", "cloud", "telefonia-movel"],
  },
  "instituicoes-financeiras": {
    slug: "instituicoes-financeiras",
    title: "Instituições Financeiras",
    desc: "Segurança e alta disponibilidade para operações críticas.",
    challenges: ["Segurança de dados e transações", "Alta disponibilidade de sistemas", "Conformidade regulatória"],
    benefits: ["Maior proteção contra fraudes", "Continuidade de operações críticas", "Conformidade com o setor financeiro"],
    recommended: ["seguranca-digital", "cloud", "internet-empresarial"],
  },
  "setor-publico": {
    slug: "setor-publico",
    title: "Setor Público",
    desc: "Modernização de infraestrutura com custo controlado.",
    challenges: ["Modernização com orçamento limitado", "Atendimento ao cidadão", "Integração entre órgãos"],
    benefits: ["Modernização com custo controlado", "Melhor integração entre unidades", "Atendimento mais ágil ao cidadão"],
    recommended: ["internet-empresarial", "cloud", "seguranca-digital"],
  },
};

export type Post = {
  title: string;
  category: string;
  excerpt: string;
};

export const POSTS: Post[] = [
  { title: "Como escolher o link dedicado ideal para sua empresa", category: "Internet Empresarial", excerpt: "Diferenças entre link dedicado e internet compartilhada." },
  { title: "LGPD e segurança de dados: o que sua empresa precisa saber", category: "Segurança Digital", excerpt: "Panorama prático sobre LGPD na infraestrutura de TI." },
  { title: "SD-WAN vs. link dedicado: qual a diferença", category: "Redes Corporativas", excerpt: "Quando cada solução faz mais sentido." },
  { title: "5 sinais de que sua empresa precisa migrar para o Cloud", category: "Cloud", excerpt: "Servidores sobrecarregados são só o começo." },
];

export const CATEGORIES = ["Internet Empresarial", "Segurança Digital", "Redes Corporativas", "Cloud"];

export const CONTACT_INFO = {
  phone: "(17) 99727-6024",
  whatsapp: "5517997276024",
  email: "atendimento@kingservices.com.br",
  addressLine1: "Rua Souza Barros, nº75 - Vila Aurora",
  addressLine2: "CEP: 15.014-380 — São José do Rio Preto/SP",
};
