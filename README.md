# Namith's portfolio
import React from 'react';

// Experience data
const experiences = [
  {
    role: 'Student Business Data Analyst',
    company: 'Kaiser Permanente',
    duration: 'Jan 2025 – May 2025',
    responsibilities: [
      'Engineered SLA improvements by building ARIMA and queuing-theory models in Python, improving forecast accuracy by 20% and reducing understaffing by 15%',
      'Developed SQL and pandas analyses to identify performance gaps and delivered a Tableau dashboard that cut average handle time by 10% and lifted first-call resolution by 12%',
      'Standardized SLA reporting by authoring SOPs and training 20+ analysts, achieving 100% compliance and halving report generation time'
    ]
  },
  {
    role: 'Quality Analyst',
    company: 'Amazon',
    duration: 'Nov 2023 – May 2024',
    responsibilities: [
      'Built SQL and Python ETL pipelines to ingest, transform, and geocode address data, ensuring 97% data quality for last-mile analytics',
      'Automated Excel Power Query and API integrations to reduce manual refresh effort by 80%',
      'Designed Power BI reports with DAX measures to monitor SLA breaches and operational KPIs'
    ]
  },
  {
    role: 'Data Analyst',
    company: 'Ernst & Young GDS',
    duration: 'Jul 2022 – May 2023',
    responsibilities: [
      'Developed SPFx web parts and automated SharePoint migrations via PowerShell, reducing setup time by 50%',
      'Authored complex T-SQL queries and created Power BI dashboards to visualize sales metrics and growth trends',
      'Architected Power Automate workflows for order tracking, enhancing process efficiency'
    ]
  }
];

// Projects data
const projects = [
  {
    title: 'Product Advertising Strategies',
    description: 'Performed EDA and multivariate regression in R to quantify ad-channel ROI and automate KPI reporting.',
    skills: ['R', 'Linear Regression', 'EDA', 'Tableau', 'SQL'],
    link: '#'
  },
  {
    title: 'NBA Streaming Market Expansion',
    description: 'Designed Alteryx spatial ETL pipelines and simulated ROI in Python to identify high-potential ZIP segments.',
    skills: ['Alteryx', 'Spatial Analytics', 'Python', 'ETL'],
    link: '#'
  },
  {
    title: 'Disney+ Customer Churn Analysis',
    description: 'Engineered features and trained XGBoost/RandomForest models to predict churn and built retention dashboards.',
    skills: ['Python', 'pandas', 'XGBoost', 'Power BI'],
    link: '#'
  },
  {
    title: 'Personal Stock Portfolio Dashboard',
    description: 'Built an interactive Excel dashboard with live API integrations and Python simulations for risk analysis.',
    skills: ['Excel', 'PivotTables', 'APIs', 'Python'],
    link: '#'
  }
];

// Card components
const ExperienceCard = ({ role, company, duration, responsibilities }) => (
  <div className="border rounded-2xl shadow p-4 mb-6">
    <h3 className="text-lg font-semibold">{role}, {company}</h3>
    <p className="text-sm text-gray-500 mb-2">{duration}</p>
    <ul className="list-disc list-inside text-sm">
      {responsibilities.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);

const ProjectCard = ({ title, description, skills, link }) => (
  <div className="border rounded-2xl shadow p-4 flex flex-col justify-between">
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm mb-3">{description}</p>
    </div>
    <div className="mt-auto">
      <div className="flex flex-wrap gap-2 mb-3">
        {skills.map(skill => (
          <span key={skill} className="text-xs px-2 py-1 border rounded-full">{skill}</span>
        ))}
      </div>
      <a href={link} className="text-blue-600 hover:underline text-sm">View Project →</a>
    </div>
  </div>
);

export default function Portfolio() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Namith Nagaraj Portfolio</h1>
        <p className="mt-2 text-gray-600">Business & Data Analyst Projects & Experience</p>
      </header>

      {/* Experience Section */}
      <section id="experience" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} {...exp} />
        ))}
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(proj => (
            <ProjectCard key={proj.title} {...proj} />
          ))}
        </div>
      </section>

      <footer className="mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Namith Nagaraj. All rights reserved.
      </footer>
    </div>
  );
}
