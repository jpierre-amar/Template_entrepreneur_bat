import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { images } from "@/data/images";
import { 
  CheckCircle, 
  Shield, 
  Clock, 
  Users, 
  Award, 
  Heart, 
  ArrowRight,
  Phone,
  MapPin
} from "lucide-react";

const stats = [
  { value: "10+", label: "Années d'expérience" },
  { value: "500+", label: "Projets réalisés" },
  { value: "98%", label: "Clients satisfaits" },
  { value: "15+", label: "Artisans qualifiés" },
];

const engagements = [
  {
    icon: Award,
    title: "Qualité",
    description: "Nous utilisons uniquement des matériaux de première qualité et suivons les normes les plus strictes.",
  },
  {
    icon: Clock,
    title: "Délais",
    description: "Nous nous engageons à respecter les délais convenus et à vous tenir informé de l'avancement.",
  },
  {
    icon: Shield,
    title: "Transparence",
    description: "Devis détaillés sans surprise, suivi régulier de votre projet et communication claire.",
  },
  {
    icon: Users,
    title: "Sécurité",
    description: "Respect strict des normes de sécurité et assurance décennale pour votre tranquillité.",
  },
  {
    icon: Heart,
    title: "Respect",
    description: "Respect de votre environnement, de vos voisins et des normes environnementales en vigueur.",
  },
  {
    icon: CheckCircle,
    title: "Normes",
    description: "Conformité totale aux normes RT 2012, RE 2020 et toutes les réglementations en vigueur.",
  },
];

const zones = [
  "Montpellier et agglomération",
  "Nîmes et ses environs",
  "Sète et le bassin de Thau",
  "Lunel et la Petite Camargue",
  "Béziers et le Biterrois",
  "Perpignan et le Roussillon",
];

export const APropos = () => {
  return (
    <>
      <Helmet>
        <title>À propos - BTP Pro | Votre Partenaire BTP de Confiance</title>
        <meta
          name="description"
          content="Découvrez BTP Pro, votre entrepreneur BTP de confiance. Plus de 10 ans d'expérience en rénovation, construction et dépannage dans la région de Montpellier."
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
                Notre Histoire
              </motion.span>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                L'excellence depuis <span className="text-gradient-gold">10 ans</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Votre partenaire de confiance pour tous vos projets de rénovation, 
                construction et dépannage dans la région de Montpellier.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <SectionWrapper className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Story Section */}
        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Notre <span className="text-gradient-gold">histoire</span>
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Fondée il y a plus de 10 ans, BTP Pro est née d'une passion pour 
                  l'artisanat et le désir de transformer les maisons en foyers chaleureux 
                  et fonctionnels. Depuis nos débuts, nous avons accompagné des centaines 
                  de clients dans leurs projets de rénovation, construction et dépannage.
                </p>
                <p>
                  Notre équipe d'artisans qualifiés et certifiés met son savoir-faire 
                  au service de votre satisfaction. Chaque projet est unique et mérite 
                  notre attention particulière, de la conception à la réalisation finale.
                </p>
                <p>
                  Nous croyons en la transparence, la qualité et le respect des délais. 
                  Ces valeurs guident chacune de nos interventions et font de nous un 
                  partenaire de confiance pour tous vos projets BTP.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl border border-secondary/20 opacity-50" />
              <Card variant="glass" className="overflow-hidden">
                <img
                  src={images.about}
                  alt="Équipe BTP Pro"
                  className="w-full h-[400px] object-cover"
                />
              </Card>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Engagements */}
        <SectionWrapper className="bg-muted/30">
          <SectionTitle
            badge="Nos valeurs"
            title="Nos engagements"
            subtitle="Des valeurs qui guident chacune de nos interventions et font notre différence."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engagements.map((engagement, index) => {
              const Icon = engagement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card variant="glass" className="h-full">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                        <Icon className="w-7 h-7 text-secondary" />
                      </div>
                      <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                        {engagement.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {engagement.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </SectionWrapper>

        {/* Zones */}
        <SectionWrapper>
          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-foreground">
                    Zones d'<span className="text-gradient-gold">intervention</span>
                  </h2>
                </div>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Nous intervenons dans toute la région de Montpellier et ses alentours, 
                  dans un rayon d'environ 50 km.
                </p>
                
                <ul className="space-y-3">
                  {zones.map((zone, idx) => (
                    <li key={idx} className="flex items-center text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-secondary mr-3 flex-shrink-0" />
                      {zone}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-muted/50 rounded-2xl p-8 border border-border/50">
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                  Un projet dans notre zone ?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  N'hésitez pas à nous contacter pour un devis gratuit et sans engagement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button variant="premium" className="w-full sm:w-auto">
                      Demander un devis
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <a href="tel:+33612345678">
                    <Button variant="outline" className="w-full sm:w-auto">
                      <Phone className="w-4 h-4 mr-2" />
                      Appeler
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};
