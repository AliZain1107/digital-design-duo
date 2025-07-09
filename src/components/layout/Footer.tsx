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
              <p className="leading-6 text-[rgba(89,50,134,1)] text-center md:text-right">
                {t.footerSlogan}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="relative border-t border-[rgba(250,111,64,1)] mt-4 sm:mt-6 pt-3 sm:pt-4">
          {/* Copyright and Links */}
          <div className="flex flex-wrap items-baseline justify-center sm:justify-start gap-x-4 gap-y-2 text-sm sm:text-base text-black font-normal">
            <span className="inline-block">{t.footerCopyrightYear}</span>
            <Link
              to={language === 'fr' ? '/fr/blog' : '/en/blog'}
              className="inline-block transition-all duration-300 hover:text-[rgba(250,111,64,1)] hover:font-medium hover:underline"
            >
              {t.footerBlog}
            </Link>
            <Link
              to={language === 'fr' ? '/fr/video' : '/en/video'}
              className="inline-block transition-all duration-300 hover:text-[rgba(250,111,64,1)] hover:font-medium hover:underline"
            >
              {t.footerVideoGuide}
            </Link>
            <Link
              to={language === 'fr' ? '/fr/conditions' : '/en/terms'}
              className="inline-block transition-all duration-300 hover:text-[rgba(250,111,64,1)] hover:font-medium hover:underline"
            >
              {t.footerTerms}
            </Link>
            <Link
              to={language === 'fr' ? '/fr/confidentialite' : '/en/privacy'}
              className="inline-block transition-all duration-300 hover:text-[rgba(250,111,64,1)] hover:font-medium hover:underline"
            >
              {t.footerPrivacy}
            </Link>
            <button
              onClick={handleCookieSettings}
              className="inline-block transition-all duration-300 hover:text-[rgba(250,111,64,1)] hover:font-medium hover:underline cursor-pointer bg-transparent border-none p-0 font-normal"
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
