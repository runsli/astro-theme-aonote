/** Site configuration — edit this file to customize your blog. */
export const site = {
  /** Production URL (no trailing slash). */
  baseUrl: 'https://astro-theme-aonote.vercel.app',
  /** GitHub Pages subpath, e.g. "/repo-name". Leave empty for root deploy. */
  repoSubpath: '',
  title: 'Aonote 青笺',
  description:
    '一处记录数据科学、极简主义与纯粹 Web 技术的静态笔记。',
  author: 'Aonote',
  /** UI language: "zh-CN" | "en" */
  language: 'zh-CN' as 'zh-CN' | 'en',
  maxPostsOnIndex: 5,
  copyright: {
    enable: true,
    type: 'CC_BY_NC_SA_4_0' as const,
    customText: '',
    showLicenseIcon: true,
    showStandardFormat: true,
    additionalNote: '',
  },
} as const;

export type SiteConfig = typeof site;
