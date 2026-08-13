'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

const STEPS = [
  {
    num: '1.0',
    title: 'Analyze',
    desc: 'A free skin diagnostic with the dermatologist. We measure what the skin actually needs — not what is trending.',
  },
  {
    num: '2.0',
    title: 'Plan',
    desc: 'A short, written protocol. Calibrated to your skin type, your calendar, and the result you want at the end of it.',
  },
  {
    num: '3.0',
    title: 'Treat',
    desc: 'Sessions, measured one by one. We track progress in photographs and clinical notes, not in adjectives.',
  },
];

export default function FirstVisit() {
  return (
    <section className="section-block" style={{ background: 'var(--color-paper)', borderTop: 'var(--rule-hair-solid)' }}>
      <div className="page-shell">
        <div className="section-head">
          <div className="section-head__rule" aria-hidden="true" />
          <h2>Your first visit</h2>
          <p className="section-head__lede">
            Three stages, set before any fee is exchanged. The first is free.
          </p>
        </div>

        <motion.div
          className="first-visit"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
        >
          {STEPS.map((s) => (
            <motion.article
              key={s.num}
              className="first-visit__row"
variants={{
            hidden: { opacity: 0, y: 12 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
          }}
            >
              <span className="first-visit__num">{s.num}</span>
              <div>
                <h3 className="first-visit__title">{s.title}</h3>
                <p className="first-visit__desc">{s.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div style={{ marginTop: 'var(--space-xl)' }}>
          <Link href="/book" className="cta cta--primary focus-ring">
            Reserve a visit
          </Link>
        </div>
      </div>
    </section>
  );
}