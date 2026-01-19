import { images } from './images';
import { Compass, Home, Building2, Paintbrush, Hammer, Ruler } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  category: 'conception' | 'renovation' | 'menuiserie' | 'agencement';
  features: string[];
}

export const services: Service[] = [
  {
    id: 'conception',
    title: 'Conception',
    description: 'Profitez de notre expertise pour penser la conception de votre projet à vos côtés, du premier dessin à la réalisation finale.',
    icon: Compass,
    image: images.construction,
    category: 'conception',
    features: [
      'Étude de faisabilité',
      'Plans et dessins techniques',
      'Conseils en aménagement',
      'Optimisation des espaces',
      'Choix des matériaux',
      'Suivi de projet complet'
    ]
  },
  {
    id: 'renovation',
    title: 'Rénovation',
    description: 'Transformation complète de vos espaces avec un savoir-faire d\'exception et le respect du patrimoine régional.',
    icon: Home,
    image: images.renovationInterior,
    category: 'renovation',
    features: [
      'Rénovation intérieure complète',
      'Rénovation de façades',
      'Valorisation du patrimoine',
      'Isolation thermique',
      'Mise aux normes',
      'Solutions clé en main'
    ]
  },
  {
    id: 'agencement',
    title: 'Agencement d\'espace',
    description: 'Création et aménagement d\'espaces sur mesure, optimisés pour votre confort et votre style de vie.',
    icon: Ruler,
    image: images.kitchen,
    category: 'agencement',
    features: [
      'Agencement sur mesure',
      'Optimisation des volumes',
      'Création de rangements',
      'Aménagement de combles',
      'Espaces professionnels',
      'Solutions personnalisées'
    ]
  },
  {
    id: 'menuiserie',
    title: 'Menuiserie (Koala)',
    description: 'Notre département dédié Koala Menuiserie réalise tous vos projets de menuiserie avec des matériaux nobles et durables.',
    icon: Hammer,
    image: images.bathroom,
    category: 'menuiserie',
    features: [
      'Cuisines sur mesure',
      'Dressing et placards',
      'Escaliers',
      'Portes et fenêtres',
      'Parquets',
      'Mobilier sur mesure'
    ]
  },
  {
    id: 'renovation-exterieure',
    title: 'Rénovation Extérieure',
    description: 'Redonnez un nouveau souffle à votre façade et à vos extérieurs, dans le respect de l\'environnement.',
    icon: Paintbrush,
    image: images.renovationExterior,
    category: 'renovation',
    features: [
      'Ravalement de façade',
      'Enduits traditionnels',
      'Isolation par l\'extérieur',
      'Rénovation de toiture',
      'Terrasses',
      'Aménagements extérieurs'
    ]
  },
  {
    id: 'eco-construction',
    title: 'Construction Éco-responsable',
    description: 'Des solutions durables utilisant des matières bio-sourcées et des circuits courts, pour une construction respectueuse.',
    icon: Building2,
    image: images.emergency,
    category: 'conception',
    features: [
      'Matériaux bio-sourcés',
      'Circuits courts privilégiés',
      'Performance énergétique',
      'Certifications RGE',
      'Éco-construction',
      'Respect de l\'environnement'
    ]
  }
];
