
import React, { useEffect } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/9a7ab7a2366f484ec9d66769ac382a7635a3a895",
    alt: "AI interior design showcase 1"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/da4e7118863c01bd19fbe29fd0ef3ad3fe972922",
    alt: "AI interior design showcase 2"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/25b284bc68e647b6ba3bd50564a1cdc85023fb85",
    alt: "AI interior design showcase 3"
  }
];

const Showcase: React.FC = () => {
  const [api, setApi] = React.useState<any>();

  useEffect(() => {
    if (!api) return;

    // Automatically move to next slide every 3 seconds
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="bg-white relative flex w-full flex-col overflow-hidden px-20 py-[90px] max-md:max-w-full max-md:px-5">
      <div className="self-center z-0 flex min-h-[658px] w-[1175px] max-w-full flex-col items-stretch justify-center">
        <Carousel opts={{ loop: true }} setApi={setApi} className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-0">
                <div className="w-full overflow-hidden rounded-[33px] max-md:max-w-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="aspect-[1.79] object-contain w-full max-md:max-w-full"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden" />
          <CarouselNext className="hidden" />
        </Carousel>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/52d8fab7f6187c26b0462c62ebb49ec9e57436d3?placeholderIfAbsent=true"
        alt="Decorative element"
        className="aspect-[1.01] object-contain w-[804px] absolute z-0 max-w-full right-[-599px] h-[804px] rounded-[0px_0px_0px_200px] top-0"
      />
    </section>
  );
};

export default Showcase;
