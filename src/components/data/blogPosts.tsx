import RealEstateVirtualStaging from "@/blogPages/RealEstateVirtualStaging";
import GenZInteriors from "@/blogPages/GenZInteriors";
import BuildHouse from "@/blogPages/BuildHouse";
import UltimateGuide from "@/blogPages/UltimateGuide" ;
import AIBedroom from "@/blogPages/AIBedroom" ;
import AIInterior from "@/blogPages/AIInterior" ;
import RevolutionizingArchitecture from "@/blogPages/RevolutionizingArchitecture";
import InteriorDesignTrends2025 from "@/blogPages/InteriorDesignTrends2025";
import FreeAIInteriorDesign from "@/blogPages/FreeAIInteriorDesign";
import ViralAIRoomDesignPrompts from "@/blogPages/ViralAIRoomDesignPrompts";
import ImpactAIInteriorDesigner from "@/blogPages/ImpactAIInteriorDesigner";
import AIVirtualRealityDesign from "@/blogPages/AIVirtualRealityDesign";
import AIAccessibleDesign from "@/blogPages/AIAccessibleDesign";
import DataAIPoweredDesign from "@/blogPages/DataAIPoweredDesign";
import ModernFamilyDesign from "@/blogPages/ModernFamilyDesign";
import SustainableDesignAI from "@/blogPages/SustainableDesignAI";
import AISpacePlanningSmallApartments from "@/blogPages/AISpacePlanningSmallApartments";
import BiophilicDesignAI from "@/blogPages/BiophilicDesignAI";
import ScienceColorDesign from "@/blogPages/ScienceColorDesign";
import AILandscapeDesign from "@/blogPages/AILandscapeDesign";
import CulturalDesignAI from "@/blogPages/CulturalDesignAI";
import TextureImportanceDesign from "@/blogPages/TextureImportanceDesign";
import SustainableLandscapesAI from "@/blogPages/SustainableLandscapesAI";
import Top5ChallengesInteriorDesign from "@/blogPages/Top5ChallengesInteriorDesign";
import CommercialInteriorDesignAI from "@/blogPages/CommercialInteriorDesignAI";
import CreatingOutdoorSpacesAI from "@/blogPages/CreatingOutdoorSpacesAI";
import CostEffectivenessAIDesign from "@/blogPages/CostEffectivenessAIDesign";
import TransformingSmallLivingSpaces from "@/blogPages/TransformingSmallLivingSpaces";
import AIDrivenCustomizationFuture from "@/blogPages/AIDrivenCustomizationFuture";
import ResidentialInteriorDesignGuide from "@/blogPages/ResidentialInteriorDesignGuide";
import FuturisticInteriorDesignStyles from "@/blogPages/FuturisticInteriorDesignStyles";
import RoomPlannerAISarahJohnsonEvaluations from "@/blogPages/RoomPlannerAISarahJohnsonEvaluations";
import InnovativeStairRailingIdeas from "@/blogPages/InnovativeStairRailingIdeas";
import DesignLivingRoomLikePro from "@/blogPages/DesignLivingRoomLikePro";
import AIAssistantInteriorDesignPrompts from "@/blogPages/AIAssistantInteriorDesignPrompts";
import GenerativeAIRevolutionizingDesign from "@/blogPages/GenerativeAIRevolutionizingDesign";
import FutureWorkspaceAIOfficeInteriors from "@/blogPages/FutureWorkspaceAIOfficeInteriors";
import NewBlog2 from "@/blogPages/NewBlog2";
import StylyVivaTechPartnership from "@/blogPages/StylyVivaTechPartnership";
import ChatGPTInteriorDesign from "@/blogPages/ChatGPTInteriorDesign";
import UnlockingPowerAIInteriorDesign from "@/blogPages/UnlockingPowerAIInteriorDesign";
import DALLEMidjourneyRevolutionizingDesign from "@/blogPages/DALLEMidjourneyRevolutionizingDesign";
import PhotoshopGenerativeAIInteriorDesign from "@/blogPages/PhotoshopGenerativeAIInteriorDesign";
import AITechnologyRealEstateStrategy from "@/blogPages/AITechnologyRealEstateStrategy";
import LuxuryBathroomBudgetAIDesign from "@/blogPages/LuxuryBathroomBudgetAIDesign";
import AIPoweredImageGenerationInteriorDesign2024 from "@/blogPages/AIPoweredImageGenerationInteriorDesign2024";
import LeveragingAIOptimizeSpacePlanningSmallApartments from "@/blogPages/LeveragingAIOptimizeSpacePlanningSmallApartments";
import ScienceColorDesignAIChoosePerfectPalette from "@/blogPages/ScienceColorDesignAIChoosePerfectPalette";
import RealEstateVirtualStagingMarketReality from "@/blogPages/RealEstateVirtualStagingMarketReality";
import ExpertTipsSaveBigHomeInteriors from "@/blogPages/ExpertTipsSaveBigHomeInteriors";
import GenZInstagramWorthyInteriors from "@/blogPages/GenZInstagramWorthyInteriors";
import BuildHouseAIToolsPorchDesign from "@/blogPages/BuildHouseAIToolsPorchDesign";
import UltimateGuideAIInteriorDesignTools2025 from "@/blogPages/UltimateGuideAIInteriorDesignTools2025";

