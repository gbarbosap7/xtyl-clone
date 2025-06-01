import React from 'react';
import { motion } from 'framer-motion';

const CompanyStatus = () => {
  const statuses = [
    {
      title: 'Iniciando',
      description: 'Você está começando seu negócio e precisa estabelecer presença digital.',
      features: [
        'Criação de identidade digital',
        'Definição de público-alvo',
        'Estratégia inicial de marketing'
      ]
    },
    {
      title: 'Crescendo',
      description: 'Seu negócio já tem presença online, mas precisa expandir e otimizar.',
      features: [
        'Otimização de campanhas',
        'Expansão de canais',
        'Análise de métricas'
      ]
    },
    {
      title: 'Escalando',
      description: 'Você busca escalar suas operações e maximizar resultados.',
      features: [
        'Automação de processos',
        'Estratégias avançadas',
        'Expansão de mercado'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#1A2C2C] to-xtyl-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-clash-display font-bold text-white mb-6">
            Onde Está Sua Empresa Hoje?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Identificamos a melhor estratégia para cada momento do seu negócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statuses.map((status, index) => (
            <motion.div
              key={status.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-clash-display font-bold text-[#40E0D0] mb-4">
                {status.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {status.description}
              </p>
              <ul className="space-y-3">
                {status.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-400">
                    <svg
                      className="w-5 h-5 text-[#4ADE80] mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStatus; 