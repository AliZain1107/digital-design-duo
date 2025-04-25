import React from "react";
import ShowcaseScroll from "./ShowcaseScroll";

const ArchitectureRevolution: React.FC = () => {
  return (
    <section className="bg-white flex w-full flex-col items-center mt-24 px-5 max-md:max-w-full">
      <div className="flex w-[2035px] max-w-full flex-col items-center justify-center pt-[99px] pb-[100px] px-14 rounded-2xl max-md:px-5">
        <h2 className="w-[1145px] max-w-full text-[32px] font-extrabold tracking-[-0.5px] leading-[1.4] pb-px max-md:max-w-full">
          Architecture Revolution: Home design, Room design and Interior
          design by AI.
        </h2>
        <ShowcaseScroll />
        <div className="flex w-full flex-col overflow-hidden items-center justify-center mt-[92px] max-md:mt-10">
          <div className="flex min-h-[300px] w-full flex-col items-stretch justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/25b284bc68e647b6ba3bd50564a1cdc85023fb85?placeholderIfAbsent=true"
              alt="Architecture showcase 1"
              className="aspect-[6.41] object-contain w-full max-w-[1923px] flex-1 max-md:max-w-full"
            />
          </div>
          <div className="flex min-h-[300px] w-full flex-col items-stretch justify-center mt-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/b9cbacfe38027ef4c91301c05c7dfd12d6bd4651?placeholderIfAbsent=true"
              alt="Architecture showcase 2"
              className="aspect-[6.41] object-contain w-full max-w-[1923px] flex-1 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureRevolution;
