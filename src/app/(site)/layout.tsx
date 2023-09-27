import '@/app/globals.css'

import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import { ReactNode } from 'react'

import Footer from '@/components/global/Footer'
import ThemeProvider from '@/components/theme-provider'
import { settingsQuery } from '@/lib/queries'
import { SettingsPayload } from '@/lib/types'
import { getClient } from '@/sanity/lib/client'

if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line no-console, func-names, @typescript-eslint/no-empty-function
  console.log = function () {}
}

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
  themeColor: '#ffffff',
  manifest: '/site.webmanifest.json',
  icons: {
    icon: '/images/favicon/favicon-32x32.png',
    shortcut: '/images/favicon/favicon-32x32.png',
    apple: '/images/favicon/apple-touch-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

const PagesLayout = async ({ children }: { children: ReactNode }) => {
  const client = getClient()

  const [settings] = await Promise.all([
    client.fetch<SettingsPayload>(settingsQuery),
  ])
  return (
    <main suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
        <Footer {...settings} />
      </ThemeProvider>
      <Analytics />
    </main>
  )
}

export default PagesLayout
