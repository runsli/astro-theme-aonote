import type { SiteConfig } from '../site.config';

const LICENSE_ICONS: Record<string, string> = {
  CC_BY_NC_SA_4_0: 'CC-BY-NC-SA',
  MIT: 'MIT',
};

const LICENSE_NOTICES: Record<string, Record<string, string>> = {
  'zh-CN': {
    CC_BY_NC_SA_4_0: '本文依据 CC BY-NC-SA 4.0 许可协议发布。',
    MIT: '本文采用 MIT 许可证发布。',
  },
  en: {
    CC_BY_NC_SA_4_0: 'This article is licensed under CC BY-NC-SA 4.0.',
    MIT: 'This article is released under the MIT License.',
  },
};

export function getCopyrightNotice(
  licenseType: string,
  locale: 'zh-CN' | 'en',
): string {
  return LICENSE_NOTICES[locale]?.[licenseType] ?? '';
}

export function getLicenseIcon(licenseType: string): string | null {
  return LICENSE_ICONS[licenseType] ?? null;
}

export function formatCopyrightBlock(
  title: string,
  author: string,
  url: string,
  locale: 'zh-CN' | 'en',
): string {
  if (locale === 'zh-CN') {
    return `本文标题：${title}\n作者：${author}\n原文链接：${url}`;
  }
  return `Title: ${title}\nAuthor: ${author}\nOriginal link: ${url}`;
}

export function shouldShowCopyright(config: SiteConfig['copyright']): boolean {
  return config.enable;
}
