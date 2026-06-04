// Trasforma i link che nel testo terminano con "(si apre in una nuova
// finestra)" — convenzione usata dai redattori nei campi markdown del CMS —
// nel formato "simple-cta" di designers.italia.it: testo in evidenza con icona
// external-link, apertura in nuova scheda e parentesi visibile solo agli
// screen reader.
const EXTERNAL_LINK_PATTERN =
  /<a\s+([^>]*?)>([^<]*?)\(si apre in una nuova finestra\)([^<]*?)<\/a>/gi;

const EXTERNAL_ICON =
  '<svg role="img" class="icon icon-sm ms-2 align-middle icon-primary" aria-hidden="true"><use href="/bsi-svg/sprites.svg#it-external-link"></use></svg>';

export function decorateExternalLinks(html: string): string {
  return html.replace(
    EXTERNAL_LINK_PATTERN,
    (_match, attrs: string, before: string, after: string) => {
      const text = `${before}${after}`.trim();
      return (
        `<a ${attrs} class="simple-cta" target="_blank" rel="noreferrer">` +
        `<span class="text">${text}</span>` +
        '<span class="visually-hidden"> (si apre in una nuova finestra)</span>' +
        EXTERNAL_ICON +
        "</a>"
      );
    },
  );
}
