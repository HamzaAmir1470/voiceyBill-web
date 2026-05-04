import React from "react";

interface SectionDividerProps {
  variant?: "wave" | "curve" | "slope" | "organic" | "minimal";
  direction?: "up" | "down";
  className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({
  variant = "wave",
  direction = "down",
  className = "",
}) => {
  const baseClasses = "w-full overflow-hidden pointer-events-none";
  const rotateClass = direction === "up" ? "rotate-180" : "";

  const renderDivider = () => {
    switch (variant) {
      case "wave":
        return (
          <svg
            className={`w-full h-16 md:h-20 lg:h-24 ${rotateClass}`}
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
              fill="currentColor"
              className="text-muted/10"
            />
            <path
              d="M0,60 C150,100 350,20 600,60 C850,100 1050,20 1200,60"
              stroke="currentColor"
              strokeWidth="2"
              className="text-border/50"
              fill="none"
            />
          </svg>
        );

      case "curve":
        return (
          <svg
            className={`w-full h-12 md:h-16 lg:h-20 ${rotateClass}`}
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0 Q600,60 1200,0 L1200,60 L0,60 Z"
              fill="currentColor"
              className="text-muted/3"
            />
            <path
              d="M0,0 Q600,60 1200,0"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-border/40"
              fill="none"
            />
          </svg>
        );

      case "slope":
        return (
          <svg
            className={`w-full h-8 md:h-12 lg:h-16 ${rotateClass}`}
            viewBox="0 0 1200 40"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 L1200,0 L1200,40 Z"
              fill="currentColor"
              className="text-muted/4"
            />
            <path
              d="M0,40 L1200,0"
              stroke="currentColor"
              strokeWidth="1"
              className="text-border/50"
            />
          </svg>
        );

      case "organic":
        return (
          <svg
            className={`w-full h-14 md:h-20 lg:h-24 ${rotateClass}`}
            viewBox="0 0 1200 80"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 C120,10 240,70 360,45 C480,20 600,65 720,35 C840,5 960,60 1080,30 C1120,20 1160,25 1200,20 L1200,80 L0,80 Z"
              fill="currentColor"
              className="text-muted/10"
            />
            <path
              d="M0,40 C120,10 240,70 360,45 C480,20 600,65 720,35 C840,5 960,60 1080,30 C1120,20 1160,25 1200,20"
              stroke="currentColor"
              strokeWidth="2"
              className="text-border/40"
              fill="none"
            />
          </svg>
        );

      case "minimal":
        return (
          <div
            className={`w-full flex justify-center py-8 md:py-12 ${rotateClass}`}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-border/40"></div>
              <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-border/50"></div>
              <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-border/40"></div>
            </div>
          </div>
        );

      default:
        return renderDivider();
    }
  };

  return (
    <div className={`${baseClasses} ${className}`} aria-hidden="true">
      {renderDivider()}
    </div>
  );
};

export default SectionDivider;
