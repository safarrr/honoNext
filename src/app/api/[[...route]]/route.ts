import { Hono } from "hono";
import { handle } from "hono/vercel";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import prisma from "@/utility/db";
import app from "@/server/app";
export const dynamic = "force-dynamic";
// const app = new Hono().basePath('/api')

// app.get('/hello', async (c) => {
//     const data = await prisma.todo.count()
//     console.log(data)
//   return c.json({
//     message: 'Hello from Hono on Vercel!'
//   })
// })
// app.put("/post",zValidator(
// 		"json",
// 		z.object({
// 			name: z.string(),
// 		}),
// 	), (c)=> {
//         console.log(c.body.name)
//         c.status(404)
//         return c.json({hai:"sasa"})
//     })
// app.get('/:wild',
//     	zValidator(
// 		"query",
// 		z.object({
// 			wild: z.string(),
// 		}),
// 	), (c) => {
//   const wild = c.req.param('wild')
//   return c.json({
//     message: `Hello from Hono on Vercel! You're now on /api/${wild}!`
//   })
// })

const hendles = handle(app);
export const GET = hendles;
export const POST = hendles;
export const PUT = hendles;
