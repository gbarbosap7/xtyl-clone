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
              className="inline-block bg-white/5 rounded-full px-6 py-2 mb-8"
            >
              <p className="text-xtyl-white text-sm">Procurando uma Assessoria de Marketing?</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-clash-display font-bold text-xtyl-white mb-4"
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
              className="text-lg md:text-xl text-gray-400 mb-12"
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
                className="bg-gradient-to-r from-[#40E0D0] to-[#4ADE80] hover:opacity-90 text-xtyl-black font-medium px-8 py-3 rounded-full flex items-center gap-2 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.56 20.16 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.52 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
                </svg>
                Quero mais informações
              </Link>
              <Link
                href="/cases"
                className="border border-white/20 hover:bg-white/10 text-xtyl-white font-medium px-8 py-3 rounded-full transition-colors"
              >
                Ver cases de sucesso
              </Link>
            </motion.div>
          </div>
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