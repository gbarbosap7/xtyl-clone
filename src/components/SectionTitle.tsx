import React from 'react';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  highlightedWord: string;
  className?: string;
}

const SectionTitle = ({ subtitle, title, highlightedWord, className = '' }: SectionTitleProps) => {
  // Divide o título em duas partes baseado na palavra destacada
  const titleParts = title.split(highlightedWord);
  
  return (
    <div className={`mb-16 ${className}`}>
      {/* Cápsula Glassmorphism */}
      <div className="inline-block bg-white/5 backdrop-blur-xl rounded-full px-6 py-2 border border-white/10 mb-8">
        <p className="text-xtyl-white text-sm">{subtitle}</p>
      </div>

      <h2 className="text-4xl md:text-6xl font-clash-display font-bold">
        {titleParts[0]}
        <span className="text-xtyl-primary">{highlightedWord}</span>
        {titleParts[1]}
      </h2>
    </div>
  );
};

export default SectionTitle; 