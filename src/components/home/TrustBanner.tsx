import { motion } from 'framer-motion';
import { Award, Shield, Clock, Users } from 'lucide-react';

const trustItems = [
  {
    icon: Award,
    title: '10+ ans d\'expérience',
    description: 'Expertise reconnue'
  },
  {
    icon: Shield,
    title: 'Garantie décennale',
    description: 'Assurance complète'
  },
  {
    icon: Clock,
    title: 'Intervention rapide',
    description: 'Sous 2h pour urgences'
  },
  {
    icon: Users,
    title: 'Équipe certifiée',
    description: 'Artisans qualifiés'
  }
];

export const TrustBanner = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

