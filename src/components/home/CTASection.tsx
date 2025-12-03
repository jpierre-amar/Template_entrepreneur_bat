import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { SectionWrapper } from '../shared/SectionWrapper';

export const CTASection = () => {
  return (
    <SectionWrapper className="bg-gradient-to-r from-primary to-primary-dark">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          Parlez-nous de votre projet
        </h2>
        <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
          Obtenez un devis gratuit et personnalisé pour votre projet de rénovation ou construction.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center space-x-2"
            >
              <span>Demander un devis</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
          <a href="tel:+33612345678">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-100 flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>06 12 34 56 78</span>
            </motion.button>
          </a>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

