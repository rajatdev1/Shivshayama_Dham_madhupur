// src/components/Contact.js
import React, { useState, useContext } from 'react';
import { LanguageContext } from '../App';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const translations = {
    en: {
      title: "Contact Us",
      subtitle: "Get in touch with Shivshyama Dham",
      address: "Address",
      addressLine1: "Shivshyama Dham, Madhupur",
      addressLine2: "Darbhanga, Bihar - 847101",
      phone: "Phone Numbers",
      phone1: "Office: +91 1234567890",
      phone2: "Temple: +91 9876543210",
      phone3: "Emergency: +91 1122334455",
      email: "Email",
      email1: "info@shivshyamadham.org",
      email2: "donations@shivshyamadham.org",
      email3: "events@shivshyamadham.org",
      whatsapp: "WhatsApp",
      whatsapp1: "+91 1234567890",
      whatsapp2: "+91 9876543210",
      timing: "Temple Timings",
      timing1: "Summer: 4:30 AM - 9:30 PM",
      timing2: "Winter: 5:30 AM - 8:30 PM",
      timing3: "Aarti Times: 5:30 AM, 12:00 PM, 7:00 PM",
      formTitle: "Send us a Message",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      phonePlaceholder: "Your Phone Number",
      subjectPlaceholder: "Subject",
      messagePlaceholder: "Your Message",
      submitBtn: "Send Message",
      socialTitle: "Follow Us",
      mapTitle: "Find Us on Map",
      visiting: "Visiting Hours",
      holiday: "Open all days",
      response: "We typically respond within 24 hours",
      success: "Message sent successfully!",
      error: "Error sending message. Please try again.",
      required: "Please fill in all required fields",
    },
    hi: {
      title: "संपर्क करें",
      subtitle: "शिवश्यामा धाम से जुड़ें",
      address: "पता",
      addressLine1: "शिवश्यामा धाम, मधुपुर",
      addressLine2: "दरभंगा, बिहार - 847101",
      phone: "फोन नंबर",
      phone1: "कार्यालय: +91 1234567890",
      phone2: "मंदिर: +91 9876543210",
      phone3: "आपातकालीन: +91 1122334455",
      email: "ईमेल",
      email1: "info@shivshyamadham.org",
      email2: "donations@shivshyamadham.org",
      email3: "events@shivshyamadham.org",
      whatsapp: "व्हाट्सएप",
      whatsapp1: "+91 1234567890",
      whatsapp2: "+91 9876543210",
      timing: "मंदिर का समय",
      timing1: "ग्रीष्मकाल: सुबह 4:30 - रात 9:30",
      timing2: "शीतकाल: सुबह 5:30 - रात 8:30",
      timing3: "आरती समय: सुबह 5:30, दोपहर 12:00, शाम 7:00",
      formTitle: "हमें संदेश भेजें",
      namePlaceholder: "आपका नाम",
      emailPlaceholder: "आपका ईमेल",
      phonePlaceholder: "आपका फोन नंबर",
      subjectPlaceholder: "विषय",
      messagePlaceholder: "आपका संदेश",
      submitBtn: "संदेश भेजें",
      socialTitle: "हमें फॉलो करें",
      mapTitle: "मानचित्र पर देखें",
      visiting: "दर्शन का समय",
      holiday: "सभी दिन खुला",
      response: "हम आमतौर पर 24 घंटे के भीतर जवाब देते हैं",
      success: "संदेश सफलतापूर्वक भेजा गया!",
      error: "संदेश भेजने में त्रुटि। कृपया पुनः प्रयास करें।",
      required: "कृपया सभी आवश्यक फ़ील्ड भरें",
    },
    mai: {
      title: "संपर्क करू",
      subtitle: "शिवश्यामा धाम सँ जुड़ू",
      address: "पता",
      addressLine1: "शिवश्यामा धाम, मधुपुर",
      addressLine2: "दरभंगा, बिहार - 847101",
      phone: "फोन नंबर",
      phone1: "कार्यालय: +91 1234567890",
      phone2: "मंदिर: +91 9876543210",
      phone3: "आपातकालीन: +91 1122334455",
      email: "ईमेल",
      email1: "info@shivshyamadham.org",
      email2: "donations@shivshyamadham.org",
      email3: "events@shivshyamadham.org",
      whatsapp: "व्हाट्सएप",
      whatsapp1: "+91 1234567890",
      whatsapp2: "+91 9876543210",
      timing: "मंदिर के समय",
      timing1: "ग्रीष्मकाल: सुबह 4:30 - रात 9:30",
      timing2: "शीतकाल: सुबह 5:30 - रात 8:30",
      timing3: "आरती समय: सुबह 5:30, दोपहर 12:00, शाम 7:00",
      formTitle: "हमरा संदेश भेजू",
      namePlaceholder: "अहांक नाम",
      emailPlaceholder: "अहांक ईमेल",
      phonePlaceholder: "अहांक फोन नंबर",
      subjectPlaceholder: "विषय",
      messagePlaceholder: "अहांक संदेश",
      submitBtn: "संदेश भेजू",
      socialTitle: "हमरा फॉलो करू",
      mapTitle: "मानचित्र पर देखू",
      visiting: "दर्शन के समय",
      holiday: "सभ दिन खुला",
      response: "हम आमतौर पर 24 घंटा के भीतर जवाब दैत छी",
      success: "संदेश सफलतापूर्वक भेजल गेल!",
      error: "संदेश भेजब में त्रुटि। कृपया पुनः प्रयास करू।",
      required: "कृपया सभ आवश्यक फ़ील्ड भरू",
    }
  };

  const t = translations[language] || translations.hi;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert(t.success);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
      </div>

      <div className="contact-grid">
        {/* Contact Information Cards */}
        <div className="contact-info-section">
          <div className="info-card">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="info-content">
              <h3>{t.address}</h3>
              <p>{t.addressLine1}</p>
              <p>{t.addressLine2}</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                Get Directions
              </a>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaPhone />
            </div>
            <div className="info-content">
              <h3>{t.phone}</h3>
              <p>{t.phone1}</p>
              <p>{t.phone2}</p>
              <p>{t.phone3}</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaEnvelope />
            </div>
            <div className="info-content">
              <h3>{t.email}</h3>
              <p>{t.email1}</p>
              <p>{t.email2}</p>
              <p>{t.email3}</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaWhatsapp />
            </div>
            <div className="info-content">
              <h3>{t.whatsapp}</h3>
              <p>{t.whatsapp1}</p>
              <p>{t.whatsapp2}</p>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaClock />
            </div>
            <div className="info-content">
              <h3>{t.timing}</h3>
              <p>{t.timing1}</p>
              <p>{t.timing2}</p>
              <p className="aarti-time">{t.timing3}</p>
              <p className="holiday">{t.holiday}</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-section">
          <h2>{t.formTitle}</h2>
          <p className="response-time">{t.response}</p>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={t.namePlaceholder}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder={t.emailPlaceholder}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder={t.phonePlaceholder}
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder={t.subjectPlaceholder}
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder={t.messagePlaceholder}
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              {t.submitBtn}
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="social-section">
        <h3>{t.socialTitle}</h3>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook">
            <FaFacebook />
            <span>Facebook</span>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter">
            <FaTwitter />
            <span>Twitter</span>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram">
            <FaInstagram />
            <span>Instagram</span>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link youtube">
            <FaYoutube />
            <span>YouTube</span>
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <h3>{t.mapTitle}</h3>
        <div className="map-container">
          <iframe
            title="Shivshyama Dham Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114398.70385570698!2d85.759298610693!3d26.11128543371955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb8c5e8e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sMadhupur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;