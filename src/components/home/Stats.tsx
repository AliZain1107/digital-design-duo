import React from "react";

const Stats: React.FC = () => {
  return (
    <section className="bg-[rgba(242,242,242,1)] flex w-full flex-col overflow-hidden items-center justify-center py-24 max-md:max-w-full">
      <div className="flex w-[1799px] max-w-full flex-col overflow-hidden items-center px-20 max-md:px-5">
        <div className="w-[1280px] max-w-full">
          <div className="text-4xl text-[rgba(89,50,134,1)] font-extralight text-center tracking-[-0.72px] leading-none px-8 max-md:max-w-full max-md:px-5">
            <div className="flex w-full flex-col items-center max-md:max-w-full">
              <div className="w-[768px] max-w-full">
                <div className="flex w-full flex-col items-center pl-8 pr-[23px] max-md:max-w-full max-md:px-5">
                  <div className="flex max-w-full w-[713px] flex-col items-stretch pb-3.5 px-[49px] max-md:px-5">
                    <div className="max-md:max-w-full">
                      STYLY: Not chance, but the culmination of{" "}
                    </div>
                    <div className="self-center mt-[15px] max-md:max-w-full">
                      rigorous quantitative research.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-[58px] px-8 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="bg-[rgba(90,50,135,1)] flex w-full gap-8 flex-wrap pt-[63px] pb-16 px-16 rounded-2xl max-md:max-w-full max-md:px-5">
              <div className="relative min-w-60 flex-1 shrink basis-[0%]">
                <div className="z-0 w-full">
                  <div className="w-full text-6xl text-white font-semibold whitespace-nowrap text-center tracking-[-1.2px] leading-[1.2] pb-px max-md:text-[40px]">
                    8000+
                  </div>
                  <div className="w-full mt-[11px]">
                    <div className="w-full text-lg text-white font-medium text-center leading-loose pb-px">
                      hours of development
                    </div>
                    <div className="w-full pt-[18px]">
                      <div className="flex min-h-7 w-full" />
                    </div>
                  </div>
                </div>
                <div className="absolute z-0 flex min-h-[158px] max-w-full w-[248px] top-px bottom-0 inset-x-0" />
              </div>
              <div className="relative min-w-60 flex-1 shrink basis-[0%]">
                <div className="z-0 w-full">
                  <div className="w-full text-6xl text-white font-semibold whitespace-nowrap text-center tracking-[-1.2px] leading-[1.2] pb-px max-md:text-[40px]">
                    25+
                  </div>
                  <div className="w-full mt-[11px]">
                    <div className="w-full text-lg text-white font-medium text-center leading-loose pb-px">
                      Top Designers approved
                    </div>
                    <div className="w-full pt-[18px]">
                      <div className="flex min-h-7 w-full" />
                    </div>
                  </div>
                </div>
                <div className="absolute z-0 flex min-h-[158px] max-w-full w-[248px] top-px bottom-0 inset-x-0" />
              </div>
              <div className="relative min-w-60 flex-1 shrink basis-[0%]">
                <div className="z-0 w-full">
                  <div className="w-full text-6xl text-white font-semibold whitespace-nowrap text-center tracking-[-1.2px] leading-[1.2] pb-px max-md:text-[40px]">
                    250+
                  </div>
                  <div className="w-full mt-[11px]">
                    <div className="w-full text-lg text-white font-medium text-center leading-loose pb-px">
                      Companies trusted
                    </div>
                    <div className="w-full pt-[18px]">
                      <div className="flex min-h-7 w-full" />
                    </div>
                  </div>
                </div>
                <div className="absolute z-0 flex min-h-[158px] max-w-full w-[248px] top-px bottom-0 inset-x-0" />
              </div>
              <div className="min-w-60 text-white text-center flex-1 shrink basis-[0%]">
                <div className="w-full">
                  <div className="w-full text-6xl font-semibold whitespace-nowrap tracking-[-1.2px] leading-[1.2] pb-px max-md:text-[40px]">
                    32+
                  </div>
                  <div className="w-full text-lg font-medium leading-loose mt-[11px] pb-px">
                    Research articles
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
