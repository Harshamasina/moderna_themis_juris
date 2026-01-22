import { useState } from 'react';

const jobOpenings = [
  {
    id: 'litigation-arbitration-counsel-hyd',
    title: 'Litigation Associate / Sr.Associate',
    summary: 'Lead litigation and arbitration matters end-to-end with research-driven strategy and clear client communication.',
    experience: '3 - 8 years',
    location: 'Hyderabad',
    openings: '6',
    employmentType: 'Full Time, Permanent',
    roleCategory: 'Legal & Regulatory',
    education: 'UG: LLB in Any Specialization',
    responsibilities: [
      'Independently handling court appearances, case strategy, and execution',
      'Representing clients in hearings and proceedings; preparing and presenting arguments',
      'Drafting, reviewing, and filing pleadings, writs, briefs, appeals, and other legal documents',
      'Conducting legal research and providing strategic legal advice and outcome assessment',
      'Coordinating with clients, senior counsel, associates, and paralegals on litigation matters',
      'Maintaining client communication on case progress, risks, and resolution strategies',
      'Mentoring and managing junior associates and team members',
      'Advising on arbitration suitability and developing arbitration strategies',
      'Assessing legal risks and claim quantification using applicable models and legal principles',
      'Handling arbitration/litigation end-to-end: discovery, claims, notices, pleadings, evidence, and arguments',
      'Drafting petitions challenging arbitral awards and related applications',
      'Supporting business development by identifying opportunities and generating leads',
      'Creating legal content such as articles, alerts, and thought leadership pieces',
    ],
    prerequisites: [
      'Experience in handling court litigations and arbitration',
      'Excellent attention to detail with accurate, legally robust drafting',
      'Hands-on experience in corporate and commercial disputes',
      'Ability to work collaboratively in a team environment and meet deadlines',
      'Participation in or support for cross examination, including briefing seniors',
      'Demonstrated research work, including case law and technical research',
      'Experience with commercial suits',
      '3+ years of relevant practice',
    ],
  }
];

const CareersSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleJob = (id) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <section id="careers" className="section careers-section">
      <div className="section-heading">
        <div className="eyebrow">Careers</div>
        <h2>Build with a research-first legal team</h2>
        <p className="section-subtitle">
          Join a practice that blends rigorous legal research with decisive execution across health, food, and corporate matters.
        </p>
        <p className="section-subtitle">
          To apply for a role, email your CV and profile to{' '}
          <a href="mailto:info@modernathemisjurisopc.com" className="primary-link">
            info@modernathemisjurisopc.com
          </a>
        </p>
      </div>
      <div className="card-grid">
        {jobOpenings.map((job) => {
          const isOpen = expandedId === job.id;

          return (
            <article key={job.id} className={`glass-card career-card ${isOpen ? 'open' : ''}`}>
              <div className="career-card-top">
                {/* <div className="chip">Openings: {job.openings}</div> */}
                <div className="career-title">
                  <h3>{job.title}</h3>
                  <p>{job.summary}</p>
                </div>
                <div className="career-meta">
                  <span className="pill">{job.location}</span>
                  <span className="pill">Experience: {job.experience}</span>
                  <span className="pill">{job.employmentType}</span>
                </div>
                <div className="career-footer">
                  <div className="career-tags">
                    <span className="meta-chip">{job.roleCategory}</span>
                    <span className="meta-chip">Education: {job.education}</span>
                    <span className="meta-chip">Openings: {job.openings}</span>
                    {/* <span className="meta-chip">Req: {job.prerequisites.length} criteria</span> */}
                  </div>
                  <div className="career-actions">
                    <button
                      type="button"
                      className="primary-cta"
                      aria-expanded={isOpen}
                      aria-controls={`${job.id}-details`}
                      onClick={() => toggleJob(job.id)}
                    >
                      {isOpen ? 'Hide details' : 'View more'}
                    </button>
                  </div>
                </div>
              </div>

              <div
                className={`career-details ${isOpen ? 'open' : ''}`}
                id={`${job.id}-details`}
              >
                <div className="career-columns">
                  <div className="career-subcard">
                    <h4>Roles &amp; Responsibilities</h4>
                    <ul className="card-list">
                      {job.responsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="career-subcard">
                    <h4>Prerequisites</h4>
                    <ul className="card-list">
                      {job.prerequisites.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default CareersSection;
