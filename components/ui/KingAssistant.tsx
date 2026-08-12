"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/design-system";
import { CONTACT_INFO } from "@/lib/content/data";

type Message = {
  from: "bot" | "user";
  text: string;
  links?: { label: string; href: string }[];
  quickReplies?: string[];
};

const WHATSAPP_URL = `https://wa.me/${CONTACT_INFO.whatsapp}`;

const WELCOME: Message = {
  from: "bot",
  text: "Olá! Sou o King Assistant, assistente virtual da King Services. Como posso ajudar você hoje?",
  quickReplies: ["Soluções", "Orçamento", "Suporte", "Sobre nós"],
};

type KnowledgeEntry = {
  keywords: string[];
  response: Omit<Message, "from">;
};

const KNOWLEDGE_BASE: KnowledgeEntry[] = [
  {
    keywords: ["solução", "solucao", "soluções", "solucoes", "serviço", "servico", "serviços", "servicos", "portfólio", "portfolio", "oferece"],
    response: {
      text: "Oferecemos um portfólio completo de soluções Vivo Empresas:\n\n• Telefonia Móvel Empresarial\n• Internet Empresarial (fibra e dedicada)\n• Telefonia Fixa e PABX Virtual\n• Soluções Cloud\n• Segurança Digital\n• Internet das Coisas (IoT)\n\nQuer saber mais sobre alguma solução específica?",
      links: [{ label: "Ver todas as soluções", href: "/solucoes" }],
      quickReplies: ["Internet Empresarial", "Telefonia Móvel", "Cloud e Segurança", "Falar com consultor"],
    },
  },
  {
    keywords: ["internet", "fibra", "dedicada", "conectividade", "banda larga", "link"],
    response: {
      text: "Nossa Internet Empresarial oferece:\n\n• Fibra Óptica Empresarial\n• Internet Dedicada com SLA\n• Backup de Link\n• VPN Corporativa\n• Conectividade Multilocalidades\n\nIdeal para empresas que precisam de alta disponibilidade e performance.",
      links: [{ label: "Saiba mais sobre Internet Empresarial", href: "/solucoes/internet-empresarial" }],
      quickReplies: ["Solicitar orçamento", "Outras soluções", "Falar com consultor"],
    },
  },
  {
    keywords: ["telefonia móvel", "telefonia movel", "celular", "móvel", "movel", "plano corporativo", "linha"],
    response: {
      text: "A Telefonia Móvel Empresarial inclui:\n\n• Planos Corporativos sob medida\n• Gestão Centralizada de Linhas\n• Portabilidade facilitada\n• Pacotes de Dados flexíveis\n• Roaming Internacional\n• Controle de Custos\n\nPerfeito para equipes que precisam de mobilidade.",
      links: [{ label: "Saiba mais sobre Telefonia Móvel", href: "/solucoes/telefonia-movel" }],
      quickReplies: ["Solicitar orçamento", "Outras soluções", "Falar com consultor"],
    },
  },
  {
    keywords: ["telefonia fixa", "pabx", "ramal", "sip", "fixa"],
    response: {
      text: "Telefonia Fixa e PABX Virtual:\n\n• PABX Virtual completo\n• Troncos SIP\n• Ramais Inteligentes\n• Gravação de Chamadas\n• Integração com CRM\n\nModernize a comunicação da sua empresa!",
      links: [{ label: "Saiba mais sobre Telefonia Fixa", href: "/solucoes/telefonia-fixa-pabx" }],
      quickReplies: ["Solicitar orçamento", "Outras soluções", "Falar com consultor"],
    },
  },
  {
    keywords: ["cloud", "nuvem", "backup", "servidor", "armazenamento", "disaster"],
    response: {
      text: "Soluções Cloud para sua empresa:\n\n• Servidores Virtuais\n• Backup em Nuvem automatizado\n• Disaster Recovery\n• Armazenamento Corporativo\n\nInfraestrutura escalável e segura para o seu negócio.",
      links: [{ label: "Saiba mais sobre Cloud", href: "/solucoes/cloud" }],
      quickReplies: ["Segurança Digital", "Solicitar orçamento", "Falar com consultor"],
    },
  },
  {
    keywords: ["segurança", "seguranca", "firewall", "antivírus", "antivirus", "proteção", "protecao"],
    response: {
      text: "Segurança Digital completa:\n\n• Firewall Gerenciado\n• Antivírus Corporativo\n• Proteção Contra Ataques\n• Monitoramento de Rede 24/7\n\nProteja seus dados e operações contra ameaças.",
      links: [{ label: "Saiba mais sobre Segurança Digital", href: "/solucoes/seguranca-digital" }],
      quickReplies: ["Cloud", "Solicitar orçamento", "Falar com consultor"],
    },
  },
  {
    keywords: ["iot", "rastreamento", "telemetria", "monitoramento remoto", "smart", "sensor"],
    response: {
      text: "Internet das Coisas (IoT):\n\n• Rastreamento de Frotas\n• Telemetria industrial\n• Monitoramento Remoto\n• Smart Cities\n• Agronegócio Inteligente\n\nAutomatize e monitore suas operações em tempo real.",
      links: [{ label: "Saiba mais sobre IoT", href: "/solucoes/iot" }],
      quickReplies: ["Solicitar orçamento", "Outras soluções", "Falar com consultor"],
    },
  },
  {
    keywords: ["orçamento", "orcamento", "preço", "preco", "valor", "custo", "quanto custa", "proposta", "cotação", "cotacao"],
    response: {
      text: "Para receber um orçamento personalizado, você pode:\n\n1. Preencher o formulário na página de Contato\n2. Enviar uma mensagem pelo WhatsApp\n3. Ligar para nossa central\n\nUm consultor especializado entrará em contato para entender suas necessidades e montar a melhor proposta.",
      links: [{ label: "Ir para página de Contato", href: "/contato" }],
      quickReplies: ["WhatsApp", "Telefone", "Soluções"],
    },
  },
  {
    keywords: ["suporte", "ajuda", "problema", "chamado", "técnico", "tecnico", "atendimento"],
    response: {
      text: `Nosso suporte está disponível por:\n\n📞 Telefone: ${CONTACT_INFO.phone}\n💬 WhatsApp: ${CONTACT_INFO.phone}\n✉️ E-mail: ${CONTACT_INFO.email}\n🖥️ Área do Cliente (abrir chamados)\n\nVocê também pode acessar a Área do Cliente para abrir e acompanhar chamados de suporte.`,
      links: [{ label: "Área do Cliente", href: "/login" }],
      quickReplies: ["WhatsApp", "Área do Cliente", "FAQ"],
    },
  },
  {
    keywords: ["sobre", "quem", "empresa", "king services", "história", "historia"],
    response: {
      text: "A King Services é uma parceira autorizada Vivo Empresas, com mais de 15 anos de experiência em telecomunicações corporativas.\n\nNossos diferenciais:\n• Atendimento consultivo personalizado\n• Portfólio completo de soluções\n• Suporte qualificado 24/7\n• Pós-venda ativo\n• Atendimento nacional\n• Especialistas certificados",
      links: [
        { label: "Sobre a empresa", href: "/sobre" },
        { label: "Diferenciais", href: "/diferenciais" },
      ],
      quickReplies: ["Soluções", "Segmentos", "Contato"],
    },
  },
  {
    keywords: ["segmento", "setor", "indústria", "industria", "comércio", "comercio", "saúde", "saude", "educação", "educacao", "logística", "logistica", "agro"],
    response: {
      text: "Atendemos diversos segmentos com soluções personalizadas:\n\n• Comércio\n• Indústria\n• Agronegócio\n• Saúde\n• Educação\n• Construção Civil\n• Logística\n• Escritórios Profissionais\n• Instituições Financeiras\n• Setor Público\n\nCada segmento tem soluções recomendadas específicas.",
      links: [{ label: "Ver todos os segmentos", href: "/segmentos" }],
      quickReplies: ["Soluções", "Solicitar orçamento", "Falar com consultor"],
    },
  },
  {
    keywords: ["contato", "telefone", "email", "e-mail", "ligar", "endereço", "endereco", "localização", "localizacao", "onde fica"],
    response: {
      text: `Entre em contato conosco:\n\n📞 Telefone: ${CONTACT_INFO.phone}\n💬 WhatsApp: ${CONTACT_INFO.phone}\n✉️ E-mail: ${CONTACT_INFO.email}\n\n📍 Matriz: São José do Rio Preto/SP\n📍 Filial: Franca/SP\n\nAtendemos em todo o Brasil!`,
      links: [{ label: "Página de Contato", href: "/contato" }],
      quickReplies: ["WhatsApp", "Solicitar orçamento", "Soluções"],
    },
  },
  {
    keywords: ["whatsapp", "zap", "wpp"],
    response: {
      text: `Clique no link abaixo para falar diretamente com um consultor pelo WhatsApp:\n\n💬 WhatsApp: ${CONTACT_INFO.phone}\n\nNosso time está pronto para atender você!`,
      links: [{ label: "Abrir WhatsApp", href: WHATSAPP_URL }],
      quickReplies: ["Soluções", "Orçamento", "Suporte"],
    },
  },
  {
    keywords: ["área do cliente", "area do cliente", "portal", "login", "acessar", "entrar", "cadastro", "conta"],
    response: {
      text: "Na Área do Cliente você pode:\n\n• Consultar contratos ativos\n• Acompanhar faturas\n• Abrir chamados de suporte\n• Visualizar projetos\n• Acessar documentos\n\nAcesse pelo menu do site ou pelo link abaixo.",
      links: [{ label: "Acessar Área do Cliente", href: "/login" }],
      quickReplies: ["Suporte", "Contato", "FAQ"],
    },
  },
  {
    keywords: ["faq", "dúvida", "duvida", "pergunta", "frequente"],
    response: {
      text: "Temos uma página de FAQ com as perguntas mais frequentes sobre nossos serviços, parceria Vivo Empresas, suporte e muito mais.\n\nAcesse para encontrar respostas rápidas!",
      links: [{ label: "Acessar FAQ", href: "/faq" }],
      quickReplies: ["Soluções", "Suporte", "Contato"],
    },
  },
  {
    keywords: ["diferencial", "vantagem", "por que", "porque", "motivo"],
    response: {
      text: "Por que escolher a King Services?\n\n• Atendimento consultivo personalizado\n• Portfólio completo Vivo Empresas\n• Suporte qualificado e agilidade\n• Relacionamento de longo prazo\n• Agilidade na implantação\n• Atendimento nacional\n• Especialistas certificados\n• Pós-venda ativo\n\nDiferente de contratar direto, você tem um parceiro dedicado!",
      links: [{ label: "Ver diferenciais", href: "/diferenciais" }],
      quickReplies: ["Soluções", "Orçamento", "Segmentos"],
    },
  },
  {
    keywords: ["vivo", "parceira", "parceiro", "autorizada"],
    response: {
      text: "Somos Parceiros Autorizados Vivo Empresas, o que significa que oferecemos todas as soluções do portfólio Vivo com atendimento consultivo dedicado.\n\nVocê tem acesso às mesmas soluções da Vivo, mas com o diferencial de um parceiro que conhece seu negócio e oferece suporte direto.",
      links: [{ label: "Saiba mais sobre a parceria", href: "/vivo-empresas" }],
      quickReplies: ["Soluções", "Diferenciais", "Orçamento"],
    },
  },
];

