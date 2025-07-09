import React from "react";
import { useLanguage } from "@/lib/i18n";

interface CTAButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  variant = "primary",
  size = "md",
  href = "https://app.styly.io/signin",
  onClick,
  children,
  className = "",
  external = true,
  ariaLabel
}) => {
  const { t } = useLanguage();

  // Default text if no children provided
  const defaultText = children || t.getStarted;

  // Size classes
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  // Variant classes using STYLY brand colors
  const variantClasses = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl hover:shadow-orange-500/25",
    secondary: "bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl hover:shadow-purple-600/25",
    outline: "border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-transparent"
  };

  const baseClasses = `
    group relative inline-flex items-center justify-center
    font-semibold rounded-xl transition-all duration-300 ease-out
    hover:scale-105 active:scale-95 tracking-wide
    focus:outline-none focus:ring-2 focus:ring-purple-200 focus:ring-offset-2
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

  const content = (
    <>
      <span className="relative z-10">{defaultText}</span>
      {variant === "primary" && (
        <div className="absolute inset-0 rounded-xl bg-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      )}
      {variant === "secondary" && (
        <div className="absolute inset-0 rounded-xl bg-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        onClick={onClick}
        aria-label={ariaLabel}
        {...(external && {
          target: "_blank",
          rel: "noopener noreferrer"
        })}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={baseClasses}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};

export default CTAButton;
