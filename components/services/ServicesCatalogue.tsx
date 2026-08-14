'use client';

import { useEffect, useState } from 'react';
import ServiceCard from '@/components/services/ServiceCard';
import ServicePlate from '@/components/services/ServicePlate';
import { SERVICES, SERVICE_IMAGES } from '@/lib/constants';

const CATEGORIES = ['Face', 'Laser', 'Hair'] as const;

export default function ServicesCatalogue() {
  const [activeId, setActiveId] = useState(SERVICES[0].id);
  const active = SERVICES.find((s) => s.id === activeId) ?? SERVICES[0];

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && !CATEGORIES.some((c) => c.toLowerCase() === hash)) {
      const match = SERVICES.find((s) => s.id === hash);
      if (match) {
        setActiveId(match.id);
        const el = document.getElementById(match.id) as HTMLDetailsElement | null;
        if (el) el.open = true;
      }
    }

    const links: HTMLLinkElement[] = [];
    const t = window.setTimeout(() => {
      const srcs = [...new Set(Object.values(SERVICE_IMAGES))];
      srcs.forEach((href) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = href;
        document.head.appendChild(link);
        links.push(link);
      });
    }, 250);
    return () => {
      window.clearTimeout(t);
      links.forEach((link) => link.remove());
    };
  }, []);

  return (
    <>
      <nav className="dossier__tabs" aria-label="Treatment categories">
        <div className="page-shell dossier__tabs-inner">
          {CATEGORIES.map((category) => (
            <a
              key={category}
              href={`#${category.toLowerCase()}`}
              className="chip focus-ring"
            >
              {category}
            </a>
          ))}
        </div>
      </nav>

      <div className="page-shell dossier">
        <ServicePlate service={active} />
        <div className="dossier__list">
          {CATEGORIES.map((category) => {
            const items = SERVICES.filter((s) => s.category === category);
            if (items.length === 0) return null;
            return (
              <section
                key={category}
                id={category.toLowerCase()}
                className="dossier-band"
                aria-labelledby={`${category.toLowerCase()}-heading`}
              >
                <header className="ledger-band__head">
                  <span className="ledger-band__idx">·</span>
                  <h2 className="ledger-band__title" id={`${category.toLowerCase()}-heading`}>
                    {category}
                  </h2>
                </header>
                <div className="ledger ledger--board" role="list">
                  {items.map((service, i) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      index={i}
                      onActivate={setActiveId}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
