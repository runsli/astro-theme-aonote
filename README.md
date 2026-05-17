# astro-theme-aonote

English | [中文](README.zh-CN.md)

**Aonote 青笺** as an [Astro](https://astro.build) blog theme — ported from the Python static generator [Runsli/Aonote](https://github.com/Runsli/Aonote).

- No client-side JavaScript required for reading
- Light/dark mode, mobile nav, TOC, tags, archive
- RSS, Atom, sitemap, SEO meta
- Markdown + GFM + math (KaTeX at build time)

## Quick start

```bash
git clone https://github.com/Runsli/astro-theme-aonote.git
cd astro-theme-aonote
npm install
npm run dev
```

Edit `src/site.config.ts`, then add posts under `src/content/posts/`.

## Project layout

```text
src/
├── site.config.ts      # Site title, URL, language, copyright
├── i18n.ts             # UI strings (zh-CN / en)
├── content/posts/      # Markdown posts
├── layouts/            # Base layout
├── components/         # Post card, copyright
├── pages/              # Routes (home, archive, tags, posts)
└── styles/aonote.css   # Theme styles (from original Aonote)
```

## Deploy

### Vercel

`vercel.json` is included. Set `site.baseUrl` in `src/site.config.ts` to your production URL.

### GitHub Pages

Set `repoSubpath` and `baseUrl` in `src/site.config.ts`, then deploy `dist/`.

## Scripts

| Command        | Action              |
| -------------- | ------------------- |
| `npm run dev`  | Start dev server    |
| `npm run build`| Build to `./dist/`  |
| `npm run preview` | Preview production build |

## License

MIT — see [LICENSE](LICENSE). Original Aonote design and styles © Runsli.
