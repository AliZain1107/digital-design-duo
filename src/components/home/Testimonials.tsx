import React, { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  username: string;
  image: string;
  text: string;
  background: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Hans Müller",
    username: "@zuzu254",
    image:
      "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/3320e5287753b3e9cc27ece2343f115e345cecc9?placeholderIfAbsent=true",
    text: "The architecture for interior AI is breathtaking! 🏛️ I'm fascinated by the fusion of form and function in every room, enhanced by your cutting-edge AI. 👏 Kudos to your exceptional team!",
    background: "rgba(234,236,240,1)",
  },
  {
    id: 2,
    name: "Jean-Pierre Dubois",
    username: "@dubois00",
    image:
      "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/1b816245b46d2e42ba26072e3ec57ea1e38b86da?placeholderIfAbsent=true",
    text: "Your architecture is magnificent! I'm impressed by the seamless blend of aesthetics and functionality in every corner. Bravo on your exceptional work!",
    background: "rgba(252,252,253,1)",
  },
  {
    id: 3,
    name: "Olivia Thompson Ray",
    username: "@RayrayT",
    image:
      "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/3cf4f97819390ce921b8d50ba2fd191ff273d9bf?placeholderIfAbsent=true",
    text: "I'm in awe of the architectural genius evident in every detail of my new design interior ideas, all meticulously crafted with the help of interior AI. The harmonious mix of traditional and modern styles is truly inspiring.🏠",
    background: "rgba(234,236,240,1)",
  },
  {
    id: 4,
    name: "Hans Müller",
    username: "@zuzu254",
    image:
      "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/3320e5287753b3e9cc27ece2343f115e345cecc9?placeholderIfAbsent=true",
    text: "The architecture for exterior AI is breathtaking! 🏛️ I'm fascinated by the fusion of form and function in every room, enhanced by your cutting-edge AI. 👏 Kudos to your exceptional team!",
    background: "white",
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <div
      className="self-stretch flex min-w-60 min-h-[300px] flex-col overflow-hidden justify-between w-[450px] my-auto p-6 rounded-[10px] max-md:max-w-full max-md:px-5"
      style={{ backgroundColor: testimonial.background }}
    >
      <div className="flex max-w-full w-[402px] items-center gap-[15px] overflow-hidden">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="aspect-[1] object-contain w-[50px] self-stretch shrink-0 my-auto rounded-[25px]"
        />
        <div className="self-stretch flex min-w-60 flex-col overflow-hidden items-stretch justify-center flex-1 shrink basis-[0%] my-auto">
          <div className="w-full text-xl text-[rgba(0,17,34,1)] font-semibold tracking-[-0.5px] leading-[1.4]">
            <div className="w-full">{testimonial.name}</div>
          </div>
          <div className="w-full text-sm text-[rgba(102,102,102,1)] font-medium whitespace-nowrap">
            <div className="w-full pb-px">{testimonial.username}</div>
          </div>
        </div>
      </div>
      <div className="max-w-full w-[402px] text-base text-[rgba(102,102,102,1)] font-medium leading-[26px] mt-[99px] max-md:mt-10">
        <div className="w-full">{testimonial.text}</div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  // Display only the active testimonial and the next one (if available)
  const visibleTestimonials = testimonials.slice(activeIndex, activeIndex + 2);

  return (
    <section className="bg-white flex w-full flex-col overflow-hidden items-center justify-center px-10 py-[100px] max-md:max-w-full max-md:px-5">
      <div className="flex w-[1833px] max-w-full flex-col overflow-hidden items-center justify-center">
        <div className="flex w-full items-center overflow-hidden pt-[11px] pb-3 px-6 rounded-[10px] max-md:px-5">
          <div className="self-stretch min-w-60 w-[617px] my-auto">
            <h2 className="w-[462px] max-w-full text-4xl text-[rgba(89,50,134,1)] font-semibold tracking-[-0.72px] leading-none">
              <div className="w-full pb-px max-md:max-w-full">
                Don't just take our word for it
              </div>
            </h2>
            <div className="w-full text-xl text-black font-normal mt-2">
              <div className="w-full max-md:max-w-full">
                Hear from some of our amazing customers who used our product
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(242,244,247,1)] relative flex min-h-[504px] w-full max-w-[1833px] flex-col overflow-hidden mt-2.5 pl-10 pt-10 pb-[7px] rounded-[18px] max-md:max-w-full max-md:pl-5">
          <div className="z-0 flex min-h-[315px] items-center gap-3.5 overflow-hidden flex-wrap max-md:max-w-full max-md:pr-5">
            {visibleTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          <div className="absolute z-0 flex w-[593px] max-w-full flex-col h-[339px] right-0 top-0">
            <div className="flex shrink-0 h-[339px] max-md:max-w-full" />
          </div>
          <div className="self-stretch z-0 flex w-full items-center mt-[58px] py-6 max-md:max-w-full max-md:mt-10">
            <div className="self-stretch flex items-center gap-2.5 overflow-hidden justify-center my-auto">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`aspect-[1] w-9 self-stretch shrink-0 my-auto rounded-[40px] ${activeIndex === index ? "opacity-100" : "opacity-50"}`}
                >
                  <img
                    src={
                      index === 0
                        ? "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/3f0ffac91385d037154146aedc4985863015cd56?placeholderIfAbsent=true"
                        : "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/9bba94ecdfe0ff430b30af2bd501e87b518fcedc?placeholderIfAbsent=true"
                    }
                    alt={`Testimonial navigation ${index + 1}`}
                    className="aspect-[1] object-contain w-full"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
