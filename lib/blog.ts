import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string; // ISO (YYYY-MM-DD)
  author: string;
  readingTime: number; // minutos
};

export type Post = PostMeta & {
  content: string; // corpo MDX (sem frontmatter)
};

function estimateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function readPostFile(slug: string): Post {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    category: String(data.category ?? "Geral"),
    date: String(data.date ?? ""),
    author: String(data.author ?? "King Services"),
    readingTime: estimateReadingTime(content),
    content,
  };
}

/** Retorna todos os slugs disponíveis (arquivos .mdx em content/blog). */
export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/** Retorna todos os posts (metadados + conteúdo), ordenados do mais recente. */
export function getAllPosts(): Post[] {
  return getPostSlugs()
    .map((slug) => readPostFile(slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Retorna um post pelo slug, ou null se não existir. */
export function getPostBySlug(slug: string): Post | null {
  try {
    return readPostFile(slug);
  } catch {
    return null;
  }
}

/** Lista de categorias distintas presentes nos posts. */
export function getAllCategories(): string[] {
  return Array.from(new Set(getAllPosts().map((p) => p.category)));
}
