import { Suspense } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'
import { client } from '@/lib/hono/client'

export const dynamic = 'force-dynamic'

export default function Page() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <ThemeToggle />
      <Suspense fallback={<p>loading from hono...</p>}>
        <HonoData />
      </Suspense>
    </div>
  )
}

async function HonoData() {
  const res = await client.api.greeting.$get()
  const data = await res.json()

  return <p>{data.message}</p>
}
