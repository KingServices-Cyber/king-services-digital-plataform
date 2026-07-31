import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/content/blog";
import { SEGMENTS, SOLUTIONS } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

type Freq = MetadataRoute.Sitemap[number]["changeFrequency"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Rotas estáticas com prioridade relativa (a home é a mais importante).
  const staticRoutes: { path: string; priority: number; changeFrequency: Freq }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/solucoes", priority: 0.9, changeFrequency: "monthly" },
    { path: "/segmentos", priority: 0.9, changeFrequency: "monthly" },
    { path: "/vivo-empresas", priority: 0.8, changeFrequency: "monthly" },
    { path: "/cases", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/central-de-conteudo", priority: 0.6, changeFrequency: "monthly" },
    { path: "/sobre", priority: 0.6, changeFrequency: "yearly" },
    { path: "/diferenciais", priority: 0.6, changeFrequency: "yearly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contato", priority: 0.8, changeFrequency: "yearly" },
  ];

  const solutionRoutes = Object.keys(SOLUTIONS).map((slug) => ({
    path: `/solucoes/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const segmentRoutes = Object.keys(SEGMENTS).map((slug) => ({
    path: `/segmentos/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  const staticEntries: MetadataRoute.Sitemap = [...staticRoutes, ...solutionRoutes, ...segmentRoutes].map(
    (route) => ({
      url: absoluteUrl(route.path),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }),
  );

  // Artigos do blog (content/blog/*.mdx), com data de publicação real.
  const blogEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.date ? new Date(`${post.date}T00:00:00`) : now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
