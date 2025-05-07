import { createContext, useContext } from "react";

// Define language types
export type Language = "en" | "fr";

// Define the translation interface
export interface Translations {
  // Navbar
  pricing: string;
  blog: string;
  signIn: string;

  //Navbar section
  howRealEstateAgentsBoostSales: string;
  genZUltimateGuideToInteriors: string;
  howToBuildYourHouse: string;
  ultimateGuideToAIInteriorDesign: string;
  eightStunningAIBedroomDesigns: string;
  expertTipsOnHomeInteriors: string;

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
  realEstateLandscape: string;
  generationalTrendsReport: string;
  buyersBeginSearch: string;
  virtualStagingRevolution: string;
  propertiesWithAIStaging: string;
  virtuallyStagedSellFaster: string;
  aiStagingCostReduction: string;
  propertiesWithAIEnhancedPhotos: string;
  buyersStruggleToVisualize: string;
  source: string;
  realEstateStagingAssociation: string;
  whyAIStagingIndustryStandard: string;
  economicEfficiency: string;
  economicEfficiencyDescription: string;
  speedToMarket: string;
  speedToMarketDescription: string;
  marketSpecificCustomization: string;
  marketSpecificCustomizationDescription: string;
  targetSpecificBuyerDemographics: string;
  adjustStagingRealTimeFeedback: string;
  createSeasonalVariations: string;
  generateDesignOptions: string;
  realWorldSuccessStories: string;
  caseStudy1Title: string;
  caseStudy1Property: string;
  caseStudy1Challenge: string;
  caseStudy1Solution: string;
  caseStudy1Result: string;
  caseStudy2Title: string;
  caseStudy2Property: string;
  caseStudy2Challenge: string;
  caseStudy2Solution: string;
  caseStudy2Result: string;
  agentImplementationTitle: string;
  segmentedMarketingApproaches: string;
  segmentedMarketingDescription: string;
  emptyNesterDownsizing: string;
  firstTimeHomebuyer: string;
  workFromHomeLayouts: string;
  multigenerationalLiving: string;
  renovationVisualizationTitle: string;
  renovationVisualizationDescription: string;
  energyEfficientUpgrades: string;
  spaceReconfiguration: string;
  modernUpdates: string;
  accessibilityModifications: string;
  digitalMarketingIntegration: string;
  digitalMarketingDescription: string;
  higherEngagement: string;
  longerTimeSpent: string;
  moreSavedListings: string;
  higherQualityLeads: string;
  currentMarketAnalysis: string;
  marketAnalysisDescription: string;
  realEstateTechReport: string;
  aiStagingAdoption: string;
  luxuryPropertiesUseAI: string;
  virtualStagingMarketGrowth: string;
  declineOfPhysicalStaging: string;
  evidenceBasedBestPractices: string;
  strategicApplication: string;
  marketResponsiveDesign: string;
  highResolutionImages: string;
  consistentHeightPerspective: string;
  cleanSpacesForAI: string;
  focusOnProblematicSpaces: string;
  showcaseVersatility: string;
  demonstrateLifestylePossibilities: string;
  researchLocalPreferences: string;
  alignWithDesignTrends: string;
  considerPropertyElements: string;
  expertAnalysis: string;
  expertAnalysisQuote: string;
  the2025Reality: string;
  aiStagingEmbeddedInPractice: string;
  transformRealEstateBusiness: string;
  experienceAIAdvantage: string;
  meetBuyerExpectations: string;
  maximizePropertyValues: string;
  reduceDaysOnMarket: string;
  scaleMarketingEfforts: string;
  deliverConsistentPresentation: string;
  realEstateVirtualStaging: string;

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
    redesignEmptyRooms:
      "Redesign empty rooms into styled, market-ready interior —",
    forRealEstate: "for real estate, renovation, and retail.",
    noToolsNoDownloads: "No tools, no downloads. Just results",
    uploadPhoto: "Upload a Photo to Start",
    supporting: "Supporting",
    realEstatePros: "20,000+ real estate pros, designers & homeowners",

