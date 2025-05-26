import RealEstateVirtualStaging from "@/blogPages/RealEstateVirtualStaging";
import GenZInteriors from "@/blogPages/GenZInteriors";
import BuildHouse from "@/blogPages/BuildHouse";
import UltimateGuide from "@/blogPages/UltimateGuide" ;
import AIBedroom from "@/blogPages/AIBedroom" ;
import AIInterior from "@/blogPages/AIInterior" ;
import RevolutionizingArchitecture from "@/blogPages/RevolutionizingArchitecture";
import InteriorDesignTrends2025 from "@/blogPages/InteriorDesignTrends2025";

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
    title: "2025 Interior Design Trends: What's In and What's Out",
    date: "Dec 7, 2024",
    image: "/2025-interior-design-trends-hero.webp",
    slug: "2025-interior-design-trends",
    slugFr: "tendances-design-interieur-2025",
    Component: InteriorDesignTrends2025,
  },
  {
    id: 2,
    title: "Revolutionizing Architecture, Engineering, and Construction with AI",
    date: "Apr 25, 2025",
    image: "/revolutionizing-architecture-hero.png",
    slug: "revolutionizing-architecture-engineering-construction-ai",
    slugFr: "revolutionner-architecture-ingenierie-construction-ia",
    Component: RevolutionizingArchitecture,
  },
  {
    id: 2,
    title:
      "How Real Estate Agents Are Boosting Sales with AI-Powered Virtual Staging: The 2025 Market Reality",
    date: "Apr 14, 2025",
    image:
      "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/4e7899ec47182b532c11c8e53fe263c5af7c96cc?placeholderIfAbsent=true",
    slug: "real-estate-agents-ai-virtual-staging",
    Component: RealEstateVirtualStaging,
  },
  {
    id: 3,
    title: "Gen Z's Ultimate Guide to Instagram-Worthy Interiors",
    date: "Jan 21, 2025",
    image:
      "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/e9d8abaa9dba567923fb24e01a614d855a14d324?placeholderIfAbsent=true",
    slug: "gen-z-instagram-worthy-interiors",
    Component: GenZInteriors,
  },
  {
    id: 4,
    title: "How to Build Your Own House with AI Tools Including Porch Design",
    date: "Jan 11, 2025",
    image:
      "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/da3a923bbf34cff9019aca5b89d99ca6f1b83531?placeholderIfAbsent=true",
    slug: "build-house-ai-tools-porch-design",
    Component: BuildHouse,
  },
  {
    id: 5,
    title: "The Ultimate Guide to AI Interior Design Tools in 2025: A Comprehensive Comparison",
    date: "Dec 30, 2024",
    image:
    "https://framerusercontent.com/images/HTHsreSJo6OnIBmT0l515eu02c.png",
    slug: "ultimate-guide-AI",
    Component: UltimateGuide,
  },
  {
    id: 6,
    title: "Eight Stunning AI-Generated Bedroom Designs: Transform Your Space with Styly.io",
    date: "Dec 24, 2024",
    image:
      "https://framerusercontent.com/images/O8b24XUqi0Mxi3hUVHn9WWEWI.png",
    slug: "AI-Bedroom",
    Component: AIBedroom,
  },
  {
    id: 7,
    title: "10 Expert Tips to Save Big on Home Interiors in 2025",
    date: "Dec 22, 2024",
    image:
      "https://framerusercontent.com/images/ZSQq6ucrIvInuCrhQaYRXl235Y.webp",
    slug: "AI-Interior",
    Component: AIInterior,
  },
];
