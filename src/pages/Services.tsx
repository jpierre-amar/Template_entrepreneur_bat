import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionTitle } from '../components/shared/SectionTitle';
import { SectionWrapper } from '../components/shared/SectionWrapper';
import { Card } from '../components/ui/Card';
import { services } from '../data/services';
import { ArrowRight } from 'lucide-react';

export const Services = () => {
  const categories = ['interior', 'exterior', 'construction', 'emergency'] as const;
  const categoryLabels = {
    interior: 'Rénovation Intérieure',
    exterior: 'Rénovation Extérieure',
    construction: 'Construction & Extension',
    emergency: 'Dépannage & Urgences'
  };

  return (
    <>
      <Helmet>
        <title>Nos Services - BTP Pro</title>
        <meta
          name="description"
          content="Découvrez tous nos services : rénovation intérieure et extérieure, construction, extension, dépannage et urgences. Solutions complètes pour tous vos projets."
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
              Nos Services
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Des solutions complètes et sur mesure pour tous vos projets de rénovation, 
              construction et dépannage
            </p>
          </motion.div>
        </SectionWrapper>

        {categories.map((category) => {
          const categoryServices = services.filter(s => s.category === category);
          if (categoryServices.length === 0) return null;

          return (
            <SectionWrapper key={category}>
              <SectionTitle
                title={categoryLabels[category]}
                subtitle="Des prestations de qualité pour transformer vos projets en réalité"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Card key={service.id} className="p-6">
                      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <span className="text-primary mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/contact"
                        className="text-primary font-medium hover:text-primary-dark inline-flex items-center group"
                      >
                        Demander un devis
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Card>
                  );
                })}
              </div>
            </SectionWrapper>
          );
        })}

        <SectionWrapper className="bg-gray-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Un projet spécifique ?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
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

