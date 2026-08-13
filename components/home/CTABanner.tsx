'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function CTABanner() {
  return (
    <section className="section-block" style={{ background: 'var(--color-paper)', borderTop: 'var(--rule-hair-solid)' }}>
      <div className="page-shell">
        <motion.div
          className="lead"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="lead__kicker">Closing — Volume I</p>
          <h2 className="lead__display">
            The first visit is <em>free.</em> The plan is written. The result is yours.
          </h2>
          <div className="lead__cta">
            <Link href="/book" className="cta cta--primary focus-ring">
              Reserve a consultation
            </Link>
            <Link href="/services" className="cta cta--quiet focus-ring">
              Read the fee schedule
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}