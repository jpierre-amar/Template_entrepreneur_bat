import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Heart, Award } from 'lucide-react';
import { SectionTitle } from '../shared/SectionTitle';
import { SectionWrapper } from '../shared/SectionWrapper';

const reasons = [
  {
    icon: Award,
    title: 'Qualité exceptionnelle',
    description: 'Nous utilisons uniquement des matériaux de première qualité et suivons les normes les plus strictes.'
  },
  {
    icon: TrendingUp,
    title: 'Transparence totale',
    description: 'Devis détaillés sans surprise, suivi régulier de votre projet et communication claire à chaque étape.'
  },
  {
    icon: Heart,
    title: 'Proximité & écoute',
    description: 'Nous sommes à votre écoute pour comprendre vos besoins et vous accompagner dans votre projet.'
  },
  {
    icon: CheckCircle,
    title: 'Respect des délais',
    description: 'Nous nous engageons à respecter les délais convenus et à vous tenir informé de l\'avancement.'
  }
];

export const WhyChooseUs = () => {
  return (
    <SectionWrapper className="bg-gray-50">
      <SectionTitle
        title="Pourquoi nous choisir ?"
        subtitle="Des valeurs qui font la différence"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600">
                {reason.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

