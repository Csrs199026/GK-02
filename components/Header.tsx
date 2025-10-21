
import React from 'react';
import { GROUP_LINK } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-emerald-500 text-white py-3 px-4 shadow-md z-50">
      <a href={GROUP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3">
        <i className="fab fa-whatsapp text-2xl"></i>
        <span className="font-bold text-lg text-center">Emagreça urgente Grupo</span>
      </a>
    </header>
  );
};

export default Header;
