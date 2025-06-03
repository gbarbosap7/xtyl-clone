import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import SectionTitle from './SectionTitle';

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
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Título e Descrição */}
          <div className="md:w-1/3">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 card-hover">
              <SectionTitle
                subtitle="Nossos Serviços"
                title="Tudo o que fazemos é baseado em 4 Pilares"
                highlightedWord="4 Pilares"
                className="mb-6"
              />
              <p className="text-gray-300">
                Nossa metodologia é fundamentada em quatro pilares essenciais que garantem resultados consistentes e crescimento sustentável para nossos clientes.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="md:w-2/3 relative">
            {/* Steps */}
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative pl-12 ${index === steps.length - 1 ? '' : 'mb-[8rem]'} flex items-start`}
              >
                {/* Círculo na Timeline */}
                <motion.div
                  className="absolute left-[22px] top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 flex items-center justify-center rounded-full border-2 border-xtyl-primary z-10"
                  style={{
                    backgroundColor: useTransform(
                      scrollYProgress,
                      [
                        Math.max(0, (index - 0.5) / steps.length),
                        (index + 0.5) / steps.length
                      ],
                      ["#1A2C2C", "#40E0D0"]
                    ),
                    boxShadow: useTransform(
                      scrollYProgress,
                      [
                        Math.max(0, (index - 0.5) / steps.length),
                        (index + 0.5) / steps.length
                      ],
                      [
                        "0 0 0 rgba(64, 224, 208, 0)",
                        "0 0 20px rgba(64, 224, 208, 0.6)"
                      ]
                    )
                  }}
                />

                {/* Linha vertical (apenas para o primeiro item) */}
                {index === 0 && (
                  <div 
                    className="absolute left-[22px] w-[2px]" 
                    style={{ 
                      top: '50%',
                      height: `calc(${8 * (steps.length - 1)}rem + 8rem)`,
                      transform: 'translateX(-50%)'
                    }}
                  >
                    {/* Linha de fundo (não preenchida) */}
                    <div className="absolute inset-0 bg-xtyl-primary/10" />
                    
                    {/* Linha de progresso */}
                    <motion.div
                      className="absolute top-0 w-full bg-xtyl-primary"
                      style={{
                        height: useTransform(
                          scrollYProgress,
                          [0, 0.2, 0.8, 1],
                          [0, 0.4, 0.9, 1]
                        ),
                        opacity: useTransform(
                          scrollYProgress,
                          [0, 0.5, 1],
                          [0.4, 0.6, 0.8]
                        )
                      }}
                    />
                  </div>
                )}
                
                {/* Conteúdo */}
                <div className="flex-1 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 card-hover">
                  <h3 className="text-2xl font-clash-display font-bold mb-4 text-xtyl-primary">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
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