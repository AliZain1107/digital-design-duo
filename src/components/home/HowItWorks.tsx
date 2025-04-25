
import React from "react";
import { Link } from "react-router-dom";

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-white flex w-full flex-col overflow-hidden items-center justify-center py-[103px] max-md:max-w-full max-md:py-[100px]">
      <div className="flex w-[1799px] max-w-full flex-col overflow-hidden items-stretch justify-center">
        <div className="flex w-full items-center justify-between flex-wrap max-md:max-w-full">
          <div className="self-stretch flex min-w-60 flex-col overflow-hidden flex-1 shrink basis-[0%] my-auto pr-20 max-md:max-w-full">
            <div className="w-[939px] max-w-full font-semibold">
              <div className="w-full text-base text-[rgba(250,111,64,1)] pb-px max-md:max-w-full">
                How it works
              </div>
              <h2 className="w-full text-4xl text-black tracking-[-0.72px] leading-none mt-[11px] pb-px max-md:max-w-full">
                3 simple steps to interior design by AI
              </h2>
            </div>
            <div className="min-h-[500px] w-[487px] max-w-full mt-[60px] max-md:mt-10">
              <div className="flex w-full gap-[-40px] flex-wrap max-md:max-w-full">
                <div className="rotate-[3.141592653589793rad] flex w-14 shrink-0 h-[57px]" />
                <div className="min-w-60 w-[415px]">
                  <div className="w-full pt-2.5">
                    <h3 className="w-full text-xl text-[rgba(89,50,134,1)] font-semibold whitespace-nowrap">
                      Upload
                    </h3>
                    <div className="w-full text-base text-black font-normal leading-6 mt-2">
                      Simply upload your image or sketch of the space you <br />
                      want to redesign.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full gap-4 flex-wrap mt-[33px] max-md:max-w-full">
                <div className="flex min-h-[57px] flex-col items-stretch justify-center w-14">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/c8e14abd45d474ae06eead29477ad8375769c27e?placeholderIfAbsent=true"
                    alt="Step 2 icon"
                    className="aspect-[0.98] object-contain w-14 flex-1"
                  />
                </div>
                <div className="min-w-60 flex-1 shrink basis-[0%]">
                  <div className="w-full pt-2.5">
                    <h3 className="w-full text-xl text-[rgba(89,50,134,1)] font-semibold whitespace-nowrap">
                      Personalize
                    </h3>
                    <div className="w-full text-base text-black font-normal leading-6 mt-2">
                      Choose your preferences, from furniture selection to{" "}
                      <br />
                      style, to create your ideal space by ai room design.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full gap-4 flex-wrap mt-[33px] max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/569a3df9385be3a73931f2732fcd72d06002b63b?placeholderIfAbsent=true"
                  alt="Step 3 icon"
                  className="aspect-[1] object-contain w-12 shrink-0 rounded-[28px]"
                />
                <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
                  <div className="w-full pt-2.5 max-md:max-w-full">
                    <h3 className="w-full text-xl text-[rgba(89,50,134,1)] font-semibold whitespace-nowrap max-md:max-w-full">
                      Enjoy
                    </h3>
                    <div className="w-full text-base text-black font-normal leading-6 mt-2 max-md:max-w-full">
                      Sit back and enjoy the end result by ai for interior{" "}
                      <br />
                      design.
                    </div>
                  </div>
                </div>
              </div>
              <Link
                to="/get-started"
                className="relative flex min-h-11 w-[198px] max-w-full flex-col overflow-hidden text-base text-white font-medium tracking-[-0.16px] leading-[1.2] justify-center mt-[33px] px-6 py-3 rounded-lg max-md:px-5 transition-all duration-300 hover:opacity-90 hover:scale-105"
              >
                <div className="bg-[rgba(250,111,64,1)] absolute z-0 flex min-h-11 w-full rounded-lg inset-0" />
                <div className="self-center z-0 w-full">
                  <div className="w-full">Get Started for Free</div>
                </div>
              </Link>
              <div className="w-[286px] max-w-full text-sm text-[rgba(163,162,166,1)] font-extrabold leading-[1.2] mt-[33px]">
                <div className="w-full">
                  No Credit Card Required, No Commitments
                </div>
                <div className="flex min-h-[17px] w-full" />
              </div>
            </div>
          </div>
          <div className="self-stretch min-w-60 min-h-[640px] w-[654px] my-auto max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/9f00f31607c1506a27ab5d6e228d3ee96291ac80?placeholderIfAbsent=true"
              alt="Interior design process"
              className="aspect-[1.02] object-contain w-full flex-1 rounded-[20px] max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
