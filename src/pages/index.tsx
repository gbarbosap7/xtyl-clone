import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import StatsSection from '@/components/StatsSection'
import CaseStudies from '@/components/CaseStudies'
import OnboardingSection from '@/components/OnboardingSection'
import ServicesSection from '@/components/ServicesSection'
import AdditionalServicesSection from '@/components/AdditionalServicesSection'
import PotentialSection from '@/components/PotentialSection'
import ServiceSteps from '@/components/ServiceSteps'
import CompanyStatus from '@/components/CompanyStatus'
import WhatsAppSection from '@/components/WhatsAppSection'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>XTYL Digital - Assessoria de Marketing</title>
        <meta name="description" content="XTYL Digital - Sua assessoria de marketing especializada em aumentar suas vendas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-xtyl-black">
        <Header />

        {/* Hero Section */}
        <section className="h-screen flex flex-col items-center justify-center px-4 relative">
          <div className="text-center max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20"
            >
              <p className="text-xtyl-white text-sm font-medium">Procurando uma Assessoria de Marketing?</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-clash-display font-bold text-xtyl-white mb-4 drop-shadow-lg"
            >
              O X da Questão é{' '}
              <span className="bg-gradient-to-r from-[#40E0D0] to-[#4ADE80] text-transparent bg-clip-text">
                Vender Mais
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-12 text-shadow"
            >
              Tenha uma equipe especializada para o seu sucesso.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col md:flex-row items-center justify-center gap-4"
            >
              <Link
                href="https://wa.me/seu-numero"
                className="bg-gradient-to-r from-[#40E0D0] to-[#4ADE80] hover:opacity-90 text-xtyl-black font-medium px-8 py-3 rounded-full flex items-center gap-2 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2Z" />
                </svg>
                Quero mais informações
              </Link>
              <Link
                href="/cases"
                className="border border-white/20 hover:bg-white/10 text-xtyl-white font-medium px-8 py-3 rounded-full transition-all hover:border-white/40 hover:scale-105 transform backdrop-blur-sm"
              >
                Ver cases de sucesso
              </Link>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-gray-400 text-sm">Scroll para descobrir</span>
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-5 h-8 border-2 border-gray-400 rounded-full flex items-start justify-center p-1"
            >
              <div className="w-1 h-2 bg-gray-400 rounded-full" />
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Cases Section */}
        <CaseStudies />

        {/* Onboarding Section */}
        <OnboardingSection />

        {/* Serviços Principais */}
        <ServicesSection />

        {/* Serviços Adicionais */}
        <AdditionalServicesSection />

        {/* Potential Section */}
        <PotentialSection />

        {/* Etapas dos Nossos Serviços */}
        <ServiceSteps />

        {/* Onde está sua empresa hoje */}
        <CompanyStatus />

        {/* Seção WhatsApp */}
        <WhatsAppSection />

        {/* Botão WhatsApp */}
        <div className="fixed bottom-8 right-8 z-50">
          <Link
            href="https://wa.me/seu-numero"
            className="bg-gradient-to-r from-[#40E0D0] to-[#4ADE80] hover:opacity-90 text-xtyl-black font-medium p-4 rounded-full flex items-center gap-2 transition-all shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2Z"/>
            </svg>
            Fale Conosco
          </Link>
        </div>

        {/* Footer */}
        <footer className="bg-xtyl-black/50 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xtyl-white font-clash-display font-bold text-xl mb-4">XTYL Digital</h3>
                <p className="text-gray-400">
                  Sua assessoria de marketing especializada em aumentar suas vendas.
                </p>
              </div>
              <div>
                <h3 className="text-xtyl-white font-clash-display font-bold text-xl mb-4">Serviços</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Marketing Digital</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tráfego Pago</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gestão de Redes Sociais</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xtyl-white font-clash-display font-bold text-xl mb-4">Contato</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">WhatsApp</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xtyl-white font-clash-display font-bold text-xl mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 mt-12 pt-8 text-center">
              <p className="text-gray-400">
                © {new Date().getFullYear()} XTYL Digital. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
} 