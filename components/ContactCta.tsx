'use client';

import { useState } from 'react';
import Link from 'next/link';
import { site } from '@/lib/site';
import { type Locale, href } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';

interface ContactCtaProps {
  locale: Locale;
  dict: Dictionary;
}

export function ContactCta({ locale, dict }: ContactCtaProps) {
  const { contact } = dict;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section className="section section--ruled contact-cta" id="contact">
      <div className="container">
        <div className="contact-cta__box" data-reveal>
          <div className="contact-cta__ambient" />

          <span className="eyebrow">{contact.eyebrow}</span>

          <h2 className="contact-cta__title">
            {contact.title.map((word, idx) => (
              <span
                key={idx}
                className={word.accent ? 'accent' : undefined}
              >
                {word.t}{' '}
              </span>
            ))}
          </h2>

          <p className="contact-cta__lead lead">{contact.text}</p>

          <div className="contact-cta__actions">
            <Link href={href(locale, '/contact')} className="btn btn--primary btn--lg">
              {contact.cta} <span className="arrow">→</span>
            </Link>

            <button
              type="button"
              onClick={handleCopy}
              className="btn btn--lg contact-cta__copy-btn"
              title={contact.copy}
            >
              <span>{site.email}</span>
              <span className="mono contact-cta__copy-badge">
                {copied ? contact.copied : 'Copy'}
              </span>
            </button>
          </div>

          <div className="contact-cta__links">
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              GitHub <span className="arrow arrow--diag">↗</span>
            </a>
            <span className="contact-cta__dot">•</span>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              LinkedIn <span className="arrow arrow--diag">↗</span>
            </a>
            <span className="contact-cta__dot">•</span>
            <span className="contact-cta__location mono">
              {site.location.city}, {site.location.country}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
