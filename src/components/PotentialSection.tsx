import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function PotentialSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section className="py-20 px-4 relative bg-xtyl-black">
      <div className="container mx-auto max-w-6xl relative">
        {/* Card Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onMouseMove={handleMouseMove}
          className="backdrop-blur-xl bg-[#1A2C2C]/30 border border-[#40E0D0]/20 rounded-3xl p-8 md:p-12 overflow-hidden relative group"
        >
          {/* Gradiente que segue o cursor */}
          <div
            className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(circle 200px at var(--x) var(--y), rgba(64, 224, 208, 0.15), transparent 100%)',
              width: '100%',
              height: '100%',
              left: 0,
              top: 0,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              '--x': `${mousePosition.x}px`,
              '--y': `${mousePosition.y}px`
            } as React.CSSProperties}
          />

          {/* Conteúdo */}
          <div className="relative z-10">
            <h2 className="text-[#40E0D0] text-3xl md:text-4xl font-clash-display font-bold mb-6">
              Potencial
            </h2>
            <p className="text-white text-lg md:text-xl leading-relaxed max-w-3xl">
              Se seu time de venda está <span className="text-[#40E0D0]">organizado</span>, o 
              resultado do tráfego pago vai ser <span className="text-[#40E0D0]">potencializado</span>.
            </p>
          </div>

          {/* Círculo decorativo */}
          <div className="absolute -bottom-12 -right-12 w-24 h-24 border border-[#40E0D0]/20 rounded-full" />
        </motion.div>

        {/* Gradientes de fundo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#40E0D0] rounded-full filter blur-[128px] opacity-5 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4ADE80] rounded-full filter blur-[128px] opacity-5 animate-pulse delay-1000" />
        </div>
      </div>
    </section>
  );
} 