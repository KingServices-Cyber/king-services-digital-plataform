import Link from "next/link";
import { CONTACT_INFO } from "@/lib/content/data";
import { WhatsAppLink } from "@/components/ui";
import { cn } from "@/design-system";

const PLANOS_LINKS = [
  { label: "Plano Básico — 50 Mbps", href: "/contato?plano=basico" },
  { label: "Plano Essencial — 150 Mbps", href: "/contato?plano=essencial" },
  { label: "Plano Turbo — 300 Mbps", href: "/contato?plano=turbo" },
  { label: "Plano Ultra — 500 Mbps", href: "/contato?plano=ultra" },
  { label: "Ver todos os planos", href: "/#planos" },
];

const SOLUCOES_LINKS = [
  { label: "Internet Empresarial", href: "/solucoes/internet-empresarial" },
  { label: "Telefonia Móvel", href: "/solucoes/telefonia-movel" },
  { label: "Telefonia Fixa e PABX", href: "/solucoes/telefonia-fixa-pabx" },
  { label: "Soluções Cloud", href: "/solucoes/cloud" },
  { label: "Segurança Digital", href: "/solucoes/seguranca-digital" },
];

const EMPRESA_LINKS = [
  { label: "Sobre a King Services", href: "/sobre" },
  { label: "Diferenciais", href: "/diferenciais" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Área do Cliente", href: "/login" },
  { label: "Contato", href: "/contato" },
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
            <Link href={l.href} className="text-[13px] text-white/70 hover:text-white no-underline transition-colors">
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
    <footer className={cn("bg-primary-900 text-white/75", className)}>
      <div className="max-w-[1280px] mx-auto px-6 pt-12 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-8">
        <div>
          <p className="font-display font-bold text-xl text-white mb-3">
            King<span className="text-primary-200">Services</span>
          </p>
          <p className="text-xs leading-relaxed max-w-[320px] mb-4">
            Internet de alta velocidade, atendimento humanizado e soluções de telecomunicação para sua casa e empresa.
          </p>
          <div className="text-xs leading-relaxed">
            <p className="font-bold text-white mb-1">Central de Atendimento:</p>
            <p className="mb-1">
              <a href="tel:+5517997150462" className="text-white/70 hover:text-white no-underline transition-colors">
                {CONTACT_INFO.phone}
              </a>
            </p>
            <p className="mb-3 flex items-center gap-2">
              <WhatsAppLink iconOnly />
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener"
                className="text-white/70 hover:text-white no-underline transition-colors"
              >
                WhatsApp: {CONTACT_INFO.phone}
              </a>
            </p>

            <p className="font-bold text-white mb-1">E-mail:</p>
            <p className="mb-3">
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-white/70 hover:text-white no-underline transition-colors">
                {CONTACT_INFO.email}
              </a>
            </p>
          </div>
        </div>

        <FooterColumn title="Planos" links={PLANOS_LINKS} />
        <FooterColumn title="Soluções" links={SOLUCOES_LINKS} />
        <FooterColumn title="Empresa" links={EMPRESA_LINKS} />
      </div>

      <div className="border-t border-white/10 max-w-[1280px] mx-auto px-6 pt-5 pb-6 text-xs leading-relaxed text-center">
        {CONTACT_INFO.offices.map((office) => {
          const shortLabel = office.label.replace("Escritório ", "");
          return (
            <p key={office.label} className="mb-2 last:mb-0">
              <span className="font-bold text-white">{shortLabel}: {office.companyName}</span>
              {" - "}CNPJ: {office.cnpj} - {office.addressStreet} - {office.addressCity} - {office.addressCep}
            </p>
          );
        })}
      </div>

      <div className="border-t border-white/10 px-6 py-5 max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-3 text-[11px]">
        <p>&copy; {new Date().getFullYear()} King Services. Todos os direitos reservados.</p>
        <div className="flex gap-5 flex-wrap">
          <Link href="/contato" className="text-white/60 hover:text-white no-underline transition-colors">
            Aviso legal
          </Link>
          <Link href="/contato" className="text-white/60 hover:text-white no-underline transition-colors">
            Política de Privacidade (LGPD)
          </Link>
        </div>
      </div>
    </footer>
  );
}
