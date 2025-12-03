import { images } from './images';

export interface Article {
  id: string;
  titre: string;
  resume: string;
  contenu: string;
  image: string;
  date: string;
  categorie: string;
  auteur: string;
}

export const articles: Article[] = [
  {
    id: '1',
    titre: 'Comment bien préparer son projet de rénovation ?',
    resume: 'Découvrez les étapes essentielles pour préparer votre projet de rénovation et éviter les mauvaises surprises.',
    contenu: `
# Comment bien préparer son projet de rénovation ?

La rénovation d'un logement est un projet passionnant mais qui nécessite une préparation minutieuse pour garantir son succès. Voici les étapes essentielles à suivre.

## 1. Définir vos besoins et vos priorités

Avant de commencer, il est crucial de bien définir vos besoins réels. Posez-vous les bonnes questions :
- Quel est l'objectif de cette rénovation ?
- Quels sont vos besoins prioritaires ?
- Quel budget pouvez-vous allouer à ce projet ?

## 2. Établir un budget réaliste

Un budget bien établi est la clé d'un projet réussi. N'oubliez pas d'inclure :
- Les travaux de main-d'œuvre
- Les matériaux
- Les frais de permis si nécessaire
- Une marge de sécurité (environ 10-15%)

## 3. Choisir le bon professionnel

Le choix de votre entrepreneur est déterminant. Vérifiez :
- Ses références et réalisations
- Ses assurances et garanties
- La clarté de ses devis
- Son écoute et sa réactivité

## 4. Obtenir les autorisations nécessaires

Selon l'ampleur de vos travaux, vous pourriez avoir besoin de :
- Un permis de construire
- Une déclaration préalable de travaux
- L'accord de la copropriété

## 5. Planifier les travaux

Une bonne planification permet d'éviter les désagréments :
- Définir un calendrier réaliste
- Prévoir les périodes d'inconfort
- Organiser l'évacuation des déchets

En suivant ces étapes, vous mettrez toutes les chances de votre côté pour réussir votre projet de rénovation.
    `,
    image: images.blog1,
    date: '2024-03-15',
    categorie: 'Rénovation',
    auteur: 'Équipe BTP'
  },
  {
    id: '2',
    titre: 'Rénovation énergétique : par où commencer ?',
    resume: 'Guide complet pour améliorer la performance énergétique de votre logement et réduire vos factures.',
    contenu: `
# Rénovation énergétique : par où commencer ?

La rénovation énergétique est devenue une priorité pour de nombreux propriétaires. Voici comment procéder efficacement.

## Les travaux prioritaires

### 1. L'isolation
L'isolation est la première étape incontournable. Commencez par :
- Les combles (30% des déperditions)
- Les murs (25% des déperditions)
- Les fenêtres (10-15% des déperditions)

### 2. Le système de chauffage
Un système de chauffage performant peut réduire significativement votre consommation :
- Remplacement de chaudière ancienne
- Installation de pompe à chaleur
- Mise en place d'un système de régulation

### 3. La ventilation
Une bonne ventilation est essentielle pour :
- Maintenir la qualité de l'air
- Éviter l'humidité
- Préserver votre santé

## Les aides disponibles

De nombreuses aides peuvent financer vos travaux :
- MaPrimeRénov
- Certificats d'Économies d'Énergie (CEE)
- Éco-PTZ
- TVA réduite à 5,5%

## L'audit énergétique

Avant de commencer, faites réaliser un audit énergétique pour identifier les travaux les plus efficaces pour votre logement.

La rénovation énergétique est un investissement rentable qui améliore votre confort et réduit votre impact environnemental.
    `,
    image: images.blog2,
    date: '2024-02-28',
    categorie: 'Énergie',
    auteur: 'Équipe BTP'
  },
  {
    id: '3',
    titre: 'Les erreurs à éviter lors de travaux de rénovation',
    resume: 'Découvrez les pièges courants à éviter pour garantir le succès de votre projet de rénovation.',
    contenu: `
# Les erreurs à éviter lors de travaux de rénovation

Voici les erreurs les plus courantes et comment les éviter pour réussir votre projet.

## 1. Sous-estimer le budget

**L'erreur** : Ne pas prévoir de marge de sécurité  
**La solution** : Ajoutez toujours 10 à 15% de marge à votre budget initial pour faire face aux imprévus.

## 2. Choisir le moins cher

**L'erreur** : Opter pour le devis le moins cher sans vérifier la qualité  
**La solution** : Comparez les devis en tenant compte de la qualité des matériaux, des garanties et de la réputation.

## 3. Négliger les autorisations

**L'erreur** : Commencer les travaux sans vérifier les autorisations nécessaires  
**La solution** : Renseignez-vous auprès de votre mairie et de votre copropriété avant de commencer.

## 4. Ne pas planifier les travaux

**L'erreur** : Commencer sans planification claire  
**La solution** : Établissez un calendrier détaillé avec votre entrepreneur et respectez-le.

## 5. Changer d'avis en cours de route

**L'erreur** : Modifier le projet après le début des travaux  
**La solution** : Prenez le temps de réfléchir avant de commencer et validez tous les détails en amont.

## 6. Ne pas vérifier les assurances

**L'erreur** : Ne pas vérifier les assurances de l'entrepreneur  
**La solution** : Exigez toujours les attestations d'assurance décennale et responsabilité civile.

En évitant ces erreurs courantes, vous maximisez vos chances de réussir votre projet de rénovation.
    `,
    image: images.blog3,
    date: '2024-02-10',
    categorie: 'Conseils',
    auteur: 'Équipe BTP'
  }
];

