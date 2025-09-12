import type { APIRoute } from "astro";
import { disableDraftMode } from "../../../../lib/draftMode";
import {
  handleUnexpectedError,
  invalidRequestResponse,
  isRelativeUrl,
} from "../../../../utils/apiUtils";

export const prerender = false;

export const GET: APIRoute = (event) => {
  const { url } = event;
  const redirectUrl = url.searchParams.get("url") || "/";

  try {
    if (!isRelativeUrl(redirectUrl)) {
      return invalidRequestResponse("URL must be relative!", 422);
    }

    disableDraftMode(event);
  } catch (error) {
    return handleUnexpectedError(error);
  }

  return event.redirect(redirectUrl, 307);
};
