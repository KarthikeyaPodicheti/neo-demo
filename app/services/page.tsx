import Link from 'next/link';
import ServicesCatalogue from '@/components/services/ServicesCatalogue';

export default function ServicesPage() {
  return (
    <>
      <section className="page-intro">
        <div className="page-shell">
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

      <ServicesCatalogue />

      <section
        className="section-block"
        style={{ background: 'var(--color-paper-2)', borderTop: 'var(--rule-hair-solid)' }}
      >
        <div className="page-shell">
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
