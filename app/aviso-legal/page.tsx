import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso Legal — KingServices",
  alternates: { canonical: "/aviso-legal" },
  description:
    "Termos e condições de uso do site da KingServices, incluindo limitações de responsabilidade, propriedade intelectual e direitos do consumidor conforme o CDC.",
};

const SECOES = [
  {
    titulo: "1. Identificação da Empresa",
    conteudo: [
      "KingServices Ltda., pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 54.384.252/0001-90, com sede na Rua Souza Barros, nº 75, Vila Aurora, São José do Rio Preto/SP, CEP: 15.014-380.",
      "Filial: Avenida Brasil, 2838 – Brasileira – Franca/SP – CEP: 14.402-450.",
      "E-mail: atendimento@kingservices.com.br | WhatsApp: (17) 99715-0462",
    ],
  },
  {
    titulo: "2. Finalidade e Natureza Informativa do Site",
    conteudo: [
      "Este site tem caráter informativo e comercial, destinado à apresentação dos produtos e serviços oferecidos pela KingServices. As informações disponibilizadas não constituem assessoria jurídica, financeira ou técnica de qualquer natureza.",
      "A KingServices empreende esforços para manter as informações atualizadas e precisas, porém não garante a completude, exatidão ou atualidade das informações em tempo real. Eventuais erros ou omissões poderão ser corrigidos sem aviso prévio.",
    ],
  },
  {
    titulo: "3. Limitação de Responsabilidade",
    conteudo: [
      "A KingServices não se responsabiliza por:",
      "• Danos diretos, indiretos, incidentais ou consequentes decorrentes do uso ou impossibilidade de uso deste site;",
      "• Interrupções ou falhas técnicas de acesso ao site causadas por fatores externos (força maior, falhas de infraestrutura de terceiros, ataques cibernéticos);",
      "• Decisões tomadas pelo usuário com base exclusivamente nas informações contidas neste site, sem consulta a um especialista;",
      "• Conteúdo de sites de terceiros vinculados por hiperlinks neste site.",
      "A responsabilidade da KingServices perante o consumidor, nos casos em que aplicável, observará os limites estabelecidos pelo Código de Defesa do Consumidor (Lei nº 8.078/1990) e pelas cláusulas contratuais vigentes.",
    ],
  },
  {
    titulo: "4. Propriedade Intelectual",
    conteudo: [
      "Todo o conteúdo deste site — incluindo, mas não se limitando a textos, imagens, logotipos, ícones, vídeos, layout e código-fonte — é de titularidade da KingServices ou de seus licenciantes, sendo protegido pela Lei nº 9.610/1998 (Lei de Direitos Autorais) e demais normas de propriedade intelectual aplicáveis.",
      "É vedada a reprodução, distribuição, modificação ou uso comercial de qualquer conteúdo deste site sem autorização expressa e prévia da KingServices, sob pena de responsabilização civil e criminal.",
    ],
  },
  {
    titulo: "5. Links para Sites de Terceiros",
    conteudo: [
      "Este site pode conter links para sites externos (como Vivo Empresas, órgãos reguladores ou parceiros). A KingServices não possui controle sobre esses sites e não se responsabiliza por seu conteúdo, políticas de privacidade ou práticas comerciais.",
      "A inclusão de um link não implica recomendação ou endosso do conteúdo do site vinculado.",
    ],
  },
  {
    titulo: "6. Direitos do Consumidor — Código de Defesa do Consumidor (Lei nº 8.078/1990)",
    conteudo: [
      "A KingServices atua em plena conformidade com o Código de Defesa do Consumidor (CDC — Lei nº 8.078/1990). São garantidos ao consumidor os seguintes direitos, entre outros previstos na legislação:",
      "a) Direito de Arrependimento (art. 49 do CDC): Contratos celebrados fora do estabelecimento comercial ou à distância (internet, telefone) permitem ao consumidor desistir da contratação no prazo de 7 (sete) dias corridos, a contar da data da contratação ou do recebimento do produto ou início do serviço, sem qualquer ônus. Para exercer esse direito, entre em contato por e-mail (atendimento@kingservices.com.br) ou WhatsApp ((17) 99715-0462).",
      "b) Direito à Informação (art. 6º, III): O consumidor tem direito à informação adequada e clara sobre os diferentes produtos e serviços, com especificação correta de quantidade, características, composição, qualidade, tributos incidentes e preço, bem como sobre os riscos que apresentem.",
      "c) Proteção contra Práticas Abusivas (art. 39): É vedada a prática de condicionamento do fornecimento de produto ou serviço ao fornecimento de outro, a elevação injustificada de preços, ou qualquer outra prática abusiva.",
      "d) Garantia Legal (arts. 24 a 26): Os serviços prestados pela KingServices estão sujeitos à garantia legal prevista no CDC. Vícios aparentes em serviços devem ser reclamados em até 90 (noventa) dias.",
      "e) Proteção Contratual (arts. 46 a 54): Cláusulas contratuais abusivas são nulas de pleno direito. O contrato de prestação de serviços será sempre redigido de forma clara e legível.",
      "f) Acesso à Justiça (art. 6º, VII): O consumidor tem direito ao acesso aos órgãos judiciários e administrativos para prevenção ou reparação de danos patrimoniais e morais, individuais, coletivos ou difusos.",
    ],
  },
  {
    titulo: "7. Canais de Atendimento ao Consumidor (SAC)",
    conteudo: [
      "Para dúvidas, reclamações ou exercício de direitos, o consumidor pode entrar em contato pelos seguintes canais:",
      "• WhatsApp / Telefone: (17) 99715-0462 — Atendimento de segunda a sexta, das 8h às 18h",
      "• E-mail: atendimento@kingservices.com.br — Resposta em até 2 dias úteis",
      "• Formulário de contato: kingservices.com.br/contato",
      "Caso a solicitação não seja resolvida pelos canais acima, o consumidor pode registrar reclamação no portal consumidor.gov.br (Plataforma do Governo Federal) ou acionar o PROCON de sua cidade.",
    ],
  },
  {
    titulo: "8. Proteção de Dados Pessoais (LGPD)",
    conteudo: [
      "O tratamento de dados pessoais realizado pela KingServices obedece à Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018). Para informações detalhadas sobre coleta, uso, armazenamento e seus direitos como titular, consulte nossa Política de Privacidade.",
    ],
  },
  {
    titulo: "9. Legislação Aplicável e Foro Competente",
    conteudo: [
      "Este Aviso Legal é regido pelas leis da República Federativa do Brasil, em especial:",
      "• Lei nº 8.078/1990 — Código de Defesa do Consumidor (CDC);",
      "• Lei nº 13.709/2018 — Lei Geral de Proteção de Dados (LGPD);",
      "• Lei nº 9.610/1998 — Lei de Direitos Autorais;",
      "• Lei nº 12.965/2014 — Marco Civil da Internet.",
      "Fica eleito o foro da Comarca de São José do Rio Preto/SP para dirimir quaisquer controvérsias decorrentes deste aviso ou da relação entre a KingServices e seus usuários, ressalvado o direito do consumidor de optar pelo foro do seu domicílio, conforme art. 101, I, do CDC.",
    ],
  },
  {
    titulo: "10. Vigência e Atualizações",
    conteudo: [
      "Este Aviso Legal entra em vigor na data de sua publicação e poderá ser atualizado periodicamente para refletir mudanças legais, regulatórias ou operacionais. A versão atualizada estará sempre disponível nesta página.",
      "Recomendamos que os usuários revisem este documento periodicamente.",
    ],
  },
];

