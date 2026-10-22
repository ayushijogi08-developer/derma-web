import React from 'react';
import { siteContent } from '../siteContent';
import ImageSlot from './ImageSlot';
import { Award, Compass, HeartHandshake, CheckCircle } from 'lucide-react';
import './Doctor.css';

export default function Doctor() {
  const { doctor } = siteContent;

  return (
    <section className="doctor-section section-padding" id="doctor">
      <div className="container">
        
        <div className="doctor-grid">
          
          {/* Doctor Portrait ImageSlot (clearly marked placeholder for real doctor photo) */}
          <div className="doctor-visual reveal-item">
            <div className="doctor-image-frame">
              <ImageSlot
                src={doctor.image}
                alt={`Doctor Portrait Placeholder - Dr. Shruti Kale (Dabholkar)`}
                placeholderLabel="Dr. Shruti Kale (Dabholkar) — Portrait Placeholder"
                variant="soft"
                aspectRatio="4/5"
                caption="Consultant Dermatologist & Aesthetic Physician"
              />
              <div className="doctor-cred-badge">
                <Award size={20} strokeWidth={1.5} className="cred-badge-icon" />
                <div>
                  <span className="cred-title">Clinical Leadership</span>
                  <span className="cred-sub">{doctor.qualifications}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Bio & Philosophy */}
          <div className="doctor-narrative reveal-item">
            <span className="eyebrow">Medical Leadership</span>
            <h2 className="section-title">{doctor.name}</h2>
            <p className="doctor-role">{doctor.title}</p>

            <div className="doctor-bio-paragraphs">
              {doctor.bio.map((paragraph, index) => (
                <p key={index} className="bio-para">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Philosophy of Care Callout */}
            <div className="philosophy-box hairline-card">
              <div className="philosophy-header">
                <Compass size={18} strokeWidth={1.5} className="philosophy-icon" />
                <span className="philosophy-label">Philosophy of Care</span>
              </div>
              <blockquote className="philosophy-quote">
                “{doctor.philosophy}”
              </blockquote>
            </div>

            {/* Clinical Pillars */}
            <div className="doctor-badges">
              <div className="pillar-item">
                <CheckCircle size={15} strokeWidth={1.5} className="pillar-icon" />
                <span>Zero commercial pressure</span>
              </div>
              <div className="pillar-item">
                <CheckCircle size={15} strokeWidth={1.5} className="pillar-icon" />
                <span>Dedicated one-on-one consultation</span>
              </div>
              <div className="pillar-item">
                <CheckCircle size={15} strokeWidth={1.5} className="pillar-icon" />
                <span>Evidence-guided clinical roadmaps</span>
              </div>
            </div>

            <div className="doctor-action-row">
              <a href="#appointment-form" className="btn btn-primary">
                Book Consultation with Dr. Shruti
              </a>
              <a href="#why-us" className="link-brass">
                <span>Our Principles</span>
                <span>→</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
