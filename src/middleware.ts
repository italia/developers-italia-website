import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware((context, next) => {
  // const { lang } = context.params;
  // if (lang) {
  //   context.locals.lang = lang;
  // }

  const expectedUser = import.meta.env.BASIC_AUTH_USER;
  const expectedPassword = import.meta.env.BASIC_AUTH_PASSWORD;

  if (expectedUser && expectedPassword) {
    const authHeader = context.request.headers.get("authorization");
    if (authHeader) {
      const authValue = authHeader.split(" ")[1];
      const decodedAuth = atob(authValue);
      const [user, password] = decodedAuth.split(":");
      if (user === expectedUser && password === expectedPassword) {
        return next();
      }
    }

    return new Response("Auth Required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Secure Staging Area"',
      },
    });
  } else {
    return next();
  }
});
