import React from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBand from './components/StatsBand';
import ConcernSelector from './components/ConcernSelector';
import MarqueeStrip from './components/MarqueeStrip';
import Treatments from './components/Treatments';
import Doctor from './components/Doctor';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import ClinicGallery from './components/ClinicGallery';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Activate IntersectionObserver for viewport animations that replay upon re-entry
  useScrollReveal();

  return (
    <div className="clinic-app">
      <Header />
      <main id="main-content">
        <Hero />
        <StatsBand />
        <ConcernSelector />
        <MarqueeStrip />
        <Treatments />
        <Doctor />
        <WhyUs />
        <Process />
        <ClinicGallery />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
