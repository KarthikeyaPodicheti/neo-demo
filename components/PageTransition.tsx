'use client';

import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={reduce ? false : { opacity: 0, clipPath: "inset(0 0 12% 0)" }}
        animate={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, clipPath: "inset(8% 0 0 0)" }}
        transition={{ duration: reduce ? 0.12 : 0.34, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
