import {
  CardEditorialNews,
  type CardEditorialNewsProps,
} from "@components/react/CardEditorialNews";
import { Chip } from "@components/react/Chip";
import { Pagination } from "@components/react/Pagination";
import type { SiteLocale } from "@graphql/types";
import { getI18n } from "@i18n/microcopy";
import { useState } from "react";
import {
  CardEditorialInlineMini,
  type CardEditorialInlineMiniProps,
} from "../CardEditorialInlineMini/CardEditorialInlineMini";
import { Resource, type ResourceProps } from "../Resource";

type PaginatedCollectionCommonProps = {
  title: string;
  paragraph: string;
  filterTitle: string;
  labelForAll: string;
  lang: SiteLocale;
  perPage?: number;
};

type PaginatedCollectionProps =
  | (PaginatedCollectionCommonProps & {
      items: CardEditorialNewsProps[];
      newsPageTabType: "news_item";
    })
  | (PaginatedCollectionCommonProps & {
      items: CardEditorialInlineMiniProps[];
      newsPageTabType: "story_item";
    })
  | (PaginatedCollectionCommonProps & {
      items: CardEditorialNewsProps[];
      newsPageTabType: "webinar_item";
    })
  | (PaginatedCollectionCommonProps & {
      items: ResourceProps[];
      newsPageTabType: "resource";
    });

export function PaginatedCollection({
  items,
  perPage = 6,
  title,
  paragraph,
  filterTitle,
  labelForAll,
  newsPageTabType,
  lang,
}: PaginatedCollectionProps) {
  const t = getI18n(lang);

  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(labelForAll);

  const categories: string[] = [
    labelForAll,
    ...Array.from(
      new Set(
        items
          .flatMap((item) => item.category)
          .filter((c): c is string => typeof c === "string"),
      ),
    ),
  ];

  const filteredItems =
    selectedCategory === labelForAll
      ? items
      : items.filter((item) => item.category?.includes(selectedCategory));

  const totalPages = Math.ceil(filteredItems.length / perPage);
  const start = (page - 1) * perPage;
  const paginatedItems = filteredItems.slice(start, start + perPage);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setPage(1);
  };

  return (
    <div className="container">
      <div className="row justify-content-between align-items-top">
        <div className="col-lg-5 col-12">
          <div className={`text-container mb-4 mb-lg-0`}>
            <h2 className="mb-3">{title}</h2>
            <div className="mb-4">{paragraph}</div>
          </div>
        </div>
        <div className="col-lg-5 col-12">
          <div className="it-list-wrapper d-flex flex-column">
            <span id="filterPagination" className="it-label text-dark mt-1">
              {filterTitle}
            </span>
            <ul
              className="it-list d-flex mb-0 flex-wrap"
              aria-labelledby="filterPagination"
            >
              {categories.map((category) => (
                <li className="list-item border-bottom-0 me-3 mt-1">
                  <Chip
                    key={category}
                    variant="primary"
                    size="large"
                    label={category}
                    visuallyHidden={t["filter.topic"]}
                    onClick={() => handleCategoryChange(category)}
                    active={selectedCategory === category}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ul className="it-card-list row pt-4">
        {paginatedItems.map((n) => {
          const isResource = newsPageTabType === "resource";
          const colClass = isResource
            ? "col-12 col-lg-7 mb-3"
            : "col-12 col-lg-4 mb-5";

          const itemKey = n.title;

          return (
            <li className={colClass} key={itemKey}>
              {newsPageTabType === "news_item" && (
                <CardEditorialNews {...(n as CardEditorialNewsProps)} />
              )}

              {newsPageTabType === "story_item" && (
                <CardEditorialInlineMini
                  {...(n as CardEditorialInlineMiniProps)}
                />
              )}

              {newsPageTabType === "webinar_item" && (
                <CardEditorialNews {...(n as CardEditorialNewsProps)} />
              )}

              {newsPageTabType === "resource" && (
                <Resource {...(n as ResourceProps)} />
              )}
            </li>
          );
        })}
      </ul>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}
