import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const levels = [
  {
    level: 2,
    title: 'Assessoria Avançada',
    description: 'Empresa com faturamento sólido e time comercial estruturado, focada em escalar os resultados.',
    services: [
      'Dados e análises',
      'Estratégia personalizada',
      'Automação de marketing',
      'CRM e negociação'
    ]
  },
  {
    level: 1,
    title: 'Assessoria de Marketing',
    description: 'Empresa com produto validado e cartela de clientes estabelecida, buscando iniciar um crescimento mais acelerado.',
    services: [
      'Tráfego pago',
      'Sites/Landing Pages',
      'Validação de canais'
    ]
  },
  {
    level: 0,
    title: 'Mentoria | Consultoria',
    description: 'Empresa em fase inicial, ainda validando o produto.',
    services: [
      'Estratégia',
      'Validação de produto',
      'Planejamento inicial'
    ]
  }
];

export default function CompanyStatusSection() {
  return (
    <SectionWrapper className="py-20 px-4 relative bg-xtyl-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-clash-display font-bold">
            Onde sua{' '}
            <span className="text-[#40E0D0]">Empresa</span>{' '}
            está hoje?
          </h2>
        </motion.div>

        <div className="relative">
          {/* Linha conectora vertical */}
          <div className="absolute left-[30px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#40E0D0] to-transparent" />

          {levels.map((level, index) => (
            <motion.div
              key={level.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0 ml-16"
            >
              {/* Nível indicador */}
              <div className="absolute -left-16 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#40E0D0] text-xtyl-black font-bold">
                {level.level}
              </div>

              <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl p-8 border border-white/5 card-hover">
                <div className="space-y-4">
                  <h3 className="text-2xl font-clash-display font-bold text-white">
                    {level.title}
                  </h3>
                  <p className="text-gray-300">
                    {level.description}
                  </p>
                  <ul className="space-y-2">
                    {level.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-gray-300">
                        <span className="mr-2">•</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
} 