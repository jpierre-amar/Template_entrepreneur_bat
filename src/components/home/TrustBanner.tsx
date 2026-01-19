import { motion } from "framer-motion";
import { Award, Shield, Clock, Users, Star, ThumbsUp } from "lucide-react";

const trustItems = [
  {
    icon: Award,
    value: "10+",
    label: "Années d'expérience",
    description: "Expertise reconnue",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Garantie décennale",
    description: "Assurance complète",
  },
  {
    icon: Clock,
    value: "2h",
    label: "Intervention urgence",
    description: "Réactivité garantie",
  },
  {
    icon: Users,
    value: "15+",
    label: "Artisans certifiés",
    description: "Équipe qualifiée",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Note moyenne",
    description: "Avis clients",
  },
  {
    icon: ThumbsUp,
    value: "500+",
    label: "Projets réalisés",
    description: "Confiance établie",
  },
];

export const TrustBanner = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background" />
      
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      
      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary/10 border border-secondary/20 mb-4 group-hover:bg-secondary/20 group-hover:border-secondary/30 transition-all duration-300"
                >
                  <Icon className="w-6 h-6 text-secondary" />
                </motion.div>
                <div className="text-2xl md:text-3xl font-display font-bold text-gradient-gold mb-1">
                  {item.value}
                </div>
                <div className="text-sm font-medium text-foreground mb-0.5">
                  {item.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {item.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
