import Image from 'next/image';
import Link from 'next/link';
import { DIFFERENTIATORS, DOCTORS } from '@/lib/constants';
import DoctorCard from '@/components/about/DoctorCard';

export default function AboutPage() {
  return (
    <>
      <section className="page-intro">
        <div className="mx-auto" style={{ maxWidth: 1280, padding: '0 clamp(1rem, 4vw, 4rem)' }}>
          <p className="page-intro__kicker">N° 04 · The clinic</p>
          <h1>
            Skin that feels <br />like home.
          </h1>
          <p className="page-intro__lede">
            A statement, before a story. Neo Skin Clinic was founded with a
            simple belief: skin care is not about chasing perfection. It is
            about reading the skin, treating it with science, and writing a
            protocol that belongs to it.
          </p>
        </div>
      </section>

      <section
        className="section-block"
        style={{ background: 'var(--color-paper-2)', borderTop: 'var(--rule-hair-solid)' }}
      >
        <div className="mx-auto" style={{ maxWidth: 1280, padding: '0 clamp(1rem, 4vw, 4rem)' }}>
          <div
            style={{
              display: 'grid',
              gap: 'var(--space-2xl)',
              gridTemplateColumns: 'minmax(0, 1fr)',
            }}
          >
            <figure
              style={{
                position: 'relative',
                aspectRatio: '4 / 3',
                overflow: 'hidden',
                background: 'var(--color-paper-3)',
              }}
            >
              <Image
                src="/assets/clinic/clinic-room.webp"
                alt="The Neo Skin Clinic treatment room in Vanasthalipuram"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                style={{ filter: 'saturate(0.9) brightness(0.92)' }}
              />
            </figure>

            <div>
              <p
                className="font-mono"
                style={{
                  fontSize: '0.62rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                  marginBottom: 'var(--space-md)',
                }}
              >
                · Our story
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.85rem, 3vw, 2.4rem)',
                  fontWeight: 430,
                  letterSpacing: '-0.025em',
                  lineHeight: 1.1,
                  color: 'var(--color-cream)',
                  maxWidth: '24ch',
                  marginBottom: 'var(--space-lg)',
                }}
              >
                A practice, not a platform.
              </h2>
              <div style={{ display: 'grid', gap: 'var(--space-md)', maxWidth: '62ch', color: 'var(--color-ink-muted)', fontSize: '1rem', lineHeight: 1.65 }}>
                <p>
                  Neo Skin Clinic was founded with a simple belief: everyone
                  deserves access to expert, honest, and personalized skin
                  care. We saw a gap between expensive cosmetic chains and
                  standalone clinics that lacked advanced technology.
                </p>
                <p>
                  Today, we serve hundreds of patients across Hyderabad with a
                  team of board-certified dermatologists, FDA-approved
                  equipment, and treatment protocols designed specifically for
                  Indian skin types.
                </p>
                <p>
                  Every patient who walks through our doors gets a free skin
                  analysis, an honest conversation about what is achievable,
                  and a treatment plan built around their life, not just their
                  skin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block" style={{ borderTop: 'var(--rule-hair-solid)' }}>
        <div className="mx-auto" style={{ maxWidth: 1280, padding: '0 clamp(1rem, 4vw, 4rem)' }}>
          <div className="section-head">
            <div className="section-head__rule" aria-hidden="true" />
            <h2>The conditions we practice under.</h2>
          </div>

          <div className="decl">
            {DIFFERENTIATORS.map((d, i) => (
              <div key={d.title} className="decl__item">
                <span className="decl__num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="decl__title">{d.title}.</h3>
                  <p className="decl__body">{d.description}</p>
                </div>
              </div>
            ))}
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
            <h2>The roster</h2>
            <p className="section-head__lede">
              Two doctors, on the floor, every day the clinic is open.
            </p>
          </div>

          <div className="ledger ledger--board">
            {DOCTORS.map((doctor, i) => (
              <DoctorCard key={i} doctor={doctor} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block" style={{ borderTop: 'var(--rule-hair-solid)' }}>
        <div className="mx-auto" style={{ maxWidth: 1280, padding: '0 clamp(1rem, 4vw, 4rem)' }}>
          <div className="lead">
            <p className="lead__kicker">Begin.</p>
            <h2 className="lead__display">
              The first visit is <em>free.</em> The plan is written.
            </h2>
            <div className="lead__cta">
              <Link href="/book" className="cta cta--primary focus-ring">
                Reserve a consultation
              </Link>
              <Link href="/contact" className="cta cta--quiet focus-ring">
                Ask a question first
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}