# Ecosystem (Aonote family)

This theme is one implementation in the **Aonote** reading/layout family. It is **not** the same product as [Slisync](https://github.com/runsli/slisync).

| Entry | Role |
| --- | --- |
| [runsli/Aonote](https://github.com/Runsli/Aonote) | Python, no-JS static generator — [official site](https://aonote.vercel.app) |
| **astro-theme-aonote** (this repo) | Astro 5 port, optional client JS — [demo](https://astro-theme-aonote.vercel.app) |
| [runsli.com](https://www.runsli.com/) | Author’s personal blog (not product docs) |
| [Slisync](https://github.com/runsli/slisync) | Multi-agent **shared memory** (CRDT); exports **Markdown files** (no dependency on this theme) |
| [slisync-docs](https://github.com/runsli/slisync-docs) | Slisync user documentation (VitePress) |

## Optional: posts from Slisync export

Slisync’s publishing contract is **exported Markdown**, not “build with Aonote”. Any static site or CMS can consume the files. This theme is **one optional consumer**.

Slisync writes:

```text
markdown/chunks/{workspaceId}/{sessionId}/{slug}.md
```

Copy into **`src/content/posts/`** (keep subfolders), then `npm run dev` / `npm run build`.

- **One-way** — edits in this theme do not write back to Slisync  
- **Tasks** (`kind: task`) are not exported — use `memory_chunk` for post body  

Example:

1. In [slisync](https://github.com/runsli/slisync): `npm run dev` → `npm run graph:seed`  
2. `npm run export:chunks:http -- --room example-room --out ./markdown/chunks`  
3. `cp -R markdown/chunks/ws-demo src/content/posts/` (adjust paths to your export)  

Full narrative: [slisync-docs — Memory → Markdown → site](https://github.com/runsli/slisync-docs/blob/main/docs/guide/story-pipeline.md).

## When to use which

- **This Astro theme** — Astro, npm templates, components, or client-side enhancements with Aonote-style layout.  
- **Upstream Aonote** — zero required browser JS, Python builds, `check_site.py`.  
- **Slisync** — live shared memory and agents; export when you are ready to publish elsewhere.

Full comparison (Aonote family only):

**https://aonote.vercel.app/posts/doc-ecosystem/**

(Source: [markdown/doc-ecosystem.md](https://github.com/Runsli/Aonote/blob/main/markdown/doc-ecosystem.md))
