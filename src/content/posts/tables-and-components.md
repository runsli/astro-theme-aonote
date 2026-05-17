---
title: 表格与原生组件示例
date: 2026-01-12
summary: 展示无标题简单表格、带标题表格、宽表格、可键盘滚动表格区域和原生 details 折叠组件。
tags: [basic, markdown]
---

这个页面聚焦表格和 HTML 原生组件。简单表格可以省略标题；复杂或宽表格建议使用 `表格：说明文字` 生成 caption。

# 表格

## 无标题简单表格

| 项目 | 状态 |
| :--- | :--- |
| 简单表格 | 可省略标题 |

```md
| 项目 | 状态 |
| :--- | :--- |
| 简单表格 | 可省略标题 |
```

## 带标题表格

表格：Markdown 表格对齐方式示例

|     居中      |         右对齐 | 左对齐         |
| :-----------: | -------------: | :------------- |
| 居中使用`:-:` | 右对齐使用`-:` | 左对齐使用`:-` |
|       b       |      aaaaaaaaa | aaaa           |
|       c       |           aaaa | a              |

```md
表格：Markdown 表格对齐方式示例

|     居中      |         右对齐 | 左对齐         |
| :-----------: | -------------: | :------------- |
| 居中使用`:-:` | 右对齐使用`-:` | 左对齐使用`:-` |
|       b       |      aaaaaaaaa | aaaa           |
|       c       |           aaaa | a              |
```

## 宽表格

表格：文章列表横向滚动示例

| 日期 | 标题 | 分类 | 标签 | 状态 | 链接 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 2026-05-17 | Markdown 示例页扩展 | 文档 | markdown, style | 已发布 | https://example.com/posts/markdown-style-example |
| 2026-05-18 | 纯 CSS 组件测试 | UI | css, html, static | 草稿 | https://example.com/posts/css-only-components |

```md
表格：文章列表横向滚动示例

| 日期 | 标题 | 分类 | 标签 | 状态 | 链接 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 2026-05-17 | Markdown 示例页扩展 | 文档 | markdown, style | 已发布 | https://example.com/posts/markdown-style-example |
| 2026-05-18 | 纯 CSS 组件测试 | UI | css, html, static | 草稿 | https://example.com/posts/css-only-components |
```

## 原生折叠块

<details>
<summary>展开查看更多</summary>

这里是使用原生 HTML 的折叠内容。

</details>

```html
<details>
<summary>展开查看更多</summary>

这里是使用原生 HTML 的折叠内容。

</details>
```
