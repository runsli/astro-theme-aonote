export const TRANSLATIONS = {
  'zh-CN': {
    htmlLang: 'zh-cn',
    navHome: '首页',
    navArchive: '归档',
    navTags: '标签',
    navAbout: '关于',
    navMenu: '菜单',
    skipToContent: '跳到主内容',
    mainNavigation: '主导航',
    toc: '目录',
    tagPostCount: (count: number) => `共 ${count} 篇文章`,
    allTags: '所有标签',
    noPosts: '暂无文章。',
    noArchive: '暂无归档。',
    noTags: '暂无标签。',
    tagsListHeading: '标签列表',
    readAllArchive: '查看全部归档',
    rssSubscribe: 'RSS 订阅',
    backToTop: '返回顶部',
    prevPost: '上一篇 (较新)',
    nextPost: '下一篇 (较旧)',
    copyrightAdditionalNote:
      '本文内容受相应许可证保护，商业用途请查阅具体许可证条款。转载或引用时请保留原作者署名及原文链接。',
    copyrightFormatTemplate: (title: string, author: string, url: string) =>
      `本文标题：${title}\n作者：${author}\n原文链接：${url}`,
    copyrightLicenseNotices: {
      CC_BY_NC_SA_4_0: '本文依据 CC BY-NC-SA 4.0 许可协议发布。',
    } as Record<string, string>,
  },
  en: {
    htmlLang: 'en',
    navHome: 'Home',
    navArchive: 'Archive',
    navTags: 'Tags',
    navAbout: 'About',
    navMenu: 'Menu',
    skipToContent: 'Skip to main content',
    mainNavigation: 'Main navigation',
    toc: 'Contents',
    tagPostCount: (count: number) => `${count} posts`,
    allTags: 'All tags',
    noPosts: 'No posts yet.',
    noArchive: 'No archive yet.',
    noTags: 'No tags yet.',
    tagsListHeading: 'Tags',
    readAllArchive: 'View full archive',
    rssSubscribe: 'RSS Feed',
    backToTop: 'Back to top',
    prevPost: 'Previous post',
    nextPost: 'Next post',
    copyrightAdditionalNote:
      'This content is protected by the selected license. When reusing or quoting, keep the author attribution and original link.',
    copyrightFormatTemplate: (title: string, author: string, url: string) =>
      `Title: ${title}\nAuthor: ${author}\nOriginal link: ${url}`,
    copyrightLicenseNotices: {
      CC_BY_NC_SA_4_0: 'This article is licensed under CC BY-NC-SA 4.0.',
    } as Record<string, string>,
  },
} as const;

export type Locale = keyof typeof TRANSLATIONS;

export function t(locale: Locale) {
  return TRANSLATIONS[locale] ?? TRANSLATIONS['zh-CN'];
}
