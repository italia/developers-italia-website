import rawLinkMap from "@data/linkMap.json";
import type { SiteLocale } from "@graphql/types";

export type BreadcrumbStep = {
  title: string;
  id: string;
};

export type PageRouteInfo = {
  path: string;
  breadcrumb?: BreadcrumbStep[];
};

export type SiteMap = Record<
  string,
  Partial<Record<SiteLocale, PageRouteInfo>>
>;

const linkMap = rawLinkMap as SiteMap;

export function linkResolver(id: string | undefined, locale: string): string {
  if (!id || !(id in linkMap)) {
    return "#";
  }

  return linkMap[id][locale as SiteLocale]?.path || "#";
}

export function getBreadcrumbs(id: string | undefined, locale: string) {
  if (!id || !(id in linkMap)) {
    return [];
  }
  return linkMap[id][locale as SiteLocale]?.breadcrumb || [];
}
