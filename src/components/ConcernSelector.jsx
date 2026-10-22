import React, { useState } from 'react';
import { siteContent } from '../siteContent';
import ImageSlot from './ImageSlot';
import { ArrowRight, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import './ConcernSelector.css';

export default function ConcernSelector() {
  const concerns = siteContent.concerns || [];
  const [selectedId, setSelectedId] = useState(concerns[0]?.id || 'acne');

  const activeConcern = concerns.find(c => c.id === selectedId) || concerns[0];

  return (
    <section className="concern-selector-section section-padding" id="concerns">
      <div className="container">
        
        {/* Section Header */}
        <div className="concern-header text-center reveal-item">
          <span className="eyebrow">Interactive Care Guide</span>
          <h2 className="section-title">Find your treatment.</h2>
          <p className="section-description">
            Select your specific dermatological concern below to understand our clinical approach, recommended modalities, and typical duration.
          </p>
        </div>

        {/* Large Image Chips Carousel / Grid */}
        <div className="concern-chips-grid reveal-item" role="tablist" aria-label="Skin and hair concerns">
          {concerns.map((concern) => {
            const isSelected = selectedId === concern.id;
            return (
              <button
                key={concern.id}
                role="tab"
                aria-selected={isSelected}
                aria-controls={`concern-panel-${concern.id}`}
                className={`concern-chip-card ${isSelected ? 'is-selected' : ''}`}
                onClick={() => setSelectedId(concern.id)}
              >
                <div className="chip-image-container">
                  <img 
                    src={concern.image} 
                    alt={concern.name} 
                    className="chip-img"
                    loading="lazy"
                  />
                  <div className="chip-overlay" />
                </div>
                <div className="chip-caption">
                  <span className="chip-name">{concern.name}</span>
                  <span className="chip-subtitle">{concern.subtitle}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Recommendation Panel */}
        <div 
          className="concern-recommendation-panel hairline-card reveal-item"
          id={`concern-panel-${activeConcern.id}`}
          role="tabpanel"
        >
          <div className="rec-left">
            <div className="rec-badge">
              <Sparkles size={15} strokeWidth={1.5} />
              <span>Recommended Protocol for {activeConcern.treatmentCategory}</span>
            </div>
            
            <h3 className="rec-title">{activeConcern.recommendedTreatment}</h3>
            
            <div className="rec-duration">
              <Clock size={16} strokeWidth={1.5} className="rec-clock" />
              <span>Typical session duration: <strong>{activeConcern.duration}</strong></span>
            </div>

            <div className="rec-expect-box">
              <div className="expect-label">What to expect:</div>
              <p className="expect-text">{activeConcern.whatToExpect}</p>
            </div>

            <div className="rec-action-row">
              <a 
                href="#appointment-form"
                className="btn btn-primary"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('prefill-appointment', {
                    detail: { treatment: activeConcern.recommendedTreatment }
                  }));
                }}
              >
                <span>Book a Consultation for {activeConcern.name}</span>
                <ArrowRight size={16} strokeWidth={1.5} />
              </a>
              <a href="#treatments" className="link-brass">
                <span>Explore all treatments</span>
                <span>→</span>
              </a>
            </div>
          </div>

          <div className="rec-right">
            <div className="rec-image-box">
              <ImageSlot
                src={activeConcern.image}
                alt={activeConcern.name}
                aspectRatio="1/1"
                variant="soft"
                zoomOnHover={true}
              />
              <div className="rec-image-stamp">
                <CheckCircle2 size={16} strokeWidth={1.5} />
                <span>Dr. Shruti’s Clinical Approach</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
