import "./styles/Work.css";

const projects = [
  {
    number: "01",
    title: "Airbnb Analytics: dbt + Snowflake",
    category: "Data Engineering · Analytics",
    description:
      "End-to-end analytics pipeline ingesting raw Airbnb data from AWS S3 into Snowflake through a Bronze, Silver and Gold medallion architecture. Gold layer exposes a star schema with fact_bookings and three dimension tables, plus an OBT for BI consumption. Includes custom macros, SCD Type 2 snapshots and data quality tests.",
    tools: ["dbt", "Snowflake", "AWS S3", "SQL", "Python"],
    href: "https://github.com/namithn1/airbnb-dbt-snowflake",
    cta: "View on GitHub",
  },
  {
    number: "02",
    title: "FMCG Lakehouse: Databricks & Delta Lake",
    category: "Data Engineering · Lakehouse",
    description:
      "Enterprise M&A data integration pipeline consolidating two companies' sales data into a unified Databricks Lakehouse. Implements a full Medallion Architecture (Bronze, Silver and Gold) with 30+ data quality fixes covering city typos, mixed date formats, negative prices and SHA-256 surrogate keys. Uses a smart incremental load strategy that re-aggregates affected months to prevent double-counting. Gold layer exposes a star schema and enriched view powering a BI dashboard and Databricks Genie for natural-language querying.",
    tools: ["Databricks", "PySpark", "Delta Lake", "Unity Catalog", "AWS S3", "SQL"],
    href: "https://github.com/namithn1/fmcg-databricks-pipeline",
    cta: "View on GitHub",
  },
  {
    number: "03",
    title: "NBA Store Café: Micromarketing Analysis",
    category: "Spatial Analytics · Location Strategy",
    description:
      "6-phase location strategy study to identify the optimal site for an NBA-themed store café in Atlanta. Used ArcGIS Pro for spatial mapping and Alteryx for demographic workflow automation across state, county, ZIP and block group levels. Selected HOBNOB Neighbourhood Tavern based on highest streaming spend per household ($1,731) and an estimated 159K target demographic users in trade area.",
    tools: ["ArcGIS Pro", "Alteryx", "ParseHub", "Spatial Analytics", "Tapestry Segmentation"],
    href: "https://github.com/namithn1/nba-micromarketing-analysis",
    cta: "View on GitHub",
  },
  {
    number: "04",
    title: "Tableau Public Dashboards",
    category: "Data Visualization · Dashboards",
    description:
      "A collection of interactive dashboards exploring real-world datasets across business KPIs, sales trends and exploratory data analysis. Each visualization is built around clarity and storytelling, with a focus on getting to the insight quickly.",
    tools: ["Tableau", "Data Storytelling", "Visual Analytics"],
    href: "https://public.tableau.com/app/profile/namith.nagaraj/vizzes",
    cta: "View on Tableau Public",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="project-grid">
          {projects.map((project) => (
            <a
              key={project.number}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              <div className="project-card">
                <div className="project-card-header">
                  <span className="project-number">{project.number}</span>
                  <span className="project-arrow">&#8599;</span>
                </div>
                <h4 className="project-title">{project.title}</h4>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-tools">
                  {project.tools.map((tool) => (
                    <span key={tool} className="tool-tag">{tool}</span>
                  ))}
                </div>
                <span className="project-cta">{project.cta} &rarr;</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
