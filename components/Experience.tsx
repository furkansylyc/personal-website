import type { Dictionary } from '@/lib/dictionaries';

interface ExperienceProps {
  dict: Dictionary;
}

export function Experience({ dict }: ExperienceProps) {
  const { experience } = dict;

  return (
    <section className="section section--ruled experience" id="experience">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">{experience.eyebrow}</span>
          <h2 className="section-title">{experience.title}</h2>
        </div>

        <div className="experience__timeline">
          {experience.items.map((item, idx) => (
            <div key={idx} className="experience__item" data-reveal>
              <div className="experience__left">
                <span className="experience__idx mono">0{idx + 1}</span>
                <span className="experience__role">{item.role}</span>
                <span className="experience__context">{item.context}</span>
              </div>

              <div className="experience__right">
                <p className="experience__detail">{item.detail}</p>
                <div className="tag-list">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
