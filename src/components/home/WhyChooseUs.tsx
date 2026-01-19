import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Heart, Award, Sparkles, Shield } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

const reasons = [
  {
    icon: Award,
    title: "Qualité exceptionnelle",
    description: "Nous utilisons uniquement des matériaux de première qualité et suivons les normes les plus strictes du secteur.",
    highlight: "Matériaux premium",
  },
  {
    icon: TrendingUp,
    title: "Transparence totale",
    description: "Devis détaillés sans surprise, suivi régulier de votre projet et communication claire à chaque étape.",
    highlight: "Zéro surprise",
  },
  {
    icon: Heart,
    title: "Proximité & écoute",
    description: "Nous sommes à votre écoute pour comprendre vos besoins et vous accompagner dans votre projet.",
    highlight: "Accompagnement personnalisé",
  },
  {
    icon: CheckCircle,
    title: "Respect des délais",
    description: "Nous nous engageons à respecter les délais convenus et à vous tenir informé de l'avancement des travaux.",
    highlight: "Ponctualité garantie",
  },
  {
    icon: Shield,
    title: "Garantie décennale",
    description: "Tous nos travaux sont couverts par notre assurance décennale pour votre tranquillité d'esprit.",
    highlight: "Protection 10 ans",
  },
  {
    icon: Sparkles,
    title: "Finitions soignées",
    description: "Chaque détail compte. Nous portons une attention particulière aux finitions pour un résultat impeccable.",
    highlight: "Perfection des détails",
  },
];

export const WhyChooseUs = () => {
  return (
    <SectionWrapper className="bg-gradient-to-b from-muted/30 to-background">
      <SectionTitle
        badge="Pourquoi nous"
        title="L'excellence comme standard"
        subtitle="Des valeurs qui font la différence et guident chacune de nos interventions depuis plus de 10 ans."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-secondary/30 transition-all duration-300 h-full">
                {/* Highlight badge */}
                <div className="absolute -top-3 left-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20 rounded-full">
                    {reason.highlight}
                  </span>
                </div>
                
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-secondary" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
                
                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    className="w-full h-full text-secondary/10"
                  >
                    <path
                      d="M64 64V0C64 35.3 35.3 64 0 64H64Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
