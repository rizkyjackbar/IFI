import React from 'react';
import aboutImage from '../assets/images/about-img.png';

const AboutUs = () => {
  return (
    <section className="py-5 mb-5" id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container d-lg-flex align-items-center gap-5 mt-lg-0 mt-5 px-lg-5 px-3">
        {/* Left Text */}
        <div className="d-flex flex-column align-items-lg-end align-items-center justify-content-center text-lg-end text-center col-lg-6 gap-4">
          <h1 data-aos="fade-up" data-aos-offset="0" data-aos-anchor-placement="bottom-bottom">
            About Us
          </h1>
          <h6 data-aos="fade-up" data-aos-offset="50" data-aos-anchor-placement="bottom-bottom">
            At CO2 Labs, we strive to provide simple yet powerful software solutions and expert consultation
            to help your business thrive in the digital world.
          </h6>
          {/* SVG line */}
          <div className="w-100" data-aos="fade-up" data-aos-offset="100" data-aos-anchor-placement="bottom-bottom">
            <svg height="81" viewBox="0 0 710 81" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-100">
              <path
                d="M10 71C105.403 30.6415 216.971 18.3204 319.353 25.5889C340.732 27.1067 361.503 31.7555 382.443 36.2074C415.148 43.1605 446.712 48.5625 480.309 48.2568C556.077 47.5674 627.671 31.4361 700 10"
                stroke="#EDEAE3"
                strokeWidth="20"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="col-lg-6 d-flex justify-content-center align-items-center mt-4 mt-lg-0"
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-easing="ease-in-out"
        >
          <img src={aboutImage} alt="About Us" className="img-fluid rounded-4" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
