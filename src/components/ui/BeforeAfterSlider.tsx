import React, { useRef, useState } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  altBefore?: string;
  altAfter?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  altBefore = "Before",
  altAfter = "After",
}) => {
  const [position, setPosition] = useState(50); // percent
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const inactivityTimer = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Helper to reset inactivity timer
  const resetInactivityTimer = React.useCallback(() => {
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    inactivityTimer.current = setTimeout(() => {
      setPosition(50);
    }, 5000);
  }, []);

  // Move handle to a specific clientX position
  const moveTo = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let x = clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    setPosition((x / rect.width) * 100);
    resetInactivityTimer();
  };

  // Mouse/touch down on handle or anywhere on slider
  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    dragging.current = true;
    document.body.style.userSelect = "none";
    if ("touches" in e && e.touches[0]) {
      moveTo(e.touches[0].clientX);
    } else if ("clientX" in e) {
      moveTo(e.clientX);
    }
    resetInactivityTimer();
  };
  // Mouse/touch up
  const stopDrag = () => {
    dragging.current = false;
    document.body.style.userSelect = "";
    resetInactivityTimer();
  };
  // Mouse/touch move
  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!dragging.current) return;
    if (e instanceof TouchEvent && e.touches[0]) {
      moveTo(e.touches[0].clientX);
    } else if (e instanceof MouseEvent) {
      moveTo(e.clientX);
    }
    resetInactivityTimer();
  };
  // Click/tap anywhere on slider
  const handleSliderClick = (e: React.MouseEvent | React.TouchEvent) => {
    if ("touches" in e && e.touches[0]) {
      moveTo(e.touches[0].clientX);
    } else if ("clientX" in e) {
      moveTo(e.clientX);
    }
    resetInactivityTimer();
  };
  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setPosition((p) => Math.max(0, p - 2));
    } else if (e.key === "ArrowRight") {
      setPosition((p) => Math.min(100, p + 2));
    }
    resetInactivityTimer();
  };

  // Inactivity timer: reset to center if not hovered for 5s
  React.useEffect(() => {
    if (!isHovered && !dragging.current) {
      resetInactivityTimer();
    } else if (isHovered && inactivityTimer.current) {
      clearTimeout(inactivityTimer.current);
    }
    return () => {
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    };
  }, [isHovered, resetInactivityTimer]);

  React.useEffect(() => {
    if (!dragging.current) return;
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("touchend", stopDrag);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", stopDrag);
    };
  }, [dragging.current, handleMove]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[1.2] max-w-2xl mx-auto rounded-2xl overflow-hidden select-none bg-gray-200 cursor-ew-resize"
      style={{ touchAction: "none" }}
      onMouseDown={handleSliderClick}
      onTouchStart={handleSliderClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* Before image */}
      <img
        src={beforeImage}
        alt={altBefore}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
        style={{ zIndex: 1 }}
      />
      {/* After image, clipped */}
      <img
        src={afterImage}
        alt={altAfter}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
        style={{
          clipPath: `inset(0 0 0 ${position}%)`,
          zIndex: 2,
        }}
      />
      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0"
        style={{ left: `${position}%`, zIndex: 3 }}
      >
        <div className="w-0.5 h-full bg-white opacity-80 mx-auto" />
      </div>
      {/* Drag handle */}
      <button
        className="absolute top-1/2 -translate-y-1/2 cursor-ew-resize"
        style={{ left: `${position}%`, zIndex: 4 }}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-label="Drag to compare before and after"
      >
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/90 border border-gray-200 shadow-md">
          <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18m-4-4l4 4m0 0l-4 4" />
          </svg>
        </div>
      </button>
      {/* Labels */}
      <span className="absolute top-4 left-4 px-3 py-1 rounded bg-white/80 text-gray-700 font-medium text-sm z-10">
        {altBefore}
      </span>
      <span className="absolute top-4 right-4 px-3 py-1 rounded bg-white/80 text-gray-700 font-medium text-sm z-10">
        {altAfter}
      </span>
    </div>
  );
};

export default BeforeAfterSlider; 