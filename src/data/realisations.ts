import { images } from './images';

export interface Realisation {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  image: string;
  category: 'interior' | 'exterior' | 'construction' | 'emergency';
  images: string[];
  details: {
    surface?: string;
    duree?: string;
    budget?: string;
  };
}

export const realisations: Realisation[] = [
  {
    id: 'renovation-maison-montpellier',
    title: 'Rénovation complète d\'une maison',
    location: 'Montpellier',
    type: 'Rénovation intérieure',
    description: 'Rénovation complète d\'une maison de 120m² incluant cuisine, salle de bain, sols et peinture. Travaux réalisés dans les délais avec un résultat exceptionnel.',
    image: images.project1,
    category: 'interior',
    images: [images.project1, images.kitchen, images.bathroom],
    details: {
      surface: '120 m²',
      duree: '3 mois',
      budget: 'Confidentiel'
    }
  },
  {
    id: 'ravalement-facade',
    title: 'Ravalement de façade avec isolation',
    location: 'Nîmes',
    type: 'Rénovation extérieure',
    description: 'Ravalement complet d\'une façade avec isolation thermique par l\'extérieur. Amélioration de l\'efficacité énergétique et modernisation de l\'aspect extérieur.',
    image: images.project2,
    category: 'exterior',
    images: [images.project2, images.facade],
    details: {
      surface: '180 m²',
      duree: '2 mois',
      budget: 'Confidentiel'
    }
  },
  {
    id: 'extension-maison',
    title: 'Extension avec surélévation',
    location: 'Sète',
    type: 'Construction',
    description: 'Extension de 40m² avec surélévation pour créer 3 nouvelles chambres et un bureau. Projet complexe mené à bien avec respect des normes et délais.',
    image: images.project3,
    category: 'construction',
    images: [images.project3, images.extension],
    details: {
      surface: '40 m²',
      duree: '5 mois',
      budget: 'Confidentiel'
    }
  },
  {
    id: 'renovation-cuisine',
    title: 'Rénovation de cuisine moderne',
    location: 'Lunel',
    type: 'Rénovation intérieure',
    description: 'Création d\'une cuisine moderne et fonctionnelle de 25m² avec îlot central, électroménager intégré et rangements optimisés.',
    image: images.project4,
    category: 'interior',
    images: [images.project4, images.kitchen],
    details: {
      surface: '25 m²',
      duree: '6 semaines',
      budget: 'Confidentiel'
    }
  },
  {
    id: 'renovation-toiture',
    title: 'Rénovation complète de toiture',
    location: 'Béziers',
    type: 'Rénovation extérieure',
    description: 'Remplacement complet de la toiture avec isolation renforcée et installation de panneaux solaires. Travaux réalisés en respectant les normes environnementales.',
    image: images.project5,
    category: 'exterior',
    images: [images.project5, images.roof],
    details: {
      surface: '150 m²',
      duree: '3 semaines',
      budget: 'Confidentiel'
    }
  },
  {
    id: 'amenagement-combles',
    title: 'Aménagement de combles',
    location: 'Perpignan',
    type: 'Construction',
    description: 'Transformation de combles perdus en espace de vie avec 2 chambres, salle de bain et bureau. Isolation renforcée et éclairage naturel optimisé.',
    image: images.project6,
    category: 'construction',
    images: [images.project6, images.extension],
    details: {
      surface: '60 m²',
      duree: '4 mois',
      budget: 'Confidentiel'
    }
  }
];

