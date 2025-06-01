import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { loadSlim } from "@tsparticles/slim"
import { tsParticles } from "@tsparticles/engine"
import CustomCursor from '@/components/CustomCursor'
import LoadingScreen from '@/components/LoadingScreen'

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simula um tempo de carregamento
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    const initParticles = async () => {
      await loadSlim(tsParticles)
    }

    initParticles()

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <CustomCursor />
          <Component {...pageProps} />
        </>
      )}
    </>
  )
} 