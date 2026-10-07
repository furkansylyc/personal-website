import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';
import { type Locale, href } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';

interface HeroProps {
  locale: Locale;
  dict: Dictionary;
}

export function Hero({ locale, dict }: HeroProps) {
  const { hero } = dict;

  return (
    <section className="hero" id="home">
      <div className="grid-bg" />
      <div className="container hero__container">
        {/* Left Column: Typography & CTAs */}
        <div className="hero__content">
          <div className="hero__eyebrow in" style={{ '--d': '60ms' } as React.CSSProperties}>
            <span className="eyebrow">{hero.eyebrow}</span>
          </div>

          <h1 className="hero__title in" style={{ '--d': '140ms' } as React.CSSProperties}>
            {hero.title.map((line, lineIdx) => (
              <span key={lineIdx} className="hero__title-line">
                {line.map((word, wordIdx) => (
                  <span
                    key={wordIdx}
                    className={`hero__word ${word.accent ? 'accent' : ''}`}
                  >
                    {word.t}{' '}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <p className="hero__subtitle in" style={{ '--d': '240ms' } as React.CSSProperties}>
            {hero.subtitle}
          </p>

          <div
            className="hero__disciplines in"
            style={{ '--d': '300ms' } as React.CSSProperties}
          >
            {hero.disciplines.map((d, i) => (
              <span key={d} className="hero__discipline">
                {d}
                {i < hero.disciplines.length - 1 && <span className="hero__sep">/</span>}
              </span>
            ))}
          </div>

          <div className="hero__actions in" style={{ '--d': '380ms' } as React.CSSProperties}>
            <a href="#work" className="btn btn--primary btn--lg">
              {hero.primaryCta} <span className="arrow">→</span>
            </a>
            {site.resumeUrl ? (
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--lg"
              >
                {hero.resume} <span className="arrow arrow--diag">↗</span>
              </a>
            ) : (
              <Link href={href(locale, '/contact')} className="btn btn--lg">
                {hero.secondaryCta} <span className="arrow">→</span>
              </Link>
            )}
          </div>
        </div>

        {/* Right Column: Editorial Visual Showcase */}
        <div
          className="hero__visual in-fade"
          style={{ '--d': '300ms' } as React.CSSProperties}
          aria-hidden="true"
        >
          <div className="hero__frame">
            {/* Ambient subtle blue backlight */}
            <div className="hero__glow" />

            {/* Editorial phone preview of real EasyNote app */}
            <div className="hero__phone">
              <div className="hero__phone-bar">
                <span className="hero__phone-speaker" />
              </div>
              <div className="hero__phone-screen">
                <Image
                  src="/photos/en/en1.jpg"
                  alt={hero.visualAlt}
                  width={340}
                  height={710}
                  priority
                  className="hero__phone-img"
                />
              </div>
            </div>

            {/* Floating editorial tech tags */}
            <div className="hero__chip hero__chip--mobile">
              <span className="hero__chip-dot" />
              <span className="hero__chip-text">{hero.tagMobile}</span>
            </div>

            <div className="hero__chip hero__chip--web">
              <span className="hero__chip-dot hero__chip-dot--blue" />
              <span className="hero__chip-text">{hero.tagWeb}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
