import type {
  SidebarItemFirstLevelProps,
  SidebarItemSecondLevelProps,
} from "@components/organisms/Sidebar/types";
import type {
  MenuArticleItemFragmentType,
  SidebarMenuFragmentType,
} from "@graphql/fragment/commonFragments";
import type { SiteLocale } from "@graphql/types";
import { linkResolver } from "@utils/linkResolver";

export function createMenuSidebar(
  datoItems: SidebarMenuFragmentType[],
  currentPathname: string,
  locale: SiteLocale,
): SidebarItemFirstLevelProps[] {
  if (!datoItems || datoItems.length === 0) {
    return [];
  }

  return datoItems.map((firstLevel) => {
    const items = firstLevel.menu.map((secondLevel) => {
      const pageId = secondLevel.pointsTo.id;
      const linkTo = linkResolver(pageId, locale);

      const isActive = currentPathname.endsWith(linkTo);

      return {
        id: secondLevel.id,
        label: secondLevel.label,
        linkTo: linkTo,
        active: isActive,
      };
    });

    const hasActiveChild = items.some((item) => item.active);

    return {
      idAccordion: firstLevel.id,
      label: firstLevel.label,
      isOpen: hasActiveChild,
      items: items,
    };
  });
}

export function createFlatMenuSidebar(
  datoItems: MenuArticleItemFragmentType[],
  currentPathname: string,
  locale: SiteLocale,
): SidebarItemSecondLevelProps[] {
  if (!datoItems || datoItems.length === 0) {
    return [];
  }

  return datoItems.map((secondLevel) => {
    const pageId = secondLevel.pointsTo.id;
    const linkTo = linkResolver(pageId, locale);

    const isActive = currentPathname.endsWith(linkTo);

    return {
      id: secondLevel.id,
      label: secondLevel.label,
      linkTo: linkTo,
      active: isActive,
    };
  });
}
