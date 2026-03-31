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
                <h4>Data Analyst</h4>
                <h5>Kaiser Permanente · Pasadena, CA</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built ARIMA and Prophet forecasting models in Python to predict
              call center staffing demand across 10+ departments, cutting SLA
              breaches by 12%. Engineered automated SQL pipelines feeding
              real-time Tableau KPI dashboards for 50+ business users,
              eliminating manual reporting and reducing turnaround time by 60%.
              Streamlined recurring reporting workflows in Python, reducing
              analyst effort by 30%, and uncovered $162K in annual savings
              through workforce capacity analysis.
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
              Spearheaded a data quality and governance initiative using SQL
              and GeoStudio to clean, deduplicate, and standardize 10M+
              address records, improving last-mile delivery accuracy and
              generating $1.5M+ in annual savings. Deployed automated SQL
              validation scripts to eliminate recurring data integrity
              incidents. Collaborated cross-functionally in Agile sprints using
              Jira, owning data deliverables end-to-end from sprint planning
              through UAT sign-off.
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
              Delivered 20+ enterprise Power BI dashboards with advanced DAX,
              drill-through reports, and dynamic slicers for financial services
              clients, reducing manual reporting dependency by 40%. Implemented
              end-to-end ETL pipelines using Azure Data Factory and SQL Server.
              Automated reporting workflows across 3 business units using Power
              Automate and PowerApps, saving 15+ hours per week and reducing
              error rates by 25%.
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
