// src/components/Header.js
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setShowLangDropdown(false);
    // Keep menu open if it was open
  };

  const translations = {
    en: {
      home: "Home",
      about: "About Us",
      gallery: "Gallery",
      events: "Events",
      trustees: "Trustees",
      aarti: "Aarti",
      aartiDaily: "Daily Aarti",
      aartiCollection: "Aarti Collection",
      contact: "Contact",
      donation: "Donation",
      trustName: "Shivshyama Dham, Madhupur",
      language: "Language"
    },
    hi: {
      home: "होम",
      about: "हमारे बारे में",
      gallery: "गैलरी",
      events: "आयोजन",
      trustees: "ट्रस्टी",
      aarti: "आरती",
      aartiDaily: "दैनिक आरती",
      aartiCollection: "आरती संग्रह",
      contact: "संपर्क",
      donation: "दान",
      trustName: "शिवश्यामा धाम, मधुपुर",
      language: "भाषा"
    },
    mai: {
      home: "मुखपृष्ठ",
      about: "हमरा बारे में",
      gallery: "गैलरी",
      events: "आयोजन",
      trustees: "ट्रस्टी",
      aarti: "आरती",
      aartiDaily: "दैनिक आरती",
      aartiCollection: "आरती संग्रह",
      contact: "संपर्क",
      donation: "दान",
      trustName: "शिवश्यामा धाम, मधुपुर",
      language: "भाषा"
    }
  };

  const t = translations[language] || translations.hi;

  // Language names for display
  const langNames = {
    hi: "हिंदी",
    mai: "मैथिली",
    en: "English"
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-section">
          <Link to="/" className="logo-link">
            {/* Logo Image - placed before trust-info */}
            <img 
              src={process.env.PUBLIC_URL + '/images/logo1.png'} 
              alt="Logo"
              className="logo-image"
            />
            
            <div className="trust-info">
              <h1 className="trust-name">{t.trustName}</h1>
              <p className="trust-tagline">🙏 जय श्यामा माँ 🙏</p>
            </div>
          </Link>
        </div>

        <div className="header-right">
          {/* Desktop Language Selector */}
          <div className="language-selector desktop-only">
            <button 
              className={`lang-btn ${language === 'hi' ? 'active' : ''}`}
              onClick={() => setLanguage('hi')}
            >
              हिंदी
            </button>
            <button 
              className={`lang-btn ${language === 'mai' ? 'active' : ''}`}
              onClick={() => setLanguage('mai')}
            >
              मैथिली
            </button>
            <button 
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              English
            </button>
          </div>

          <button className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" onClick={toggleMenu}>{t.home}</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>{t.about}</Link></li>
            {/* <li><Link to="/gallery" onClick={toggleMenu}>{t.gallery}</Link></li> */}
            <li><Link to="/events" onClick={toggleMenu}>{t.events}</Link></li>
            <li><Link to="/trustees" onClick={toggleMenu}>{t.trustees}</Link></li>
            
            {/* Aarti Dropdown - Click to open */}
            <li className="dropdown">
              <div 
                className={`dropdown-trigger ${showDropdown ? 'active' : ''}`}
                onClick={toggleDropdown}
              >
                <span>{t.aarti}</span>
                <span className="dropdown-arrow">{showDropdown ? '▲' : '▼'}</span>
              </div>
              <ul className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                <li><Link to="/aarti" onClick={() => { toggleMenu(); setShowDropdown(false); }}>{t.aartiDaily}</Link></li>
                <li><Link to="/aarti-collection" onClick={() => { toggleMenu(); setShowDropdown(false); }}>{t.aartiCollection}</Link></li>
              </ul>
            </li>
            
            <li><Link to="/contact" onClick={toggleMenu}>{t.contact}</Link></li>
            <li className="donation-link">
              <Link to="/donation" onClick={toggleMenu} className="donation-btn">
                {t.donation}
              </Link>
            </li>
            
            {/* Mobile Language Dropdown */}
            <li className="mobile-language-dropdown">
              <div 
                className={`mobile-lang-trigger ${showLangDropdown ? 'active' : ''}`}
                onClick={() => setShowLangDropdown(!showLangDropdown)}
              >
                <span>🌐 {t.language}: {langNames[language]}</span>
                <span className="dropdown-arrow">{showLangDropdown ? '▲' : '▼'}</span>
              </div>
              <ul className={`mobile-lang-menu ${showLangDropdown ? 'show' : ''}`}>
                <li>
                  <button 
                    className={`mobile-lang-option ${language === 'hi' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('hi')}
                  >
                    🇮🇳 हिंदी
                  </button>
                </li>
                <li>
                  <button 
                    className={`mobile-lang-option ${language === 'mai' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('mai')}
                  >
                    🪷 मैथिली
                  </button>
                </li>
                <li>
                  <button 
                    className={`mobile-lang-option ${language === 'en' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('en')}
                  >
                    🇬🇧 English
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;