import React from "react";

const SupportedBy: React.FC = () => {
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
    <section className="bg-white py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 w-full" aria-label="Our trusted partners and supporters">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          Supported by
        </h2>

        <div className="relative w-full overflow-hidden">
          {/* Left fade gradient - responsive width */}
          <div className="absolute left-0 top-0 h-full w-[60px] xs:w-[70px] sm:w-[80px] md:w-[100px] lg:w-[120px] z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          
          <div className="w-full overflow-hidden">
            <div 
              className="flex whitespace-nowrap w-max hover:pause-animation"
              style={{ animation: "marquee 25s linear infinite" }}
            >
              {/* First set of logos */}
              {partnerLogos.map((logo, index) => (
                <div
                  key={`logo-1-${index}`} 
                  className="inline-flex flex-shrink-0 px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8"
                >
                  <div className="w-[100px] xs:w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-[80px] xs:h-[90px] sm:h-[100px] md:h-[120px] lg:h-[140px] flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={`${logo.name} - ${logo.description}`}
                      title={`${logo.name} - Styly.io partner for AI-powered interior design`}
                      className="max-h-[60px] max-w-[90px] xs:max-h-[70px] xs:max-w-[100px] sm:max-h-[80px] sm:max-w-[120px] md:max-h-[100px] md:max-w-[140px] lg:max-h-[120px] lg:max-w-[160px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
              
              {/* Second set of logos for seamless looping */}
              {partnerLogos.map((logo, index) => (
                <div
                  key={`logo-2-${index}`} 
                  className="inline-flex flex-shrink-0 px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8"
                >
                  <div className="w-[100px] xs:w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-[80px] xs:h-[90px] sm:h-[100px] md:h-[120px] lg:h-[140px] flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={`${logo.name} - ${logo.description}`}
                      title={`${logo.name} - Styly.io partner for AI-powered interior design`}
                      className="max-h-[60px] max-w-[90px] xs:max-h-[70px] xs:max-w-[100px] sm:max-h-[80px] sm:max-w-[120px] md:max-h-[100px] md:max-w-[140px] lg:max-h-[120px] lg:max-w-[160px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right fade gradient - responsive width */}
          <div className="absolute right-0 top-0 h-full w-[60px] xs:w-[70px] sm:w-[80px] md:w-[100px] lg:w-[120px] z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default SupportedBy;
