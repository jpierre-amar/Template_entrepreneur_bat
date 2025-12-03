import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionWrapper } from '../components/shared/SectionWrapper';
import { Card } from '../components/ui/Card';
import { realisations } from '../data/realisations';
import type { Realisation } from '../data/realisations';
import { MapPin, X } from 'lucide-react';

export const Realisations = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Realisation | null>(null);

  const categories = [
    { value: 'all', label: 'Tous' },
    { value: 'interior', label: 'Intérieur' },
    { value: 'exterior', label: 'Extérieur' },
    { value: 'construction', label: 'Construction' },
    { value: 'emergency', label: 'Dépannage' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? realisations
    : realisations.filter(p => p.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Nos Réalisations - BTP Pro</title>
        <meta
          name="description"
          content="Découvrez nos réalisations : rénovations intérieures et extérieures, constructions, extensions. Des projets réussis dans toute la région de Montpellier."
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
              Nos Réalisations
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Découvrez quelques-uns de nos projets récents et laissez-vous inspirer
            </p>
          </motion.div>
        </SectionWrapper>

        <SectionWrapper>
          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category.value
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Grille de projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden"
                onClick={() => setSelectedProject(project)}
              >
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
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-3">
                    {project.type}
                  </span>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </SectionWrapper>

        {/* Modal de détail */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                  {selectedProject.title}
                </h2>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{selectedProject.location}</span>
                  <span className="mx-4">•</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {selectedProject.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>
                {selectedProject.details && (
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    {selectedProject.details.surface && (
                      <div>
                        <p className="text-sm text-gray-600">Surface</p>
                        <p className="font-semibold">{selectedProject.details.surface}</p>
                      </div>
                    )}
                    {selectedProject.details.duree && (
                      <div>
                        <p className="text-sm text-gray-600">Durée</p>
                        <p className="font-semibold">{selectedProject.details.duree}</p>
                      </div>
                    )}
                    {selectedProject.details.budget && (
                      <div>
                        <p className="text-sm text-gray-600">Budget</p>
                        <p className="font-semibold">{selectedProject.details.budget}</p>
                      </div>
                    )}
                  </div>
                )}
                {selectedProject.images && selectedProject.images.length > 1 && (
                  <div className="grid grid-cols-2 gap-4">
                    {selectedProject.images.slice(1).map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${selectedProject.title} - Image ${idx + 2}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </PageContainer>
    </>
  );
};

