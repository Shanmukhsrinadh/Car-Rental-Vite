import { MessageCircle } from "lucide-react";
import { contactInfo } from "@/data/content";

export function FloatingWhatsApp() {
  const handleClick = () => {
    window.open(
      `https://wa.me/${contactInfo.whatsapp}?text=Hello! I found you on your website and I'd like to book a vehicle.`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all"
      style={{ background: "#25d366" }}
      title="Chat on WhatsApp"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </button>
  );
}
