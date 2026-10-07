import type { Dictionary } from '@/lib/dictionaries';

interface CapabilitiesBarProps {
  dict: Dictionary;
}

export function CapabilitiesBar({ dict }: CapabilitiesBarProps) {
  const { capabilities } = dict;

  return (
    <section className="capabilities" aria-label={capabilities.label}>
      <div className="container">
        <div className="capabilities__grid" data-reveal>
          {capabilities.items.map((item, idx) => (
            <div key={idx} className="capabilities__col">
              <span className="capabilities__tag mono">{item.label}</span>
              <p className="capabilities__text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
