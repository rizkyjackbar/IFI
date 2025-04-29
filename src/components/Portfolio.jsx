import React from 'react';
import portfolio1 from '../assets/images/portfolio.png';
import portfolio2 from '../assets/images/portfolio-1.png';
import portfolio3 from '../assets/images/portfolio-2.png';
import portfolio4 from '../assets/images/portfolio-3.png';
import portfolio5 from '../assets/images/portfolio-4.png';

const portfolios = [
    {
        img: portfolio1,
        title: 'AOTC Cosmetics',
        link: 'https://aotc.sg/',
    },
    {
        img: portfolio2,
        title: 'Nosh Kitchen Website',
        link: 'https://noshkitchen.com.sg',
    },
    {
        img: portfolio3,
        title: 'Michelah Event Organizer Singapore',
        link: 'https://micelah.com',
    },
    {
        img: portfolio4,
        title: 'Joywaltzstudio Academy',
        link: 'https://pianistprodigy.com/',
    },
    {
        img: portfolio5,
        title: 'Octopay Payment',
        link: 'https://octopay.asia/',
    },
];

const OurPortfolio = () => {
    return (
        <section
            id="portfolio"
            className="text-bgbase"
            style={{
                marginTop: '5rem',
                backgroundColor: 'rgba(21, 49, 71, 1)',
                padding: '5rem 7rem',
                color: 'rgba(249, 248, 246, 1)',
                fontFamily: 'generalsans-medium',
            }}
        >
            <h1 className="mb-5" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Our Portfolio
            </h1>
            <div className="row justify-content-center g-4">
                {portfolios.map((item, index) => (
                    <div key={index} className="col-md-4 col-lg-3 col-10">
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none text-reset"
                        >
                            <div className="rounded overflow-hidden shadow-sm position-relative">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="img-fluid rounded transition-transform"
                                    style={{ transition: 'transform 0.5s ease-in-out' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                />
                            </div>
                            <h5 className="mt-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                                {item.title}
                            </h5>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurPortfolio;
