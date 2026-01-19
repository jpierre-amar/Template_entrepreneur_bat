import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export const CTASection = () => {
  return (
    <SectionWrapper className="relative">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <div className="glass-card p-8 md:p-12 lg:p-16 rounded-3xl border border-secondary/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-secondary/10 text-secondary border border-secondary/20 rounded-full"
              >
                Un projet en tête ?
              </motion.span>
              
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Votre projet, nos{" "}
                <span className="text-gradient-gold">compétences</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Obtenez un devis gratuit et personnalisé pour votre projet de rénovation 
                ou d'agencement. Notre équipe vous répond rapidement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="premium" size="xl" className="w-full sm:w-auto">
                    Demander un devis
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="tel:0983322642">
                  <Button variant="outline" size="xl" className="w-full sm:w-auto">
                    <Phone className="w-5 h-5 mr-2" />
                    09 83 32 26 42
                  </Button>
                </a>
              </div>
            </div>
            
            {/* Contact cards */}
            <div className="space-y-4">
              {/* Phone card */}
              <motion.a
                href="tel:0983322642"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="block p-6 rounded-2xl bg-muted/50 border border-border/50 hover:border-secondary/30 hover:bg-muted/80 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Appelez-nous</div>
                    <div className="text-xl font-semibold text-foreground">09 83 32 26 42</div>
                  </div>
                </div>
              </motion.a>
              
              {/* Email card */}
              <motion.a
                href="mailto:contact@maisonmeloni.com"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="block p-6 rounded-2xl bg-muted/50 border border-border/50 hover:border-secondary/30 hover:bg-muted/80 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Écrivez-nous</div>
                    <div className="text-xl font-semibold text-foreground">contact@maisonmeloni.com</div>
                  </div>
                </div>
              </motion.a>
              
              {/* Location */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="p-6 rounded-2xl bg-secondary/10 border border-secondary/20"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm text-secondary mb-1">Nos locaux</div>
                    <div className="text-xl font-semibold text-foreground">27 chemin de Séverin, Arles</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};
