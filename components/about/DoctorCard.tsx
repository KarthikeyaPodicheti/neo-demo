'use client';

import Image from 'next/image';
import { Doctor } from '@/lib/types';

const photos = [
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&auto=format&fit=crop',
];

export default function DoctorCard({ doctor, index }: { doctor: Doctor; index: number }) {
  return (
    <article className="ledger__row" style={{ alignItems: 'flex-start', paddingBlock: 'var(--space-xl)' }}>
      <span className="ledger__idx" style={{ paddingTop: 8 }}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(64px, 80px) 1fr',
          gap: 'var(--space-md)',
          minWidth: 0,
        }}
      >
        <div
          style={{
            position: 'relative',
            aspectRatio: '1 / 1',
            width: '100%',
            background: 'var(--color-paper-3)',
            overflow: 'hidden',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <Image
            src={photos[index % photos.length]}
            alt={`${doctor.name}, ${doctor.specialization}`}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
        <div className="ledger__main">
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.35rem',
              fontWeight: 460,
              letterSpacing: '-0.025em',
              color: 'var(--color-cream)',
            }}
          >
            {doctor.name}
          </h3>
          <p style={{ color: 'var(--color-accent)', marginTop: 4, fontSize: '0.85rem' }}>
            {doctor.specialization}
          </p>
          <p className="ledger__sub" style={{ marginTop: 8 }}>
            {doctor.qualification} · {doctor.experience}
          </p>
        </div>
      </div>
      <div className="ledger__meta" />
    </article>
  );
}