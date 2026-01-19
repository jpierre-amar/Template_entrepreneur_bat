import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { path: "/", label: "Accueil" },
  { path: "/services", label: "Services" },
  { path: "/realisations", label: "Réalisations" },
  { path: "/a-propos", label: "À propos" },
  { path: "/temoignages", label: "Témoignages" },
  { path: "/blog", label: "Blog" },
  { path: "/faq", label: "FAQ" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-glow">
                <span className="text-secondary-foreground font-display font-bold text-xl">
                  B
                </span>
              </div>
              <div className="absolute -inset-1 bg-secondary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
            <div className="hidden sm:block">
              <span className="text-xl font-display font-bold text-foreground">
                BTP <span className="text-gradient-gold">Pro</span>
              </span>
              <p className="text-[10px] text-muted-foreground tracking-widest uppercase">
                Excellence & Qualité
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                  location.pathname === link.path
                    ? "text-secondary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-secondary rounded-full"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+33612345678"
              className="flex items-center text-sm text-muted-foreground hover:text-secondary transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="hidden xl:inline">06 12 34 56 78</span>
            </a>
            <Link to="/contact">
              <Button variant="premium" size="default">
                Devis gratuit
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-base font-medium transition-all",
                      location.pathname === link.path
                        ? "bg-secondary/10 text-secondary border border-secondary/20"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <div className="pt-4 space-y-3 border-t border-border mt-4">
                <a
                  href="tel:+33612345678"
                  className="flex items-center justify-center px-4 py-3 text-muted-foreground hover:text-secondary transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  06 12 34 56 78
                </a>
                <Link to="/contact" className="block">
                  <Button variant="premium" size="lg" className="w-full">
                    Demander un devis gratuit
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
