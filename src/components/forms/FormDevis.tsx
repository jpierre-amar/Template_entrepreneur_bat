import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const devisSchema = z.object({
  nom: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  telephone: z.string().min(10, 'Numéro de téléphone invalide'),
  typeProjet: z.string().min(1, 'Veuillez sélectionner un type de projet'),
  ville: z.string().min(2, 'Veuillez indiquer votre ville'),
  codePostal: z.string().regex(/^\d{5}$/, 'Code postal invalide'),
  budget: z.string().min(1, 'Veuillez sélectionner une fourchette de budget'),
  description: z.string().min(20, 'Veuillez décrire votre projet (minimum 20 caractères)'),
});

type DevisFormData = z.infer<typeof devisSchema>;

export const FormDevis = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DevisFormData>({
    resolver: zodResolver(devisSchema),
  });

  const onSubmit = async (data: DevisFormData) => {
    // Simulation de l'envoi
    console.log('Demande de devis:', data);
    // Ici, vous pourriez appeler une API
    // await fetch('/api/devis', { method: 'POST', body: JSON.stringify(data) });
    
    setIsSubmitted(true);
    reset();
    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-2"
        >
          <CheckCircle className="w-5 h-5 text-green-600" />
          <p className="text-green-800 font-medium">
            Demande de devis envoyée ! Nous vous contacterons sous 48h.
          </p>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
            Nom complet *
          </label>
          <input
            type="text"
            id="nom"
            {...register('nom')}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.nom ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.nom && (
            <p className="mt-1 text-sm text-red-600">{errors.nom.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
            Téléphone *
          </label>
          <input
            type="tel"
            id="telephone"
            {...register('telephone')}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.telephone ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.telephone && (
            <p className="mt-1 text-sm text-red-600">{errors.telephone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="typeProjet" className="block text-sm font-medium text-gray-700 mb-2">
            Type de projet *
          </label>
          <select
            id="typeProjet"
            {...register('typeProjet')}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.typeProjet ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Sélectionnez un type</option>
            <option value="renovation-interieure">Rénovation intérieure</option>
            <option value="renovation-exterieure">Rénovation extérieure</option>
            <option value="construction">Construction / Extension</option>
            <option value="depannage">Dépannage / Urgence</option>
            <option value="autre">Autre</option>
          </select>
          {errors.typeProjet && (
            <p className="mt-1 text-sm text-red-600">{errors.typeProjet.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="ville" className="block text-sm font-medium text-gray-700 mb-2">
            Ville *
          </label>
          <input
            type="text"
            id="ville"
            {...register('ville')}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.ville ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.ville && (
            <p className="mt-1 text-sm text-red-600">{errors.ville.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="codePostal" className="block text-sm font-medium text-gray-700 mb-2">
            Code postal *
          </label>
          <input
            type="text"
            id="codePostal"
            {...register('codePostal')}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.codePostal ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.codePostal && (
            <p className="mt-1 text-sm text-red-600">{errors.codePostal.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
            Budget approximatif *
          </label>
          <select
            id="budget"
            {...register('budget')}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.budget ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Sélectionnez</option>
            <option value="moins-10000">Moins de 10 000 €</option>
            <option value="10000-25000">10 000 € - 25 000 €</option>
            <option value="25000-50000">25 000 € - 50 000 €</option>
            <option value="50000-100000">50 000 € - 100 000 €</option>
            <option value="plus-100000">Plus de 100 000 €</option>
          </select>
          {errors.budget && (
            <p className="mt-1 text-sm text-red-600">{errors.budget.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
          Description du projet *
        </label>
        <textarea
          id="description"
          rows={6}
          {...register('description')}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
            errors.description ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Décrivez votre projet en détail..."
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
        )}
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="btn-primary w-full md:w-auto flex items-center justify-center space-x-2"
      >
        <Send className="w-5 h-5" />
        <span>Demander mon devis gratuit</span>
      </motion.button>
    </motion.form>
  );
};

