import React from "react";
import BeforeAfterSlider from "../ui/BeforeAfterSlider";

const Showcase: React.FC = () => {
  return (
    <section className="bg-white relative flex w-full flex-col overflow-hidden px-4 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="self-center z-0 flex w-full max-w-4xl flex-col items-stretch justify-center">
        <div className="w-full overflow-hidden rounded-2xl">
          <BeforeAfterSlider
            beforeImage="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/9a7ab7a2366f484ec9d66769ac382a7635a3a895?placeholderIfAbsent=true"
            afterImage="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/9a7ab7a2366f484ec9d66769ac382a7635a3a895?placeholderIfAbsent=true"
            altBefore="Before"
            altAfter="After"
          />
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/52d8fab7f6187c26b0462c62ebb49ec9e57436d3?placeholderIfAbsent=true"
        alt="Decorative element"
        className="aspect-[1.01] object-contain w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] absolute z-0 max-w-full right-[-300px] sm:right-[-400px] md:right-[-500px] lg:right-[-599px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-[0px_0px_0px_100px] sm:rounded-[0px_0px_0px_150px] md:rounded-[0px_0px_0px_200px] top-0"
      />
    </section>
  );
};

export default Showcase;
