import React from 'react';
import { siteContent } from '../siteContent';
import './WhyUs.css';

export default function WhyUs() {
  return (
    <section className="why-us-section section-padding" id="why-us">
      <div className="container">
        
        {/* Section Header */}
        <div className="why-us-header reveal-item">
          <span className="eyebrow">Our Clinical Standard</span>
          <h2 className="section-title">Principles of quiet confidence.</h2>
          <p className="section-description">
            We avoid commercial shortcuts, fleeting beauty trends, and exaggerated promises. Our clinic is built on foundational dermatological integrity.
          </p>
        </div>

        {/* Editorial Asymmetrical Numbered Grid */}
        <div className="principles-grid">
          {siteContent.principles.map((p) => (
            <div key={p.number} className="principle-card hairline-card reveal-item">
              <div className="principle-top">
                <span className="principle-number">{p.number}</span>
                <span className="principle-dot" />
              </div>
              <h3 className="principle-title">{p.title}</h3>
              <p className="principle-text">{p.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
