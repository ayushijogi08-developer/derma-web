import React, { useState, useMemo } from 'react';
import { siteContent } from '../siteContent';
import { MapPin, Phone, MessageSquare, Clock, CreditCard, ExternalLink, CheckCircle2 } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const currentDayIndex = useMemo(() => new Date().getDay(), []);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: 'General Dermatology Consultation',
    preferredDay: 'Monday',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  React.useEffect(() => {
    const handlePrefill = (e) => {
      if (e.detail && e.detail.treatment) {
        setFormData(prev => ({
          ...prev,
          treatment: e.detail.treatment
        }));
      }
    };
    window.addEventListener('prefill-appointment', handlePrefill);
    return () => window.removeEventListener('prefill-appointment', handlePrefill);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (validationError) setValidationError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setValidationError('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setValidationError('Please enter a valid 10-digit mobile number.');
      return;
    }

    // Client-side validated, show friendly success state and trigger optional WhatsApp flow
    setFormSubmitted(true);
  };

  const openWhatsAppRequest = () => {
    const msg = `Hello Dr. Shruti / Derma Care Team,%0A%0AI would like to request an appointment:%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Treatment:* ${encodeURIComponent(formData.treatment)}%0A*Preferred Day:* ${encodeURIComponent(formData.preferredDay)}%0A*Notes:* ${encodeURIComponent(formData.message || 'None')}`;
    window.open(`https://wa.me/${siteContent.contact.whatsappClean}?text=${msg}`, '_blank');
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        
        {/* Section Header */}
        <div className="contact-header reveal-item">
          <span className="eyebrow">Clinic Location & Hours</span>
          <h2 className="section-title">Visit Derma Care Clinic.</h2>
          <p className="section-description">
            Centrally situated opposite Korde Hospital in Jatharpeth, Akola. Accessible parking, private consultation rooms, and digital payment options.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="contact-grid">
          
          {/* Left Column: Hours Table & Direct Details */}
          <div className="contact-info-col reveal-item">
            
            {/* Hours Table with Auto Highlight for Today */}
            <div className="hours-card hairline-card">
              <div className="card-heading-row">
                <Clock size={18} strokeWidth={1.5} className="heading-icon" />
                <h3 className="card-box-title">Consultation Hours</h3>
              </div>
              <ul className="hours-table">
                {siteContent.hours.map((h) => {
                  const isToday = h.dayIndex === currentDayIndex;
                  return (
                    <li key={h.day} className={`hours-row ${isToday ? 'is-today' : ''}`}>
                      <span className="day-name">
                        {h.day}
                        {isToday && <span className="today-pill">Today</span>}
                      </span>
                      <span className={`day-time ${!h.isOpen ? 'closed' : ''}`}>
                        {h.hours}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <p className="hours-footnote">
                {siteContent.contact.appointmentsNote}
              </p>
            </div>

            {/* Address & Fast Contact Details */}
            <div className="address-card hairline-card">
              <div className="info-block">
                <div className="info-icon-wrapper">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div className="info-text-group">
                  <span className="info-label">Clinic Address</span>
                  <p className="info-value">{siteContent.location.fullAddress}</p>
                  <span className="info-subtext">Landmark: {siteContent.location.landmark}</span>
                </div>
              </div>

              <div className="info-block">
                <div className="info-icon-wrapper">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div className="info-text-group">
                  <span className="info-label">Direct Inquiries</span>
                  <p className="info-value">
                    <a href={`tel:${siteContent.contact.phoneClean}`} className="contact-link">
                      {siteContent.contact.phone}
                    </a>
                  </p>
                  <span className="info-subtext">Calls attended during consultation hours</span>
                </div>
              </div>

              <div className="info-block">
                <div className="info-icon-wrapper">
                  <MessageSquare size={20} strokeWidth={1.5} />
                </div>
                <div className="info-text-group">
                  <span className="info-label">WhatsApp Assistance</span>
                  <p className="info-value">
                    <a 
                      href={`https://wa.me/${siteContent.contact.whatsappClean}?text=Hello%20Derma%20Care,%20I%20would%20like%20to%20inquire%20about%20a%20consultation`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      {siteContent.contact.whatsapp}
                    </a>
                  </p>
                  <span className="info-subtext">Message for appointment queries</span>
                </div>
              </div>

              <div className="info-block">
                <div className="info-icon-wrapper">
                  <CreditCard size={20} strokeWidth={1.5} />
                </div>
                <div className="info-text-group">
                  <span className="info-label">Payment Modes</span>
                  <p className="info-value">{siteContent.contact.paymentsNote}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Appointment Form & Embedded Map */}
          <div className="contact-action-col reveal-item">
            
            {/* Interactive Appointment Request Form */}
            <div className="appointment-card hairline-card" id="appointment-form">
              <div className="card-heading-row">
                <span className="eyebrow">Direct Booking</span>
                <h3 className="card-box-title">Request an Appointment</h3>
                <p className="form-subnote">
                  Submit your details and our team will get in touch to confirm your scheduled slot.
                </p>
              </div>

              {formSubmitted ? (
                <div className="form-success-box" role="status" aria-live="polite">
                  <CheckCircle2 size={36} strokeWidth={1.5} className="success-icon" />
                  <h4 className="success-heading">Request Received</h4>
                  <p className="success-msg">
                    Thank you, <strong>{formData.name}</strong>. We have noted your request for {formData.treatment} on {formData.preferredDay}.
                  </p>
                  <p className="success-sub">
                    Our clinic desk will reach out on <strong>{formData.phone}</strong> to confirm your exact appointment timing.
                  </p>
                  
                  <div className="success-actions">
                    <button 
                      type="button" 
                      onClick={openWhatsAppRequest}
                      className="btn btn-primary btn-success-wa"
                    >
                      <span>Forward details via WhatsApp</span>
                      <ExternalLink size={15} strokeWidth={1.5} />
                    </button>
                    <button 
                      type="button" 
                      onClick={() => setFormSubmitted(false)}
                      className="btn-text-reset"
                    >
                      Submit another request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="appointment-form" noValidate>
                  {validationError && (
                    <div className="form-error-banner" role="alert">
                      {validationError}
                    </div>
                  )}

                  <div className="form-field-group">
                    <label htmlFor="patient-name" className="form-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="patient-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Deshmukh"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="patient-phone" className="form-label">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      id="patient-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-row-duo">
                    <div className="form-field-group">
                      <label htmlFor="treatment-select" className="form-label">
                        Area of Concern / Treatment
                      </label>
                      <select
                        id="treatment-select"
                        name="treatment"
                        value={formData.treatment}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="General Dermatology Consultation">General Dermatology Consultation</option>
                        <option value="Acne & Blemish Management">Acne & Blemish Management</option>
                        <option value="Pigmentation & Melasma">Pigmentation & Melasma</option>
                        <option value="Medical Hydra Facial">Medical Hydra Facial</option>
                        <option value="Hair PRP Therapy">Hair PRP Therapy</option>
                        <option value="Hair Fall & Scalp Care">Hair Fall & Scalp Care</option>
                        <option value="Q-Switched Laser Toning">Q-Switched Laser Toning</option>
                        <option value="Laser Tattoo Removal">Laser Tattoo Removal</option>
                      </select>
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="preferred-day" className="form-label">
                        Preferred Day
                      </label>
                      <select
                        id="preferred-day"
                        name="preferredDay"
                        value={formData.preferredDay}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="Monday">Monday (12:00 PM – 8:00 PM)</option>
                        <option value="Tuesday">Tuesday (12:00 PM – 8:00 PM)</option>
                        <option value="Wednesday">Wednesday (12:00 PM – 8:00 PM)</option>
                        <option value="Thursday">Thursday (Extended Hours / By Appt)</option>
                        <option value="Friday">Friday (12:00 PM – 8:00 PM)</option>
                        <option value="Saturday">Saturday (12:00 PM – 8:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="patient-message" className="form-label">
                      Brief Note or Questions (Optional)
                    </label>
                    <textarea
                      id="patient-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share any specific symptom, duration, or previous prescription..."
                      className="form-textarea"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-submit-form">
                    Confirm Appointment Request
                  </button>
                  <p className="form-privacy-note">
                    Your information is kept strictly confidential and used solely for appointment scheduling.
                  </p>
                </form>
              )}
            </div>

            {/* Embedded Google Map */}
            <div className="map-card hairline-card">
              <div className="map-header">
                <span className="map-title">Location on Map</span>
                <a 
                  href={siteContent.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-brass"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={14} strokeWidth={1.5} />
                </a>
              </div>
              <div className="map-iframe-container">
                <iframe
                  title="Derma Care Clinic Location Map"
                  src={siteContent.location.embedMapUrl}
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
