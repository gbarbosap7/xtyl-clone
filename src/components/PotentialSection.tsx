import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

interface MousePosition {
  x: number;
  y: number;
}

export default function PotentialSection() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <SectionWrapper className="py-20 px-4 relative bg-xtyl-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl p-8 border border-white/10"
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight Effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent)`,
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-clash-display font-bold text-white mb-6">
              Potencial
            </h2>
            <p className="text-xl text-gray-300">
              Se seu time de venda está organizado, o resultado do tráfego pago vai ser potencializado.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
} 