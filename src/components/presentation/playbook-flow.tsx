import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FlowStep {
  title: string;
  description: string;
  automation: boolean;
  examples?: string[];
}

interface PlaybookFlowProps {
  title: string;
  segment: "clinicas" | "imobiliarias" | "escolas";
  steps: FlowStep[];
}

export const PlaybookFlow = ({ title, segment, steps }: PlaybookFlowProps) => {
  const segmentColors = {
    clinicas: "border-emerald-500 bg-emerald-50",
    imobiliarias: "border-orange-500 bg-orange-50", 
    escolas: "border-purple-500 bg-purple-50"
  };

  return (
    <Card className={cn("p-6", segmentColors[segment])}>
      <h3 className="text-xl font-bold mb-6 text-center">{title}</h3>
      
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                step.automation ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              )}>
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-muted-foreground mt-2 rotate-90" />
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-semibold">{step.title}</h4>
                {step.automation && (
                  <CheckCircle className="w-4 h-4 text-primary" />
                )}
              </div>
              <p className="text-muted-foreground text-sm mb-2">
                {step.description}
              </p>
              {step.examples && (
                <div className="text-xs text-muted-foreground">
                  <strong>Exemplos:</strong> {step.examples.join(", ")}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};