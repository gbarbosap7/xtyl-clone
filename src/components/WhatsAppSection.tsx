import React from 'react';
import Link from 'next/link';
import SectionTitle from './SectionTitle';

const WhatsAppSection = () => {
  return (
    <section className="py-20 bg-xtyl-black relative">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Fale Conosco"
          title="Ficou com alguma Dúvida?"
          highlightedWord="Dúvida"
          className="text-center"
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#0F1A1A] backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
            <p className="text-gray-400 text-lg mb-8">
              Estamos prontos para ajudar! Entre em contato conosco e tire todas as suas dúvidas. Nossa equipe está à disposição para oferecer o suporte que você precisa.
            </p>
            <Link
              href="https://wa.me/seu-numero"
              className="inline-flex items-center gap-2 bg-[#40E0D0] hover:bg-[#3BCDC0] text-xtyl-black font-medium px-8 py-4 rounded-full transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2Z"/>
              </svg>
              Clique aqui e entre em contato
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection; 