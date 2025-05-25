import type { Metadata } from 'next'
import { Providers } from '@/components/providers'
import { mono, sans } from '@/lib/font'
import { name } from '../../package.json'
import './globals.css'

export const metadata: Metadata = {
  title: name,
  description: `${name}'s description`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sans.variable} antialiased ${mono.variable}`}>
      {process.env.NODE_ENV === 'development' && (
        <head>
          <script
            crossOrigin="anonymous"
            src="//unpkg.com/react-scan/dist/auto.global.js"
            async
          />
        </head>
      )}
      <body className="subpixel-antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
