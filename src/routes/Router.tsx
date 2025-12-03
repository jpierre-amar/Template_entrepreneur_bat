import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Services } from '../pages/Services';
import { Realisations } from '../pages/Realisations';
import { APropos } from '../pages/APropos';
import { Temoignages } from '../pages/Temoignages';
import { Blog } from '../pages/Blog';
import { ArticleDetail } from '../pages/ArticleDetail';
import { FAQ } from '../pages/FAQ';
import { Contact } from '../pages/Contact';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/realisations" element={<Realisations />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="/temoignages" element={<Temoignages />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<ArticleDetail />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

