import React from 'react';
import profile1 from '../assets/images/profile1.jpeg';
import profile2 from '../assets/images/profile2.jpeg';
import profile3 from '../assets/images/profile3.jpeg';

const OurTeam = () => {
    return (
        <section id="team" className="d-flex flex-column justify-content-center my-5 px-5" style={{ marginLeft: '7rem', marginRight: '7rem', fontFamily: 'generalsans-medium' }}>
            <div className="d-flex justify-content-between mb-5">
                <h1 style={{ fontFamily: 'Orbitron, sans-serif' }}>Our Team</h1>
            </div>
            <div className="row g-4">
                <div className="col-12 col-lg-4">
                    <div className="bg-white rounded-4 shadow-lg p-4 h-100 text-center hover-scale transition">
                        <div className="mb-4" style={{ marginTop: '-3rem' }}>
                            <img src={profile1} alt="person photo" className="rounded-circle shadow w-50" />
                        </div>
                        <h4>Jay Chen</h4>
                        <span className="fw-semibold d-block">CEO</span>
                        <p className="fst-italic small mt-2">
                            Jay began his career in the banking and finance sector, where he honed his skills and developed a deep understanding of the industry. Leveraging this foundation, he expanded into HR operations and outsourcing, successfully growing his businesses by delivering exceptional service to renowned international brands like Huawei, Coca-Cola, and GlaxoSmithKline.
                            CO2 Labs provides a solutions-based approach to champion human resource and outsourcing through strategic consultation and meticulously planned placements.
                        </p>
                    </div>
                </div>

                <div className="col-12 col-lg-4">
                    <div className="bg-white rounded-4 shadow-lg p-4 h-100 text-center hover-scale transition">
                        <div className="mb-4" style={{ marginTop: '-3rem' }}>
                            <img src={profile2} alt="person photo" className="rounded-circle shadow w-50" />
                        </div>
                        <h4>Alune</h4>
                        <span className="fw-semibold d-block">Development Project Manager</span>
                        <p className="fst-italic small mt-2">
                            With a background in IT software development, quality testing and web design, she brings a deep understanding of the technical and strategic aspects of project management. Known for her meticulous planning, effective communication, and ability to navigate challenges, she has consistently delivered high-quality software solutions on time and within budget.
                            Alune excels at fostering collaboration across cross-functional teams, ensuring that projects align with client objectives and business goals.
                        </p>
                    </div>
                </div>

                {/* Ron */}
                <div className="col-12 col-lg-4">
                    <div className="bg-white rounded-4 shadow-lg p-4 h-100 text-center hover-scale transition">
                        <div className="mb-4" style={{ marginTop: '-3rem' }}>
                            <img src={profile3} alt="person photo" className="rounded-circle shadow w-50" />
                        </div>
                        <h4>Ron</h4>
                        <span className="fw-semibold d-block">Business Development Lead</span>
                        <p className="fst-italic small mt-2">
                            With a strong background in business development for finance, logistics and real estate industries, Ron has successfully led initiatives that have expanded market reach and increased revenue for both emerging and established companies.
                            Known for his ability to identify new opportunities and forge lasting relationships, Ron excels in creating tailored solutions that meet client needs and align with business goals through thoughtful solutioning.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
