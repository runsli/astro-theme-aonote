import type { Element, Root } from 'hast';
import { toString } from 'mdast-util-to-string';
import { visit } from 'unist-util-visit';
import { t, type Locale } from '../i18n';

function hasHeaderlink(node: Element): boolean {
  return node.children.some(
    (child) =>
      child.type === 'element' &&
      child.tagName === 'a' &&
      (Array.isArray(child.properties?.className)
        ? child.properties.className.includes('headerlink')
        : String(child.properties?.className ?? '').includes('headerlink')),
  );
}

/** Match upstream pymdownx `toc.anchorlink`: clickable # links on headings. */
export function rehypeAonoteAnchorlink(options: { locale?: Locale } = {}) {
  const locale = options.locale ?? 'zh-CN';
  const i18n = t(locale);

  return (tree: Root) => {
    visit(tree, 'element', (node: Element) => {
      if (!/^h[2-4]$/.test(node.tagName)) return;
      const id = node.properties?.id;
      if (!id || hasHeaderlink(node)) return;

      const idStr = String(id);
      const label = toString(node).trim() || idStr;

      const link: Element = {
        type: 'element',
        tagName: 'a',
        properties: {
          className: ['headerlink'],
          href: `#${idStr}`,
          ariaLabel: i18n.headingAnchorLabel(label),
        },
        children: [{ type: 'text', value: '#' }],
      };

      node.children.unshift(link);
    });
  };
}
