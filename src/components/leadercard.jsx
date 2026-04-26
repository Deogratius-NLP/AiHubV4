const LeaderCard = ({ leader }) => {
  const { name, role, bio, image } = leader;

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
        </div>
      </div>
    </div>
  );
};

export default LeaderCard;
