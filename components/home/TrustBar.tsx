'use client';

import { CalendarBlank, Clock, Drop, MapPin, ShieldCheck, Stethoscope } from '@phosphor-icons/react';
import { motion, useReducedMotion } from 'motion/react';
import { CLINIC_STATS } from '@/lib/constants';

const ICONS = [Drop, CalendarBlank, Stethoscope, ShieldCheck, MapPin, Clock];

export default function TrustBar() {
  const reduce = useReducedMotion();

  return (
    <section className="trust-bar" aria-label="Clinic facts">
      <div className="page-shell">
        <ul className="trust-bar__grid">
          {CLINIC_STATS.map((stat, i) => {
            const Icon = ICONS[i] ?? Drop;
            return (
              <motion.li
                key={stat.label}
                className="trust-item"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <Icon size={28} weight="regular" aria-hidden="true" />
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
