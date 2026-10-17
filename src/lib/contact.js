export const whatsappNumber = (import.meta.env.VITE_CONTACT_WHATSAPP || "").replace(/\D/g, "");
export const whatsappUrl = whatsappNumber ? `https://wa.me/${whatsappNumber}` : "";
