import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { realisations } from "@/data/realisations";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { MapPin, ArrowRight, Calendar, Ruler } from "lucide-react";

export const FeaturedProjects = () => {
  const featuredProjects = realisations.slice(0, 3);

  return (
    <SectionWrapper>
      <SectionTitle
        badge="Portfolio"
        title="Réalisations récentes"
        subtitle="Découvrez quelques-uns de nos projets récents et laissez-vous inspirer par notre savoir-faire."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card 
              variant="glass" 
              className="overflow-hidden group h-full flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary/90 text-secondary-foreground rounded-full">
                    {project.category || "Rénovation"}
                  </span>
                </div>
                
                {/* Hover overlay with details */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4 text-sm text-foreground/80">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1 text-secondary" />
                      {project.duration || "3 mois"}
                    </div>
                    <div className="flex items-center">
                      <Ruler className="w-4 h-4 mr-1 text-secondary" />
                      {project.surface || "120 m²"}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mr-1 text-secondary" />
                  <span className="text-sm">{project.location}</span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-6 flex-grow line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                <Link
                  to="/realisations"
                  className="inline-flex items-center text-sm font-medium text-secondary hover:text-secondary/80 transition-colors group/link"
                >
                  Voir le projet
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center mt-12"
      >
        <Link to="/realisations">
          <Button variant="outline" size="lg">
            Voir toutes nos réalisations
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </motion.div>
    </SectionWrapper>
  );
};
