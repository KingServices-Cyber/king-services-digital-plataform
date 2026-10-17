import type { Metadata } from "next";
import { Card, Content, CtaFinal, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Diferenciais",
  alternates: { canonical: "/diferenciais" },
  description: "Por que empresas escolhem a KingServices como parceira de tecnologia e conectividade.",
};

const DIFERENCIAIS = [
  {
    title: "Atendimento Consultivo",
    desc: "Não vendemos produto, diagnosticamos necessidades. Cada empresa recebe uma recomendação personalizada antes de qualquer proposta.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2m10-4H9a2 2 0 00-2 2v2h10V6a2 2 0 00-2-2z" />
      </svg>
    ),
  },
  {
    title: "Portfólio Completo",
    desc: "Internet dedicada, Vivo Móvel, PABX em nuvem, segurança digital e cloud — tudo em um único fornecedor de confiança.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    title: "Suporte Qualificado",
    desc: "Equipe técnica certificada disponível 24/7 via WhatsApp, telefone e chat. Tempo médio de resposta inferior a 30 minutos.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Relacionamento de Longo Prazo",
    desc: "Não sumimos após a venda. Acompanhamos sua evolução e revisamos o contrato sempre que o negócio cresce ou muda.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Agilidade na Implantação",
    desc: "Instalação em até 48 horas após a aprovação. Processo simplificado sem burocracia para você focar no que importa: seu negócio.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Atendimento Nacional",
    desc: "Presença em todo o Brasil através da infraestrutura Vivo, com suporte local em São José do Rio Preto e região.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Especialistas Certificados",
    desc: "Time certificado pela Vivo Empresas com treinamentos contínuos para entregar as soluções mais adequadas ao seu perfil.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Pós-venda Ativo",
    desc: "Check-ins periódicos, relatórios de performance e reuniões de revisão para garantir que você está sempre extraindo o máximo da solução.",
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

export default function DiferenciaisPage() {
  return (
    <>
      <PageHero
        eyebrow="Diferenciais"
        title="Por que empresas escolhem a KingServices"
        subtitle="Mais do que internet — somos um parceiro estratégico de tecnologia e conectividade para o seu negócio."
      />
      <Content>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DIFERENCIAIS.map((d) => (
            <Card key={d.title} clickable={false}>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                  {d.icon}
                </div>
                <h3 className="text-sm font-bold text-text m-0">{d.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed m-0">{d.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </Content>
      <CtaFinal />
    </>
  );
}
