const training = [
  'Tailored compliance programs for healthcare, food, and pharma',
  'Hands-on guidance for operations, quality, and legal teams',
  'Templates, playbooks, and escalation protocols that scale',
];

const compliance = [
  'Regulatory pathways mapped for hospitals, pharma, and food ventures',
  'Authority liaison, licensing upkeep, and audit readiness with clear owners',
  'Escalation trees and reporting cadence tailored to regulated operations',
];

const TrainingSection = () => {
  return (
    <section id="training" className="section">
      <div className="section-heading">
        <div className="eyebrow">Training & Compliance Programs</div>
        <h2>Equip teams to meet standards every day</h2>
        <p className="section-subtitle">
          Custom training that translates regulations into actionable
          workflows for operations, quality, and leadership teams.
        </p>
      </div>
      <div className="training-layout">
        <article className="glass-card training-card">
          <div className="pill-row">
            <span className="pill">Training</span>
          </div>
          <ul className="card-list">
            {training.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="glass-card training-card">
          <div className="pill-row">
            <span className="pill">Compliance</span>
          </div>
          <ul className="card-list">
            {compliance.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default TrainingSection;
