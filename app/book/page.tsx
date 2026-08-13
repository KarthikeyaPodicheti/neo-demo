'use client';

import { useState } from 'react';
import { CLINIC, CONCERNS } from '@/lib/constants';
import { BookingData, BookingStep } from '@/lib/types';
import { buildWhatsAppBookingUrl, formatBookingDate, submitWeb3Form } from '@/lib/forms';
import { WhatsappLogo, ArrowRight } from '@phosphor-icons/react';

const TIME_SLOTS = [
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
  '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
  '7:00 PM',
];

const STAGES: { idx: BookingStep; num: string; title: string }[] = [
  { idx: 1, num: '1.0', title: 'Your concern' },
  { idx: 2, num: '2.0', title: 'Date and time' },
  { idx: 3, num: '3.0', title: 'Your details' },
  { idx: 4, num: '4.0', title: 'Confirmed' },
];

function getNext7Days(): string[] {
  const days: string[] = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    days.push(d.toISOString().split('T')[0]);
  }
  return days;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
}

export default function BookPage() {
  const [step, setStep] = useState<BookingStep>(1);
  const [data, setData] = useState<BookingData>({
    concern: '', date: '', time: '', name: '', phone: '', email: '', message: '',
  });
  const [errors, setErrors] = useState<Partial<BookingData>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const days = getNext7Days();

  function update(field: keyof BookingData, value: string) {
    setData({ ...data, [field]: value });
    setErrors({ ...errors, [field]: undefined });
  }

  function validateStep(s: BookingStep): boolean {
    const e: Partial<BookingData> = {};
    if (s === 1 && !data.concern) e.concern = 'Please select a concern';
    if (s === 2 && !data.date) e.date = 'Please select a date';
    if (s === 2 && !data.time) e.time = 'Please select a time';
    if (s === 3 && !data.name.trim()) e.name = 'Name is required';
    if (s === 3 && !data.phone.trim()) e.phone = 'Phone is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function next() {
    if (!validateStep(step) || step >= 4) return;
    if (step !== 3) {
      setStep((step + 1) as BookingStep);
      return;
    }

    setSubmitting(true);
    setSubmitError('');
    const result = await submitWeb3Form({
      subject: `Consultation request — ${data.concern} — ${CLINIC.name}`,
      from_name: data.name.trim(),
      name: data.name.trim(),
      email: data.email.trim() || 'not-provided@neoskinclinic.local',
      phone: data.phone.trim(),
      concern: data.concern,
      preferred_date: formatBookingDate(data.date),
      preferred_time: data.time,
      message: data.message.trim() || 'No additional notes.',
      clinic: CLINIC.name,
      address: CLINIC.address,
    });
    setSubmitting(false);

    if (!result.ok) {
      setSubmitError(result.message);
      return;
    }

    setStep(4);
  }

  function prev() {
    if (step > 1) setStep((step - 1) as BookingStep);
  }

  const whatsappLink = buildWhatsAppBookingUrl(data);
  const current = STAGES.find((s) => s.idx === step)!;

  return (
    <>
      <section className="page-intro">
        <div className="page-shell">
          <p className="page-intro__kicker">N° 05 · The dossier</p>
          <h1>
            Reserve a <br />consultation.
          </h1>
          <p className="page-intro__lede">
            Four stages, ten minutes. The first skin analysis is included.
          </p>
        </div>
      </section>

      <section className="section-block" style={{ paddingTop: 'var(--space-xl)' }}>
        <div className="page-shell" style={{ maxWidth: 760 }}>
          <div className="stepper" aria-label="Booking progress">
            {STAGES.map((s, idx) => (
              <span key={s.idx} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                <span
                  className={
                    'stepper__node ' +
                    (s.idx < step ? 'stepper__node--done ' : '') +
                    (s.idx === step ? 'stepper__node--active' : '')
                  }
                  aria-current={s.idx === step ? 'step' : undefined}
                >
                  {s.idx < step ? '✓' : s.idx}
                </span>
                {idx < STAGES.length - 1 && (
                  <span
                    className={'stepper__rule ' + (s.idx < step ? 'stepper__rule--active' : '')}
                    aria-hidden="true"
                  />
                )}
              </span>
            ))}
          </div>

          <div className="stage-head" style={{ marginTop: 'var(--space-2xl)' }}>
            <p className="stage-head__idx">{current.num} · Stage {current.idx} of {STAGES.length}</p>
            <h2 className="stage-head__title">{current.title}.</h2>
          </div>

          {step === 1 && (
            <div className="field-grid">
              <label className="field__label" style={{ marginBottom: 'var(--space-md)' }}>
                What is your primary concern?
              </label>
              <div className="chip-grid">
                {CONCERNS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => update('concern', c)}
                    className="chip focus-ring"
                    aria-pressed={data.concern === c}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <p className="field__help field__help--error" aria-live="polite">
                {errors.concern ?? '\u00a0'}
              </p>
            </div>
          )}

          {step === 2 && (
            <div className="field-grid" style={{ gap: 'var(--space-lg)' }}>
              <div className="field">
                <label className="field__label">Date</label>
                <div style={{ display: 'flex', gap: 'var(--space-xs)', overflowX: 'auto', paddingBottom: 8 }}>
                  {days.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => update('date', d)}
                      className="chip focus-ring"
                      aria-pressed={data.date === d}
                      style={{ flexShrink: 0 }}
                    >
                      {formatDate(d)}
                    </button>
                  ))}
                </div>
                <p className="field__help field__help--error" aria-live="polite">
                  {errors.date ?? '\u00a0'}
                </p>
              </div>
              <div className="field">
                <label className="field__label">Time</label>
                <div
                  style={{
                    display: 'grid',
                    gap: 'var(--space-xs)',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(86px, 1fr))',
                  }}
                >
                  {TIME_SLOTS.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => update('time', t)}
                      className="chip focus-ring"
                      aria-pressed={data.time === t}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <p className="field__help field__help--error" aria-live="polite">
                  {errors.time ?? '\u00a0'}
                </p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="field-grid">
              <div className="field">
                <label className="field__label" htmlFor="bk-name">
                  Full name<span className="field__label-req">*</span>
                </label>
                <input
                  id="bk-name"
                  type="text"
                  className="field__input"
                  value={data.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="Your full name"
                  aria-invalid={!!errors.name}
                  aria-describedby="bk-name-help"
                />
                <p id="bk-name-help" className="field__help field__help--error" aria-live="polite">
                  {errors.name ?? '\u00a0'}
                </p>
              </div>
              <div className="field">
                <label className="field__label" htmlFor="bk-phone">
                  Phone<span className="field__label-req">*</span>
                </label>
                <input
                  id="bk-phone"
                  type="tel"
                  className="field__input"
                  value={data.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="+91 98765 43210"
                  aria-invalid={!!errors.phone}
                  aria-describedby="bk-phone-help"
                />
                <p id="bk-phone-help" className="field__help field__help--error" aria-live="polite">
                  {errors.phone ?? '\u00a0'}
                </p>
              </div>
              <div className="field">
                <label className="field__label" htmlFor="bk-email">Email</label>
                <input
                  id="bk-email"
                  type="email"
                  className="field__input"
                  value={data.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="you@example.com"
                />
                <p className="field__help">&nbsp;</p>
              </div>
              <div className="field">
                <label className="field__label" htmlFor="bk-message">Message (optional)</label>
                <textarea
                  id="bk-message"
                  className="field__textarea"
                  value={data.message}
                  onChange={(e) => update('message', e.target.value)}
                  rows={3}
                  placeholder="Anything specific you want the dermatologist to know."
                />
                <p className="field__help">&nbsp;</p>
              </div>
              <p className="field__help field__help--error" aria-live="polite">
                {submitError || '\u00a0'}
              </p>
            </div>
          )}

          {step === 4 && (
            <div style={{ textAlign: 'left', paddingBlock: 'var(--space-xl)' }}>
              <p
                className="font-mono"
                style={{
                  fontSize: 'clamp(3.5rem, 8vw, 5.25rem)',
                  color: 'var(--color-accent)',
                  letterSpacing: '-0.05em',
                  lineHeight: 1,
                  fontWeight: 460,
                }}
                aria-hidden="true"
              >
                ✓
              </p>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  fontWeight: 440,
                  letterSpacing: '-0.025em',
                  color: 'var(--color-cream)',
                  marginTop: 'var(--space-md)',
                }}
              >
                Stage 4 — request received.
              </h3>
              <p style={{ marginTop: 'var(--space-md)', color: 'var(--color-ink-muted)', maxWidth: '48ch', fontSize: '1rem', lineHeight: 1.6 }}>
                We will confirm by phone within a few hours. For a faster
                confirmation, send this request on WhatsApp — your details are
                already written into the message.
              </p>
              <div className="lead__cta" style={{ marginTop: 'var(--space-xl)' }}>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta cta--primary focus-ring"
                  style={{ background: 'var(--color-whatsapp)', color: 'var(--color-cream)' }}
                >
                  <WhatsappLogo size={18} weight="fill" />
                  Confirm on WhatsApp
                </a>
                <a href={`tel:+91${CLINIC.phoneRaw}`} className="cta cta--quiet focus-ring">
                  Call {CLINIC.phone}
                </a>
              </div>
            </div>
          )}

          {step < 4 && (
            <div className="book-dock">
              <button
                type="button"
                onClick={prev}
                className="link-arrow focus-ring"
                style={{
                  visibility: step === 1 ? 'hidden' : 'visible',
                  borderBottom: 0,
                  background: 'transparent',
                }}
                aria-label="Previous stage"
              >
                <span aria-hidden="true">←</span>
                Previous
              </button>
              <button
                type="button"
                onClick={() => void next()}
                className="cta cta--primary focus-ring"
                disabled={submitting}
              >
                {submitting ? 'Sending…' : step === 3 ? 'Request appointment' : 'Continue'}
                <ArrowRight size={14} weight="bold" />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}