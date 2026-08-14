'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

const images = [
  {
    label: 'Acne',
    desc: 'Three sessions of medical extractions + peels.',
    src: '/assets/gallery/acne-after.webp',
  },
  {
    label: 'Glow & hydration',
    desc: 'HydraFacial — measured in days, not weeks.',
    src: '/assets/treatments/hydrafacial.webp',
  },
  {
    label: 'Anti-aging',
    desc: 'Softened fine lines, no surgical signposts.',
    src: '/assets/gallery/anti-aging-after.webp',
  },
];

export default function ResultsTeaser() {
  return (
    <section className="section-block" style={{ background: 'var(--color-paper)', borderTop: 'var(--rule-hair-solid)' }}>
      <div className="page-shell">
        <div className="section-head">
          <div className="section-head__rule" aria-hidden="true" />
          <h2>Results, indexed</h2>
          <p className="section-head__lede">
            A small contact sheet of documented sessions. The full archive
            lives in the gallery.
          </p>
        </div>

        <div className="sheet sheet--3">
          {images.map((img, i) => (
            <motion.figure
              key={i}
              className="shot"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="shot__frame">
                <Image
                  src={img.src}
                  alt={`${img.label} — ${img.desc}`}
                  fill
                  unoptimized
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="shot__label">
                <span className="shot__label-title">{img.label}</span>
                <span>{img.desc}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div style={{ marginTop: 'var(--space-xl)' }}>
          <Link href="/gallery" className="link-arrow focus-ring">
            The contact sheet
            <span className="link-arrow__mark" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}