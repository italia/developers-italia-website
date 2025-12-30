import type { MenuItemsProps } from "@components/organisms/Header/types";
import { linkResolver } from "@data/linkMap";
import type { MenuItemFragmentType } from "@graphql/commonFragments";
import type { SiteLocale } from "@graphql/types";

export function createMenu(
  datoItems: MenuItemFragmentType[],
  currentPathname: string,
  currentLocale: SiteLocale,
): MenuItemsProps[] {
  if (!datoItems || datoItems.length === 0) {
    return [];
  }

  const normalizedCurrentPath = currentPathname.replace(/\/$/, "");

  return datoItems.map((item) => {
    const lang = currentLocale;
    const pageId = item.pointsTo.id;
    let finalHref = linkResolver(pageId, lang);

    const normalizedMenuHref = finalHref.replace(/\/$/, "");
    const isActive = normalizedCurrentPath.startsWith(normalizedMenuHref);

    return {
      id: item.id,
      title: item.title,
      url: finalHref,
      active: isActive,
    };
  });
}
