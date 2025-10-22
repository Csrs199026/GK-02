import React, { useState } from 'react';
import WhatsAppButton from './WhatsAppButton';

const Hero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);

  const videoId = '5vGYxFKqmgk';
  const baseSrc = `https://www.youtube.com/embed/${videoId}?si=EDTU2_T-iLgGVQ45`;
  
  // A reprodução automática deve ser silenciada na maioria dos navegadores. Ativamos o som na interação do usuário.
  const mutedSrc = `${baseSrc}&autoplay=1&mute=1&playsinline=1&loop=1&playlist=${videoId}&controls=0&rel=0`;
  const unmutedSrc = `${baseSrc}&autoplay=1&mute=0&playsinline=1&controls=1&rel=0`;

  const handleUnmute = () => {
    setIsMuted(false);
  };

  return (
    <section className="bg-gray-50 pt-32 pb-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Elimine Peso sem dieta e exercícios, com o Grão secreto + mais potente que qualquer Cápsula... Porém Natural e seguro!
        </h1>
        <p className="text-red-600 font-bold text-xl mb-6 uppercase">suplemento natural poderoso</p>

        {/* Seção do Vídeo */}
        <div className="relative max-w-4xl mx-auto my-8 shadow-lg" style={{ paddingBottom: '56.25%' /* Proporção 16:9 */, height: 0 }}>
          <iframe
            key={isMuted ? 'muted' : 'unmuted'} // Força a remontagem na mudança para aplicar novos parâmetros de src
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={isMuted ? mutedSrc : unmutedSrc}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          {isMuted && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 cursor-pointer rounded-lg"
              onClick={handleUnmute}
              aria-label="Ativar som do vídeo"
            >
              <button className="bg-white text-gray-900 font-bold py-3 px-6 rounded-full flex items-center space-x-2 text-lg shadow-md transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white animate-pulse-scale">
                <i className="fas fa-volume-up mr-2"></i>
                <span>Ativar Som</span>
              </button>
            </div>
          )}
        </div>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Perca peso de forma natural e surpreendentemente rápida, sem precisar de dietas malucas ou rotinas de exercícios exaustivas. O método que vai mudar sua vida está aqui.
        </p>
        <div className="flex justify-center">
            <WhatsAppButton text="QUERO ENTRAR NO GRUPO VIP!" className="text-xl"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;