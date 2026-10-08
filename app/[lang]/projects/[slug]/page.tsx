import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { locales, type Locale, href } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { projects, getProject } from '@/lib/projects';

interface CaseStudyPageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  return locales.flatMap((lang) =>
    projects.map((p) => ({
      lang,
      slug: p.slug,
    }))
  );
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const locale = (locales.includes(lang as Locale) ? lang : 'en') as Locale;
  const projectIcon = project.logo || '/photos/fs-seffaf.png';

  return {
    title: `${project.title}`,
    description: project.summary[locale],
    icons: {
      icon: projectIcon,
      apple: projectIcon,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { lang, slug } = await params;
  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  const locale = lang as Locale;
  const project = getProject(slug);
  if (!project) {
    notFound();
  }

  const dict = getDictionary(locale);
  const { caseStudy: t } = dict;

  return (
    <article className="case-study">
      <div className="container">
        {/* Back Link */}
        <div className="case-study__back">
          <Link href={href(locale, '/projects')} className="link">
            ← {t.back}
          </Link>
        </div>

        {/* Hero */}
        <header className="case-study__header" data-reveal>
          <div className="case-study__meta">
            <span className="mono">{project.category[locale]}</span>
            <span>•</span>
            <span className="mono">{project.platform[locale]}</span>
            {project.status && (
              <>
                <span>•</span>
                <span className="accent mono">{project.status[locale]}</span>
              </>
            )}
          </div>

          <h1 className="case-study__title">{project.title}</h1>
          <p className="case-study__statement">{project.statement[locale]}</p>

          {/* External Links */}
          <div className="case-study__links">
            {project.links.play && (
              <a
                href={project.links.play}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                {t.play} <span className="arrow arrow--diag">↗</span>
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                {t.live} <span className="arrow arrow--diag">↗</span>
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                {t.github} <span className="arrow arrow--diag">↗</span>
              </a>
            )}
          </div>
        </header>

        {/* The Problem */}
        {project.problem && (
          <section className="case-study__section" data-reveal>
            <h2 className="case-study__sec-title mono">{t.problem}</h2>
            <p className="case-study__prose">{project.problem[locale]}</p>
          </section>
        )}

        {/* The Solution */}
        {project.solution && (
          <section className="case-study__section" data-reveal>
            <h2 className="case-study__sec-title mono">{t.solution}</h2>
            <p className="case-study__prose">{project.solution[locale]}</p>
          </section>
        )}

        {/* What I Built */}
        {project.built && (
          <section className="case-study__section" data-reveal>
            <h2 className="case-study__sec-title mono">{t.built}</h2>
            <ul className="case-study__list" role="list">
              {project.built[locale].map((item, idx) => (
                <li key={idx} className="case-study__list-item">
                  <span className="case-study__list-bullet">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Tech Stack Pills */}
        <section className="case-study__section" data-reveal>
          <h2 className="case-study__sec-title mono">{t.stack}</h2>
          <div className="tag-list">
            {project.fullStack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Screens / Product Preview Gallery (if available) */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="case-study__section" data-reveal>
            <h2 className="case-study__sec-title mono">{t.screens}</h2>
            <div className="case-study__gallery">
              {project.gallery.map((g, idx) => (
                <Image
                  key={idx}
                  src={g.src}
                  alt={`${project.title} ${t.screenshot} ${idx + 1}`}
                  width={g.width}
                  height={g.height}
                  className="case-study__gallery-img"
                />
              ))}
            </div>
          </section>
        )}

        {/* Technical Challenges */}
        {project.challenges && (
          <section className="case-study__section" data-reveal>
            <h2 className="case-study__sec-title mono">{t.challenges}</h2>
            <ul className="case-study__list" role="list">
              {project.challenges[locale].map((challenge, idx) => (
                <li key={idx} className="case-study__list-item">
                  <span className="case-study__list-bullet">›</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Result / What Shipped */}
        {project.result && (
          <section className="case-study__section" data-reveal>
            <h2 className="case-study__sec-title mono">{t.result}</h2>
            <p className="case-study__prose">{project.result[locale]}</p>
          </section>
        )}
      </div>
    </article>
  );
}
