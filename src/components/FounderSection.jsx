const FounderSection = () => {
  return (
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
  );
};

export default FounderSection;
