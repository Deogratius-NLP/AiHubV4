import { leadersData } from '../data/Leaderdata';
import LeaderCard from './leadercard';

const LeadersSection = () => {
  return (
    <section id="leaders" className="leaders-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Leadership</span>
          <h2 className="section-title">Meet Our Leaders</h2>
          <p className="section-description">
            Visionary leaders driving innovation and excellence in AI and signal processing,
            guiding our community towards groundbreaking achievements.
          </p>
        </div>

        <div className="leaders-grid">
          {leadersData.map((leader) => (
            <LeaderCard key={leader.id} leader={leader} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadersSection;