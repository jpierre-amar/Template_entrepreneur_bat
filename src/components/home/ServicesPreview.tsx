import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const ServicesPreview = () => {
  const featuredServices = services.slice(0, 4);

  return (
    <SectionWrapper>
      <SectionTitle
        badge="Nos expertises"
        title="Services d'exception"
        subtitle="Des solutions complètes et sur mesure pour tous vos projets de rénovation et construction, réalisées par des artisans qualifiés."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="glass" className="h-full group">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Icon */}
                  <div className="icon-premium mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Link */}
                  <Link
                    to="/services"
                    className="inline-flex items-center text-sm font-medium text-secondary hover:text-secondary/80 transition-colors group/link"
                  >
                    En savoir plus
                    <ArrowUpRight className="w-4 h-4 ml-1 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center mt-12"
      >
        <Link to="/services">
          <Button variant="outline" size="lg">
            Découvrir tous nos services
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </motion.div>
    </SectionWrapper>
  );
};
