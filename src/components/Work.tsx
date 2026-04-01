import "./styles/Work.css";

const projects = [
  {
    number: "01",
    title: "Airbnb Analytics — dbt + Snowflake",
    category: "Data Engineering · Analytics",
    description:
      "End-to-end analytics pipeline ingesting raw Airbnb data from AWS S3 into Snowflake through a Bronze → Silver → Gold medallion architecture. Gold layer exposes a star schema (fact_bookings + 3 dim tables) and an OBT for BI consumption. Includes custom macros, SCD Type 2 snapshots, and data quality tests.",
    tools: "dbt · Snowflake · AWS S3 · SQL · Python",
    href: "https://github.com/namithn1/airbnb-dbt-snowflake",
  },
];

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
              {projects.map((project) => (
                <div className="carousel-slide" key={project.number}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-link"
                  >
                    <div className="carousel-content project-card">
                      <div className="carousel-info">
                        <div className="carousel-number">
                          <h3>{project.number}</h3>
                        </div>
                        <div className="carousel-details">
                          <h4>{project.title}</h4>
                          <p className="carousel-category">{project.category}</p>
                          <p className="project-description">{project.description}</p>
                          <div className="carousel-tools">
                            <span className="tools-label">Tools</span>
                            <p>{project.tools}</p>
                          </div>
                          <span className="project-cta">
                            View on GitHub &rarr;
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
