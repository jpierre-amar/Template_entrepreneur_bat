import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { realisations } from '../../data/realisations';
import { Card } from '../ui/Card';
import { SectionTitle } from '../shared/SectionTitle';
import { SectionWrapper } from '../components/shared/SectionWrapper';
import { MapPin, ArrowRight } from 'lucide-react';

export const FeaturedProjects = () => {
  const featuredProjects = realisations.slice(0, 3);

  return (
    <SectionWrapper>
      <SectionTitle
        title="Nos Réalisations"
        subtitle="Découvrez quelques-uns de nos projets récents"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <div className="flex items-center text-gray-600 mb-3">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{project.location}</span>
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              <Link
                to="/realisations"
                className="text-primary font-medium hover:text-primary-dark inline-flex items-center group"
              >
                Voir le projet
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/realisations">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline"
          >
            Voir toutes nos réalisations
          </motion.button>
        </Link>
      </div>
    </SectionWrapper>
  );
};

