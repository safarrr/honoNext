import { Hono } from "hono";
import { routes } from "./routes";
const app = new Hono().basePath("/api");
app.onError((error, c) => {
  console.error(`${error}`);
  return c.json(
    { error, message: error.message || "Custom Error Message" },
    500
  );
});

const route = routes(app);
export type AppType = typeof route;
export default app;
