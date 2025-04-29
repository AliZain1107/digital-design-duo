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
import DesignWithAI from "@/components/home/DesignWithAI";
import { useLanguage } from "@/lib/i18n";

const Index: React.FC = () => {
  // Get current language to force re-render when it changes
  const { language } = useLanguage();
  console.log("Index page rendering with language:", language);
  
  // Advanced comprehensive structured data with multiple schemas
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://styly.io/#webpage",
        "url": "https://styly.io/",
        "name": "Styly.io - AI-Powered Interior and Exterior Design Platform",
        "description": "Styly is an AI-powered virtual staging platform serving both B2B and B2C markets. It instantly transforms empty interior spaces into beautifully furnished, realistic visuals. Upload a photo or use WhatsApp to create stunning designs without technical expertise.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://styly.io/#website",
          "name": "Styly.io",
          "url": "https://styly.io",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://styly.io/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "@id": "https://styly.io/#primaryimage",
          "url": "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/f99e29783a6ec2e80cc53da0266b73b066b99df2",
          "width": 1200,
          "height": 630
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@id": "https://styly.io/",
                "name": "Home"
              }
            }
          ]
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://styly.io/#softwareapplication",
        "name": "STYLY",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Web, iOS, Android, WhatsApp",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "358",
          "bestRating": "5",
          "worstRating": "1"
        },
        "screenshot": "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/f99e29783a6ec2e80cc53da0266b73b066b99df2"
      },
      {
        "@type": "Organization",
        "@id": "https://styly.io/#organization",
        "name": "STYLY",
        "url": "https://styly.io",
        "logo": {
          "@type": "ImageObject",
          "url": "https://styly.io/logo.png",
          "width": 200,
          "height": 60
        },
        "sameAs": [
          "https://twitter.com/StylyDesign",
          "https://facebook.com/StylyDesign",
          "https://instagram.com/StylyDesign",
          "https://linkedin.com/company/styly-design"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://styly.io/#faqpage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does Styly's AI interior design work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Styly uses advanced AI technology to transform empty rooms into fully designed spaces. Simply upload a photo of your room or describe your vision, and our AI will generate realistic interior designs tailored to your preferences without requiring any technical expertise."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use Styly for real estate staging?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Styly is perfect for real estate professionals who need to showcase properties at their best. Our virtual staging technology transforms empty spaces into beautifully furnished interiors that help potential buyers visualize the property's potential, increasing engagement and reducing time-to-sale."
            }
          },
          {
            "@type": "Question",
            "name": "Does Styly work on mobile devices?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely! Styly is fully accessible across all platforms including web, iOS, Android, and even through WhatsApp. You can design spaces on-the-go from any device, making it convenient for busy professionals and homeowners alike."
            }
          },
          {
            "@type": "Question",
            "name": "What kind of businesses can benefit from Styly?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Styly serves both B2B and B2C markets. Real estate agencies, interior designers, architects, property developers, home improvement retailers, and renovation contractors all benefit from our platform. We also offer customized AI models and tailored solutions for businesses looking to integrate generative AI into their workflows."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-white flex flex-col w-full min-h-screen" key={`index-${language}`}>
      <SEO 
        title="STYLY - #1 AI Interior & Exterior Design Platform | Real Estate Visualization Tool" 
        description="Transform empty spaces into stunning, photo-realistic interiors in seconds with STYLY - the leading AI design tool. Upload photos via web, mobile or WhatsApp. No technical skills needed. Trusted by 20,000+ real estate pros, interior designers & homeowners."
        keywords="AI interior design app, virtual staging software, real estate visualization tool, interior design AI, home renovation design, WhatsApp interior design, property marketing tool, AI visualization, interior design without technical skills, photo-realistic interior design"
        structuredData={structuredData}
      />
      <div className="flex w-full flex-col">
        <Navbar />
        <Hero />
        <SupportedBy />
        <VideoSection />
        <HowItWorks />
        <DesignWithAI />
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
