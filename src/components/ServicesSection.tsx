import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import SectionWrapper from './SectionWrapper';

interface Service {
  title: string;
  description: string[];
}

interface MousePosition {
  x: number;
  y: number;
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
  const [mousePosition, setMousePosition] = useState<{ [key: string]: MousePosition }>({});

  const handleMouseMove = (e: React.MouseEvent, serviceTitle: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      ...mousePosition,
      [serviceTitle]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    });
  };

  return (
    <SectionWrapper className="py-20 px-4 relative bg-xtyl-black">
      {/* Static Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-1/4 top-1/4 w-96 h-96 bg-[#40E0D0] rounded-full filter blur-[128px] opacity-20" />
        <div className="absolute -right-1/4 bottom-1/4 w-96 h-96 bg-[#4ADE80] rounded-full filter blur-[128px] opacity-20" />
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Phone Image */}
          <div className="section-element relative">
            {/* Floating Elements */}
            <div className="absolute -top-12 -left-12 bg-white rounded-xl p-4 shadow-lg backdrop-blur-sm bg-opacity-10 border border-white/10">
              <div className="text-[#40E0D0] font-bold">Vendas</div>
              <div className="text-2xl font-bold text-white">R$ 618.000</div>
            </div>

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
            <div className="absolute -bottom-8 -right-8 bg-[#1A2C2C] rounded-xl p-4 shadow-lg backdrop-blur-sm border border-[#40E0D0]/20">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#40E0D0] rounded-full" />
                <div className="text-white">14.322 Conversões</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="section-element space-y-4">
              <span className="text-sm text-[#40E0D0] px-4 py-1 rounded-full bg-[#1A2C2C]/50 backdrop-blur-sm inline-block">
                Nossos Serviços
              </span>
              <h2 className="text-4xl md:text-5xl font-clash-display font-bold text-white">
                O que a <span className="text-[#40E0D0]">XTYL</span><br />
                pode fazer por você?
              </h2>
            </div>

            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="section-element relative overflow-hidden group"
                  onMouseMove={(e) => handleMouseMove(e, service.title)}
                >
                  {/* Card Background with Spotlight Effect */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl transition-all duration-300 group-hover:bg-white/10" />
                  
                  {/* Spotlight Effect */}
                  <div
                    className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle 100px at ${mousePosition[service.title]?.x || 0}px ${mousePosition[service.title]?.y || 0}px, rgba(255,255,255,0.1), transparent)`,
                      width: '100%',
                      height: '100%'
                    }}
                  />

                  {/* Content */}
                  <div className="relative p-8 border border-white/10 rounded-3xl">
                    <h3 className="text-2xl font-clash-display font-bold text-xtyl-primary mb-6">
                      {service.title}
                    </h3>
                    <ul className="space-y-4">
                      {service.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <span className="text-xtyl-primary mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
} 