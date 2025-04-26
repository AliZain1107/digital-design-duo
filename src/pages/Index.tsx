import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import SupportedBy from "@/components/home/SupportedBy";
import HowItWorks from "@/components/home/HowItWorks";
import ArchitectureRevolution from "@/components/home/ArchitectureRevolution";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import BlogSection from "@/components/home/BlogSection";
import FAQ from "@/components/home/FAQ";
import SEO from "@/components/layout/SEO";
import VideoSection from "@/components/home/VideoSection";
import TargetMarkets from "@/components/home/TargetMarkets";

const Index: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Styly.io - AI-Powered Interior and Exterior Design Platform",
    "description": "Styly is an AI-powered virtual staging platform serving both B2B and B2C markets. It instantly transforms empty interior spaces into beautifully furnished, realistic visuals. Upload a photo or use WhatsApp to create stunning designs without technical expertise.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Styly.io",
      "url": "https://styly.io"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/f99e29783a6ec2e80cc53da0266b73b066b99df2"
    },
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "STYLY",
      "applicationCategory": "DesignApplication",
      "operatingSystem": "Web, iOS, Android, WhatsApp",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  };

  return (
    <div className="bg-white flex flex-col w-full min-h-screen">
      <SEO 
        title="STYLY - AI-Powered Interior & Exterior Design App | Web, Mobile & WhatsApp" 
        description="Transform empty spaces into beautifully furnished, realistic interiors with STYLY. Upload a photo or describe your space via web, mobile or WhatsApp. No technical expertise needed. Ideal for real estate, homeowners, and renovation projects."
        keywords="AI interior design, virtual staging, real estate visualization, interior design app, WhatsApp interior design, renovation planning, AI home design, property marketing, interior design tool"
        structuredData={structuredData}
      />
      <div className="flex w-full flex-col">
        <Navbar />
        <Hero />
        <SupportedBy />
        <VideoSection />
        <HowItWorks />
        <TargetMarkets />
        <ArchitectureRevolution />
        <Stats />
        <Testimonials />
        <BlogSection />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
