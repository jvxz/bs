'use client'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { interactiveStyles } from '@/lib/styles'
import { cn } from '@/lib/utils'

const toggleVariants = cva(
  cn(
    interactiveStyles.base,
    `${interactiveStyles.base} data-[state=on]:bg-accent data-[state=on]:text-accent-foreground p-0`,
  ),
  {
    variants: {
      variant: {
        default: [
          interactiveStyles.variant.ghost,
          'data-[state=on]:bg-muted m-0 border border-transparent',
        ],
        outline: [
          interactiveStyles.variant.outline,
          'data-[state=on]:bg-muted data-[state=on]:border-primary/30 m-0',
        ],
      },
      size: {
        default: [interactiveStyles.size.default, 'text-sm'],
        sm: [interactiveStyles.size.sm, 'text-sm'],
        lg: [interactiveStyles.size.lg, 'text-sm'],
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Toggle({
  className,
  variant,
  size,
  ...props
}: ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(
        toggleVariants({
          variant,
          size,
          className,
        }),
      )}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
