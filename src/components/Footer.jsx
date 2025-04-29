import React from 'react';
import '../Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section bg-dark text-white pt-5 pb-4 px-4 px-lg-5">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5 mb-5 mb-lg-0 d-flex flex-column justify-content-between">
            <h3 className="mb-4">Let’s Grow With CO2 Labs</h3>
            <div>
              <h5>Get Exclusive Updates From Us</h5>
              <form className="d-flex mt-3">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Yourmail@example.com"
                  className="form-control rounded-start-pill me-2"
                  required
                />
                <button type="submit" className="btn btn-warning rounded-end-pill fw-semibold text-black">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-wrap gap-5 mt-5 mt-lg-0">
            <ul className="list-unstyled">
              <h6>Services</h6>
              <li><a href="/service/web-main" className="text-white text-decoration-none">Web Maintenance</a></li>
              <li><a href="/service/web-dev" className="text-white text-decoration-none">Web & App Development</a></li>
              <li><a href="/service/it-support" className="text-white text-decoration-none">IT Service</a></li>
              <li><a href="/service/ai-solution" className="text-white text-decoration-none">3rd Party AI Solution</a></li>
            </ul>
            <ul className="list-unstyled">
              <h6>About</h6>
              <li><button className="btn btn-link text-white text-decoration-none px-0">Our Approach</button></li>
              <li><button className="btn btn-link text-white text-decoration-none px-0">Our Team</button></li>
              <li><button className="btn btn-link text-white text-decoration-none px-0">Our Portfolio</button></li>
            </ul>
            <ul className="list-unstyled">
              <h6>Contact</h6>
              <li className="d-flex align-items-center">
                <i className="bx bxs-phone fs-5 me-2"></i> +65-8118-1595
              </li>
              <li className="d-flex align-items-center">
                <i className="bx bxl-gmail fs-5 me-2"></i> info@co2labs.com
              </li>
              <li className="d-flex align-items-center">
                <i className="bx bx-map-alt fs-5 me-2"></i> 100D Pasir Panjang Road
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mt-5 border-top pt-3">
          <span>©2024 CO2 Labs. All Right Reserved</span>
          <div className="d-flex gap-4 mt-3 mt-sm-0">
            <a href="/faq" className="text-white text-decoration-none">FAQ</a>
            <a href="/termspolicy" className="text-white text-decoration-none">Terms & Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
