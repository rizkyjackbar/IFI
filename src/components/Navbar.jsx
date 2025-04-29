import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = ({ onSelectService }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`navbar navbar-expand-lg position-fixed`}>
      <div className="container d-flex align-items-center justify-content-between">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" width="55" height="auto" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''} ${isOpen ? 'mobile-menu open' : 'mobile-menu'}`} id="navbarNav">
          {isOpen && (
            <div className="mobile-close-wrapper d-lg-none">
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          )}
          <ul className="navbar-nav mx-auto mt-2">
            <li className={`nav-item dropdown ${isOpen ? 'show-dropdown' : ''}`}>
              <div className="nav-link-wrapper">
                <a className="nav-link fs-5 text-black dropdown-toggle-icon" href="#">
                  Our Services
                </a>
              </div>
              <ul className="dropdown-menu p-3">
                <li className="dropdown-item" onClick={() => onSelectService("Website Maintenance")}>
                  <Link to="/services/website-maintenance" className="d-flex align-items-center">
                    <i className="fas fa-laptop-code icon-container me-3"></i>
                    <div>
                      <span className='underlined-title'>Website Maintenance</span>
                      <p className="text-muted mt-2">Build modern, responsive, and dynamic websites for your business.</p>
                    </div>
                  </Link>
                </li>
                <li className="dropdown-item" onClick={() => onSelectService("Website & App Development")}>
                  <Link to="/services/website-app-development" className="d-flex align-items-center">
                    <i className="fas fa-mobile-alt icon-container me-3"></i>
                    <div>
                      <span className='underlined-title'>Website & App Development</span>
                      <p className="text-muted mt-2">Create custom mobile applications for iOS and Android platforms.</p>
                    </div>
                  </Link>
                </li>
                <li className="dropdown-item" onClick={() => onSelectService("IT Support")}>
                  <Link to="/services/it-support" className="d-flex align-items-center">
                    <i className="fas fa-search icon-container me-3"></i>
                    <div>
                      <span className='underlined-title'>IT Support</span>
                      <p className="text-muted mt-2">Improve your website's visibility and ranking on search engines.</p>
                    </div>
                  </Link>
                </li>
                <li className="dropdown-item" onClick={() => onSelectService("3rd Party AI Solution")}>
                  <Link to="/services/third-party-ai-solution" className="d-flex align-items-center">
                    <i className="fas fa-pencil-ruler icon-container me-3"></i>
                    <div>
                      <span className='underlined-title'>3rd Party AI Solution</span>
                      <p className="text-muted mt-2">Create user-friendly designs that enhance user experience and interface.</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item px-2">
              <div className="nav-link-wrapper">
                <Link to="/about Us" className="fs-5 nav-link text-black">About</Link>
              </div>
            </li>
            <li className="nav-item px-2">
              <div className="nav-link-wrapper">
                <Link to="/services" className="fs-5 nav-link text-black">Portfolio</Link>
              </div>
            </li>
            <li className="nav-item px-2">
              <div className="nav-link-wrapper">
                <Link to="/contact" className="fs-5 nav-link text-black">Contact</Link>
              </div>
            </li>
          </ul>

          <button className="button-navbar d-none d-lg-block">Get Started Today!</button>
          {isOpen && (
            <button className="button-navbar d-lg-none">Get Started Today!</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
