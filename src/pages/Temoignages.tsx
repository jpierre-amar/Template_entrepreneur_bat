import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { temoignages } from "@/data/temoignages";
import { Star, Quote, ArrowRight, MapPin } from "lucide-react";

export const Temoignages = () => {
  const renderStars = (note: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < note ? "fill-secondary text-secondary" : "text-muted-foreground/30"
        }`}
      />
    ));
  };

  // Calculate average rating
  const averageRating = (
    temoignages.reduce((acc, t) => acc + t.note, 0) / temoignages.length
  ).toFixed(1);

  return (
    <>
      <Helmet>
        <title>Témoignages - BTP Pro | Avis Clients</title>
        <meta
          name="description"
          content="Découvrez les témoignages de nos clients satisfaits. Plus de 10 ans d'expérience au service de votre satisfaction."
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
                Avis Clients
              </motion.span>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Ils nous font <span className="text-gradient-gold">confiance</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                La satisfaction de nos clients est notre priorité. Découvrez ce
                qu'ils pensent de nos services.
              </p>

              {/* Average rating */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-muted/50 border border-border/50"
              >
                <div className="flex items-center gap-1">
                  {renderStars(Math.round(parseFloat(averageRating)))}
                </div>
                <div className="text-left">
                  <div className="text-2xl font-display font-bold text-gradient-gold">
                    {averageRating}/5
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {temoignages.length} avis vérifiés
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {temoignages.map((temoignage, index) => (
              <motion.div
                key={temoignage.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="glass" className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {renderStars(temoignage.note)}
                    </div>

                    {/* Quote icon */}
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                      <Quote className="w-5 h-5 text-secondary" />
                    </div>

                    {/* Comment */}
                    <p className="text-muted-foreground mb-6 italic leading-relaxed flex-grow">
                      "{temoignage.commentaire}"
                    </p>

                    {/* Author */}
                    <div className="pt-4 border-t border-border/50">
                      <p className="font-semibold text-foreground">
                        {temoignage.nom}
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="w-3 h-3 mr-1 text-secondary" />
                        {temoignage.ville}
                      </div>
                      <p className="text-xs text-secondary mt-2">
                        {temoignage.projet}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Rejoignez nos clients <span className="text-gradient-gold">satisfaits</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Confiez-nous votre projet de rénovation ou construction et découvrez
              pourquoi nos clients nous recommandent.
            </p>
            <Link to="/contact">
              <Button variant="premium" size="xl">
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};
