'use client'
import type { ComponentProps } from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { interactiveStyles, staticStyles } from '@/lib/styles'
import { cn } from '@/lib/utils'

function Switch({
  className,
  ...props
}: ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        staticStyles.base,
        staticStyles.variant.default,
        'bg-muted border-muted inline-flex h-5 w-9 items-center rounded-full border-2 p-0 data-[state=checked]:bg-primary data-[state=checked]:border-primary',
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          interactiveStyles.base,
          interactiveStyles.variant.default,
          'bg-background pointer-events-none block size-4 rounded-full border-0 ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
