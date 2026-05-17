---
title: 欢迎来到 Aonote 青笺
date: 2025-12-01
summary: 介绍 astro-theme-aonote 作为 Aonote 分支项目的定位、核心能力与开始使用方式。
tags: [intro]
---

**astro-theme-aonote** 是 [runsli/Aonote](https://github.com/runsli/Aonote) 的 Astro 分支：把原版 Python 静态博客的视觉、布局与 Markdown 能力移植到 [Astro](https://astro.build)，适合部署到 Vercel、Netlify、GitHub Pages 或任意静态托管平台。

这个分支的目标不是做成功能繁复的 Web 应用，而是提供一个干净、稳定、可长期维护的写作起点：内容放在 Markdown 里，样式集中在 CSS 里，构建结果就是可以直接发布的静态文件。

## 适合什么场景

- 个人博客：记录学习、项目、阅读和长期思考。
- 技术笔记：整理代码片段、问题复盘、工具配置和实践经验。
- 项目文档：发布轻量说明、版本记录、使用指南和设计决策。
- 已有 Astro 站点：希望复用 Aonote 的版式与 Markdown 扩展，而不必维护 Python 构建脚本。

如果你已经在用 Astro，或希望与 Astro 插件、部署流程集成，这个分支会比上游 Python 版更顺手。

## 分支已包含的能力

- 首页、文章页、归档页、标签页、关于页和 404 页面。
- Markdown：GFM、代码高亮、表格、脚注、任务列表、提示块与数学公式（MathML）。
- RSS、Atom、Sitemap、canonical、Open Graph 与 Twitter Card。
- 浅色/暗色模式、移动端导航与目录（TOC）。

## 如何开始使用

1. 修改 `src/site.config.ts` 中的站点名称、描述、作者和 `baseUrl`。
2. 在 `src/content/posts/` 中新增或替换文章，文件名建议使用小写 kebab-case。
3. 按需调整 `src/styles/aonote.css` 中的颜色、字体和间距。
4. 运行 `npm run dev` 本地预览，或 `npm run build` 生成 `dist/`。
5. 将 `dist/` 部署到静态托管平台。

若要改成自己的站点，建议先替换这篇欢迎文章和 `about.md`，再逐步调整样式与示例内容。

## 与上游的关系

| 上游 (Python) | 本分支 (Astro) |
| --- | --- |
| `config.py` | `src/site.config.ts` |
| `markdown/` | `src/content/posts/` |
| `templates/base.html` | `src/layouts/BaseLayout.astro` |
| `assets/style.css` | `src/styles/aonote.css` |
| `python autobuild.py` | `npm run build` |

功能与样式会尽量跟随上游 Aonote 演进；差异主要来自 Astro 的构建与内容管线。欢迎在 Issues 中反馈移植遗漏或改进建议。