    // Unlock potential section
    designExcellence: "Design Excellence",
    unlockThePotential: "UNLOCK THE POTENTIAL",
    aiDrawsInspiration:
      "Our AI draws inspiration from legendary architects such as",
    legendaryArchitects:
      "Le Corbusier, Zaha Hadid, Frank Gehry, Frank Lloyd Wright, and Gaudi",
    experienceAdvancedAI:
      "Experience how our advanced AI technology transforms your design concepts into stunning reality.",
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
    transformSpace:
      "Transform your space in three simple steps with our AI-powered design platform",
    upload: "Upload",
    uploadDescription:
      "Simply upload your image or sketch of the space you want to redesign.",
    personalize: "Personalize",
    personalizeDescription:
      "Choose your preferences, from furniture selection to style, to create your ideal space by AI room design.",
    furnitureSelection: "furniture",
    enjoy: "Enjoy",
    enjoyDescription:
      "Sit back and enjoy the end result by AI for interior design.",
    aiForInteriorDesign: "AI for interior design",
    getStartedFree: "Get Started for Free",
    noCreditCard: "No Credit Card Required, No Commitments",

    // Testimonials
    dontTakeOurWord: "Don't just take our word for it",
    hearFromCustomers:
      "Hear from some of our amazing customers who used our product",

    // FAQ
    howItWorksFAQ: "How it works",
    faqs: "FAQs",
    faqDescription:
      "Everything you need to know about the product and billing.",
    faqQuestions: [
      {
        question: "What makes Styly AI unique in the world of interior design?",
        answer:
          "Styly AI stands out by combining cutting-edge artificial intelligence with principles from legendary architects like Le Corbusier and Zaha Hadid. Our platform requires no downloads or special tools, making professional interior design accessible to everyone from real estate professionals to homeowners.",
      },
      {
        question:
          "Can anyone use Styly AI, or is it designed specifically for professionals?",
        answer:
          "Styly AI is designed for everyone! While it's powerful enough for real estate professionals and interior designers, it's also intuitive enough for homeowners and design enthusiasts with no prior experience. Our simple three-step process makes it accessible to users of all skill levels.",
      },
      {
        question:
          "How does Styly AI assist users in visualizing their design ideas?",
        answer:
          "Simply upload a photo of your empty space, select your design preferences and style, and our AI will transform it into a professionally designed interior. You can experiment with different styles, furniture arrangements, and color schemes until you find the perfect look for your space.",
      },
      {
        question:
          "Does Styly AI offer a variety of design styles to choose from?",
        answer:
          "Absolutely! Styly AI offers a wide range of design styles from modern minimalist to classic traditional, industrial, Scandinavian, mid-century modern, and many more. You can also customize elements within each style to create a unique look that perfectly matches your vision.",
      },
      {
        question: "What kind of support does Styly AI provide to its users?",
        answer:
          "We offer comprehensive support including video tutorials, a detailed knowledge base, and responsive customer service. Our team is available to help with any questions or challenges you might encounter while using our platform. Plus, our blog regularly features design tips and inspiration.",
      },
    ],

    // VideoSection
    seeItInAction: "See it in action",
    watchDemo: "Watch the demo",

    // SupportedBy
    supportedBy: "Supported by",

