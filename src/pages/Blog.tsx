import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionTitle } from '../components/shared/SectionTitle';
import { SectionWrapper } from '../shared/SectionWrapper';
import { Card } from '../components/ui/Card';
import { articles } from '../data/articles';
import { Calendar, ArrowRight } from 'lucide-react';

export const Blog = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog - BTP Pro</title>
        <meta
          name="description"
          content="Conseils et astuces pour vos projets de rénovation et construction. Découvrez nos articles sur le BTP, la rénovation énergétique et bien plus."
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
              Blog
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Conseils, astuces et actualités pour vos projets de rénovation et construction
            </p>
          </motion.div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={article.id} className="overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.titre}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{formatDate(article.date)}</span>
                    <span className="mx-2">•</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                      {article.categorie}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {article.titre}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.resume}
                  </p>
                  <Link
                    to={`/blog/${article.id}`}
                    className="text-primary font-medium hover:text-primary-dark inline-flex items-center group"
                  >
                    Lire l'article
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};

