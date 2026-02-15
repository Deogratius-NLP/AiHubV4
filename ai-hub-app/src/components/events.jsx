const Events = () => {
  return (
      <section id="events" className="events-section">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">Events</span>
        <h2 className="section-title">Upcoming Events &amp; Workshops</h2>
        <p className="section-description">
          Join us for exciting events, workshops, and conferences that bring
          together the brightest minds in AI and signal processing.
        </p>
      </div>
      <div className="events-grid">
        <div className="event-card" data-aos="fade-up">
          <div className="event-date">
            <span className="date-day">15</span>
            <span className="date-month">Jan</span>
          </div>
          <div className="event-content">
            <span className="event-tag">Workshop</span>
            <h3>Deep Learning Fundamentals</h3>
            <p>
              Learn the core concepts of deep learning, neural networks, and
              their applications in real-world scenarios.
            </p>
            <div className="event-meta">
              <span className="event-location">📍 Online</span>
              <span className="event-time">⏰ 2:00 PM</span>
            </div>
            <a href="#" className="event-link">
              Learn More →
            </a>
          </div>
        </div>
        <div className="event-card" data-aos="fade-up" data-aos-delay={100}>
          <div className="event-date">
            <span className="date-day">19</span>
            <span className="date-month">Jan</span>
          </div>
          <div className="event-content">
            <span className="event-tag">Conference</span>
            <h3>AI Innovation Summit</h3>
            <p>
              Join industry leaders and researchers as they discuss the latest
              breakthroughs in artificial intelligence.
            </p>
            <div className="event-meta">
              <span className="event-location">📍 Main Campus</span>
              <span className="event-time">⏰ 9:00 AM</span>
            </div>
            <a href="#" className="event-link">
              Learn More →
            </a>
          </div>
        </div>
        <div className="event-card" data-aos="fade-up" data-aos-delay={200}>
          <div className="event-date">
            <span className="date-day">24</span>
            <span className="date-month">Feb</span>
          </div>
          <div className="event-content">
            <span className="event-tag">Hackathon</span>
            <h3>AI Hackathon 2026</h3>
            <p>
              3 Weeks Coding competition where teams build innovative AI
              solutions to solve real-world problems.
            </p>
            <div className="event-meta">
              <span className="event-location">📍 Tech Hub</span>
              <span className="event-time">⏰ All Day</span>
            </div>
            <a href="#" className="event-link">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Events;

