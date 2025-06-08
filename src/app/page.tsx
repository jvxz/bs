'use client'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Suspense } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'
import { useTRPC } from '@/lib/trpc/client'

export default function Page() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <ThemeToggle />
      <Suspense fallback={<p>loading from trpc...</p>}>
        <TRPCData />
      </Suspense>
    </div>
  )
}

function TRPCData() {
  const trpc = useTRPC()
  const { data } = useSuspenseQuery(trpc.hello.queryOptions())

  return <p>{data}</p>
}
