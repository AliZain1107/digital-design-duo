import React from "react";

const SupportedBy: React.FC = () => {
  return (
    <section className="self-center z-10 flex mt-[-21px] w-full max-w-[2032px] flex-col overflow-hidden items-center justify-center max-md:max-w-full">
      <div className="flex h-[42px] w-[186px] max-w-full items-center overflow-hidden text-[29px] font-bold leading-[1.4] justify-center pb-px">
        <div className="self-stretch w-[186px] my-auto">
          <h2 className="w-full pb-px">Supported By</h2>
        </div>
      </div>
      <div className="flex min-h-[90px] w-full flex-col items-stretch justify-center mt-2.5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/042accf674f26cbc41485969aceb5554f214b0af?placeholderIfAbsent=true"
          alt="Partner logos"
          className="aspect-[22.22] object-contain w-full max-w-[2012px] flex-1 max-md:max-w-full"
        />
      </div>
    </section>
  );
};

export default SupportedBy;