export default function AvisoLegalPage() {
  return (
    <main className="max-w-[860px] mx-auto px-4 md:px-6 py-12 md:py-16">
      {/* Cabeçalho */}
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
          Conformidade Legal
        </p>
        <h1 className="font-display font-bold text-[clamp(26px,4vw,42px)] text-text leading-tight mb-4">
          Aviso Legal
        </h1>
        <p className="text-text-secondary text-sm">
          Última atualização: <strong>19 de outubro de 2026</strong>
        </p>
        <p className="mt-4 text-text-secondary leading-relaxed">
          Este Aviso Legal estabelece as condições gerais de uso do site da KingServices Ltda.,
          os direitos e deveres dos usuários, bem como as disposições sobre proteção ao consumidor
          nos termos do{" "}
          <strong>Código de Defesa do Consumidor (Lei nº 8.078/1990)</strong> e demais legislações
          aplicáveis.
        </p>
      </div>

      {/* Destaque CDC */}
      <div className="mb-10 rounded-xl border border-primary/30 bg-primary-50 p-5">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <div>
            <p className="font-bold text-primary text-sm mb-1">Seus Direitos como Consumidor</p>
            <p className="text-sm text-primary/80 leading-relaxed">
              A KingServices respeita e garante os direitos previstos no{" "}
              <strong>Código de Defesa do Consumidor (CDC — Lei nº 8.078/1990)</strong>.
              Contratos firmados à distância ou fora do estabelecimento garantem o{" "}
              <strong>direito de arrependimento de 7 dias</strong> (art. 49 do CDC).
              Veja a Seção 6 para detalhes completos.
            </p>
          </div>
        </div>
      </div>

      {/* Seções */}
      <div className="space-y-8">
        {SECOES.map((secao) => (
          <section key={secao.titulo} className="border-b border-border-light pb-8 last:border-0">
            <h2 className="font-display font-bold text-[18px] text-text mb-4">{secao.titulo}</h2>
            <div className="space-y-2">
              {secao.conteudo.map((paragrafo, i) => (
                <p key={i} className="text-text-secondary leading-relaxed text-[15px]">
                  {paragrafo}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Rodapé da página */}
      <div className="mt-12 p-5 bg-surface-secondary rounded-xl text-[13px] text-text-secondary leading-relaxed">
        <p className="font-bold text-text mb-1">KingServices Ltda.</p>
        <p>CNPJ: 54.384.252/0001-90</p>
        <p>Rua Souza Barros, nº 75, Vila Aurora — São José do Rio Preto/SP, CEP: 15.014-380</p>
        <p className="mt-2">
          <a
            href="mailto:atendimento@kingservices.com.br"
            className="text-primary underline hover:text-primary-600"
          >
            atendimento@kingservices.com.br
          </a>
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm">
        <Link href="/politica-de-privacidade" className="text-primary underline hover:text-primary-600">
          Política de Privacidade (LGPD)
        </Link>
        <span className="text-text-secondary">·</span>
        <Link href="/" className="text-primary underline hover:text-primary-600">
          ← Voltar para a página inicial
        </Link>
      </div>
    </main>
  );
}
