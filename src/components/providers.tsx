'use client'
import type { ThemeProviderProps } from 'next-themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import dynamic from 'next/dynamic'

const queryClient = new QueryClient()

// prevent hydration errors
const NextThemesProvider = dynamic(
  async () => import('next-themes').then(e => e.ThemeProvider),
  {
    ssr: false,
  },
)

function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        {...props}
      >
        {children}
      </NextThemesProvider>
    </QueryClientProvider>
  )
}

export { Providers }
