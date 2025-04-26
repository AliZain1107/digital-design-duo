import React from "react";
import { Link } from "react-router-dom";

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-white w-full flex flex-col items-center justify-center py-[80px] px-2 sm:px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        {/* Left: Text */}
        <div className="flex-1 min-w-[300px] md:max-w-[520px] md:pl-8 lg:pl-16 mb-10 md:mb-0">
          <div className="font-semibold">
            <div className="text-base text-[rgba(250,111,64,1)] pb-1">How it works</div>
            <h2 className="text-3xl md:text-4xl text-black tracking-[-0.72px] leading-none mt-3 pb-1">
              3 simple steps to interior design by AI
            </h2>
          </div>
          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl text-[rgba(89,50,134,1)] font-semibold">Upload</h3>
              <p className="text-base text-black font-normal leading-6 mt-2">
                Simply upload your image or sketch of the space you want to redesign.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-[rgba(89,50,134,1)] font-semibold">Personalize</h3>
              <p className="text-base text-black font-normal leading-6 mt-2">
                Choose your preferences, from furniture selection to style, to create your ideal space by ai room design.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-[rgba(89,50,134,1)] font-semibold">Enjoy</h3>
              <p className="text-base text-black font-normal leading-6 mt-2">
                Sit back and enjoy the end result by ai for interior design.
              </p>
            </div>
          </div>
          <Link
            to="/get-started"
            className="relative flex min-h-11 w-[198px] max-w-full flex-col overflow-hidden text-base text-white font-medium tracking-[-0.16px] leading-[1.2] justify-center mt-10 px-6 py-3 rounded-lg transition-all duration-300 hover:opacity-90 hover:scale-105 bg-[rgba(250,111,64,1)]"
          >
            Get Started for Free
          </Link>
          <div className="w-[286px] max-w-full text-sm text-[rgba(163,162,166,1)] font-extrabold leading-[1.2] mt-6">
            No Credit Card Required, No Commitments
          </div>
        </div>
        {/* Right: Image/Slider */}
        <div className="flex-1 min-w-[320px] md:max-w-[600px] w-full md:pr-8 lg:pr-16 flex items-center justify-center">
          {/* Replace the img below with your slider if needed */}
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/9f00f31607c1506a27ab5d6e228d3ee96291ac80?placeholderIfAbsent=true"
            alt="Interior design process"
            className="aspect-[1.02] object-contain w-full rounded-[20px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
