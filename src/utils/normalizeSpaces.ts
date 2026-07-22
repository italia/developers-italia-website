// I contenuti incollati nel CMS da editor esterni (Word, Google Docs)
// contengono spazi unificatori (U+00A0 e varianti) invisibili nell'editor:
// il browser non può andare a capo su di essi e spezza le righe in punti
// anomali. Li normalizziamo in spazi ordinari al momento del rendering.
const NO_BREAK_SPACES = /[\u00A0\u2007\u202F]/g;

export function normalizeSpaces(text: string): string {
  return text.replace(NO_BREAK_SPACES, " ");
}

type StructuredTextNode = {
  value?: unknown;
  children?: StructuredTextNode[];
};

const normalizeNode = (node: StructuredTextNode): StructuredTextNode => {
  const normalized: StructuredTextNode = { ...node };
  if (typeof normalized.value === "string") {
    normalized.value = normalizeSpaces(normalized.value);
  }
  if (Array.isArray(normalized.children)) {
    normalized.children = normalized.children.map(normalizeNode);
  }
  return normalized;
};

type StructuredTextData = {
  value?: { document?: StructuredTextNode } | null;
};

export function normalizeStructuredTextSpaces<T>(data: T): T {
  const value = (data as StructuredTextData | null | undefined)?.value;
  if (!value?.document) {
    return data;
  }
  return {
    ...(data as object),
    value: {
      ...value,
      document: normalizeNode(value.document),
    },
  } as T;
}
