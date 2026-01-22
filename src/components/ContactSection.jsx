const ContactSection = () => {
  return (
    <section id="contact" className="section contact glass-panel">
      <div className="contact-left">
        <div className="section-heading contact-heading">
          <div className="eyebrow">Contact</div>
          <h2>Ready for decisive legal guidance?</h2>
          <p className="section-subtitle">
            Partner with a firm that understands the full lifecycle of healthcare, food, and pharmaceutical regulations.
          </p>
          <p className="section-subtitle">
            Share your matter and we will respond with a focused plan and timelines for next steps.
          </p>
        </div>
        <div className="contact-highlights">
          <span className="pill">Regulatory clarity</span>
          <span className="pill">Compliance playbooks</span>
          <span className="pill">Responsive counsel</span>
        </div>
        <div className="contact-actions">
          <a className="primary-cta" href="mailto:info@modernathemisjurisopc.com">
            info@modernathemisjurisopc.com
          </a>
          {/* <a className="ghost-cta" href="#about">
            Back to top
          </a> */}
        </div>
      </div>
      <div className="contact-right">
        <div className="glass-card contact-card">
          <div className="card-top">
            <span className="chip">Why us</span>
            <h3>Highly qualified legal research and advisory</h3>
          </div>
          <ul className="card-list">
            <li>Sector-specific insight across health and food ecosystems</li>
            <li>End-to-end support: research, compliance, and execution</li>
            <li>Clarity across every engagement</li>
            <li>Research-first strategy backed by clear regulatory interpretation</li>
            <li>Hands-on help for approvals, training, and operational compliance</li>
            <li>Litigation and disputes anchored in sector expertise</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
