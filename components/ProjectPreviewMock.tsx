import Image from 'next/image';
import type { Project } from '@/lib/projects';

interface ProjectPreviewMockProps {
  project: Project;
}

export function ProjectPreviewMock({ project }: ProjectPreviewMockProps) {
  const { preview } = project;

  if (preview.kind === 'phones' && preview.images && preview.images.length >= 1) {
    const [img1, img2] = preview.images;
    return (
      <div className="project-preview project-preview--phones">
        <div className="phone-mock phone-mock--front">
          <Image
            src={img1.src}
            alt={`${project.title} screen 1`}
            width={260}
            height={530}
            className="phone-mock__img"
          />
        </div>
        {img2 && (
          <div className="phone-mock phone-mock--back">
            <Image
              src={img2.src}
              alt={`${project.title} screen 2`}
              width={240}
              height={490}
              className="phone-mock__img"
            />
          </div>
        )}
      </div>
    );
  }

  if (preview.kind === 'browser') {
    return (
      <div className="project-preview project-preview--browser">
        <div className="browser-mock">
          <div className="browser-mock__bar">
            <div className="browser-mock__dots">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
            </div>
            <div className="browser-mock__url">
              <span>https://ucardent.com</span>
            </div>
          </div>
          <div className="browser-mock__viewport">
            <div className="browser-mock__hero">
              <span className="browser-mock__badge">Dental Clinic</span>
              <h4 className="browser-mock__title">Modern Diş Sağlığı & Gülüş Tasarımı</h4>
              <p className="browser-mock__sub">Randevu & Tedavi Bilgileri</p>
              <div className="browser-mock__cta">Randevu Al →</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (preview.kind === 'ai') {
    return (
      <div className="project-preview project-preview--ai">
        <div className="ai-mock">
          <div className="ai-mock__header">
            <span className="ai-mock__dot" />
            <span className="ai-mock__title mono">FindBest · AI Assistant</span>
          </div>
          <div className="ai-mock__chat">
            <div className="ai-bubble ai-bubble--user">
              &quot;Find the best ergonomic desk chair under $300&quot;
            </div>
            <div className="ai-bubble ai-bubble--bot">
              <span className="ai-bubble__label">FindBest AI:</span>
              Comparing 14 models across lumbar support, durability and reviews...
              <div className="ai-card">
                <div className="ai-card__name">Top Pick: ErgoFlex Pro</div>
                <div className="ai-card__score">98% match · $249</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Fallback for wide image if present
  if (preview.images && preview.images[0]) {
    return (
      <div className="project-preview project-preview--wide">
        <Image
          src={preview.images[0].src}
          alt={project.title}
          width={preview.images[0].width}
          height={preview.images[0].height}
          className="project-preview__img"
        />
      </div>
    );
  }

  return null;
}
