import React, { useEffect, useRef } from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = '' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            // Só remove a classe se o elemento estiver acima da viewport (rolando para cima)
            if (entry.boundingClientRect.top > 0) {
              entry.target.classList.remove('visible');
            }
          }
        });
      },
      {
        threshold: 0.1, // Dispara quando 10% da seção está visível
        rootMargin: '-50px', // Adiciona uma margem negativa para começar a animação um pouco antes
      }
    );

    const elements = sectionRef.current?.querySelectorAll('.section-element');
    elements?.forEach((element) => observer.observe(element));

    if (sectionRef.current) {
      sectionRef.current.classList.add('section-container');
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default SectionWrapper; 