    // MarketSegmentCarousel
    tailoredSolutionsForEveryNeed: "Tailored Solutions For Every Need",
    aiDesignToolServesDiverseMarkets:
      "Our AI design tool serves diverse market segments with specialized features",
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
    footerSlogan:
      "The architecture revolution: redefining interior design with AI.",
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
    blogDescription:
      "The latest industry news, interviews, technologies, and resources.",
    realEstateLandscape:
      "The real estate landscape has fundamentally transformed since 2023",
    generationalTrendsReport: "Generational Trends Report",
    buyersBeginSearch:
      "an overwhelming 99% of home buyers begin their search online, making digital presentation not just important but critical for sales success.",
    virtualStagingRevolution:
      "The Virtual Staging Revolution: Current Market Statistics",
    propertiesWithAIStaging:
      "Properties with AI virtual staging receive 2.7x more inquiries than traditional listings",
    virtuallyStagedSellFaster:
      "Virtually staged properties sell 31% faster than non-staged homes",
    aiStagingCostReduction:
      "AI staging delivers 98% cost reduction compared to physical staging",
    propertiesWithAIEnhancedPhotos:
      "Properties with AI-enhanced photos command 5–8% higher selling prices",
    buyersStruggleToVisualize:
      "92% of buyers struggle to visualize potential in empty spaces",
    source: "Source:",
    realEstateStagingAssociation:
      "Real Estate Staging Association 2025 Impact Report",
    whyAIStagingIndustryStandard:
      "Why AI-Powered Virtual Staging is Now Industry Standard",
    economicEfficiency: "Economic Efficiency",
    economicEfficiencyDescription:
      "In 2025's fluctuating real estate market, traditional physical staging averages $3,500–$10,000 per property, while AI-powered virtual staging with Styly.io starts at less than $100 per property.",
    speedToMarket: "Speed-to-Market Advantage",
    speedToMarketDescription:
      "With Styly.io, I can have professionally staged photos ready within an hour of the photographer delivering raw images.",
    marketSpecificCustomization: "Market-Specific Customization",
    marketSpecificCustomizationDescription:
      "Current AI virtual staging allows agents to target specific buyer demographics with tailored designs, adjust staging based on real-time market feedback, create seasonal variations, and generate multiple design options for diverse buyer preferences.",
    targetSpecificBuyerDemographics:
      "Target specific buyer demographics with tailored designs",
    adjustStagingRealTimeFeedback:
      "Adjust staging based on real-time market feedback",
    createSeasonalVariations:
      "Create seasonal variations to keep listings fresh",
    generateDesignOptions:
      "Generate multiple design options for diverse buyer preferences",
    realWorldSuccessStories: "Real-World Success Stories from 2025",
    caseStudy1Title: "Case Study 1: Mixed-Use Development in Austin",
    caseStudy1Property: "Property: 12-unit new construction, completely empty",
    caseStudy1Challenge: "Challenge: Needed to pre-sell 60% before completion",
    caseStudy1Solution:
      "Solution: AI-staged with Styly.io showing multiple configuration options",
    caseStudy1Result: "Result: 75% pre-sold within 45 days",
    caseStudy2Title: "Case Study 2: Historic Renovation Project",
    caseStudy2Property:
      "Property: 1920s craftsman requiring significant updates",
    caseStudy2Challenge:
      "Challenge: Buyers couldn't visualize modern possibilities",
    caseStudy2Solution:
      "Solution: Virtual renovation showcasing contemporary interior while preserving character",
    caseStudy2Result: "Result: Sold at 12% above neighborhood comps",
    agentImplementationTitle:
      "How Leading Agents Are Implementing AI Staging in 2025",
    segmentedMarketingApproaches: "Segmented Marketing Approaches",
    segmentedMarketingDescription:
      "Today's sophisticated agents use Styly.io to create targeted presentations for various buyer demographics.",
    emptyNesterDownsizing: "Empty-nester downsizing designs",
    firstTimeHomebuyer: "First-time homebuyer configurations",
    workFromHomeLayouts: "Work-from-home optimized layouts",
    multigenerationalLiving: "Multigenerational living arrangements",
    renovationVisualizationTitle: "Renovation Visualization",
    renovationVisualizationDescription:
      "With construction costs at all-time highs, agents are showing potential through renovation visualization.",
    energyEfficientUpgrades: "Energy-efficient upgrades with projected savings",
    spaceReconfiguration: "Space reconfiguration possibilities",
    modernUpdates: "Modern updates to dated properties",
    accessibilityModifications: "Accessibility modifications",
    digitalMarketingIntegration: "Digital-First Marketing Integration",
    digitalMarketingDescription:
      "Properties staged with Styly.io in 2025 are seeing significantly higher engagement on social platforms.",
    higherEngagement: "53% higher engagement on social platforms",
    longerTimeSpent: "2.2x longer time spent on listing pages",
    moreSavedListings: "40% more saved/favorited listings",
    higherQualityLeads: "Significantly higher quality leads",
    currentMarketAnalysis: "Current Market Analysis and Projections",
    marketAnalysisDescription:
      "According to McKinsey & Company's 2025 Real Estate Technology Report:",
    realEstateTechReport: "Real Estate Technology Report",
    aiStagingAdoption:
      "AI staging adoption has reached 78% among successful agents",
    luxuryPropertiesUseAI:
      "94% of luxury properties now use AI staging as standard practice",
    virtualStagingMarketGrowth:
      "The virtual staging market has grown 87% since 2023",
    declineOfPhysicalStaging:
      "Traditional physical staging services have declined by 35%",
    evidenceBasedBestPractices: "Evidence-Based Best Practices for 2025",
    strategicApplication: "Strategic Application",
    marketResponsiveDesign: "Market-Responsive Design",
    highResolutionImages: "Wide-angle, high-resolution images",
    consistentHeightPerspective: "Consistent height and perspective",
    cleanSpacesForAI: "Empty, clean spaces for optimal AI processing",
    focusOnProblematicSpaces: "Focus on problematic spaces first",
    showcaseVersatility: "Showcase versatility in primary rooms",
    demonstrateLifestylePossibilities: "Demonstrate lifestyle possibilities",
    researchLocalPreferences: "Research local buyer preferences",
    alignWithDesignTrends: "Align with current design trends",
    considerPropertyElements:
      "Consider property-specific architectural elements",
    expertAnalysis: "Expert Analysis",
    expertAnalysisQuote:
      '"The question is no longer whether to use AI staging, but how to use it most effectively."',
    the2025Reality: "The 2025 Reality",
    aiStagingEmbeddedInPractice:
      "AI-powered virtual staging is now firmly embedded in successful real estate practice.",
    transformRealEstateBusiness: "Transform Your Real Estate Business Today",
    experienceAIAdvantage:
      "Experience the real market advantage of AI-powered virtual staging with Styly.io.",
    meetBuyerExpectations: "Meet modern buyer expectations",
    maximizePropertyValues: "Maximize property values in any market",
    reduceDaysOnMarket: "Reduce days-on-market",
    scaleMarketingEfforts: "Scale marketing efforts efficiently",
    deliverConsistentPresentation:
      "Deliver consistent, professional presentation",
    realEstateVirtualStaging: "Gen Z’s Ultimate Guide to Instagram-Worthy Interiors",
    howRealEstateAgentsBoostSales: "How Real Estate Agents Are Boosting Sales with AI-Powered Virtual Staging: The 2025 Market Reality",
    genZUltimateGuideToInteriors: "Gen Z's Ultimate Guide to Instagram-Worthy Interiors",
    howToBuildYourHouse: "How to Build Your Own House with AI Tools Including Porch Design",
    ultimateGuideToAIInteriorDesign: "The Ultimate Guide to AI Interior Design Tools in 2025: A Comprehensive Comparison",
    eightStunningAIBedroomDesigns: "Eight Stunning AI-Generated Bedroom Designs: Transform Your Space with Styly.io",
    expertTipsOnHomeInteriors: "10 Expert Tips to Save Big on Home Interiors in 2025",
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
    redesignEmptyRooms:
      "Rénovez des pièces vides en intérieurs stylés et prêts pour le marché —",
    forRealEstate: "pour l'immobilier, la rénovation et le commerce de détail.",
    noToolsNoDownloads:
      "Pas d'outils, pas de téléchargements. Juste des résultats",
    uploadPhoto: "Télécharger une Photo pour Commencer",
    supporting: "Au service de",
    realEstatePros:
      "plus de 20 000 professionnels de l'immobilier, designers et propriétaires",

