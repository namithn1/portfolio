import "./styles/Work.css";

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="carousel-wrapper">
          <div className="carousel-track-container">
            <div className="carousel-track">
              <div className="carousel-slide">
                <div className="carousel-content" style={{ justifyContent: "center", alignItems: "center", minHeight: "320px" }}>
                  <div className="carousel-info" style={{ textAlign: "center" }}>
                    <div className="carousel-details">
                      <h4 style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)", opacity: 0.5 }}>Projects coming soon</h4>
                      <p className="carousel-category" style={{ opacity: 0.4 }}>
                        Case studies and data analytics projects are on the way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
