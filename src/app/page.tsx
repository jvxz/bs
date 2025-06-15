'use client'
import { Suspense } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'

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

function HonoData() {
  return <p>hello</p>
}
