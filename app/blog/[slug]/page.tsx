import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { CtaFinal } from "@/components/PageParts";
import { getAllPosts, getPostBySlug, getPostSlugs } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: `${post.title} — King Services`,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date || undefined,
      authors: [post.author],
      section: post.category,
    },
  };
}

function formatDate(date: string): string {
  if (!date) return "";
  return new Date(`${date}T00:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date || undefined,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: "King Services" },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    articleSection: post.category,
    inLanguage: "pt-BR",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Cabeçalho do artigo */}
      <div className="bg-gradient-to-br from-purple-900 to-purple-600 text-white px-4 md:px-6 py-8 md:py-11">
        <div className="max-w-[760px] mx-auto">
          <Link href="/blog" className="text-[13px] text-lilac-300 no-underline hover:underline">
            ← Voltar para o Blog
          </Link>
          <span className="mt-3 inline-block text-[11px] font-semibold border border-white/25 rounded-pill px-2.5 py-1 text-lilac-300">
            {post.category}
          </span>
          <h1 className="font-display font-semibold mt-3 text-[clamp(24px,4.5vw,34px)]">{post.title}</h1>
          <p className="mt-3 text-white/70 text-sm">
            {formatDate(post.date)} · {post.readingTime} min de leitura · {post.author}
          </p>
        </div>
      </div>

      {/* Corpo do artigo (MDX) */}
      <article className="max-w-[760px] mx-auto px-4 md:px-6 py-10">
        <div className="prose prose-neutral max-w-none prose-headings:font-display prose-headings:text-purple-900 prose-a:text-purple-700 prose-strong:text-graphite">
          <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </div>
      </article>

      {/* Artigos relacionados */}
      {related.length > 0 && (
        <div className="bg-mist">
          <div className="max-w-[760px] mx-auto px-4 md:px-6 py-8">
            <h2 className="font-display font-semibold text-purple-900 text-base mb-4">Leia também</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="block border border-fog rounded-card p-4 bg-white hover:border-lilac-500 hover:shadow-card transition-all"
                >
                  <span className="text-[11px] font-semibold text-purple-700">{p.category}</span>
                  <h3 className="font-display font-semibold text-sm mt-1">{p.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <CtaFinal />
    </>
  );
}
