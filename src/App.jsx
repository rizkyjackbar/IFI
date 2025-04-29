import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurServices from './components/OurServices';
import AceMethodology from './components/AceMethodology';
import AboutUs from './components/AboutUs';
import OurTeam from './components/OurTeam';
import OurPortfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

// Impor gambar
import webMaintenance from './assets/images/heroweb.png';
import websiteAndApp from './assets/images/herowebapp.png';
import ITSupportImage from './assets/images/heroitsupport.png';
import herothridpartyImage from './assets/images/herothridparty.png';
import Portfolio from './components/Portfolio';

const App = () => {
  const [selectedService, setSelectedService] = useState("Website & App Development");

  const services = {
    "Website Maintenance": {
      title: "Website Maintenance",
      desc: "Build modern, responsive, and dynamic websites for your business.",
      image: webMaintenance,
    },
    "Website & App Development": {
      title: "Website & App Development",
      desc: "Create custom mobile applications for iOS and Android platforms.",
      image: websiteAndApp,
    },
    "IT Support": {
      title: "IT Support",
      desc: "Improve your website's visibility and ranking on search engines.",
      image: ITSupportImage,
    },
    "3rd Party AI Solution": {
      title: "3rd Party AI Solution",
      desc: "Create user-friendly designs that enhance user experience and interface.",
      image: herothridpartyImage,
    },
  };

  return (
    <Router>
      <Navbar onSelectService={setSelectedService} />
      <Routes>
        <Route
          path="/"
          element={
            <Hero
              key="home"
              service={{
                title: "Where Code Meets Creativity",
                desc: "Harnessing the power of our Coding Collective to build solutions for your business needs.",
                image: websiteAndApp,
              }}
            />
          }
        />
        <Route
          path="/services/website-maintenance"
          element={<Hero key="website-maintenance" service={services["Website Maintenance"]} />}
        />
        <Route
          path="/services/website-app-development"
          element={<Hero key="website-app-development" service={services["Website & App Development"]} />}
        />
        <Route
          path="/services/it-support"
          element={<Hero key="it-support" service={services["IT Support"]} />}
        />
        <Route
          path="/services/third-party-ai-solution"
          element={<Hero key="third-party-ai-solution" service={services["3rd Party AI Solution"]} />}
        />
      </Routes>
      <OurServices />
      <AceMethodology />
      <AboutUs />
      <OurTeam />
      <OurPortfolio />
      <ContactUs />
      <Footer />
    </Router>
  );
};

export default App;
