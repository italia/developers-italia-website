type HeaderBase = {
  linkBackHome: string;
};

export type HeaderCentralProps = HeaderBase & {
  brandTitle: string;
  brandTagLine?: string;
  menuItems: HeaderNavbarProps;
  logo: string;
  search?: SearchConfig;
};

export type HeaderSlimProps = HeaderBase & {
  slimContent?: string;
  locales: string[];
};

export type HeaderProps = HeaderCentralProps & HeaderSlimProps;

export type SearchConfig = {
  isEnabled: boolean;
  label?: string;
  url: string;
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
