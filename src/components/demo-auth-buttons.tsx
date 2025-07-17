'use client'
import { signIn, signOut, useSession } from '@/auth/client'
import { Button } from './ui/button'

function DemoAuthButtons() {
  const { data: session, isPending } = useSession()

  function handleClick(action: 'signIn' | 'signOut') {
    if (action === 'signIn') {
      signIn.social({
        provider: 'github',
      })
    } else {
      signOut()
      window.location.reload()
    }
  }

  return (
    <>
      <Button
        isLoading={isPending}
        onClick={() => handleClick('signIn')}
        disabled={!!session?.user}>
        Sign in
      </Button>
      <Button
        isLoading={isPending}
        onClick={() => handleClick('signOut')}
        disabled={!session?.user}>
        Sign out
      </Button>
    </>
  )
}

export { DemoAuthButtons }
