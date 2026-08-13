import Link from 'next/link';
import { CLINIC, NAV_LINKS, SERVICES } from '@/lib/constants';

export default function Footer() {
  const treatments = SERVICES.slice(0, 6);

  return (
    <footer
      style={{
        background: 'var(--color-paper-2)',
        color: 'var(--color-ink)',
        borderTop: 'var(--rule-hair-solid)',
      }}
    >
      <div className="page-shell" style={{ paddingBlock: 'clamp(2.5rem, 6vw, 5rem)' }}>
        <div className="site-foot">
          <div
            className="site-foot__cols"
          >
            <div className="site-foot__book">
              <p className="section-head__kicker" style={{ color: 'var(--color-accent-ink)' }}>
                Reserve
              </p>
              <h2>Ready for a written plan? Book the first analysis today.</h2>
              <Link href="/book" className="cta cta--paper focus-ring">
                Book appointment
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <Block label="Quick links">
              {NAV_LINKS.map((l) => (
                <span key={l.href}>
                  <Link href={l.href} className="focus-ring" style={{ color: 'var(--color-ink-muted)' }}>
                    {l.label}
                  </Link>
                  <br />
                </span>
              ))}
            </Block>

            <Block label="Treatments">
              {treatments.map((s) => (
                <span key={s.id}>
                  <Link href={`/services#${s.id}`} className="focus-ring" style={{ color: 'var(--color-ink-muted)' }}>
                    {s.name}
                  </Link>
                  <br />
                </span>
              ))}
            </Block>

            <Block label="Contact us">
              <a href={`tel:+91${CLINIC.phoneRaw}`} className="focus-ring" style={{ color: 'var(--color-accent)' }}>
                {CLINIC.phone}
              </a>
              <br />
              <a href={`mailto:${CLINIC.email}`} className="focus-ring" style={{ color: 'var(--color-ink-muted)' }}>
                {CLINIC.email}
              </a>
              <br />
              {CLINIC.address}
              <br />
              <Link href={CLINIC.instagram} target="_blank" className="focus-ring" style={{ color: 'var(--color-ink-muted)' }}>
                Instagram
              </Link>
              {' · '}
              <Link href={CLINIC.facebook} target="_blank" className="focus-ring" style={{ color: 'var(--color-ink-muted)' }}>
                Facebook
              </Link>
            </Block>
          </div>

          <p
            className="font-mono"
            style={{
              fontSize: '0.6rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-ink-faint)',
            }}
          >
            © {new Date().getFullYear()} Neo Skin Clinic · Vanasthalipuram, Hyderabad · Telangana, India.
            Dermatology and aesthetic care, by appointment.
          </p>
        </div>
      </div>
    </footer>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p
        className="font-mono"
        style={{
          fontSize: '0.6rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--color-accent)',
          marginBottom: 'var(--space-xs)',
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontSize: '0.85rem',
          lineHeight: 1.7,
          color: 'var(--color-ink-muted)',
        }}
      >
        {children}
      </p>
    </div>
  );
}
