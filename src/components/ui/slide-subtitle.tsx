import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SlideSubtitleProps {
  children: ReactNode;
  className?: string;
  center?: boolean;
}

export const SlideSubtitle = ({ 
  children, 
  className,
  center = true
}: SlideSubtitleProps) => {
  return (
    <p className={cn(
      "text-lg md:text-xl lg:text-2xl opacity-90 leading-relaxed mb-8",
      center && "text-center",
      className
    )}>
      {children}
    </p>
  );
};