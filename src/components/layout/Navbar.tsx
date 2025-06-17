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

  // Helper to check if a route is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white sticky top-0 w-full py-4 z-50 shadow-2xl">
      <div className="max-w-screen-xl mx-auto flex min-h-[90px] w-full items-center justify-between px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28">
        {/* Logo - Larger responsive sizing */}
        <div className="flex items-center flex-shrink-0 h-full">
          <Link
            to="/"
            className="transition-transform duration-300 hover:scale-105 flex items-center h-full"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/f99e29783a6ec2e80cc53da0266b73b066b99df2?placeholderIfAbsent=true"
              alt="STYLY Logo"
              className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto object-contain align-middle -mt-3"
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
        <nav className="hidden md:flex items-center gap-3 lg:gap-4 xl:gap-5 flex-shrink-0 h-full">
          {/* Their existing buttons go here - don't touch the button classes! */}
        {/* Pricing Button */}
        <div className="relative group">
          <span className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 blur-sm opacity-70 group-hover:opacity-100 animate-gradient-x z-0" />
          <a
            href="https://app.styly.io/pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center py-3 px-4 lg:px-5 xl:px-6 rounded-lg bg-white text-purple-700 font-bold text-sm lg:text-base transition-all duration-200 hover:bg-purple-50 hover:scale-105 border border-transparent whitespace-nowrap z-10 font-baloo"
            aria-label="Go to Pricing"
          >
            {t.pricing}
          </a>
        </div>

        {/* Styly Pro Button */}
        <div className="relative group">
          <span className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 blur-sm opacity-70 group-hover:opacity-100 animate-gradient-x z-0" />
          <Link
            to="/collaborateurs"
            className={`relative flex items-center justify-center py-3 px-4 lg:px-5 xl:px-6 rounded-lg bg-white text-purple-700 font-bold text-sm lg:text-base transition-all duration-200 hover:bg-purple-50 hover:scale-105 whitespace-nowrap z-10 border font-baloo ${isActive("/collaborateurs") ? "border-purple-500" : "border-transparent"}`}
            aria-label="Go to Styly Pro"
          >
            {language === "fr" ? "Styly Pro" : "Styly Pro"}
          </Link>
        </div>

        {/* Services API Button */}
        <div className="relative group">
          <span className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 blur-sm opacity-70 group-hover:opacity-100 animate-gradient-x z-0" />
          <Link
            to="/services-api"
            className={`relative flex items-center justify-center py-3 px-4 lg:px-5 xl:px-6 rounded-lg bg-white text-purple-700 font-bold text-sm lg:text-base transition-all duration-200 hover:bg-purple-50 hover:scale-105 whitespace-nowrap z-10 border font-baloo ${isActive("/services-api") ? "border-purple-500" : "border-transparent"}`}
            aria-label="Go to API"
          >
            {t.servicesAPI}
          </Link>
        </div>

        {/* Sign In Button */}
        <div className="relative group">
          <span className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-orange-200 via-orange-300 to-orange-400 blur-sm opacity-70 group-hover:opacity-100 animate-gradient-x z-0" />
          <a
            href="https://app.styly.io"
            className="group relative flex items-center justify-center py-3 px-4 lg:px-5 xl:px-6 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-sm lg:text-base transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-orange-500/30 border border-transparent whitespace-nowrap z-10 font-baloo"
            aria-label="Sign In to STYLY AI"
          >
            <span className="relative z-10 tracking-wide">{t.signIn}</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        {/* Language Dropdown */}
        <div className="relative group">
          <span className="absolute inset-0 rounded-md p-[2px] bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 blur-sm opacity-70 group-hover:opacity-100 animate-gradient-x z-0" />
          <DropdownMenu>
            <DropdownMenuTrigger
              className="relative bg-white flex items-center gap-1 justify-center py-2 px-2 rounded-md transition-all duration-200 hover:bg-purple-50 hover:scale-105 z-10 border border-transparent data-[state=open]:border-purple-500 min-w-[36px]"
            >
              <span className="text-lg">
                {language === "en" ? "🇬🇧" : "🇫🇷"}
              </span>
              <ChevronDown className="h-4 w-4 text-purple-700" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white border border-gray-200 shadow-lg z-50 min-w-[120px]"
            >
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  className={`cursor-pointer hover:bg-purple-50 focus:bg-purple-50 px-3 py-2 text-sm flex items-center gap-2 ${
                    language === lang.code ? "bg-purple-50 font-medium" : ""
                  }`}
                  onClick={() => handleLanguageChange(lang.code as "en" | "fr")}
                >
                  <span className="text-lg">{lang.code === "en" ? "🇬🇧" : "🇫🇷"}</span>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        </nav>
      </div>

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
            className="text-purple-700 font-bold py-3 border-b border-gray-100 hover:text-purple-900 transition-all font-baloo"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.pricing}
          </a>

          <Link
            to="/collaborateurs"
            className="text-purple-700 font-bold py-3 border-b border-gray-100 hover:text-purple-900 transition-all font-baloo"
            onClick={() => setMobileMenuOpen(false)}
          >
            {language === "fr" ? "Styly Pro" : "Styly Pro"}
          </Link>

          <Link
            to="/services-api"
            className="text-purple-700 font-bold py-3 border-b border-gray-100 hover:text-purple-900 transition-all font-baloo"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.servicesAPI}
          </Link>

          <Link
            to="/signin"
            className="bg-orange-500 text-white font-bold py-3 rounded-lg text-center hover:bg-orange-600 transition-all mt-2 font-baloo"
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
