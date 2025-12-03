export interface Temoignage {
  id: string;
  nom: string;
  ville: string;
  projet: string;
  note: number;
  commentaire: string;
  date: string;
}

export const temoignages: Temoignage[] = [
  {
    id: '1',
    nom: 'Marie Dupont',
    ville: 'Montpellier',
    projet: 'Rénovation cuisine',
    note: 5,
    commentaire: 'Excellent travail ! L\'équipe a été professionnelle, ponctuelle et le résultat dépasse nos attentes. Je recommande vivement.',
    date: '2024-01-15'
  },
  {
    id: '2',
    nom: 'Jean Martin',
    ville: 'Nîmes',
    projet: 'Ravalement façade',
    note: 5,
    commentaire: 'Très satisfait de la rénovation de notre façade. Devis respecté, délais tenus et finition impeccable. Un vrai professionnalisme.',
    date: '2024-02-20'
  },
  {
    id: '3',
    nom: 'Sophie Bernard',
    ville: 'Sète',
    projet: 'Extension maison',
    note: 5,
    commentaire: 'Projet d\'extension complexe mené à la perfection. L\'entrepreneur a su nous conseiller et adapter le projet à nos besoins. Résultat magnifique !',
    date: '2023-12-10'
  },
  {
    id: '4',
    nom: 'Pierre Leroy',
    ville: 'Lunel',
    projet: 'Rénovation salle de bain',
    note: 5,
    commentaire: 'Rénovation complète de notre salle de bain réalisée dans les temps. Travail soigné et équipe très réactive. Nous sommes ravis !',
    date: '2024-03-05'
  },
  {
    id: '5',
    nom: 'Claire Moreau',
    ville: 'Béziers',
    projet: 'Rénovation toiture',
    note: 5,
    commentaire: 'Intervention rapide et efficace pour notre problème de toiture. Devis clair, travaux de qualité et suivi régulier. Parfait !',
    date: '2024-01-28'
  },
  {
    id: '6',
    nom: 'Marc Dubois',
    ville: 'Perpignan',
    projet: 'Aménagement combles',
    note: 5,
    commentaire: 'Transformation de nos combles en espace de vie réussi à 100%. L\'équipe a su optimiser l\'espace et créer un lieu magnifique. Merci !',
    date: '2023-11-20'
  }
];

