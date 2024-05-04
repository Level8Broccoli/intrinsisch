import fs from "node:fs/promises";
import { toSSG } from "hono/bun";
import { createPages } from "./app";
import { parseArgs } from "util";

const OUT_DIR = "generated";

// Delete old static site

await fs.rm(OUT_DIR, { recursive: true, force: true });

// Parse arguments

const options = {
  cssFile: {
    type: "string",
    short: "c",
  },
  title: {
    type: "string",
    short: "t",
  },
} as const;

const {
  values: { cssFile, title },
} = parseArgs({
  args: Bun.argv,
  options,
  allowPositionals: true,
});

if (cssFile === undefined) {
  throw Error("cssFile parameter is mandatory");
}

// Generate new static site

const pages = createPages(cssFile, title);

toSSG(pages, {
  dir: OUT_DIR,
});
