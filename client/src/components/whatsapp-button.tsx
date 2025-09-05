import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { openWhatsAppChat } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  className?: string;
  children?: React.ReactNode;
  hideIcon?: boolean;
}

export default function WhatsAppButton({ className, children, hideIcon = false }: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    openWhatsAppChat();
  };

  return (
    <Button
      variant="wooden"
      onClick={handleWhatsAppClick}
      className={cn("flex items-center space-x-2 whatsapp-button", className)}
    >
      {!hideIcon && <MessageCircle className="h-5 w-5" />}
      <span>{children || "Start Session"}</span>
    </Button>
  );
}
