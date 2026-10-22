import React, { useState } from 'react';
import { siteContent } from '../siteContent';
import ImageSlot from './ImageSlot';
import { Clock, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import './Treatments.css';

export default function Treatments() {
  const [activeTab, setActiveTab] = useState(siteContent.treatmentGroups[0].slug);
  const [activeHoverId, setActiveHoverId] = useState(null);

  const currentGroup = siteContent.treatmentGroups.find(g => g.slug === activeTab) || siteContent.treatmentGroups[0];

  return (
    <section className="treatments-section section-padding" id="treatments">
      <div className="container">
        
        {/* Section Header */}
        <div className="treatments-header reveal-item">
          <div>
            <span className="eyebrow">Clinical Specialties</span>
            <h2 className="section-title">Evidence-guided treatments.</h2>
          </div>
          <p className="treatments-header-desc">
            We focus on proven clinical modalities for skin clarity, scalp health, and non-ablative laser procedures. Every treatment begins with a private medical evaluation.
          </p>
        </div>

        {/* Large Pill Switcher */}
        <div className="treatment-pill-switcher-wrapper reveal-item">
          <div className="pill-switcher" role="tablist" aria-label="Treatment categories">
            {siteContent.treatmentGroups.map((group) => {
              const isActive = activeTab === group.slug;
              return (
                <button
                  key={group.slug}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${group.slug}`}
                  id={`tab-${group.slug}`}
                  className={`pill-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveTab(group.slug)}
                >
                  <span className="pill-btn-title">{group.category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Description */}
        <div className="category-meta reveal-item" id={`panel-${currentGroup.slug}`} role="tabpanel" aria-labelledby={`tab-${currentGroup.slug}`}>
          <p className="category-lead">{currentGroup.description}</p>
        </div>

        {/* Image-Led Asymmetrical Tiles Grid */}
        <div className="treatment-tiles-grid">
          {currentGroup.treatments.map((treatment, idx) => {
            const isFeatured = treatment.featured || idx === 0;
            const isHovered = activeHoverId === treatment.id;

            return (
              <article 
                key={treatment.id} 
                className={`treatment-tile reveal-item ${isFeatured ? 'tile-featured' : 'tile-standard'} ${isHovered ? 'is-hovered' : ''}`}
                onMouseEnter={() => setActiveHoverId(treatment.id)}
                onMouseLeave={() => setActiveHoverId(null)}
                onClick={() => setActiveHoverId(isHovered ? null : treatment.id)}
              >
                {/* Image Container with Zoom */}
                <div className="tile-image-wrapper">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="tile-img"
                    loading="lazy"
                  />
                  <div className="tile-gradient-overlay" />
                  
                  {/* Top Badges */}
                  <div className="tile-top-bar">
                    <span className="tile-number">0{idx + 1}</span>
                    <span className="tile-duration-badge">
                      <Clock size={13} strokeWidth={1.5} />
                      {treatment.duration}
                    </span>
                  </div>
                </div>

                {/* Always Visible Baseline Info */}
                <div className="tile-body">
                  <h3 className="tile-title">{treatment.name}</h3>
                  <p className="tile-desc">{treatment.description}</p>
                </div>

                {/* Sliding Protocol & Enquire Overlay */}
                <div className="tile-slide-panel">
                  <div className="panel-inner">
                    <div className="panel-protocol">
                      <CheckCircle2 size={16} strokeWidth={1.5} className="panel-icon" />
                      <span>{treatment.details}</span>
                    </div>
                    <div className="panel-action">
                      <a 
                        href="#appointment-form"
                        className="btn btn-primary btn-tile-enquire"
                      >
                        <span>Enquire Consultation</span>
                        <ArrowUpRight size={15} strokeWidth={1.5} />
                      </a>
                    </div>
                  </div>
                </div>

              </article>
            );
          })}
        </div>

        {/* Restrained Secondary Callout */}
        <div className="treatment-footer-cta reveal-item">
          <div className="footer-cta-card hairline-card">
            <div className="cta-text-block">
              <h4 className="cta-heading">Uncertain which treatment is right for you?</h4>
              <p className="cta-copy">
                A face-to-face consultation allows Dr. Shruti to diagnose your skin condition and advise on an appropriate, conservative treatment path.
              </p>
            </div>
            <a href="#appointment-form" className="btn btn-primary cta-btn">
              Schedule a Consultation
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
