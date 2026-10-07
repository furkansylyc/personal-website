import Link from 'next/link';
import { featuredProjects } from '@/lib/projects';
import { type Locale, href } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';
import { ProjectPreviewMock } from './ProjectPreviewMock';

interface SelectedWorkProps {
  locale: Locale;
  dict: Dictionary;
}

export function SelectedWork({ locale, dict }: SelectedWorkProps) {
  const { work } = dict;

  return (
    <section className="section section--ruled selected-work" id="work">
      <div className="container">
        {/* Section Header */}
        <div className="section-head" data-reveal>
          <span className="eyebrow">{work.eyebrow}</span>
          <h2 className="section-title">{work.title}</h2>
          <p className="lead">{work.lead}</p>
        </div>

        {/* Editorial Horizontal Rows */}
        <div className="selected-work__rows">
          {featuredProjects.map((project, index) => {
            const projectNum = `0${index + 1}`;
            const projectUrl = href(locale, `/projects/${project.slug}`);

            return (
              <article
                key={project.slug}
                className="project-row"
                data-reveal
                style={{ '--row-hue': project.hue } as React.CSSProperties}
              >
                <div className="project-row__inner">
                  {/* Left Column: Metadata & Descriptions */}
                  <div className="project-row__meta">
                    <div className="project-row__top">
                      <span className="project-row__num mono">{projectNum}</span>
                      <span className="project-row__sep">—</span>
                      <span className="project-row__cat mono">
                        {project.category[locale]}
                      </span>
                    </div>

                    <h3 className="project-row__title">
                      <Link href={projectUrl}>{project.title}</Link>
                    </h3>

                    <p className="project-row__desc">{project.summary[locale]}</p>

                    <div className="project-row__stack">
                      <ul className="dot-list" role="list">
                        {project.stack.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="project-row__cta">
                      <Link href={projectUrl} className="link link--accent">
                        {work.caseStudy} <span className="arrow">→</span>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Visual Case-Study Preview */}
                  <div className="project-row__visual">
                    <Link href={projectUrl} tabIndex={-1} aria-hidden="true" className="project-row__visual-link">
                      <ProjectPreviewMock project={project} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All Projects Footer Link */}
        <div className="selected-work__footer" data-reveal>
          <Link href={href(locale, '/projects')} className="btn btn--lg">
            {work.viewAll} <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
