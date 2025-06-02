import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceCard[] = [
  {
    title: 'Sites e Landing Pages',
    description: 'Uma página web otimizada para converter visitantes em clientes ou leads, utilizando elementos como formulários e botões de chamada para ação.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
      </svg>
    )
  },
  {
    title: 'Criativos para Anúncios',
    description: 'Elementos visuais ou textuais utilizados em campanhas de publicidade para atrair a atenção do público-alvo, transmitir uma mensagem convincente e promover produtos, serviços ou marcas.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19H3V5H21V19Z" fill="currentColor"/>
        <path d="M15.14 12.86L11.14 16.86L9 14.72L6.14 17.58" fill="currentColor"/>
        <path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="currentColor"/>
      </svg>
    )
  },
  {
    title: 'Consultoria',
    description: 'Análise estratégica personalizada para identificar oportunidades de crescimento, otimizar processos e orientar decisões que impulsionem o sucesso do seu negócio.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM13 19H11V17H13V19ZM15.07 11.25L14.17 12.17C13.45 12.9 13 13.5 13 15H11V14.5C11 13.4 11.45 12.4 12.17 11.67L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9H8C8 6.79 9.79 5 12 5C14.21 5 16 6.79 16 9C16 9.88 15.64 10.68 15.07 11.25Z" fill="currentColor"/>
      </svg>
    )
  },
  {
    title: 'Dados',
    description: 'Transformação de dados brutos em insights acionáveis, permitindo decisões informadas e estratégias de marketing mais eficazes.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor"/>
      </svg>
    )
  },
  {
    title: 'Tecnologia',
    description: 'Implementação de soluções tecnológicas inovadoras para automatizar processos, otimizar campanhas e ampliar a eficiência operacional.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 18C21.1 18 22 17.1 22 16V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V16C2 17.1 2.9 18 4 18H0V20H24V18H20ZM4 6H20V16H4V6Z" fill="currentColor"/>
      </svg>
    )
  }
];

export default function AdditionalServicesSection() {
  return (
    <SectionWrapper className="py-20 px-4 relative bg-xtyl-black border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Landing Pages Preview */}
          <div className="section-element col-span-1 md:col-span-2 lg:col-span-2 relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#40E0D0]/10 to-transparent" />
            <img
              src="/landing-preview.jpg"
              alt="Landing Page Preview"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          {/* Service Cards */}
          {services.map((service, index) => (
            <div
              key={service.title}
              className="section-element backdrop-blur-xl bg-[#1A2C2C]/30 border border-[#40E0D0]/20 rounded-3xl p-6 hover:bg-[#1A2C2C]/40 transition-all duration-300 group"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="text-[#40E0D0] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#40E0D0] rounded-full filter blur-[128px] opacity-10 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4ADE80] rounded-full filter blur-[128px] opacity-10 animate-pulse delay-1000" />
        </div>
      </div>
    </SectionWrapper>
  );
} 