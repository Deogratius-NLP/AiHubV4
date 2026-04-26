import { useEffect, useRef, useState } from 'react';
import classImg from '../assets/class.jpg';

const StatsCounter = () => {
  const statsRef = useRef(null);
  const targets = { members: 50, projects: 20, events: 10 };
  const [counts, setCounts] = useState({ members: 0, projects: 0, events: 0 });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!statsRef.current || animated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);

          ['members', 'projects', 'events'].forEach((key) => {
            let current = 0;
            const increment = targets[key] / (2000 / 16);
            const timer = setInterval(() => {
              current += increment;
              if (current >= targets[key]) {
                setCounts((prev) => ({ ...prev, [key]: targets[key] }));
                clearInterval(timer);
              } else {
                setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
              }
            }, 16);
          });

          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <section
      id="stats"
      className="ai-hub-stats-section"
      style={{ backgroundImage: `url(${classImg})` }}
    >
      <div className="ai-hub-stats-overlay" />
      <div className="container ai-hub-stats-container">
        <div className="ai-hub-hero-stats" ref={statsRef}>
          <div className="ai-hub-stat-item">
            <div className="ai-hub-stat-number">{counts.members}+</div>
            <div className="ai-hub-stat-label">Active Members</div>
          </div>
          <div className="ai-hub-stat-item">
            <div className="ai-hub-stat-number">{counts.projects}+</div>
            <div className="ai-hub-stat-label">Projects</div>
          </div>
          <div className="ai-hub-stat-item">
            <div className="ai-hub-stat-number">{counts.events}+</div>
            <div className="ai-hub-stat-label">Events</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
