import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionWrapper } from '../shared/SectionWrapper';
import { FormContact } from '../components/forms/FormContact';
import { FormDevis } from '../components/forms/FormDevis';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
  const [activeTab, setActiveTab] = useState<'contact' | 'devis'>('devis');

  return (
    <>
      <Helmet>
        <title>Contact & Devis gratuit - BTP Pro</title>
        <meta
          name="description"
          content="Contactez-nous pour un devis gratuit et sans engagement. Formulaire de contact et demande de devis en ligne."
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
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Demandez votre devis gratuit ou posez-nous vos questions
            </p>
          </motion.div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="max-w-5xl mx-auto">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-8">
              <button
                onClick={() => setActiveTab('devis')}
                className={`px-6 py-3 font-semibold transition-colors ${
                  activeTab === 'devis'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Demande de devis
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-6 py-3 font-semibold transition-colors ${
                  activeTab === 'contact'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Contact général
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Formulaire */}
              <div className="lg:col-span-2">
                {activeTab === 'devis' ? <FormDevis /> : <FormContact />}
              </div>

              {/* Informations de contact */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Nos coordonnées
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Téléphone</p>
                        <a href="tel:+33612345678" className="text-gray-600 hover:text-primary">
                          06 12 34 56 78
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <a href="mailto:contact@btppro.fr" className="text-gray-600 hover:text-primary">
                          contact@btppro.fr
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Zone d'intervention</p>
                        <p className="text-gray-600">
                          Montpellier et alentours<br />
                          Rayon de 50 km
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Horaires</p>
                        <p className="text-gray-600">
                          Lun - Ven : 8h - 18h<br />
                          Sam : 9h - 12h<br />
                          Urgences : 7j/7
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-primary rounded-xl p-6 text-white"
                >
                  <h3 className="text-xl font-semibold mb-3">
                    Devis gratuit
                  </h3>
                  <p className="text-gray-100 mb-4">
                    Tous nos devis sont gratuits et sans engagement. 
                    Nous vous répondons sous 48h.
                  </p>
                  <a
                    href="tel:+33612345678"
                    className="inline-block bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Appeler maintenant
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};

