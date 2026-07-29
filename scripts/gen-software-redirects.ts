import { writeFileSync } from "fs";

const BASE_URL = "https://api.developers.italia.it/v1/software";
const INITIAL_URL = `${BASE_URL}?all=true&page[size]=100`;

interface SoftwareItem {
  id: string;
  url?: string;
  aliases?: string[];
  publiccodeYml?: string;
  active?: boolean;
  vitality?: unknown;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: unknown;
}

interface SoftwareLinks {
  prev: string | null;
  next: string | null;
}

interface SoftwareResponse {
  data: SoftwareItem[];
  links: SoftwareLinks;
}

function resolveNextUrl(
  next: string | null,
  currentUrl: string,
): string | null {
  if (!next) return null;
  return new URL(next, currentUrl).toString();
}

async function fetchAllSoftwareIds(): Promise<string[]> {
  const ids: string[] = [];
  let url: string | null = INITIAL_URL;
  let page = 1;

  while (url) {
    console.log(`Fetching page ${page}: ${url}`);

    const res: Response = await fetch(url, {
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      throw new Error(
        `Request failed (${res.status} ${res.statusText}) for URL: ${url}`,
      );
    }

    const body = (await res.json()) as SoftwareResponse;

    const data = Array.isArray(body.data) ? body.data : [];
    for (const item of data) {
      if (item && item.id) {
        ids.push(item.id);
      }
    }

    const next = body?.links?.next ?? null;
    url = resolveNextUrl(next, url);
    page++;
  }

  return ids;
}

const allIds: string[] = await fetchAllSoftwareIds();

console.log(`\nTotal IDs collected: ${allIds.length}`);
console.log(allIds.join("\n"));

const outputFilePath = "./software-ids.txt";
writeFileSync(outputFilePath, allIds.join("\n"), "utf-8");
console.log(`\nAll IDs saved to ${outputFilePath}`);

export { fetchAllSoftwareIds };
export type { SoftwareItem, SoftwareLinks, SoftwareResponse };
