import logo from '../assets/logo.png';

const quickLinks = [
  { label: 'About', href: '/' },
  { label: 'Research Areas', href: '#research' },
  { label: 'Compliance', href: '#research' },
  // { label: 'Training', href: '#training' },
  // { label: 'Legal Epidemiology', href: '#epidemiology' },
  { label: 'Contact', href: '#research' },
];

const Footer = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-shell glass-panel">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="Themis holding scales" className="footer-logo" />
            <div className="footer-brand-copy">
              <h4>Moderna Themis Juris</h4>
              <p>
                Integrated legal research, advisory, and compliance partners for healthcare,
                pharmaceutical, and food enterprises operating across India.
              </p>
            </div>
          </div>
          <div className="footer-links">
            <h5>Navigate</h5>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-contact">
            <h5>Connect</h5>
            <p>Email</p>
            <a href="mailto:info@modernathemisjurisopc.com" className="footer-contact-link">
              info@modernathemisjurisopc.com
            </a>
            <p>Availability</p>
            <span className="footer-pill">Strategic advisory • Compliance programs • Litigation</span>
          </div>
        </div>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} Moderna Themis Juris OPC.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
