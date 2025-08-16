import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FeatureItem {
  title: string;
  description: string;
  icon?: ReactNode;
}

interface FeatureGridProps {
  features: FeatureItem[];
  className?: string;
  columns?: 2 | 3 | 4;
}

export const FeatureGrid = ({ 
  features, 
  className,
  columns = 3
}: FeatureGridProps) => {
  const gridClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };

  return (
    <div className={cn(
      "grid gap-6",
      gridClasses[columns],
      className
    )}>
      {features.map((feature, index) => (
        <div 
          key={index}
          className="bg-gradient-card p-6 rounded-lg border border-border hover:shadow-card transition-smooth hover:scale-105"
        >
          {feature.icon && (
            <div className="mb-4 text-2xl text-primary">
              {feature.icon}
            </div>
          )}
          <h3 className="text-xl font-semibold mb-3 text-foreground">
            {feature.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};