import React from 'react';
import '../ContactUs.css';

const ContactUs = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="row justify-content-between align-items-start mb-5">
        <div className="col-md-6">
          <h1>Contact Us</h1>
        </div>
        <div className="col-md-6 d-flex justify-content-center justify-content-md-end gap-4 mt-4 mt-md-0">
          <a href="https://maps.app.goo.gl/sXvWLYMD6nfN7pK3A" target="_blank" rel="noopener noreferrer">
            <img src="/icons/map.svg" alt="Map" />
          </a>
          <a href="mailto:info@co2labs.com">
            <img src="/icons/mail.svg" alt="Email" />
          </a>
          <button className="btn p-0">
            <img src="/icons/phone.svg" alt="Phone" />
          </button>
        </div>
      </div>

      <div className="row gy-5">
        <div className="col-lg-6">
          <form className="bg-white p-4 p-md-5 rounded shadow-lg">
            <h4 className="mb-4">Hi there, how can we help?</h4>
            <input type="text" className="form-control bg-light mb-3" placeholder="Your Name" required />
            <input type="email" className="form-control bg-light mb-3" placeholder="Yourmail@example.com" required />
            <textarea className="form-control bg-light mb-3" rows="4" placeholder="Ask Our About Services" />
            <h5 className="mt-3">Where Did You Hear About Us?</h5>
            <div className="d-flex flex-wrap gap-3 my-3">
              {['Linkedin', 'Instagram', 'Job Ads', 'Events and Seminars', 'Other'].map((item) => (
                <div className="form-check d-flex align-items-center gap-2" key={item}>
                  <input className="form-check-input" type="radio" name="source" id={item} value={item} />
                  <label className="form-check-label" htmlFor={item}>{item}</label>
                </div>
              ))}
            </div>
            <button type="submit" className="btn btn-dark">Send</button>
          </form>
        </div>
        <div className="col-lg-6">
          <iframe
            className="w-100 h-100 rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1882.4776136128512!2d103.8008668418283!3d1.274634948208806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1b27c7a1b85f%3A0xd6085c5205635a1c!2sCoding%20Collective!5e0!3m2!1sen!2sen!4v1721874615960!5m2!1sen!2sen"
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