    // Unlock potential section
    designExcellence: "Excellence en Design",
    unlockThePotential: "LIBÉREZ LE POTENTIEL",
    aiDrawsInspiration: "Notre IA s'inspire d'architectes légendaires tels que",
    legendaryArchitects:
      "Le Corbusier, Zaha Hadid, Frank Gehry, Frank Lloyd Wright, et Gaudi",
    experienceAdvancedAI:
      "Découvrez comment notre technologie d'IA avancée transforme vos concepts de design en une réalité époustouflante.",
    explore: "Explorer",

    // Architecture Revolution
    architectureRevolution: "RÉVOLUTION ARCHITECTURALE",
    homeDesignByAI: "Design de maison, de pièce et d'intérieur par IA.",

    // ModernSpaces
    redesignRooms:
      "Rénovez des pièces vides en intérieurs stylés et prêts pour le marché —",
    forRealEstateRenovation:
      "pour l'immobilier, la rénovation et le commerce de détail.",
    noToolsJustResults:
      "Pas d'outils, pas de téléchargements. Juste des résultats.",

    // HowItWorks
    simpleProcess: "Processus Simple",
    howItWorks: "Comment Ça Marche",
    transformSpace:
      "Transformez votre espace en trois étapes simples avec notre plateforme de design propulsée par l'IA",
    upload: "Télécharger",
    uploadDescription:
      "Téléchargez simplement votre image ou esquisse de l'espace que vous souhaitez redessiner.",
    personalize: "Personnaliser",
    personalizeDescription:
      "Choisissez vos préférences, de la sélection de mobilier au style, pour créer votre espace idéal par design de pièce IA.",
    furnitureSelection: "mobilier",
    enjoy: "Profiter",
    enjoyDescription:
      "Détendez-vous et profitez du résultat final par IA pour le design d'intérieur.",
    aiForInteriorDesign: "IA pour le design d'intérieur",
    getStartedFree: "Commencer Gratuitement",
    noCreditCard: "Pas de Carte de Crédit Requise, Pas d'Engagements",

