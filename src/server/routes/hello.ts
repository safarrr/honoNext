import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

const hello = new Hono().get(
  "/",
  zValidator("query", z.object({ name: z.string() })),
  (c) => {
    return c.json({
      message: `Hell`,
    });
  }
);
export default hello;
