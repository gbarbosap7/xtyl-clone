import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const CompanyStatus = () => {
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
      ]
    },
    {
      level: 1,
      title: 'Assessoria de Marketing',
      description: 'Empresa com produto validado e carteira de clientes estabelecida, buscando iniciar um crescimento mais acelerado.',
      features: [
        'Tráfego pago',
        'Sites/Landing Pages',
        'Validação de canais'
      ]
    },
    {
      level: 0,
      title: 'Mentoria | Consultoria',
      description: 'Empresa em fase inicial, ainda validando o produto.',
      features: [
        'Estratégia',
        'Validação de produto',
        'Planejamento inicial'
      ]
    }
  ];

  return (
    <section className="py-20 bg-xtyl-black relative">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Status da Empresa"
          title="Onde sua Empresa está hoje?"
          highlightedWord="Empresa"
        />

        <div className="relative">
          {/* Linha conectora vertical */}
          <div className="absolute left-[30px] md:left-[120px] top-0 bottom-0 w-px bg-xtyl-primary/20" />

          {/* Níveis */}
          <div className="space-y-24">
            {levels.map((level, index) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex items-start gap-8"
              >
                {/* Nível */}
                <div className="flex-shrink-0 w-16 md:w-32">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">Nível</span>
                    <span className="text-2xl md:text-3xl font-clash-display font-bold text-xtyl-primary">
                      {level.level}
                    </span>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="flex-grow">
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                    <h3 className="text-2xl font-clash-display font-bold text-xtyl-primary mb-4">
                      {level.title}
                    </h3>
                    <p className="text-gray-400 mb-6">
                      {level.description}
                    </p>
                    <ul className="space-y-2">
                      {level.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <span className="mr-2 text-xtyl-primary">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Círculo na linha */}
                <div className="absolute left-[26px] md:left-[116px] top-6 w-8 h-8 bg-xtyl-black border-2 border-xtyl-primary rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStatus; 