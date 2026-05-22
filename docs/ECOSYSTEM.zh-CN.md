# 项目生态（Aonote 系列）

本主题是 **Aonote** 阅读版式系列的一种实现，与 [Slisync](https://github.com/runsli/slisync) **不是同一产品**。

| 入口 | 角色 |
| --- | --- |
| [runsli/Aonote](https://github.com/Runsli/Aonote) | Python、no-JS 静态生成器 — [项目官网](https://aonote.vercel.app) |
| **astro-theme-aonote**（本仓库） | Astro 5 移植，可选客户端 JS — [演示站](https://astro-theme-aonote.vercel.app) |
| [runsli.com](https://www.runsli.com/) | 作者个人博客（非产品文档） |
| [Slisync](https://github.com/runsli/slisync) | 多 Agent **共忆**（CRDT）；导出 **Markdown 文件**（不依赖本主题） |
| [slisync-docs](https://github.com/runsli/slisync-docs) | Slisync 用户文档（VitePress 官网） |

## 可选：消费 Slisync 导出的文章

Slisync 的发布契约是 **导出的 Markdown**，不是「必须用 Aonote 建站」。任意静态站或 CMS 都可使用；**本主题只是可选消费方之一**。

导出路径示例：

```text
markdown/chunks/{workspaceId}/{sessionId}/{slug}.md
```

拷贝到本仓库 **`src/content/posts/`**（保留子目录），然后 `npm run dev` / `npm run build`。

- **单向**：在主题里改 Markdown **不会**回写 Slisync  
- **任务节点**不会导出 — 要上博客的正文请用 `memory_chunk`  

示例步骤：

1. 在 [slisync](https://github.com/runsli/slisync)：`npm run dev` → `npm run graph:seed`  
2. `npm run export:chunks:http -- --room example-room --out ./markdown/chunks`  
3. `cp -R markdown/chunks/ws-demo src/content/posts/`（按你的导出路径调整）  

完整故事见 [slisync-docs — 共忆 → Markdown → 静态站](https://github.com/runsli/slisync-docs/blob/main/docs/zh/guide/story-pipeline.md)。

## 如何选择

- **本 Astro 主题** — 需要 Astro、npm 模板、组件化或客户端增强，并保留 Aonote 版式。  
- **上游 Aonote** — 需要零必需 JS、Python 构建与 `check_site.py`。  
- **Slisync** — 活记忆与多 Agent 协作；需要发布时再导出 Markdown，由你自选下游工具。

Aonote 系列完整对比（仅 Aonote 家族）：

**https://aonote.vercel.app/posts/doc-ecosystem/**

（仓库源文件：[markdown/doc-ecosystem.md](https://github.com/Runsli/Aonote/blob/main/markdown/doc-ecosystem.md)）
