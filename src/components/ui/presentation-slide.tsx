import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PresentationSlideProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "gradient" | "primary";
}

export const PresentationSlide = ({ 
  children, 
  className,
  background = "default" 
}: PresentationSlideProps) => {
  const backgroundClasses = {
    default: "bg-background",
    gradient: "bg-gradient-hero",
    primary: "bg-primary"
  };

  return (
    <div className={cn(
      "min-h-screen flex flex-col justify-center items-center p-8 md:p-12",
      "transition-smooth",
      backgroundClasses[background],
      background === "gradient" || background === "primary" ? "text-white" : "text-foreground",
      className
    )}>
      <div className="w-full max-w-6xl mx-auto">
        {children}
      </div>
    </div>
  );
};