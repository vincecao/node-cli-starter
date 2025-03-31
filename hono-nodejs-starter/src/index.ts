import { serve, type HttpBindings } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono<{ Bindings: HttpBindings }>();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
