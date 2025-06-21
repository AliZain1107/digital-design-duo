import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n";
import CookieSettings from "./CookieSettings";

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false);

  const handleCookieSettings = () => {
    setIsCookieSettingsOpen(true);
  };

  return (
    <footer className="bg-[rgba(241,244,247,1)] flex w-full flex-col overflow-hidden items-center pt-12 md:pt-16 pb-8 md:pb-12 px-5 sm:px-8 md:px-12 lg:px-[116px]">
      <div className="w-full max-w-[1884px]">
        <div className="flex w-full flex-col md:flex-row text-base">
          {/* Logo and Info (left) */}
          <div className="flex items-start md:items-center text-[rgba(89,50,134,1)] font-normal w-full md:w-80 mb-8 md:mb-0">
            <Link to="/" className="transition-transform duration-300 hover:scale-105">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/c0c4240138138be279efc42010c10acdb8bedd5d?placeholderIfAbsent=true"
                alt="STYLY Logo"
                className="aspect-[2.67] object-contain w-20"
              />
            </Link>
          </div>
          {/* Slogan (right) */}
          <div className="flex-1 flex items-start md:justify-end w-full">
            <div className="w-full md:w-auto mt-4 md:mt-0">
              <p className="leading-6 text-[rgba(89,50,134,1)] text-right">
                {t.footerSlogan}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="relative border-t border-[rgba(250,111,64,1)] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Copyright */}
          <div className="text-base text-black font-normal order-3 md:order-1">
            <p>{t.footerCopyrightYear}</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-base text-black font-normal order-1 md:order-2">
            <Link
              to="/blog"
              className="transition-all duration-300 hover:text-[rgba(250,111,64,1)] hover:font-medium hover:underline"
            >
              {t.footerBlog}
            </Link>
            <Link
              to="/video-guide"
              className="transition-all duration-300 hover:text-[rgba(250,111,64,1)] hover:font-medium hover:underline"
            >
              {t.footerVideoGuide}
            </Link>
            <Link
              to="/conditions"
              className="transition-all duration-300 hover:text-[rgba(250,111,64,1)] hover:font-medium hover:underline"
            >
              {t.footerTerms}
            </Link>
            <Link
              to="/confidentialite"
              className="transition-all duration-300 hover:text-[rgba(250,111,64,1)] hover:font-medium hover:underline"
            >
              {t.footerPrivacy}
            </Link>
            <button
              onClick={handleCookieSettings}
              className="text-[rgba(51,51,51,1)] text-center transition-all duration-300 hover:text-[rgba(250,111,64,1)] hover:font-medium hover:underline cursor-pointer"
            >
              {t.footerCookieSettings}
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6 order-2 md:order-3 my-4 md:my-0">
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
                className="transition-all duration-300 hover:scale-125 hover:opacity-80"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="aspect-[1] object-contain w-6"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Trademark Notice */}
        <div className="w-full mt-8 pt-4 border-t border-gray-200">
          <div className="text-xs text-gray-500 font-light text-center md:text-left">
            {t.footerTrademark}
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
