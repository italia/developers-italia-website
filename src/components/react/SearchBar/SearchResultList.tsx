import type { SearchResult } from "@graphql/types";
import { useEffect, useState } from "react";
import { SearchResultItem } from "./SearchResultItem";

type SearchResultProps = {
  value: string;
  results: SearchResult[];
  labelForAllResult: string;
  labelForNoResult: string;
  ariaLabelExternalLink?: string;
  ariaLabelDownloadLink?: string;
  ariaLabelInternalLink?: string;
};

export const SearchResultList = ({
  results,
  value,
  labelForAllResult,
  labelForNoResult,
  ariaLabelExternalLink,
  ariaLabelDownloadLink,
  ariaLabelInternalLink,
}: SearchResultProps) => {
  const [announcedLabel, setAnnouncedLabel] = useState("");
  const [announcedValue, setAnnouncedValue] = useState("");

  useEffect(() => {
    if (!value) {
      setAnnouncedLabel("");
      setAnnouncedValue("");
      return;
    }

    setAnnouncedLabel("");
    setAnnouncedValue("");

    const timer = setTimeout(() => {
      const label = results.length ? labelForAllResult : labelForNoResult;
      setAnnouncedLabel(label);
      setAnnouncedValue(value);
    }, 50);

    return () => clearTimeout(timer);
  }, [value, results.length, labelForAllResult, labelForNoResult]);

  const hasResults = results.length > 0;

  return (
    <div className="row text-start">
      <div className="col-12 col-md-10 py-5">
        <div role="status" aria-live="polite" aria-atomic="true">
          {announcedValue && (
            <p className="mb-3">
              {announcedLabel} <strong>"{announcedValue}"</strong>
            </p>
          )}
        </div>

        {hasResults && (
          <div
            role="list"
            aria-label={`${labelForAllResult} ${value}`}
            className="it-list-wrapper"
          >
            <ul className="it-list">
              {results.map((result) => (
                <li key={result.id}>
                  <SearchResultItem
                    result={result}
                    ariaLabelDownloadLink={ariaLabelDownloadLink}
                    ariaLabelExternalLink={ariaLabelExternalLink}
                    ariaLabelInternalLink={ariaLabelInternalLink}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
