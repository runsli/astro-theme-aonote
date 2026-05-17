# astro-theme-aonote

[English](README.md) | 中文

[![在线演示](https://img.shields.io/badge/演示-在线-0ea5e9)](https://astro-theme-aonote.vercel.app)
[![Astro](https://img.shields.io/badge/Astro-5-BC52EE?logo=astro&logoColor=white)](https://astro.build)

**[runsli/Aonote](https://github.com/runsli/Aonote) 的 Astro 移植版** — 保留原版阅读体验与内容结构，基于 [Astro](https://astro.build) 5。

| | |
| --- | --- |
| **在线演示** | https://astro-theme-aonote.vercel.app |
| **上游项目** | https://github.com/runsli/Aonote |

## 截图

| 首页 | 文章页（目录、MathML、代码块） |
| --- | --- |
| ![首页](docs/screenshots/home.png) | ![文章](docs/screenshots/post.png) |

## 特性

- GFM：表格、任务列表、脚注、定义列表、提示块
- 数学公式输出为 **MathML**（temml），无需 KaTeX 全局样式
- Shiki 代码块，支持标题、行高亮、diff 等 Aonote 风格元数据
- 归档、标签、RSS / Atom、站点地图
- 浅色 / 深色主题，中英文界面文案
- 支持子路径部署时的站内链接

## 快速开始

### 作为 Astro 模板（推荐）

```bash
npm create astro@latest my-blog -- --template runsli/astro-theme-aonote
cd my-blog
npm install
npm run dev
```

### 克隆本仓库

```bash
git clone https://github.com/runsli/astro-theme-aonote.git
cd astro-theme-aonote
npm install
npm run dev
```

浏览器打开 http://localhost:4321，然后修改：

1. `src/site.config.ts` — 站点标题、`baseUrl`、语言、版权
2. `src/content/posts/` — Markdown 文章
3. `src/content/pages/about.md` — 关于页

**Node：** ≥ 18.20.8（Astro 5），建议使用 Node 22 LTS。

## 部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frunsli%2Fastro-theme-aonote)

部署完成后，将 `src/site.config.ts` 中的 `baseUrl` 改为线上地址。启用 **GitHub 模板仓库** 等步骤见 [docs/GITHUB_TEMPLATE.md](docs/GITHUB_TEMPLATE.md)。

## 自定义

| 内容 | 文件 |
| --- | --- |
| 站点标题、URL、语言 | `src/site.config.ts` |
| 界面文案 | `src/i18n.ts` |
| 全局布局 / 导航 | `src/layouts/BaseLayout.astro` |
| 主题样式 | `src/styles/aonote.css` |
| Markdown 管线 | `src/integrations/aonote-markdown.ts` |
| 订阅条目数量 | `src/utils/feed.ts` |

## 与上游 Aonote 的对应关系

| 原版 (Python) | 本仓库 (Astro) |
| --- | --- |
| `config.py` | `src/site.config.ts` |
| `markdown/` | `src/content/posts/` |
| `templates/base.html` | `src/layouts/BaseLayout.astro` |
| `assets/style.css` | `src/styles/aonote.css` |
| `i18n.py` | `src/i18n.ts` |
| `_site/` | `dist/` |

## 发布清单

1. 清理示例内容、完善 README
2. 部署演示站 → 在 GitHub 勾选 **Template repository**（[说明](docs/GITHUB_TEMPLATE.md)）
3. 用 `npm create astro@latest -- --template runsli/astro-theme-aonote` 走一遍新用户路径
4. 在 Discussions / 社区发帖（[文案](docs/SHOWCASE.md)）
5. 可选：提交 [Astro 主题列表](https://astro.build/themes/) 或发布 npm 包

## 许可

MIT — 见 [LICENSE](LICENSE)。原版 Aonote 设计与样式 © [runsli](https://github.com/runsli)。
