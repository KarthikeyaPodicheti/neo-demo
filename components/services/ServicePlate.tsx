'use client';

import Image from 'next/image';
import { imageForService } from '@/lib/constants';
import { Service } from '@/lib/types';

export default function ServicePlate({ service }: { service: Service }) {
  return (
    <aside className="dossier__plate" aria-live="polite">
      <div className="dossier__plate-shot">
        <Image
          src={imageForService(service.id)}
          alt=""
          fill
          unoptimized
          sizes="380px"
          className="object-cover"
        />
      </div>
      <p className="dossier__plate-cat">{service.category}</p>
      <p className="dossier__plate-name">{service.name}</p>
      <p className="dossier__plate-meta">
        <span>{service.duration}</span>
        <span>{service.priceHint}</span>
      </p>
    </aside>
  );
}
