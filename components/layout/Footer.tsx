import Link from "next/link";
import { CONTACT_INFO } from "@/lib/content/data";
import { WhatsAppLink } from "@/components/ui";
import { cn } from "@/design-system";

const SOLUCOES_LINKS = [
  { label: "Telefonia Móvel Empresarial", href: "/solucoes/telefonia-movel" },
  { label: "Internet Empresarial", href: "/solucoes/internet-empresarial" },
  { label: "Telefonia Fixa e PABX", href: "/solucoes/telefonia-fixa-pabx" },
  { label: "Soluções Cloud", href: "/solucoes/cloud" },
  { label: "Segurança Digital", href: "/solucoes/seguranca-digital" },
  { label: "Ver todas as soluções", href: "/solucoes" },
];

const EMPRESA_LINKS = [
  { label: "Sobre a King Services", href: "/sobre" },
  { label: "Parceiro Vivo Empresas", href: "/vivo-empresas" },
  { label: "Diferenciais", href: "/diferenciais" },
  { label: "Cases", href: "/cases" },
  { label: "Segmentos atendidos", href: "/segmentos" },
];

const RECURSOS_LINKS = [
  { label: "Blog", href: "/blog" },
  { label: "Central de Conteúdo", href: "/central-de-conteudo" },
  { label: "Fale com um especialista", href: "/contato" },
  { label: "Área do Cliente", href: "/login" },
];

function FooterColumn({
  title,
  links,
  className,
}: {
  title: string;
  links: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <div className={cn(className)}>
      <p className="text-xs font-bold uppercase tracking-wide text-white mb-3.5">{title}</p>
      <ul className="space-y-0 m-0 p-0 list-none">
        {links.map((l) => (
          <li key={l.label} className="py-1.5">
            <Link href={l.href} className="text-[13px] text-white/75 hover:text-white no-underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer({ className }: { className?: string } = {}) {
  return (
    <footer className={cn("bg-purple-900 text-white/75", className)}>
      <div className="max-w-[1280px] mx-auto px-6 pt-12 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-8">
        <div>
          <p className="font-display font-bold text-xl text-white mb-3">
            King<span className="text-lilac-300">Services</span>
          </p>
          <p className="text-xs leading-relaxed max-w-[320px] mb-4">
            Conectividade e tecnologia para empresas que não podem parar. Parceira Autorizada Vivo Empresas.
          </p>
          <div className="text-xs leading-relaxed">
            <p className="font-bold text-white mb-1">Central de Atendimento:</p>
            <p className="mb-1">📞 Telefone: {CONTACT_INFO.phone}</p>
            <p className="mb-3 flex items-center gap-2">
              <WhatsAppLink iconOnly />
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener"
                className="text-white/75 hover:text-white no-underline"
              >
                WhatsApp: {CONTACT_INFO.phone}
              </a>
            </p>

            <p className="font-bold text-white mb-1">✉ E-mail:</p>
            <p className="mb-3">{CONTACT_INFO.email}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs leading-relaxed mt-1">
            {CONTACT_INFO.offices.map((office) => (
              <div key={office.label}>
                <p className="font-bold text-white mb-1">📍 {office.label}:</p>
                <p>
                  {office.companyName}
                  <br />
                  CNPJ: {office.cnpj}
                  <br />
                  {office.addressStreet}
                  <br />
                  {office.addressCity}
                  <br />
                  {office.addressCep}
                </p>
              </div>
            ))}
          </div>
        </div>

        <FooterColumn title="Soluções" links={SOLUCOES_LINKS} />
        <FooterColumn title="Empresa" links={EMPRESA_LINKS} />
        <FooterColumn title="Recursos" links={RECURSOS_LINKS} />
      </div>

      <div className="border-t border-white/10 px-6 py-5 max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-3 text-[11px]">
        <p>© {new Date().getFullYear()} King Services. Todos os direitos reservados.</p>
        <div className="flex gap-5 flex-wrap">
          <Link href="/contato" className="text-white/60 hover:text-white no-underline">
            Aviso legal
          </Link>
          <Link href="/contato" className="text-white/60 hover:text-white no-underline">
            Política de Privacidade (LGPD)
          </Link>
        </div>
      </div>
    </footer>
  );
}
