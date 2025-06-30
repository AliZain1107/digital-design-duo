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
    <header className="bg-white/95 backdrop-blur-md sticky top-0 w-full z-50 border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto flex min-h-[80px] w-full items-center justify-between px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24">
        {/* Logo - Premium spacing and sizing */}
        <div className="flex items-center flex-shrink-0">
          <Link
            to="/"
            className="group transition-all duration-300 ease-out hover:scale-[1.02] flex items-center"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/f99e29783a6ec2e80cc53da0266b73b066b99df2?placeholderIfAbsent=true"
              alt="STYLY Logo"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-all duration-300 group-hover:brightness-110"
            />
          </Link>
        </div>

        {/* Mobile menu button - STYLY brand colors */}
        <button
          className="md:hidden p-3 rounded-xl bg-purple-50/80 hover:bg-purple-100/80 text-purple-700 hover:text-purple-900 transition-all duration-300 ease-out hover:scale-105 active:scale-95"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop Navigation - Premium spacing and typography */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-3 xl:gap-4">
          {/* Pricing Button - STYLY brand colors */}
          <a
            href="https://app.styly.io/pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-5 lg:px-6 py-2.5 lg:py-3 text-sm lg:text-base font-medium text-purple-700 hover:text-purple-900 transition-all duration-300 ease-out rounded-xl hover:bg-purple-50/80 active:scale-95 tracking-wide"
            aria-label="Go to Pricing"
          >
            <span className="relative z-10">{t.pricing}</span>
            <div className="absolute inset-0 rounded-xl bg-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          {/* Styly Pro Button - STYLY brand colors */}
          <Link
            to="/collaborateurs"
            className={`group relative px-5 lg:px-6 py-2.5 lg:py-3 text-sm lg:text-base font-medium transition-all duration-300 ease-out rounded-xl active:scale-95 tracking-wide ${
              isActive("/collaborateurs")
                ? "text-purple-700 bg-purple-50/80 shadow-sm"
                : "text-purple-700 hover:text-purple-900 hover:bg-purple-50/80"
            }`}
            aria-label="Go to Styly Pro"
          >
            <span className="relative z-10">{language === "fr" ? "Styly Pro" : "Styly Pro"}</span>
            {!isActive("/collaborateurs") && (
              <div className="absolute inset-0 rounded-xl bg-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            )}
          </Link>

          {/* Services API Button - STYLY brand colors */}
          <Link
            to="/services-api"
            className={`group relative px-5 lg:px-6 py-2.5 lg:py-3 text-sm lg:text-base font-medium transition-all duration-300 ease-out rounded-xl active:scale-95 tracking-wide ${
              isActive("/services-api")
                ? "text-purple-700 bg-purple-50/80 shadow-sm"
                : "text-purple-700 hover:text-purple-900 hover:bg-purple-50/80"
            }`}
            aria-label="Go to API"
          >
            <span className="relative z-10">{t.servicesAPI}</span>
            {!isActive("/services-api") && (
              <div className="absolute inset-0 rounded-xl bg-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            )}
          </Link>

          {/* Sign In Button - STYLY orange brand color */}
          <a
            href="https://app.styly.io/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 lg:px-8 py-2.5 lg:py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm lg:text-base font-semibold transition-all duration-300 ease-out rounded-xl shadow-lg hover:shadow-xl hover:shadow-orange-500/25 active:scale-95 tracking-wide ml-2 lg:ml-4"
            aria-label="Sign In to STYLY AI"
          >
            <span className="relative z-10">{t.signIn}</span>
            <div className="absolute inset-0 rounded-xl bg-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          {/* Language Dropdown - STYLY brand colors */}
          <DropdownMenu>
            <DropdownMenuTrigger className="group flex items-center gap-2 px-3 py-2.5 rounded-xl bg-purple-50/80 hover:bg-purple-100/80 transition-all duration-300 ease-out hover:scale-105 active:scale-95 outline-none focus:ring-2 focus:ring-purple-200 focus:ring-offset-2">
              <span className="text-lg">
                {language === "en" ? "🇬🇧" : "🇫🇷"}
              </span>
              <ChevronDown className="h-4 w-4 text-purple-600 group-hover:text-purple-800 transition-colors duration-300" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white/95 backdrop-blur-md border border-purple-200/50 shadow-xl rounded-xl z-50 min-w-[140px] p-1"
            >
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  className={`cursor-pointer rounded-lg px-3 py-2.5 text-sm flex items-center gap-3 transition-all duration-200 ${
                    language === lang.code
                      ? "bg-purple-100/80 text-purple-900 font-medium"
                      : "hover:bg-purple-50/80 text-purple-700 hover:text-purple-900"
                  }`}
                  onClick={() => handleLanguageChange(lang.code as "en" | "fr")}
                >
                  <span className="text-base">{lang.code === "en" ? "🇬🇧" : "🇫🇷"}</span>
                  <span className="font-medium">{lang.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>

      {/* Mobile Menu - Premium overlay design */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-md z-50 flex flex-col transition-all duration-500 ease-out ${
          mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-6 border-b border-purple-100/50">
          <Link
            to="/"
            className="group transition-all duration-300 ease-out hover:scale-105 flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/f99e29783a6ec2e80cc53da0266b73b066b99df2?placeholderIfAbsent=true"
              alt="STYLY Logo"
              className="h-8 w-auto object-contain transition-all duration-300 group-hover:brightness-110"
            />
          </Link>
          <button
            className="p-3 rounded-xl bg-purple-50/80 hover:bg-purple-100/80 text-purple-700 hover:text-purple-900 transition-all duration-300 ease-out hover:scale-105 active:scale-95"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        <div className="flex flex-col p-6 space-y-2">
          <a
            href="https://app.styly.io/pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-4 py-4 text-purple-700 hover:text-purple-900 font-medium text-lg transition-all duration-300 ease-out rounded-xl hover:bg-purple-50/80 active:scale-95"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="relative z-10">{t.pricing}</span>
            <div className="absolute inset-0 rounded-xl bg-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          <Link
            to="/collaborateurs"
            className={`group px-4 py-4 font-medium text-lg transition-all duration-300 ease-out rounded-xl active:scale-95 ${
              isActive("/collaborateurs")
                ? "text-purple-700 bg-purple-50/80"
                : "text-purple-700 hover:text-purple-900 hover:bg-purple-50/80"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="relative z-10">{language === "fr" ? "Styly Pro" : "Styly Pro"}</span>
            {!isActive("/collaborateurs") && (
              <div className="absolute inset-0 rounded-xl bg-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            )}
          </Link>

          <Link
            to="/services-api"
            className={`group px-4 py-4 font-medium text-lg transition-all duration-300 ease-out rounded-xl active:scale-95 ${
              isActive("/services-api")
                ? "text-purple-700 bg-purple-50/80"
                : "text-purple-700 hover:text-purple-900 hover:bg-purple-50/80"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="relative z-10">{t.servicesAPI}</span>
            {!isActive("/services-api") && (
              <div className="absolute inset-0 rounded-xl bg-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            )}
          </Link>

          <a
            href="https://app.styly.io/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-4 px-6 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg text-center rounded-xl shadow-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 ease-out active:scale-95"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="relative z-10">{t.signIn}</span>
            <div className="absolute inset-0 rounded-xl bg-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <div className="mt-6 pt-6 border-t border-purple-100/50">
            <div className="text-purple-600 text-sm font-medium mb-4 px-4">Select Language</div>
            <div className="flex gap-3 px-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`flex items-center gap-2 py-3 px-4 rounded-xl transition-all duration-300 ease-out text-sm font-medium active:scale-95 ${
                    language === lang.code
                      ? "bg-purple-600 text-white shadow-lg"
                      : "bg-purple-100/80 text-purple-700 hover:bg-purple-200/80 hover:text-purple-900"
                  }`}
                  onClick={() => handleLanguageChange(lang.code as "en" | "fr")}
                >
                  <span className="text-base">{lang.code === "en" ? "🇬🇧" : "🇫🇷"}</span>
                  <span>{lang.name}</span>
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
