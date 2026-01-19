import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { FormContact } from "@/components/forms/FormContact";
import { FormDevis } from "@/components/forms/FormDevis";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Mail, MapPin, Clock, MessageSquare, FileText, Shield, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    content: "06 12 34 56 78",
    href: "tel:+33612345678",
    description: "Lun-Ven: 8h-18h",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@btppro.fr",
    href: "mailto:contact@btppro.fr",
    description: "Réponse sous 48h",
  },
  {
    icon: MapPin,
    title: "Zone d'intervention",
    content: "Montpellier et alentours",
    description: "Rayon de 50 km",
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "Lun-Ven: 8h-18h | Sam: 9h-12h",
    description: "Urgences: 7j/7",
  },
];

const guarantees = [
  { icon: Shield, text: "Garantie décennale" },
  { icon: CheckCircle, text: "Devis 100% gratuit" },
  { icon: MessageSquare, text: "Réponse sous 48h" },
];

export const Contact = () => {
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
                Contactez-nous
              </motion.span>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Parlons de votre <span className="text-gradient-gold">projet</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Demandez votre devis gratuit ou posez-nous vos questions. 
                Notre équipe vous répond sous 48h.
              </p>
            </motion.div>
          </div>
        </section>

        <SectionWrapper>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form Section */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <Card variant="glass" className="p-1">
                  <Tabs defaultValue="devis" className="w-full">
                    <TabsList className="w-full bg-muted/50 p-1 rounded-xl">
                      <TabsTrigger 
                        value="devis" 
                        className="flex-1 rounded-lg data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Demande de devis
                      </TabsTrigger>
                      <TabsTrigger 
                        value="contact"
                        className="flex-1 rounded-lg data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Contact général
                      </TabsTrigger>
                    </TabsList>
                    
                    <div className="p-6">
                      <TabsContent value="devis" className="mt-0">
                        <FormDevis />
                      </TabsContent>
                      <TabsContent value="contact" className="mt-0">
                        <FormContact />
                      </TabsContent>
                    </div>
                  </Tabs>
                </Card>
              </motion.div>

              {/* Contact Info Sidebar */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card variant="glass" className="group">
                        <CardContent className="p-5">
                          {item.href ? (
                            <a href={item.href} className="flex items-start space-x-4">
                              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Icon className="w-5 h-5 text-secondary" />
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">{item.title}</p>
                                <p className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                                  {item.content}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                              </div>
                            </a>
                          ) : (
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                                <Icon className="w-5 h-5 text-secondary" />
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">{item.title}</p>
                                <p className="font-semibold text-foreground">{item.content}</p>
                                <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}

                {/* Guarantees */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Card className="bg-secondary/10 border-secondary/20">
                    <CardContent className="p-5">
                      <h3 className="font-display font-semibold text-foreground mb-4">
                        Nos garanties
                      </h3>
                      <div className="space-y-3">
                        {guarantees.map((guarantee, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <guarantee.icon className="w-5 h-5 text-secondary" />
                            <span className="text-sm text-muted-foreground">{guarantee.text}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};
