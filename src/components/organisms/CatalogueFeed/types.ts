export type PageNewsTab = {
  title: string;
  paragraph: string;
  filterTitle: string;
  labelForAll: string;
  filterStory?: string;
  newsPageTabType: string;
  perPage?: number;
};

export type UpdateTabSectionProps = {
  id: string;
  tabs: PageNewsTab[];
};

export type ElementType =
  | "news_item"
  | "story_item"
  | "webinar_item"
  | "resource";
