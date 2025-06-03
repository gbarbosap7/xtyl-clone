import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptop, FaPaintBrush, FaChartLine, FaDatabase, FaMicrochip } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';

const services = [
  {
    icon: <FaLaptop className="w-8 h-8 text-[#40E0D0]" />,
    title: 'Sites e Landing Pages',
    description: 'Uma página web otimizada para converter visitantes em clientes ou leads, utilizando elementos como formulários e botões de chamada para ação.'
  },
  {
    icon: <FaPaintBrush className="w-8 h-8 text-[#40E0D0]" />,
    title: 'Criativos para Anúncios',
    description: 'Elementos visuais ou textuais utilizados em campanhas de publicidade para atrair a atenção do público-alvo e transmitir uma mensagem convincente e promover produtos, serviços ou marcas.'
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-[#40E0D0]" />,
    title: 'Consultoria',
    description: 'Análise estratégica personalizada para identificar oportunidades de crescimento, otimizar processos e gerar decisões que impulsionam o sucesso do seu negócio.'
  },
  {
    icon: <FaDatabase className="w-8 h-8 text-[#40E0D0]" />,
    title: 'Dados',
    description: 'Transformação de dados brutos em insights acionáveis, permitindo decisões informadas e estratégias de marketing mais eficazes.'
  },
  {
    icon: <FaMicrochip className="w-8 h-8 text-[#40E0D0]" />,
    title: 'Tecnologia',
    description: 'Implementação de soluções tecnológicas inovadoras para automatizar processos, otimizar campanhas e ampliar a eficiência operacional.'
  }
];

export default function AdditionalServicesSection() {
  return (
    <SectionWrapper className="py-20 px-4 relative bg-xtyl-black border-t border-white/5">
      <div className="container mx-auto max-w-6xl relative">
        {/* Background Gradients - Static */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#40E0D0] rounded-full filter blur-[128px] opacity-10" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4ADE80] rounded-full filter blur-[128px] opacity-10" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl p-8 card-hover border border-white/5"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  {service.icon}
                  <h3 className="text-2xl font-clash-display font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
} 