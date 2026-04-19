import must from "../assets/MUST.png"
import Voda from "../assets/Vodacom-Logo.wine.svg"

const Sponsorship = () => {
  return (
    <section id="sponsors" className="sponsors-section">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">Our Partners</span>
        <h2 className="section-title">Trusted by Industry Leaders</h2>
        <p className="section-description">
          Collaborating with world-class organizations to drive innovation and
          create meaningful impact in AI and signal processing.
        </p>
      </div>
      {/* Sponsors Grid */}
      <div className="sponsors-grid">
        <div className="sponsor-card">
          <div className="sponsor-logo">
            <img src= {must} alt="Vodacom" className="sponsor-logo-img" />
          </div>
          <p className="sponsor-description">Mbeya University of Science and Technology</p>
        </div>
        <div className="sponsor-card">
          <div className="sponsor-logo">
            <img src={must} alt="Vodacom" className="sponsor-logo-img" />
          </div>
          <p className="sponsor-description">Data safari</p>
        </div>
        <div className="sponsor-card">
          <div className="sponsor-logo">
            <img src={Voda} alt="Vodacom" className="sponsor-logo-img" />
          </div>
          <p className="sponsor-description">Orange ML</p>
        </div>
        <div className="sponsor-card">
          <div className="sponsor-logo">
            <img src={Voda} alt="Vodacom" className="sponsor-logo-img" />
          </div>
          <p className="sponsor-description">AI for Good</p>
        </div>
      
      </div>
    </div>
  </section>
  );
};

export default Sponsorship;


