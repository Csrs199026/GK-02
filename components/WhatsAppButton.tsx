import React from 'react';
import { GROUP_LINK } from '../constants';

// Inform TypeScript about the global kwaiq object from the Kwai pixel script
declare const kwaiq: any;

interface WhatsAppButtonProps {
  text: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ text, className = '', variant = 'primary' }) => {
  const baseClasses = 'inline-block w-full max-w-md text-center font-bold uppercase tracking-wider py-4 px-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 animate-bounce';
  
  const variantClasses = {
    primary: 'bg-emerald-500 hover:bg-emerald-600 text-white',
    secondary: 'bg-white hover:bg-gray-100 text-emerald-600',
  };

  const handleTrackClick = () => {
    if (typeof kwaiq !== 'undefined') {
      kwaiq.track('addToCart');
    }
  };

  return (
    <a
      href={GROUP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={handleTrackClick}
    >
      {text}
    </a>
  );
};

export default WhatsAppButton;