import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play, Leaf, Clock, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "10+", label: "Années d'expérience" },
  { value: "100+", label: "Projets réalisés" },
  { value: "100%", label: "Engagement qualité" },
];

const features = [
  { icon: Leaf, text: "Certifié RGE" },
  { icon: Clock, text: "Depuis 2018" },
  { icon: Award, text: "Matériaux bio-sourcés" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-mesh-gradient" />
        
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl"
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--secondary)) 1px, transparent 1px),
                             linear-gradient(to bottom, hsl(var(--secondary)) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
        
        {/* Decorative lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <motion.line
            x1="0" y1="100%" x2="100%" y2="0"
            stroke="url(#gold-gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <defs>
            <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse mr-2" />
              <span className="text-sm font-medium text-secondary">
                Entreprise générale du bâtiment en Provence
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-[1.1]"
            >
              Votre projet, nos{" "}
              <span className="text-gradient-gold">compétences</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Rénovation, agencement d'espace et menuiserie sur mesure. 
              Une entreprise moderne et engagée dans la protection du patrimoine et de l'environnement.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-sm text-muted-foreground"
                >
                  <feature.icon className="w-4 h-4 text-secondary" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/contact">
                <Button variant="premium" size="xl">
                  Demander un devis gratuit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/realisations">
                <Button variant="outline-light" size="xl">
                  <Play className="w-5 h-5 mr-2" />
                  Voir nos réalisations
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            {/* Main visual container */}
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 rounded-3xl border border-secondary/20 opacity-50" />
              <div className="absolute -inset-8 rounded-3xl border border-secondary/10 opacity-30" />
              
              {/* Stats cards */}
              <div className="relative glass-card p-8 rounded-3xl">
                <div className="grid grid-cols-1 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-2xl bg-muted/50 border border-border/50"
                    >
                      <div>
                        <div className="text-4xl font-display font-bold text-gradient-gold">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                      <CheckCircle className="w-8 h-8 text-secondary/50" />
                    </motion.div>
                  ))}
                </div>
                
                {/* Trust badges */}
                <div className="mt-8 pt-6 border-t border-border/50">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>RGE</span>
                    <span>•</span>
                    <span>Circuits courts</span>
                    <span>•</span>
                    <span>Bio-sourcé</span>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 glass-card px-6 py-4 rounded-2xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      Éco-responsable
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Matériaux durables
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest mb-2">Découvrir</span>
          <div className="w-6 h-10 rounded-full border-2 border-secondary/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-secondary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
