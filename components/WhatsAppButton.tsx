'use client';

import { WhatsappLogo } from '@phosphor-icons/react';
import { CLINIC } from '@/lib/constants';

export default function WhatsAppButton() {
  const fullLink = `${CLINIC.whatsapp}?text=${CLINIC.whatsappMessage}`;

  return (
    <a
      href={fullLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Neo Skin Clinic on WhatsApp"
      className="whatsapp-pulse fixed bottom-6 right-6 z-40 flex items-center gap-2.5 pl-4 pr-5 py-3.5 min-h-[48px] min-w-[48px] text-white text-sm font-medium shadow-lg transition-[transform,box-shadow] duration-300 hover:scale-[1.03] active:scale-[0.98]"
      style={{
        background: 'var(--color-whatsapp)',
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-sans)',
      }}
    >
      <WhatsappLogo size={20} weight="regular" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}