    // Testimonials
    dontTakeOurWord: "Ne vous fiez pas qu'à nos paroles",
    hearFromCustomers:
      "Écoutez certains de nos clients étonnants qui ont utilisé notre produit",

    // FAQ
    howItWorksFAQ: "Comment ça marche",
    faqs: "FAQs",
    faqDescription:
      "Tout ce que vous devez savoir sur le produit et la facturation.",
    faqQuestions: [
      {
        question:
          "Qu'est-ce qui rend Styly AI unique dans le monde du design d'intérieur?",
        answer:
          "Styly AI se distingue en combinant l'intelligence artificielle de pointe avec les principes d'architectes légendaires comme Le Corbusier et Zaha Hadid. Notre plateforme ne nécessite aucun téléchargement ou outil spécial, rendant le design d'intérieur professionnel accessible à tous, des professionnels de l'immobilier aux propriétaires.",
      },
      {
        question:
          "Est-ce que tout le monde peut utiliser Styly AI, ou est-il conçu spécifiquement pour les professionnels?",
        answer:
          "Styly AI est conçu pour tout le monde! Bien qu'il soit assez puissant pour les professionnels de l'immobilier et les designers d'intérieur, il est également assez intuitif pour les propriétaires et les passionnés de design sans expérience préalable. Notre processus simple en trois étapes le rend accessible aux utilisateurs de tous niveaux.",
      },
      {
        question:
          "Comment Styly AI aide-t-il les utilisateurs à visualiser leurs idées de design?",
        answer:
          "Il suffit de télécharger une photo de votre espace vide, de sélectionner vos préférences et votre style de design, et notre IA le transformera en un intérieur conçu professionnellement. Vous pouvez expérimenter différents styles, arrangements de meubles et schémas de couleurs jusqu'à ce que vous trouviez le look parfait pour votre espace.",
      },
      {
        question:
          "Styly AI offre-t-il une variété de styles de design parmi lesquels choisir?",
        answer:
          "Absolument! Styly AI offre une large gamme de styles de design, du minimaliste moderne au traditionnel classique, industriel, scandinave, mid-century moderne, et bien d'autres. Vous pouvez également personnaliser les éléments de chaque style pour créer un look unique qui correspond parfaitement à votre vision.",
      },
      {
        question:
          "Quel type de support Styly AI fournit-il à ses utilisateurs?",
        answer:
          "Nous offrons un support complet comprenant des tutoriels vidéo, une base de connaissances détaillée et un service client réactif. Notre équipe est disponible pour vous aider avec toutes les questions ou défis que vous pourriez rencontrer lors de l'utilisation de notre plateforme. De plus, notre blog présente régulièrement des conseils de design et de l'inspiration.",
      },
    ],

    // VideoSection
    seeItInAction: "Voir en action",
    watchDemo: "Regarder la démo",

    // SupportedBy
    supportedBy: "Soutenu par",

