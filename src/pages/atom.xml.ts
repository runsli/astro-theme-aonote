import { site } from '../site.config';
import { getPublishedPosts, postUrl } from '../utils/posts';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();
  const blogPosts = posts.filter((p) => {
    const slug = p.id.replace(/\.mdx?$/, '');
    return !['about', '404'].includes(slug);
  });
  const siteUrl = context.site!.toString().replace(/\/$/, '');

  const entries = blogPosts
    .map((post) => {
      const link = new URL(postUrl(post), context.site).href;
      return `
  <entry>
    <title>${escapeXml(post.data.title)}</title>
    <link href="${link}" />
    <id>${link}</id>
    <updated>${post.data.date.toISOString()}</updated>
    <summary>${escapeXml(post.data.summary ?? '')}</summary>
    <author><name>${escapeXml(site.author)}</name></author>
  </entry>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(site.title)}</title>
  <subtitle>${escapeXml(site.description)}</subtitle>
  <link href="${siteUrl}/" />
  <link rel="self" href="${siteUrl}/atom.xml" />
  <updated>${blogPosts[0]?.data.date.toISOString() ?? new Date().toISOString()}</updated>
  <id>${siteUrl}/</id>
  ${entries}
</feed>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/atom+xml; charset=utf-8' },
  });
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
