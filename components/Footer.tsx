import Link from 'next/link';
import { site } from '@/lib/site';
import { type Locale, href } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <Link href={href(locale)} className="footer__logo">
              {site.initials}
            </Link>
            <p className="footer__name">{site.name}</p>
            <p className="footer__tagline">{dict.footer.tagline}</p>
          </div>

          {/* Nav */}
          <nav className="footer__nav" aria-label={dict.footer.navLabel}>
            <ul className="footer__links" role="list">
              <li>
                <Link href={href(locale, '/#work')} className="link">
                  {dict.nav.work}
                </Link>
              </li>
              <li>
                <Link href={href(locale, '/#about')} className="link">
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link href={href(locale, '/#experience')} className="link">
                  {dict.nav.experience}
                </Link>
              </li>
              <li>
                <Link href={href(locale, '/contact')} className="link">
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social */}
          <div className="footer__social">
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              GitHub <span className="arrow arrow--diag">↗</span>
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              LinkedIn <span className="arrow arrow--diag">↗</span>
            </a>
            <a href={`mailto:${site.email}`} className="link">
              Email <span className="arrow arrow--diag">↗</span>
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {site.year} {site.name}. {dict.footer.rights}
          </p>
          <a href="#main" className="link footer__back-to-top">
            {dict.footer.backToTop} ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
