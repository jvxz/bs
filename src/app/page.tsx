'use client'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Suspense } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'
import { Spinner } from '@/components/ui/spinner'
import { useTRPC } from '@/lib/trpc/client'

export default function Page() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <ThemeToggle />
      <Suspense fallback={<Spinner invert className="size-7" />}>
        <TRPCData />
      </Suspense>
    </div>
  )
}

function TRPCData() {
  const trpc = useTRPC()
  const { data } = useSuspenseQuery(trpc.hello.queryOptions())

  return <pre>{data}</pre>
}
