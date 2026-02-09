import {
  CardEditorialNews,
  type CardEditorialNewsProps,
} from "@components/react/CardEditorialNews";
import { Chip } from "@components/react/Chip";
import { Pagination } from "@components/react/Pagination";
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
}: PaginatedCollectionProps) {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(labelForAll);

  const categories: string[] = [
    labelForAll,
    ...Array.from(
      new Set(
        items
          .map((item) => item.category)
          .filter((c): c is string => typeof c === "string"),
      ),
    ),
  ];

  const filteredItems =
    selectedCategory === labelForAll
      ? items
      : items.filter((item) => item.category === selectedCategory);

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
            <span className="text-uppercase text-dark fw-semibold mt-1 fs-6">
              {filterTitle}
            </span>
            <ul
              className="it-list d-flex mb-0 flex-wrap"
              aria-label="Argomenti correlati:"
            >
              {categories.map((category) => (
                <li className="list-item border-bottom-0 me-3 mt-1">
                  <Chip
                    key={category}
                    variant="primary"
                    size="large"
                    label={category}
                    visuallyHidden={category}
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
        {paginatedItems.map((n) => (
          <>
            {newsPageTabType === "news_item" && (
              <li className="col-12 col-lg-4 mb-5" key={n.title}>
                <CardEditorialNews {...(n as CardEditorialNewsProps)} />
              </li>
            )}
            {newsPageTabType === "story_item" && (
              <li className="col-12 col-lg-4 mb-5" key={n.title}>
                <CardEditorialInlineMini
                  {...(n as CardEditorialInlineMiniProps)}
                />
              </li>
            )}
            {newsPageTabType === "webinar_item" && (
              <li className="col-12 col-lg-4 mb-5" key={n.title}>
                <CardEditorialNews {...(n as CardEditorialNewsProps)} />
              </li>
            )}
            {newsPageTabType === "resource" && (
              <li className="col-12 col-lg-7 mb-3" key={n.title}>
                <Resource {...(n as ResourceProps)} />
              </li>
            )}
          </>
        ))}
      </ul>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}

/* 
<div
  class=`it-list-wrapper d-flex ${variant === "column" ? "flex-column" : "align-items-center "} `
>
  {
    title && (
      <span
        class={`text-uppercase text-dark fw-semibold mt-1 me-3 ${variant === "column" ? "fs-6" : ""}`}
      >
        {title}
      </span>
    )
  }
  <ul class="it-list d-flex mb-0 flex-wrap" aria-label="Argomenti correlati:">
    {
      topics.map((topic) => (
        <li class="list-item border-bottom-0 me-3 mt-1">
          <Chip
            visuallyHidden=""
            disabled={disabled}
            label={topic}
            size={sizeChip}
            variant={variantChip}
          />
        </li>
      ))
    }
  </ul>
</div> */
