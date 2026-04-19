const Partnership = () => {
  return (
    <section id="partnership" className="partnership-section">
    <div className="container">
      <div className="partnership-cta">
        <div className="cta-content">
          <div className="cta-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx={9} cy={7} r={4} />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div className="cta-text">
            <h3>Become a Partner</h3>
            <p>
              Join our ecosystem of innovation and help shape the future of AI
              technology
            </p>
          </div>
          <a href="#contact" className="cta-button">
            <span>Partner With Us</span>
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Partnership;


