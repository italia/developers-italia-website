import type { APIContext, AstroCookieSetOptions, AstroCookies } from "astro";
import jwt, { type JwtPayload } from "jsonwebtoken";

function jwtToken() {
  return jwt.sign(
    { enabled: true },
    import.meta.env.SIGNED_COOKIE_JWT_SECRET as string,
  );
}

export function enableDraftMode(context: APIContext) {
  context.cookies.set(
    import.meta.env.DRAFT_MODE_COOKIE_NAME as string,
    jwtToken(),
    {
      path: "/",
      sameSite: "none",
      httpOnly: false,
      secure: true,
      ...({ partitioned: true } as AstroCookieSetOptions),
    },
  );
}

export function disableDraftMode(context: APIContext) {
  context.cookies.delete(import.meta.env.DRAFT_MODE_COOKIE_NAME as string, {
    path: "/",
    sameSite: "none",
    httpOnly: false,
    secure: true,
    ...({ partitioned: true } as AstroCookieSetOptions),
  });
}

export function isDraftModeEnabled(
  contextOrCookies: APIContext | AstroCookies,
) {
  const cookies =
    "cookies" in contextOrCookies ? contextOrCookies.cookies : contextOrCookies;

  const cookie = cookies.get(import.meta.env.DRAFT_MODE_COOKIE_NAME as string);

  if (!cookie) {
    return false;
  }

  try {
    const payload = jwt.verify(
      cookie.value,
      import.meta.env.SIGNED_COOKIE_JWT_SECRET as string,
    ) as JwtPayload;

    return payload.enabled as boolean;
  } catch (e) {
    return false;
  }
}
