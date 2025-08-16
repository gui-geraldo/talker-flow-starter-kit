import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SlideTitleProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  center?: boolean;
}

export const SlideTitle = ({ 
  children, 
  className,
  size = "lg",
  center = true
}: SlideTitleProps) => {
  const sizeClasses = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl lg:text-6xl",
    xl: "text-5xl md:text-6xl lg:text-7xl"
  };

  return (
    <h1 className={cn(
      "font-bold leading-tight mb-6",
      sizeClasses[size],
      center && "text-center",
      className
    )}>
      {children}
    </h1>
  );
};