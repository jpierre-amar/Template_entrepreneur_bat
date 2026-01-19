import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const devisSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  telephone: z.string().min(10, "Numéro de téléphone invalide"),
  typeProjet: z.string().min(1, "Veuillez sélectionner un type de projet"),
  ville: z.string().min(2, "Veuillez indiquer votre ville"),
  codePostal: z.string().regex(/^\d{5}$/, "Code postal invalide"),
  budget: z.string().min(1, "Veuillez sélectionner une fourchette de budget"),
  description: z.string().min(20, "Veuillez décrire votre projet (minimum 20 caractères)"),
});

type DevisFormData = z.infer<typeof devisSchema>;

export const FormDevis = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<DevisFormData>({
    resolver: zodResolver(devisSchema),
  });

  const onSubmit = async (data: DevisFormData) => {
    console.log("Demande de devis:", data);
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
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-secondary/10 border border-secondary/30 rounded-xl p-4 flex items-center space-x-3"
        >
          <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-secondary" />
          </div>
          <div>
            <p className="text-foreground font-medium">Demande envoyée !</p>
            <p className="text-sm text-muted-foreground">
              Nous vous contacterons sous 48h.
            </p>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="nom">Nom complet *</Label>
          <Input
            id="nom"
            placeholder="Jean Dupont"
            {...register("nom")}
            className={errors.nom ? "border-destructive" : ""}
          />
          {errors.nom && (
            <p className="text-sm text-destructive">{errors.nom.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="jean@exemple.fr"
            {...register("email")}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="telephone">Téléphone *</Label>
          <Input
            id="telephone"
            type="tel"
            placeholder="06 12 34 56 78"
            {...register("telephone")}
            className={errors.telephone ? "border-destructive" : ""}
          />
          {errors.telephone && (
            <p className="text-sm text-destructive">{errors.telephone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="typeProjet">Type de projet *</Label>
          <Select onValueChange={(value) => setValue("typeProjet", value)}>
            <SelectTrigger className={errors.typeProjet ? "border-destructive" : ""}>
              <SelectValue placeholder="Sélectionnez un type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="renovation-interieure">Rénovation intérieure</SelectItem>
              <SelectItem value="renovation-exterieure">Rénovation extérieure</SelectItem>
              <SelectItem value="construction">Construction / Extension</SelectItem>
              <SelectItem value="depannage">Dépannage / Urgence</SelectItem>
              <SelectItem value="autre">Autre</SelectItem>
            </SelectContent>
          </Select>
          {errors.typeProjet && (
            <p className="text-sm text-destructive">{errors.typeProjet.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="ville">Ville *</Label>
          <Input
            id="ville"
            placeholder="Montpellier"
            {...register("ville")}
            className={errors.ville ? "border-destructive" : ""}
          />
          {errors.ville && (
            <p className="text-sm text-destructive">{errors.ville.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="codePostal">Code postal *</Label>
          <Input
            id="codePostal"
            placeholder="34000"
            {...register("codePostal")}
            className={errors.codePostal ? "border-destructive" : ""}
          />
          {errors.codePostal && (
            <p className="text-sm text-destructive">{errors.codePostal.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget">Budget approximatif *</Label>
          <Select onValueChange={(value) => setValue("budget", value)}>
            <SelectTrigger className={errors.budget ? "border-destructive" : ""}>
              <SelectValue placeholder="Sélectionnez" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="moins-10000">Moins de 10 000 €</SelectItem>
              <SelectItem value="10000-25000">10 000 € - 25 000 €</SelectItem>
              <SelectItem value="25000-50000">25 000 € - 50 000 €</SelectItem>
              <SelectItem value="50000-100000">50 000 € - 100 000 €</SelectItem>
              <SelectItem value="plus-100000">Plus de 100 000 €</SelectItem>
            </SelectContent>
          </Select>
          {errors.budget && (
            <p className="text-sm text-destructive">{errors.budget.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description du projet *</Label>
        <Textarea
          id="description"
          rows={6}
          placeholder="Décrivez votre projet en détail : type de travaux, surface, contraintes particulières..."
          {...register("description")}
          className={errors.description ? "border-destructive" : ""}
        />
        {errors.description && (
          <p className="text-sm text-destructive">{errors.description.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="premium"
        size="lg"
        disabled={isSubmitting}
        className="w-full md:w-auto"
      >
        {isSubmitting ? (
          "Envoi en cours..."
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Demander mon devis gratuit
            <ArrowRight className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>
    </motion.form>
  );
};
