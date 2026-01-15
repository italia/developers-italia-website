import type { HomepageFragmentType } from "@graphql/slugFragments";
import type { SiteLocale } from "@graphql/types";
import { executeQuery } from "@lib/datocms";
import { resolveRoutePath, type RoutableRecord } from "@utils/pathHelper";
import { AllLinkQuery } from "@utils/query";
import fs from "fs";
import path from "path";

const outputPath = `src/data/linkMap.json`;

type HasTitles = {
  allTitleLocales:
    | {
        locale: SiteLocale | null;
        value: string;
      }[]
    | null;
};

type BreadcrumbStep = {
  title: string;
  id: string;
};

type PageRouteInfo = {
  path: string;
  breadcrumb: BreadcrumbStep[];
};

type LocaleMap = Record<SiteLocale, PageRouteInfo>;

type SiteMap = Record<string, LocaleMap>;

const getTitle = (item: HasTitles, locale: string) =>
  item?.allTitleLocales?.find((t) => t.locale === locale)?.value || "No title";

const processItems = <T extends RoutableRecord>(
  items: T[],
  linkMap: SiteMap,
  home: HomepageFragmentType | null,
) => {
  items?.forEach((item) => {
    linkMap[item.id] = {} as LocaleMap;

    item.locales.forEach((locale) => {
      const { fullPath, steps } = resolveRoutePath(item, locale, items);
      const prefix = `/${locale}`;

      linkMap[item.id][locale] = {
        path: `${prefix}/${fullPath}`,
        breadcrumb: [],
      };

      if (home) {
        linkMap[item.id][locale].breadcrumb.push({
          title: getTitle(home, locale),
          id: home.id,
        });
      }

      linkMap[item.id][locale].breadcrumb.push(
        ...steps.map((step: any) => ({
          title: step.title,
          id: step.id,
        })),
      );
    });
  });
};

async function generateLinkMap() {
  console.log(`Generating link map...`);

  const data = await executeQuery(AllLinkQuery);
  const linkMap: SiteMap = {};
  const home = data.homepage;

  if (home) {
    linkMap[home.id] = {} as LocaleMap;
    home.locales.forEach((locale) => {
      linkMap[home.id][locale] = {
        path: `/${locale}`,
        breadcrumb: [],
      };
    });
  }

  const collections = [
    data.allPages,
    data.allArticles,
    data.allInsights,
    data.allStoryItems,
    data.allWebinarItems,
    data.allCatalogues,
  ];

  collections.forEach((collection) => processItems(collection, linkMap, home));

  const fullOutputPath = path.resolve(outputPath);
  if (!fs.existsSync(path.dirname(fullOutputPath))) {
    fs.mkdirSync(path.dirname(fullOutputPath), { recursive: true });
  }

  fs.writeFileSync(fullOutputPath, JSON.stringify(linkMap, null, 2));
  console.log(`Map successfully generated at: ${outputPath}`);
}

async function run() {
  try {
    await generateLinkMap();
    console.log("All link maps generated successfully.");
  } catch (error) {
    console.error("Error generating link maps:", error);
    process.exit(1);
  }
}

run();
