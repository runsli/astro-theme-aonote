import rss from '@astrojs/rss';
import { site } from '../site.config';
import { getPublishedPosts, postUrl } from '../utils/posts';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();
  const blogPosts = posts.filter((p) => {
    const slug = p.id.replace(/\.mdx?$/, '');
    return !['about', '404'].includes(slug);
  });

  return rss({
    title: site.title,
    description: site.description,
    site: context.site!,
    items: blogPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: postUrl(post),
      categories: post.data.tags,
      author: site.author,
    })),
    customData: `<language>${site.language}</language>`,
  });
}
