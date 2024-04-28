import { toSSG } from 'hono/bun';
import app from "./docs";

toSSG(app, {
  dir: "generated"
});

