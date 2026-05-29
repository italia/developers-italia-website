import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware((context, next) => {
  const expectedUser = import.meta.env.BASIC_AUTH_USER;
  const expectedPassword = import.meta.env.BASIC_AUTH_PASSWORD;

  if (expectedUser && expectedPassword) {
    const authHeader = context.request.headers.get("authorization");
    const isAuthenticated = (() => {
      if (!authHeader?.startsWith("Basic ")) return false;
      const [user, password] = atob(authHeader.slice(6)).split(":");
      return user === expectedUser && password === expectedPassword;
    })();

    if (!isAuthenticated) {
      return new Response("Unauthorized", {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
      });
    }
  }

  const { lang } = context.params;
  if (lang) {
    context.locals.lang = lang;
  }

  return next();
});
