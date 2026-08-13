'use client';

import { motion, useReducedMotion } from 'motion/react';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section className="section-block" style={{ background: 'var(--color-paper)' }}>
      <div className="page-shell">
        <div className="section-head section-head--center">
          <p className="section-head__kicker">What our clients say</p>
          <h2>Real visits. Written results.</h2>
          <p className="section-head__lede">
            Notes from consultations in Vanasthalipuram — the same fee schedule,
            the same first analysis.
          </p>
        </div>

        <div className="quote-grid">
          {TESTIMONIALS.map((item, i) => (
            <motion.blockquote
              key={item.name}
              className="quote-card"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="quote-card__stars" aria-label={`${item.rating} out of 5`}>
                {'★'.repeat(item.rating)}
              </div>
              <p>{item.text}</p>
              <footer>
                {item.name} · {item.treatment}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
