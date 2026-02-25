// components/Events.js
import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import './Events.css';

const Events = () => {
  const { language } = useContext(LanguageContext);

  const events = [
    {
      title: { en: "Navratri Mahotsav", hi: "नवरात्रि महोत्सव", mai: "नवरात्रि महोत्सव" },
      date: { en: "October 15-24, 2024", hi: "15-24 अक्टूबर, 2024", mai: "15-24 अक्टूबर, 2024" },
      description: {
        en: "Nine days of divine worship, cultural programs, and spiritual discourses.",
        hi: "नौ दिनों की दिव्य पूजा, सांस्कृतिक कार्यक्रम और आध्यात्मिक प्रवचन।",
        mai: "नौ दिन के दिव्य पूजा, सांस्कृतिक कार्यक्रम आ आध्यात्मिक प्रवचन।"
      },
      image: "/images/navratri.jpg"
    },
    // Add more events
  ];

  return (
    <div className="events-container">
      <h1 className="events-main-title">आगामी आयोजन</h1>
      
      <div className="events-timeline">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-date">
              <span className="event-date-text">{event.date[language]}</span>
            </div>
            <div className="event-content">
              <h2>{event.title[language]}</h2>
              <p>{event.description[language]}</p>
              <button className="event-btn">और जानें</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;