import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-5">
      <div className="container text-center">
        <h2 className="mb-4">Our Services</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 border rounded">
              <h5>Website Development</h5>
              <p>Build responsive, modern websites tailored to your needs.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded">
              <h5>App Development</h5>
              <p>Create powerful mobile apps for Android and iOS platforms.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded">
              <h5>IT Support</h5>
              <p>24/7 tech support to keep your business running smoothly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
