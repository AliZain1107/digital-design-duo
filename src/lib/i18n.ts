import { createContext, useContext } from 'react';

// Define language types
export type Language = 'en' | 'fr';

// Define the translation interface
export interface Translations {
  // Navbar
  pricing: string;
  blog: string;
  signIn: string;
  
  // Hero section
  welcomeToFuture: string;
  mostUsedAITool: string;
  aiDesignTool: string;
  for: string;
  modernSpaces: string;
  redesignEmptyRooms: string;
  forRealEstate: string;
  noToolsNoDownloads: string;
  uploadPhoto: string;
  supporting: string;
  realEstatePros: string;
  
  // Unlock potential section
  designExcellence: string;
  unlockThePotential: string;
  aiDrawsInspiration: string;
  legendaryArchitects: string;
  experienceAdvancedAI: string;
  explore: string;
  
  // Architecture Revolution
  architectureRevolution: string;
  homeDesignByAI: string;

  // ModernSpaces
  redesignRooms: string;
  forRealEstateRenovation: string;
  noToolsJustResults: string;

  // HowItWorks
  simpleProcess: string;
  howItWorks: string;
  transformSpace: string;
  upload: string;
  uploadDescription: string;
  personalize: string;
  personalizeDescription: string;
  furnitureSelection: string;
  enjoy: string;
  enjoyDescription: string;
  aiForInteriorDesign: string;
  getStartedFree: string;
  noCreditCard: string;

  // Testimonials
  dontTakeOurWord: string;
  hearFromCustomers: string;

  // FAQ
  howItWorksFAQ: string;
  faqs: string;
  faqDescription: string;
  faqQuestions: { question: string; answer: string }[];

  // VideoSection
  seeItInAction: string;
  watchDemo: string;

  // SupportedBy
  supportedBy: string;

  // MarketSegmentCarousel
  tailoredSolutionsForEveryNeed: string;
  aiDesignToolServesDiverseMarkets: string;
  realEstateProfessionals: string;
  homeownersRenters: string;
  startupsTechCreators: string;
  interiorDesignersArchitects: string;
  retailersBrands: string;
  wallpaperBrands: string;
  wallpaperFlooringBrands: string;
  flooringBrands: string;

  // Footer links
  footerCompany: string;
  footerAbout: string;
  footerFeatures: string;
  footerPricing: string;
  footerContact: string;
  footerLegal: string;
  footerTerms: string;
  footerPrivacy: string;
  footerCopyright: string;
  footerSlogan: string;
  footerLogin: string;
  footerSignup: string;
  footerCopyrightYear: string;
  footerVideoGuide: string;
  footerCookieSettings: string;

  // Stats section
  statsHeading1: string;
  statsHeading2: string;
  statsHours: string;
  statsDesigners: string;
  statsCompanies: string;
  statsArticles: string;

  // Blog section
  blogTrends: string;
  blogDescription: string;
}