export interface BlogPost {
  id: number;
  title: string;
  titleFr?: string;
  date: string;
  image: string;
  slug: string;
  slugFr?: string;
  Component: React.FC; //Component instead of content string
}

export const blogPosts: BlogPost[] = [
  {
    id: 0,
    title: "The Science of Color in Design: How AI Helps You Choose the Perfect Palette",
    titleFr: "La Science de la Couleur en Design : Comment l'IA Vous Aide à Choisir la Palette Parfaite",
    date: "Jun 28, 2025",
    image: "/Blogpages/mini_magick20250608-11056-cx50sk (1).jpg",
    slug: "the-science-of-color-in-design-how-ai-helps-you-choose-the-perfect-palette",
    slugFr: "science-couleur-design-comment-ia-aide-choisir-palette-parfaite",
    Component: ScienceColorDesignAIChoosePerfectPalette,
  },
  {
    id: 1,
    title: "Leveraging AI to Optimize Space Planning in Small Apartments",
    titleFr: "Exploiter l'IA pour Optimiser la Planification d'Espace dans les Petits Appartements",
    date: "Jun 27, 2025",
    image: "/Blogpages/mini_magick20250608-11056-2qt7xn.jpg",
    slug: "leveraging-ai-to-optimize-space-planning-in-small-apartments",
    slugFr: "exploiter-ia-optimiser-planification-espace-petits-appartements",
    Component: LeveragingAIOptimizeSpacePlanningSmallApartments,
  },
  {
    id: 2,
    title: "How AI-Powered Image Generation Can Inspire Your Interior Design in 2024",
    titleFr: "Comment la Génération d'Images IA Peut Inspirer Votre Design Intérieur en 2024",
    date: "Jun 26, 2025",
    image: "/Blogpages/mini_magick20250608-11435-xqjldd.jpg",
    slug: "how-ai-powered-image-generation-can-inspire-your-interior-design-in-2024",
    slugFr: "comment-generation-images-ia-peut-inspirer-design-interieur-2024",
    Component: AIPoweredImageGenerationInteriorDesign2024,
  },
  {
    id: 3,
    title: "Need Luxury Bathroom on a Budget? Here's How!",
    titleFr: "Besoin d'une Salle de Bain Luxueuse avec un Budget ? Voici Comment !",
    date: "Jun 25, 2025",
    image: "/Blogpages/mini_magick20250608-11435-kitium.jpg",
    slug: "need-luxury-bathroom-on-budget-here-is-how",
    slugFr: "besoin-salle-bain-luxueuse-budget-voici-comment",
    Component: LuxuryBathroomBudgetAIDesign,
  },
  {
    id: 4,
    title: "How Real Estate Agents Are Boosting Sales with AI-Powered Virtual Staging: The 2025 Market Reality",
    titleFr: "Comment les Agents Immobiliers Augmentent les Ventes avec la Mise en Scène Virtuelle IA : La Réalité du Marché 2025",
    date: "Apr 14, 2025",
    image: "/7pXKKwoQmwCK8yXNxn8iydkfI.png",
    slug: "how-real-estate-agents-are-boosting-sales-with-ai-powered-virtual-staging-the-2025-market-reality",
    slugFr: "comment-agents-immobiliers-augmentent-ventes-mise-en-scene-virtuelle-ia-2025",
    Component: RealEstateVirtualStagingMarketReality,
  },
  {
    id: 5,
    title: "10 Expert Tips to Save Big on Home Interiors in 2025",
    titleFr: "10 Conseils d'Experts pour Économiser sur la Décoration Intérieure en 2025",
    date: "Jun 24, 2025",
    image: "/expert-tips-save-big-home-interiors-hero.webp",
    slug: "10-expert-tips-to-save-big-on-home-interiors-in-2025",
    slugFr: "10-conseils-experts-economiser-decoration-interieure-2025",
    Component: ExpertTipsSaveBigHomeInteriors,
  },
  {
    id: 6,
    title: "Gen Z's Ultimate Guide to Instagram-Worthy Interiors",
    titleFr: "Guide Ultime de la Génération Z pour des Intérieurs Dignes d'Instagram",
    date: "Jan 21, 2025",
    image: "/qnYlT0wFEUMW2fJMNr5YOVjpoM.png",
    slug: "gen-z-s-ultimate-guide-to-instagram-worthy-interiors",
    slugFr: "guide-ultime-generation-z-interieurs-dignes-instagram",
    Component: GenZInstagramWorthyInteriors,
  },
  {
    id: 7,
    title: "How to Build Your Own House with AI Tools Including Porch Design",
    titleFr: "Comment Construire Votre Propre Maison avec des Outils IA Incluant la Conception de Porche",
    date: "Jan 11, 2025",
    image: "/revolutionizing-architecture-design.jpg",
    slug: "how-to-build-your-own-house-with-ai-tools-including-porch-design",
    slugFr: "comment-construire-votre-maison-outils-ia-conception-porche",
    Component: BuildHouseAIToolsPorchDesign,
  },
  {
    id: 8,
    title: "The Ultimate Guide to AI Interior Design Tools in 2025: A Comprehensive Comparison",
    titleFr: "Le Guide Ultime des Outils de Design Intérieur IA en 2025 : Une Comparaison Complète",
    date: "Dec 30, 2024",
    image: "/HTHsreSJo6OnIBmT0l515eu02c.png",
    slug: "the-ultimate-guide-to-ai-interior-design-tools-in-2025",
    slugFr: "guide-ultime-outils-design-interieur-ia-2025-comparaison",
    Component: UltimateGuideAIInteriorDesignTools2025,
  },

  {
    id: 9,
    title: "How DALL-E, Midjourney, and Styly AI are Revolutionizing Interior Design",
    titleFr: "Comment DALL-E, Midjourney et Styly AI Révolutionnent le Design d'Intérieur",
    date: "Jun 24, 2025",
    image: "/revolutionizing-architecture-interior.jpg",
    slug: "how-dall-e-midjourney-and-styly-are-revolutionizing-interior-design",
    slugFr: "comment-dall-e-midjourney-styly-revolutionnent-design-interieur",
    Component: DALLEMidjourneyRevolutionizingDesign,
  },
  {
    id: 10,
    title: "Unlock the Power of Photoshop's Generative AI for Effortless Interior Design",
    titleFr: "Débloquer la Puissance de l'IA Générative Photoshop pour le Design d'Intérieur Sans Effort",
    date: "Jun 23, 2025",
    image: "/mini_magick20250608-11435-xbitbj.jpg",
    slug: "unlock-the-power-of-photoshop-generative-ai-for-effortless-interior-design",
    slugFr: "debloquer-puissance-photoshop-ia-generative-design-interieur",
    Component: PhotoshopGenerativeAIInteriorDesign,
  },
  {
    id: 11,
    title: "AI Technology to Elevate Your Real Estate Strategy",
    titleFr: "Technologie IA pour Élever Votre Stratégie Immobilière",
    date: "Jun 22, 2025",
    image: "/mini_magick20250608-11435-vuggjo.jpg",
    slug: "ai-technology-to-elevate-your-real-estate-strategy",
    slugFr: "technologie-ia-pour-elever-strategie-immobiliere",
    Component: AITechnologyRealEstateStrategy,
  },
  {
    id: 8,
    title: "Unlocking the Power of AI for Interior Design: Your Guide to the Latest Innovations",
    titleFr: "Débloquer la puissance de l'IA pour le design d'intérieur : votre guide des dernières innovations",
    date: "Jun 21, 2025",
    image: "/ai-virtual-reality-design-hero.webp",
    slug: "unlocking-the-power-of-ai-for-interior-design-your-guide-to-the-latest-innovations",
    slugFr: "debloquer-puissance-ia-design-interieur-innovations",
    Component: UnlockingPowerAIInteriorDesign,
  },
  {
    id: 9,
    title: "Can ChatGPT Design Your Home? Exploring AI's Role in Interior Design",
    date: "Jun 17, 2025",
    image: "/ai-interior-design-technology.webp",
    slug: "can-chatgpt-design-your-home-ai-interior-design",
    slugFr: "chatgpt-peut-il-concevoir-votre-maison-ia-design-interieur",
    Component: ChatGPTInteriorDesign,
  },
  {
    id: 10,
    title: "How Styly & Viva Technology Are Shaping the Future of AI-Powered Design",
    titleFr: "Comment Styly & Viva Technology Façonnent l'Avenir du Design Alimenté par l'IA",
    date: "Jun 16, 2025",
    image: "/ai-interior-design-technology.webp",
    slug: "styly-viva-technology-future-ai-design",
    slugFr: "styly-viva-technology-avenir-design-ia",
    Component: StylyVivaTechPartnership,
  },
  {
    id: 11,
    title: "Designing AI Interior Staging on AWS: Behind the Scenes at Styly",
    titleFr: "Concevoir la Mise en Scène Intérieure IA sur AWS : Dans les Coulisses de Styly",
    date: "Jun 15, 2025",
    image: "/data-analytics-interior-design-dashboard.webp",
    slug: "designing-ai-interior-staging-aws-styly",
    slugFr: "concevoir-mise-en-scene-interieure-ia-aws-styly",
    Component: NewBlog2,
  },
  {
    id: 12,
    title: "Designing the Future Workspace: AI-Powered Office Interiors with Styly",
    date: "Jun 8, 2025",
    image: "/mini_magick20250608-11056-w1ke6k.jpg",
    slug: "designing-future-workspace-ai-powered-office-interiors",
    slugFr: "concevoir-espace-travail-futur-interieurs-bureau-ia",
    Component: FutureWorkspaceAIOfficeInteriors,
  },
  {
    id: 13,
    title: "The Impact of AI on the Role of the Interior Designer: A Collaborative Future",
    date: "Nov 23, 2024",
    image: "/impact-ai-interior-designer-hero.webp",
    slug: "impact-ai-role-interior-designer",
    slugFr: "impact-ia-role-designer-interieur",
    Component: ImpactAIInteriorDesigner,
  },
  {
    id: 14,
    title: "The Intersection of AI and Virtual Reality in Design: What the Future Holds",
    date: "Nov 16, 2024",
    image: "/ai-virtual-reality-design-hero.webp",
    slug: "intersection-ai-virtual-reality-design",
    slugFr: "intersection-ia-realite-virtuelle-design",
    Component: AIVirtualRealityDesign,
  },
  {
    id: 15,
    title: "AI in Accessible Design: Creating Inclusive Spaces with Styly",
    date: "Nov 12, 2024",
    image: "/accessible-design-modern-wheelchair-interior.webp",
    slug: "ai-accessible-design-inclusive-spaces",
    slugFr: "ia-design-accessible-espaces-inclusifs",
    Component: AIAccessibleDesign,
  },
  {
    id: 16,
    title: "The Role of Data in AI-Powered Design: How Insights Drive Better Aesthetics",
    date: "Nov 7, 2024",
    image: "/data-analytics-interior-design-dashboard.webp",
    slug: "role-data-ai-powered-design",
    slugFr: "role-donnees-design-alimente-ia",
    Component: DataAIPoweredDesign,
  },
  {
    id: 17,
    title: "Designing for the Modern Family: Using AI to Create Functional and Stylish Homes",
    date: "Nov 3, 2024",
    image: "/mini_magick20250608-11056-ddfvth.jpg",
    slug: "modern-family-design-ai-functional-homes",
    slugFr: "design-famille-moderne-ia-maisons-fonctionnelles",
    Component: ModernFamilyDesign,
  },
  {
    id: 18,
    title: "Designing for Sustainability: Using AI to Create Eco-Friendly Spaces",
    date: "Oct 30, 2024",
    image: "/sustainable-eco-friendly-interior-design.webp",
    slug: "sustainable-design-ai-eco-friendly-spaces",
    slugFr: "design-durabilite-ia-espaces-eco-responsables",
    Component: SustainableDesignAI,
  },
  {
    id: 19,
    title: "Leveraging AI to Optimize Space Planning in Small Apartments",
    date: "Oct 6, 2024",
    image: "/small-apartment-space-planning-modern.webp",
    slug: "ai-space-planning-optimization-small-apartments",
    slugFr: "ia-optimisation-planification-espace-petits-appartements",
    Component: AISpacePlanningSmallApartments,
  },
  {
    id: 20,
    title: "Creating Biophilic Interior Designs with Styly AI",
    date: "Oct 2, 2024",
    image: "/biophilic-design-plants-natural-interior.webp",
    slug: "creating-biophilic-interior-designs-styly-ai",
    slugFr: "creation-designs-interieur-biophiliques-ia-styly",
    Component: BiophilicDesignAI,
  },
  {
    id: 21,
    title: "The Science of Color in Design: How AI Helps You Choose the Perfect Palette",
    date: "Oct 19, 2024",
    image: "/color-theory-palette-interior-design.webp",
    slug: "science-color-design-ai-perfect-palette",
    slugFr: "science-couleur-design-ia-palette-parfaite",
    Component: ScienceColorDesign,
  },
  {
    id: 22,
    title: "Reducing Carbon Footprints: Sustainable Landscapes with Styly AI",
    date: "Oct 12, 2024",
    image: "/sustainable-landscape-garden-eco-design.webp",
    slug: "reducing-carbon-footprints-sustainable-landscapes-ai",
    slugFr: "reduire-empreinte-carbone-paysages-durables-ia",
    Component: SustainableLandscapesAI,
  },
  {
    id: 23,
    title: "AI in Landscape Design: Creating Beautiful Outdoor Spaces with Styly",
    date: "Sep 27, 2024",
    image: "/landscape-design-outdoor-garden-modern.webp",
    slug: "ai-landscape-design-outdoor-spaces-styly",
    slugFr: "ia-design-paysager-espaces-exterieurs-styly",
    Component: AILandscapeDesign,
  },
  {
    id: 24,
    title: "Interior Designing for Different Cultures: Leveraging AI for Culturally Sensitive Spaces",
    date: "Sep 21, 2024",
    image: "/cultural-design-multicultural-interior.webp",
    slug: "cultural-interior-design-ai-sensitive-spaces",
    slugFr: "design-interieur-cultures-ia-espaces-sensibles",
    Component: CulturalDesignAI,
  },
  {
    id: 25,
    title: "The Importance of Texture in Interior Design: How Styly Can Help",
    date: "Sep 19, 2024",
    image: "/texture-materials-interior-design-wood.webp",
    slug: "texture-importance-interior-design-styly",
    slugFr: "importance-texture-design-interieur-styly",
    Component: TextureImportanceDesign,
  },
  {
    id: 26,
    title: "6 Viral AI Room Design Prompts: Create Your Dream Bedroom with STYLY.io",
    date: "Dec 15, 2024",
    image: "/mini_magick20250608-11056-k6lwqq.jpg",
    slug: "6-viral-ai-room-design-prompts-create-dream-bedroom-styly",
    slugFr: "6-prompts-viraux-design-chambre-ia-styly",
    Component: ViralAIRoomDesignPrompts,
  },
  {
    id: 27,
    title: "2025 Interior Design Trends: What's In and What's Out",
    date: "Dec 7, 2024",
    image: "/2025-interior-design-trends-hero.webp",
    slug: "2025-interior-design-trends",
    slugFr: "tendances-design-interieur-2025",
    Component: InteriorDesignTrends2025,
  },
  {
    id: 28,
    title: "Free AI Interior Design Software - Transform Your Space",
    date: "Dec 1, 2024",
    image: "/free-ai-interior-design-hero.webp",
    slug: "free-ai-interior-design-software",
    slugFr: "logiciel-gratuit-design-interieur-ia",
    Component: FreeAIInteriorDesign,
  },
  {
    id: 29,
    title: "Revolutionizing Architecture, Engineering, and Construction with AI",
    date: "Apr 25, 2025",
    image: "/revolutionizing-architecture-hero.png",
    slug: "revolutionizing-architecture-engineering-construction-ai",
    slugFr: "revolutionner-architecture-ingenierie-construction-ia",
    Component: RevolutionizingArchitecture,
  },


  {
    id: 30,
    title: "Eight Stunning AI-Generated Bedroom Designs: Transform Your Space with Styly.io",
    date: "Dec 24, 2024",
    image:
      "https://framerusercontent.com/images/O8b24XUqi0Mxi3hUVHn9WWEWI.png",
    slug: "AI-Bedroom",
    slugFr: "huit-designs-chambres-ia-epoustouflants",
    Component: AIBedroom,
  },

  {
    id: 31,
    title: "Top 5 Challenges in Interior Design and How AI Can Solve Them",
    date: "Sep 13, 2024",
    image: "/top-5-challenges-interior-design-ai.webp",
    slug: "top-5-challenges-interior-design-ai-solutions",
    slugFr: "top-5-defis-design-interieur-solutions-ia",
    Component: Top5ChallengesInteriorDesign,
  },
  {
    id: 32,
    title: "How AI is Shaping the Future of Commercial Interior Design",
    date: "Sep 5, 2024",
    image: "/commercial-interior-design-ai-future.webp",
    slug: "ai-future-commercial-interior-design",
    slugFr: "ia-avenir-design-interieur-commercial",
    Component: CommercialInteriorDesignAI,
  },
  {
    id: 33,
    title: "Creating Outdoor Spaces with AI: A Guide to Designing Stunning Exteriors",
    date: "Aug 30, 2024",
    image: "/creating-outdoor-spaces-ai-design.webp",
    slug: "creating-outdoor-spaces-ai-design-guide",
    slugFr: "creer-espaces-exterieurs-ia-guide-design",
    Component: CreatingOutdoorSpacesAI,
  },
  {
    id: 34,
    title: "The Cost-Effectiveness of AI in Design: How Styly Saves You Money",
    date: "Aug 26, 2024",
    image: "/cost-effectiveness-ai-design-savings.webp",
    slug: "cost-effectiveness-ai-design-styly-savings",
    slugFr: "rentabilite-ia-design-economies-styly",
    Component: CostEffectivenessAIDesign,
  },
  {
    id: 35,
    title: "Transforming Small Living Spaces: Interior Design Solutions for Compact Homes",
    date: "Aug 3, 2024",
    image: "/mini_magick20250608-11435-4rql35.jpg",
    slug: "transforming-small-living-spaces-design-solutions",
    slugFr: "transformer-petits-espaces-vie-solutions-design",
    Component: TransformingSmallLivingSpaces,
  },
  {
    id: 36,
    title: "Why AI-Driven Customization is the Future of Interior Design",
    date: "Aug 20, 2024",
    image: "/ai-driven-customization-future-interior-design.webp",
    slug: "ai-driven-customization-future-interior-design",
    slugFr: "personnalisation-ia-avenir-design-interieur",
    Component: AIDrivenCustomizationFuture,
  },
  {
    id: 37,
    title: "Residential Interior Design: A Guide to Planning Spaces with Styly",
    date: "Aug 14, 2024",
    image: "/residential-interior-design-guide-planning.webp",
    slug: "residential-interior-design-guide-planning-spaces",
    slugFr: "guide-design-interieur-residentiel-planification-espaces",
    Component: ResidentialInteriorDesignGuide,
  },
  {
    id: 38,
    title: "Futuristic Interior Design Styles: How Styly AI Shapes Tomorrow's Homes Today",
    date: "Jul 27, 2024",
    image: "/futuristic-interior-design-styles-styly-ai.webp",
    slug: "futuristic-interior-design-styles-styly-ai",
    slugFr: "styles-design-interieur-futuriste-ia-styly",
    Component: FuturisticInteriorDesignStyles,
  },
  {
    id: 39,
    title: "The Good, The Bad, and The Room Planner AI: Sarah Johnson's Honest Styly.io Evaluations",
    date: "Jul 25, 2024",
    image: "/room-planner-ai-sarah-johnson-evaluations.webp",
    slug: "room-planner-ai-sarah-johnson-styly-evaluations",
    slugFr: "planificateur-chambre-ia-evaluations-sarah-johnson-styly",
    Component: RoomPlannerAISarahJohnsonEvaluations,
  },
  {
    id: 40,
    title: "Innovative Interior Stair Railing Ideas: Custom Designs Powered by Styly AI",
    date: "Jul 22, 2024",
    image: "/innovative-stair-railing-ideas-styly-ai.webp",
    slug: "innovative-interior-stair-railing-ideas-styly-ai",
    slugFr: "idees-rampes-escalier-interieur-innovantes-ia-styly",
    Component: InnovativeStairRailingIdeas,
  },
  {
    id: 41,
    title: "Design Your Living Room Like a Pro with Styly",
    date: "Jul 19, 2024",
    image: "/mini_magick20250608-11056-2qt7xn.jpg",
    slug: "design-living-room-like-pro-styly",
    slugFr: "concevoir-salon-comme-professionnel-styly",
    Component: DesignLivingRoomLikePro,
  },
  {
    id: 42,
    title: "How Generative AI is Revolutionizing Interior Design?",
    date: "Jun 23, 2024",
    image: "/ai-room-decorator.webp",
    slug: "how-generative-ai-revolutionizing-interior-design",
    slugFr: "comment-ia-generative-revolutionne-design-interieur",
    Component: GenerativeAIRevolutionizingDesign,
  },
  {
    id: 43,
    title: "AI Assistant in Interior Design - Best Prompts for ChatGPT, Gemini, Mistral",
    date: "May 12, 2024",
    image: "/ai-interior-design-technology.webp",
    slug: "ai-assistant-interior-design-chatgpt-prompts",
    slugFr: "assistant-ia-design-interieur-prompts-chatgpt",
    Component: AIAssistantInteriorDesignPrompts,
  },
  {
    id: 44,
    title: "The Intersection of AI and Virtual Reality in Design",
    titleFr: "L'Intersection de l'IA et de la Réalité Virtuelle dans le Design",
    date: "May 10, 2024",
    image: "/ai-virtual-reality-design.webp",
    slug: "intersection-ai-virtual-reality-design",
    slugFr: "intersection-ia-realite-virtuelle-design",
    Component: AIVirtualRealityDesign,
  },
  {
    id: 45,
    title: "Sustainable Design with AI: Creating Eco-Friendly Spaces",
    titleFr: "Design Durable avec l'IA : Créer des Espaces Éco-Responsables",
    date: "May 8, 2024",
    image: "/sustainable-design-ai-eco-friendly.webp",
    slug: "sustainable-design-ai-eco-friendly-spaces",
    slugFr: "design-durabilite-ia-espaces-eco-responsables",
    Component: SustainableDesignAI,
  },
  {
    id: 46,
    title: "The Role of Data in AI-Powered Design",
    titleFr: "Le Rôle des Données dans le Design Alimenté par l'IA",
    date: "May 5, 2024",
    image: "/data-ai-powered-design.webp",
    slug: "role-data-ai-powered-design",
    slugFr: "role-donnees-design-alimente-ia",
    Component: DataAIPoweredDesign,
  },
  {
    id: 47,
    title: "Modern Family Design: AI for Functional Homes",
    titleFr: "Design de Famille Moderne : IA pour des Maisons Fonctionnelles",
    date: "May 3, 2024",
    image: "/modern-family-design-ai.webp",
    slug: "modern-family-design-ai-functional-homes",
    slugFr: "design-famille-moderne-ia-maisons-fonctionnelles",
    Component: ModernFamilyDesign,
  },
  {
    id: 48,
    title: "6 Viral AI Room Design Prompts to Create Your Dream Bedroom with Styly",
    titleFr: "6 Prompts Viraux de Design de Chambre IA pour Créer Votre Chambre de Rêve avec Styly",
    date: "May 1, 2024",
    image: "/6-viral-ai-room-design-prompts.webp",
    slug: "6-viral-ai-room-design-prompts-create-dream-bedroom-styly",
    slugFr: "6-prompts-viraux-design-chambre-ia-styly",
    Component: ViralAIRoomDesignPrompts,
  },
  {
    id: 49,
    title: "AI for Accessible Design: Creating Inclusive Spaces",
    titleFr: "IA pour le Design Accessible : Créer des Espaces Inclusifs",
    date: "Apr 28, 2024",
    image: "/ai-accessible-design-inclusive.webp",
    slug: "ai-accessible-design-inclusive-spaces",
    slugFr: "ia-design-accessible-espaces-inclusifs",
    Component: AIAccessibleDesign,
  },
];
