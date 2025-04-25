import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(241,244,247,1)] flex w-full flex-col overflow-hidden items-center pt-16 pb-12 px-[116px] max-md:max-w-full max-md:px-5">
      <div className="w-full max-w-[1884px] max-md:max-w-full">
        <div className="flex w-full text-base max-md:max-w-full">
          <div className="flex min-w-60 w-full gap-[40px_100px] justify-between flex-wrap flex-1 shrink basis-[0%] max-md:max-w-full">
            <div className="flex min-w-60 flex-col text-[rgba(89,50,134,1)] font-normal w-80">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/c0c4240138138be279efc42010c10acdb8bedd5d?placeholderIfAbsent=true"
                alt="STYLY Logo"
                className="aspect-[2.67] object-contain w-20"
              />
              <div className="self-stretch flex w-full items-center leading-6 justify-center mt-[15px]">
                <div className="self-stretch min-w-60 w-full flex-1 shrink basis-[0%] my-auto">
                  <div className="w-full pb-px">
                    The architecture revolution: redefining <br />
                    interior design with AI.
                  </div>
                </div>
              </div>
              <a
                href="mailto:Contact@styly.io"
                className="flex w-[205px] max-w-full items-center justify-center mt-[15px]"
              >
                <div className="self-stretch w-[205px] my-auto">
                  <div className="w-full pb-px">
                    Contact us: Contact@styly.io
                  </div>
                </div>
              </a>
            </div>
            <div className="flex items-center font-medium tracking-[-0.16px] leading-[1.2] justify-center">
              <div className="self-stretch flex items-center my-auto">
                <div className="self-stretch flex items-center gap-3 my-auto">
                  <Link
                    to="/login"
                    className="self-stretch relative flex min-h-11 flex-col overflow-hidden text-[rgba(89,50,134,1)] justify-center w-[94px] my-auto px-6 py-3 rounded-lg max-md:px-5"
                  >
                    <div className="bg-white absolute z-0 flex min-h-11 w-[94px] rounded-lg inset-0" />
                    <div className="self-center z-0 w-[46px]">
                      <div className="w-full">Log In</div>
                    </div>
                    <div className="border absolute z-0 flex min-h-11 w-[94px] rounded-lg border-[rgba(89,50,134,1)] border-solid inset-0" />
                  </Link>
                  <Link
                    to="/signup"
                    className="self-stretch relative flex min-h-11 flex-col overflow-hidden text-white justify-center w-[107px] my-auto px-6 py-3 rounded-lg max-md:px-5"
                  >
                    <div className="bg-[rgba(250,111,64,1)] absolute z-0 flex min-h-11 max-w-full w-[107px] rounded-lg inset-0" />
                    <div className="self-center z-0 w-[59px]">
                      <div className="w-full">Sign Up</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex w-full items-center justify-between mt-12 pt-8 px-10 max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="self-stretch z-0 text-base text-black font-normal w-[173px] my-auto">
            <div className="w-full">Copyright 2025 STYLY</div>
          </div>
          <div className="self-stretch z-0 flex min-w-60 min-h-6 items-center gap-4 text-base text-black font-normal my-auto">
            <div className="self-stretch flex min-h-6 flex-col items-stretch justify-center w-[93px] my-auto">
              <Link
                to="/video-guide"
                className="flex w-[93px] items-center justify-center flex-1 h-full"
              >
                <div className="self-stretch w-[93px] my-auto">
                  <div className="w-full">Video Guide</div>
                </div>
              </Link>
            </div>
            <div className="self-stretch flex min-h-6 flex-col items-stretch whitespace-nowrap justify-center w-[47px] my-auto">
              <Link
                to="/terms"
                className="flex w-[47px] items-center justify-center flex-1 h-full"
              >
                <div className="self-stretch w-[47px] my-auto">
                  <div className="w-full">Terms</div>
                </div>
              </Link>
            </div>
            <div className="self-stretch flex min-h-6 flex-col items-stretch whitespace-nowrap justify-center w-14 my-auto">
              <Link
                to="/privacy"
                className="flex w-14 items-center justify-center flex-1 h-full"
              >
                <div className="self-stretch w-14 my-auto">
                  <div className="w-full">Privacy</div>
                </div>
              </Link>
            </div>
            <button className="self-stretch flex flex-col items-stretch text-[rgba(51,51,51,1)] text-center justify-center w-[113px] my-auto">
              <div className="flex w-full items-stretch flex-1 h-full">
                Cookie Settings
              </div>
            </button>
          </div>
          <div className="self-stretch z-0 flex items-center gap-6 my-auto">
            <a
              href="https://twitter.com/stylyai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/317bf886270ad921f9e34236d0e5c987e6b6b44f?placeholderIfAbsent=true"
                alt="Twitter"
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              />
            </a>
            <a
              href="https://facebook.com/stylyai"
              target="_blank"
              rel="noopener noreferrer"
              className="self-stretch flex min-h-[33px] flex-col items-stretch justify-center w-8 my-auto"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/f1363a9d29455e2269ec5d9ca13a13a5a82687e6?placeholderIfAbsent=true"
                alt="Facebook"
                className="aspect-[0.97] object-contain w-8 flex-1"
              />
            </a>
            <a
              href="https://instagram.com/stylyai"
              target="_blank"
              rel="noopener noreferrer"
              className="self-stretch flex flex-col items-stretch justify-center w-[30px] my-auto"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/4b59e1e015784fa9603fa900d8c80b5d1d01a1f8?placeholderIfAbsent=true"
                alt="Instagram"
                className="aspect-[1] object-contain w-[30px] flex-1"
              />
            </a>
          </div>
          <div className="absolute z-0 flex min-w-60 shrink-0 h-[66px] w-[1884px] border-[rgba(250,111,64,1)] border-t top-0 -bottom-px inset-x-0 max-md:max-w-full" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
