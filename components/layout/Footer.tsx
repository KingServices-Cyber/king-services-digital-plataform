import Link from "next/link";
import { CONTACT_INFO } from "@/lib/content/data";
import { WhatsAppLink } from "@/components/ui";
import { cn } from "@/design-system";

const PLANOS_LINKS = [
  { label: "Fibra 400 Mega — R$ 79,99/mês", href: "/contato?plano=400mega" },
  { label: "Fibra 600 Mega — R$ 94,99/mês", href: "/contato?plano=600mega" },
  { label: "Fibra 1 Giga — R$ 199,99/mês", href: "/contato?plano=1giga" },
  { label: "Fibra 2 Giga — R$ 399,99/mês", href: "/contato?plano=2giga" },
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
  { label: "Sobre a KingServices", href: "/sobre" },
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

      {/* Redes Sociais */}
      <div className="max-w-[1280px] mx-auto px-6 py-6 flex flex-col items-center gap-3 border-t border-white/10">
        <p className="text-xs font-bold uppercase tracking-wide text-white/60">Siga-nos nas redes sociais</p>
        <div className="flex items-center gap-4">
          <a
            href="https://facebook.com/kingservices"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook da KingServices"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/kingservicesoficial"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da KingServices"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/kingservices"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter/X da KingServices"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.26 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
            </svg>
          </a>
        </div>
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
        <p>&copy; {new Date().getFullYear()} KingServices. Todos os direitos reservados.</p>
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
