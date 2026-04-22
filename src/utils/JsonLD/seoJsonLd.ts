import rawLinkMap from "@data/linkMap.json";
import type { SeoFieldFragmentType } from "@graphql/fragment/seoFragments";
import type { SiteLocale } from "@graphql/types";
import { DatoBlockModel } from "@utils/cmsMapper";
import {
  getBreadcrumbs,
  linkResolver,
  type SiteMap,
} from "@utils/linkResolver";
import { getCollection } from "astro:content";
const linkMap = rawLinkMap as SiteMap;

type BaseJsonLdData = {
  canonicalUrl: string;
  siteUrl: string | URL;
  inLanguage: string;
  name?: string;
  description?: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type JsonLdListItem = {
  "@type": string;
  position: number;
  name: string;
  url: string;
};

type JsonLdPageType = "collection" | "content" | "list";
type JsonLdArticleType = "TechArticle" | "Article" | "NewsArticle";

type JsonLdBreadcrumbData = {
  canonicalUrl: string;
  recordId?: string;
  locale: SiteLocale;
  siteUrl: string | URL;
};

type JsonLdCollectionData = BaseJsonLdData & {
  listItems: JsonLdListItem[];
};

type JsonLdContentData = BaseJsonLdData & {
  articleType?: JsonLdArticleType;
  articleSection?: string;
  publishedAt?: string;
  updatedAt?: string;
  imageUrl?: string;
};

type JsonLdFaqData = {
  canonicalUrl: string;
  faq: FaqItem[];
};

export type JsonLdPageData = {
  pageType: JsonLdPageType[];
  articleType?: JsonLdArticleType;
  seo?: SeoFieldFragmentType;
  publishedAt?: string;
  updatedAt?: string;
  faq?: FaqItem[];
  listItems?: JsonLdListItem[];
};

export function extractFaqItems(content: unknown): FaqItem[] {
  const stripHtml = (value?: string) =>
    (value || "")
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim();

  const items: FaqItem[] = [];
  const seen = new Set<unknown>();

  const processAccordion = (accordion: any) => {
    if (!accordion?.items) return;
    accordion.items.forEach((item: any) => {
      const question = item.header?.trim();
      const answer = stripHtml(item.body);
      if (question || answer) {
        items.push({ question: question || "", answer });
      }
    });
  };

  const traverse = (node: unknown) => {
    if (!node || seen.has(node)) return;
    seen.add(node);

    if (Array.isArray(node)) {
      node.forEach(traverse);
      return;
    }

    if (typeof node !== "object") {
      return;
    }

    const candidate = node as Record<string, any>;
    const componentName = candidate.componentName || candidate.__typename;

    if (componentName === DatoBlockModel.FaqSection) {
      processAccordion(candidate.accordion);
    }

    Object.values(candidate).forEach(traverse);
  };

  traverse(content);
  return items;
}

export function toSchemaLanguage(locale: string) {
  const map: Record<string, string> = {
    it: "it-IT",
    en: "en-GB",
  };

  if (map[locale]) return map[locale];
  return `${locale}-${locale.toUpperCase()}`;
}

const normalizeSiteUrl = (siteUrl: string | URL) => {
  const urlValue = typeof siteUrl === "string" ? siteUrl : siteUrl.toString();
  return urlValue.replace(/\/$/, "");
};

const toAbsoluteUrl = (path: string, siteUrl: string | URL) =>
  new URL(path, siteUrl).toString();

export function buildCommonJsonLd(siteUrl: string | URL, siteName: string) {
  const baseUrl = normalizeSiteUrl(siteUrl);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GovernmentOrganization",
        "@id": `${baseUrl}/#organization`,
        name: "Dipartimento per la trasformazione digitale",
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/path/logo.png`,
        },
        sameAs: [
          "https://github.com/italia",
          "https://www.linkedin.com/company/.../",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: siteName,
        inLanguage: "it-IT",
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
      },
    ],
  };
}

export function buildBreadcrumbJsonLd({
  canonicalUrl,
  recordId,
  locale,
  siteUrl,
}: JsonLdBreadcrumbData) {
  if (!recordId) return null;
  const steps = getBreadcrumbs(recordId, locale);
  if (!steps.length) return null;

  const list = steps
    .map((step, index) => {
      const path = linkResolver(step.id, locale);
      if (!path || path === "#") return null;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: step.title,
        item: toAbsoluteUrl(path, siteUrl),
      };
    })
    .filter(Boolean);

  if (!list.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement: list,
  };
}

export function getPageTitle(
  recordId: string | undefined,
  locale: SiteLocale,
  seo?: SeoFieldFragmentType,
) {
  if (seo?.title) {
    return seo.title;
  }

  const steps = getBreadcrumbs(recordId, locale);
  if (steps.length) {
    return steps[steps.length - 1].title;
  }

  return "Developers Italia";
}

export function getArticleSection(
  recordId: string | undefined,
  locale: SiteLocale,
) {
  const steps = getBreadcrumbs(recordId, locale);
  if (steps.length > 1) {
    return steps[steps.length - 2].title;
  }
  return undefined;
}

export function getChildListItems(
  parentId: string | undefined,
  locale: SiteLocale,
  siteUrl: string | URL,
): JsonLdListItem[] {
  if (!parentId) return [];

  const baseUrl = normalizeSiteUrl(siteUrl);
  const items = new Map<string, { name: string; url: string }>();

  Object.entries(linkMap).forEach(([, locales]) => {
    const route = locales[locale];
    if (!route || !route.breadcrumb) return;

    const parentIndex = route.breadcrumb.findIndex(
      (step) => step.id === parentId,
    );

    if (
      !parentIndex ||
      parentIndex === -1 ||
      parentIndex >= route.breadcrumb.length - 1
    ) {
      return;
    }

    const nextStep = route.breadcrumb[parentIndex + 1];
    if (!nextStep?.id || items.has(nextStep.id)) return;

    const childPath = linkResolver(nextStep.id, locale);
    if (!childPath || childPath === "#") return;

    items.set(nextStep.id, {
      name: nextStep.title,
      url: toAbsoluteUrl(childPath, baseUrl),
    });
  });

  return Array.from(items.values()).map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    url: item.url,
  }));
}

export function buildCollectionJsonLd({
  canonicalUrl,
  siteUrl,
  inLanguage,
  name,
  description,
  listItems,
}: JsonLdCollectionData) {
  if (!listItems.length) {
    return null;
  }

  const baseUrl = normalizeSiteUrl(siteUrl);

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name,
    description: description || undefined,
    inLanguage,
    isPartOf: {
      "@id": `${baseUrl}/#website`,
    },
    about: {
      "@id": `${baseUrl}/#organization`,
    },
    mainEntity: {
      "@type": "ItemList",
      "@id": `${canonicalUrl}#list`,
      name,
      itemListElement: listItems,
    },
  };
}

