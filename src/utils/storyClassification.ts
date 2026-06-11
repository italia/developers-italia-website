/**
 * Discriminazione delle `story_item` tra "Notizie" e "Piattaforme".
 *
 * OGGI la distinzione si basa su `articleClassification` (la taxonomy
 * `StoryClass`), l'unico campo popolato in modo affidabile: ogni story è
 * classificata come Notizie oppure Piattaforme.
 *
 * Il modello DatoCMS espone anche un campo `storyType` (stringa
 * "news"/"platform"), ma allo stato attuale vale "news" su TUTTI i record
 * (comprese le piattaforme), quindi non è ancora utilizzabile come
 * discriminante. Quando verrà bonificato nel CMS basterà aggiornare
 * l'implementazione di `isNewsStoryClass` per leggere `storyType` invece
 * dell'id della classe.
 */

// ID dei record `StoryClass` su DatoCMS.
export const NEWS_STORY_CLASS_ID = "GMc8iddaTTiyE0LjZHKZ8Q";
export const PLATFORMS_STORY_CLASS_ID = "I_yJs25GSZ-PG4kU1EbeqA";

/** True se la classe passata (`articleClassification.id`) è quella delle Notizie. */
export function isNewsStoryClass(
  articleClassificationId?: string | null,
): boolean {
  return articleClassificationId === NEWS_STORY_CLASS_ID;
}
