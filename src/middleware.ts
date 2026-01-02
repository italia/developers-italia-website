import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware((context, next) => {
  const { lang } = context.params;
  if (lang) {
    context.locals.lang = lang;
  }

  return next();
});
