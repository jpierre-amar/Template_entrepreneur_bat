import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { images } from '../../data/images';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary to-primary-dark">
      <div className="absolute inset-0 z-0">
        <img
          src={images.heroConstruction}
          alt="Chantier de construction"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Votre partenaire de confiance pour tous vos projets de{' '}
              <span className="text-secondary">rénovation</span> et de{' '}
              <span className="text-secondary">construction</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Plus de 10 ans d'expérience au service de votre satisfaction. 
              Qualité, transparence et respect des délais garantis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="secondary" className="w-full sm:w-auto">
                  Demander un devis gratuit
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Button>
              </Link>
              <Link to="/realisations">
                <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
                  Découvrir nos réalisations
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <img
              src={images.heroConstruction}
              alt="Chantier professionnel"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

