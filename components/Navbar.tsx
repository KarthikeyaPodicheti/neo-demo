'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { List, X } from '@phosphor-icons/react';
import { CLINIC, NAV_LINKS } from '@/lib/constants';

const BANNER_H = 40;
const SCROLL_DELTA = 6;

export default function Navbar() {
  const pathname = usePathname();
  const [bannerOpen, setBannerOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 960) setMenuOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    let lastY = window.scrollY;
    let raf = 0;
    function tick() {
      const y = window.scrollY;
      const delta = y - lastY;
      if (Math.abs(delta) > SCROLL_DELTA) {
        if (delta > 0 && y > 80) setCompact(true);
        else setCompact(false);
        lastY = y;
      }
      raf = 0;
    }
    function onScroll() {
      if (!raf) raf = requestAnimationFrame(tick);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const bannerVisible = bannerOpen && !menuOpen;
  const bannerOffset = bannerVisible ? BANNER_H : 0;

  const hideBanner = () => {
    setBannerOpen(false);
    setCompact(false);
    document.documentElement.style.setProperty('--banner-h', '0px');
  };

  return (
    <>
      <header
        className="site-nav"
        style={{
          transform: compact && !menuOpen
            ? `translateY(-${bannerOffset}px)`
            : 'translateY(0)',
          transition: 'transform var(--dur-short) var(--ease-out)',
        }}
        aria-label="Main navigation"
      >
        {bannerVisible && (
          <div className="site-nav__banner" role="region" aria-label="Clinic announcement">
            <p>
              <span aria-hidden="true">·</span>
              &nbsp;Free skin analysis with your first consultation&nbsp;&mdash;&nbsp;
              <Link href="/book" className="underline-offset-2" style={{ borderBottom: '1px solid var(--color-accent-ink)' }}>
                Reserve a visit
              </Link>
              &nbsp;
              <span aria-hidden="true">·</span>
            </p>
            <button
              type="button"
              onClick={hideBanner}
              className="site-nav__dismiss focus-ring"
              aria-label="Dismiss announcement"
            >
              <X size={16} weight="bold" />
            </button>
          </div>
        )}
        <div className="site-nav__bar">
          <Link href="/" className="site-nav__brand" aria-label="Neo Skin Clinic home">
            <span className="site-nav__wordmark">Neo Skin</span>
            <span className="site-nav__mark">Clinic · Hyderabad</span>
          </Link>

          <nav className="site-nav__links" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="site-nav__link focus-ring"
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="site-nav__cta" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a
              href={`tel:+91${CLINIC.phoneRaw}`}
              className="site-nav__link focus-ring hidden md:inline-flex"
              style={{ color: 'var(--color-cream-muted)' }}
            >
              +91 {CLINIC.phoneRaw}
            </a>
            <Link href="/book" className="cta cta--primary focus-ring">
              Reserve visit
            </Link>
            <button
              type="button"
              className="site-nav__menu focus-ring"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <List size={20} />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          className="sheet-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <button
            type="button"
            className="sheet-menu__close focus-ring"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation"
          >
            <X size={22} weight="bold" />
          </button>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="sheet-menu__link focus-ring"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="cta cta--primary sheet-menu__cta focus-ring"
            onClick={() => setMenuOpen(false)}
          >
            Reserve a visit
          </Link>
          <p className="sheet-menu__colophon">{CLINIC.address}<br />{CLINIC.phone}</p>
        </div>
      )}
    </>
  );
}