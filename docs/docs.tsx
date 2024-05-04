import { Hono } from "hono";
import type { FC } from "hono/jsx";
import { html } from "hono/html";

export function createLayout(cssFile: string, title?: string): FC {
  return (props) => (
    <>
      {html`<!doctype html>`}
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>{title ?? "Intrinsisch Documentation"}</title>
          <link href={cssFile} rel="stylesheet" />
        </head>
        <body>{props.children}</body>
      </html>
    </>
  );
}

export function registerPages(
  app: Hono<{ Variables: { getLayout: () => FC } }>,
) {
  app.get("/", (c) => {
    const Layout = c.var.getLayout();
    return c.html(<Layout>This works?</Layout>);
  });

  return app;
}
