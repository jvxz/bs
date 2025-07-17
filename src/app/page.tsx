import { headers } from 'next/headers'
import { Suspense } from 'react'
import { auth } from '@/auth'
import { DemoAuthButtons } from '@/components/demo-auth-buttons'
import { ThemeToggle } from '@/components/theme-toggle'
import { Spinner } from '@/components/ui/spinner'

export default async function Page() {
  const headersList = await headers()
  const session = await auth.api.getSession({
    headers: headersList,
  })

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <ThemeToggle />
      <DemoAuthButtons />
      <Suspense fallback={<Spinner />}>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </Suspense>
    </div>
  )
}
