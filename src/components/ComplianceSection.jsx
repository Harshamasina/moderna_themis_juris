const approvals = [
  'Statutory compliance advisory for health and food businesses',
  'Obtaining approvals from relevant regulatory authorities',
  'Licensing of know-how, technology, and IP assets',
];

const ComplianceSection = () => {
  return (
    <section id="compliance" className="section split">
      <article className="glass-card">
        <div className="card-top">
          <span className="chip">Compliance & Regulatory Approvals</span>
          <h3>Licensing, approvals, and statutory assurance</h3>
          <p>
            From statutory reviews to hands-on execution with authorities, we
            secure the clearances you need to move quickly and confidently.
          </p>
        </div>
        <ul className="card-list">
          {approvals.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
      <article className="glass-card">
        <div className="card-top">
          <span className="chip">Corporate Advisory & M&A</span>
          <h3>Deals engineered for compliance</h3>
          <p>
            Mergers, acquisitions, and partnerships in health and food
            sectors, designed to satisfy regulatory scrutiny without slowing
            momentum.
          </p>
          <ul className="inline-list">
            <li>Regulatory diligence</li>
            <li>Risk-mitigation playbooks</li>
            <li>Transaction-ready documentation</li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default ComplianceSection;
