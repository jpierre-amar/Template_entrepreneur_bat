import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionWrapper } from '../components/shared/SectionWrapper';
import { articles } from '../data/articles';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <PageContainer>
        <SectionWrapper>
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Article non trouvé</h1>
            <Link to="/blog">
              <Button>Retour au blog</Button>
            </Link>
          </div>
        </SectionWrapper>
      </PageContainer>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Convertir le markdown simple en HTML (version basique)
  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('# ')) {
          return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{line.substring(2)}</h2>;
        }
        if (line.startsWith('## ')) {
          return <h3 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-3">{line.substring(3)}</h3>;
        }
        if (line.startsWith('### ')) {
          return <h4 key={index} className="text-lg font-semibold text-gray-900 mt-4 mb-2">{line.substring(4)}</h4>;
        }
        if (line.startsWith('- ')) {
          return <li key={index} className="ml-6 mb-2 text-gray-600">{line.substring(2)}</li>;
        }
        if (line.trim() === '') {
          return <br key={index} />;
        }
        return <p key={index} className="text-gray-600 mb-4 leading-relaxed">{line}</p>;
      });
  };

  return (
    <>
      <Helmet>
        <title>{article.titre} - Blog BTP Pro</title>
        <meta name="description" content={article.resume} />
      </Helmet>
      <PageContainer>
        <SectionWrapper className="pt-32 pb-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-primary hover:text-primary-dark mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au blog
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{formatDate(article.date)}</span>
                <span className="mx-2">•</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
                  {article.categorie}
                </span>
                <span className="mx-2">•</span>
                <span>{article.auteur}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                {article.titre}
              </h1>
            </div>

            <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
              <img
                src={article.image}
                alt={article.titre}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="max-w-3xl mx-auto prose prose-lg">
              {formatContent(article.contenu)}
            </div>
          </motion.article>
        </SectionWrapper>
      </PageContainer>
    </>
  );
};

