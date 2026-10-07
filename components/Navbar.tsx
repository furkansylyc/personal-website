'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '@/lib/site';
import { type Locale, href } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';

interface NavbarProps {
  locale: Locale;
  dict: Dictionary;
}

export function Navbar({ locale, dict }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const otherLocale: Locale = locale === 'en' ? 'tr' : 'en';
  // Compute switch link: replace current locale prefix with other locale
  const switchHref = pathname.replace(`/${locale}`, `/${otherLocale}`) || `/${otherLocale}`;

  const navLinks = [
    { label: dict.nav.work, href: href(locale, '/#work') },
    { label: dict.nav.about, href: href(locale, '/#about') },
    { label: dict.nav.experience, href: href(locale, '/#experience') },
    { label: dict.nav.contact, href: href(locale, '/contact') },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__container">
        {/* Left: Brand */}
        <Link href={href(locale)} className="navbar__brand" aria-label="Furkan Söyleyici">
          <span className="navbar__logo">{site.initials}</span>
          <span className="navbar__title">
            <span className="navbar__name">{site.name}</span>
            <span className="navbar__role">Software Engineer</span>
          </span>
        </Link>

        {/* Center: Desktop Nav */}
        <nav className="navbar__nav" aria-label={dict.nav.primary}>
          <ul className="navbar__links" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="navbar__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Availability, Language & Social */}
        <div className="navbar__actions">
          {site.available && (
            <div className="navbar__available" title={dict.nav.available}>
              <span className="navbar__available-dot" />
              <span className="navbar__available-text">{dict.nav.available}</span>
            </div>
          )}

          <Link
            href={switchHref}
            className="navbar__lang-switch"
            aria-label={dict.nav.language}
          >
            {otherLocale.toUpperCase()}
          </Link>

          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__icon-link"
            aria-label="GitHub"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="navbar__hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? dict.nav.close : dict.nav.menu}
            aria-expanded={mobileMenuOpen}
          >
            <span className={`navbar__hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar__drawer ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="container navbar__drawer-content">
          <ul className="navbar__drawer-links" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="navbar__drawer-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar__drawer-footer">
            <Link
              href={switchHref}
              className="btn btn--light"
              onClick={() => setMobileMenuOpen(false)}
            >
              {otherLocale === 'tr' ? 'Türkçe Versiyona Geç' : 'Switch to English'}
            </Link>
            <div className="navbar__drawer-socials">
              <a href={site.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
