import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import localFont from 'next/font/local'
import { Manrope } from 'next/font/google'

export const departureMono = localFont({
  src: '../public/fonts/DepartureMono-Regular.woff2',
  variable: '--font-departure-mono',
})

export const geistMono = GeistMono
export const geistSans = GeistSans

export const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})