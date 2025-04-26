import React from "react";

// Define the logos array
const partnerLogos = [
  {
    name: "Startup Europe",
    src: "/companies logo/1.png",
  },
  {
    name: "NVIDIA",
    src: "/companies logo/2.png",
  },
  {
    name: "Inception Program",
    src: "/companies logo/3.png",
  },
  {
    name: "AWS Startups",
    src: "/companies logo/4.png",
  },
  {
    name: "Stripe",
    src: "/companies logo/5.png",
  },
  {
    name: "Product Hunt",
    src: "/companies logo/6.png",
  },
  {
    name: "Vestbee",
    src: "/companies logo/7.png",
  },
  {
    name: "La French Tech",
    src: "/companies logo/8.png",
  },
];

const SupportedBy: React.FC = () => {
  return (
    <section className="bg-white py-10 md:py-12 overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 md:px-10">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Supported
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="inline-flex animate-marquee whitespace-nowrap">
            {partnerLogos.map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center mx-2"
                style={{ minWidth: '160px', height: '70px' }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-full max-w-[140px] object-contain"
                />
              </div>
            ))}
            
            {/* Duplicate logos to ensure continuous scrolling */}
            {partnerLogos.map((logo, index) => (
              <div 
                key={`duplicate-${index}`} 
                className="flex items-center justify-center mx-2"
                style={{ minWidth: '160px', height: '70px' }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-full max-w-[140px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedBy;
