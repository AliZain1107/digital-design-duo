import React from "react";
import { useLanguage } from "@/lib/i18n";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import type { EmblaCarouselType } from 'embla-carousel';

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

  // Embla carousel options for infinite loop and auto-scroll
  const [emblaApi, setEmblaApi] = React.useState<EmblaCarouselType | null>(null);
  React.useEffect(() => {
    if (!emblaApi) return;
    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    return () => clearInterval(autoScroll);
  }, [emblaApi]);

  return (
    <section
      className="-mt-16 pb-2 sm:pb-3 md:pb-4 lg:pb-6 px-4 sm:px-6 md:px-8 lg:px-12 max-w-full overflow-hidden"
      key={`supported-by-${language}`}
    >
      <div className="container mx-auto text-center mb-0">
        <h2 className="text-4xl font-semibold mb-1 font-baloo text-gray-900 relative">
          <span className="bg-gradient-to-r from-[#593286] via-purple-400 to-[#FA6F40] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
            {t.supportedBy}
          </span>
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto overflow-visible py-6 sm:py-8 md:py-10 lg:py-14 min-h-[160px] sm:min-h-[200px] md:min-h-[260px] lg:min-h-[320px] flex items-center -mt-8">
        {/* Left fade gradient */}
        <div className="absolute top-0 left-0 w-32 sm:w-48 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        {/* Carousel */}
        <Carousel
          opts={{ loop: true, align: "start" }}
          setApi={setEmblaApi}
          className="w-full"
        >
          <CarouselContent className="gap-12 md:gap-20 lg:gap-32 px-4">
            {partnerLogos.map((logo, index) => (
              <CarouselItem
                key={logo.name}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 flex items-center justify-center"
              >
                <div className="w-48 sm:w-60 md:w-72 lg:w-80 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={logo.src}
                    alt={logo.description}
                    className="h-24 sm:h-32 md:h-40 lg:h-48 object-contain"
                    draggable={false}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
        {/* Right fade gradient */}
        <div className="absolute top-0 right-0 w-32 sm:w-48 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default SupportedBy;