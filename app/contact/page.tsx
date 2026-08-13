'use client';

import { useState } from 'react';
import { CLINIC, CONCERNS, FAQS } from '@/lib/constants';
import { ContactFormData } from '@/lib/types';
import { submitWeb3Form } from '@/lib/forms';
import { MapPin, Phone, Clock, WhatsappLogo, PaperPlaneTilt } from '@phosphor-icons/react';

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormData>({
    name: '', phone: '', email: '', concern: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  function validate(): boolean {
    const e: Partial<ContactFormData> = {};
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    if (!form.name.trim()) e.name = 'Name is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError('');
    const result = await submitWeb3Form({
      subject: `Website enquiry — ${form.concern || 'General'} — ${CLINIC.name}`,
      from_name: form.name.trim(),
      name: form.name.trim(),
      email: form.email.trim() || 'not-provided@neoskinclinic.local',
      phone: form.phone.trim(),
      concern: form.concern || 'Not specified',
      message: form.message.trim() || 'No message.',
    });
    setSubmitting(false);
    if (!result.ok) {
      setSubmitError(result.message);
      return;
    }
    setSubmitted(true);
  }

  return (
    <>
      <section className="page-intro">
        <div className="mx-auto" style={{ maxWidth: 1280, padding: '0 clamp(1rem, 4vw, 4rem)' }}>
          <p className="page-intro__kicker">N° 06 · Direct</p>
          <h1>
            Ask it <br />first.
          </h1>
          <p className="page-intro__lede">
            Honest answers, by phone or WhatsApp, in hours — not in days. The
            clinic is open six days a week; the inbox is checked daily.
          </p>
        </div>
      </section>

      <section className="section-block" style={{ paddingTop: 'var(--space-xl)' }}>
        <div className="mx-auto" style={{ maxWidth: 1280, padding: '0 clamp(1rem, 4vw, 4rem)' }}>
          <div
            style={{
              display: 'grid',
              gap: 'var(--space-2xl)',
              gridTemplateColumns: 'minmax(0, 1fr)',
            }}
          >
            <dl
              className="font-mono"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(140px, 0.4fr) minmax(0, 1fr)',
                gap: 'var(--space-md) var(--space-lg)',
                borderTop: 'var(--rule-hair-solid)',
                borderBottom: 'var(--rule-hair-solid)',
                paddingBlock: 'var(--space-lg)',
                fontSize: '0.85rem',
                letterSpacing: '0.04em',
              }}
            >
              <dt style={{ color: 'var(--color-accent)', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <MapPin size={14} weight="duotone" /> Address
                </span>
              </dt>
              <dd style={{ color: 'var(--color-ink)' }}>{CLINIC.address}</dd>

              <dt style={{ color: 'var(--color-accent)', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <Phone size={14} weight="duotone" /> Phone
                </span>
              </dt>
              <dd>
                <a href={`tel:+91${CLINIC.phoneRaw}`} className="focus-ring" style={{ color: 'var(--color-accent)' }}>
                  {CLINIC.phone}
                </a>
              </dd>

              <dt style={{ color: 'var(--color-accent)', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <Clock size={14} weight="duotone" /> Hours
                </span>
              </dt>
              <dd style={{ color: 'var(--color-ink)' }}>Mon — Sat: {CLINIC.hours.weekday}<br />Sun: {CLINIC.hours.sunday}</dd>

              <dt style={{ color: 'var(--color-accent)', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <WhatsappLogo size={14} weight="fill" /> Channel
                </span>
              </dt>
              <dd>
                <a
                  href={CLINIC.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring"
                  style={{ color: 'var(--color-ink)' }}
                >
                  {CLINIC.whatsapp}
                </a>
              </dd>
            </dl>

            {submitted ? (
              <div
                style={{
                  borderTop: 'var(--rule-hair-solid)',
                  borderBottom: 'var(--rule-hair-solid)',
                  paddingBlock: 'var(--space-xl)',
                  display: 'grid',
                  gap: 'var(--space-md)',
                }}
              >
                <p
                  className="font-mono"
                  style={{
                    fontSize: '0.62rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent)',
                  }}
                >
                  ✓ Sent
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                    fontWeight: 440,
                    letterSpacing: '-0.025em',
                    color: 'var(--color-cream)',
                    maxWidth: '24ch',
                  }}
                >
                  Thank you. We will reply within a day.
                </h3>
                <p style={{ color: 'var(--color-ink-muted)', maxWidth: '52ch', fontSize: '1rem', lineHeight: 1.6 }}>
                  For a faster reply, you can also write to us on WhatsApp.
                </p>
                <a
                  href={CLINIC.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta cta--primary focus-ring"
                  style={{ background: 'var(--color-whatsapp)', color: 'var(--color-cream)', marginTop: 'var(--space-md)' }}
                >
                  <WhatsappLogo size={18} weight="fill" />
                  Chat on WhatsApp
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'grid',
                  gap: 'var(--space-md)',
                  borderTop: 'var(--rule-hair-solid)',
                  borderBottom: 'var(--rule-hair-solid)',
                  paddingBlock: 'var(--space-xl)',
                }}
              >
                <p
                  className="font-mono"
                  style={{
                    fontSize: '0.62rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent)',
                    marginBottom: 'var(--space-sm)',
                  }}
                >
                  Or write it here
                </p>

                <div className="field-grid field-grid--2">
                  <div className="field">
                    <label className="field__label" htmlFor="ct-name">Full name<span className="field__label-req">*</span></label>
                    <input
                      id="ct-name"
                      type="text"
                      className="field__input"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      aria-invalid={!!errors.name}
                    />
                    <p className="field__help field__help--error" aria-live="polite">{errors.name ?? '\u00a0'}</p>
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="ct-phone">Phone<span className="field__label-req">*</span></label>
                    <input
                      id="ct-phone"
                      type="tel"
                      className="field__input"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      aria-invalid={!!errors.phone}
                    />
                    <p className="field__help field__help--error" aria-live="polite">{errors.phone ?? '\u00a0'}</p>
                  </div>
                </div>

                <div className="field-grid field-grid--2">
                  <div className="field">
                    <label className="field__label" htmlFor="ct-email">Email</label>
                    <input
                      id="ct-email"
                      type="email"
                      className="field__input"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                    />
                    <p className="field__help">&nbsp;</p>
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="ct-concern">Concern</label>
                    <select
                      id="ct-concern"
                      className="field__select"
                      value={form.concern}
                      onChange={(e) => setForm({ ...form, concern: e.target.value })}
                    >
                      <option value="">Select your concern</option>
                      {CONCERNS.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    <p className="field__help">&nbsp;</p>
                  </div>
                </div>

                <div className="field">
                  <label className="field__label" htmlFor="ct-message">Message</label>
                  <textarea
                    id="ct-message"
                    className="field__textarea"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    placeholder="Tell us about your concern or ask a question."
                  />
                  <p className="field__help">&nbsp;</p>
                </div>

                <p className="field__help field__help--error" aria-live="polite">
                  {submitError || '\u00a0'}
                </p>
                <button
                  type="submit"
                  className="cta cta--primary focus-ring"
                  style={{ marginTop: 'var(--space-sm)', alignSelf: 'flex-start' }}
                  disabled={submitting}
                >
                  <PaperPlaneTilt size={16} weight="fill" />
                  {submitting ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section
        className="section-block"
        style={{ background: 'var(--color-paper-2)', borderTop: 'var(--rule-hair-solid)' }}
      >
        <div className="mx-auto" style={{ maxWidth: 1280, padding: '0 clamp(1rem, 4vw, 4rem)' }}>
          <div className="section-head">
            <div className="section-head__rule" aria-hidden="true" />
            <h2>Asked before.</h2>
          </div>

          <div className="faq" role="list">
            {FAQS.map((faq, i) => (
              <details key={i} className="faq__item">
                <summary className="faq__summary focus-ring" tabIndex={0}>
                  <span className="ledger__idx">{String(i + 1).padStart(2, '0')}</span>
                  <span className="faq__q">{faq.question}</span>
                  <span className="faq__mark" aria-hidden="true">+</span>
                </summary>
                <p className="faq__a">{faq.answer}</p>
              </details>
            ))}
          </div>

          <p
            className="font-mono"
            style={{
              marginTop: 'var(--space-2xl)',
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-ink-faint)',
            }}
          >
            Map embed — to confirm (use clinic latitude/longitude for the iframe).
          </p>
        </div>
      </section>
    </>
  );
}