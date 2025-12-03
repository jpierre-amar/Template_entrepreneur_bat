import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-xl font-display font-bold">BTP Pro</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Votre partenaire de confiance pour tous vos projets de rénovation, 
              construction et dépannage. Plus de 10 ans d'expérience au service 
              de votre satisfaction.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-secondary transition-colors">
                  Nos services
                </Link>
              </li>
              <li>
                <Link to="/realisations" className="text-gray-300 hover:text-secondary transition-colors">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-gray-300 hover:text-secondary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-secondary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-1 text-secondary flex-shrink-0" />
                <a href="tel:+33612345678" className="text-gray-300 hover:text-secondary transition-colors">
                  06 12 34 56 78
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-1 text-secondary flex-shrink-0" />
                <a href="mailto:contact@btppro.fr" className="text-gray-300 hover:text-secondary transition-colors">
                  contact@btppro.fr
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-secondary flex-shrink-0" />
                <span className="text-gray-300">
                  Montpellier et alentours<br />
                  Rayon de 50 km
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-300 text-sm">
          <p>&copy; {currentYear} BTP Pro. Tous droits réservés.</p>
          <p className="mt-2">
            <Link to="/mentions-legales" className="hover:text-secondary transition-colors">
              Mentions légales
            </Link>
            {' | '}
            <Link to="/politique-confidentialite" className="hover:text-secondary transition-colors">
              Politique de confidentialité
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

