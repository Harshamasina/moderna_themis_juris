import logo from '../assets/logo.png';
import Footer from './Footer';

const practiceAreas = [
  {
    title: 'Healthcare & Pharmaceuticals',
    subtitle: 'Regulatory compliance and IP strength',
    points: [
      'Regulatory compliance under drug and medical device laws',
      'Standards for medical devices and healthcare practices',
      'Intellectual property protection and enforcement',
    ],
    badge: 'Healthcare Law',
  },
  {
    title: 'Food Safety & Standards',
    subtitle: 'Confidence across supply chains',
    points: [
      'Compliance with FSSAI regulations and food safety laws',
      'Labelling, packaging, and advertising requirements',
      'Regulations for additives, ingredients, and imports/exports',
    ],
    badge: 'Food Law',
  },
  {
    title: 'Food Adulteration & Consumer Protection',
    subtitle: 'Defensible products and swift recalls',
    points: [
      'Advising on offences under food adulteration laws',
      'Food contamination matters and product recalls',
      'Consumer disputes and regulatory enforcement actions',
    ],
    badge: 'Consumer Safety',
  },
  {
    title: 'Corporate & Commercial Advisory',
    subtitle: 'Strategic, compliant growth',
    points: [
      'Mergers, acquisitions, and strategic transactions',
      'Legal due diligence and compliance reviews',
      'Drafting and negotiation of commercial contracts and NDAs',
    ],
    badge: 'Corporate',
  },
];

const approvals = [
  'Statutory compliance advisory for health and food businesses',
  'Obtaining approvals from relevant regulatory authorities',
  'Licensing of know-how, technology, and IP assets',
];

const training = [
  'Tailored compliance programs for healthcare, food, and pharma',
  'Hands-on guidance for operations, quality, and legal teams',
  'Templates, playbooks, and escalation protocols that scale',
];

const Landing = () => {
  return (
    <main className="page">
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
                <div className='pill'>Legal Epidemiology</div>
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

      <section id="founder" className="section">
        <div className="section-heading">
          <div className="eyebrow">Founder</div>
          <h2>Leadership rooted in science and strategy</h2>
          <p className="section-subtitle">
            Translating deep research pedigree into decisive corporate execution for regulated industries.
          </p>
        </div>
        <a
          className="glass-panel founder-shell founder-link"
          href="https://maheshkandula.com/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="founder-grid">
            <div className="founder-portrait">
              <div className="portrait-frame">
                <img
                  src="https://maheshkandula.com/mahesh_pic.png"
                  alt="Portrait of Mahesh Kandula"
                  className="founder-photo"
                />
              </div>
              <div className="founder-meta">
                <h3>Mahesh Kandula</h3>
                <span>Founder</span>
              </div>
            </div>
            <div className="founder-copy">
              <p>
                Mahesh Kandula is a multidisciplinary entrepreneur with deep expertise spanning life sciences
                innovation and complex corporate transactions. As a scientist and founder, he is the sole inventor
                of more than 100 novel drug molecules across major therapeutic areas, with programs advanced from
                discovery to clinical trials. He holds multiple patents and has collaborated with global pharmaceutical
                partners, bringing strong capabilities in IP strategy and scientific leadership.
              </p>
              <p>
                In parallel, Mr. Kandula has extensive experience in mergers and acquisitions, court-based restructuring,
                private equity investments, and joint ventures, including complex cross-border transactions. He advises on
                transaction structuring, regulatory compliance, and implementation across multiple jurisdictions, combining
                scientific insight with sophisticated corporate and strategic execution.
              </p>
            </div>
          </div>
        </a>
      </section>

      <section id="research" className="section">
        <div className="section-heading">
          <div className="eyebrow">Research Areas</div>
          <h2>Focused expertise for highly regulated sectors</h2>
          <p className="section-subtitle">
            Deep experience across healthcare, pharmaceuticals, food safety, and
            consumer protection to keep your business compliant and resilient.
          </p>
        </div>
        <div className="card-grid">
          {practiceAreas.map((area) => (
            <article key={area.title} className="glass-card">
              <div className="card-top">
                <span className="chip">{area.badge}</span>
                <h3>{area.title}</h3>
                <p>{area.subtitle}</p>
              </div>
              <ul className="card-list">
                {area.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

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

      <section id="training" className="section">
        <div className="section-heading">
          <div className="eyebrow">Training & Compliance Programs</div>
          <h2>Equip teams to meet standards every day</h2>
          <p className="section-subtitle">
            Custom training that translates regulations into actionable
            workflows for operations, quality, and leadership teams.
          </p>
        </div>
        <article className="glass-card">
          <ul className="card-list">
            {training.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

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

      <section id="contact" className="section contact glass-panel">
        <div className="contact-left">
          <h2>Ready for decisive legal guidance?</h2>
          <p>
            Partner with a firm that understands the full lifecycle of
            healthcare, food, and pharmaceutical regulations.
          </p>
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
              <li>Glassmorphic clarity across every engagement</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Landing;
