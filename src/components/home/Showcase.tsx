
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const showcaseImages = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/9a7ab7a2366f484ec9d66769ac382a7635a3a895",
    alt: "AI interior design showcase 1"
  },
  {
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    alt: "AI interior design showcase 2"
  },
  {
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    alt: "AI interior design showcase 3"
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    alt: "AI interior design showcase 4"
  }
];

const Showcase: React.FC = () => {
  return (
    <section className="bg-white relative flex w-full flex-col overflow-hidden px-20 py-[90px] max-md:max-w-full max-md:px-5">
      <div className="self-center z-0 flex min-h-[658px] w-[1175px] max-w-full flex-col items-stretch justify-center">
        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          className="w-full"
        >
          <CarouselContent>
            {showcaseImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="w-full overflow-hidden rounded-[33px] max-md:max-w-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="aspect-[1.79] object-cover w-full max-md:max-w-full"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
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
