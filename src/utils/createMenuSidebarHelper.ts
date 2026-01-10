import type { SidebarItemFirstLevelProps } from "@components/organisms/Sidebar/types";
import { linkResolver } from "@utils/linkResolver";
import type { SidebarMenuFragmentType } from "@graphql/commonFragments";
import type { SiteLocale } from "@graphql/types";

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
