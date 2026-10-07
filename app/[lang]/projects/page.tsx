import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { locales, type Locale, href } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { projects } from '@/lib/projects';
import { ProjectPreviewMock } from '@/components/ProjectPreviewMock';
import { ContactCta } from '@/components/ContactCta';

interface ProjectsPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: ProjectsPageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = (locales.includes(lang as Locale) ? lang : 'en') as Locale;
  const dict = getDictionary(locale);

  return {
    title: dict.meta.projectsTitle,
    description: dict.meta.projectsDescription,
  };
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { lang } = await params;
  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  const locale = lang as Locale;
  const dict = getDictionary(locale);
  const { projects: t } = dict;

  return (
    <div className="projects-page">
      <div className="container">
        {/* Header */}
        <div className="section-head" data-reveal>
          <span className="eyebrow">{t.eyebrow}</span>
          <h1 className="section-title">{t.title}</h1>
          <p className="lead">{t.lead}</p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => {
            const projectUrl = href(locale, `/projects/${project.slug}`);

            return (
              <article key={project.slug} className="card-project" data-reveal>
                <Link href={projectUrl} className="card-project__cover" tabIndex={-1} aria-hidden="true">
                  <ProjectPreviewMock project={project} />
                </Link>

                <div className="card-project__body">
                  <span className="card-project__cat mono">
                    {project.category[locale]}
                  </span>

                  <h2 className="card-project__title">
                    <Link href={projectUrl}>{project.title}</Link>
                  </h2>

                  <p className="card-project__desc">{project.summary[locale]}</p>

                  <div className="card-project__footer">
                    <ul className="dot-list" role="list">
                      {project.stack.slice(0, 3).map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <ContactCta locale={locale} dict={dict} />
    </div>
  );
}
