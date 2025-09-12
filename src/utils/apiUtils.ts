import { ApiError } from "@datocms/cma-client";

export function withCORS(responseInit?: ResponseInit): ResponseInit {
  return {
    ...responseInit,
    headers: {
      ...responseInit?.headers,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  };
}

export function json(response: unknown, init?: ResponseInit): Response {
  return new Response(JSON.stringify(response), init);
}

export function handleUnexpectedError(error: unknown) {
  try {
    throw error;
  } catch (e) {
    console.error(e);
  }

  if (error instanceof ApiError) {
    return json(
      {
        success: false,
        error: error.message,
        request: error.request,
        response: error.response,
      },
      withCORS({ status: 500 }),
    );
  }

  return invalidRequestResponse(error, 500);
}

export function invalidRequestResponse(error: unknown, status = 422) {
  return json(
    {
      success: false,
      error,
    },
    withCORS({ status }),
  );
}

export function successfulResponse(data?: unknown, status = 200) {
  return json(
    {
      success: true,
      data,
    },
    withCORS({ status }),
  );
}

export function isRelativeUrl(path: string) {
  try {
    // Try to create a URL object — if it succeeds without a base, it's absolute
    new URL(path);
    return false;
  } catch {
    try {
      // Verify it can be parsed as a relative URL by providing a base
      new URL(path, "http://example.com");
      return true;
    } catch {
      // If both attempts fail, it's not a valid URL at all
      return false;
    }
  }
}
