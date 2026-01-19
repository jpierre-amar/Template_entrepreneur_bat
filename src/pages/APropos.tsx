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
  Leaf, 
  Clock, 
  Users, 
  Award, 
  Heart, 
  ArrowRight,
  Phone,
  MapPin,
  Recycle
} from "lucide-react";

const stats = [
  { value: "2018", label: "Année de création" },
  { value: "10+", label: "Années d'expérience" },
  { value: "100+", label: "Projets réalisés" },
  { value: "100%", label: "Engagement qualité" },
];

const engagements = [
  {
    icon: Leaf,
    title: "Reconnu Garant Environnemental",
    description: "Nous avons obtenu un agrément RGE « les pro de la performance énergétique » pour garantir des travaux respectueux de l'environnement.",
  },
  {
    icon: Recycle,
    title: "Matériaux Bio-sourcés",
    description: "Nous privilégions l'utilisation de matières premières d'origine naturelle, végétale ou minérale dites bio-sourcées.",
  },
  {
    icon: MapPin,
    title: "Circuits Courts",
    description: "Nous favorisons au maximum les circuits courts pour soutenir l'économie locale et réduire notre empreinte carbone.",
  },
  {
    icon: Users,
    title: "Partenaires Engagés",
    description: "Nos sous-traitants sont des professionnels qui partagent notre vision et nous accompagnent sur tous nos chantiers.",
  },
  {
    icon: Heart,
    title: "Protection du Patrimoine",
    description: "Nous sommes engagés dans la protection et la valorisation du patrimoine régional provençal.",
  },
  {
    icon: Award,
    title: "Clé en Main",
    description: "Tous nos chantiers sont réalisés clé en main, à travers toute la Provence, pour votre tranquillité.",
  },
];

const zones = [
  "Arles et ses environs",
  "Avignon et le Vaucluse",
  "Nîmes et le Gard",
  "Aix-en-Provence",
  "Marseille et ses environs",
  "Toute la Provence",
];

export const APropos = () => {
  return (
    <>
      <Helmet>
        <title>À propos - Maison Meloni | Entreprise Générale du Bâtiment en Provence</title>
        <meta
          name="description"
          content="Découvrez Maison Meloni, entreprise générale du bâtiment fondée par Jean-Baptiste Meloni en 2018. Rénovation, menuiserie et agencement en Provence."
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
                Maison <span className="text-gradient-gold">Meloni</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Entreprise générale du bâtiment moderne et engagée dans la protection 
                du patrimoine et de l'environnement en Provence.
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
                  <strong className="text-foreground">La Maison Meloni naît de la rencontre entre un héritage familial 
                  et une passion pour les matériaux nobles.</strong>
                </p>
                <p>
                  C'est en 2018, après 10 ans d'expérience en rénovation, que Jean-Baptiste Meloni 
                  concrétise son objectif et crée sa maison. Avec pour ambition d'entretenir et 
                  valoriser le patrimoine régional tout en prenant soin de son environnement.
                </p>
                <p>
                  Notre équipe d'artisans qualifiés met son savoir-faire au service de votre 
                  satisfaction. Chaque projet est unique et mérite notre attention particulière, 
                  de la conception à la réalisation finale.
                </p>
                <p>
                  Avec un département dédié à la menuiserie, <strong className="text-secondary">Koala Menuiserie</strong>, 
                  nous accompagnons tous vos projets de rénovation et d'agencement d'espace 
                  avec des matériaux de qualité et un respect profond de l'environnement.
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
                  alt="Équipe Maison Meloni"
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
            subtitle="Une entreprise moderne et engagée dans la protection du patrimoine et de l'environnement."
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
                  Nous intervenons à travers toute la Provence pour tous vos projets 
                  de rénovation et d'agencement d'espace, réalisés clé en main.
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
                  Un projet en tête ?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Venez nous rendre visite dans nos locaux ou contactez-nous pour un devis gratuit.
                </p>
                <div className="text-muted-foreground text-sm mb-6 space-y-2">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-secondary mr-2" />
                    27 chemin de Séverin - Arles 13200
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-secondary mr-2" />
                    Lun - Ven : 8h-12h / 14h-17h
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button variant="premium" className="w-full sm:w-auto">
                      Demander un devis
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <a href="tel:0983322642">
                    <Button variant="outline" className="w-full sm:w-auto">
                      <Phone className="w-4 h-4 mr-2" />
                      09 83 32 26 42
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
