'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import {
  Drop,
  Sparkle,
  Flashlight,
  ClockCounterClockwise,
  Target,
  PaintBrush,
} from '@phosphor-icons/react';
import { HOME_TREATMENTS, SERVICES } from '@/lib/constants';

const ICONS: Record<string, typeof Drop> = {
  hydrafacial: Drop,
  'chemical-peel': Sparkle,
  'laser-hair-removal': Flashlight,
  'anti-aging': ClockCounterClockwise,
  'acne-treatment': Target,
  pigmentation: PaintBrush,
};

export default function ServiceBento() {
  const router = useRouter();
  const featured = HOME_TREATMENTS.map((item) => {
    const service = SERVICES.find((s) => s.id === item.id);
    return service ? { ...service, image: item.image } : null;
  }).filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <section id="schedule" className="section-block" style={{ background: 'var(--color-paper)' }}>
      <div className="page-shell">
        <div className="section-head section-head--center">
          <p className="section-head__kicker">Our treatments</p>
          <h2>Solutions for every skin concern</h2>
          <p className="section-head__lede">
            Six of eleven treatments on the Neo Skin fee schedule. Every price
            is set after the first skin analysis in Vanasthalipuram.
          </p>
        </div>

        <motion.div
          className="tx-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.06 } },
          }}
        >
          {featured.map((service) => {
            const Icon = ICONS[service.id] ?? Sparkle;
            return (
              <motion.article
                key={service.id}
                className="tx-card"
                role="link"
                tabIndex={0}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
                onClick={() => router.push(`/services#${service.id}`)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    router.push(`/services#${service.id}`);
                  }
                }}
                aria-label={`${service.name} — ${service.priceHint}. Open the treatment detail.`}
              >
                <div className="tx-card__media">
                  <Image
                    src={service.image}
                    alt={`${service.name} at Neo Skin Clinic`}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <span className="tx-card__icon" aria-hidden="true">
                  <Icon size={22} weight="bold" />
                </span>
                <div className="tx-card__body">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="section-actions">
          <Link href="/services" className="cta cta--primary focus-ring">
            View all treatments
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
