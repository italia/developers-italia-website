import type { APIRoute } from "astro";
import {
  handleUnexpectedError,
  invalidRequestResponse,
  json,
  withCORS,
} from "../../../utils/apiUtils";
import { generateWebsiteUrl } from "../../../utils/generateWebsiteUrl";

export const prerender = false;

export const OPTIONS: APIRoute = ({ request }) => {
  return new Response("OK", withCORS());
};

type PreviewLink = {
  label: string;
  url: string;
  reloadPreviewOnRecordUpdate?: boolean | { delayInMs: number };
};

type WebPreviewsResponse = {
  previewLinks: PreviewLink[];
};

export const POST: APIRoute = async ({ url, request }) => {
  try {
    const token = url.searchParams.get("token");

    if (token !== import.meta.env.SECRET_API_TOKEN) {
      return invalidRequestResponse("Invalid token", 401);
    }

    const { item, locale } = await request.json();
    const recordUrl = generateWebsiteUrl(item, locale);

    const response: WebPreviewsResponse = { previewLinks: [] };

    if (recordUrl) {
      if (item.meta.status !== "published") {
        response.previewLinks.push({
          label: "Draft version",
          url: new URL(
            `/api/draft-mode/enable?url=${recordUrl}&token=${token}`,
            request.url,
          ).toString(),
        });
      }

      if (item.meta.status !== "draft") {
        response.previewLinks.push({
          label: "Published version",
          url: new URL(
            `/api/draft-mode/disable?url=${recordUrl}`,
            request.url,
          ).toString(),
        });
      }
    }

    return json(response, withCORS());
  } catch (error) {
    return handleUnexpectedError(error);
  }
};
