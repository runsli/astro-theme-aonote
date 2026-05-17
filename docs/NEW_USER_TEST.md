# New-user smoke test

Run after the repo is pushed and (optionally) enabled as a GitHub template.

## A. `npm create astro` (GitHub template)

```bash
npm create astro@latest my-blog -- --template runsli/astro-theme-aonote
cd my-blog
npm run dev
```

Expected: dev server starts, home shows 4 sample posts, `/about/` has visible title and nav highlights **关于**.

## B. Local template path (before publish)

```bash
npm create astro@latest my-blog -- --template /path/to/astro-theme-aonote
```

## C. Manual copy (offline CI)

```bash
rsync -a --exclude node_modules --exclude dist --exclude .git ./astro-theme-aonote/ ./my-blog/
cd my-blog && npm install && npm run build
```

Last verified locally: `npm run build` succeeds (14 pages).
