
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4 text-center text-sm">
        <p className="mb-4">&copy; {currentYear} Segredo do Emagrecimento. Todos os direitos reservados.</p>
        <p className="max-w-4xl mx-auto">
          <strong>Disclaimer:</strong> Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados. Os resultados podem variar de pessoa para pessoa.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
