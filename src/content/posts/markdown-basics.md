---
title: Markdown typography basics
date: 2026-01-10
summary: Headings, paragraphs, links, math, lists, quotes, footnotes, and mixed-language text.
tags: [basic, markdown]
---

This page demonstrates core Markdown typography: headings, paragraphs, inline text, links, math, lists, block quotes, footnotes, and mixed scripts.

# Headings

<!-- markdownlint-disable -->

# Level 1 heading

<!-- markdownlint-restore -->

## Level 2 heading

### Level 3 heading

#### Level 4 heading

##### Level 5 heading

###### Level 6 heading

```md
# Level 1 heading
## Level 2 heading
### Level 3 heading
#### Level 4 heading
##### Level 5 heading
###### Level 6 heading
```

## Paragraphs and line breaks

This is a paragraph.

This is another paragraph.

This sentence ends here  
with a manual line break.

:::: tip
In the source above, there are two spaces after `here`.
::::

```md
This is a paragraph.

This is another paragraph.

This sentence ends here  
with a manual line break.
```

## Inline text

This sentence has **bold**, *italic*, ~~strikethrough~~, `inline code`, <mark>highlighted</mark> text, and the shortcut <kbd>⌘</kbd> + <kbd>K</kbd>.

Classic emoji: :wink: :cry: :laughing: :yum:

Shorthand emoji: 8-) :) :\* :( :-) :-( ;)

```md
This sentence has **bold**, *italic*, ~~strikethrough~~, `inline code`, <mark>highlighted</mark> text, and the shortcut <kbd>⌘</kbd> + <kbd>K</kbd>.

Classic emoji: :wink: :cry: :laughing: :yum:

Shorthand emoji: 8-) :) :\* :( :-) :-( ;)
```

## Links

[Home from site root](/)

[In-site post example](/posts/welcome-to-aonote/)

[About from site root](/about)

[Archive](/archive/)

```md
[Home from site root](/)
[In-site post example](/posts/welcome-to-aonote/)
[About from site root](/about)
[Archive](/archive/)
```

## Horizontal rule

---

```md
---
```

## Math

Inline math: $E = mc^2$.

Display math:

$$
\int_0^1 x^2 dx = \frac{1}{3}
$$

````md
Inline math: $E = mc^2$.

Display math:

$$
\int_0^1 x^2 dx = \frac{1}{3}
$$
````

## Lists

### Unordered

- Item one
- Item two
  - Nested item
    - Deeper item
    - Deeper item
    - Deeper item
  - A longer item with multiple paragraphs.

    Second paragraph in the same list item.

    The last paragraph includes a [link](#links).
- Item three

```md
- Item one
- Item two
  - Nested item
    - Deeper item
  - A longer item with multiple paragraphs.

    Second paragraph in the same list item.

    The last paragraph includes a [link](#links).
```

### Ordered

1. First item
1. Second item  
   Line break inside the item  
   Another line
1. Third item

:::: tip
There are two spaces after `item` in the source for the soft break.
::::

```md
1. First item
1. Second item  
   Line break inside the item  
   Another line
1. Third item
```

### Task list

- [x] Completed task
- [ ] Open task
- [ ] Checkboxes are not interactive in static HTML

```md
- [x] Completed task
- [ ] Open task
- [ ] Checkboxes are not interactive in static HTML
```

### Definition list

Static site
: Built from HTML, CSS, and assets only—no client-side app runtime required for reading.

RSS
: A feed format readers can subscribe to for site updates.

```md
Static site
: Built from HTML, CSS, and assets only—no client-side app runtime required for reading.

RSS
: A feed format readers can subscribe to for site updates.
```

## Block quotes

> Quotes can stack.
>
> > Extra `>` characters nest deeper quotes.

```md
> Quotes can stack.
>
> > Extra `>` characters nest deeper quotes.
```

### Quote with citation

> Clarity does not mean less structure—each structure should earn its place.
>
> <cite>Aonote reading-style test</cite>

```md
> Clarity does not mean less structure—each structure should earn its place.
>
> <cite>Aonote reading-style test</cite>
```

## Footnotes

Here is a footnote reference.[^markdown-footnote]

[^markdown-footnote]: Footnote body text for asides, sources, or further reading.

```md
Here is a footnote reference.[^markdown-footnote]

[^markdown-footnote]: Footnote body text for asides, sources, or further reading.
```

## Mixed scripts

This paragraph mixes 中文, English, digits 123, the URL https://example.com/path/to/resource, and inline code `inline_code()` to exercise line height, wrapping, and punctuation spacing.

```md
This paragraph mixes 中文, English, digits 123, the URL https://example.com/path/to/resource, and inline code `inline_code()` to exercise line height, wrapping, and punctuation spacing.
```
