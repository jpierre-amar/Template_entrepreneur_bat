import { Helmet } from 'react-helmet-async';
import { PageContainer } from '../components/layout/PageContainer';
import { Hero } from '../components/home/Hero';
import { TrustBanner } from '../components/home/TrustBanner';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { CTASection } from '../components/home/CTASection';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>BTP Pro - Entrepreneur BTP | Rénovation & Construction</title>
        <meta
          name="description"
          content="Entrepreneur BTP spécialisé en rénovation, construction et dépannage. Plus de 10 ans d'expérience. Devis gratuit. Intervention rapide dans la région de Montpellier."
        />
        <meta property="og:title" content="BTP Pro - Entrepreneur BTP | Rénovation & Construction" />
        <meta property="og:description" content="Votre partenaire de confiance pour tous vos projets de rénovation et de construction." />
        <meta property="og:type" content="website" />
      </Helmet>
      <PageContainer>
        <Hero />
        <TrustBanner />
        <ServicesPreview />
        <WhyChooseUs />
        <FeaturedProjects />
        <CTASection />
      </PageContainer>
    </>
  );
};

