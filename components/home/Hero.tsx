'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

const EM_WORDS = ['light.', 'calm.', 'honest.', 'measured.', 'yours.', 'steady.'];

function clinicOpen(): boolean {
  const h = new Date().getHours();
  const day = new Date().getDay();
  if (day === 0) return h >= 10 && h < 16;
  return h >= 10 && h < 20;
}

function formatClock(d: Date): string {
  return d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
}

function formatDay(d: Date): string {
  return d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
}

export default function Hero() {
  const reduce = useReducedMotion();
  const sunRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [emIndex, setEmIndex] = useState(0);
  const [clock, setClock] = useState<string>('');
  const [dateLabel, setDateLabel] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setEmIndex((i) => (i + 1) % EM_WORDS.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, [reduce]);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setClock(formatClock(d));
      setDateLabel(formatDay(d));
      setIsOpen(clinicOpen());
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const sun = sunRef.current;
    const stage = stageRef.current;
    if (!sun || !stage || reduce) return;
    let raf = 0;
    function move(e: MouseEvent) {
      const r = stage!.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        sun!.style.setProperty('--mx', `${x}%`);
        sun!.style.setProperty('--my', `${y}%`);
        raf = 0;
      });
    }
    stage.addEventListener('mousemove', move);
    return () => {
      stage.removeEventListener('mousemove', move);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduce]);

  return (
    <section ref={stageRef} className="hall" aria-label="Lead statement">
      <Image
        src="/assets/hero-portrait.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hall__photo"
      />
      <div className="hall__wash" aria-hidden="true" />
      <div ref={sunRef} className="hall__sun" aria-hidden="true" />

      <div className="hall__stage page-shell">
        <div className="hall__copy">
          <p
            className={`hall__status ${isOpen ? '' : 'hall__status--closed'}`}
            title={isOpen ? 'Clinic is open' : 'Clinic is closed'}
          >
            {isOpen ? 'Open' : 'Closed'} · {clock || '—'} · {dateLabel}
          </p>

          <motion.h1
            className="hall__display"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Skin, in its
            <br />
            best{' '}
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={emIndex}
                className={`hall__em ${reduce ? 'hall__em--static' : ''}`}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {EM_WORDS[emIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.h1>

          <motion.p
            className="hall__lede"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            A dermatology-led clinic in Vanasthalipuram, Hyderabad. Eleven
            treatments on the fee schedule, calibrated for Indian skin.
          </motion.p>

          <motion.div
            className="hall__cta"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/book" className="cta cta--primary focus-ring">
              Reserve a consultation
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/services" className="cta cta--quiet focus-ring">
              Read the fee schedule
            </Link>
          </motion.div>

          <dl className="hall__facts">
            <div>
              <dt>First visit</dt>
              <dd>Free skin analysis</dd>
            </div>
            <div>
              <dt>Walk-ins</dt>
              <dd>By appointment</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
