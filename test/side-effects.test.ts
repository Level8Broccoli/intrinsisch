import { assertEquals } from "@std/assert";

Deno.test("project does not emit css", async () => {
  const command = new Deno.Command(Deno.execPath(), {
    args: ["task", "test:compile"],
  });

  const { stdout } = await command.output();
  const css = new TextDecoder().decode(stdout);

  assertEquals(css, "");
});
