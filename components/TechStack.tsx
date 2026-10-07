import type { Dictionary } from '@/lib/dictionaries';

interface TechStackProps {
  dict: Dictionary;
}

export function TechStack({ dict }: TechStackProps) {
  const { stack } = dict;

  const categories = [
    {
      name: stack.groups.mobile,
      tools: ['Kotlin', 'Java', 'Jetpack Compose', 'Android SDK', 'Firebase', 'Room', 'Maps SDK'],
    },
    {
      name: stack.groups.web,
      tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML5 & Modern CSS'],
    },
    {
      name: stack.groups.backend,
      tools: ['Spring Boot', 'REST APIs', 'PostgreSQL', 'MySQL', 'MongoDB', 'Node.js', 'Docker'],
    },
    {
      name: stack.groups.tools,
      tools: ['Git', 'GitHub', 'CI/CD', 'Android Studio', 'VS Code', 'Postman'],
    },
  ];

  return (
    <section className="section section--ruled stack" id="stack">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">{stack.eyebrow}</span>
          <h2 className="section-title">{stack.title}</h2>
        </div>

        <div className="stack__grid" data-reveal>
          {categories.map((cat) => (
            <div key={cat.name} className="stack__column">
              <h3 className="stack__category-title mono">{cat.name}</h3>
              <ul className="stack__list" role="list">
                {cat.tools.map((tool) => (
                  <li key={tool} className="stack__item">
                    <span className="stack__dot" />
                    <span className="stack__name">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
