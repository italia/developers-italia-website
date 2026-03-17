export type SidebarProps = {
  id: string;
  header?: string;
  openLabel: string;
  closeLabel: string;
  accordionItems?: SidebarItemFirstLevelProps[];
  flatItems?: SidebarItemSecondLevelProps[];
};

export type SidebarItemFirstLevelProps = {
  idAccordion: string;
  label: string;
  items: SidebarItemSecondLevelProps[];
  isOpen: boolean;
};

export type SidebarItemSecondLevelProps = {
  id: string;
  label: string;
  linkTo: string;
  active: boolean;
};