// Define translations for English and French
export const translations: Record<Language, Translations> = {
  en: {
    // Navbar
    pricing: "Pricing",
    blog: "Blog",
    signIn: "Sign In",
    
    // Hero section
    welcomeToFuture: "Welcome to the Future of Design",
    mostUsedAITool: "#1 most used",
    aiDesignTool: "AI design tool",
    for: "for",
    modernSpaces: "modern spaces",
    redesignEmptyRooms: "Redesign empty rooms into styled, market-ready interior —",
    forRealEstate: "for real estate, renovation, and retail.",
    noToolsNoDownloads: "No tools, no downloads. Just results",
    uploadPhoto: "Upload a Photo to Start",
    supporting: "Supporting",
    realEstatePros: "20,000+ real estate pros, designers & homeowners",
    
    // Unlock potential section
    designExcellence: "Design Excellence",
    unlockThePotential: "UNLOCK THE POTENTIAL",
    aiDrawsInspiration: "Our AI draws inspiration from legendary architects such as",
    legendaryArchitects: "Le Corbusier, Zaha Hadid, Frank Gehry, Frank Lloyd Wright, and Gaudi",
    experienceAdvancedAI: "Experience how our advanced AI technology transforms your design concepts into stunning reality.",
    explore: "Explore",
    
    // Architecture Revolution
    architectureRevolution: "ARCHITECTURE REVOLUTION",
    homeDesignByAI: "Home design, Room design and Interior design by AI.",

    // ModernSpaces
    redesignRooms: "Redesign empty rooms into styled, market-ready interior —",
    forRealEstateRenovation: "for real estate, renovation, and retail.",
    noToolsJustResults: "No tools, no downloads. Just results.",

    // HowItWorks
    simpleProcess: "Simple Process",
    howItWorks: "How It Works",
    transformSpace: "Transform your space in three simple steps with our AI-powered design platform",
    upload: "Upload",
    uploadDescription: "Simply upload your image or sketch of the space you want to redesign.",
    personalize: "Personalize",
    personalizeDescription: "Choose your preferences, from furniture selection to style, to create your ideal space by AI room design.",
    furnitureSelection: "furniture",
    enjoy: "Enjoy",
    enjoyDescription: "Sit back and enjoy the end result by AI for interior design.",
    aiForInteriorDesign: "AI for interior design",
    getStartedFree: "Get Started for Free",
    noCreditCard: "No Credit Card Required, No Commitments",

    // Testimonials
    dontTakeOurWord: "Don't just take our word for it",
    hearFromCustomers: "Hear from some of our amazing customers who used our product",

    // FAQ
    howItWorksFAQ: "How it works",
    faqs: "FAQs",
    faqDescription: "Everything you need to know about the product and billing.",
    faqQuestions: [
      {
        question: "What makes Styly AI unique in the world of interior design?",
        answer: "Styly AI stands out by combining cutting-edge artificial intelligence with principles from legendary architects like Le Corbusier and Zaha Hadid. Our platform requires no downloads or special tools, making professional interior design accessible to everyone from real estate professionals to homeowners."
      },
      {
        question: "Can anyone use Styly AI, or is it designed specifically for professionals?",
        answer: "Styly AI is designed for everyone! While it's powerful enough for real estate professionals and interior designers, it's also intuitive enough for homeowners and design enthusiasts with no prior experience. Our simple three-step process makes it accessible to users of all skill levels."
      },
      {
        question: "How does Styly AI assist users in visualizing their design ideas?",
        answer: "Simply upload a photo of your empty space, select your design preferences and style, and our AI will transform it into a professionally designed interior. You can experiment with different styles, furniture arrangements, and color schemes until you find the perfect look for your space."
      },
      {
        question: "Does Styly AI offer a variety of design styles to choose from?",
        answer: "Absolutely! Styly AI offers a wide range of design styles from modern minimalist to classic traditional, industrial, Scandinavian, mid-century modern, and many more. You can also customize elements within each style to create a unique look that perfectly matches your vision."
      },
      {
        question: "What kind of support does Styly AI provide to its users?",
        answer: "We offer comprehensive support including video tutorials, a detailed knowledge base, and responsive customer service. Our team is available to help with any questions or challenges you might encounter while using our platform. Plus, our blog regularly features design tips and inspiration."
      }
    ],

    // VideoSection
    seeItInAction: "See it in action",
    watchDemo: "Watch the demo",

    // SupportedBy
    supportedBy: "Supported by",

    // MarketSegmentCarousel
    tailoredSolutionsForEveryNeed: "Tailored Solutions For Every Need",
    aiDesignToolServesDiverseMarkets: "Our AI design tool serves diverse market segments with specialized features",
    realEstateProfessionals: "REAL ESTATE PROFESSIONALS",
    homeownersRenters: "HOMEOWNERS & RENTERS",
    startupsTechCreators: "STARTUPS & TECH-SAVVY CREATORS",
    interiorDesignersArchitects: "INTERIOR DESIGNERS & ARCHITECTS",
    retailersBrands: "RETAILERS & BRANDS",
    wallpaperBrands: "WALLPAPER BRANDS",
    wallpaperFlooringBrands: "WALLPAPER & FLOORING BRANDS",
    flooringBrands: "FLOORING BRANDS",

    // Footer links
    footerCompany: "Company",
    footerAbout: "About",
    footerFeatures: "Features",
    footerPricing: "Pricing",
    footerContact: "Contact",
    footerLegal: "Legal",
    footerTerms: "Terms",
    footerPrivacy: "Privacy",
    footerCopyright: "© 2024 STYLY. All rights reserved.",
    footerSlogan: "The architecture revolution: redefining interior design with AI.",
    footerLogin: "Log In",
    footerSignup: "Sign Up",
    footerCopyrightYear: "Copyright 2025 STYLY",
    footerVideoGuide: "Video Guide",
    footerCookieSettings: "Cookie Settings",

    // Stats section
    statsHeading1: "STYLY: Not chance, but the culmination of",
    statsHeading2: "rigorous quantitative research.",
    statsHours: "hours of development",
    statsDesigners: "Top Designers approved",
    statsCompanies: "Companies trusted",
    statsArticles: "Research articles",

    // Blog section
    blogTrends: "New trends",
    blogDescription: "The latest industry news, interviews, technologies, and resources.",
  },
  fr: {
    // Navbar
    pricing: "Tarification",
    blog: "Blog",
    signIn: "Connexion",
    
    // Hero section
    welcomeToFuture: "Bienvenue dans le Futur du Design",
    mostUsedAITool: "#1 le plus utilisé",
    aiDesignTool: "Outil de design IA",
    for: "pour",
    modernSpaces: "espaces modernes",
    redesignEmptyRooms: "Rénovez des pièces vides en intérieurs stylés et prêts pour le marché —",
    forRealEstate: "pour l'immobilier, la rénovation et le commerce de détail.",
    noToolsNoDownloads: "Pas d'outils, pas de téléchargements. Juste des résultats",
    uploadPhoto: "Télécharger une Photo pour Commencer",
    supporting: "Au service de",
    realEstatePros: "plus de 20 000 professionnels de l'immobilier, designers et propriétaires",
    
    // Unlock potential section
    designExcellence: "Excellence en Design",
    unlockThePotential: "LIBÉREZ LE POTENTIEL",
    aiDrawsInspiration: "Notre IA s'inspire d'architectes légendaires tels que",
    legendaryArchitects: "Le Corbusier, Zaha Hadid, Frank Gehry, Frank Lloyd Wright, et Gaudi",
    experienceAdvancedAI: "Découvrez comment notre technologie d'IA avancée transforme vos concepts de design en une réalité époustouflante.",
    explore: "Explorer",
    
    // Architecture Revolution
    architectureRevolution: "RÉVOLUTION ARCHITECTURALE",
    homeDesignByAI: "Design de maison, de pièce et d'intérieur par IA.",

    // ModernSpaces
    redesignRooms: "Rénovez des pièces vides en intérieurs stylés et prêts pour le marché —",
    forRealEstateRenovation: "pour l'immobilier, la rénovation et le commerce de détail.",
    noToolsJustResults: "Pas d'outils, pas de téléchargements. Juste des résultats.",

    // HowItWorks
    simpleProcess: "Processus Simple",
    howItWorks: "Comment Ça Marche",
    transformSpace: "Transformez votre espace en trois étapes simples avec notre plateforme de design propulsée par l'IA",
    upload: "Télécharger",
    uploadDescription: "Téléchargez simplement votre image ou esquisse de l'espace que vous souhaitez redessiner.",
    personalize: "Personnaliser",
    personalizeDescription: "Choisissez vos préférences, de la sélection de mobilier au style, pour créer votre espace idéal par design de pièce IA.",
    furnitureSelection: "mobilier",
    enjoy: "Profiter",
    enjoyDescription: "Détendez-vous et profitez du résultat final par IA pour le design d'intérieur.",
    aiForInteriorDesign: "IA pour le design d'intérieur",
    getStartedFree: "Commencer Gratuitement",
    noCreditCard: "Pas de Carte de Crédit Requise, Pas d'Engagements",

    // Testimonials
    dontTakeOurWord: "Ne vous fiez pas qu'à nos paroles",
    hearFromCustomers: "Écoutez certains de nos clients étonnants qui ont utilisé notre produit",

    // FAQ
    howItWorksFAQ: "Comment ça marche",
    faqs: "FAQs",
    faqDescription: "Tout ce que vous devez savoir sur le produit et la facturation.",
    faqQuestions: [
      {
        question: "Qu'est-ce qui rend Styly AI unique dans le monde du design d'intérieur?",
        answer: "Styly AI se distingue en combinant l'intelligence artificielle de pointe avec les principes d'architectes légendaires comme Le Corbusier et Zaha Hadid. Notre plateforme ne nécessite aucun téléchargement ou outil spécial, rendant le design d'intérieur professionnel accessible à tous, des professionnels de l'immobilier aux propriétaires."
      },
      {
        question: "Est-ce que tout le monde peut utiliser Styly AI, ou est-il conçu spécifiquement pour les professionnels?",
        answer: "Styly AI est conçu pour tout le monde! Bien qu'il soit assez puissant pour les professionnels de l'immobilier et les designers d'intérieur, il est également assez intuitif pour les propriétaires et les passionnés de design sans expérience préalable. Notre processus simple en trois étapes le rend accessible aux utilisateurs de tous niveaux."
      },
      {
        question: "Comment Styly AI aide-t-il les utilisateurs à visualiser leurs idées de design?",
        answer: "Il suffit de télécharger une photo de votre espace vide, de sélectionner vos préférences et votre style de design, et notre IA le transformera en un intérieur conçu professionnellement. Vous pouvez expérimenter différents styles, arrangements de meubles et schémas de couleurs jusqu'à ce que vous trouviez le look parfait pour votre espace."
      },
      {
        question: "Styly AI offre-t-il une variété de styles de design parmi lesquels choisir?",
        answer: "Absolument! Styly AI offre une large gamme de styles de design, du minimaliste moderne au traditionnel classique, industriel, scandinave, mid-century moderne, et bien d'autres. Vous pouvez également personnaliser les éléments de chaque style pour créer un look unique qui correspond parfaitement à votre vision."
      },
      {
        question: "Quel type de support Styly AI fournit-il à ses utilisateurs?",
        answer: "Nous offrons un support complet comprenant des tutoriels vidéo, une base de connaissances détaillée et un service client réactif. Notre équipe est disponible pour vous aider avec toutes les questions ou défis que vous pourriez rencontrer lors de l'utilisation de notre plateforme. De plus, notre blog présente régulièrement des conseils de design et de l'inspiration."
      }
    ],

    // VideoSection
    seeItInAction: "Voir en action",
    watchDemo: "Regarder la démo",

    // SupportedBy
    supportedBy: "Soutenu par",

    // MarketSegmentCarousel
    tailoredSolutionsForEveryNeed: "Solutions Adaptées à Chaque Besoin",
    aiDesignToolServesDiverseMarkets: "Notre outil de design IA sert divers segments de marché avec des fonctionnalités spécialisées",
    realEstateProfessionals: "PROFESSIONNELS DE L'IMMOBILIER",
    homeownersRenters: "PROPRIÉTAIRES & LOCATAIRES",
    startupsTechCreators: "STARTUPS & CRÉATEURS TECH",
    interiorDesignersArchitects: "DESIGNERS D'INTÉRIEUR & ARCHITECTES",
    retailersBrands: "DÉTAILLANTS & MARQUES",
    wallpaperBrands: "MARQUES DE PAPIER PEINT",
    wallpaperFlooringBrands: "MARQUES DE PAPIER PEINT & REVÊTEMENT DE SOL",
    flooringBrands: "MARQUES DE REVÊTEMENT DE SOL",

    // Footer links
    footerCompany: "Entreprise",
    footerAbout: "À propos",
    footerFeatures: "Fonctionnalités",
    footerPricing: "Tarification",
    footerContact: "Contact",
    footerLegal: "Légal",
    footerTerms: "Conditions",
    footerPrivacy: "Confidentialité",
    footerCopyright: "© 2024 STYLY. Tous droits réservés.",
    footerSlogan: "La révolution architecturale : redéfinir le design d'intérieur avec l'IA.",
    footerLogin: "Se connecter",
    footerSignup: "S'inscrire",
    footerCopyrightYear: "Copyright 2025 STYLY",
    footerVideoGuide: "Guide Vidéo",
    footerCookieSettings: "Paramètres des cookies",

    // Stats section
    statsHeading1: "STYLY : Pas le hasard, mais l'aboutissement d'une",
    statsHeading2: "recherche quantitative rigoureuse.",
    statsHours: "heures de développement",
    statsDesigners: "Top Designers approuvés",
    statsCompanies: "Entreprises de confiance",
    statsArticles: "Articles de recherche",

    // Blog section
    blogTrends: "Nouvelles tendances",
    blogDescription: "Les dernières actualités du secteur, interviews, technologies et ressources.",
  }
};

// Create a context for the current language
export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 