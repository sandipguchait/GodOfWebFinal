/* eslint-disable */

import './globals.css'
import { Poppins } from 'next/font/google'
import Header from '@/components/layout/Header';
import Footer from '@/components/Footer';
import { SITE_NAME, SITE_DESCRIPTION, LANG, MAIN_CONTAINER_CLASS } from '@/constants'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
}

export default function RootLayout({ children }) {
  return (
    <html lang={LANG}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={poppins.className}>
        <Header />
        <main className={MAIN_CONTAINER_CLASS}>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}