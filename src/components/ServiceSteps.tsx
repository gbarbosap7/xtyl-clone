import React from 'react';
import { motion } from 'framer-motion';

const ServiceSteps = () => {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico',
      description: 'Análise completa do seu negócio e identificação das oportunidades de crescimento.'
    },
    {
      number: '02',
      title: 'Estratégia',
      description: 'Desenvolvimento do plano de ação personalizado para atingir seus objetivos.'
    },
    {
      number: '03',
      title: 'Implementação',
      description: 'Execução das estratégias definidas com acompanhamento constante.'
    },
    {
      number: '04',
      title: 'Otimização',
      description: 'Análise de resultados e ajustes para maximizar o desempenho.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-xtyl-black to-[#1A2C2C]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-clash-display font-bold text-white mb-6">
            Como Trabalhamos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Nossa metodologia é focada em resultados e transparência em cada etapa do processo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-[#40E0D0] text-6xl font-clash-display font-bold mb-6 block">
                {step.number}
              </span>
              <h3 className="text-2xl font-clash-display font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSteps; 