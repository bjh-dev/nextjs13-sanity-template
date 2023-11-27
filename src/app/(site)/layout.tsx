import '@/app/globals.css'

import { Analytics } from '@vercel/analytics/react'
import { Metadata, Viewport } from 'next'
// eslint-disable-next-line camelcase
import { Inter, Roboto_Mono } from 'next/font/google'
import React from 'react'

import Favicon from '@/components/global/Favicon'
import Footer from '@/components/global/Footer'
import ThemeProvider from '@/components/theme-provider'

if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line no-console, func-names, @typescript-eslint/no-empty-function
  console.log = function () {}
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  generator: 'Next.js',
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://www.example.com'
      : 'http://localhost:3000'
  ),
  applicationName: 'Sanctuary CMS',
  keywords: ['foo', 'bar'],
  authors: [{ name: 'Bryan Hickey', url: 'https://www.bryanjhickey.com/' }],
  creator: 'Bryan J. Hickey',
  publisher: 'Bryan J. Hickey',
  manifest: '/site.webmanifest.json',
  icons: {
    icon: '/images/favicon/favicon-32x32.png',
    shortcut: '/images/favicon/favicon-32x32.png',
    apple: '/images/favicon/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: 'black',
}

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable} font-sans`}
      suppressHydrationWarning
    >
      <head>
        <Favicon />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
