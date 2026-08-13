'use client';

import { Service } from '@/lib/types';

export default function TreatmentAccordion({ service }: { service: Service }) {
  return (
    <details className="faq__item" id={`acc-${service.id}`}>
      <summary className="faq__summary focus-ring" tabIndex={0}>
        <span className="ledger__idx">{String(0).padStart(2, '0')}</span>
        <span className="faq__q">{service.name}</span>
        <span className="faq__mark" aria-hidden="true">+</span>
      </summary>
      <p className="faq__a">
        {service.description} · {service.duration} · {service.priceHint}.
        Book a free analysis and the dermatologist will write the protocol for
        this treatment on your first visit.
      </p>
    </details>
  );
}