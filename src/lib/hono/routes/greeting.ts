import { Hono } from 'hono'

const app = new Hono()

export const greeting = app.get('/', async c => {
  await new Promise(resolve => setTimeout(resolve, 2000))

  return c.json({
    message: `hello from hono!! 🔥`,
  })
})
