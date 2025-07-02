import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n";
import CookieSettings from "./CookieSettings";

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false);

  const handleCookieSettings = () => {
    setIsCookieSettingsOpen(true);
  };

  return (
    <footer className="bg-[rgba(241,244,247,1)] flex w-full flex-col overflow-hidden items-center pt-4 sm:pt-6 md:pt-8 pb-3 sm:pb-4 md:pb-6 px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20">
      <div className="w-full max-w-[1884px]">
        <div className="flex flex-col md:flex-row w-full text-base gap-2 md:gap-0">
          {/* Logo and Info (left) */}
          <div className="flex items-center justify-center md:justify-start text-[rgba(89,50,134,1)] font-normal w-full md:w-80 mb-2 md:mb-0">
            <Link to="/" className="transition-transform duration-300 hover:scale-105">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/c0c4240138138be279efc42010c10acdb8bedd5d?placeholderIfAbsent=true"
                alt="STYLY Logo"
                className="aspect-[2.67] object-contain w-20 sm:w-24 md:w-28 lg:w-32"
              />
            </Link>
          </div>
          {/* Slogan (right) */}
          <div className="flex-1 flex items-center md:justify-end w-full">
            <div className="w-full md:w-auto mt-1 md:mt-0">
              <p className="leading-6 text-[rgba(89,50,134,1)] text-center md:text-right break-words truncate whitespace-nowrap overflow-hidden">
                {t.footerSlogan}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="relative border-t border-[rgba(250,111,64,1)] mt-4 sm:mt-6 pt-3 sm:pt-4 flex flex-col md:flex-row items-center md:items-end justify-between w-full gap-2 md:gap-0">
          {/* Copyright and Links - always centered, wrap as a block if needed */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-3 gap-y-2 text-base text-black font-normal w-full md:w-auto text-center md:text-left max-w-full pb-2 md:pb-0">
            <span className="break-words whitespace-nowrap">{t.footerCopyrightYear}</span>
            <Link
              to={language === 'fr' ? '/fr/blog' : '/en/blog'}
              className="transition-all duration-300 hover:text-[rgba(250,111,64,1)] hover:font-medium hover:underline whitespace-nowrap"
            >
              {t.footerBlog}
            </Link>
            <Link
              to={language === 'fr' ? '/fr/video' : '/en/video'}
              className="transition-all duration-300 hover:text-[rgba(250,111,64,1)] hover:font-medium hover:underline whitespace-nowrap"
            >
              {t.footerVideoGuide}
            </Link>
            <Link
              to={language === 'fr' ? '/fr/conditions' : '/en/terms'}
              className="transition-all duration-300 hover:text-[rgba(250,111,64,1)] hover:font-medium hover:underline whitespace-nowrap"
            >
              {t.footerTerms}
            </Link>
            <Link
              to={language === 'fr' ? '/fr/confidentialite' : '/en/privacy'}
              className="transition-all duration-300 hover:text-[rgba(250,111,64,1)] hover:font-medium hover:underline whitespace-nowrap"
            >
              {t.footerPrivacy}
            </Link>
            <button
              onClick={handleCookieSettings}
              className="text-[rgba(51,51,51,1)] text-center transition-all duration-300 hover:text-[rgba(250,111,64,1)] hover:font-medium hover:underline cursor-pointer whitespace-nowrap"
            >
              {t.footerCookieSettings}
            </button>
          </div>
        </div>

        {/* Trademark Notice and Social Icons - always bottom row */}
        <div className="w-full mt-2 pt-2 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="text-xs text-gray-500 font-light text-center sm:text-left break-words w-full">
              {t.footerTrademark}
            </div>
            <div className="flex items-center gap-4 mt-2 sm:mt-0">
              {[
                { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin.svg" },
                { name: "Facebook", url: "https://facebook.com", icon: "/facebook.svg" },
                { name: "Instagram", url: "https://instagram.com", icon: "/instagram.svg" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110 hover:opacity-80"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="aspect-[1] object-contain w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Popup */}
      <CookieSettings
        isOpen={isCookieSettingsOpen}
        onClose={() => setIsCookieSettingsOpen(false)}
      />
    </footer>
  );
};

export default Footer;
