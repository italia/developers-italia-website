import type { ArticleContentFragmentType } from "@graphql/fragment/article";
import type {
  CalloutFragmentType,
  ExternalLinkFragmentType,
  ImageBlockFragmentType,
  ListBlockquoteFragmentType,
  ListCardEditorialWithIconFragmentType,
  ListCardInfoFragmentType,
  OrderedListFragmentType,
  TopicsBlockFragmentType,
} from "@graphql/fragment/commonFragments";
import type { InsightContentFragmentType } from "@graphql/fragment/insight";
import type { PageContentFragmentType } from "@graphql/fragment/page";
import type {
  ActionCardFragmentType,
  DataSectionRecordFragmentType,
  FaqSectionRecordFragmentType,
  HeroFragmentType,
  IntroArticleFragmentType,
  SpeakerFragmentType,
  StructuredTextFragmentType,
  SupportChannelsSectionFragmentType,
  SupportCTASectionFragmentType,
  TextAndAccordionFragmentType,
  TextAndImageFragmentType,
  WebinarDescriptionFragmentType,
} from "@graphql/fragment/sectionFragments";
import type { StoryContentFragmentType } from "@graphql/fragment/story";
import type { WebinarContentFragmentType } from "@graphql/fragment/webinar";
import { DatoBlockModel } from "@utils/cmsMapper";

import { render } from "datocms-structured-text-to-plain-text";

type BlockType =
  | InsightContentFragmentType
  | StoryContentFragmentType
  | WebinarContentFragmentType
  | PageContentFragmentType;

type AllStructuredTextBlocks =
  | ArticleContentFragmentType["blocks"][number]
  | StructuredTextFragmentType["blocks"][number];

export const flattenBlocks = (blocks: BlockType[] | undefined | null) => {
  if (!blocks) return "";
  const stOptions = getSearchRenderOptions();
  return blocks
    .map((block) => {
      switch (block.componentName) {
        case DatoBlockModel.Hero:
          return flattenHeroSection(block);
        case DatoBlockModel.FaqSection:
          return flattenFaqSection(block);
        case DatoBlockModel.IntroArticle:
          return flattenIntroArticle(block);
        case DatoBlockModel.ActionCard:
          return flattenActionCard(block);
        case DatoBlockModel.Speaker:
          return flattenSpeaker(block);
        case DatoBlockModel.WebinarDescription:
          return flattenWebinarDescription(block);
        case DatoBlockModel.SupportCta:
          return flattenSupportCtaSection(block);
        case DatoBlockModel.StructuredText:
          return render(block.textContent, stOptions);
        case DatoBlockModel.DataSection:
          return flattenDataSection(block);
        case DatoBlockModel.SupportChannels:
          return flattenSupportChannelsSection(block);
        case DatoBlockModel.TextAccordion:
          return flattenTextAccordionSection(block);
        case DatoBlockModel.TextImage:
          return flattenTextImageSection(block);
        default:
          return "";
      }
    })
    .join(" ");
};

export const getSearchRenderOptions = () => ({
  renderBlock({ record }: { record: AllStructuredTextBlocks }) {
    switch (record.__typename) {
      case DatoBlockModel.ImageBlock:
        return flattenImageBlock(record);
      case DatoBlockModel.Callout:
        return flattenCallout(record);
      case DatoBlockModel.ListCardEditorial:
        return flattenListCardEditorialWithIcon(record);
      case DatoBlockModel.ListCardInfo:
        return flattenListCardInfo(record);
      case DatoBlockModel.OrderedList:
        return flattenOrderedList(record);
      case DatoBlockModel.TopicsBlock:
        return flattenTopicsBlock(record);
      case DatoBlockModel.ExternalLink:
        return flattenExternalLink(record);
      case DatoBlockModel.SupportCta:
        return flattenSupportCtaSection(record);
      case DatoBlockModel.ListBlockquote:
        return flattenListBlockquote(record);
      default:
        return "";
    }
  },
});

const cleanJoin = (parts: (string | null | undefined)[]): string => {
  return parts
    .map((p) => p?.replace(/<[^>]*>/g, ""))
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
};
const flattenTextImageSection = (record: TextAndImageFragmentType): string => {
  const parts: string[] = [];

  if (record.text) {
    parts.push(record.text.title);
    parts.push(record.text.paragraph);
  }

  if (record.image) {
    if (record.image.title) parts.push(record.image.title);
    if (record.image.alt) parts.push(record.image.alt);
  }

  if (record.additionalContent) {
    record.additionalContent.content.forEach((item) => {
      parts.push(item.title, item.description);
    });
  }

  return cleanJoin(parts);
};

const flattenTextAccordionSection = (
  record: TextAndAccordionFragmentType,
): string => {
  const parts: string[] = [];

  if (record.text) {
    parts.push(record.text.title, record.text.paragraph);
  }

  if (record.accordion.title) parts.push(record.accordion.title);

  record.accordion.accordion.items.forEach((item) => {
    parts.push(item.header, item.body);
  });

  return cleanJoin(parts);
};

