import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionWrapper } from '../components/shared/SectionWrapper';
import { Accordion } from '../components/ui/Accordion';
import { faqs } from '../data/faq';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ - Questions fréquentes - BTP Pro</title>
        <meta
          name="description"
          content="Réponses aux questions fréquentes sur nos services, délais, zones d'intervention, garanties et modalités de paiement."
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
              Questions fréquentes
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Trouvez rapidement les réponses à vos questions
            </p>
          </motion.div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <Accordion key={faq.id} title={faq.question}>
                  <p>{faq.reponse}</p>
                </Accordion>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-gray-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Vous avez d'autres questions ?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              N'hésitez pas à nous contacter directement. Notre équipe est à votre écoute 
              pour répondre à toutes vos questions.
            </p>
            <Link to="/contact">
              <Button variant="primary">Nous contacter</Button>
            </Link>
          </motion.div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};

