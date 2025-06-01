import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CaseStudy {
  id: string;
  name: string;
  title: string;
  description: string;
  additionalInfo: string;
  metrics: {
    primary: {
      value: string;
      label: string;
    };
    secondary: {
      value: string;
      label: string;
    };
  };
  image: string;
  tools: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'vita',
    name: 'Colégio Vita',
    title: '+ de 1400 Leads Gerados',
    description: 'Para aumentar o número de matrículas e autoridade do colégio, nossa equipe desenvolveu uma estratégia completa de escala de público através de campanhas de engajamento, viralização de vídeo e estratégia de conteúdo, realizando campanhas de conversão no Instagram e no Google.',
    additionalInfo: 'Além disso, foi implementado um CRM e a equipe de vendas recebeu o treinamento necessário para utilizá-lo de forma eficiente.',
    metrics: {
      primary: {
        value: '+ de 120%',
        label: 'De Meta Inicial em Matrículas'
      },
      secondary: {
        value: '+ de 300.000',
        label: 'Pessoas alcançadas'
      }
    },
    image: '/case-vita.jpg',
    tools: ['pipedrive', 'meta']
  },
  {
    id: 'ark',
    name: 'ARK Concept',
    title: '+ de 2000 Leads Qualificados',
    description: 'Transformamos a presença digital da ARK Concept com uma estratégia focada em arquitetura e design. Implementamos campanhas segmentadas no Meta Ads e Google Ads, além de criar conteúdo especializado para o setor.',
    additionalInfo: 'O projeto incluiu a criação de landing pages otimizadas e um funil de vendas completo, resultando em um aumento significativo nas conversões.',
    metrics: {
      primary: {
        value: '+ de 150%',
        label: 'Aumento em Vendas'
      },
      secondary: {
        value: '+ de 500.000',
        label: 'Impressões geradas'
      }
    },
    image: '/case-ark.jpg',
    tools: ['meta', 'google-ads']
  },
  {
    id: 'arion',
    name: 'Arion',
    title: '+ de 3000 Conversões',
    description: 'Desenvolvemos uma estratégia omnichannel para a Arion, combinando SEO, mídia paga e marketing de conteúdo. O foco foi criar uma presença digital consistente e gerar leads qualificados de forma escalável.',
    additionalInfo: 'Implementamos automação de marketing com HubSpot e integramos com o CRM existente, otimizando todo o processo de vendas.',
    metrics: {
      primary: {
        value: '+ de 200%',
        label: 'ROI em Campanhas'
      },
      secondary: {
        value: '+ de 1M',
        label: 'Alcance orgânico'
      }
    },
    image: '/case-arion.jpg',
    tools: ['hubspot', 'meta']
  }
];

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(caseStudies[0]);
  const [isChanging, setIsChanging] = useState(false);

  const handleCaseChange = (newCase: CaseStudy) => {
    if (newCase.id === activeCase.id) return;
    setIsChanging(true);
    setActiveCase(newCase);
    setTimeout(() => setIsChanging(false), 800);
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm text-[#40E0D0] mb-2 inline-block"
          >
            Cases de Sucesso
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-clash-display font-bold text-white"
          >
            Os <span className="text-[#40E0D0]">Resultados</span>
            <br />
            falam pela gente
          </motion.h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {caseStudies.map((caseStudy, index) => (
            <motion.button
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              onClick={() => handleCaseChange(caseStudy)}
              className={`px-6 py-2 rounded-full text-white transition-all duration-500
                backdrop-blur-lg border relative overflow-hidden ${
                  activeCase.id === caseStudy.id
                    ? 'bg-[#40E0D0]/20 border-[#40E0D0] scale-105'
                    : 'bg-[#1A2C2C]/30 border-[#40E0D0]/20 hover:bg-[#1A2C2C]/50'
                }`}
            >
              {activeCase.id === caseStudy.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#40E0D0]/10 rounded-full"
                  transition={{ duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{caseStudy.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#1A2C2C]/30 backdrop-blur-xl 
              border border-[#40E0D0]/20 rounded-3xl p-8 relative overflow-hidden
              ${isChanging ? 'pointer-events-none' : ''}`}
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#40E0D0]/5 to-transparent" />

            {/* Content */}
            <div className="space-y-6 relative z-10">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl font-clash-display font-bold text-[#40E0D0] [text-shadow:_0_2px_10px_rgb(64_224_208_/_20%)]"
              >
                {activeCase.title}
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-300 leading-relaxed"
              >
                {activeCase.description}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-300 leading-relaxed"
              >
                {activeCase.additionalInfo}
              </motion.p>

              {/* Metrics */}
              <div className="flex gap-8 mt-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="p-4 bg-[#1A2C2C]/50 rounded-xl backdrop-blur-sm"
                >
                  <div className="text-[#40E0D0] font-clash-display text-2xl font-bold [text-shadow:_0_2px_10px_rgb(64_224_208_/_20%)]">
                    {activeCase.metrics.primary.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {activeCase.metrics.primary.label}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="p-4 bg-[#1A2C2C]/50 rounded-xl backdrop-blur-sm"
                >
                  <div className="text-[#40E0D0] font-clash-display text-2xl font-bold [text-shadow:_0_2px_10px_rgb(64_224_208_/_20%)]">
                    {activeCase.metrics.secondary.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {activeCase.metrics.secondary.label}
                  </div>
                </motion.div>
              </div>

              {/* Logos */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center gap-4 mt-8"
              >
                {activeCase.tools.map((tool) => (
                  <img
                    key={tool}
                    src={`/${tool}-logo.svg`}
                    alt={tool}
                    className="h-6 opacity-50 hover:opacity-100 transition-opacity"
                  />
                ))}
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2C2C] via-transparent to-transparent opacity-50" />
              <img
                src={activeCase.image}
                alt={`Case ${activeCase.name}`}
                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
} 