// @unocss-include
const interactiveStyles = {
  base: 'aria-invalid:ring-danger/20 aria-invalid:border-danger dark:aria-invalid:ring-danger/40 text-base font-medium font-medium outline-none rounded underline-offset-4 shrink-0 gap-2 select-none whitespace-nowrap transition-transform duration-75 focus-visible:border-primary/50 disabled:opacity-50 [&_svg]:shrink-0 [&_svg]:size-4 [&_svg]:pointer-events-none disabled:pointer-events-none focus-visible:ring-[3px] active:ring-ring/60 focus-visible:ring-ring/40 hover:disabled:cursor-not-allowed',
  size: {
    default: 'text-sm px-2.5 py-0.75 h-8',
    icon: 'size-8 aspect-square',
    lg: 'text-base text-lg px-5 h-10',
    sm: 'text-xs px-2.5 py-1 h-7',
  },
  variant: {
    danger:
      'glow-red-500 text-danger-foreground border-danger bg-danger/90 active:bg-danger/87.5 hover:bg-danger hover:bg-danger/90',
    default:
      'glow-primary text-primary-foreground border border-primary bg-primary/85 active:bg-primary/80',
    ghost: 'text-muted-foreground hover:text-foreground active:bg-muted/75 hover:bg-muted/90',
    link: 'text-primary underline-offset-4 hover:underline',
    outline:
      'border border-border/90 bg-transparent active:border-border hover:border-border active:bg-muted/75 hover:bg-muted/90',
    soft: 'text-muted-foreground border border-border/90 bg-input hover:text-foreground active:border-border hover:border-border active:bg-muted/75 hover:bg-muted/90',
  },
}

const staticStyles = {
  base: 'p-5 rounded focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none',
  variant: {
    danger:
      'text-danger border border-danger bg-card [&>svg]:text-current',
    default:
      'text-card-foreground border border-border bg-card',
  },
}

const popoverStyles = {
  content: [
    staticStyles.base,
    staticStyles.variant.default,
    'duration-75 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-52 overflow-hidden p-1',
  ],
  item: [
    interactiveStyles.base,
    interactiveStyles.variant.ghost,
    interactiveStyles.size.default,
    'data-[highlighted]:bg-muted focus:bg-muted focus:text-accent-foreground [&_svg:not([class*=\'text-\'])]:text-muted-foreground [&_svg:not([class*=\'size-\'])]:size-12 data-[variant=danger]:text-danger-foreground data-[variant=danger]:focus:bg-danger/10 data-[variant=danger]:focus:text-danger-foreground data-[variant=danger]:*:[svg]:!text-danger-foreground dark:data-[variant=danger]:focus:bg-danger/40 relative flex cursor-default items-center p-1 px-2 text-sm outline-hidden transition-all select-none focus-visible:ring-0 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  ],
}

const overlayStyles
  = 'bg-overlay duration-75 inset-0 fixed z-50 backdrop-blur-xs data-[state=open]:animate-in data-[state=open]:fade-in-0'

export { interactiveStyles, overlayStyles, popoverStyles, staticStyles }
