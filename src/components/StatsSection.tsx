import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-xtyl-black via-xtyl-black/50 to-xtyl-black opacity-50"></div>
      
      {/* Gradient Orbs - Static */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-xtyl-primary rounded-full filter blur-[128px] opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-xtyl-accent rounded-full filter blur-[128px] opacity-10"></div>

      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Faturamento */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="backdrop-blur-xl bg-xtyl-primary/5 border border-xtyl-primary/20 rounded-3xl p-8 hover:bg-xtyl-primary/10 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-clash-display font-bold text-white mb-4"
            >
              +40 Milhões
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-300 text-lg"
            >
              Faturados para nossos Clientes
            </motion.p>
          </motion.div>

          {/* Investimento */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="backdrop-blur-xl bg-xtyl-primary/5 border border-xtyl-primary/20 rounded-3xl p-8 hover:bg-xtyl-primary/10 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl font-clash-display font-bold text-xtyl-primary mb-4"
            >
              +1.5 Milhões
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-300 text-lg"
            >
              Investidos em anúncios
            </motion.p>
          </motion.div>

          {/* Anúncios */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="backdrop-blur-xl bg-xtyl-primary/5 border border-xtyl-primary/20 rounded-3xl p-8 hover:bg-xtyl-primary/10 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-4xl md:text-5xl font-clash-display font-bold text-xtyl-primary mb-4"
            >
              +5 Mil
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-gray-300 text-lg"
            >
              Anúncios criados no Meta
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 