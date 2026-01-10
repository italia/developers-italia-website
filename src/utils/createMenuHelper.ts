import type {
  HeaderNavbarProps,
  MenuItemProps,
} from "@components/organisms/Header/types";
import { linkResolver } from "@utils/linkResolver";
import type { MenuItemFragmentType } from "@graphql/commonFragments";
import type { SiteLocale } from "@graphql/types";

function menuItemAdapter(
  item: MenuItemFragmentType,
  currentPath: string,
  locale: SiteLocale,
): MenuItemProps {
  const pageId = item.pointsTo.id;
  const finalHref = linkResolver(pageId, locale);

  const normalizedCurrent = currentPath.replace(/\/$/, "") || "/";
  const normalizedMenu = finalHref.replace(/\/$/, "") || "/";

  const isActive =
    normalizedMenu === "/"
      ? normalizedCurrent === "/"
      : normalizedCurrent.startsWith(normalizedMenu);

  return {
    id: item.id,
    title: item.title,
    url: finalHref,
    active: isActive,
  };
}

export function createMenu(
  mainItems: MenuItemFragmentType[] = [],
  secondaryItems: MenuItemFragmentType[] = [],
  currentPathname: string,
  currentLocale: SiteLocale,
): HeaderNavbarProps {
  return {
    left: mainItems.map((item) =>
      menuItemAdapter(item, currentPathname, currentLocale),
    ),
    right: secondaryItems.map((item) =>
      menuItemAdapter(item, currentPathname, currentLocale),
    ),
  };
}
