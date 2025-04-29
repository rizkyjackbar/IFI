import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ service }) => {
  const isMainHero = service.title === "Where Code Meets Creativity";

  return (
    <section
      className="text-current d-flex align-items-center"
      style={{ minHeight: '100vh', backgroundColor: '#f9f8f6' }}
    >
      <div className="container">
      <div className="row align-items-center flex-column-reverse flex-lg-row text-lg-start">
          {/* Text */}
          <motion.div
            className="col-lg-6 mb-4 mb-lg-0"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="display-4 fw-bold"
              style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700 }}
            >
              {service.title}
            </h1>
            <p className="lead">{service.desc}</p>

            {isMainHero ? (
              <motion.a
                href="#features"
                className="button-explore mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Get a free consult
              </motion.a>
            ) : (
              <hr className="mt-4" style={{ width: '60px', borderTop: '3px solid #000' }} />
            )}
          </motion.div>

          {/* Image */}
          <motion.div
            className="col-lg-6 text-center mb-4 mb-lg-0"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={service.image}
              alt="Service visual"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
