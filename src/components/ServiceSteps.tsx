import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ServiceSteps = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const steps = [
    {
      title: 'Tráfego',
      description: 'Atração e criação de anúncios, e melhores estratégias como: otimização de site e jornada, definindo objetivos.'
    },
    {
      title: 'Engajamento',
      description: 'Engajamento vai além das redes sociais. Acompanhamos a jornada do usuário em todos os pontos de contato (site, vídeos, etc) para otimizar resultados.'
    },
    {
      title: 'Conversão',
      description: 'Além de atrair e converter, otimizamos todo o funil de conversão para obter resultados, aumentando receita e reduzindo custos.'
    },
    {
      title: 'Retenção',
      description: 'O pós-venda é fundamental para fidelização do cliente. Indicamos a satisfação e desenvolvemos estratégias personalizadas para garantir a recorrência dos contratos.'
    }
  ];

  return (
    <section className="py-20 bg-xtyl-black relative" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Título Fixo */}
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <h2 className="text-4xl md:text-5xl font-clash-display font-bold text-white mb-6">
                Nossos Serviços
              </h2>
              <p className="text-gray-400 text-lg">
                Tudo o que fazemos é baseado em <span className="text-xtyl-primary">4 Pilares</span>
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="md:w-2/3 relative">
            {/* Linha da Timeline */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-xtyl-primary/20">
              <motion.div
                className="absolute top-0 w-full bg-xtyl-primary"
                style={{
                  height: scrollYProgress,
                  scaleY: scrollYProgress
                }}
              />
            </div>

            {/* Steps */}
            <div className="space-y-24">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-12"
                >
                  {/* Círculo na Timeline */}
                  <div className="absolute left-0 w-8 h-8 bg-xtyl-black border-2 border-xtyl-primary rounded-full -translate-x-3" />
                  
                  {/* Conteúdo */}
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                    <h3 className="text-2xl font-clash-display font-bold text-xtyl-primary mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSteps; 