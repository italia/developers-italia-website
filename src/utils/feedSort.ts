import type { SiteLocale } from "@graphql/types";

/**
 * Modalità di ordinamento configurabili da CMS sul blocco "Catalogue tab"
 * (campo `sort_mode`, esposto in GraphQL come `sortMode`).
 */
export type FeedSortMode =
  | "date_desc"
  | "date_asc"
  | "title_asc"
  | "title_desc"
  | "updated_desc";

/** Valore usato quando il campo CMS è vuoto o non riconosciuto. */
const DEFAULT_SORT_MODE: FeedSortMode = "date_desc";

type Sortable = {
  title?: string | null;
  dateTime?: string | null;
};

function resolveSortMode(sortMode: string | null | undefined): FeedSortMode {
  switch (sortMode) {
    case "date_desc":
    case "date_asc":
    case "title_asc":
    case "title_desc":
    case "updated_desc":
      return sortMode;
    // Contenuti creati prima dell'introduzione del campo hanno `sortMode`
    // vuoto: usiamo il fallback cronologico, che corregge anche la
    // cronologia della pagina Notizie senza dover editare i record.
    default:
      return DEFAULT_SORT_MODE;
  }
}

/**
 * Ordina gli elementi di un feed (piattaforme, notizie, ecc.) secondo la
 * modalità scelta da CMS. `updated_desc` mantiene l'ordine restituito da
 * DatoCMS (default `_updatedAt_DESC`); le altre modalità riordinano per data
 * di pubblicazione o per titolo localizzato.
 */
export function sortFeedItems<T extends Sortable>(
  items: T[],
  sortMode: string | null | undefined,
  lang: SiteLocale,
): T[] {
  const mode = resolveSortMode(sortMode);

  if (mode === "updated_desc") return items;

  const sorted = [...items];

  if (mode === "title_asc" || mode === "title_desc") {
    const direction = mode === "title_asc" ? 1 : -1;
    sorted.sort(
      (a, b) =>
        direction *
        (a.title ?? "").localeCompare(b.title ?? "", lang, {
          sensitivity: "base",
        }),
    );
    return sorted;
  }

  // date_asc | date_desc
  sorted.sort((a, b) => {
    const timeA = a.dateTime ? new Date(a.dateTime).getTime() : 0;
    const timeB = b.dateTime ? new Date(b.dateTime).getTime() : 0;
    const ascending = timeA - timeB;
    return mode === "date_desc" ? -ascending : ascending;
  });
  return sorted;
}
