import React from "react";
import { useLanguage } from "@/lib/i18n";
import CTAButton from "@/components/ui/CTAButton";

interface StrategicCTAProps {
  variant?: "compact" | "full" | "minimal";
  title?: string;
  description?: string;
  primaryText?: string;
  secondaryText?: string;
  showSecondary?: boolean;
  className?: string;
  background?: "white" | "gray" | "gradient";
}

const StrategicCTA: React.FC<StrategicCTAProps> = ({
  variant = "compact",
  title,
  description,
  primaryText,
  secondaryText,
  showSecondary = false,
  className = "",
  background = "white"
}) => {
  const { t, language } = useLanguage();

  // Default content based on language
  const defaultTitle = title || (language === "fr" 
    ? "Prêt à transformer vos espaces ?" 
    : "Ready to Transform Your Spaces?");
    
  const defaultDescription = description || (language === "fr"
    ? "Rejoignez plus de 20 000 professionnels qui utilisent STYLY pour créer des designs époustouflants."
    : "Join 20,000+ professionals using STYLY to create stunning designs.");

  const defaultPrimaryText = primaryText || (language === "fr" 
    ? "Commencer gratuitement" 
    : "Get Started Free");
    
  const defaultSecondaryText = secondaryText || (language === "fr" 
    ? "Voir la démo" 
    : "Watch Demo");

  // Background classes
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    gradient: "bg-gradient-to-r from-purple-50 via-white to-orange-50"
  };

  // Variant layouts
  if (variant === "minimal") {
    return (
      <div className={`py-8 px-4 text-center ${backgroundClasses[background]} ${className}`}>
        <div className="max-w-2xl mx-auto">
          <CTAButton variant="primary" size="md">
            {defaultPrimaryText}
          </CTAButton>
          <p className="mt-3 text-sm text-gray-600">
            {language === "fr" ? "Aucune carte bancaire requise" : "No credit card required"}
          </p>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`py-12 px-4 text-center ${backgroundClasses[background]} ${className}`}>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-baloo">
            {defaultTitle}
          </h3>
          <p className="text-lg text-gray-600 mb-8 font-baloo">
            {defaultDescription}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton variant="primary" size="lg">
              {defaultPrimaryText}
            </CTAButton>
            {showSecondary && (
              <CTAButton 
                variant="outline" 
                size="lg"
                href="/video-guide"
                external={false}
              >
                {defaultSecondaryText}
              </CTAButton>
            )}
          </div>
          <p className="mt-4 text-sm text-gray-500">
            {language === "fr" ? "Aucune carte bancaire requise • Crédits gratuits inclus" : "No credit card required • Free credits included"}
          </p>
        </div>
      </div>
    );
  }

  // Full variant
  return (
    <div className={`py-16 px-4 text-center ${backgroundClasses[background]} ${className}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-baloo">
          {defaultTitle}
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-baloo">
          {defaultDescription}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <CTAButton variant="primary" size="lg">
            {defaultPrimaryText}
          </CTAButton>
          {showSecondary && (
            <CTAButton 
              variant="secondary" 
              size="lg"
              href="/video-guide"
              external={false}
            >
              {defaultSecondaryText}
            </CTAButton>
          )}
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{language === "fr" ? "Aucune carte bancaire requise" : "No credit card required"}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{language === "fr" ? "Crédits gratuits inclus" : "Free credits included"}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{language === "fr" ? "Configuration en 2 minutes" : "2-minute setup"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicCTA;
