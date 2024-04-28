import { $ } from "bun";
import { expect, test } from "bun:test";

test("project does not emit css", async () => {
  const css = await $`bun run test:compile`.text();
  expect(css).toBe("");
});
