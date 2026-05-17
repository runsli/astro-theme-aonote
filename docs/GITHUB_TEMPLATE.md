# Enable GitHub Template repository (step 2)

After pushing to `https://github.com/runsli/astro-theme-aonote`:

1. Open **Settings → General**
2. Under **Template repository**, check **Template repository**
3. Save

Users can then:

```bash
npm create astro@latest my-blog -- --template runsli/astro-theme-aonote
```

Or use GitHub **Use this template** on the repo page.

## Deploy demo (Vercel)

1. Import the GitHub repo in [Vercel](https://vercel.com/new)
2. Framework preset: **Astro**
3. Build command: `npm run build`
4. Output directory: `dist`
5. Set production domain to `astro-theme-aonote.vercel.app` (or your choice)
6. Update `src/site.config.ts` → `baseUrl` to match the live URL

`vercel.json` is already included (CSP headers).

## Deploy demo (Netlify)

- Build command: `npm run build`
- Publish directory: `dist`
