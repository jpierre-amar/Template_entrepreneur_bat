export interface FAQ {
  id: string;
  question: string;
  reponse: string;
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Quels sont vos délais d\'intervention ?',
    reponse: 'Pour les urgences, nous intervenons sous 2 à 4 heures. Pour les projets de rénovation ou construction, les délais varient selon l\'ampleur des travaux (de quelques semaines à plusieurs mois). Nous vous fournissons un planning détaillé lors de l\'établissement du devis.'
  },
  {
    id: '2',
    question: 'Dans quelles zones intervenez-vous ?',
    reponse: 'Nous intervenons principalement dans la région de Montpellier et ses alentours, dans un rayon d\'environ 50 km. Cela inclut Nîmes, Sète, Lunel, Béziers, Perpignan et les communes environnantes. N\'hésitez pas à nous contacter pour vérifier si votre zone est couverte.'
  },
  {
    id: '3',
    question: 'Le devis est-il gratuit ?',
    reponse: 'Oui, tous nos devis sont gratuits et sans engagement. Nous nous déplaçons à votre domicile pour évaluer votre projet et vous proposer un devis détaillé sous 48 à 72 heures.'
  },
  {
    id: '4',
    question: 'Quelles sont vos modalités de paiement ?',
    reponse: 'Nous proposons des modalités de paiement adaptées à chaque projet. Généralement, un acompte de 30% est demandé au démarrage des travaux, puis des paiements échelonnés selon l\'avancement, et le solde à la réception des travaux. Nous acceptons les chèques, virements et espèces.'
  },
  {
    id: '5',
    question: 'Êtes-vous assurés et garantis ?',
    reponse: 'Oui, nous sommes entièrement assurés (responsabilité civile décennale) et garantis. Nous respectons toutes les normes en vigueur et vous fournissons toutes les garanties légales (garantie décennale, biennale, de parfait achèvement).'
  },
  {
    id: '6',
    question: 'Travaillez-vous avec des artisans certifiés ?',
    reponse: 'Absolument. Tous nos artisans sont qualifiés et certifiés dans leur domaine. Nous travaillons uniquement avec des professionnels expérimentés et formés aux dernières normes et techniques.'
  },
  {
    id: '7',
    question: 'Proposez-vous des travaux de rénovation énergétique ?',
    reponse: 'Oui, nous réalisons de nombreux travaux de rénovation énergétique (isolation, remplacement de fenêtres, etc.) qui peuvent être éligibles aux aides et subventions (MaPrimeRénov, CEE, etc.). Nous vous accompagnons dans vos démarches administratives.'
  },
  {
    id: '8',
    question: 'Comment se déroule le suivi de chantier ?',
    reponse: 'Un chef de chantier dédié suit votre projet du début à la fin. Vous recevez des points réguliers sur l\'avancement des travaux et pouvez nous contacter à tout moment. Nous organisons également des réunions de suivi à chaque étape importante.'
  }
];

