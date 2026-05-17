---
title: 关于 Aonote 青笺
date: 2025-12-01
summary: 介绍 Aonote 青笺 Astro 主题的设计原则、功能边界和自定义方式。
hidden: true
---

# 关于 Aonote 青笺

Aonote 青笺是一个面向个人博客与轻量文档站的 **no-JS** 静态博客主题。本仓库为 [Runsli/Aonote](https://github.com/Runsli/Aonote) Python 生成器的 **Astro 移植版**，保留原版视觉与信息架构，使用 Astro Content Collections 管理 Markdown 内容。

## 设计原则

- **内容优先**：减少干扰，让正文、代码块与表格保持清晰层级。
- **纯静态输出**：无需浏览器端 JavaScript 即可阅读主要内容。
- **长期可维护**：文章在 Markdown，样式在 CSS，配置集中在 `src/site.config.ts`。
- **容易部署**：构建产物在 `dist/`，可部署到 Vercel、Netlify、GitHub Pages 等。

## 自定义建议

1. 编辑 `src/site.config.ts` 中的站点标题、描述、作者与 `baseUrl`。
2. 在 `src/content/posts/` 添加或替换文章。
3. 按需调整 `src/styles/aonote.css`。
4. 运行 `npm run build` 并在 `dist/` 预览。
