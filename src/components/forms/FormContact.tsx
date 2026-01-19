import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  telephone: z.string().min(10, "Numéro de téléphone invalide"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const FormContact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Données du formulaire:", data);
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
            <p className="text-foreground font-medium">Message envoyé !</p>
            <p className="text-sm text-muted-foreground">
              Nous vous répondrons dans les plus brefs délais.
            </p>
          </div>
        </motion.div>
      )}

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Votre message..."
          {...register("message")}
          className={errors.message ? "border-destructive" : ""}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
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
            Envoyer le message
          </>
        )}
      </Button>
    </motion.form>
  );
};
