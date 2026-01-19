import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { articles } from "@/data/articles";
import { Calendar, ArrowLeft, Clock, User, ArrowRight } from "lucide-react";

export const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <PageContainer>
        <SectionWrapper className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-display font-bold text-foreground mb-4">
              Article non trouvé
            </h1>
            <p className="text-muted-foreground mb-8">
              Cet article n'existe pas ou a été supprimé.
            </p>
            <Link to="/blog">
              <Button variant="premium">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour au blog
              </Button>
            </Link>
          </div>
        </SectionWrapper>
      </PageContainer>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Convertir le markdown simple en HTML (version basique)
  const formatContent = (content: string) => {
    return content.split("\n").map((line, index) => {
      if (line.startsWith("# ")) {
        return (
          <h2
            key={index}
            className="text-2xl font-display font-bold text-foreground mt-10 mb-4"
          >
            {line.substring(2)}
          </h2>
        );
      }
      if (line.startsWith("## ")) {
        return (
          <h3
            key={index}
            className="text-xl font-display font-semibold text-foreground mt-8 mb-3"
          >
            {line.substring(3)}
          </h3>
        );
      }
      if (line.startsWith("### ")) {
        return (
          <h4
            key={index}
            className="text-lg font-display font-semibold text-foreground mt-6 mb-2"
          >
            {line.substring(4)}
          </h4>
        );
      }
      if (line.startsWith("- ")) {
        return (
          <li key={index} className="ml-6 mb-2 text-muted-foreground flex items-start">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0" />
            {line.substring(2)}
          </li>
        );
      }
      if (line.trim() === "") {
        return <br key={index} />;
      }
      return (
        <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
          {line}
        </p>
      );
    });
  };

  // Get related articles
  const relatedArticles = articles
    .filter((a) => a.id !== article.id && a.categorie === article.categorie)
    .slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{article.titre} - Blog BTP Pro</title>
        <meta name="description" content={article.resume} />
      </Helmet>
      <PageContainer>
        {/* Hero */}
        <section className="relative pt-32 pb-8">
          <div className="absolute inset-0 bg-mesh-gradient" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-muted-foreground hover:text-secondary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au blog
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
                {article.categorie}
              </Badge>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                {article.titre}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-secondary" />
                  {formatDate(article.date)}
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2 text-secondary" />
                  {article.auteur}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-secondary" />
                  5 min de lecture
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute -inset-1 rounded-3xl border border-secondary/20 opacity-50" />
            <img
              src={article.image}
              alt={article.titre}
              className="w-full h-64 md:h-96 object-cover rounded-2xl"
            />
          </motion.div>
        </div>

        {/* Content */}
        <SectionWrapper className="pt-0">
          <div className="max-w-3xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-8 md:p-12 rounded-3xl"
            >
              {formatContent(article.contenu)}
            </motion.article>

            {/* Related articles */}
            {relatedArticles.length > 0 && (
              <div className="mt-16">
                <h3 className="text-2xl font-display font-bold text-foreground mb-8">
                  Articles <span className="text-gradient-gold">similaires</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedArticles.map((relatedArticle) => (
                    <Link
                      key={relatedArticle.id}
                      to={`/blog/${relatedArticle.id}`}
                      className="glass-card p-4 rounded-xl flex gap-4 group hover:border-secondary/30 transition-all"
                    >
                      <img
                        src={relatedArticle.image}
                        alt={relatedArticle.titre}
                        className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-secondary transition-colors line-clamp-2">
                          {relatedArticle.titre}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {formatDate(relatedArticle.date)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 glass-card p-8 rounded-3xl text-center"
            >
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                Besoin d'un professionnel ?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contactez-nous pour un devis gratuit et sans engagement.
              </p>
              <Link to="/contact">
                <Button variant="premium">
                  Demander un devis
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};
