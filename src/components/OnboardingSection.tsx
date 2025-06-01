import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Option {
  id: number;
  text: string;
}

const options: Option[] = [
  {
    id: 1,
    text: 'Aumentar o retorno dos seus investimentos em anúncios pagos'
  },
  {
    id: 2,
    text: 'Atrair leads qualificados e aumentar conversões'
  },
  {
    id: 3,
    text: 'Elevar a performance de suas campanhas com estratégias avançadas de tráfego pago'
  },
  {
    id: 4,
    text: 'Conectar-se de forma eficaz com seu público-alvo'
  },
  {
    id: 5,
    text: 'Criar estratégias que se destacam e geram resultados'
  }
];

export default function OnboardingSection() {
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

  const toggleOption = (id: number) => {
    setSelectedOptions(prev => 
      prev.includes(id) 
        ? prev.filter(optionId => optionId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 px-4 relative min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-20">
          <img 
            src="/rocket.png" 
            alt="Rocket" 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-xtyl-black via-xtyl-black/95 to-transparent z-10" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-20">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm text-[#40E0D0] mb-2 inline-block px-4 py-1 rounded-full bg-[#1A2C2C]/50 backdrop-blur-sm"
          >
            Dúvidas?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-clash-display font-bold text-white mb-6"
          >
            Está na dúvida se a <span className="text-[#40E0D0]">XTYL</span> é<br />
            ideal para você?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 mb-12"
          >
            Marque as alternativas que mais condizem com a sua necessidade atual:
          </motion.p>

          <div className="space-y-4">
            {options.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 3) }}
              >
                <button
                  onClick={() => toggleOption(option.id)}
                  className={`w-full text-left p-4 rounded-xl backdrop-blur-sm border transition-all duration-300
                    ${selectedOptions.includes(option.id)
                      ? 'bg-[#40E0D0]/20 border-[#40E0D0] shadow-[0_0_20px_rgba(64,224,208,0.1)]'
                      : 'bg-[#1A2C2C]/30 border-[#40E0D0]/20 hover:bg-[#1A2C2C]/50'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center
                      ${selectedOptions.includes(option.id)
                        ? 'border-[#40E0D0] bg-[#40E0D0]'
                        : 'border-[#40E0D0]/50'
                      }`}
                    >
                      {selectedOptions.includes(option.id) && (
                        <motion.svg
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-3 h-3 text-black"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </motion.svg>
                      )}
                    </div>
                    <span className="text-white">{option.text}</span>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8"
          >
            <a
              href="https://wa.me/seu-numero"
              className="inline-flex items-center gap-2 bg-[#40E0D0] hover:bg-[#3ECE70] text-black font-medium px-8 py-3 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.56 20.16 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.52 3.67 12.05 3.67Z" />
              </svg>
              Entrar em Contato
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 