import Link from "next/link";
import { CONTACT_INFO } from "@/lib/content/data";

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

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
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

export function Footer() {
  return (
    <footer className="bg-purple-900 text-white/75">
      <div className="max-w-[1280px] mx-auto px-6 pt-12 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-8">
        <div>
          <p className="font-display font-bold text-xl text-white mb-3">
            King<span className="text-lilac-300">Services</span>
          </p>
          <p className="text-xs leading-relaxed max-w-[320px] mb-4">
            Conectividade e tecnologia para empresas que não podem parar. Parceira Autorizada Vivo Empresas.
          </p>
          <ul className="list-none m-0 p-0">
            <li className="text-xs py-1">📞 {CONTACT_INFO.phone}</li>
            <li className="text-xs py-1">✉ {CONTACT_INFO.email}</li>
            <li className="text-xs py-1">
              📍 {CONTACT_INFO.addressLine1} — {CONTACT_INFO.addressLine2}
            </li>
          </ul>
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
