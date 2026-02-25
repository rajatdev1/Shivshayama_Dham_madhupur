// components/Footer.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { LanguageContext } from '../App';
import './Footer.css';

const Footer = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    en: {
      quickLinks: "Quick Links",
      home: "Home",
      about: "About Us",
      gallery: "Gallery",
      events: "Events",
      contact: "Contact",
      donation: "Donation",
      contactInfo: "Contact Info",
      address: "Shivshyama Dham, Madhupur, Darbhanga, Bihar - 847101",
      phone1: "+91 1234567890",
      phone2: "+91 9876543210",
      email: "info@shivshyamadham.org",
      copyright: "© Shivshyama Dham Dharmarth Seva Trust, Madhupur. All rights reserved.",
      developed: "Developed by Rajat Jha",
      newsletter: "Newsletter",
      subscribeText: "Subscribe for updates on events and aartis",
      subscribeBtn: "Subscribe"
    },
    hi: {
      quickLinks: "त्वरित लिंक",
      home: "होम",
      about: "हमारे बारे में",
      gallery: "गैलरी",
      events: "आयोजन",
      contact: "संपर्क",
      donation: "दान",
      contactInfo: "संपर्क जानकारी",
      address: "शिवश्यामा धाम, मधुपुर, दरभंगा, बिहार - 847101",
      phone1: "+91 1234567890",
      phone2: "+91 9876543210",
      email: "info@shivshyamadham.org",
      copyright: "© शिवश्यामा धाम धर्मार्थ सेवा ट्रस्ट, मधुपुर। सभी अधिकार सुरक्षित।",
      developed: "राजत झा द्वारा विकसित",
      newsletter: "समाचार पत्र",
      subscribeText: "आयोजनों और आरतियों की अपडेट के लिए सदस्यता लें",
      subscribeBtn: "सदस्यता लें"
    },
    mai: {
      quickLinks: "त्वरित लिंक",
      home: "मुखपृष्ठ",
      about: "हमरा बारे में",
      gallery: "गैलरी",
      events: "आयोजन",
      contact: "संपर्क",
      donation: "दान",
      contactInfo: "संपर्क जानकारी",
      address: "शिवश्यामा धाम, मधुपुर, दरभंगा, बिहार - 847101",
      phone1: "+91 1234567890",
      phone2: "+91 9876543210",
      email: "info@shivshyamadham.org",
      copyright: "© शिवश्यामा धाम धर्मार्थ सेवा ट्रस्ट, मधुपुर। सभी अधिकार सुरक्षित।",
      developed: "रजत झा द्वारा विकसित",
      newsletter: "समाचार पत्र",
      subscribeText: "आयोजन आ आरती सब के अपडेट लेल सदस्यता लिअ",
      subscribeBtn: "सदस्यता लिअ"
    }
  };

  const t = translations[language];

  return (
    <footer className="footer">
      <div className="footer-decoration">
        <div className="decoration-line"></div>
        <div className="decoration-dome"></div>
        <div className="decoration-line"></div>
      </div>

      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">शिवश्यामा धाम</h3>
          <p className="footer-description">
            A divine spiritual center dedicated to Maa Kali and Lord Shiva, 
            serving devotees with faith and devotion since establishment.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">{t.quickLinks}</h3>
          <ul className="footer-links">
            <li><Link to="/">{t.home}</Link></li>
            <li><Link to="/about">{t.about}</Link></li>
            <li><Link to="/gallery">{t.gallery}</Link></li>
            <li><Link to="/events">{t.events}</Link></li>
            <li><Link to="/contact">{t.contact}</Link></li>
            <li><Link to="/donation">{t.donation}</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">{t.contactInfo}</h3>
          <ul className="contact-info">
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>{t.address}</span>
            </li>
            <li>
              <FaPhone className="contact-icon" />
              <span>{t.phone1}</span>
            </li>
            <li>
              <FaPhone className="contact-icon" />
              <span>{t.phone2}</span>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <span>{t.email}</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">{t.newsletter}</h3>
          <p className="newsletter-text">{t.subscribeText}</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Your email" 
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">
              {t.subscribeBtn}
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">{t.copyright}</p>
          <p className="developed">{t.developed}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;