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
    id: 1,
    title: "The Impact of AI on the Role of the Interior Designer: A Collaborative Future",
    date: "Nov 23, 2024",
    image: "/impact-ai-interior-designer-hero.webp",
    slug: "impact-ai-role-interior-designer",
    slugFr: "impact-ia-role-designer-interieur",
    Component: ImpactAIInteriorDesigner,
  },
  {
    id: 2,
    title: "The Intersection of AI and Virtual Reality in Design: What the Future Holds",
    date: "Nov 16, 2024",
    image: "/ai-virtual-reality-design-hero.webp",
    slug: "intersection-ai-virtual-reality-design",
    slugFr: "intersection-ia-realite-virtuelle-design",
    Component: AIVirtualRealityDesign,
  },
  {
    id: 3,
    title: "AI in Accessible Design: Creating Inclusive Spaces with Styly",
    date: "Nov 12, 2024",
    image: "/accessible-design-modern-wheelchair-interior.webp",
    slug: "ai-accessible-design-inclusive-spaces",
    slugFr: "ia-design-accessible-espaces-inclusifs",
    Component: AIAccessibleDesign,
  },
  {
    id: 4,
    title: "The Role of Data in AI-Powered Design: How Insights Drive Better Aesthetics",
    date: "Nov 7, 2024",
    image: "/data-analytics-interior-design-dashboard.webp",
    slug: "role-data-ai-powered-design",
    slugFr: "role-donnees-design-alimente-ia",
    Component: DataAIPoweredDesign,
  },
  {
    id: 5,
    title: "Designing for the Modern Family: Using AI to Create Functional and Stylish Homes",
    date: "Nov 3, 2024",
    image: "/modern-family-home-functional-stylish.webp",
    slug: "modern-family-design-ai-functional-homes",
    slugFr: "design-famille-moderne-ia-maisons-fonctionnelles",
    Component: ModernFamilyDesign,
  },
  {
    id: 6,
    title: "Designing for Sustainability: Using AI to Create Eco-Friendly Spaces",
    date: "Oct 30, 2024",
    image: "/sustainable-eco-friendly-interior-design.webp",
    slug: "sustainable-design-ai-eco-friendly-spaces",
    slugFr: "design-durabilite-ia-espaces-eco-responsables",
    Component: SustainableDesignAI,
  },
  {
    id: 7,
    title: "Leveraging AI to Optimize Space Planning in Small Apartments",
    date: "Oct 6, 2024",
    image: "/ai-space-planning-apartments-hero.webp",
    slug: "ai-space-planning-optimization-small-apartments",
    slugFr: "ia-optimisation-planification-espace-petits-appartements",
    Component: AISpacePlanningSmallApartments,
  },
  {
    id: 8,
    title: "Creating Biophilic Interior Designs with Styly AI",
    date: "Oct 2, 2024",
    image: "/biophilic-design-ai-hero.webp",
    slug: "creating-biophilic-interior-designs-styly-ai",
    slugFr: "creation-designs-interieur-biophiliques-ia-styly",
    Component: BiophilicDesignAI,
  },
  {
    id: 9,
    title: "The Science of Color in Design: How AI Helps You Choose the Perfect Palette",
    date: "Oct 19, 2024",
    image: "/color-theory-palette-interior-design.webp",
    slug: "science-color-design-ai-perfect-palette",
    slugFr: "science-couleur-design-ia-palette-parfaite",
    Component: ScienceColorDesign,
  },
  {
    id: 10,
    title: "Reducing Carbon Footprints: Sustainable Landscapes with Styly AI",
    date: "Oct 12, 2024",
    image: "/sustainable-landscape-garden-eco-design.webp",
    slug: "reducing-carbon-footprints-sustainable-landscapes-ai",
    slugFr: "reduire-empreinte-carbone-paysages-durables-ia",
    Component: SustainableLandscapesAI,
  },
  {
    id: 11,
    title: "AI in Landscape Design: Creating Beautiful Outdoor Spaces with Styly",
    date: "Sep 27, 2024",
    image: "/ai-landscape-design-hero.webp",
    slug: "ai-landscape-design-outdoor-spaces-styly",
    slugFr: "ia-design-paysager-espaces-exterieurs-styly",
    Component: AILandscapeDesign,
  },
  {
    id: 12,
    title: "Interior Designing for Different Cultures: Leveraging AI for Culturally Sensitive Spaces",
    date: "Sep 21, 2024",
    image: "/cultural-design-ai-hero.webp",
    slug: "cultural-interior-design-ai-sensitive-spaces",
    slugFr: "design-interieur-cultures-ia-espaces-sensibles",
    Component: CulturalDesignAI,
  },
  {
    id: 13,
    title: "The Importance of Texture in Interior Design: How Styly Can Help",
    date: "Sep 19, 2024",
    image: "/texture-importance-design-hero.webp",
    slug: "texture-importance-interior-design-styly",
    slugFr: "importance-texture-design-interieur-styly",
    Component: TextureImportanceDesign,
  },
  {
    id: 14,
    title: "6 Viral AI Room Design Prompts: Create Your Dream Bedroom with STYLY.io",
    date: "Dec 15, 2024",
    image: "/viral-ai-room-design-prompts-hero.webp",
    slug: "6-viral-ai-room-design-prompts-create-dream-bedroom-styly",
    slugFr: "6-prompts-viraux-design-chambre-ia-styly",
    Component: ViralAIRoomDesignPrompts,
  },
  {
    id: 15,
    title: "2025 Interior Design Trends: What's In and What's Out",
    date: "Dec 7, 2024",
    image: "/2025-interior-design-trends-hero.webp",
    slug: "2025-interior-design-trends",
    slugFr: "tendances-design-interieur-2025",
    Component: InteriorDesignTrends2025,
  },
  {
    id: 16,
    title: "Free AI Interior Design Software - Transform Your Space",
    date: "Dec 1, 2024",
    image: "/free-ai-interior-design-hero.webp",
    slug: "free-ai-interior-design-software",
    slugFr: "logiciel-gratuit-design-interieur-ia",
    Component: FreeAIInteriorDesign,
  },
  {
    id: 17,
    title: "Revolutionizing Architecture, Engineering, and Construction with AI",
    date: "Apr 25, 2025",
    image: "/revolutionizing-architecture-hero.png",
    slug: "revolutionizing-architecture-engineering-construction-ai",
    slugFr: "revolutionner-architecture-ingenierie-construction-ia",
    Component: RevolutionizingArchitecture,
  },
  {
    id: 18,
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
    id: 19,
    title: "Gen Z's Ultimate Guide to Instagram-Worthy Interiors",
    date: "Jan 21, 2025",
    image:
      "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/e9d8abaa9dba567923fb24e01a614d855a14d324?placeholderIfAbsent=true",
    slug: "gen-z-instagram-worthy-interiors",
    slugFr: "guide-gen-z-interieurs-instagram",
    Component: GenZInteriors,
  },
  {
    id: 20,
    title: "How to Build Your Own House with AI Tools Including Porch Design",
    date: "Jan 11, 2025",
    image:
      "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/da3a923bbf34cff9019aca5b89d99ca6f1b83531?placeholderIfAbsent=true",
    slug: "build-house-ai-tools-porch-design",
    slugFr: "construire-maison-outils-ia-conception-porche",
    Component: BuildHouse,
  },
  {
    id: 21,
    title: "The Ultimate Guide to AI Interior Design Tools in 2025: A Comprehensive Comparison",
    date: "Dec 30, 2024",
    image:
    "https://framerusercontent.com/images/HTHsreSJo6OnIBmT0l515eu02c.png",
    slug: "ultimate-guide-AI",
    slugFr: "guide-ultime-outils-design-interieur-ia-2025",
    Component: UltimateGuide,
  },
  {
    id: 22,
    title: "Eight Stunning AI-Generated Bedroom Designs: Transform Your Space with Styly.io",
    date: "Dec 24, 2024",
    image:
      "https://framerusercontent.com/images/O8b24XUqi0Mxi3hUVHn9WWEWI.png",
    slug: "AI-Bedroom",
    slugFr: "huit-designs-chambres-ia-epoustouflants",
    Component: AIBedroom,
  },
  {
    id: 23,
    title: "10 Expert Tips to Save Big on Home Interiors in 2025",
    date: "Dec 22, 2024",
    image:
      "https://framerusercontent.com/images/ZSQq6ucrIvInuCrhQaYRXl235Y.webp",
    slug: "AI-Interior",
    slugFr: "10-conseils-experts-economiser-interieurs-maison",
    Component: AIInterior,
  },
];
