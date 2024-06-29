import { Hono } from "hono";
import { logger } from "hono/logger";
import hello from "./hello";

export const routes = (app: Hono) => {
  app.use("*", logger());

  // custom middleware example
  // app.get('/', hello(), c => c.json({ 1: 'Hello', 2: 'World' }))

  return app.route("/hello", hello);
};
