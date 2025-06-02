import '@/app/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-montserrat: ${montserrat.style.fontFamily};
        }
      `}</style>
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </>
  )
} 