
import React from 'react';
import { testimonialsData } from '../constants';
import type { Testimonial } from '../types';
import WhatsAppButton from './WhatsAppButton';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col h-full">
    <i className="fas fa-quote-left text-emerald-500 text-2xl mb-4"></i>
    <p className="text-gray-600 mb-4 flex-grow">"{testimonial.quote}"</p>
    <div className="mt-auto">
      <p className="font-bold text-gray-900">{testimonial.name}</p>
      <p className="text-emerald-600 font-semibold">{testimonial.weightLost}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Nossos depoimentos são reais, nada Comprado!</h2>
        <p className="text-lg text-gray-600 mb-12">São Mulheres como você, que estavam sem saber o que fazer até conhecer o GraoKiseca!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
        <div className="flex justify-center">
            <WhatsAppButton text="QUERO ENTRAR NO GRUPO VIP!" className="text-xl"/>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
