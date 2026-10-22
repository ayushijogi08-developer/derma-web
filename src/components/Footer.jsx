import React from 'react';
import { siteContent } from '../siteContent';
import { ShieldAlert, ArrowUpRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        
        {/* Top Footer Section */}
        <div className="footer-top-grid">
          
          {/* Clinic Brand Column */}
          <div className="footer-col brand-col">
            <a href="#" className="clinic-wordmark footer-wordmark">
              <span className="wordmark-title">{siteContent.clinicName}</span>
              <span className="wordmark-sub">{siteContent.clinicSubtitle}</span>
            </a>
            <p className="footer-tagline">
              {siteContent.tagline}
            </p>
            <div className="footer-doctor-badge">
              <span>Led by {siteContent.doctor.name}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-nav-list">
              <li><a href="#treatments">Clinical Treatments</a></li>
              <li><a href="#doctor">Meet Dr. Shruti</a></li>
              <li><a href="#why-us">Our Standards</a></li>
              <li><a href="#process">Your Visit</a></li>
              <li><a href="#reviews">Patient Reviews</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Treatments Shortlist */}
          <div className="footer-col">
            <h4 className="footer-heading">Care Focus</h4>
            <ul className="footer-nav-list">
              <li><a href="#treatments">Acne & Blemish Protocols</a></li>
              <li><a href="#treatments">Pigmentation & Melasma</a></li>
              <li><a href="#treatments">Medical Hydra Facial</a></li>
              <li><a href="#treatments">Hair PRP Restoration</a></li>
              <li><a href="#treatments">Q-Switched Laser Toning</a></li>
              <li><a href="#treatments">Laser Tattoo Removal</a></li>
            </ul>
          </div>

          {/* Clinic Hours & Address */}
          <div className="footer-col">
            <h4 className="footer-heading">Location & Hours</h4>
            <address className="footer-address">
              <p>{siteContent.location.street}</p>
              <p>{siteContent.location.city}, {siteContent.location.state} {siteContent.location.pincode}</p>
              <a 
                href={siteContent.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-brass footer-map-link"
              >
                <span>Google Maps Listing</span>
                <ArrowUpRight size={13} strokeWidth={1.5} />
              </a>
            </address>

            <div className="footer-hours-summary">
              <span className="hours-head">Consultation Hours:</span>
              <p>Mon–Wed, Fri–Sat: 12:00 PM – 8:00 PM</p>
              <p>Thursday: By appointment, extended</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

        </div>

        {/* Medical Disclaimer Callout */}
        <div className="footer-disclaimer-box">
          <div className="disclaimer-icon-wrapper">
            <ShieldAlert size={16} strokeWidth={1.5} />
          </div>
          <p className="disclaimer-text">
            {siteContent.disclaimer}
          </p>
        </div>

        {/* Hairline Divider */}
        <hr className="section-divider footer-divider" />

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="footer-bottom-bar">
          <p className="footer-copy">
            © {currentYear} {siteContent.clinicName} {siteContent.clinicSubtitle}. All rights reserved.
          </p>
          <div className="footer-payment-tag">
            <span>UPI & Mobile Payments Accepted</span>
            <span>·</span>
            <span>Appointments Recommended</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
