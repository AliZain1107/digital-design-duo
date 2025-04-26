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
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Supported
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-14">
          {partnerLogos.map((logo, index) => (
            <div 
              key={index} 
              className="w-[100px] h-[40px] sm:w-[120px] sm:h-[50px] md:w-[130px] md:h-[60px] lg:w-[140px] lg:h-[60px] flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportedBy;
