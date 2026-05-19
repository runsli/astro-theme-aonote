import type { AstroIntegration } from 'astro';
import { site } from '../site.config';
import {
  remarkAonotePreprocess,
  remarkCodeMeta,
  remarkDeflist,
  remarkDirective,
  remarkDirectiveRehype,
  remarkEmoji,
  remarkGfm,
  remarkMath,
  remarkTableCaptions,
} from '../plugins/remark-aonote';
import { remarkStripDuplicateTitle } from '../plugins/remark-strip-duplicate-title';
import { rehypeAonoteAnchorlink } from '../plugins/rehype-aonote-anchorlink';
import { rehypeAonoteEnhance } from '../plugins/rehype-aonote';
import { rehypeAonoteFinalize } from '../plugins/rehype-aonote-finalize';
import { rehypeAonoteMathml } from '../plugins/rehype-aonote-mathml';
import { rehypeAonoteSlug } from '../plugins/rehype-aonote-slug';
import { transformerAonote } from '../plugins/shiki-aonote';

/** Central Aonote markdown pipeline (remark/rehype/shiki) for posts and pages. */
export function aonoteMarkdown(): AstroIntegration {
  const locale = site.language;

  return {
    name: 'aonote-markdown',
    hooks: {
      'astro:config:setup': ({ updateConfig }) => {
        updateConfig({
          markdown: {
            remarkPlugins: [
              remarkAonotePreprocess,
              remarkStripDuplicateTitle,
              remarkGfm,
              remarkTableCaptions,
              remarkMath,
              remarkDeflist,
              remarkDirective,
              remarkDirectiveRehype,
              remarkCodeMeta,
              remarkEmoji,
            ],
            rehypePlugins: [
              rehypeAonoteSlug,
              () => rehypeAonoteAnchorlink({ locale }),
              rehypeAonoteMathml,
              () => rehypeAonoteEnhance({ locale }),
              () => rehypeAonoteFinalize({ locale }),
            ],
            shikiConfig: {
              themes: {
                light: 'github-light',
                dark: 'github-dark-dimmed',
              },
              wrap: true,
              transformers: [transformerAonote()],
            },
          },
        });
      },
    },
  };
}
