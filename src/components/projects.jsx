import { useEffect, useMemo, useRef } from 'react';
import projects from '../data/projects.json';

const ASSET_MODULES = import.meta.glob('../assets/*', {
  eager: true,
  import: 'default',
});

const ASSET_URLS = Object.entries(ASSET_MODULES)
  .filter(([path]) => /\.(png|jpe?g|svg)$/i.test(path))
  // Avoid brand marks and small logos for big project imagery.
  .filter(([path]) => {
    const p = path.toLowerCase();
    return !p.includes('logo') && !p.includes('vodacom') && !p.includes('vite');
  })
  .map(([, url]) => url);

function fnv1aHash(input) {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  // Convert to unsigned 32-bit.
  return h >>> 0;
}

function pickAssetUrl(seed) {
  if (!ASSET_URLS.length) return '';
  const idx = fnv1aHash(seed) % ASSET_URLS.length;
  return ASSET_URLS[idx];
}

const Projects = () => {
  const railRef = useRef(null);
  const cardsRef = useRef(null);

  const items = useMemo(() => {
    return projects.map((p) => ({
      ...p,
      imageUrl: pickAssetUrl(`${p.id}:${p.title}:${p.topic}`),
    }));
  }, []);

  useEffect(() => {
    const root = cardsRef.current;
    if (!root) return;

    const cards = Array.from(root.querySelectorAll('[data-project-card="true"]'));
    if (!cards.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add('in-view');
        }
      },
      { threshold: 0.22 }
    );

    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  const scrollByCards = (dir) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector('[data-project-card="true"]');
    const cardW = card ? card.getBoundingClientRect().width : 420;
    rail.scrollBy({ left: dir * (cardW + 18), behavior: 'smooth' });
  };

  const onCardMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <section id="projects" className="projects-showcase-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">Project Showcase</h2>
          <p className="section-description">
            A few builds we are proud of, designed with clean UX and real-world impact in mind.
          </p>
        </div>

        <div className="projects-rail-shell" ref={cardsRef}>
          <div className="projects-rail-controls">
            <button
              type="button"
              className="projects-rail-btn"
              onClick={() => scrollByCards(-1)}
              aria-label="Scroll projects left"
            >
              ←
            </button>
            <button
              type="button"
              className="projects-rail-btn"
              onClick={() => scrollByCards(1)}
              aria-label="Scroll projects right"
            >
              →
            </button>
          </div>

          <div className="projects-rail" ref={railRef}>
            {items.map((p, idx) => (
              <article
                className="project-job-card"
                data-project-card="true"
                key={p.id}
                style={{ '--d': `${idx * 70}ms` }}
                onMouseMove={onCardMove}
              >
                <div className="project-job-card-inner">
                  <div className="project-job-media" aria-hidden="true">
                    {p.imageUrl ? (
                      <img src={p.imageUrl} alt="" loading="lazy" />
                    ) : (
                      <div className="project-job-media-fallback" />
                    )}
                    <div className="project-job-media-overlay" />
                  </div>

                  <div className="project-job-content">
                    <div className="project-job-topline">
                      <span className="project-job-topic">{p.topic}</span>
                    </div>

                    <h3 className="project-job-title">{p.title}</h3>
                    <p className="project-job-summary">{p.summary}</p>

                    <a
                      className="project-job-link"
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>View on GitHub</span>
                      <span className="project-job-link-arrow" aria-hidden="true">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
