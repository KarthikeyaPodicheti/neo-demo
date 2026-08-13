import { CLINIC } from './constants';

export function getWhatsAppLink(customMessage?: string): string {
  const message = encodeURIComponent(customMessage || "Hi Neo Skin! I'd like to book a consultation.");
  return `${CLINIC.whatsapp}?text=${message}`;
}

export function formatPhone(phone: string): string {
  return `tel:${phone.replace(/\s/g, '')}`;
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
