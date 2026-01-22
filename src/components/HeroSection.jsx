import logo from '../assets/logo.png';

const HeroSection = () => {
  return (
    <section id="about" className="hero">
      <div className="hero-pane glass-panel">
        <div className="hero-badge">Trusted Health, Corporate and Compliance Law Counsel</div>
        <div className="hero-grid">
          <div className="hero-copy">
            <h1>
              Moderna Themis Juris
            </h1>
            <span className="hero-accent">Jus Lex Quaestio</span>
            <p>
              Tailored legal research and advisory services for hospitals,
              preventive care, food, and pharmaceutical businesses. We decode
              complex statutory and regulatory frameworks to help you navigate
              compliance, mitigate risk, and elevate operational efficiency.
            </p>
            <div className="hero-actions">
              {/* <a className="primary-cta" href="mailto:info@modernathemisjurisopc.com">
                Schedule a Consultation
              </a> */}
              <a className="primary-cta" href="#research">
                View Research Areas
              </a>
            </div>
            <div className="hero-highlights">
              <div className="pill">Healthcare & Pharmaceuticals</div>
              <div className="pill">Food Safety & Standards</div>
              <div className="pill">Regulatory Compliance</div>
              <div className="pill">Legal Epidemiology</div>
            </div>
          </div>
          <div className="hero-visual glass-panel">
            <img src={logo} alt="Moderna Themis Juris crest" className="hero-logo" />
            {/* <div className="hero-stats">
              <div>
                <span className="stat-number">24/7</span>
                <span className="stat-label">Response on critical matters</span>
              </div>
              <div>
                <span className="stat-number">Pan-India</span>
                <span className="stat-label">Regulatory coverage</span>
              </div>
              <div>
                <span className="stat-number">End-to-End</span>
                <span className="stat-label">From research to execution</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
