import { createHonoApp } from '..'

const app = createHonoApp()

export const greeting = app.get('/', async c => {
  c.var.logger.info('waiting for 2 seconds...')

  await new Promise(resolve => setTimeout(resolve, 2000))

  return c.json({
    message: `hello from hono!! 🔥`,
  })
})
