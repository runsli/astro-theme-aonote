# astro-theme-aonote

[English](README.md) | 中文

将 [Runsli/Aonote](https://github.com/Runsli/Aonote) Python 静态博客生成器移植为 **Astro 主题**，保留 no-JS 理念与原版样式。

## 快速开始

```bash
git clone https://github.com/Runsli/astro-theme-aonote.git
cd astro-theme-aonote
npm install
npm run dev
```

修改 `src/site.config.ts`，在 `src/content/posts/` 下撰写文章。

## 与原版 Aonote 的对应关系

| 原版 (Python)     | Astro 主题              |
| ----------------- | ----------------------- |
| `config.py`       | `src/site.config.ts`    |
| `markdown/`       | `src/content/posts/`    |
| `templates/base.html` | `src/layouts/BaseLayout.astro` |
| `assets/style.css`| `src/styles/aonote.css` |
| `i18n.py`         | `src/i18n.ts`           |
| `_site/`          | `dist/`                 |

## 部署

详见英文 [README](README.md#deploy)。

## 许可

MIT
