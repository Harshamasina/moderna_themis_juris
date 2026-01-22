const EpidemiologySection = () => {
  return (
    <section id="epidemiology" className="section split">
      <article className="glass-card">
        <div className="card-top">
          <span className="chip">Legal Epidemiology</span>
          <h3>Evidence-based policy support</h3>
          <p>
            Studies and interventions to address public health challenges and
            evaluate how policies affect people, driving equitable rules for
            disease prevention, health promotion, and population health.
          </p>
        </div>
        <ul className="card-list">
          <li>Policy impact assessments</li>
          <li>Program design for public health outcomes</li>
          <li>Data-backed advocacy and reporting</li>
        </ul>
      </article>
      <article className="glass-card accent-card">
        <div className="card-top">
          <span className="chip">Litigation & Dispute Resolution</span>
          <h3>Defend with precision</h3>
          <p>
            Litigation support across medical negligence, consumer protection,
            and regulatory proceedings with strategies anchored in research
            and sector expertise.
          </p>
          <ul className="inline-list">
            <li>Medical negligence matters</li>
            <li>Consumer protection litigation</li>
            <li>Regulatory enforcement response</li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default EpidemiologySection;
