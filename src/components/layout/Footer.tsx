import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  ArrowRight,
  Clock,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { path: "/services", label: "Services" },
  { path: "/realisations", label: "Réalisations" },
  { path: "/a-propos", label: "À propos" },
  { path: "/temoignages", label: "Témoignages" },
  { path: "/blog", label: "Blog" },
  { path: "/faq", label: "FAQ" },
  { path: "/contact", label: "Contact" },
];

const services = [
  "Rénovation Intérieure",
  "Rénovation Extérieure",
  "Construction & Extension",
  "Dépannage & Urgences",
  "Plomberie",
  "Menuiserie",
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-muted/40" />
      
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link to="/" className="inline-flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-glow">
                  <span className="text-secondary-foreground font-display font-bold text-xl">B</span>
                </div>
                <div>
                  <span className="text-xl font-display font-bold text-foreground">
                    BTP <span className="text-gradient-gold">Pro</span>
                  </span>
                  <p className="text-[10px] text-muted-foreground tracking-widest uppercase">
                    Excellence & Qualité
                  </p>
                </div>
              </Link>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Votre partenaire de confiance pour tous vos projets de rénovation, 
                construction et dépannage depuis plus de 10 ans.
              </p>
              
              {/* Certifications */}
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-secondary mr-1" />
                  Décennale
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-secondary mr-1" />
                  7j/7
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="font-display font-semibold text-foreground mb-6">
                Navigation
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path} 
                      className="text-muted-foreground hover:text-secondary transition-colors inline-flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-secondary" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-display font-semibold text-foreground mb-6">
                Nos Services
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link 
                      to="/services" 
                      className="text-muted-foreground hover:text-secondary transition-colors inline-flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-secondary" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-display font-semibold text-foreground mb-6">
                Contact
              </h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="tel:+33612345678" 
                    className="flex items-start space-x-3 text-muted-foreground hover:text-secondary transition-colors group"
                  >
                    <Phone className="w-5 h-5 mt-0.5 text-secondary flex-shrink-0" />
                    <span>06 12 34 56 78</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:contact@btppro.fr" 
                    className="flex items-start space-x-3 text-muted-foreground hover:text-secondary transition-colors group"
                  >
                    <Mail className="w-5 h-5 mt-0.5 text-secondary flex-shrink-0" />
                    <span>contact@btppro.fr</span>
                  </a>
                </li>
                <li className="flex items-start space-x-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 mt-0.5 text-secondary flex-shrink-0" />
                  <span>
                    Montpellier et alentours<br />
                    Rayon de 50 km
                  </span>
                </li>
              </ul>
              
              {/* Social Links */}
              <div className="flex space-x-3 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary/30 hover:bg-secondary/10 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="border-t border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-display font-semibold text-foreground">
                  Prêt à démarrer votre projet ?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Devis gratuit et sans engagement
                </p>
              </div>
              <Link to="/contact">
                <Button variant="premium" size="lg">
                  Demander un devis
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <p>
                © {currentYear} BTP Pro. Tous droits réservés.
              </p>
              <div className="flex items-center space-x-6">
                <Link 
                  to="/mentions-legales" 
                  className="hover:text-secondary transition-colors"
                >
                  Mentions légales
                </Link>
                <Link 
                  to="/politique-confidentialite" 
                  className="hover:text-secondary transition-colors"
                >
                  Confidentialité
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
