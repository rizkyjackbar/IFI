import React, { useState } from 'react';
import '../AceMethodology.css';

const aceData = [
    {
        title: 'Assessment',
        subtitle: '& Insight Gathering',
        desc: 'Our process begins with an initial consultation to gather insights into your business needs and challenges. We work closely with your team to understand your objectives and gather all necessary information.',
        bullets: [
            'Initial consultation meetings',
            'Gathering business and technical requirements',
            'Conducting stakeholder interviews',
            'Understanding long-term business goals'
        ],
        bgColor: 'bg-light-custom',
        stroke: '#ADB8BA'
    },
    {
        title: 'Customization',
        subtitle: '& Strategic Planning',
        desc: 'We then develop a strategic plan and design tailored solutions that address your specific needs. This involves detailed planning, resource allocation, and design of bespoke solutions that align with your goals.',
        bullets: [
            'Strategic planning sessions',
            'Solution design and prototyping',
            'Resource and timeline planning',
            'Risk assessment and mitigation planning'
        ],
        bgColor: 'bg-dark-custom', // custom class
        stroke: '#EDEAE3'
    },
    {
        title: 'Execution',
        subtitle: '& Lifecycle Management',
        desc: 'We execute the strategic plan and manage the entire solution lifecycle, from implementation to optimization. This ensures the solutions are effectively integrated and continuously deliver value.',
        bullets: [
            'Implementation of the strategic plan',
            'Solution deployment and integration',
            'Lifecycle management and support',
            'Continuous performance evaluation and optimization'
        ],
        bgColor: 'bg-light-custom',
        stroke: '#ADB8BA'
    }
];

const AceMethodology = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section id="approach" className="py-5 mt-5 ace-section">
            <div className="text-center mb-5">
                <h1 className="fw-bold">ACE</h1>
                <h4 className="mt-2">Methodology for Strategic Consulting</h4>
            </div>
            <div className="d-flex flex-wrap w-100">
                {aceData.map((item, idx) => (
                    <div
                        key={idx}
                        className={`ace-card ${item.bgColor} p-4 flex-grow-1 flex-shrink-0`}
                        style={{
                            width: '33.3333%',
                            minHeight: '400px',
                            maxHeight: '550px',
                            overflow: 'hidden'
                        }}
                        onMouseEnter={() => setActiveIndex(idx)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >

                        <div className="text-start">
                            <h3>{item.title}</h3>
                            <h6>{item.subtitle}</h6>
                        </div>

                        <div className={`ace-content mt-3 ${activeIndex === idx ? 'show' : ''}`}>
                            <div className="my-3">
                                <span>{item.desc}</span>
                            </div>
                            <ul className="ps-4">
                                {item.bullets.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-center mt-4">
                            <svg
                                className={`arrow-icon ${activeIndex === idx ? 'rotate-0' : 'rotate-180'}`}
                                width="59"
                                height="23"
                                viewBox="0 0 59 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M56 20L29.5 3L3 20"
                                    stroke={item.stroke}
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AceMethodology;
