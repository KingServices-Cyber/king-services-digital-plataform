import type { Metadata } from "next";
import Link from "next/link";
import { Card, Content, EyebrowSmall, PageHero } from "@/components/ui";
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

  const featuredPost = !active ? posts[0] : null;
  const gridPosts = featuredPost ? posts.slice(1) : posts;

  const countByCategory = categories.reduce<Record<string, number>>((acc, cat) => {
    acc[cat] = allPosts.filter((p) => p.category === cat).length;
    return acc;
  }, {});

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Conteúdo para quem decide tecnologia na empresa"
        description="Artigos sobre telecom, segurança, cloud e conectividade, direto ao ponto."
      />
      <Content>
        {/* Filtros por categoria */}
        <div className="flex gap-2 flex-wrap mb-8">
          <Link
            href="/blog"
            className={`text-xs font-semibold px-3.5 py-2 rounded-pill border transition-colors ${
              !active
                ? "bg-primary text-white border-primary"
                : "border-border text-text-secondary hover:border-primary hover:text-primary"
            }`}
          >
            Todos
            <span className="ml-1.5 opacity-60">({allPosts.length})</span>
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/blog?categoria=${encodeURIComponent(cat)}`}
              className={`text-xs font-semibold px-3.5 py-2 rounded-pill border transition-colors ${
                active === cat
                  ? "bg-primary text-white border-primary"
                  : "border-border text-text-secondary hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
              <span className="ml-1.5 opacity-60">({countByCategory[cat] ?? 0})</span>
            </Link>
          ))}
        </div>

        {posts.length === 0 ? (
          <p className="text-sm text-text-secondary">Nenhum artigo encontrado nesta categoria.</p>
        ) : (
          <>
            {/* Artigo em destaque */}
            {featuredPost && (
              <div className="mb-8">
                <EyebrowSmall>Mais recente</EyebrowSmall>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="group block rounded-2xl border border-border bg-white hover:shadow-card hover:border-primary/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="p-8 sm:p-10 flex flex-col sm:flex-row gap-6 sm:gap-10">
                    <div className="flex-1">
                      <span className="inline-block text-[11px] font-semibold bg-primary-50 text-primary rounded-pill px-2.5 py-1 mb-3">
                        {featuredPost.category}
                      </span>
                      <h2 className="font-display font-bold text-xl sm:text-2xl text-text mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
                        {featuredPost.title}
                      </h2>
                      <p className="text-sm text-text-secondary leading-relaxed mb-4 max-w-xl">
                        {featuredPost.description}
                      </p>
                      <p className="text-[11px] text-text-secondary/70">
                        {formatDate(featuredPost.date)} · {featuredPost.readingTime} min de leitura
                      </p>
                    </div>
                    <div className="shrink-0 flex items-center">
                      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-3 transition-all duration-300">
                        Ler artigo
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Grid de artigos */}
            {gridPosts.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {gridPosts.map((p) => (
                  <Card key={p.slug} href={`/blog/${p.slug}`} highlight>
                    <span className="inline-block text-[11px] font-semibold bg-mist text-purple-700 rounded-pill px-2.5 py-1 mb-2 transition-colors duration-300 group-hover:bg-white/15 group-hover:text-white">
                      {p.category}
                    </span>
                    <h3 className="font-display font-semibold text-base mb-1 transition-colors duration-300 group-hover:text-white">
                      {p.title}
                    </h3>
                    <p className="text-sm text-graphite/70 mb-3 transition-colors duration-300 group-hover:text-white/85">
                      {p.description}
                    </p>
                    <p className="text-[11px] text-graphite/50 transition-colors duration-300 group-hover:text-white/70">
                      {formatDate(p.date)} · {p.readingTime} min de leitura
                    </p>
                  </Card>
                ))}
              </div>
            )}
          </>
        )}
      </Content>
    </>
  );
}
