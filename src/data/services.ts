import { images } from './images';
import { Wrench, Home, Building2, AlertCircle, Paintbrush, Hammer } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  category: 'interior' | 'exterior' | 'construction' | 'emergency';
  features: string[];
}

export const services: Service[] = [
  {
    id: 'renovation-interior',
    title: 'Rénovation Intérieure',
    description: 'Transformation complète de vos espaces intérieurs avec un savoir-faire d\'exception.',
    icon: Home,
    image: images.renovationInterior,
    category: 'interior',
    features: [
      'Rénovation de cuisine',
      'Rénovation de salle de bain',
      'Pose de sols (parquet, carrelage)',
      'Peinture et revêtements muraux',
      'Plomberie et électricité',
      'Menuiserie sur mesure'
    ]
  },
  {
    id: 'renovation-exterior',
    title: 'Rénovation Extérieure',
    description: 'Redonnez un nouveau souffle à votre façade et à vos extérieurs.',
    icon: Paintbrush,
    image: images.renovationExterior,
    category: 'exterior',
    features: [
      'Ravalement de façade',
      'Isolation thermique extérieure',
      'Rénovation de toiture',
      'Aménagement extérieur',
      'Terrasses et balcons',
      'Clôtures et portails'
    ]
  },
  {
    id: 'construction-extension',
    title: 'Construction & Extension',
    description: 'Agrandissez votre espace de vie avec des solutions sur mesure.',
    icon: Building2,
    image: images.construction,
    category: 'construction',
    features: [
      'Construction neuve',
      'Surélévation',
      'Extension de maison',
      'Aménagement de combles',
      'Vérandas et pergolas',
      'Garages et dépendances'
    ]
  },
  {
    id: 'depannage-urgence',
    title: 'Dépannage & Urgences',
    description: 'Intervention rapide 7j/7 pour tous vos dépannages urgents.',
    icon: AlertCircle,
    image: images.emergency,
    category: 'emergency',
    features: [
      'Fuite d\'eau',
      'Panne électrique',
      'Dégât des eaux',
      'Fermeture de porte',
      'Réparations diverses',
      'Intervention sous 2h'
    ]
  },
  {
    id: 'plomberie',
    title: 'Plomberie',
    description: 'Installation, réparation et maintenance de tous vos équipements sanitaires.',
    icon: Wrench,
    image: images.bathroom,
    category: 'interior',
    features: [
      'Installation sanitaire',
      'Réparation de fuites',
      'Remplacement de robinetterie',
      'Installation de chauffe-eau',
      'Débouchage de canalisations'
    ]
  },
  {
    id: 'menuiserie',
    title: 'Menuiserie',
    description: 'Création et installation de menuiseries sur mesure pour tous vos projets.',
    icon: Hammer,
    image: images.kitchen,
    category: 'interior',
    features: [
      'Cuisines sur mesure',
      'Dressing et rangements',
      'Portes et fenêtres',
      'Escaliers',
      'Parquets et lambris'
    ]
  }
];

