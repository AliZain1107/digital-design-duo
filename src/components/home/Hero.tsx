import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="flex w-full flex-col overflow-hidden items-stretch justify-center max-md:max-w-full">
      <div className="flex w-full flex-col items-stretch justify-center py-[74px] max-md:max-w-full">
        <div
          className="self-center relative flex min-h-[41px] w-[294px] max-w-full flex-col text-base text-white font-bold leading-[1.2] justify-center px-6 py-[11px] rounded-[20px] max-md:px-5"
          style={{
            background:
              "linear-gradient(90deg, rgba(89,50,134,1) 0%, rgba(250,111,64,1) 100%)",
          }}
        >
          <div className="absolute z-0 flex min-h-[39px] w-full rounded-[20px] inset-px" />
          <div className="self-center z-0 w-full">
            <div className="w-full">Welcome to the Future of Design</div>
          </div>
        </div>
        <h1 className="self-center w-[760px] max-w-full text-[94px] text-black font-bold text-center leading-[94px] mt-11 max-md:text-[40px] max-md:leading-[44px] max-md:mt-10">
          <div className="w-full max-md:max-w-full max-md:text-[40px] max-md:leading-[44px]">
            #1 most used
            <br />
            AI design tool for
            <br />
            <span style={{ color: "rgba(89,50,134,1)" }}>modern spaces </span>
          </div>
        </h1>
        <div className="flex w-full flex-col overflow-hidden items-center justify-center mt-11 max-md:max-w-full max-md:mt-10">
          <div className="flex w-full items-center overflow-hidden text-base text-[rgba(44,30,73,1)] font-normal text-center tracking-[0.32px] justify-center max-md:max-w-full">
            <div className="self-stretch min-w-60 w-[547px] my-auto">
              <div className="w-full leading-[1.3] max-md:max-w-full">
                Redesign empty rooms into styled, market-ready interior —
              </div>
              <div className="w-full leading-[21px] pt-px max-md:max-w-full">
                <div className="w-full max-md:max-w-full">
                  for real estate, renovation, and retail.{" "}
                  <span style={{ fontWeight: 700 }}>
                    No tools, no downloads. Just results
                  </span>
                  .
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center overflow-hidden justify-center mt-1 max-md:max-w-full">
            <div className="self-stretch w-[162px] overflow-hidden my-auto">
              <div className="flex flex-col items-stretch justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/d0e1b2c74aebe748ee1fe2028d0484e45faf828f?placeholderIfAbsent=true"
                  alt="5-star rating"
                  className="aspect-[2] object-contain w-full flex-1"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col overflow-hidden items-center text-base justify-center mt-11 max-md:max-w-full max-md:mt-10">
          <Link
            to="/upload"
            className="relative flex min-h-11 w-56 max-w-full flex-col overflow-hidden text-white font-medium tracking-[-0.16px] leading-[1.2] justify-center px-6 py-3 rounded-lg max-md:px-5"
          >
            <div className="bg-[rgba(250,111,64,1)] absolute z-0 flex min-h-11 w-full rounded-lg inset-0" />
            <div className="self-center z-0 w-full">
              <div className="w-full">Upload a Photo to Start</div>
            </div>
          </Link>
          <div className="flex w-[492px] max-w-full flex-col overflow-hidden items-stretch text-[rgba(163,162,166,1)] font-extrabold leading-none justify-center mt-6">
            <div className="w-full max-md:max-w-full">
              Supporting 20,000+ real estate pros & designers & Homeowners
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
