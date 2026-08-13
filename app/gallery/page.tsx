'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GALLERY_IMAGES } from '@/lib/constants';
import { GalleryFilter } from '@/lib/types';

const FILTERS: { label: string; value: GalleryFilter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Acne', value: 'acne' },
  { label: 'Pigmentation', value: 'pigmentation' },
  { label: 'Anti-aging', value: 'anti-aging' },
  { label: 'Hair', value: 'hair' },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<GalleryFilter>('all');

  const filtered = filter === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === filter);

  return (
    <>
      <section className="page-intro">
        <div className="mx-auto" style={{ maxWidth: 1280, padding: '0 clamp(1rem, 4vw, 4rem)' }}>
          <p className="page-intro__kicker">N° 03 · The archive</p>
          <h1>Results, indexed.</h1>
          <p className="page-intro__lede">
            Contact-sheet pairs for the concerns we treat most: acne, pigment,
            texture, and hair. Same light language in every frame. Results vary.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="mx-auto" style={{ maxWidth: 1280, padding: '0 clamp(1rem, 4vw, 4rem)' }}>
          <div
            className="font-mono"
            style={{
              display: 'flex',
              gap: 'var(--space-sm)',
              flexWrap: 'wrap',
              borderTop: 'var(--rule-hair-solid)',
              borderBottom: 'var(--rule-hair-solid)',
              padding: 'var(--space-md) 0',
              marginBottom: 'var(--space-xl)',
            }}
          >
            {FILTERS.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setFilter(f.value)}
                className="chip focus-ring"
                aria-pressed={filter === f.value}
              >
                {f.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p style={{ color: 'var(--color-ink-muted)', padding: 'var(--space-3xl) 0' }}>
              No images in this category yet. Check back soon.
            </p>
          ) : (
            <div className="sheet sheet--3">
              {filtered.map((img, i) => (
                <figure key={img.id} className="pair" style={{ animation: `fade-in 420ms var(--ease-out) ${i * 60}ms backwards` }}>
                  <div className="pair__row">
                    <div className="pair__cell">
                      <Image
                        src={img.beforeSrc}
                        alt={`${img.treatment} — before`}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover"
                      />
                      <span className="pair__tag">Before</span>
                    </div>
                    <div className="pair__cell">
                      <Image
                        src={img.afterSrc}
                        alt={`${img.treatment} — after`}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover"
                      />
                      <span className="pair__tag pair__tag--after">After</span>
                    </div>
                  </div>
                  <figcaption className="pair__caption">{img.treatment}</figcaption>
                </figure>
              ))}
            </div>
          )}

          <p
            className="font-mono"
            style={{
              marginTop: 'var(--space-2xl)',
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-ink-faint)',
              maxWidth: '60ch',
            }}
          >
            Illustrative pairs in the clinic&apos;s contact-sheet language. Individual results vary.
          </p>
        </div>
      </section>
    </>
  );
}