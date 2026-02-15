 const Contact = () => {
  return (
    <section id="contact" className="contact-section">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">Contact Us</span>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-description">
          Have questions or want to join our community? We'd love to hear from
          you!
        </p>
      </div>
      <div className="contact-wrapper">
        <div className="contact-info" data-aos="fade-right">
          <div className="info-card">
            <div className="info-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx={12} cy={10} r={3} />
              </svg>
            </div>
            <h3>Location</h3>
            <p>
              Mbeya
              <br />
              Mbeya University of Science and Technology(MUST)
            </p>
          </div>
          <div className="info-card">
            <div className="info-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3>Phone</h3>
            <p>+255 682 929 923</p>
          </div>
          <div className="info-card">
            <div className="info-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h3>Email</h3>
            <p>
              ai.signalprocessinghub@gmail.com
              <br />
              ai.signalprocessinghub@gmail.com
            </p>
          </div>
        </div>
        <form className="contact-form" data-aos="fade-left">
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required=""
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required=""
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              required=""
            />
            <label htmlFor="subject">Subject</label>
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows={5}
              required=""
              defaultValue={""}
            />
            <label htmlFor="message">Message</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
  );
};

export default Contact;

