import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionTitle } from '../components/shared/SectionTitle';
import { SectionWrapper } from '../components/shared/SectionWrapper';
import { Card } from '../components/ui/Card';
import { images } from '../data/images';
import { CheckCircle, Shield, Clock, Users, Award, Heart } from 'lucide-react';

const engagements = [
  {
    icon: Award,
    title: 'Qualité',
    description: 'Nous utilisons uniquement des matériaux de première qualité et suivons les normes les plus strictes.'
  },
  {
    icon: Clock,
    title: 'Délais',
    description: 'Nous nous engageons à respecter les délais convenus et à vous tenir informé de l\'avancement.'
  },
  {
    icon: Shield,
    title: 'Transparence',
    description: 'Devis détaillés sans surprise, suivi régulier de votre projet et communication claire.'
  },
  {
    icon: Users,
    title: 'Sécurité',
    description: 'Respect strict des normes de sécurité et assurance décennale pour votre tranquillité.'
  },
  {
    icon: Heart,
    title: 'Respect',
    description: 'Respect de votre environnement, de vos voisins et des normes environnementales en vigueur.'
  },
  {
    icon: CheckCircle,
    title: 'Normes',
    description: 'Conformité totale aux normes RT 2012, RE 2020 et toutes les réglementations en vigueur.'
  }
];

export const APropos = () => {
  return (
    <>
      <Helmet>
        <title>À propos - BTP Pro</title>
        <meta
          name="description"
          content="Découvrez BTP Pro, votre entrepreneur BTP de confiance. Plus de 10 ans d'expérience en rénovation, construction et dépannage dans la région de Montpellier."
        />
      </Helmet>
      <PageContainer>
        <SectionWrapper className="bg-gradient-to-br from-primary to-primary-dark text-white pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              À propos de nous
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Votre partenaire de confiance depuis plus de 10 ans
            </p>
          </motion.div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Notre histoire
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Fondée il y a plus de 10 ans, BTP Pro est née d'une passion pour 
                  l'artisanat et le désir de transformer les maisons en foyers chaleureux 
                  et fonctionnels. Depuis nos débuts, nous avons accompagné des centaines 
                  de clients dans leurs projets de rénovation, construction et dépannage.
                </p>
                <p>
                  Notre équipe d'artisans qualifiés et certifiés met son savoir-faire 
                  au service de votre satisfaction. Chaque projet est unique et mérite 
                  notre attention particulière, de la conception à la réalisation finale.
                </p>
                <p>
                  Nous croyons en la transparence, la qualité et le respect des délais. 
                  Ces valeurs guident chacune de nos interventions et font de nous un 
                  partenaire de confiance pour tous vos projets BTP.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={images.about}
                alt="Équipe BTP Pro"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-gray-50">
          <SectionTitle
            title="Nos engagements"
            subtitle="Des valeurs qui guident chacune de nos interventions"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engagements.map((engagement, index) => {
              const Icon = engagement.icon;
              return (
                <Card key={index} className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {engagement.title}
                  </h3>
                  <p className="text-gray-600">
                    {engagement.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <Card className="p-8 bg-gradient-to-r from-primary to-primary-dark text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold mb-4">
                  Zones d'intervention
                </h2>
                <p className="text-gray-100 mb-6">
                  Nous intervenons dans toute la région de Montpellier et ses alentours, 
                  dans un rayon d'environ 50 km. Nos principales zones d'intervention incluent :
                </p>
                <ul className="space-y-2 text-gray-100">
                  <li>• Montpellier et agglomération</li>
                  <li>• Nîmes et ses environs</li>
                  <li>• Sète et le bassin de Thau</li>
                  <li>• Lunel et la Petite Camargue</li>
                  <li>• Béziers et le Biterrois</li>
                  <li>• Perpignan et le Roussillon</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Contactez-nous</h3>
                <p className="text-gray-100 mb-4">
                  Vous avez un projet dans notre zone d'intervention ? 
                  N'hésitez pas à nous contacter pour un devis gratuit et sans engagement.
                </p>
                <a
                  href="tel:+33612345678"
                  className="inline-block btn-secondary"
                >
                  Appeler maintenant
                </a>
              </div>
            </div>
          </Card>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};

