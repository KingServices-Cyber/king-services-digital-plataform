"use client";

import { useState } from "react";
import { Content, CtaFinal, PageHero } from "@/components/ui";

const FAQ_ITEMS = [
  {
    question: "O que é a King Services e qual a relação com a Vivo Empresas?",
    answer:
      "A King Services é uma parceira autorizada Vivo Empresas, especializada em soluções de telecomunicação e tecnologia para o mercado corporativo. Atuamos como consultores, ajudando empresas a escolher e implantar os serviços Vivo mais adequados ao seu perfil.",
  },
  {
    question: "Quais soluções vocês oferecem?",
    answer:
      "Oferecemos Telefonia Móvel Empresarial, Internet Empresarial (fibra óptica e dedicada), Telefonia Fixa e PABX Virtual, Soluções Cloud, Segurança Digital e Internet das Coisas (IoT). Todas as soluções são do portfólio Vivo Empresas.",
  },
  {
    question: "Qual o diferencial em contratar pela King Services?",
    answer:
      "Oferecemos atendimento consultivo personalizado, suporte direto e pós-venda ativo. Diferente de contratar diretamente, você tem um parceiro dedicado que conhece seu negócio e garante agilidade na resolução de qualquer questão.",
  },
  {
    question: "Quais segmentos vocês atendem?",
    answer:
      "Atendemos Comércio, Indústria, Agronegócio, Saúde, Educação, Construção Civil, Logística, Escritórios Profissionais, Instituições Financeiras e Setor Público. Cada segmento recebe soluções personalizadas para seus desafios específicos.",
  },
  {
    question: "Como funciona o suporte técnico?",
    answer:
      "Nosso suporte está disponível por telefone, WhatsApp e pela Área do Cliente no site. Você pode abrir chamados, acompanhar o status e contar com nossa equipe para resolver qualquer questão técnica com agilidade.",
  },
  {
    question: "Como solicitar um orçamento?",
    answer:
      "Basta preencher o formulário na página de Contato ou enviar uma mensagem pelo WhatsApp. Um consultor entrará em contato para entender suas necessidades e apresentar a melhor proposta.",
  },
  {
    question: "Vocês atendem em todo o Brasil?",
    answer:
      "Sim. Temos escritórios em São José do Rio Preto/SP (Matriz) e Franca/SP (Filial), mas atendemos empresas em todo o território nacional, aproveitando a cobertura da rede Vivo Empresas.",
  },
  {
    question: "Como acessar a Área do Cliente?",
    answer:
      "Acesse pelo menu \"Área do Cliente\" no site e faça login com seu e-mail e senha cadastrados. No portal você pode consultar contratos, faturas, projetos, abrir chamados de suporte e acessar documentos.",
  },
];

export default function FaqPage() {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const query = search.toLowerCase();
  const filtered = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query),
  );

  function handleToggle(idx: number) {
    setOpenIndex(openIndex === idx ? null : idx);
  }

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Perguntas frequentes"
        description="Tire suas dúvidas sobre nossos serviços, parceria Vivo Empresas e suporte técnico."
      />
      <Content className="max-w-[800px]">
        <div className="relative mb-6">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-graphite/40 text-base pointer-events-none">
            🔍
          </span>
          <input
            type="text"
            placeholder="Buscar pergunta..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-fog rounded-card px-4 pl-10 py-3 text-[15px] bg-white text-graphite outline-none transition-colors focus:border-purple-600"
          />
        </div>

        {filtered.length === 0 ? (
          <p className="text-sm text-graphite/50 text-center py-10">
            Nenhuma pergunta encontrada para esta busca.
          </p>
        ) : (
          <div className="flex flex-col gap-2">
            {filtered.map((item, i) => {
              const originalIndex = FAQ_ITEMS.indexOf(item);
              const isOpen = openIndex === originalIndex;
              return (
                <div
                  key={originalIndex}
                  className={`border rounded-card overflow-hidden transition-colors ${
                    isOpen
                      ? "border-lilac-300 bg-mist"
                      : "border-fog hover:border-lilac-300"
                  }`}
                >
                  <button
                    onClick={() => handleToggle(originalIndex)}
                    className="w-full flex justify-between items-center gap-3 px-5 py-4 text-left bg-transparent border-none cursor-pointer"
                  >
                    <span className="text-[15px] font-semibold text-graphite">
                      {item.question}
                    </span>
                    <span
                      className={`text-[13px] text-purple-600 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-sm leading-relaxed text-graphite/80">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </Content>
      <CtaFinal />
    </>
  );
}
