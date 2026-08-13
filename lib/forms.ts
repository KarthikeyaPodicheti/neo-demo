import { CLINIC } from './constants';
import type { BookingData } from './types';

export function formatBookingDate(dateStr: string): string {
  if (!dateStr) return 'Not specified';
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

export function buildBookingSummary(data: BookingData): string {
  const lines = [
    `Name: ${data.name.trim() || '—'}`,
    `Phone: ${data.phone.trim() || '—'}`,
    `Email: ${data.email.trim() || '—'}`,
    `Concern: ${data.concern || '—'}`,
    `Preferred date: ${formatBookingDate(data.date)}`,
    `Preferred time: ${data.time || '—'}`,
  ];
  if (data.message.trim()) {
    lines.push(`Notes: ${data.message.trim()}`);
  }
  return lines.join('\n');
}

export function buildWhatsAppBookingUrl(data: BookingData): string {
  const body = [
    `Hello ${CLINIC.name},`,
    '',
    'I would like to book a consultation. Here are my details:',
    '',
    buildBookingSummary(data),
    '',
    'Please confirm this appointment. Thank you.',
  ].join('\n');

  return `${CLINIC.whatsapp}?text=${encodeURIComponent(body)}`;
}

export async function submitWeb3Form(fields: Record<string, string>): Promise<{ ok: boolean; message: string }> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return {
      ok: false,
      message: 'Missing Web3Forms access key. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local.',
    };
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        ...fields,
      }),
    });

    const result = (await response.json().catch(() => null)) as { success?: boolean; message?: string } | null;

    if (!response.ok || !result?.success) {
      return {
        ok: false,
        message: result?.message || 'Could not send the request. Please try WhatsApp or call the clinic.',
      };
    }

    return { ok: true, message: 'Request sent.' };
  } catch {
    return {
      ok: false,
      message: 'Could not send the request. Please try WhatsApp or call the clinic.',
    };
  }
}
