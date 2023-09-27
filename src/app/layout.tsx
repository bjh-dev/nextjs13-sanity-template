import './globals.css'

// eslint-disable-next-line camelcase
import { Playfair_Display, Public_Sans } from 'next/font/google'
import { ReactNode } from 'react'

import Favicon from '@/components/global/Favicon'

const playfair = Playfair_Display({
  variable: '--playfair',
  subsets: ['latin-ext'],
  display: 'swap',
})

const publicSans = Public_Sans({
  variable: '--public_sans',
  subsets: ['latin-ext'],
  display: 'swap',
})

export const metadata = {
  title: 'Grasslands Church | Cairnlea',
  description:
    'You can grow in faith, hope & love with a Missional Community at Grasslands Church',
}
export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${publicSans.variable} font-sans font-extralight text-tuatara-800`}
      suppressHydrationWarning
    >
      <head>
        <Favicon />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
