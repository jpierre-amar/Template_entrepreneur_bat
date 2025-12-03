import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../../data/services';
import { Card } from '../ui/Card';
import { SectionTitle } from '../shared/SectionTitle';
import { SectionWrapper } from '../shared/SectionWrapper';
import { ArrowRight } from 'lucide-react';

export const ServicesPreview = () => {
  const featuredServices = services.slice(0, 4);

  return (
    <SectionWrapper>
      <SectionTitle
        title="Nos Services"
        subtitle="Des solutions complètes pour tous vos projets de rénovation et construction"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card key={service.id} className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {service.description}
              </p>
              <Link
                to="/services"
                className="text-primary font-medium hover:text-primary-dark inline-flex items-center group"
              >
                En savoir plus
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Card>
          );
        })}
      </div>
      <div className="text-center mt-12">
        <Link to="/services">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline"
          >
            Voir tous nos services
          </motion.button>
        </Link>
      </div>
    </SectionWrapper>
  );
};

