import ServiceCard from '@/components/services/ServiceCard';
import TreatmentAccordion from '@/components/services/TreatmentAccordion';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants';

const categories = ['Face', 'Laser', 'Hair'] as const;

export default function ServicesPage() {
  return (
    <>
      <section className="page-intro">
        <div className="mx-auto" style={{ maxWidth: 1280, padding: '0 clamp(1rem, 4vw, 4rem)' }}>
          <p className="page-intro__kicker">N° 02 · The schedule</p>
          <h1>
            Eleven treatments,<br />three categories.
          </h1>
          <p className="page-intro__lede">
            Every price is a starting point, set after the first skin analysis.
            Calibrated for Indian skin types (Fitzpatrick III–VI), executed by
            the dermatologist who diagnoses.
          </p>
        </div>
      </section>

      {categories.map((category) => {
        const categoryServices = SERVICES.filter((s) => s.category === category);
        if (categoryServices.length === 0) return null;
        return (
          <section
            key={category}
            className="section-block"
            style={{ borderTop: 'var(--rule-hair-solid)' }}
          >
            <div className="mx-auto" style={{ maxWidth: 1280, padding: '0 clamp(1rem, 4vw, 4rem)' }}>
              <header className="ledger-band__head">
                <span className="ledger-band__idx">·</span>
                <h2 className="ledger-band__title">{category}</h2>
              </header>

              <div className="ledger ledger--board" role="list">
                {categoryServices.map((service, i) => (
                  <ServiceCard key={service.id} service={service} index={i} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section-block" style={{ borderTop: 'var(--rule-hair-solid)' }}>
        <div className="mx-auto" style={{ maxWidth: 1280, padding: '0 clamp(1rem, 4vw, 4rem)' }}>
          <div className="section-head">
            <div className="section-head__rule" aria-hidden="true" />
            <h2>Treatment details</h2>
            <p className="section-head__lede">
              Open a row for session duration, recommended cadence, and what a
              first protocol looks like.
            </p>
          </div>

          <div className="faq" role="list">
            {SERVICES.map((service) => (
              <TreatmentAccordion key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-block"
        style={{ background: 'var(--color-paper-2)', borderTop: 'var(--rule-hair-solid)' }}
      >
        <div className="mx-auto" style={{ maxWidth: 1280, padding: '0 clamp(1rem, 4vw, 4rem)' }}>
          <div className="lead">
            <p className="lead__kicker">Not sure?</p>
            <h2 className="lead__display">
              A free analysis, before the schedule is read out loud.
            </h2>
            <div className="lead__cta">
              <Link href="/book" className="cta cta--primary focus-ring">
                Reserve a free analysis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}