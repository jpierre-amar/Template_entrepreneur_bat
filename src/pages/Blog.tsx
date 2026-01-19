import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { articles } from "@/data/articles";
import { Calendar, ArrowRight, Clock } from "lucide-react";

export const Blog = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog - BTP Pro | Conseils & Actualités</title>
        <meta
          name="description"
          content="Conseils et astuces pour vos projets de rénovation et construction. Découvrez nos articles sur le BTP, la rénovation énergétique et bien plus."
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
                Actualités
              </motion.span>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Notre <span className="text-gradient-gold">Blog</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Conseils, astuces et actualités pour vos projets de rénovation et
                construction.
              </p>
            </motion.div>
          </div>
        </section>

        <SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="glass" className="overflow-hidden h-full group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.titre}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                    <Badge className="absolute top-4 left-4 bg-secondary/90 text-secondary-foreground">
                      {article.categorie}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1 text-secondary" />
                        <span>{formatDate(article.date)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-secondary" />
                        <span>5 min</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                      {article.titre}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed">
                      {article.resume}
                    </p>
                    <Link
                      to={`/blog/${article.id}`}
                      className="inline-flex items-center text-sm font-medium text-secondary hover:text-secondary/80 transition-colors group/link"
                    >
                      Lire l'article
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};
