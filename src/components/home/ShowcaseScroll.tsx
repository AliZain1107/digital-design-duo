
import React from "react";

interface ShowcaseScrollProps {
  direction?: "left-to-right" | "right-to-left";
}

const ShowcaseScroll: React.FC<ShowcaseScrollProps> = ({ direction = "right-to-left" }) => {
  const images = [
    "/lovable-uploads/9a47401a-d20f-4787-bbea-ed082e933d4d.png",
    "/lovable-uploads/9a47401a-d20f-4787-bbea-ed082e933d4d.png",
    "/lovable-uploads/9a47401a-d20f-4787-bbea-ed082e933d4d.png",
    "/lovable-uploads/9a47401a-d20f-4787-bbea-ed082e933d4d.png",
  ];

  const animationClass = direction === "left-to-right" ? "animate-showcase-reverse" : "animate-showcase";

  return (
    <div className="w-full overflow-hidden">
      <div className={`flex ${animationClass}`}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Showcase ${index + 1}`}
            className="h-auto w-full flex-shrink-0"
            style={{ minWidth: "100%" }}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowcaseScroll;
