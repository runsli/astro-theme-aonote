---
title: 代码块与媒体示例
date: 2026-01-11
summary: 展示图片、提示块、普通代码块、带标题代码块、行高亮、diff 高亮、长代码行和嵌套代码围栏。
tags: [basic, markdown, code]
---

这个页面聚焦内容展示中的媒体和代码块：图片、提示块、语言标签、文件标题、行高亮、diff 加减高亮以及长代码行。

# 提示块

:::: tip 提示
这是 VuePress/VitePress 风格的 `tip` 提示块。
::::

!!! note "说明"
    这是 Python-Markdown 原生的 `note` 提示块。

!!! warning "注意"
    这里适合放置需要读者留意的信息。

!!! danger "危险"
    这里适合放置破坏性操作或重要风险提醒。

````md
:::: tip 提示
这是 VuePress/VitePress 风格的 `tip` 提示块。
::::

!!! note "说明"
    这是 Python-Markdown 原生的 `note` 提示块。

!!! warning "注意"
    这里适合放置需要读者留意的信息。

!!! danger "危险"
    这里适合放置破坏性操作或重要风险提醒。
````

## 图片

![本地 SVG 占位图，包含山形图案和 Markdown Image Example 文字](/static/example-image.svg)
*这是图片说明文字，用于测试 caption 样式。*

```md
![本地 SVG 占位图，包含山形图案和 Markdown Image Example 文字](/static/example-image.svg)
*这是图片说明文字，用于测试 caption 样式。*
```

## 代码

行内代码效果: `code`

```md
行内代码效果: `code`
```

### 普通代码块

```md
Sample text here...
```

### 带标题的代码块

```python title="hello.py"
def greet(name):
    return f"Hello, {name}!"
```

````md
```python title="hello.py"
def greet(name):
    return f"Hello, {name}!"
```
````

### 带行高亮的代码块

```python title="highlight.py" hl_lines="2 4-5"
def greet(name):
    message = f"Hello, {name}!"
    print(message)
    return message
```

````md
```python title="highlight.py" hl_lines="2 4-5"
def greet(name):
    message = f"Hello, {name}!"
    print(message)
    return message
```
````

### Diff 加减高亮

```diff title="example.patch"
 function greet(name) {
-  return "Hello, " + name;
+  return `Hello, ${name}!`;
 }
```

`````md
```diff title="example.patch"
 function greet(name) {
-  return "Hello, " + name;
+  return `Hello, ${name}!`;
 }
```
`````

### 缩进代码

```
// Some comments
line 1 of code
line 2 of code
line 3 of code
```

````md
    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code
````

### 嵌套代码围栏

````md
块级代码

```
Sample text here...
```
````

### 长代码行

```bash
curl "https://example.com/api/articles?category=markdown&tag=markdown&include=metadata,summary,content,links,license&sort=published_at_desc"
```

````md
```bash
curl "https://example.com/api/articles?category=markdown&tag=markdown&include=metadata,summary,content,links,license&sort=published_at_desc"
```
````
