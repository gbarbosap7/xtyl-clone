import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';

const CompanyStatus = () => {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null);

  const levels = [
    {
      level: 2,
      title: 'Assessoria Avançada',
      description: 'Empresa com faturamento sólido e time comercial estruturado, focada em escalar os resultados.',
      features: [
        'Dados e análises',
        'Estratégia personalizada',
        'Automação de marketing',
        'CRM e integrações'
      ],
      icon: '🚀'
    },
    {
      level: 1,
      title: 'Assessoria de Marketing',
      description: 'Empresa com produto validado e carteira de clientes estabelecida, buscando iniciar um crescimento mais acelerado.',
      features: [
        'Tráfego pago',
        'Sites/Landing Pages',
        'Validação de canais'
      ],
      icon: '📈'
    },
    {
      level: 0,
      title: 'Mentoria | Consultoria',
      description: 'Empresa em fase inicial, ainda validando o produto.',
      features: [
        'Estratégia',
        'Validação de produto',
        'Planejamento inicial'
      ],
      icon: '🌱'
    }
  ];

  return (
    <section className="py-20 bg-xtyl-black relative">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Status da Empresa"
          title="Onde sua Empresa está hoje?"
          highlightedWord="Empresa"
          className="text-center"
        />

        <div className="mt-12 max-w-6xl mx-auto">
          {/* Cards dos Níveis */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {levels.map((level) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedLevel(level.level)}
                onMouseEnter={() => setHoveredLevel(level.level)}
                onMouseLeave={() => setHoveredLevel(null)}
                className={`
                  relative cursor-pointer group transition-all duration-300
                  ${selectedLevel === level.level ? 'scale-105' : 'hover:scale-102'}
                `}
              >
                {/* Card Background */}
                <div className={`
                  absolute inset-0 rounded-3xl transition-all duration-300
                  ${selectedLevel === level.level 
                    ? 'bg-gradient-to-br from-[#40E0D0] to-[#4ADE80] opacity-20' 
                    : 'bg-white/5 group-hover:bg-white/10'
                  }
                `} />

                {/* Card Content */}
                <div className="relative p-8 backdrop-blur-xl rounded-3xl border border-white/10">
                  {/* Level Indicator */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">{level.icon}</span>
                    <div>
                      <div className="text-gray-400 text-sm">Nível</div>
                      <div className="text-2xl font-clash-display font-bold text-xtyl-primary">
                        {level.level}
                      </div>
                    </div>
                  </div>

                  <h3 className={`
                    text-2xl font-clash-display font-bold mb-4 transition-colors duration-300
                    ${selectedLevel === level.level ? 'text-xtyl-primary' : 'text-white group-hover:text-xtyl-primary'}
                  `}>
                    {level.title}
                  </h3>

                  <p className="text-gray-400 mb-6 line-clamp-3">
                    {level.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {level.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <div className={`
                          w-1.5 h-1.5 rounded-full
                          ${selectedLevel === level.level ? 'bg-xtyl-primary' : 'bg-gray-400'}
                        `} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Call to Action */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      mt-8 w-full py-3 px-6 rounded-full font-medium transition-all duration-300
                      ${selectedLevel === level.level
                        ? 'bg-gradient-to-r from-[#40E0D0] to-[#4ADE80] text-black'
                        : 'bg-white/10 text-white hover:bg-white/20'
                      }
                    `}
                  >
                    {selectedLevel === level.level ? 'Nível Selecionado' : 'Estou Neste Nível'}
                  </motion.button>
                </div>

                {/* Selection Indicator */}
                {selectedLevel === level.level && (
                  <motion.div
                    layoutId="levelIndicator"
                    className="absolute -inset-px rounded-3xl border-2 border-xtyl-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <a
              href="https://wa.me/seu-numero"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#40E0D0] to-[#4ADE80] text-black font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2Z"/>
              </svg>
              Falar com um Especialista
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStatus; 