import { Hono } from 'hono'
import { type PinoLogger, pinoLogger } from 'hono-pino'
import pino from 'pino'
import pretty from 'pino-pretty'
import { notFound, onError } from 'stoker/middlewares'

type AppBindings = { Variables: { logger: PinoLogger } }

export const createHono = () => {
  const app = new Hono<AppBindings>()

  app.use(
    pinoLogger({
      pino: pino(process.env.NODE_ENV === 'production' ? undefined : pretty()),
    }),
  )

  app.onError(onError)
  app.notFound(notFound)

  return app
}
