# Template Entrepreneur BTP - Site Vitrine Premium

Un template complet et moderne pour entrepreneur dans le bâtiment, prêt à l'emploi avec Vite, React, TypeScript et Tailwind CSS.

## 🚀 Fonctionnalités

- ✨ Design premium et moderne
- 📱 Entièrement responsive (mobile-first)
- 🎨 Animations fluides avec Framer Motion
- 🔍 SEO optimisé avec React Helmet
- 📝 Formulaires de contact et devis avec validation
- 🎯 Architecture multi-pages avec React Router
- 🎨 Tailwind CSS pour un styling rapide et personnalisable

## 📋 Prérequis

- Node.js 18+ et npm

## 🛠️ Installation

1. Clonez le repository :
```bash
git clone https://github.com/votre-username/Template_entrepreneur_bat.git
cd Template_entrepreneur_bat
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez votre navigateur sur `http://localhost:5173`

## 📦 Build pour production

```bash
npm run build
```

Les fichiers seront générés dans le dossier `dist/`.

## 🎨 Personnalisation

### Modifier les couleurs

Les couleurs principales sont définies dans `tailwind.config.js` :

```javascript
colors: {
  primary: {
    DEFAULT: '#1e3a5f',  // Bleu profond
    dark: '#152a47',
    light: '#2d4f7a',
  },
  secondary: {
    DEFAULT: '#d4af37',  // Doré
    dark: '#b8941f',
    light: '#e5c866',
  },
}
```

### Modifier les textes et contenus

#### Informations de l'entreprise

Modifiez les fichiers suivants :
- **Logo et nom** : `src/components/layout/Navbar.tsx` (ligne ~20)
- **Coordonnées** : `src/components/layout/Footer.tsx` et `src/pages/Contact.tsx`
- **Zones d'intervention** : `src/pages/APropos.tsx`

#### Services

Modifiez `src/data/services.ts` pour ajouter, modifier ou supprimer des services.

#### Réalisations

Modifiez `src/data/realisations.ts` pour ajouter vos propres projets.

#### Témoignages

Modifiez `src/data/temoignages.ts` pour ajouter des témoignages clients.

#### Articles de blog

Modifiez `src/data/articles.ts` pour ajouter ou modifier des articles.

#### FAQ

Modifiez `src/data/faq.ts` pour personnaliser les questions fréquentes.

### Modifier les images

Les images sont définies dans `src/data/images.ts`. Vous pouvez :
- Remplacer les URLs Unsplash par vos propres images
- Utiliser des images locales (placez-les dans `public/` et référencez-les par `/nom-image.jpg`)

### Ajouter une nouvelle page

1. Créez un nouveau composant dans `src/pages/` :
```typescript
// src/pages/MaNouvellePage.tsx
import { Helmet } from 'react-helmet-async';
import { PageContainer } from '../components/layout/PageContainer';

export const MaNouvellePage = () => {
  return (
    <>
      <Helmet>
        <title>Ma Nouvelle Page - BTP Pro</title>
      </Helmet>
      <PageContainer>
        {/* Votre contenu */}
      </PageContainer>
    </>
  );
};
```

2. Ajoutez la route dans `src/routes/Router.tsx` :
```typescript
import { MaNouvellePage } from '../pages/MaNouvellePage';

// Dans le composant Routes
<Route path="/ma-nouvelle-page" element={<MaNouvellePage />} />
```

3. Ajoutez le lien dans la navbar (`src/components/layout/Navbar.tsx`) :
```typescript
const navLinks = [
  // ... autres liens
  { path: '/ma-nouvelle-page', label: 'Ma Page' },
];
```

### Personnaliser les formulaires

Les formulaires sont dans `src/components/forms/` :
- `FormContact.tsx` : Formulaire de contact général
- `FormDevis.tsx` : Formulaire de demande de devis

Pour connecter les formulaires à une API backend, modifiez la fonction `onSubmit` dans chaque composant.

## 📁 Structure du projet

```
src/
├── components/
│   ├── forms/          # Formulaires (contact, devis)
│   ├── home/           # Composants spécifiques à la page d'accueil
│   ├── layout/         # Navbar, Footer, PageContainer
│   ├── shared/         # Composants réutilisables
│   └── ui/             # Composants UI de base
├── data/               # Données (services, réalisations, etc.)
├── pages/              # Pages du site
├── routes/             # Configuration des routes
├── styles/             # Styles globaux
└── main.tsx           # Point d'entrée
```

## 🚀 Déploiement

### Vercel (recommandé)

1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Vite
3. Les paramètres de build sont automatiques :
   - Build Command: `npm run build`
   - Output Directory: `dist`

### Autres plateformes

Le projet génère des fichiers statiques dans `dist/` après `npm run build`, compatibles avec :
- Netlify
- GitHub Pages
- AWS S3
- Tout hébergeur de fichiers statiques

## 📝 Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Crée une version de production
- `npm run preview` : Prévisualise la version de production
- `npm run lint` : Vérifie le code avec ESLint

## 🛠️ Technologies utilisées

- **Vite** : Build tool ultra-rapide
- **React 19** : Bibliothèque UI
- **TypeScript** : Typage statique
- **React Router** : Navigation multi-pages
- **Tailwind CSS** : Framework CSS utility-first
- **Framer Motion** : Animations fluides
- **React Hook Form** : Gestion des formulaires
- **Zod** : Validation de schémas
- **React Helmet Async** : Gestion SEO
- **Lucide React** : Icônes

## 📄 Licence

Ce template est libre d'utilisation pour vos projets personnels et commerciaux.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📞 Support

Pour toute question ou problème, ouvrez une issue sur GitHub.

---

Créé avec ❤️ pour les entrepreneurs du bâtiment
