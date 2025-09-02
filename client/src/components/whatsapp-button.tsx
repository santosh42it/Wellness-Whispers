import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { openWhatsAppChat } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function WhatsAppButton({ className, children }: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    openWhatsAppChat();
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className={cn("flex items-center space-x-2 wooden-cta-button px-6 py-3 rounded-xl transition-all duration-300", className)}
    >
      <MessageCircle className="h-5 w-5" />
      <span>{children || "Start Session"}</span>
    </Button>
  );
}
