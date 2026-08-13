'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Check } from '@phosphor-icons/react';
import { DIFFERENTIATORS } from '@/lib/constants';

const COLLAGE = [
  {
    src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=900&auto=format&fit=crop',
    alt: 'Dermatologist at Neo Skin Clinic',
    className: 'about-collage__main',
  },
  {
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=700&auto=format&fit=crop',
    alt: 'Consultation in the Vanasthalipuram clinic',
    className: 'about-collage__tile',
  },
  {
    src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=700&auto=format&fit=crop',
    alt: 'Treatment session at Neo Skin Clinic',
    className: 'about-collage__tile',
  },
];

export default function WhyNeoSkin() {
  return (
    <section className="section-block about-band">
      <div className="page-shell">
        <div className="about-split">
          <div className="about-collage">
            {COLLAGE.map((shot) => (
              <figure key={shot.src} className={shot.className}>
                <Image src={shot.src} alt={shot.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </figure>
            ))}
          </div>

          <div className="about-copy">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <p className="section-head__kicker">About us</p>
              <h2>Expert care for healthy, considered skin</h2>
            </div>
            <p className="section-head__lede" style={{ maxWidth: '42ch' }}>
              Neo Skin is a dermatology-led clinic above DMART in Vanasthalipuram.
              We write a protocol after the first analysis — eleven treatments,
              calibrated for Indian skin, by appointment only.
            </p>
            <ul className="about-checks">
              {DIFFERENTIATORS.map((item) => (
                <li key={item.title}>
                  <Check size={20} weight="bold" aria-hidden="true" />
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div>
              <Link href="/about" className="cta cta--primary focus-ring">
                Know more about us
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