const flattenSupportChannelsSection = (
  record: SupportChannelsSectionFragmentType,
): string => {
  const parts: string[] = [];

  parts.push(record.title, record.paragraph);
  record.channels.forEach((channel) => {
    parts.push(channel.title, channel.description);
  });

  return cleanJoin(parts);
};

const flattenDataSection = (record: DataSectionRecordFragmentType): string => {
  const parts: string[] = [];

  if (record.highlights) {
    const h = record.highlights;
    parts.push(h.title);
    parts.push(h.paragraph);
    h.kpiElement?.forEach((kpi) => {
      parts.push(kpi.title);
      kpi.valuePrefix && parts.push(kpi.valuePrefix);
      kpi.value && parts.push(kpi.value);
    });
  }

  if (record.panel) {
    const p = record.panel;
    parts.push(p.title, p.paragraph, p.externalLink.label);
  }

  if (record.result) {
    const r = record.result;
    if (r.title) parts.push(r.title);
    if (r.paragraph) parts.push(r.paragraph);
    if (r.titleListUseCases) parts.push(r.titleListUseCases);
    r.items?.forEach((item) => {
      parts.push(item.title, item.paragraph);
    });
  }

  return cleanJoin(parts);
};

const flattenWebinarDescription = (
  record: WebinarDescriptionFragmentType,
): string => {
  const parts: string[] = [];

  parts.push(record.text.title, record.text.paragraph);
  record.subjects.items.forEach((item) =>
    parts.push(item.title, item.paragraph),
  );

  return cleanJoin(parts);
};

const flattenSpeaker = (record: SpeakerFragmentType): string => {
  const parts: string[] = [];

  parts.push(record.text.title, record.text.paragraph);
  record.list?.authors.forEach((item) => {
    parts.push(item.name);
    if (item.role) parts.push(item.role);
  });

  return cleanJoin(parts);
};

const flattenIntroArticle = (record: IntroArticleFragmentType): string => {
  const parts: string[] = [];

  parts.push(record.text.title, record.text.paragraph);
  record.list?.items?.items.forEach((item) => parts.push(item.label));

  return cleanJoin(parts);
};

const flattenFaqSection = (record: FaqSectionRecordFragmentType): string => {
  const parts: string[] = [];

  parts.push(record.title);
  record.accordion.items.forEach((question) =>
    parts.push(question.header, question.body),
  );

  return cleanJoin(parts);
};

const flattenHeroSection = (record: HeroFragmentType): string => {
  const parts: string[] = [];

  parts.push(record.title);
  if (record.paragraph) parts.push(record.paragraph);

  return cleanJoin(parts);
};

const flattenActionCard = (record: ActionCardFragmentType): string => {
  const parts: string[] = [];

  parts.push(record.title, record.paragraph, record.cta.label);
  if (record.cta.description) parts.push(record.cta.description);

  return cleanJoin(parts);
};

const flattenSupportCtaSection = (
  record: SupportCTASectionFragmentType,
): string => {
  const parts: string[] = [];

  parts.push(record.title, record.paragraph);

  return cleanJoin(parts);
};

const flattenImageBlock = (record: ImageBlockFragmentType): string => {
  const parts: string[] = [];

  if (record.image.alt) parts.push(record.image.alt);

  return cleanJoin(parts);
};

const flattenCallout = (record: CalloutFragmentType): string => {
  const parts: string[] = [];

  parts.push(record.title, record.paragraph);

  return cleanJoin(parts);
};

const flattenListCardEditorialWithIcon = (
  record: ListCardEditorialWithIconFragmentType,
): string => {
  const parts: string[] = [];

  record.items?.forEach((item) => parts.push(item.title, item.description));

  return cleanJoin(parts);
};

const flattenTopicsBlock = (record: TopicsBlockFragmentType): string => {
  const parts: string[] = [];

  if (record.title) parts.push(record.title);

  record.topics?.forEach((topic: any) => {
    if (topic.label) parts.push(topic.label);
  });

  return cleanJoin(parts);
};

const flattenExternalLink = (record: ExternalLinkFragmentType): string => {
  const parts: string[] = [];

  if (record.label) parts.push(record.label);
  if (record.description) parts.push(record.description);

  return cleanJoin(parts);
};

const flattenListBlockquote = (record: ListBlockquoteFragmentType): string => {
  const parts: string[] = [];

  record.items?.forEach((item: any) => {
    if (item.paragraph) parts.push(item.paragraph);
    if (item.author) parts.push(item.author);
  });

  return cleanJoin(parts);
};

const flattenListCardInfo = (record: ListCardInfoFragmentType): string => {
  const parts: string[] = [];

  record.items?.forEach((item: any) => {
    if (item.title) parts.push(item.title);
    if (item.paragraph) parts.push(item.paragraph);
  });

  return cleanJoin(parts);
};

const flattenOrderedList = (record: OrderedListFragmentType): string => {
  const parts: string[] = [];

  record.items?.forEach((item: any) => {
    if (item.title) parts.push(item.title);
    if (item.paragraph) parts.push(item.paragraph);
  });

  return cleanJoin(parts);
};
