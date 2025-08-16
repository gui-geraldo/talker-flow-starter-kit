import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, CheckCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  sender: "user" | "ai";
  message: string;
  time: string;
  status?: "sent" | "delivered" | "read";
}

interface WhatsAppDemoProps {
  messages: Message[];
  contactName: string;
  contactAvatar?: string;
  businessName: string;
}

export const WhatsAppDemo = ({ 
  messages, 
  contactName, 
  contactAvatar,
  businessName 
}: WhatsAppDemoProps) => {
  return (
    <Card className="max-w-sm mx-auto bg-gradient-to-b from-gray-100 to-gray-200 p-0 overflow-hidden">
      {/* WhatsApp Header */}
      <div className="bg-whatsapp p-3 flex items-center gap-3 text-white">
        <Avatar className="w-10 h-10">
          <AvatarImage src={contactAvatar} />
          <AvatarFallback>{contactName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="font-semibold text-sm">{contactName}</div>
          <div className="text-xs opacity-90">Online</div>
        </div>
        <MessageCircle className="w-5 h-5" />
      </div>

      {/* Messages */}
      <div className="bg-gray-50 min-h-96 p-3 space-y-2 max-h-96 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={cn(
              "flex",
              msg.sender === "user" ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
                "px-3 py-2 rounded-lg max-w-xs text-sm",
                msg.sender === "user"
                  ? "bg-green-500 text-white rounded-br-none"
                  : "bg-white text-gray-800 rounded-bl-none shadow-sm"
              )}
            >
              <div>{msg.message}</div>
              <div
                className={cn(
                  "text-xs mt-1 flex items-center gap-1",
                  msg.sender === "user" ? "text-green-100 justify-end" : "text-gray-500"
                )}
              >
                <span>{msg.time}</span>
                {msg.sender === "user" && (
                  <CheckCheck className="w-3 h-3" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="bg-gray-100 p-3 flex items-center gap-2">
        <div className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-gray-500">
          Digite uma mensagem...
        </div>
        <div className="w-8 h-8 bg-whatsapp rounded-full flex items-center justify-center">
          <MessageCircle className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Business Badge */}
      <div className="bg-primary p-2 text-center">
        <div className="text-xs text-white font-medium">
          ⚡ Resposta automatizada por {businessName}
        </div>
      </div>
    </Card>
  );
};