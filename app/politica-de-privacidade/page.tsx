import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade (LGPD)",
  alternates: { canonical: "/politica-de-privacidade" },
  description:
    "Política de Privacidade e proteção de dados da KingServices, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).",
};

const SECOES = [
  {
    titulo: "1. Identificação do Controlador",
    conteudo: [
      "KingServices Ltda., pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 54.384.252/0001-90, com sede na Rua Souza Barros, nº 75, Vila Aurora, São José do Rio Preto/SP, CEP: 15.014-380, é a Controladora dos dados pessoais coletados neste site.",
      "Encarregado de Dados (DPO): atendimento@kingservices.com.br",
    ],
  },
  {
    titulo: "2. Dados Pessoais Coletados",
    conteudo: [
      "Coletamos os seguintes dados pessoais quando você preenche nossos formulários ou entra em contato conosco:",
      "• Nome completo",
      "• Endereço de e-mail",
      "• Número de telefone / WhatsApp",
      "• CPF ou CNPJ (para identificação de pessoa física ou jurídica)",
      "• Dados de navegação (endereço IP, tipo de navegador, páginas visitadas) coletados automaticamente para fins de análise e segurança.",
    ],
  },
  {
    titulo: "3. Finalidade do Tratamento",
    conteudo: [
      "Os dados pessoais coletados são utilizados para as seguintes finalidades:",
      "• Responder a solicitações de contato e atendimento ao cliente;",
      "• Elaborar propostas comerciais e enviar informações sobre nossos produtos e serviços;",
      "• Cumprir obrigações legais e contratuais;",
      "• Prevenir fraudes e garantir a segurança das informações;",
      "• Melhorar nossos serviços com base em análises de uso.",
    ],
  },
  {
    titulo: "4. Base Legal",
    conteudo: [
      "O tratamento dos seus dados pessoais é realizado com fundamento nas seguintes bases legais previstas na LGPD (Lei nº 13.709/2018):",
      "• Consentimento (art. 7º, I): quando você preenche e envia um formulário neste site;",
      "• Execução de contrato (art. 7º, V): para cumprimento de obrigações decorrentes de contrato celebrado com o titular;",
      "• Cumprimento de obrigação legal (art. 7º, II): para atender exigências legais e regulatórias;",
      "• Legítimo interesse (art. 7º, IX): para melhoria dos nossos serviços e prevenção de fraudes.",
    ],
  },
  {
    titulo: "5. Compartilhamento de Dados",
    conteudo: [
      "A KingServices não vende, aluga ou cede seus dados pessoais a terceiros para fins comerciais. Podemos compartilhar seus dados nas seguintes situações:",
      "• Com a Vivo (Telefônica Brasil S.A.), na condição de parceira autorizada, para viabilizar a contratação de planos e serviços;",
      "• Com prestadores de serviços técnicos (hospedagem, e-mail, análise de dados) que atuam sob nossas instruções e com obrigações de confidencialidade;",
      "• Com autoridades públicas, quando exigido por lei, decisão judicial ou regulatória.",
    ],
  },
  {
    titulo: "6. Prazo de Retenção",
    conteudo: [
      "Os dados pessoais serão mantidos pelo tempo necessário para cumprir as finalidades descritas nesta política ou pelo prazo exigido por legislação aplicável.",
      "Dados de leads e contatos comerciais: até 5 (cinco) anos após o último contato ou encerramento da relação comercial.",
      "Dados de clientes ativos: durante toda a vigência contratual e pelo prazo legal de guarda após o encerramento.",
      "Dados de navegação: até 6 (seis) meses.",
    ],
  },
  {
    titulo: "7. Direitos do Titular",
    conteudo: [
      "Nos termos da LGPD, você tem os seguintes direitos em relação aos seus dados pessoais:",
      "• Confirmação da existência de tratamento;",
      "• Acesso aos dados;",
      "• Correção de dados incompletos, inexatos ou desatualizados;",
      "• Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;",
      "• Portabilidade dos dados;",
      "• Eliminação dos dados tratados com base no consentimento;",
      "• Informação sobre entidades com as quais compartilhamos seus dados;",
      "• Revogação do consentimento a qualquer momento.",
      "Para exercer seus direitos, entre em contato pelo e-mail: atendimento@kingservices.com.br",
    ],
  },
  {
    titulo: "8. Segurança dos Dados",
    conteudo: [
      "A KingServices adota medidas técnicas e organizacionais apropriadas para proteger seus dados pessoais contra acesso não autorizado, perda, alteração ou divulgação indevida, incluindo:",
      "• Transmissão de dados por protocolo seguro (HTTPS/TLS);",
      "• Controle de acesso restrito a colaboradores autorizados;",
      "• Armazenamento em infraestrutura de nuvem com certificações de segurança (Supabase/AWS);",
      "• Monitoramento e revisão periódica dos sistemas.",
    ],
  },
  {
    titulo: "9. Cookies e Tecnologias de Rastreamento",
    conteudo: [
      "Este site pode utilizar cookies técnicos necessários para seu funcionamento. Não utilizamos cookies de rastreamento publicitário de terceiros sem seu consentimento.",
      "Você pode configurar seu navegador para recusar cookies, mas isso pode impactar a experiência de uso do site.",
    ],
  },
  {
    titulo: "10. Alterações nesta Política",
    conteudo: [
      "Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas, serviços ou exigências legais. A versão mais recente estará sempre disponível nesta página com a data de vigência atualizada.",
      "Recomendamos que você revise esta política regularmente.",
    ],
  },
  {
    titulo: "11. Contato e Canal de Atendimento ao Titular",
    conteudo: [
      "Para dúvidas, solicitações relacionadas aos seus dados pessoais ou para exercer seus direitos, entre em contato com nosso Encarregado de Dados:",
      "E-mail: atendimento@kingservices.com.br",
      "Telefone / WhatsApp: (17) 99715-0462",
      "Endereço: Rua Souza Barros, nº 75, Vila Aurora, São José do Rio Preto/SP, CEP: 15.014-380",
      "Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD): www.gov.br/anpd",
    ],
  },
];

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="max-w-[860px] mx-auto px-4 md:px-6 py-12 md:py-16">
      {/* Cabeçalho */}
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
          Conformidade LGPD
        </p>
        <h1 className="font-display font-bold text-[clamp(26px,4vw,42px)] text-text leading-tight mb-4">
          Política de Privacidade
        </h1>
        <p className="text-text-secondary text-sm">
          Última atualização: <strong>01 de outubro de 2026</strong>
        </p>
        <p className="mt-4 text-text-secondary leading-relaxed">
          A KingServices Ltda. valoriza a privacidade e a segurança dos seus dados pessoais. Esta
          Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos suas
          informações, em conformidade com a{" "}
          <strong>Lei Geral de Proteção de Dados Pessoais — LGPD (Lei nº 13.709/2018)</strong>.
        </p>
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

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="text-sm text-primary underline hover:text-primary-600"
        >
          ← Voltar para a página inicial
        </Link>
      </div>
    </main>
  );
}
