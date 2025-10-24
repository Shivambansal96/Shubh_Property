import { Home, Mail, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <Home className="logo-icon" />
          <span>Property Plug</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a href="#properties" className="nav-links" onClick={() => setIsMenuOpen(false)}>
              Properties
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </li>
          <li className="nav-item contact-info">
            <div className="contact-details">
              <div className="contact-item">
                <Phone size={16} />
                <span>+91 7432854909</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>info@propertyplug.com</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
