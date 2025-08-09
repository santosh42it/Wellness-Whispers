import { therapyEvents } from "@/components/analytics";

// WhatsApp Web API integration
export function openWhatsAppChat() {
  // Phone number for Mrs. Pavan Chowdhary
  const phoneNumber = "919880607355"; // +91 98806 07355
  
  // Pre-filled message for therapy inquiry
  const message = encodeURIComponent(
    "Hello Mrs. Chowdhary, I found your Wellness Whispers website and would like to know more about your therapy sessions. I'm interested in starting my healing journey and would appreciate your gentle support."
  );
  
  // WhatsApp Web URL format
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  
  // Track WhatsApp click for analytics
  therapyEvents.whatsappClick();
  
  // Track as conversion event
  therapyEvents.consultationRequest();
  
  // Open in new tab
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

// Alternative function for WhatsApp Web API (if available)
export function sendWhatsAppMessage(customMessage?: string) {
  const phoneNumber = "919880607355"; // +91 98806 07355
  
  const defaultMessage = "Hello Mrs. Chowdhary, I would like to schedule a therapy session.";
  const message = encodeURIComponent(customMessage || defaultMessage);
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  
  // Track WhatsApp click for analytics
  therapyEvents.whatsappClick();
  
  // Track as conversion event
  therapyEvents.consultationRequest();
  
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}
