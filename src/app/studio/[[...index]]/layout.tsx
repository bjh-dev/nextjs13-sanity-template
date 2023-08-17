import '@/app/globals.css'

// eslint-disable-next-line camelcase
import { Inter, Roboto_Mono } from 'next/font/google'
import React from 'react'

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

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable} font-sans`}
    >
      <body>{children}</body>
    </html>
  )
}
