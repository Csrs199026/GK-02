
import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const CTASection: React.FC = () => {
  return (
    <section className="bg-emerald-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Pronta Para Começar Sua Transformação?</h2>
        <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto mb-8">
          Não espere mais para ter o corpo que você sempre sonhou. Junte-se a milhares de mulheres que já mudaram de vida. O próximo sucesso pode ser o seu!
        </p>
        <div className="flex justify-center">
            <WhatsAppButton text="SIM, QUERO EMAGRECER AGORA!" variant="secondary" className="text-xl"/>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
