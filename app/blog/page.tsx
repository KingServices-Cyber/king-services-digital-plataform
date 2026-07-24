import type { Metadata } from "next";
import Link from "next/link";
import { Card, Content, PageHero } from "@/components/ui";
import { getAllCategories, getAllPosts } from "@/lib/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos sobre telecom, segurança, cloud e conectividade, direto ao ponto.",
  alternates: { canonical: "/blog" },
};

function formatDate(date: string): string {
  if (!date) return "";
  return new Date(`${date}T00:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage({ searchParams }: { searchParams: { categoria?: string } }) {
  const active = searchParams.categoria;
  const categories = getAllCategories();
  const allPosts = getAllPosts();
  const posts = active ? allPosts.filter((p) => p.category === active) : allPosts;

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
          {categories.map((cat) => (
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
              <Card key={p.slug} href={`/blog/${p.slug}`}>
                <span className="inline-block text-[11px] font-semibold bg-mist text-purple-700 rounded-pill px-2.5 py-1 mb-2">
                  {p.category}
                </span>
                <h3 className="font-display font-semibold text-sm mb-1">{p.title}</h3>
                <p className="text-xs text-graphite/70 mb-3">{p.description}</p>
                <p className="text-[11px] text-graphite/50">
                  {formatDate(p.date)} · {p.readingTime} min de leitura
                </p>
              </Card>
            ))}
          </div>
        )}
      </Content>
    </>
  );
}
