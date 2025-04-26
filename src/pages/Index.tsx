import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import SupportedBy from "@/components/home/SupportedBy";
import HowItWorks from "@/components/home/HowItWorks";
import UnlockPotential from "@/components/home/UnlockPotential";
import ArchitectureRevolution from "@/components/home/ArchitectureRevolution";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import BlogSection from "@/components/home/BlogSection";
import FAQ from "@/components/home/FAQ";
import SEO from "@/components/layout/SEO";

const Index: React.FC = () => {
  return (
    <div className="bg-white flex min-h-[992px] flex-col items-center">
      <SEO />
      <div className="flex w-full flex-col items-stretch max-md:max-w-full">
        <Navbar />
        <Hero />
        <SupportedBy />
        <HowItWorks />
        <UnlockPotential />
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
