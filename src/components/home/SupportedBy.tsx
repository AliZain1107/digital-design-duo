import React from "react";
import { useLanguage } from "@/lib/i18n";

const SupportedBy: React.FC = () => {
  const { t, language } = useLanguage();
  
  // Debug output to verify language and translations
  console.log("Current language in SupportedBy:", language);
  console.log("SupportedBy translation:", t.supportedBy);
  
  const partnerLogos = [
    {
      name: "Startup Europe",
      description: "Official partner of Startup Europe initiative supporting innovative tech startups",
      src: "/companies logo/1.png",
    },
    {
      name: "NVIDIA",
      description: "Technology partnership with NVIDIA for AI-powered interior design rendering",
      src: "/companies logo/2.png",
    },
    {
      name: "Inception Program",
      description: "Member of the exclusive NVIDIA Inception Program for AI startups",
      src: "/companies logo/3.png",
    },
    {
      name: "AWS Startups",
      description: "Amazon Web Services startup partner for scalable cloud infrastructure",
      src: "/companies logo/4.png",
    },
    {
      name: "Stripe",
      description: "Payment processing technology partner for secure transactions",
      src: "/companies logo/5.png",
    },
    {
      name: "Product Hunt",
      description: "Featured on Product Hunt as innovative AI design technology",
      src: "/companies logo/6.png",
    },
    {
      name: "Vestbee",
      description: "Partner of Vestbee startup ecosystem for business growth",
      src: "/companies logo/7.png",
    },
    {
      name: "La French Tech",
      description: "Member of La French Tech innovation network supporting technology startups",
      src: "/companies logo/8.png",
    },
  ];

  return (
    <section
      className="py-2 sm:py-3 md:py-4 lg:py-6 px-4 sm:px-6 md:px-8 lg:px-12 max-w-full overflow-hidden"
      key={`supported-by-${language}`}
    >
      <div className="container mx-auto text-center mb-4 md:mb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-1">
          <span className="bg-gradient-to-r from-[#593286] via-purple-400 to-[#FA6F40] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
            {t.supportedBy}
          </span>
        </h2>
      </div>

      
      {/* Container with gradients for fade effect */}
      <div className="relative max-w-full mx-auto overflow-hidden py-2 sm:py-3 md:py-4 lg:py-6">
        {/* Left fade gradient */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        
        {/* Main logos container */}
        <div className="flex overflow-hidden">
          <div className="flex space-x-24 animate-marquee hover:pause-animation">
            {partnerLogos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="w-48 sm:w-56 md:w-64 lg:w-72 flex-shrink-0 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.description}
                  className="h-24 sm:h-32 md:h-40 lg:h-48"
                />
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless looping */}
          <div className="flex space-x-24 animate-marquee hover:pause-animation">
            {partnerLogos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="w-48 sm:w-56 md:w-64 lg:w-72 flex-shrink-0 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.description}
                  className="h-24 sm:h-32 md:h-40 lg:h-48"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Right fade gradient */}
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default SupportedBy;