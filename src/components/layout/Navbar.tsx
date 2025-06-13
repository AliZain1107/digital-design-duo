import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/lib/i18n";

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Debug log for current language
  console.log("Current language in Navbar:", language);

  // Debug effect to monitor language changes
  useEffect(() => {
    console.log("Language changed to:", language);
  }, [language]);

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Enhanced language switcher with seamless language change
  const handleLanguageChange = (lang: "en" | "fr") => {
    console.log("Language switch requested to:", lang);

    // For both languages, use the current React application
    setLanguage(lang);
    
    // No navigation - just change the language state for seamless experience
  };

  return (
    <header className="bg-white relative flex min-h-[90px] w-full items-center overflow-hidden justify-between px-3 sm:px-5 md:px-8 lg:px-12 xl:px-20 py-4 border-b border-gray-800 z-20">
      {/* Logo - Larger responsive sizing */}
      <div className="flex items-center flex-shrink-0">
        <Link
          to="/"
          className="transition-transform duration-300 hover:scale-105"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/f99e29783a6ec2e80cc53da0266b73b066b99df2?placeholderIfAbsent=true"
            alt="STYLY Logo"
            className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto object-contain"
          />
        </Link>
      </div>

      {/* Mobile menu button */}
      <button
        className="z-20 md:hidden flex items-center text-purple-700 hover:text-purple-900 transition-all p-2"
        onClick={toggleMobileMenu}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navigation - Grouped with better spacing */}
      <nav className="hidden md:flex items-center gap-3 lg:gap-4 xl:gap-5 flex-shrink-0">
        {/* Pricing Button */}
        <a
          href="https://app.styly.io/pricing"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center py-3 px-4 lg:px-5 xl:px-6 rounded-lg border border-purple-700 text-purple-700 font-medium text-sm lg:text-base transition-all duration-200 hover:bg-purple-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-200 whitespace-nowrap"
          aria-label="Go to Pricing"
        >
          {t.pricing}
        </a>

        {/* Styly Pro Button */}
        <Link
          to="/collaborateurs"
          className="relative flex items-center justify-center py-3 px-4 lg:px-5 xl:px-6 rounded-lg border border-purple-700 text-purple-700 font-medium text-sm lg:text-base transition-all duration-200 hover:bg-purple-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-200 whitespace-nowrap"
          aria-label="Go to Styly Pro"
        >
          {language === "fr" ? "Styly Pro" : "Styly Pro"}
        </Link>

        {/* Services API Button */}
        <Link
          to="/services-api"
          className="relative flex items-center justify-center py-3 px-4 lg:px-5 xl:px-6 rounded-lg border border-purple-700 text-purple-700 font-medium text-sm lg:text-base transition-all duration-200 hover:bg-purple-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-200 whitespace-nowrap"
          aria-label="Go to Services API"
        >
          {t.servicesAPI}
        </Link>

        {/* Sign In Button */}
        <a
          href="https://app.styly.io"
          className="relative flex items-center justify-center py-3 px-4 lg:px-5 xl:px-6 rounded-lg bg-orange-500 text-white font-medium text-sm lg:text-base transition-all duration-200 hover:bg-orange-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-200 whitespace-nowrap"
        >
          {t.signIn}
        </a>

        {/* Language Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-white flex items-center gap-2 lg:gap-3 justify-center py-3 px-3 lg:px-4 rounded-md border border-gray-200 transition-all duration-200 hover:bg-gray-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-200">
            <span className="text-sm lg:text-base text-purple-700 font-medium whitespace-nowrap">
              {language === "en" ? "English" : "Français"}
            </span>
            <ChevronDown className="h-4 w-4 lg:h-5 lg:w-5 text-purple-700" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-white border border-gray-200 shadow-lg z-50 min-w-[120px]"
          >
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                className={`cursor-pointer hover:bg-purple-50 focus:bg-purple-50 px-3 py-2 text-sm ${
                  language === lang.code ? "bg-purple-50 font-medium" : ""
                }`}
                onClick={() => handleLanguageChange(lang.code as "en" | "fr")}
              >
                {lang.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 flex flex-col p-4 sm:p-5 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/"
            className="transition-transform hover:scale-105"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/f99e29783a6ec2e80cc53da0266b73b066b99df2?placeholderIfAbsent=true"
              alt="STYLY Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>
          <button
            className="text-purple-700 hover:text-purple-900 transition-all p-2"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <a
            href="https://app.styly.io/pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 font-medium py-3 border-b border-gray-100 hover:text-purple-900 transition-all"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.pricing}
          </a>

          <Link
            to="/collaborateurs"
            className="text-purple-700 font-medium py-3 border-b border-gray-100 hover:text-purple-900 transition-all"
            onClick={() => setMobileMenuOpen(false)}
          >
            {language === "fr" ? "Styly Pro" : "Styly Pro"}
          </Link>

          <Link
            to="/services-api"
            className="text-purple-700 font-medium py-3 border-b border-gray-100 hover:text-purple-900 transition-all"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.servicesAPI}
          </Link>

          <Link
            to="/signin"
            className="bg-orange-500 text-white font-medium py-3 rounded-lg text-center hover:bg-orange-600 transition-all mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.signIn}
          </Link>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="text-gray-600 text-sm mb-2">Select Language:</div>
            <div className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`py-2 px-4 rounded-md transition-all text-sm ${
                    language === lang.code
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                  onClick={() => handleLanguageChange(lang.code as "en" | "fr")}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
