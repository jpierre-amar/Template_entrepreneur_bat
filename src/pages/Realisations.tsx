import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { realisations } from "@/data/realisations";
import type { Realisation } from "@/data/realisations";
import { MapPin, X, Calendar, Ruler, Euro, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Realisations = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Realisation | null>(null);

  const categories = [
    { value: "all", label: "Tous les projets" },
    { value: "interior", label: "Intérieur" },
    { value: "exterior", label: "Extérieur" },
    { value: "construction", label: "Construction" },
    { value: "emergency", label: "Dépannage" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? realisations
      : realisations.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Nos Réalisations - BTP Pro | Portfolio de Projets</title>
        <meta
          name="description"
          content="Découvrez nos réalisations : rénovations intérieures et extérieures, constructions, extensions. Des projets réussis dans toute la région de Montpellier."
        />
      </Helmet>
      <PageContainer>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-mesh-gradient" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-block mb-6 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-secondary/10 text-secondary border border-secondary/20 rounded-full"
              >
                Portfolio
              </motion.span>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Nos <span className="text-gradient-gold">réalisations</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Découvrez quelques-uns de nos projets récents et laissez-vous
                inspirer par notre savoir-faire.
              </p>
            </motion.div>
          </div>
        </section>

        <SectionWrapper>
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className="rounded-full"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card
                    variant="glass"
                    className="overflow-hidden group cursor-pointer h-full"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                      <Badge className="absolute top-4 left-4 bg-secondary/90 text-secondary-foreground">
                        {project.type}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <MapPin className="w-4 h-4 mr-1 text-secondary" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                      <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </SectionWrapper>

        {/* CTA Section */}
        <SectionWrapper>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-12 rounded-3xl text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Votre projet sera le <span className="text-gradient-gold">prochain</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de votre projet et rejoindre nos clients satisfaits.
            </p>
            <Link to="/contact">
              <Button variant="premium" size="xl">
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </SectionWrapper>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-card rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-secondary/20"
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-card/80 backdrop-blur rounded-full flex items-center justify-center border border-border/50 hover:bg-secondary/20 hover:border-secondary/30 transition-all"
                  >
                    <X className="w-5 h-5 text-foreground" />
                  </button>
                </div>
                <div className="p-8">
                  <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
                    {selectedProject.type}
                  </Badge>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                    {selectedProject.title}
                  </h2>
                  <div className="flex items-center text-muted-foreground mb-6">
                    <MapPin className="w-5 h-5 mr-2 text-secondary" />
                    <span>{selectedProject.location}</span>
                  </div>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  {selectedProject.details && (
                    <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-muted/30 rounded-2xl border border-border/50">
                      {selectedProject.details.surface && (
                        <div className="text-center">
                          <Ruler className="w-6 h-6 text-secondary mx-auto mb-2" />
                          <p className="text-xs text-muted-foreground mb-1">Surface</p>
                          <p className="font-semibold text-foreground">
                            {selectedProject.details.surface}
                          </p>
                        </div>
                      )}
                      {selectedProject.details.duree && (
                        <div className="text-center">
                          <Calendar className="w-6 h-6 text-secondary mx-auto mb-2" />
                          <p className="text-xs text-muted-foreground mb-1">Durée</p>
                          <p className="font-semibold text-foreground">
                            {selectedProject.details.duree}
                          </p>
                        </div>
                      )}
                      {selectedProject.details.budget && (
                        <div className="text-center">
                          <Euro className="w-6 h-6 text-secondary mx-auto mb-2" />
                          <p className="text-xs text-muted-foreground mb-1">Budget</p>
                          <p className="font-semibold text-foreground">
                            {selectedProject.details.budget}
                          </p>
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
                          className="w-full h-48 object-cover rounded-xl"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </PageContainer>
    </>
  );
};
