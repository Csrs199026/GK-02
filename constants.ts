
import type { Testimonial, Benefit } from './types';

export const GROUP_LINK = 'https://bit.ly/48ZAqoT';

export const testimonialsData: Testimonial[] = [
  {
    name: 'Ivani',
    quote: 'Eu estava com muita gordura na barriga, e derreteu tudo com o GK. Estou muito satisfeita!',
    weightLost: '20kg eliminados',
  },
  {
    name: 'Maria',
    quote: 'Ela ia na praia mas com maiô, e carregando insegurança, porém, Ela hoje usa bikine e se sente segura.',
    weightLost: '38kg eliminados',
  },
  {
    name: 'Célia',
    quote: 'Andava de cadeira de rodas com a ajuda do marido e graças ao Graokiseca eu resolvi meu problema. Esse produto é impressionante, uma bênção!',
    weightLost: '35kg eliminados',
  },
];

export const benefitsData: Benefit[] = [
  {
    icon: 'fas fa-leaf',
    title: 'Sem Dietas Restritivas',
    description: 'Coma o que você gosta, sem culpa. Nosso método funciona sem que você precise passar fome.',
  },
  {
    icon: 'fas fa-bed',
    title: 'Sem Exercícios Cansativos',
    description: 'Perca peso no conforto da sua casa, sem precisar de rotinas de exercícios exaustivas.',
  },
  {
    icon: 'fas fa-rocket',
    title: 'Resultados Rápidos',
    description: 'Veja a diferença na balança e no espelho em poucas semanas, de forma consistente e segura.',
  },
  {
    icon: 'fas fa-seedling',
    title: 'Componente Secreto 100% Natural',
    description: 'Nossa fórmula é baseada em um componente natural e seguro, sem efeitos colaterais.',
  },
];
