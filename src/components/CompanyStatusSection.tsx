import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaSeedling } from 'react-icons/fa';

const levels = [
  {
    icon: <FaRocket className="w-8 h-8 text-[#40E0D0]" />,
    title: 'Avançado',
    description: 'Seu negócio já está estruturado e precisa escalar'
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-[#40E0D0]" />,
    title: 'Intermediário',
    description: 'Você já tem uma base, mas precisa organizar melhor os processos'
  },
  {
    icon: <FaSeedling className="w-8 h-8 text-[#40E0D0]" />,
    title: 'Iniciante',
    description: 'Você está começando agora e precisa estruturar seu negócio'
  }
];

export default function CompanyStatusSection() {
  return (
    <section className="py-20 px-4 bg-xtyl-black">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-clash-display font-bold text-white text-center mb-12"
          >
            Onde sua Empresa está hoje?
          </motion.h2>

          <div className="grid gap-6">
            {levels.map((level, index) => (
              <motion.div
                key={level.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl p-8 border border-white/10 card-hover"
              >
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    {level.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-clash-display font-bold text-white mb-2">
                      {level.title}
                    </h3>
                    <p className="text-gray-300">
                      {level.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 