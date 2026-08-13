'use client';

import { CLINIC } from '@/lib/constants';

export default function ClinicInfo() {
  return (
    <section className="section-block" style={{ background: 'var(--color-paper)', borderTop: 'var(--rule-hair-solid)' }}>
      <div className="page-shell">
        <div className="section-head">
          <div className="section-head__rule" aria-hidden="true" />
          <h2>The card</h2>
          <p className="section-head__lede">Three lines, no adornment.</p>
        </div>

        <dl
          className="font-mono"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(140px, 0.5fr) minmax(0, 1fr)',
            gap: 'var(--space-md) var(--space-lg)',
            borderTop: 'var(--rule-hair-solid)',
            borderBottom: 'var(--rule-hair-solid)',
            paddingBlock: 'var(--space-lg)',
            fontSize: '0.85rem',
            letterSpacing: '0.04em',
          }}
        >
          <dt style={{ color: 'var(--color-accent)', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Address</dt>
          <dd style={{ color: 'var(--color-ink)' }}>{CLINIC.address}</dd>

          <dt style={{ color: 'var(--color-accent)', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Hours</dt>
          <dd style={{ color: 'var(--color-ink)' }}>Mon — Sat: {CLINIC.hours.weekday}<br />Sun: {CLINIC.hours.sunday}</dd>

          <dt style={{ color: 'var(--color-accent)', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Phone</dt>
          <dd>
            <a href={`tel:+91${CLINIC.phoneRaw}`} className="focus-ring" style={{ color: 'var(--color-accent)' }}>
              {CLINIC.phone}
            </a>
          </dd>

          <dt style={{ color: 'var(--color-accent)', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Email</dt>
          <dd>
            <a href={`mailto:${CLINIC.email}`} className="focus-ring" style={{ color: 'var(--color-ink)' }}>
              {CLINIC.email}
            </a>
          </dd>
        </dl>
      </div>
    </section>
  );
}