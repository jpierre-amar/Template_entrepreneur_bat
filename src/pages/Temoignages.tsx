import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionWrapper } from '../components/shared/SectionWrapper';
import { Card } from '../components/ui/Card';
import { temoignages } from '../data/temoignages';
import { Star, Quote } from 'lucide-react';

export const Temoignages = () => {
  const renderStars = (note: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < note ? 'fill-secondary text-secondary' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <>
      <Helmet>
        <title>Témoignages - BTP Pro</title>
        <meta
          name="description"
          content="Découvrez les témoignages de nos clients satisfaits. Plus de 10 ans d'expérience au service de votre satisfaction."
        />
      </Helmet>
      <PageContainer>
        <SectionWrapper className="bg-gradient-to-br from-primary to-primary-dark text-white pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Témoignages clients
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              La satisfaction de nos clients est notre priorité. Découvrez ce qu'ils pensent de nos services.
            </p>
          </motion.div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {temoignages.map((temoignage) => (
              <Card key={temoignage.id} className="p-6">
                <div className="flex items-center mb-4">
                  {renderStars(temoignage.note)}
                </div>
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{temoignage.commentaire}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{temoignage.nom}</p>
                  <p className="text-sm text-gray-600">{temoignage.ville}</p>
                  <p className="text-xs text-gray-500 mt-1">{temoignage.projet}</p>
                </div>
              </Card>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-gray-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Vous aussi, devenez un client satisfait
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez nos nombreux clients satisfaits et confiez-nous votre projet de rénovation ou construction.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Demander un devis gratuit
              </motion.button>
            </Link>
          </motion.div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};

