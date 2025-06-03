import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ServiceSteps = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Aplicando spring animation para suavizar o scroll
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
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
            {/* Container da Timeline */}
            <div className="absolute left-[22px] top-[40px] bottom-[40px] w-[2px] flex flex-col">
              {/* Pontos de início e fim */}
              <div className="absolute -top-[20px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-xtyl-primary" />
              <div className="absolute -bottom-[20px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-xtyl-primary/20" />
              
              {/* Linha de fundo (não preenchida) */}
              <div className="absolute inset-0 bg-xtyl-primary/10" />
              
              {/* Linha de progresso */}
              <motion.div
                className="absolute top-0 w-full bg-xtyl-primary origin-top"
                style={{
                  scaleY: smoothProgress,
                  height: '100%'
                }}
                initial={{ scaleY: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  restDelta: 0.001
                }}
              />
            </div>

            {/* Steps */}
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-12 mb-16 last:mb-0"
              >
                {/* Círculo na Timeline */}
                <motion.div
                  className="absolute left-[22px] -translate-x-1/2 w-6 h-6 flex items-center justify-center rounded-full border-2 border-xtyl-primary"
                  style={{
                    backgroundColor: useTransform(
                      scrollYProgress,
                      [
                        Math.max(0, (index - 0.5) / steps.length),
                        (index + 0.5) / steps.length
                      ],
                      ["#1A2C2C", "#40E0D0"]
                    )
                  }}
                />
                
                {/* Conteúdo */}
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 card-hover ml-8">
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
    </section>
  );
};

export default ServiceSteps; 