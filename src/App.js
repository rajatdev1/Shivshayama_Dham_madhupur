// src/App.js
import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import GallerySection from './components/Gallery';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Donation from './components/Donation';
import Footer from './components/Footer';
import Events from './components/Events';
import Trustees from './components/Trustees';
import DailyAarti from './components/DailyAarti';
import AartiCollection from './components/AartiCollection';
import './App.css';

export const LanguageContext = createContext();

const App = () => {
  const [language, setLanguage] = useState('hi');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<GallerySection />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donation" element={<Donation />} />
              <Route path="/events" element={<Events />} />
              <Route path="/trustees" element={<Trustees />} />
              <Route path="/aarti" element={<DailyAarti />} />
              <Route path="/aarti-collection" element={<AartiCollection />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageContext.Provider>
  );
};

export default App;