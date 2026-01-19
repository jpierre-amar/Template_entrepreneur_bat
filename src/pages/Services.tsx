import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";

export const Services = () => {
  const categories = ["conception", "renovation", "menuiserie", "agencement"] as const;
  const categoryLabels = {
    conception: "Conception & Construction",
    renovation: "Rénovation",
    menuiserie: "Menuiserie",
    agencement: "Agencement d'espace",
  };

  const categoryDescriptions = {
    conception: "De l'étude de faisabilité à la réalisation clé en main",
    renovation: "Valorisation du patrimoine et rénovation complète",
    menuiserie: "Notre département Koala Menuiserie pour tous vos projets bois",
    agencement: "Optimisation et aménagement sur mesure de vos espaces",
  };

  return (
    <>
      <Helmet>
        <title>Nos Services - Maison Meloni | Rénovation & Menuiserie en Provence</title>
        <meta
          name="description"
          content="Découvrez les services de Maison Meloni : conception, rénovation, menuiserie Koala et agencement d'espace. Solutions éco-responsables en Provence."
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
                Nos Expertises
              </motion.span>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Votre projet, nos <span className="text-gradient-gold">compétences</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Des solutions complètes et éco-responsables pour tous vos projets 
                de rénovation et d'agencement en Provence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services by category */}
        {categories.map((category, catIndex) => {
          const categoryServices = services.filter((s) => s.category === category);
          if (categoryServices.length === 0) return null;

          return (
            <SectionWrapper 
              key={category} 
              className={catIndex % 2 === 1 ? "bg-muted/30" : ""}
            >
              <SectionTitle
                badge={category === "menuiserie" ? "Koala" : "Expertise"}
                title={categoryLabels[category]}
                subtitle={categoryDescriptions[category]}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card variant="glass" className="h-full group overflow-hidden">
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                          <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-card/80 backdrop-blur flex items-center justify-center border border-secondary/20">
                            <Icon className="w-6 h-6 text-secondary" />
                          </div>
                        </div>
                        
                        <CardContent className="p-6">
                          <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors">
                            {service.title}
                          </h3>
                          
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {service.description}
                          </p>
                          
                          <ul className="space-y-2 mb-6">
                            {service.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-sm text-muted-foreground"
                              >
                                <CheckCircle className="w-4 h-4 text-secondary mt-0.5 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          
                          <Link
                            to="/contact"
                            className="inline-flex items-center text-sm font-medium text-secondary hover:text-secondary/80 transition-colors group/link"
                          >
                            Demander un devis
                            <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </SectionWrapper>
          );
        })}

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
              Un projet <span className="text-gradient-gold">spécifique</span> ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Venez nous rendre visite dans nos locaux à Arles ou contactez-nous 
              pour discuter de votre projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="premium" size="xl">
                  Demander un devis gratuit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:0983322642">
                <Button variant="outline" size="xl">
                  <Phone className="w-5 h-5 mr-2" />
                  09 83 32 26 42
                </Button>
              </a>
            </div>
          </motion.div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};
