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
    <header className="bg-white/98 backdrop-blur-md sticky top-0 w-full z-50 border-b border-gray-200/30">
      <div className="max-w-6xl mx-auto flex h-14 sm:h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo - Mobile optimized */}
        <div className="flex items-center">
          <Link
            to="/"
            className="transition-opacity duration-200 hover:opacity-80"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/f99e29783a6ec2e80cc53da0266b73b066b99df2?placeholderIfAbsent=true"
              alt="STYLY"
              className="h-7 sm:h-8 w-auto"
            />
          </Link>
        </div>

        {/* Mobile menu button - Enhanced touch target */}
        <button
          className="md:hidden p-3 -mr-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-200 active:scale-95"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Desktop Navigation - Premium spacing */}
        <nav className="hidden md:flex items-center gap-8 flex-shrink-0">
        {/* Pricing Button */}
        <a
          href="https://app.styly.io/pricing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 font-medium text-[15px] transition-colors duration-300 whitespace-nowrap tracking-tight"
          aria-label="Go to Pricing"
        >
          {t.pricing}
        </a>

        {/* Styly Pro Button */}
        <Link
          to="/collaborateurs"
          className={`font-medium text-[15px] transition-colors duration-300 whitespace-nowrap tracking-tight ${isActive("/collaborateurs") ? "text-purple-600" : "text-gray-600 hover:text-gray-900"}`}
          aria-label="Go to Styly Pro"
        >
          {language === "fr" ? "Styly Pro" : "Styly Pro"}
        </Link>

        {/* Services API Button */}
        <Link
          to="/services-api"
          className={`font-medium text-[15px] transition-colors duration-300 whitespace-nowrap tracking-tight ${isActive("/services-api") ? "text-purple-600" : "text-gray-600 hover:text-gray-900"}`}
          aria-label="Go to API"
        >
          {t.servicesAPI}
        </Link>

          {/* Sign In Button - Enhanced for mobile */}
          <div className="ml-4 lg:ml-6">
            <a
              href="https://app.styly.io/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-2.5 px-4 lg:px-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-sm lg:text-base transition-all duration-200 hover:from-orange-600 hover:to-orange-700 hover:shadow-md rounded-lg whitespace-nowrap tracking-wide active:scale-95"
              aria-label="Sign In to STYLY AI"
            >
              {t.signIn}
            </a>
          </div>

          {/* Language Dropdown - Enhanced */}
          <div className="ml-3 lg:ml-4">
            <DropdownMenu>
              <DropdownMenuTrigger
                className="flex items-center gap-1 justify-center py-2.5 px-3 transition-all duration-200 hover:bg-gray-50 rounded-lg outline-none border-none min-w-[44px] active:scale-95"
              >
                <span className="text-sm">
                  {language === "en" ? "🇬🇧" : "🇫🇷"}
                </span>
                <ChevronDown className="h-3 w-3 text-gray-400" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-white border border-gray-100 shadow-lg rounded-xl min-w-[140px] mt-2 p-1"
              >
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    className={`cursor-pointer hover:bg-gray-50 focus:bg-gray-50 px-3 py-2.5 text-sm flex items-center gap-2 transition-colors duration-150 rounded-lg ${
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

      {/* Mobile Menu - Improved Design */}
      <div
        className={`fixed inset-0 bg-white z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Mobile Header */}
        <div className="flex justify-between items-center h-14 px-4 border-b border-gray-100 bg-white">
          <Link
            to="/"
            className="transition-opacity duration-200 hover:opacity-80 flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/f99e29783a6ec2e80cc53da0266b73b066b99df2?placeholderIfAbsent=true"
              alt="STYLY Logo"
              className="h-7 w-auto object-contain"
            />
          </Link>
          <button
            className="p-3 -mr-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-200 active:scale-95"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          {/* Navigation Links */}
          <div className="space-y-1">
            <a
              href="https://app.styly.io/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 font-medium py-4 px-4 hover:text-purple-700 hover:bg-gray-50 transition-all duration-200 rounded-xl text-base active:scale-98 touch-manipulation"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.pricing}
            </a>

            <Link
              to="/collaborateurs"
              className="flex items-center text-gray-700 font-medium py-4 px-4 hover:text-purple-700 hover:bg-gray-50 transition-all duration-200 rounded-xl text-base active:scale-98 touch-manipulation"
              onClick={() => setMobileMenuOpen(false)}
            >
              {language === "fr" ? "Styly Pro" : "Styly Pro"}
            </Link>

            <Link
              to="/services-api"
              className="flex items-center text-gray-700 font-medium py-4 px-4 hover:text-purple-700 hover:bg-gray-50 transition-all duration-200 rounded-xl text-base active:scale-98 touch-manipulation"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.servicesAPI}
            </Link>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <a
              href="https://app.styly.io/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-4 px-6 rounded-xl text-center hover:from-orange-600 hover:to-orange-700 transition-all duration-200 block text-base shadow-lg active:scale-98 touch-manipulation"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.signIn}
            </a>
          </div>

          {/* Language Selector */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="text-gray-600 text-sm mb-3 font-medium">Language</div>
            <div className="grid grid-cols-2 gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`py-3 px-4 rounded-xl transition-all text-sm font-medium active:scale-98 touch-manipulation ${
                    language === lang.code
                      ? "bg-purple-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                  onClick={() => handleLanguageChange(lang.code as "en" | "fr")}
                >
                  {lang.code === "en" ? "🇬🇧 English" : "🇫🇷 Français"}
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