    // MarketSegmentCarousel
    tailoredSolutionsForEveryNeed: "Solutions Adaptées à Chaque Besoin",
    aiDesignToolServesDiverseMarkets:
      "Notre outil de design IA sert divers segments de marché avec des fonctionnalités spécialisées",
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
    footerSlogan:
      "La révolution architecturale : redéfinir le design d'intérieur avec l'IA.",
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
    blogDescription:
      "Les dernières actualités du secteur, interviews, technologies et ressources.",
    realEstateLandscape:
      "Le paysage immobilier a fondamentalement changé depuis 2023",
    generationalTrendsReport: "Rapport sur les tendances générationnelles",
    buyersBeginSearch:
      "99 % des acheteurs de maison commencent leur recherche en ligne, rendant la présentation numérique non seulement importante mais essentielle pour le succès des ventes.",
    virtualStagingRevolution:
      "La révolution du home staging virtuel : Statistiques du marché actuel",
    propertiesWithAIStaging:
      "Les propriétés avec home staging virtuel AI reçoivent 2,7 fois plus de demandes que les annonces traditionnelles",
    virtuallyStagedSellFaster:
      "Les propriétés avec home staging virtuel se vendent 31 % plus rapidement que les maisons non mises en scène",
    aiStagingCostReduction:
      "Le home staging AI permet une réduction de coûts de 98 % par rapport au home staging physique",
    propertiesWithAIEnhancedPhotos:
      "Les propriétés avec photos améliorées par AI commandent des prix de vente 5 à 8 % plus élevés",
    buyersStruggleToVisualize:
      "92 % des acheteurs ont du mal à visualiser le potentiel dans les espaces vides",
    source: "Source :",
    realEstateStagingAssociation:
      "Rapport d'impact de l'Association de home staging immobilier 2025",
    whyAIStagingIndustryStandard:
      "Pourquoi le home staging virtuel AI est désormais la norme de l'industrie",
    economicEfficiency: "Efficacité économique",
    economicEfficiencyDescription:
      "Sur le marché immobilier fluctuant de 2025, le home staging physique traditionnel coûte entre 3500 $ et 10 000 $ par propriété, tandis que le home staging virtuel AI avec Styly.io commence à moins de 100 $ par propriété.",
    speedToMarket: "Avantage en termes de rapidité de mise sur le marché",
    speedToMarketDescription:
      "Avec Styly.io, je peux avoir des photos mises en scène professionnellement prêtes en moins d'une heure après que le photographe ait livré les images brutes.",
    marketSpecificCustomization: "Personnalisation spécifique au marché",
    marketSpecificCustomizationDescription:
      "Le home staging virtuel AI actuel permet aux agents de cibler des segments d'acheteurs spécifiques avec des conceptions personnalisées, d'ajuster la mise en scène en fonction des retours du marché en temps réel, de créer des variations saisonnières et de générer plusieurs options de conception pour des préférences d'acheteurs diverses.",
    targetSpecificBuyerDemographics:
      "Cibler des segments d'acheteurs spécifiques avec des conceptions personnalisées",
    adjustStagingRealTimeFeedback:
      "Ajuster la mise en scène en fonction des retours du marché en temps réel",
    createSeasonalVariations:
      "Créer des variations saisonnières pour maintenir les annonces fraîches",
    generateDesignOptions:
      "Générer plusieurs options de conception pour des préférences d'acheteurs diverses",
    realWorldSuccessStories: "Histoires de réussite réelles de 2025",
    caseStudy1Title: "Étude de cas 1 : Développement à usage mixte à Austin",
    caseStudy1Property:
      "Propriété : Construction neuve de 12 unités, complètement vide",
    caseStudy1Challenge:
      "Défi : Nécessité de pré-vendre 60 % avant la fin de la construction",
    caseStudy1Solution:
      "Solution : Mise en scène AI avec Styly.io montrant plusieurs options de configuration",
    caseStudy1Result: "Résultat : 75 % pré-vendus en 45 jours",
    caseStudy2Title: "Étude de cas 2 : Projet de rénovation historique",
    caseStudy2Property:
      "Propriété : Artisan du 1920 nécessitant des mises à jour importantes",
    caseStudy2Challenge:
      "Défi : Les acheteurs ne pouvaient pas visualiser les possibilités modernes",
    caseStudy2Solution:
      "Solution : Rénovation virtuelle montrant l'intérieur contemporain tout en préservant le caractère",
    caseStudy2Result:
      "Résultat : Vendu 12 % au-dessus des comparables du quartier",
    agentImplementationTitle:
      "Comment les principaux agents utilisent le home staging AI en 2025",
    segmentedMarketingApproaches: "Approches marketing segmentées",
    segmentedMarketingDescription:
      "Les agents sophistiqués d'aujourd'hui utilisent Styly.io pour créer des présentations ciblées pour divers segments d'acheteurs.",
    emptyNesterDownsizing: "Concepts de downsizing pour les retraités",
    firstTimeHomebuyer: "Configurations pour les acheteurs de première maison",
    workFromHomeLayouts: "Agencements optimisés pour le télétravail",
    multigenerationalLiving: "Aménagements pour une vie multigénérationnelle",
    renovationVisualizationTitle: "Visualisation de la rénovation",
    renovationVisualizationDescription:
      "Avec des coûts de construction à des niveaux historiques, les agents montrent le potentiel des rénovations.",
    energyEfficientUpgrades:
      "Améliorations énergétiques avec économies projetées",
    spaceReconfiguration: "Possibilités de reconfiguration de l'espace",
    modernUpdates: "Mises à jour modernes des propriétés anciennes",
    accessibilityModifications: "Modifications pour l'accessibilité",
    digitalMarketingIntegration: "Intégration du marketing numérique",
    digitalMarketingDescription:
      "Les propriétés mises en scène avec Styly.io en 2025 connaissent une bien plus grande engagement sur les plateformes sociales.",
    higherEngagement: "53 % d'engagement en plus sur les plateformes sociales",
    longerTimeSpent: "2,2 fois plus de temps passé sur les pages des annonces",
    moreSavedListings:
      "40 % de plus de listes enregistrées/ajoutées aux favoris",
    higherQualityLeads: "Des prospects de bien meilleure qualité",
    currentMarketAnalysis: "Analyse actuelle du marché et prévisions",
    marketAnalysisDescription:
      "Selon le rapport 2025 de McKinsey & Company sur la technologie immobilière :",
    realEstateTechReport: "Rapport sur la technologie immobilière",
    aiStagingAdoption:
      "L'adoption du home staging AI a atteint 78 % parmi les agents performants",
    luxuryPropertiesUseAI:
      "94 % des propriétés de luxe utilisent désormais le home staging AI comme norme",
    virtualStagingMarketGrowth:
      "Le marché du home staging virtuel a augmenté de 87 % depuis 2023",
    declineOfPhysicalStaging:
      "Les services de home staging physique ont diminué de 35 %",
    evidenceBasedBestPractices:
      "Pratiques recommandées basées sur les données pour 2025",
    strategicApplication: "Application stratégique",
    marketResponsiveDesign: "Conception réactive au marché",
    highResolutionImages: "Images grand angle de haute résolution",
    consistentHeightPerspective: "Hauteur et perspective cohérentes",
    cleanSpacesForAI:
      "Espaces vides et propres pour un traitement optimal par l'IA",
    focusOnProblematicSpaces:
      "Se concentrer d'abord sur les espaces problématiques",
    showcaseVersatility:
      "Mettre en valeur la polyvalence des pièces principales",
    demonstrateLifestylePossibilities:
      "Démontrer les possibilités de modes de vie",
    researchLocalPreferences: "Étudier les préférences locales des acheteurs",
    alignWithDesignTrends: "S'aligner avec les tendances actuelles du design",
    considerPropertyElements:
      "Tenir compte des éléments architecturaux propres à la propriété",
    expertAnalysis: "Analyse d'expert",
    expertAnalysisQuote:
      "\"La question n'est plus de savoir s'il faut utiliser le home staging AI, mais comment l'utiliser de manière plus efficace.\"",
    the2025Reality: "La réalité de 2025",
    aiStagingEmbeddedInPractice:
      "Le home staging virtuel AI est désormais fermement intégré dans les pratiques immobilières réussies.",
    transformRealEstateBusiness:
      "Transformez votre entreprise immobilière aujourd'hui",
    experienceAIAdvantage:
      "Découvrez l'avantage réel du home staging virtuel AI avec Styly.io.",
    meetBuyerExpectations: "Répondez aux attentes des acheteurs modernes",
    maximizePropertyValues:
      "Maximisez la valeur des propriétés sur tous les marchés",
    reduceDaysOnMarket: "Réduisez le temps de mise sur le marché",
    scaleMarketingEfforts: "Accélérez les efforts marketing efficacement",
    deliverConsistentPresentation:
      "Offrez une présentation professionnelle et cohérente",
    realEstateVirtualStaging: "Guide ultime pour les intérieurs Instagramables de Gen Z",
    howRealEstateAgentsBoostSales: "Comment les agents immobiliers augmentent les ventes avec le home staging virtuel AI : La réalité du marché de 2025",
    genZUltimateGuideToInteriors: "Guide ultime pour les intérieurs Instagramables de Gen Z",
    howToBuildYourHouse: "Comment construire votre propre maison avec des outils AI incluant le design de la terrasse",
    ultimateGuideToAIInteriorDesign: "Guide ultime pour les outils de design d'intérieur IA en 2025 : Une comparaison complète",
    eightStunningAIBedroomDesigns: "Huit designs d'intérieurs AI-générés : Transformez votre espace avec Styly.io",
    expertTipsOnHomeInteriors: "10 conseils experts pour économiser de l'argent sur les intérieurs en 2025",
  },
};

// Create a context for the current language
export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
