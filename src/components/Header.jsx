import React, { useState, useEffect } from 'react';
import { siteContent } from '../siteContent';
import { Menu, X, Phone, MessageSquare, MapPin } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Treatments', href: '#treatments' },
    { label: 'Find Treatment', href: '#concerns' },
    { label: 'Doctor', href: '#doctor' },
    { label: 'The Space', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Visit', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'is-scrolled' : 'is-transparent'}`}>
        <div className="header-container container">
          {/* Clinic Wordmark */}
          <a href="#" className="clinic-wordmark" aria-label="Derma Care Home">
            <span className="wordmark-title">{siteContent.clinicName}</span>
            <span className="wordmark-sub">{siteContent.clinicSubtitle}</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="header-actions">
            <a href="#appointment-form" className="btn btn-primary btn-header">
              Book Appointment
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'is-open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      />
      <div 
        className={`mobile-drawer ${isMobileMenuOpen ? 'is-open' : ''}`}
        role="dialog" 
        aria-modal="true" 
        aria-label="Navigation Menu"
      >
        <div className="drawer-header">
          <div className="drawer-wordmark">
            <span className="wordmark-title">{siteContent.clinicName}</span>
            <span className="wordmark-sub">{siteContent.clinicSubtitle}</span>
          </div>
          <button
            type="button"
            className="drawer-close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleLinkClick} className="mobile-nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="drawer-footer">
          <div className="drawer-clinic-info">
            <p className="drawer-doctor">{siteContent.doctor.name}</p>
            <p className="drawer-loc">Opp. Korde Hospital, Jatharpeth</p>
          </div>
          <a
            href="#appointment-form"
            onClick={handleLinkClick}
            className="btn btn-primary drawer-cta"
          >
            Request Appointment
          </a>
        </div>
      </div>

      {/* Desktop Floating Action Buttons (bottom-right on desktop) */}
      <div className="desktop-floating-actions" aria-label="Quick contact buttons">
        <a 
          href={`https://wa.me/${siteContent.contact.whatsappClean}?text=Hello%20Derma%20Care%20Clinic,%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`}
          target="_blank"
          rel="noopener noreferrer"
          className="desktop-action-btn wa-btn"
          title="Chat on WhatsApp"
        >
          <MessageSquare size={17} strokeWidth={1.5} />
          <span>WhatsApp Inquiries</span>
        </a>
        <a 
          href={`tel:${siteContent.contact.phoneClean}`} 
          className="desktop-action-btn"
          title="Call clinic directly"
        >
          <Phone size={17} strokeWidth={1.5} />
          <span>{siteContent.contact.phone}</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Action Bar (Call, WhatsApp, Directions, Book) */}
      <aside className="mobile-sticky-bar" aria-label="Quick contact bar">
        <a 
          href={`tel:${siteContent.contact.phoneClean}`} 
          className="sticky-action-btn"
          aria-label="Call clinic directly"
        >
          <Phone size={18} strokeWidth={1.5} />
          <span>Call</span>
        </a>
        <a 
          href={`https://wa.me/${siteContent.contact.whatsappClean}?text=Hello%20Derma%20Care%20Clinic,%20I%20would%20like%20to%20enquire%20about%20an%20appointment.`}
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-action-btn"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare size={18} strokeWidth={1.5} />
          <span>WhatsApp</span>
        </a>
        <a 
          href={siteContent.location.mapsUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="sticky-action-btn"
          aria-label="Get directions on Google Maps"
        >
          <MapPin size={18} strokeWidth={1.5} />
          <span>Directions</span>
        </a>
        <a 
          href="#appointment-form" 
          className="sticky-action-btn sticky-action-primary"
          aria-label="Book appointment"
        >
          <span>Book Now</span>
        </a>
      </aside>
    </>
  );
}
