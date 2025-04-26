import React from "react";
import ShowcaseScroll from "./ShowcaseScroll";

const ArchitectureRevolution: React.FC = () => {
  return (
    <section className="bg-white flex w-full flex-col items-center px-5 max-md:max-w-full">
      <div className="flex w-[2035px] max-w-full flex-col items-center justify-center pt-[99px] pb-[100px] px-14 rounded-2xl max-md:px-5">
        <h2 className="w-[1145px] max-w-full text-[32px] font-extrabold tracking-[-0.5px] leading-[1.4] pb-px max-md:max-w-full text-center">
          Architecture Revolution: Home design, Room design and Interior design by AI.
        </h2>
        <div className="my-8 w-full">
          <ShowcaseScroll />
        </div>
      </div>
    </section>
  );
};

export default ArchitectureRevolution;
