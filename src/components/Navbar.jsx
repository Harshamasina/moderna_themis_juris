import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo_fav.png';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', closeMenu);
    window.addEventListener('keyup', handleKey);
    return () => {
      window.removeEventListener('resize', closeMenu);
      window.removeEventListener('keyup', handleKey);
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <header className="nav-bar glass-panel">
      <div className="nav-brand">
        <img src={logo} alt="Moderna Themis Juris logo" className="nav-logo" />
        <div className="brand-text">
          <span className="brand-name">Moderna Themis Juris</span>
          {/* <span className="brand-tagline">Jus Lex Quaestio</span> */}
        </div>
      </div>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`} id="site-navigation">
        {navLinks.map((link) => (
          <button
            key={link.id}
            type="button"
            className="nav-link"
            onClick={() => scrollToSection(link.id)}
          >
            {link.label}
          </button>
        ))}
        <a className="nav-mobile-cta" href="#research">
          Research Areas
        </a>
      </nav>
      <div className="nav-actions">
        <a className="nav-cta nav-cta-desktop" href="#research">
          Research Areas
        </a>
        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          aria-label="Toggle navigation menu"
          aria-controls="site-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FiX className="menu-icon" /> : <FiMenu className="menu-icon" />}
        </button>
      </div>
      <div
        className={`nav-screen ${menuOpen ? 'visible' : ''}`}
        onClick={() => setMenuOpen(false)}
        role="presentation"
      />
    </header>
  );
};

export default Navbar;
