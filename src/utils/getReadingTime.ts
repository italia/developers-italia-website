/**
 * Stima del tempo di lettura (in minuti) a partire dal contenuto strutturato
 * della pagina, come fa designers.italia.it sulle notizie.
 *
 * Attraversa ricorsivamente i blocchi raccogliendo il testo dei nodi `span`
 * del formato DAST di DatoCMS, conta le parole e divide per una velocità di
 * lettura media. Il risultato è arrotondato per eccesso e mai inferiore a 1.
 */

// Velocità di lettura media (parole al minuto) usata per la stima.
const WORDS_PER_MINUTE = 200;

function collectText(node: unknown, acc: string[], seen: Set<unknown>): void {
  if (!node || seen.has(node)) return;

  if (Array.isArray(node)) {
    node.forEach((child) => collectText(child, acc, seen));
    return;
  }

  if (typeof node !== "object") return;
  seen.add(node);

  const candidate = node as Record<string, unknown>;

  // Nodi di testo DAST: { type: "span", value: "..." }
  if (candidate.type === "span" && typeof candidate.value === "string") {
    acc.push(candidate.value);
  }

  Object.values(candidate).forEach((value) => collectText(value, acc, seen));
}

export function getReadingTime(content: unknown): number {
  const parts: string[] = [];
  collectText(content, parts, new Set());

  const words = parts.join(" ").split(/\s+/).filter(Boolean).length;

  if (words === 0) return 0;

  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}
