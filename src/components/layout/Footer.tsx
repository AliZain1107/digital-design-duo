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
    <footer className="bg-[rgba(241,244,247,1)] w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12 mb-12">
          {/* Logo Section */}
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <Link
              to="/"
              className="transition-all duration-300 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[rgba(89,50,134,0.3)] focus:ring-offset-2 rounded-lg"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/c0c4240138138be279efc42010c10acdb8bedd5d?placeholderIfAbsent=true"
                alt="STYLY Logo"
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </Link>
            {/* Slogan */}
            <p className="text-[rgba(89,50,134,0.8)] text-sm sm:text-base font-light leading-relaxed text-center lg:text-left max-w-md tracking-wide">
              {t.footerSlogan}
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-3">
              <Link
                to="/blog"
                className="text-gray-700 text-sm font-light tracking-wide transition-all duration-300 hover:text-[rgba(250,111,64,1)] hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-[rgba(250,111,64,0.3)] focus:ring-offset-2 rounded-md px-1 py-1"
              >
                {t.footerBlog}
              </Link>
              <Link
                to="/video-guide"
                className="text-gray-700 text-sm font-light tracking-wide transition-all duration-300 hover:text-[rgba(250,111,64,1)] hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-[rgba(250,111,64,0.3)] focus:ring-offset-2 rounded-md px-1 py-1"
              >
                {t.footerVideoGuide}
              </Link>
              <Link
                to="/conditions"
                className="text-gray-700 text-sm font-light tracking-wide transition-all duration-300 hover:text-[rgba(250,111,64,1)] hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-[rgba(250,111,64,0.3)] focus:ring-offset-2 rounded-md px-1 py-1"
              >
                {t.footerTerms}
              </Link>
              <Link
                to="/confidentialite"
                className="text-gray-700 text-sm font-light tracking-wide transition-all duration-300 hover:text-[rgba(250,111,64,1)] hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-[rgba(250,111,64,0.3)] focus:ring-offset-2 rounded-md px-1 py-1"
              >
                {t.footerPrivacy}
              </Link>
              <button
                onClick={handleCookieSettings}
                className="text-gray-700 text-sm font-light tracking-wide transition-all duration-300 hover:text-[rgba(250,111,64,1)] hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-[rgba(250,111,64,0.3)] focus:ring-offset-2 rounded-md px-1 py-1 cursor-pointer"
              >
                {t.footerCookieSettings}
              </button>
            </div>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200/60 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Copyright and Trademark */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <span className="text-gray-600 text-sm font-light tracking-wide">
                {t.footerCopyrightYear}
              </span>
              <div className="text-xs text-gray-500 font-light tracking-wide max-w-md">
                {t.footerTrademark}
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-5">
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
                  className="group transition-all duration-300 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-[rgba(250,111,64,0.3)] focus:ring-offset-2 rounded-lg p-1"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-5 h-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
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
