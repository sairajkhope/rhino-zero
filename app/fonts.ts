import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import localFont from 'next/font/local'

export const departureMono = localFont({
  src: '../public/fonts/DepartureMono-Regular.woff2',
  variable: '--font-departure-mono',
})

export const geistMono = GeistMono
export const geistSans = GeistSans