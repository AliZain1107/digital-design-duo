import React, { useEffect } from "react";
import ShowcaseScroll from "./ShowcaseScroll";
import { useLanguage } from "@/lib/i18n";

const ArchitectureRevolution: React.FC = () => {
  const { t, language } = useLanguage();
  
  // Add debug logging
  console.log("ArchitectureRevolution rendering with language:", language);
  console.log("ArchitectureRevolution translations:", {
    architectureRevolution: t.architectureRevolution,
    homeDesignByAI: t.homeDesignByAI
  });
  
  // Add effect to log when language changes
  useEffect(() => {
    console.log("ArchitectureRevolution language changed to:", language);
  }, [language]);
  
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 w-full py-28 overflow-hidden">
      <div className="w-full relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full -z-10 blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100 rounded-full -z-10 blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="text-center mb-16 border-y-2 border-[#34495e] py-6 px-4 sm:px-8 md:px-12 lg:px-20 max-w-5xl mx-auto">
            <div className="text-[#593286] text-4xl mb-3">✧</div>
            <h2 className="relative">
              <span className="inline-block font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1a2a36] via-[#2c3e50] to-[#1a2a36] 
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-widest leading-none uppercase drop-shadow-md">
                {t.architectureRevolution}
              </span>
              <span className="block mt-6 text-xl sm:text-2xl md:text-3xl text-gray-700 font-light max-w-4xl mx-auto">
                {t.homeDesignByAI}
              </span>
            </h2>
            <div className="text-[#593286] text-4xl mt-3">✧</div>
          </div>
        </div>
        
        <div className="w-full transform hover:scale-[1.01] transition-transform duration-1000">
          <ShowcaseScroll />
        </div>
      </div>
    </section>
  );
};

export default ArchitectureRevolution;
