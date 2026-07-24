import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/Card";
import { Content, PageHero } from "@/components/PageParts";
import { CATEGORIES, POSTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos sobre telecom, segurança, cloud e conectividade, direto ao ponto.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage({ searchParams }: { searchParams: { categoria?: string } }) {
  const active = searchParams.categoria;
  const posts = active ? POSTS.filter((p) => p.category === active) : POSTS;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Conteúdo para quem decide tecnologia na empresa"
        description="Artigos sobre telecom, segurança, cloud e conectividade, direto ao ponto."
      />
      <Content>
        <div className="flex gap-2 flex-wrap mb-6">
          <Link
            href="/blog"
            className={`text-xs font-semibold px-3.5 py-2 rounded-pill border ${
              !active
                ? "bg-purple-600 text-white border-purple-600"
                : "border-fog text-graphite hover:border-purple-600"
            }`}
          >
            Todos
          </Link>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={`/blog?categoria=${encodeURIComponent(cat)}`}
              className={`text-xs font-semibold px-3.5 py-2 rounded-pill border ${
                active === cat
                  ? "bg-purple-600 text-white border-purple-600"
                  : "border-fog text-graphite hover:border-purple-600"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        {posts.length === 0 ? (
          <p className="text-sm text-[#8B8780]">Nenhum artigo encontrado nesta categoria.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((p) => (
              <Card key={p.title} clickable={false}>
                <span className="inline-block text-[11px] font-semibold bg-mist text-purple-700 rounded-pill px-2.5 py-1 mb-2">
                  {p.category}
                </span>
                <h3 className="font-display font-semibold text-sm mb-1">{p.title}</h3>
                <p className="text-xs text-graphite/70">{p.excerpt}</p>
              </Card>
            ))}
          </div>
        )}
      </Content>
    </>
  );
}
