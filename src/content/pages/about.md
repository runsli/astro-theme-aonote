---
title: 关于 Aonote 青笺
date: 2025-12-01
summary: 介绍本仓库作为 Aonote 分支项目的设计原则、功能边界和自定义方式。
---

本仓库是 [runsli/Aonote](https://github.com/runsli/Aonote) 的 **Astro 分支项目**（`astro-theme-aonote`）：在保留原版视觉与信息架构的前提下，用 Astro Content Collections 管理 Markdown，用 Node 工具链构建静态站点。

上游 Aonote 使用 Python 生成器；本分支面向希望在 Astro 生态中复用同一套样式与页面结构的作者。

## 设计原则

- **内容优先**：减少干扰，让正文、代码块与表格保持清晰层级。
- **纯静态输出**：构建产物为 HTML/CSS，阅读体验不依赖浏览器端脚本。
- **长期可维护**：文章在 Markdown，样式在 CSS，配置集中在 `src/site.config.ts`。
- **容易部署**：构建产物在 `dist/`，可部署到 Vercel、Netlify、GitHub Pages 等。

## 自定义建议

1. 编辑 `src/site.config.ts` 中的站点标题、描述、作者与 `baseUrl`。
2. 在 `src/content/posts/` 添加或替换文章。
3. 按需调整 `src/styles/aonote.css`。
4. 运行 `npm run build` 并在 `dist/` 预览。