const FALLBACK: Omit<Message, "from"> = {
  text: "Não encontrei uma resposta específica para sua pergunta. Posso ajudar com informações sobre nossas soluções, orçamentos, suporte técnico e muito mais.\n\nSe preferir, fale diretamente com um consultor:",
  links: [
    { label: "WhatsApp", href: WHATSAPP_URL },
    { label: "Página de Contato", href: "/contato" },
  ],
  quickReplies: ["Soluções", "Orçamento", "Suporte", "FAQ"],
};

function findResponse(input: string): Omit<Message, "from"> {
  const normalized = input.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

  let bestMatch: KnowledgeEntry | null = null;
  let bestScore = 0;

  for (const entry of KNOWLEDGE_BASE) {
    let score = 0;
    for (const kw of entry.keywords) {
      const kwNorm = kw.normalize("NFD").replace(/[̀-ͯ]/g, "");
      if (normalized.includes(kwNorm)) score++;
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch && bestScore > 0) return bestMatch.response;
  return FALLBACK;
}

function ChatBubble({ msg }: { msg: Message }) {
  const isBot = msg.from === "bot";
  return (
    <div className={cn("flex flex-col gap-1.5 max-w-[85%]", isBot ? "self-start" : "self-end")}>
      <div
        className={cn(
          "px-3.5 py-2.5 text-[13px] leading-relaxed whitespace-pre-line",
          isBot
            ? "bg-white border border-fog rounded-[14px] rounded-bl-[4px] text-graphite"
            : "bg-purple-600 rounded-[14px] rounded-br-[4px] text-white",
        )}
      >
        {msg.text}
      </div>
      {msg.links && msg.links.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pl-1">
          {msg.links.map((link) => {
            const isExternal = link.href.startsWith("http");
            if (isExternal) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                  className="text-[12px] font-semibold text-purple-600 hover:text-purple-800 no-underline hover:underline"
                >
                  {link.label} ↗
                </a>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-[12px] font-semibold text-purple-600 hover:text-purple-800 no-underline hover:underline"
              >
                {link.label} →
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

function FloatingTooltipButton({
  label,
  onClick,
  href,
  ariaLabel,
  className,
  children,
}: {
  label: string;
  onClick?: () => void;
  href?: string;
  ariaLabel: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);

  const shared = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    "aria-label": ariaLabel,
    className: cn(
      "w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.25)] transition-transform hover:scale-110 border-none cursor-pointer flex-shrink-0",
      className,
    ),
  };

  const tooltip = (
    <span
      className={cn(
        "absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 text-white text-[12px] font-semibold px-3 py-1.5 rounded-lg shadow-lg pointer-events-none transition-all duration-200",
        hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2",
      )}
    >
      {label}
      {/* Seta à direita apontando para o botão */}
      <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
    </span>
  );

  if (href) {
    return (
      <div className="relative flex items-center">
        {tooltip}
        <a href={href} target="_blank" rel="noopener noreferrer" {...shared}>
          {children}
        </a>
      </div>
    );
  }

  return (
    <div className="relative flex items-center">
      {tooltip}
      <button type="button" onClick={onClick} {...shared}>
        {children}
      </button>
    </div>
  );
}

export function KingAssistant({ className }: { className?: string } = {}) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [footerVisible, setFooterVisible] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  // Oculta os botões quando o rodapé entra na viewport
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  function handleSend(text?: string) {
    const value = (text || input).trim();
    if (!value) return;

    const userMsg: Message = { from: "user", text: value };
    const response = findResponse(value);
    const botMsg: Message = { from: "bot", ...response };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  }

  function handleQuickReply(label: string) {
    handleSend(label);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  const lastBotMsg = [...messages].reverse().find((m) => m.from === "bot");

  return (
    <div className={cn("fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 transition-all duration-300", footerVisible ? "opacity-0 pointer-events-none translate-y-4" : "opacity-100 translate-y-0", className)}>
      {/* Painel de chat */}
      {open && (
        <div className="w-[360px] max-h-[520px] bg-white rounded-2xl shadow-[0_8px_32px_rgba(42,18,64,0.2)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-purple-900 px-4 py-3.5 flex items-center gap-3 flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-lilac-400 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              K
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-[14px] font-semibold m-0">King Assistant</p>
              <p className="text-white/60 text-[11px] m-0 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Online agora
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/50 hover:text-white bg-transparent border-none cursor-pointer p-1 text-lg transition-colors"
              aria-label="Fechar chat"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div ref={bodyRef} className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-mist">
            {messages.map((msg, i) => (
              <ChatBubble key={i} msg={msg} />
            ))}
            {lastBotMsg?.quickReplies && (
              <div className="flex flex-wrap gap-1.5 self-start">
                {lastBotMsg.quickReplies.map((qr) => (
                  <button
                    key={qr}
                    onClick={() => handleQuickReply(qr)}
                    className="bg-white border border-lilac-300 rounded-full px-3 py-1.5 text-[12px] font-semibold text-purple-600 cursor-pointer transition-all hover:bg-purple-50 hover:border-purple-600"
                  >
                    {qr}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="px-3.5 py-3 border-t border-fog flex items-center gap-2 flex-shrink-0 bg-white">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Digite sua mensagem..."
              className="flex-1 border border-fog rounded-full px-3.5 py-2 text-[13px] bg-mist text-graphite outline-none focus:border-purple-600 transition-colors"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim()}
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center border-none cursor-pointer transition-all flex-shrink-0",
                input.trim()
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "bg-fog text-graphite/30 cursor-not-allowed",
              )}
              aria-label="Enviar mensagem"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Botões flutuantes */}
      <div className="flex flex-col items-end gap-3">
        {/* WhatsApp */}
        <FloatingTooltipButton
          label="Fale com o Consultor"
          href={WHATSAPP_URL}
          ariaLabel="Falar com consultor no WhatsApp"
          className="bg-[#25D366]"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.553 4.112 1.52 5.843L.057 23.177a.75.75 0 0 0 .92.92l5.334-1.463A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.504-5.236-1.383l-.374-.217-3.874 1.063 1.063-3.874-.217-.374A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
        </FloatingTooltipButton>

        {/* King Assistant */}
        <FloatingTooltipButton
          label="King Assistant"
          onClick={() => setOpen((v) => !v)}
          ariaLabel="Abrir King Assistant"
          className="bg-gradient-to-br from-purple-900 to-purple-600"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white" />
        </FloatingTooltipButton>
      </div>
    </div>
  );
}
