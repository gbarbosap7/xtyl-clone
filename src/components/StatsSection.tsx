import React from 'react';
import { motion, useInView } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

interface AnimatedNumberProps {
  value: string;
  suffix?: string;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, suffix = '', duration = 2 }) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.replace(/,/g, ''));
      const incrementTime = (duration * 1000) / end;
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  const formattedNumber = count.toLocaleString('pt-BR');
  return <span ref={ref}>{formattedNumber}{suffix}</span>;
};

const StatsSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-xtyl-black via-xtyl-black/50 to-xtyl-black opacity-50"></div>
      
      {/* Gradient Orbs - Static */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-xtyl-primary rounded-full filter blur-[128px] opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-xtyl-primary rounded-full filter blur-[128px] opacity-10"></div>

      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Faturamento */}
          <SpotlightCard>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 card-hover"
            >
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-clash-display font-bold text-xtyl-white mb-4"
              >
                +<AnimatedNumber value="40" suffix=" Milhões" />
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-300 text-lg group-hover:text-white transition-colors"
              >
                Faturados para nossos Clientes
              </motion.p>
            </motion.div>
          </SpotlightCard>

          {/* Investimento */}
          <SpotlightCard>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 card-hover"
            >
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-5xl font-clash-display font-bold text-xtyl-primary mb-4"
              >
                +<AnimatedNumber value="1.5" suffix=" Milhões" />
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-gray-300 text-lg group-hover:text-white transition-colors"
              >
                Investidos em anúncios
              </motion.p>
            </motion.div>
          </SpotlightCard>

          {/* Anúncios */}
          <SpotlightCard>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 card-hover"
            >
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-4xl md:text-5xl font-clash-display font-bold text-xtyl-primary mb-4"
              >
                +<AnimatedNumber value="5000" />
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-gray-300 text-lg group-hover:text-white transition-colors"
              >
                Anúncios criados no Meta
              </motion.p>
            </motion.div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 