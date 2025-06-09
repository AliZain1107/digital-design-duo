import React from "react";
import { useLanguage } from "@/lib/i18n";

const images = [
  "https://via.placeholder.com/400x300?text=Case+1",
  "https://via.placeholder.com/400x300?text=Case+2",
  "https://via.placeholder.com/400x300?text=Case+3",
];

const CaseStudyImages: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="w-full flex flex-col items-center py-8 sm:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl px-4">
        {images.map((src, idx) => (
          <div key={idx} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white flex items-center justify-center aspect-[4/3]">
            <img
              src={src}
              alt={language === "fr"
                ? `Étude de cas ${idx + 1} - Design chambre IA et générateur design intérieur IA avec home staging virtuel`
                : `Case Study ${idx + 1} - AI room design and interior design AI generator with virtual staging`
              }
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudyImages; 