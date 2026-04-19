const About = () => {
  return (
    <section id="about" className="about-section">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">About Us</span>
        <h2 className="section-title">
          Eternity of Innovation &amp; Excellence
        </h2>
        <p className="section-description">
          Years of dedication to advancing artificial intelligence and signal
          processing, building a legacy of innovation and community impact.
        </p>
      </div>
      <div className="about-container" data-aos="fade-up">
        <div className="about-card-premium">
          <div className="card-glow" />
          <div className="card-content">
            <div className="mission-vision-grid">
              {/* Mission Section */}
              <div className="mission-vision-item mission">
                <div className="mv-icon mission-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                    <polyline points="13 2 13 9 20 9" />
                    <path d="M12 17v-6m-3 3h6" />
                  </svg>
                </div>
                <h3>Our Mission</h3>
                <p>
                  To pioneer cutting-edge research and innovation in Artificial
                  Intelligence and Signal Processing, empowering the next
                  generation of technologists and researchers to solve
                  real-world challenges through collaborative excellence.
                </p>
              </div>
              {/* Divider */}
              <div className="divider" />
              {/* Vision Section */}
              <div className="mission-vision-item vision">
                <div className="mv-icon vision-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                </div>
                <h3>Our Vision</h3>
                <p>
                  To become a global leader in AI and Signal Processing
                  innovation, fostering a vibrant ecosystem where creativity
                  meets technology, and where every member contributes to
                  transforming industries and society.
                </p>
              </div>
            </div>
          </div>
          <div className="card-border-gradient" />
        </div>
      </div>
     </div>
     </section>
    );
};

export default About;

