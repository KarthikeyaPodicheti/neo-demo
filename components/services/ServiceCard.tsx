'use client';

import { motion } from 'motion/react';
import { Service } from '@/lib/types';

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.article
      id={service.id}
      className="ledger__row"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.04,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <span className="ledger__idx">{String(index + 1).padStart(2, '0')}</span>
      <div className="ledger__main">
        <h3 className="ledger__title">{service.name}</h3>
        <p className="ledger__sub">{service.description}</p>
      </div>
      <div className="ledger__meta">
        <span className="ledger__giro">{service.category}</span>
        <span className="ledger__price">{service.priceHint}</span>
      </div>
    </motion.article>
  );
}