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

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  slug: string;
  slugFr?: string;
  Component: React.FC; //Component instead of content string
}

export const blogPosts: BlogPost[] = [
  {
    id: 0,
    title: "Unlocking the Power of AI for Interior Design: Your Guide to the Latest Innovations",
    date: "Jun 21, 2025",
    image: "/ai-virtual-reality-design-hero.webp",
    slug: "unlocking-the-power-of-ai-for-interior-design-your-guide-to-the-latest-innovations",
    slugFr: "debloquer-puissance-ia-design-interieur-innovations",
    Component: UnlockingPowerAIInteriorDesign,
  },
  {
    id: 1,
    title: "Can ChatGPT Design Your Home? Exploring AI's Role in Interior Design",
    date: "Jun 17, 2025",
    image: "/ai-interior-design-technology.webp",
    slug: "can-chatgpt-design-your-home-ai-interior-design",
    slugFr: "chatgpt-peut-il-concevoir-votre-maison-ia-design-interieur",
    Component: ChatGPTInteriorDesign,
  },
  {
    id: 2,
    title: "How Styly.io & Viva Technology Are Shaping the Future of AI-Powered Design",
    date: "Jun 16, 2025",
    image: "/ai-interior-design-technology.webp",
    slug: "styly-viva-technology-future-ai-design",
    slugFr: "styly-viva-technology-avenir-design-ia",
    Component: StylyVivaTechPartnership,
  },
  {
    id: 3,
    title: "Designing AI Interior Staging on AWS: Behind the Scenes at Styly.io",
    date: "Jun 15, 2025",
    image: "/data-analytics-interior-design-dashboard.webp",
    slug: "designing-ai-interior-staging-aws-styly",
    slugFr: "concevoir-mise-en-scene-interieure-ia-aws-styly",
    Component: NewBlog2,
  },
  {
    id: 4,
    title: "Designing the Future Workspace: AI-Powered Office Interiors with Styly",
    date: "Jun 8, 2025",
    image: "/mini_magick20250608-11056-w1ke6k.jpg",
    slug: "designing-future-workspace-ai-powered-office-interiors",
    slugFr: "concevoir-espace-travail-futur-interieurs-bureau-ia",
    Component: FutureWorkspaceAIOfficeInteriors,
  },
  {
    id: 5,
    title: "The Impact of AI on the Role of the Interior Designer: A Collaborative Future",
    date: "Nov 23, 2024",
    image: "/impact-ai-interior-designer-hero.webp",
    slug: "impact-ai-role-interior-designer",
    slugFr: "impact-ia-role-designer-interieur",
    Component: ImpactAIInteriorDesigner,
  },
  {
    id: 6,
    title: "The Intersection of AI and Virtual Reality in Design: What the Future Holds",
    date: "Nov 16, 2024",
    image: "/ai-virtual-reality-design-hero.webp",
    slug: "intersection-ai-virtual-reality-design",
    slugFr: "intersection-ia-realite-virtuelle-design",
    Component: AIVirtualRealityDesign,
  },
  {
    id: 7,
    title: "AI in Accessible Design: Creating Inclusive Spaces with Styly",
    date: "Nov 12, 2024",
    image: "/accessible-design-modern-wheelchair-interior.webp",
    slug: "ai-accessible-design-inclusive-spaces",
    slugFr: "ia-design-accessible-espaces-inclusifs",
    Component: AIAccessibleDesign,
  },
  {
    id: 8,
    title: "The Role of Data in AI-Powered Design: How Insights Drive Better Aesthetics",
    date: "Nov 7, 2024",
    image: "/data-analytics-interior-design-dashboard.webp",
    slug: "role-data-ai-powered-design",
    slugFr: "role-donnees-design-alimente-ia",
    Component: DataAIPoweredDesign,
  },
  {
    id: 9,
    title: "Designing for the Modern Family: Using AI to Create Functional and Stylish Homes",
    date: "Nov 3, 2024",
    image: "/mini_magick20250608-11056-ddfvth.jpg",
    slug: "modern-family-design-ai-functional-homes",
    slugFr: "design-famille-moderne-ia-maisons-fonctionnelles",
    Component: ModernFamilyDesign,
  },
  {
    id: 10,
    title: "Designing for Sustainability: Using AI to Create Eco-Friendly Spaces",
    date: "Oct 30, 2024",
    image: "/sustainable-eco-friendly-interior-design.webp",
    slug: "sustainable-design-ai-eco-friendly-spaces",
    slugFr: "design-durabilite-ia-espaces-eco-responsables",
    Component: SustainableDesignAI,
  },
  {
    id: 11,
    title: "Leveraging AI to Optimize Space Planning in Small Apartments",
    date: "Oct 6, 2024",
    image: "/small-apartment-space-planning-modern.webp",
    slug: "ai-space-planning-optimization-small-apartments",
    slugFr: "ia-optimisation-planification-espace-petits-appartements",
    Component: AISpacePlanningSmallApartments,
  },
  {
    id: 12,
    title: "Creating Biophilic Interior Designs with Styly AI",
    date: "Oct 2, 2024",
    image: "/biophilic-design-plants-natural-interior.webp",
    slug: "creating-biophilic-interior-designs-styly-ai",
    slugFr: "creation-designs-interieur-biophiliques-ia-styly",
    Component: BiophilicDesignAI,
  },
  {
    id: 13,
    title: "The Science of Color in Design: How AI Helps You Choose the Perfect Palette",
    date: "Oct 19, 2024",
    image: "/color-theory-palette-interior-design.webp",
    slug: "science-color-design-ai-perfect-palette",
    slugFr: "science-couleur-design-ia-palette-parfaite",
    Component: ScienceColorDesign,
  },
  {
    id: 14,
    title: "Reducing Carbon Footprints: Sustainable Landscapes with Styly AI",
    date: "Oct 12, 2024",
    image: "/sustainable-landscape-garden-eco-design.webp",
    slug: "reducing-carbon-footprints-sustainable-landscapes-ai",
    slugFr: "reduire-empreinte-carbone-paysages-durables-ia",
    Component: SustainableLandscapesAI,
  },
  {
    id: 15,
    title: "AI in Landscape Design: Creating Beautiful Outdoor Spaces with Styly",
    date: "Sep 27, 2024",
    image: "/landscape-design-outdoor-garden-modern.webp",
    slug: "ai-landscape-design-outdoor-spaces-styly",
    slugFr: "ia-design-paysager-espaces-exterieurs-styly",
    Component: AILandscapeDesign,
  },
  {
    id: 16,
    title: "Interior Designing for Different Cultures: Leveraging AI for Culturally Sensitive Spaces",
    date: "Sep 21, 2024",
    image: "/cultural-design-multicultural-interior.webp",
    slug: "cultural-interior-design-ai-sensitive-spaces",
    slugFr: "design-interieur-cultures-ia-espaces-sensibles",
    Component: CulturalDesignAI,
  },
  {
    id: 17,
    title: "The Importance of Texture in Interior Design: How Styly Can Help",
    date: "Sep 19, 2024",
    image: "/texture-materials-interior-design-wood.webp",
    slug: "texture-importance-interior-design-styly",
    slugFr: "importance-texture-design-interieur-styly",
    Component: TextureImportanceDesign,
  },
  {
    id: 18,
    title: "6 Viral AI Room Design Prompts: Create Your Dream Bedroom with STYLY.io",
    date: "Dec 15, 2024",
    image: "/mini_magick20250608-11056-k6lwqq.jpg",
    slug: "6-viral-ai-room-design-prompts-create-dream-bedroom-styly",
    slugFr: "6-prompts-viraux-design-chambre-ia-styly",
    Component: ViralAIRoomDesignPrompts,
  },
  {
    id: 19,
    title: "2025 Interior Design Trends: What's In and What's Out",
    date: "Dec 7, 2024",
    image: "/2025-interior-design-trends-hero.webp",
    slug: "2025-interior-design-trends",
    slugFr: "tendances-design-interieur-2025",
    Component: InteriorDesignTrends2025,
  },
  {
    id: 20,
    title: "Free AI Interior Design Software - Transform Your Space",
    date: "Dec 1, 2024",
    image: "/free-ai-interior-design-hero.webp",
    slug: "free-ai-interior-design-software",
    slugFr: "logiciel-gratuit-design-interieur-ia",
    Component: FreeAIInteriorDesign,
  },
  {
    id: 21,
    title: "Revolutionizing Architecture, Engineering, and Construction with AI",
    date: "Apr 25, 2025",
    image: "/revolutionizing-architecture-hero.png",
    slug: "revolutionizing-architecture-engineering-construction-ai",
    slugFr: "revolutionner-architecture-ingenierie-construction-ia",
    Component: RevolutionizingArchitecture,
  },
  {
    id: 22,
    title:
      "How Real Estate Agents Are Boosting Sales with AI-Powered Virtual Staging: The 2025 Market Reality",
    date: "Apr 14, 2025",
    image:
      "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/4e7899ec47182b532c11c8e53fe263c5af7c96cc?placeholderIfAbsent=true",
    slug: "real-estate-agents-ai-virtual-staging",
    slugFr: "agents-immobiliers-home-staging-virtuel-ia",
    Component: RealEstateVirtualStaging,
  },
  {
    id: 23,
    title: "Gen Z's Ultimate Guide to Instagram-Worthy Interiors",
    date: "Jan 21, 2025",
    image:
      "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/e9d8abaa9dba567923fb24e01a614d855a14d324?placeholderIfAbsent=true",
    slug: "gen-z-instagram-worthy-interiors",
    slugFr: "guide-gen-z-interieurs-instagram",
    Component: GenZInteriors,
  },
  {
    id: 24,
    title: "How to Build Your Own House with AI Tools Including Porch Design",
    date: "Jan 11, 2025",
    image:
      "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/da3a923bbf34cff9019aca5b89d99ca6f1b83531?placeholderIfAbsent=true",
    slug: "build-house-ai-tools-porch-design",
    slugFr: "construire-maison-outils-ia-conception-porche",
    Component: BuildHouse,
  },
  {
    id: 25,
    title: "The Ultimate Guide to AI Interior Design Tools in 2025: A Comprehensive Comparison",
    date: "Dec 30, 2024",
    image:
    "https://framerusercontent.com/images/HTHsreSJo6OnIBmT0l515eu02c.png",
    slug: "ultimate-guide-AI",
    slugFr: "guide-ultime-outils-design-interieur-ia-2025",
    Component: UltimateGuide,
  },
  {
    id: 26,
    title: "Eight Stunning AI-Generated Bedroom Designs: Transform Your Space with Styly.io",
    date: "Dec 24, 2024",
    image:
      "https://framerusercontent.com/images/O8b24XUqi0Mxi3hUVHn9WWEWI.png",
    slug: "AI-Bedroom",
    slugFr: "huit-designs-chambres-ia-epoustouflants",
    Component: AIBedroom,
  },
  {
    id: 27,
    title: "10 Expert Tips to Save Big on Home Interiors in 2025",
    date: "Dec 22, 2024",
    image:
      "https://framerusercontent.com/images/ZSQq6ucrIvInuCrhQaYRXl235Y.webp",
    slug: "AI-Interior",
    slugFr: "10-conseils-experts-economiser-interieurs-maison",
    Component: AIInterior,
  },
  {
    id: 28,
    title: "Top 5 Challenges in Interior Design and How AI Can Solve Them",
    date: "Sep 13, 2024",
    image: "/top-5-challenges-interior-design-ai.webp",
    slug: "top-5-challenges-interior-design-ai-solutions",
    slugFr: "top-5-defis-design-interieur-solutions-ia",
    Component: Top5ChallengesInteriorDesign,
  },
  {
    id: 29,
    title: "How AI is Shaping the Future of Commercial Interior Design",
    date: "Sep 5, 2024",
    image: "/commercial-interior-design-ai-future.webp",
    slug: "ai-future-commercial-interior-design",
    slugFr: "ia-avenir-design-interieur-commercial",
    Component: CommercialInteriorDesignAI,
  },
  {
    id: 30,
    title: "Creating Outdoor Spaces with AI: A Guide to Designing Stunning Exteriors",
    date: "Aug 30, 2024",
    image: "/creating-outdoor-spaces-ai-design.webp",
    slug: "creating-outdoor-spaces-ai-design-guide",
    slugFr: "creer-espaces-exterieurs-ia-guide-design",
    Component: CreatingOutdoorSpacesAI,
  },
  {
    id: 31,
    title: "The Cost-Effectiveness of AI in Design: How Styly Saves You Money",
    date: "Aug 26, 2024",
    image: "/cost-effectiveness-ai-design-savings.webp",
    slug: "cost-effectiveness-ai-design-styly-savings",
    slugFr: "rentabilite-ia-design-economies-styly",
    Component: CostEffectivenessAIDesign,
  },
  {
    id: 32,
    title: "Transforming Small Living Spaces: Interior Design Solutions for Compact Homes",
    date: "Aug 3, 2024",
    image: "/mini_magick20250608-11435-4rql35.jpg",
    slug: "transforming-small-living-spaces-design-solutions",
    slugFr: "transformer-petits-espaces-vie-solutions-design",
    Component: TransformingSmallLivingSpaces,
  },
  {
    id: 33,
    title: "Why AI-Driven Customization is the Future of Interior Design",
    date: "Aug 20, 2024",
    image: "/ai-driven-customization-future-interior-design.webp",
    slug: "ai-driven-customization-future-interior-design",
    slugFr: "personnalisation-ia-avenir-design-interieur",
    Component: AIDrivenCustomizationFuture,
  },
  {
    id: 34,
    title: "Residential Interior Design: A Guide to Planning Spaces with Styly",
    date: "Aug 14, 2024",
    image: "/residential-interior-design-guide-planning.webp",
    slug: "residential-interior-design-guide-planning-spaces",
    slugFr: "guide-design-interieur-residentiel-planification-espaces",
    Component: ResidentialInteriorDesignGuide,
  },
  {
    id: 35,
    title: "Futuristic Interior Design Styles: How Styly AI Shapes Tomorrow's Homes Today",
    date: "Jul 27, 2024",
    image: "/futuristic-interior-design-styles-styly-ai.webp",
    slug: "futuristic-interior-design-styles-styly-ai",
    slugFr: "styles-design-interieur-futuriste-ia-styly",
    Component: FuturisticInteriorDesignStyles,
  },
  {
    id: 36,
    title: "The Good, The Bad, and The Room Planner AI: Sarah Johnson's Honest Styly.io Evaluations",
    date: "Jul 25, 2024",
    image: "/mini_magick20250608-11056-rtsk42.jpg",
    slug: "room-planner-ai-sarah-johnson-styly-evaluations",
    slugFr: "planificateur-chambre-ia-evaluations-sarah-johnson-styly",
    Component: RoomPlannerAISarahJohnsonEvaluations,
  },
  {
    id: 37,
    title: "Innovative Interior Stair Railing Ideas: Custom Designs Powered by Styly AI",
    date: "Jul 22, 2024",
    image: "/innovative-stair-railing-ideas-styly-ai.webp",
    slug: "innovative-interior-stair-railing-ideas-styly-ai",
    slugFr: "idees-rampes-escalier-interieur-innovantes-ia-styly",
    Component: InnovativeStairRailingIdeas,
  },
  {
    id: 38,
    title: "Design Your Living Room Like a Pro with Styly",
    date: "Jul 19, 2024",
    image: "/mini_magick20250608-11056-2qt7xn.jpg",
    slug: "design-living-room-like-pro-styly",
    slugFr: "concevoir-salon-comme-professionnel-styly",
    Component: DesignLivingRoomLikePro,
  },
  {
    id: 39,
    title: "How Generative AI is Revolutionizing Interior Design?",
    date: "Jun 23, 2024",
    image: "/ai-room-decorator.webp",
    slug: "how-generative-ai-revolutionizing-interior-design",
    slugFr: "comment-ia-generative-revolutionne-design-interieur",
    Component: GenerativeAIRevolutionizingDesign,
  },
  {
    id: 40,
    title: "AI Assistant in Interior Design - Best Prompts for ChatGPT, Gemini, Mistral",
    date: "May 12, 2024",
    image: "/ai-interior-design-technology.webp",
    slug: "ai-assistant-interior-design-chatgpt-prompts",
    slugFr: "assistant-ia-design-interieur-prompts-chatgpt",
    Component: AIAssistantInteriorDesignPrompts,
  },
];
