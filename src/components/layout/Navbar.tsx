import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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

  // Helper to check if a route is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white sticky top-0 w-full z-50 border-b border-gray-100">
      <div className="max-w-screen-xl mx-auto flex min-h-[56px] w-full items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Logo - Minimalist sizing */}
        <div className="flex items-center flex-shrink-0">
          <Link
            to="/"
            className="transition-opacity duration-200 hover:opacity-80 flex items-center"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/f99e29783a6ec2e80cc53da0266b73b066b99df2?placeholderIfAbsent=true"
              alt="STYLY Logo"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="z-20 md:hidden flex items-center text-gray-600 hover:text-purple-700 transition-colors duration-200 p-1.5"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop Navigation - Minimalist spacing */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 flex-shrink-0">
        {/* Pricing Button */}
        <a
          href="https://app.styly.io/pricing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center py-2 px-3 lg:px-4 text-gray-700 font-medium text-sm lg:text-base transition-colors duration-200 hover:text-purple-700 hover:bg-gray-50 rounded-md whitespace-nowrap tracking-wide"
          aria-label="Go to Pricing"
        >
          {t.pricing}
        </a>

        {/* Styly Pro Button */}
        <Link
          to="/collaborateurs"
          className={`flex items-center justify-center py-2 px-3 lg:px-4 font-medium text-sm lg:text-base transition-colors duration-200 hover:bg-gray-50 rounded-md whitespace-nowrap tracking-wide ${isActive("/collaborateurs") ? "text-purple-700 bg-purple-50" : "text-gray-700 hover:text-purple-700"}`}
          aria-label="Go to Styly Pro"
        >
          {language === "fr" ? "Styly Pro" : "Styly Pro"}
        </Link>

        {/* Services API Button */}
        <Link
          to="/services-api"
          className={`flex items-center justify-center py-2 px-3 lg:px-4 font-medium text-sm lg:text-base transition-colors duration-200 hover:bg-gray-50 rounded-md whitespace-nowrap tracking-wide ${isActive("/services-api") ? "text-purple-700 bg-purple-50" : "text-gray-700 hover:text-purple-700"}`}
          aria-label="Go to API"
        >
          {t.servicesAPI}
        </Link>

          {/* Sign In Button */}
          <div className="ml-4 lg:ml-6">
            <a
              href="https://app.styly.io/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-2 px-4 lg:px-5 bg-orange-500 text-white font-medium text-sm lg:text-base transition-colors duration-200 hover:bg-orange-600 rounded-md whitespace-nowrap tracking-wide"
              aria-label="Sign In to STYLY AI"
            >
              {t.signIn}
            </a>
          </div>

          {/* Language Dropdown */}
          <div className="ml-3 lg:ml-4">
            <DropdownMenu>
              <DropdownMenuTrigger
                className="flex items-center gap-1 justify-center py-2 px-2 transition-colors duration-200 hover:bg-gray-50 rounded-md outline-none border-none min-w-[40px]"
              >
                <span className="text-sm">
                  {language === "en" ? "🇬🇧" : "🇫🇷"}
                </span>
                <ChevronDown className="h-3 w-3 text-gray-400" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-white border border-gray-100 shadow-sm rounded-md min-w-[120px] mt-1"
              >
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    className={`cursor-pointer hover:bg-gray-50 focus:bg-gray-50 px-3 py-2 text-sm flex items-center gap-2 transition-colors duration-150 ${
                      language === lang.code ? "bg-gray-50 font-medium" : ""
                    }`}
                    onClick={() => handleLanguageChange(lang.code as "en" | "fr")}
                  >
                    <span className="text-sm">{lang.code === "en" ? "🇬🇧" : "🇫🇷"}</span>
                    <span className="tracking-wide">{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 flex flex-col p-5 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
          <Link
            to="/"
            className="transition-opacity duration-200 hover:opacity-80 flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/f99e29783a6ec2e80cc53da0266b73b066b99df2?placeholderIfAbsent=true"
              alt="STYLY Logo"
              className="h-8 w-auto object-contain"
            />
          </Link>
          <button
            className="text-gray-600 hover:text-purple-700 transition-colors duration-200 p-1.5"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        <div className="flex flex-col gap-0.5">
          <a
            href="https://app.styly.io/pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 font-medium py-3 px-3 hover:text-purple-700 hover:bg-gray-50 transition-colors duration-200 rounded-md tracking-wide"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.pricing}
          </a>

          <Link
            to="/collaborateurs"
            className="text-gray-700 font-medium py-3 px-3 hover:text-purple-700 hover:bg-gray-50 transition-colors duration-200 rounded-md tracking-wide"
            onClick={() => setMobileMenuOpen(false)}
          >
            {language === "fr" ? "Styly Pro" : "Styly Pro"}
          </Link>

          <Link
            to="/services-api"
            className="text-gray-700 font-medium py-3 px-3 hover:text-purple-700 hover:bg-gray-50 transition-colors duration-200 rounded-md tracking-wide"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.servicesAPI}
          </Link>

          <div className="mt-5 pt-3">
            <a
              href="https://app.styly.io/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white font-medium py-3 px-4 rounded-md text-center hover:bg-orange-600 transition-colors duration-200 block tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.signIn}
            </a>
          </div>
          <div className="mt-4 pt-3 border-t border-gray-100">
            <div className="text-gray-600 text-sm mb-2 font-medium">Language:</div>
            <div className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`py-2 px-3 rounded-md transition-colors text-sm ${
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
