import Image from 'next/image';
import type { Dictionary } from '@/lib/dictionaries';

interface AboutProps {
  dict: Dictionary;
}

export function About({ dict }: AboutProps) {
  const { about } = dict;

  return (
    <section className="section section--ruled about" id="about">
      <div className="container">
        <div className="about__grid">
          {/* Left Column: Portrait & Beyond Code */}
          <div className="about__sidebar" data-reveal>
            <div className="about__photo-wrap">
              <Image
                src="/photos/f.jpg"
                alt={about.photoAlt}
                width={480}
                height={560}
                className="about__photo"
              />
              <div className="about__photo-overlay" />
            </div>

            <div className="about__beyond">
              <span className="about__beyond-title mono">{about.beyondTitle}</span>
              <p className="about__beyond-text">{about.beyondText}</p>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="about__content" data-reveal>
            <span className="eyebrow">{about.eyebrow}</span>
            <p className="about__hello mono">{about.hello}</p>
            <h2 className="about__headline">{about.title}</h2>

            <div className="about__body">
              {about.body.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="about__highlights">
              <div className="about__stat">
                <span className="about__stat-num mono">01</span>
                <span className="about__stat-label">Mobile & Native Android</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-num mono">02</span>
                <span className="about__stat-label">Full-Stack & Next.js Web</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-num mono">03</span>
                <span className="about__stat-label">APIs & Cloud Services</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
