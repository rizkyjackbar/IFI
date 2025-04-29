import React from 'react';
import {
  IconMaintenance,
  IconDevelopment,
  IconSupport,
  IconAiSolution
} from '../components/Icons';

const services = [
  {
    icon: <IconMaintenance color="#153147" size={32} />,
    title: 'Website Maintenance',
    desc: 'Keep your website running smoothly and securely...',
    link: '/service/web-main',
  },
  {
    icon: <IconDevelopment color="#153147" size={32} />,
    title: 'Website & App Development',
    desc: 'Transform your online presence with our custom solutions...',
    link: '/service/web-dev',
  },
  {
    icon: <IconSupport color="#153147" size={32} />,
    title: 'IT Support',
    desc: 'Experience peace of mind with our reliable IT support...',
    link: '/service/it-support',
  },
  {
    icon: <IconAiSolution color="#153147" size={32} />,
    title: '3rd Party AI Solution',
    desc: 'Leverage our expertise to find the best services for your business...',
    link: '/service/ai-solution',
  },
];

const OurServices = () => {
  return (
    <section
      id="service"
      className="py-5 text-white"
      style={{ backgroundColor: '#153147' }}
    >
      <div className="container text-center text-lg-start">
        <h2 className="mb-5 fw-bold" style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700 }}>
          Our Services
        </h2>

        <div className="row justify-content-center">
          {services.map((service, idx) => (
            <div className="col-md-6 col-lg-3 mb-4 d-flex" key={idx}>
              <div className="card shadow-sm rounded-4 p-4 text-dark w-100">
                <div
                  className="d-flex justify-content-center align-items-center rounded-circle mx-auto mb-3"
                  style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#E6F0F8',
                  }}
                >
                  {service.icon}
                </div>
                <h5 className="fw-bold text-center">{service.title}</h5>
                <p className="text-center mt-3">{service.desc}</p>
                <a
                  href={service.link}
                  className="text-decoration-underline text-primary fw-semibold text-center d-block mt-auto"
                >
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  );
};

export default OurServices;
