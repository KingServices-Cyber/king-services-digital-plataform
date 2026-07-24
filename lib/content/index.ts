// Barrel: dados de conteúdo do site (soluções, segmentos, navegação).
// blog.ts NÃO entra aqui de propósito: usa node:fs/node:path (server-only) e
// não pode ser alcançável a partir de um import em client component. Importe
// diretamente de "@/lib/content/blog" nos server components que precisarem.
export * from "./data";
export * from "./nav";
