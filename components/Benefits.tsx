
import React from 'react';
import { benefitsData } from '../constants';
import type { Benefit } from '../types';

interface BenefitCardProps {
  benefit: Benefit;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ benefit }) => (
  <div className="text-center p-6 bg-white rounded-lg shadow-lg">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 mx-auto mb-4">
      <i className={`${benefit.icon} text-3xl text-emerald-600`}></i>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
    <p className="text-gray-600">{benefit.description}</p>
  </div>
);

const Benefits: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Por Que Nosso Método é Diferente?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
