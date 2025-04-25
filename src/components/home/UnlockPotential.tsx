import React from "react";

const UnlockPotential: React.FC = () => {
  return (
    <section className="bg-white flex w-full flex-col overflow-hidden items-center justify-center pl-[71px] pr-[70px] pt-[87px] pb-5 max-md:max-w-full max-md:px-5">
      <div className="flex max-w-full w-[1976px] flex-col overflow-hidden items-center justify-center">
        <div className="flex w-full max-w-[1976px] flex-col items-center justify-center max-md:max-w-full">
          <div className="flex w-[756px] max-w-full items-center gap-4 justify-center flex-wrap">
            <div className="self-stretch flex min-h-[50px] flex-col items-stretch justify-center w-[51px] my-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/008c1c95c8ab1cf5d229ea3557939ff3bf375d00?placeholderIfAbsent=true"
                alt="Decorative icon"
                className="aspect-[1.02] object-contain w-[51px] flex-1"
              />
            </div>
            <div className="self-stretch flex min-w-60 items-center text-[50px] font-extrabold text-center leading-none justify-center flex-1 shrink basis-[0%] my-auto max-md:max-w-full max-md:text-[40px]">
              <div className="self-stretch min-w-60 w-[622px] my-auto max-md:text-[40px]">
                <h2 className="w-full pb-px max-md:max-w-full max-md:text-[40px]">
                  UNLOCK THE POTENTIAL
                </h2>
              </div>
            </div>
            <div className="self-stretch flex min-h-[50px] flex-col items-stretch justify-center w-[51px] my-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/1850eceaf61cf841db5b9b25ea5fc529a3c4f54c?placeholderIfAbsent=true"
                alt="Decorative icon"
                className="aspect-[1.02] object-contain w-[51px] flex-1"
              />
            </div>
          </div>
          <div className="w-[1383px] max-w-full text-[21px] text-[rgba(44,30,73,1)] font-light text-center tracking-[0.12px] leading-[1.2] mt-4">
            <div className="w-full max-md:max-w-full">
              Our AI was inspired by Le Corbusier, Zaha Hadid, Frank Gehry,
              Frank Lloyd Wright, and Gaudi. Be inspired as our AI brings your
              design ideas to life.
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-h-[473px] w-[1434px] max-w-full flex-col items-stretch justify-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/da4e7118863c01bd19fbe29fd0ef3ad3fe972922?placeholderIfAbsent=true"
          alt="Design inspiration showcase"
          className="aspect-[3.03] object-contain w-full max-w-[1434px] flex-1 max-md:max-w-full"
        />
      </div>
    </section>
  );
};

export default UnlockPotential;
