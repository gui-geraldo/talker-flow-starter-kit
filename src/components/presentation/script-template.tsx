import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ScriptTemplateProps {
  title: string;
  segment: "clinicas" | "imobiliarias" | "escolas";
  channel: "whatsapp" | "email" | "instagram";
  script: string;
  variant?: "initial" | "followup" | "objection";
}

export const ScriptTemplate = ({
  title,
  segment,
  channel,
  script,
  variant = "initial"
}: ScriptTemplateProps) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(script);
    toast({
      title: "Script copiado!",
      description: "O script foi copiado para sua área de transferência.",
    });
  };

  const segmentColors = {
    clinicas: "bg-emerald-100 text-emerald-800 border-emerald-200",
    imobiliarias: "bg-orange-100 text-orange-800 border-orange-200",
    escolas: "bg-purple-100 text-purple-800 border-purple-200"
  };

  const channelIcons = {
    whatsapp: <MessageCircle className="w-4 h-4 text-whatsapp" />,
    email: <Copy className="w-4 h-4 text-primary" />,
    instagram: <Copy className="w-4 h-4 text-accent" />
  };

  return (
    <Card className="p-6 hover:shadow-card transition-smooth">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {channelIcons[channel]}
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        <div className="flex gap-2">
          <Badge className={segmentColors[segment]}>
            {segment}
          </Badge>
          <Badge variant="outline">
            {variant}
          </Badge>
        </div>
      </div>
      
      <div className="bg-muted p-4 rounded-lg mb-4 font-mono text-sm whitespace-pre-wrap">
        {script}
      </div>
      
      <button
        onClick={copyToClipboard}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
      >
        <Copy className="w-4 h-4" />
        Copiar script
      </button>
    </Card>
  );
};