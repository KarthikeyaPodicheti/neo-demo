'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { imageForService } from '@/lib/constants';
import { Service } from '@/lib/types';

export default function ServiceCard({
  service,
  index,
  onActivate,
}: {
  service: Service;
  index: number;
  onActivate: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <details
      id={service.id}
      name="schedule"
      className="dossier-row"
      role="listitem"
      onToggle={(e) => {
        const isOpen = e.currentTarget.open;
        setOpen(isOpen);
        if (isOpen) onActivate(service.id);
      }}
      onMouseEnter={() => onActivate(service.id)}
      onFocusCapture={() => onActivate(service.id)}
    >
      <summary className="dossier-row__summary focus-ring">
        <span className="ledger__idx">{String(index + 1).padStart(2, '0')}</span>
        <div className="ledger__main">
          <h3 className="ledger__title">{service.name}</h3>
          <p className="ledger__sub">{service.description}</p>
        </div>
        <div className="ledger__meta">
          <span className="ledger__giro">{service.duration}</span>
          <span className="ledger__price">{service.priceHint}</span>
        </div>
      </summary>
      <div className="dossier-row__open">
        {open && (
          <div className="dossier-row__shot">
            <Image
              src={imageForService(service.id)}
              alt=""
              fill
              unoptimized
              sizes="100vw"
              className="object-cover"
            />
          </div>
        )}
        <p>
          {service.description} A first protocol is written after the free skin
          analysis — session length {service.duration}, {service.priceHint.toLowerCase()}.
        </p>
        <Link href="/book" className="cta cta--primary focus-ring">
          Reserve this visit
        </Link>
      </div>
    </details>
  );
}
