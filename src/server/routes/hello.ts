import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

const hello = new Hono().get(
  "/",
  zValidator("query", z.object({ name: z.string() })),
  (c) => {
    console.log(c.req.query("name"));

    return c.json({
      message: `Hell`,
    });
  }
);
export default hello;
