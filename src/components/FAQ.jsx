import React, { useState } from 'react';
import { siteContent } from '../siteContent';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section section-padding" id="faq">
      <div className="container-narrow">
        
        {/* Section Header */}
        <div className="faq-header text-center reveal-item">
          <span className="eyebrow">Patient Inquiries</span>
          <h2 className="section-title">Frequently asked questions.</h2>
          <p className="section-description">
            Transparent guidance regarding consultations, appointments, laser procedures, and clinical policies.
          </p>
        </div>

        {/* Accordion */}
        <div className="faq-accordion reveal-item">
          {siteContent.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item hairline-card ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-btn-${index}`}
                >
                  <span className="faq-q-text">{faq.q}</span>
                  <span className={`faq-icon-wrapper ${isOpen ? 'rotate' : ''}`}>
                    <ChevronDown size={18} strokeWidth={1.5} />
                  </span>
                </button>

                {isOpen && (
                  <div 
                    className="faq-answer"
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                  >
                    <p className="faq-a-text">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
