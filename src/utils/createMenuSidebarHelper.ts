import type { SidebarItemFirstLevelProps } from "@components/organisms/Sidebar/types";
import type { SidebarMenuFragmentType } from "@graphql/commonFragments";

export function createMenuSidebar(
  datoItems: SidebarMenuFragmentType[],
  currentPathname: string,
): SidebarItemFirstLevelProps[] {
  if (!datoItems || datoItems.length === 0) {
    return [];
  }

  return datoItems.map((firstLevel) => {
    const items = firstLevel.menu.map((secondLevel) => {
      const slug = secondLevel.pointsTo.slug;
      const linkTo = `/${slug}`;

      const isActive = currentPathname.endsWith(slug);

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
