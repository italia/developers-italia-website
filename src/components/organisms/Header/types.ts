export type HeaderProps = {
  slimContent: string;
  brandTitle: string;
  brandTagLine: string;
  locales: string[];
  menuItems: HeaderNavbarProps;
  linkBackHome: string;
};

export type MenuItemProps = {
  id: string;
  url: string;
  active: boolean;
  title: string;
};

export type HeaderNavbarProps = {
  left: MenuItemProps[];
  right?: MenuItemProps[];
};

export type HeaderCentralProps = {
  brandTitle: string;
  brandTagLine: string;
  menuItems: HeaderNavbarProps;
  linkBackHome: string;
};
