import { visit } from 'unist-util-visit';
import type { Root } from 'mdast';
import { expandHlLinesTokens } from '../utils/hl-lines';

/** Split `python title="x" hl_lines="2"` fence info into lang + meta for Shiki. */
export function remarkCodeMeta() {
  return (tree: Root) => {
    visit(tree, 'code', (node) => {
      const parts = [node.lang, node.meta].filter(Boolean).join(' ').trim();
      if (!parts) return;

      const match = /^([A-Za-z0-9_+#.-]+)(?:\s+(.*))?$/.exec(parts);
      if (!match) return;

      node.lang = match[1]!.replace(/^\./, '');
      const rest = match[2]?.trim();
      if (rest) {
        node.meta = rest;
        if (!node.data) node.data = {};
        const hlMatch = /hl_lines="([^"]*)"/.exec(rest);
        if (hlMatch) {
          const hlLines = expandHlLinesTokens(hlMatch[1]!);
          const existing = (node.data.hProperties ?? {}) as Record<string, unknown>;
          node.data.hProperties = {
            ...existing,
            'data-hl-lines': hlLines.join(' '),
          };
        }
      }
    });
  };
}
