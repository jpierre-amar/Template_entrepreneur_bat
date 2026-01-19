import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faq";
import { ArrowRight, HelpCircle, MessageSquare } from "lucide-react";

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
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-mesh-gradient" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-block mb-6 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-secondary/10 text-secondary border border-secondary/20 rounded-full"
              >
                Aide & Support
              </motion.span>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Questions <span className="text-gradient-gold">fréquentes</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Trouvez rapidement les réponses à vos questions sur nos services,
                nos garanties et notre fonctionnement.
              </p>
            </motion.div>
          </div>
        </section>

        <SectionWrapper>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <AccordionItem
                    value={faq.id}
                    className="glass-card rounded-xl border border-border/50 px-6 data-[state=open]:border-secondary/30"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                          <HelpCircle className="w-5 h-5 text-secondary" />
                        </div>
                        <span className="font-display font-semibold text-foreground text-lg">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 pl-14">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.reponse}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </SectionWrapper>

        {/* CTA Section */}
        <SectionWrapper>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-12 rounded-3xl"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-10 h-10 text-secondary" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Vous avez d'autres <span className="text-gradient-gold">questions</span> ?
                </h2>
                <p className="text-muted-foreground">
                  N'hésitez pas à nous contacter directement. Notre équipe est à
                  votre écoute pour répondre à toutes vos questions.
                </p>
              </div>
              <Link to="/contact">
                <Button variant="premium" size="lg">
                  Nous contacter
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};
