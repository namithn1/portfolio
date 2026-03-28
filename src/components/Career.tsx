import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Data Analyst</h4>
                <h5>Kaiser Permanente · Pasadena, CA</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed ARIMA and Prophet time series forecasting models in
              Python to predict call center staffing demand, achieving a 12%
              reduction in SLA breaches. Designed SQL pipelines feeding
              real-time Tableau dashboards for executive KPI monitoring.
              Automated weekly reporting workflows, cutting manual effort by
              30%, and identified $162K in operational savings through
              workforce capacity analysis.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>Amazon · Bengaluru, IN</h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Led a Data Quality and Governance initiative using SQL and
              GeoStudio to cleanse and standardize geospatial address datasets,
              improving last-mile delivery accuracy. Delivered $1.5M+ in annual
              operational savings by resolving large-scale data quality defects.
              Built Tableau KPI dashboards for real-time SLA compliance tracking
              and collaborated across engineering and operations in an Agile
              framework using Jira.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>Ernst &amp; Young (EY) · Bengaluru, IN</h5>
              </div>
              <h3>2022–23</h3>
            </div>
            <p>
              Built enterprise-grade Power BI dashboards with advanced DAX,
              drill-through reports, and dynamic slicers, reducing client
              dependency on manual reporting by 40%. Deployed end-to-end ETL
              pipelines from SharePoint and SQL Server. Automated repetitive
              workflows using Power Automate and PowerApps, saving 15+ hours
              per week across cross-functional teams.
            </p>
          </div>
        </div>
        <div className="career-education">
          <h2>
            Education <span>&</span>
            <br /> background
          </h2>
          <div className="career-info">
            <div className="career-timeline">
              <div className="career-dot"></div>
            </div>
            <div className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>MS, Business Analytics</h4>
                  <h5>University of California, Irvine</h5>
                </div>
                <h3>2025</h3>
              </div>
              <p>
                VP of Operations, Merage Analytics Club. Coursework spanning
                machine learning, data engineering, statistical modeling,
                and business strategy.
              </p>
            </div>
            <div className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>BTech, Electronics &amp; Communication</h4>
                  <h5>Christ University, Bengaluru</h5>
                </div>
                <h3>2022</h3>
              </div>
              <p>
                Head of the Student Welfare Organisation. Member, IEEE
                Community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
