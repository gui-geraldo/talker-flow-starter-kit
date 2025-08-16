import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MetricCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
  variant?: "default" | "primary" | "success" | "whatsapp";
}

export const MetricCard = ({ 
  title, 
  value, 
  description,
  icon,
  className,
  variant = "default"
}: MetricCardProps) => {
  const variantClasses = {
    default: "bg-gradient-card border-border hover:shadow-card",
    primary: "bg-gradient-primary text-white hover:shadow-elegant",
    success: "bg-success text-success-foreground hover:shadow-hover",
    whatsapp: "bg-whatsapp text-whatsapp-foreground hover:shadow-hover"
  };

  return (
    <div className={cn(
      "p-6 rounded-lg border backdrop-blur-sm transition-smooth hover:scale-105",
      variantClasses[variant],
      className
    )}>
      {icon && (
        <div className="mb-4 text-2xl">
          {icon}
        </div>
      )}
      <div className="text-3xl md:text-4xl font-bold mb-2">
        {value}
      </div>
      <div className="text-lg font-semibold mb-1">
        {title}
      </div>
      {description && (
        <div className="text-sm opacity-80">
          {description}
        </div>
      )}
    </div>
  );
};