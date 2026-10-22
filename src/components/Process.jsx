import React from 'react';
import { siteContent } from '../siteContent';
import './Process.css';

export default function Process() {
  return (
    <section className="process-section section-padding" id="process">
      <div className="container">
        
        {/* Section Header */}
        <div className="process-header reveal-item">
          <span className="eyebrow">The Patient Journey</span>
          <h2 className="section-title">Your visit, from consultation to care.</h2>
          <p className="section-description">
            We structure your treatment journey thoughtfully so you always understand the rationale, expected outcomes, and maintenance steps.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="process-timeline">
          {siteContent.processTimeline.map((item, index) => (
            <div key={item.step} className="timeline-node reveal-item">
              <div className="node-marker">
                <span className="node-step">{item.step}</span>
                {index < siteContent.processTimeline.length - 1 && <span className="node-connector" />}
              </div>
              <div className="node-card hairline-card">
                <h3 className="node-title">{item.title}</h3>
                <p className="node-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
