const LeaderCard = ({ leader }) => {
  const { name, role, bio, image, social } = leader;

  return (
    <div className="leader-card" data-aos="fade-up">
      <div className="leader-card-inner">
        <div className="leader-image-wrapper">
          <div className="leader-image-bg"></div>
          <div className="leader-image">
            <img src={image} alt={name} className="leader-photo" />
          </div>
          <div className="leader-glow"></div>
        </div>
        <div className="leader-content">
          <h3 className="leader-name">{name}</h3>
          <p className="leader-role">{role}</p>
          <p className="leader-bio">{bio}</p>
          <div className="leader-social">
            <a href={social.linkedin} aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                {/* LinkedIn SVG path */}
              </svg>
            </a>
            <a href={social.twitter} aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                {/* Twitter SVG path */}
              </svg>
            </a>
            <a href={`mailto:${social.email}`} aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {/* Email SVG path */}
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderCard;