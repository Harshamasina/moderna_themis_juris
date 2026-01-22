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

const ResearchSection = () => {
  return (
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
  );
};

export default ResearchSection;
