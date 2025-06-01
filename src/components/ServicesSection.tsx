import React from 'react';
import { motion } from 'framer-motion';

interface Service {
  title: string;
  description: string[];
}

const services: Service[] = [
  {
    title: 'Tráfego Pago',
    description: [
      'Gestão dos seus anúncios online no Google, Instagram, LinkedIn, Pinterest, youtube e mais.',
      'Atraia mais clientes para seu funil de vendas.',
      'Abasteça seu canal mensal com oportunidades de vendas.',
      'Tenha mais previsibilidade e mensure o retorno do seu investimento.'
    ]
  },
  {
    title: 'CRM',
    description: [
      'Gerencie o relacionamento com seu cliente em um só lugar.',
      'Visualize todo o seu funil de vendas.',
      'Mantenha conexão com seus clientes e venda mais.',
      'Faça remarketing, downsell, crosssell e campanhas promocionais.'
    ]
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 relative min-h-screen flex items-center bg-gradient-to-b from-xtyl-black to-[#1A2C2C]">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-1/4 top-1/4 w-96 h-96 bg-[#40E0D0] rounded-full filter blur-[128px] opacity-20 animate-pulse" />
        <div className="absolute -right-1/4 bottom-1/4 w-96 h-96 bg-[#4ADE80] rounded-full filter blur-[128px] opacity-20 animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Phone Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -top-12 -left-12 bg-white rounded-xl p-4 shadow-lg backdrop-blur-sm bg-opacity-10 border border-white/10"
            >
              <div className="text-[#40E0D0] font-bold">Vendas</div>
              <div className="text-2xl font-bold text-white">R$ 618.000</div>
            </motion.div>

            {/* Main Phone Image */}
            <div className="relative mx-auto max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-[#40E0D0] to-transparent opacity-30 rounded-[40px]" />
              <img
                src="/dashboard-mockup.png"
                alt="Dashboard"
                className="w-full h-auto relative z-10"
              />
            </div>

            {/* Stats Element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-[#1A2C2C] rounded-xl p-4 shadow-lg backdrop-blur-sm border border-[#40E0D0]/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#40E0D0] rounded-full" />
                <div className="text-white">14.322 Conversões</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className="text-sm text-[#40E0D0] px-4 py-1 rounded-full bg-[#1A2C2C]/50 backdrop-blur-sm inline-block">
                Nossos Serviços
              </span>
              <h2 className="text-4xl md:text-5xl font-clash-display font-bold text-white">
                O que a <span className="text-[#40E0D0]">XTYL</span><br />
                pode fazer por você?
              </h2>
            </motion.div>

            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                  className="backdrop-blur-xl bg-[#1A2C2C]/30 border border-[#40E0D0]/20 rounded-2xl p-6 hover:bg-[#1A2C2C]/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * (i + 1) }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <svg
                          className="w-5 h-5 text-[#40E0D0] mt-1 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 