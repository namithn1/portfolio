import "./styles/Certifications.css";

const certs = [
  {
    issuer: "Microsoft",
    title: "Microsoft Certified: Power BI Data Analyst Associate",
    meta: "PL-300 · Earned Nov 2025 · Expires Nov 2026",
  },
  {
    issuer: "Microsoft",
    title: "Microsoft Certified: Fabric Analytics Engineer Associate",
    meta: "DP-600 · Earned Dec 2025 · Expires Dec 2026",
  },
  {
    issuer: "Alteryx",
    title: "Alteryx Designer Core Certified",
    meta: "Core Certification",
  },
  {
    issuer: "McKinsey & Company",
    title: "McKinsey Forward Program",
    meta: "Leadership & Problem Solving",
  },
];

const Certifications = () => {
  return (
    <div className="cert-section section-container">
      <div className="cert-container">
        <h2>
          Certifications <span>&</span>
          <br /> credentials
        </h2>
        <div className="cert-grid">
          {certs.map((cert, i) => (
            <div className="cert-card" key={i}>
              <p className="cert-issuer">{cert.issuer}</p>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-meta">{cert.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
