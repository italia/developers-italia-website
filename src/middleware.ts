import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware((context, next) => {
  // if (expectedUser && expectedPassword) {

  const authHeader = context.request.headers.get("authorization");

  if (authHeader) {
    const authValue = authHeader.split(" ")[1];
    const decodedAuth = atob(authValue);
    const [user, password] = decodedAuth.split(":");

    if (
      user === import.meta.env.BASIC_AUTH_USER &&
      password === import.meta.env.BASIC_AUTH_PASSWORD
    ) {
      // const { lang } = context.params;
      // if (lang) {
      //   context.locals.lang = lang;
      // }
      return next(); // Credentials match, let them in
    }
  }

  // If unauthorized or missing headers, prompt the user for password
  return new Response("Auth Required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Staging Area"',
    },
  });

  // }
});