export function buildContentJsonLd({
  canonicalUrl,
  siteUrl,
  inLanguage,
  name,
  description,
  articleType = "TechArticle",
  articleSection,
  publishedAt,
  updatedAt,
  imageUrl,
}: JsonLdContentData) {
  const baseUrl = normalizeSiteUrl(siteUrl);
  const webpageId = `${canonicalUrl}#webpage`;
  const contentId = `${canonicalUrl}#content`;
  const breadcrumbRef = `${canonicalUrl}#breadcrumb`;

  const webPage = {
    "@type": "WebPage",
    "@id": webpageId,
    url: canonicalUrl,
    name,
    description: description || undefined,
    inLanguage,
    isPartOf: {
      "@id": `${baseUrl}/#website`,
    },
    about: {
      "@id": `${baseUrl}/#organization`,
    },
    breadcrumb: {
      "@id": breadcrumbRef,
    },
    mainEntity: {
      "@id": contentId,
    },
  };

  const content: Record<string, any> = {
    "@type": articleType,
    "@id": contentId,
    headline: name,
    description: description || undefined,
    inLanguage,
    mainEntityOfPage: {
      "@id": webpageId,
    },
    author: {
      "@id": `${baseUrl}/#organization`,
    },
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
  };

  if (articleSection) {
    content.articleSection = articleSection;
  }

  if (publishedAt) {
    content.datePublished = publishedAt;
  }

  if (updatedAt) {
    content.dateModified = updatedAt;
  }

  if (imageUrl) {
    content.image = {
      "@type": "ImageObject",
      url: imageUrl,
    };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [webPage, content],
  };
}

export function buildFaqJsonLd({ canonicalUrl, faq }: JsonLdFaqData) {
  if (!faq.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${canonicalUrl}#faq`,
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function extractListItems(
  content: unknown,
  siteUrl: string | URL,
  locale: SiteLocale,
): JsonLdListItem[] {
  const items: JsonLdListItem[] = [];
  const seen = new Set<unknown>();

  const processCatalogueTabs = (tabs: any) => {
    if (!tabs) return;
    tabs.forEach(async (item: any) => {
      const modelApiKey = item.newsPageTabType;
      const allItems: { data: { title: string; link?: string; id: string } }[] =
        await getCollection(modelApiKey);
      const collection = allItems
        .slice(0, 10)
        .filter((item: any) => item.data._locale === locale);

      collection.forEach((entry, index) => {
        const title = entry.data.title?.trim() || `Item ${index + 1}`;
        const path = entry.data.link || linkResolver(entry.data.id, locale);

        if (!path || path === "#") return null;

        items.push({
          "@type": "ListItem",
          position: items.length + 1,
          name: title,
          url: toAbsoluteUrl(path, siteUrl),
        });
      });
    });
  };

  const traverse = (node: unknown) => {
    if (!node || seen.has(node)) return;
    seen.add(node);

    if (Array.isArray(node)) {
      node.forEach(traverse);
      return;
    }

    if (typeof node !== "object") {
      return;
    }

    const candidate = node as Record<string, any>;
    const componentName = candidate.componentName || candidate.__typename;

    if (componentName === DatoBlockModel.CatalogueFeed) {
      processCatalogueTabs(candidate.tabs);
    }

    Object.values(candidate).forEach(traverse);
  };

  traverse(content);
  return items;
}

export function buildListJsonLd({
  canonicalUrl,
  siteUrl,
  inLanguage,
  name,
  description,
  listItems,
}: JsonLdCollectionData) {
  if (!listItems.length) {
    return null;
  }

  const baseUrl = normalizeSiteUrl(siteUrl);

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name,
    description: description || undefined,
    inLanguage,
    isPartOf: {
      "@id": `${baseUrl}/#website`,
    },
    about: {
      "@id": `${baseUrl}/#organization`,
    },
    breadcrumb: {
      "@id": `${canonicalUrl}#breadcrumb`,
    },
    mainEntity: {
      "@type": "ItemList",
      "@id": `${canonicalUrl}#list`,
      name,
      itemListElement: listItems,
    },
  };
}
