import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => !data.draft && !data.hidden);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date, locale: string): string {
  return date.toLocaleDateString(locale === 'zh-CN' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function postUrl(post: Post): string {
  const slug = post.id.replace(/\.mdx?$/, '');
  if (slug === 'about') return '/about/';
  if (slug === '404') return '/404/';
  return `/posts/${slug}/`;
}

export function getAllTags(posts: Post[]): string[] {
  const tags = new Set<string>();
  for (const post of posts) {
    for (const tag of post.data.tags) tags.add(tag);
  }
  return [...tags].sort((a, b) => a.localeCompare(b));
}

export function groupPostsByYear(posts: Post[]): Map<number, Post[]> {
  const map = new Map<number, Post[]>();
  for (const post of posts) {
    const year = post.data.date.getFullYear();
    const list = map.get(year) ?? [];
    list.push(post);
    map.set(year, list);
  }
  return new Map([...map.entries()].sort((a, b) => b[0] - a[0]));
}

export function getAdjacentPosts(
  posts: Post[],
  current: Post,
): { prev: Post | null; next: Post | null } {
  const blogPosts = posts.filter((p) => !['about', '404'].includes(p.id.replace(/\.mdx?$/, '')));
  const idx = blogPosts.findIndex((p) => p.id === current.id);
  return {
    prev: idx > 0 ? blogPosts[idx - 1]! : null,
    next: idx >= 0 && idx < blogPosts.length - 1 ? blogPosts[idx + 1]! : null,
  };
}
