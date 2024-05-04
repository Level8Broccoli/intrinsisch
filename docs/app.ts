import { createMiddleware } from "hono/factory";
import { createLayout, registerPages } from "./docs";
import type { FC } from "hono/jsx";
import { Hono } from "hono";

type Env = {
  Variables: {
    getLayout: () => FC;
  };
};

export function createPages(cssFile: string, title?: string) {
  const app = new Hono<Env>();

  app.use(
    createMiddleware(async (c, next) => {
      c.set("getLayout", () => createLayout(cssFile, title));
      await next();
    }),
  );

  return registerPages(app);
}
