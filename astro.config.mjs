// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { aonoteMarkdown } from './src/integrations/aonote-markdown.ts';
import { site } from './src/site.config.ts';

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  site: site.baseUrl,
  base: site.repoSubpath || undefined,
  trailingSlash: 'always',
  integrations: [
    aonoteMarkdown(),
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
