import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { greeting } from '@/lib/hono/routes/greeting'

export const dynamic = 'force-dynamic'

const app = new Hono().basePath('/api')

const route = app.route('/greeting', greeting)

export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const DELETE = handle(app)
export const PATCH = handle(app)
export const OPTIONS = handle(app)
export const HEAD = handle(app)
export const TRACE = handle(app)
export const CONNECT = handle(app)

export type AppType = typeof route
