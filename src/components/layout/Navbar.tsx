import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="bg-white relative flex min-h-[100px] w-full items-center overflow-hidden justify-between px-20 py-[11px] max-md:max-w-full max-md:px-5">
      <div className="self-stretch z-0 flex min-w-60 min-h-[79px] items-center flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
        <Link to="/">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/f99e29783a6ec2e80cc53da0266b73b066b99df2?placeholderIfAbsent=true"
            alt="STYLY Logo"
            className="aspect-[2.28] object-contain w-[132px] self-stretch my-auto"
          />
        </Link>
      </div>
      <nav className="self-stretch z-0 flex min-w-60 min-h-11 items-center gap-4 justify-center my-auto">
        <div className="self-stretch flex min-h-11 flex-col items-stretch text-base text-[rgba(89,50,134,1)] font-medium whitespace-nowrap tracking-[-0.16px] leading-[1.2] justify-center w-[100px] my-auto">
          <Link
            to="/pricing"
            className="relative flex max-w-full w-[100px] flex-col overflow-hidden justify-center flex-1 px-6 py-3 rounded-lg max-md:px-5 transition-all duration-300 hover:bg-purple-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-200"
            aria-label="Go to Pricing"
          >
            <div className="bg-white absolute z-0 flex min-h-11 w-full rounded-lg inset-0" />
            <div className="self-center z-0 w-full">
              <div className="w-full">Pricing</div>
            </div>
            <div className="border absolute z-0 flex min-h-11 w-full rounded-lg border-[rgba(89,50,134,1)] border-solid inset-0" />
          </Link>
        </div>
        <div className="self-stretch flex min-h-11 flex-col items-stretch text-base text-[rgba(89,50,134,1)] font-medium whitespace-nowrap tracking-[-0.16px] leading-[1.2] justify-center w-[82px] my-auto">
          <Link
            to="/blog"
            className="relative flex w-[82px] flex-col overflow-hidden justify-center flex-1 px-6 py-3 rounded-lg max-md:px-5 transition-all duration-300 hover:bg-purple-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-200"
            aria-label="Go to Blog"
          >
            <div className="bg-white absolute z-0 flex min-h-11 w-full rounded-lg inset-0" />
            <div className="self-center z-0 w-full">
              <div className="w-full">Blog</div>
            </div>
            <div className="border absolute z-0 flex min-h-11 w-full rounded-lg border-[rgba(89,50,134,1)] border-solid inset-0" />
          </Link>
        </div>
        <div className="self-stretch flex min-h-11 flex-col items-stretch text-base text-white font-medium tracking-[-0.16px] leading-[1.2] justify-center w-[99px] my-auto">
          <Link
            to="/signin"
            className="relative flex w-[99px] flex-col overflow-hidden justify-center flex-1 px-6 py-3 rounded-lg max-md:px-5"
          >
            <div className="bg-[rgba(250,111,64,1)] absolute z-0 flex min-h-11 w-full rounded-lg inset-0" />
            <div className="self-center z-0 w-full">
              <div className="w-full">Sign In</div>
            </div>
          </Link>
        </div>
        <div className="self-stretch my-auto">
          <div className="bg-white flex items-center gap-[5px] overflow-hidden justify-center pt-1 pb-[5px]">
            <div className="self-stretch text-[15px] text-[rgba(89,50,134,1)] font-medium whitespace-nowrap tracking-[-0.15px] leading-[30px] w-[51px] my-auto">
              <div className="w-full pb-px">English</div>
            </div>
            <div className="self-stretch w-3.5 my-auto">
              <div className="min-h-3.5 w-3.5">
                <div className="min-h-3.5 w-full overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/3caec9a02fb007faef758c49354d34efb3fc56b5?placeholderIfAbsent=true"
                    alt="Language dropdown"
                    className="aspect-[1] object-contain w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="absolute z-0 flex min-h-[100px] w-[2117px] inset-0 max-md:max-w-full" />
    </header>
  );
};

export default Navbar;
