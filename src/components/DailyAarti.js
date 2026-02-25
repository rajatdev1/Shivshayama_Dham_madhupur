import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import './DailyAarti.css';

const DailyAarti = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    en: {
      title: "Daily Worship & Aarti Schedule",
      subtitle: "Join us in divine devotion",
      snanTitle: "Mata Snan & Bhog",
      snanTime: "5:00 AM",
      snanDesc: "Holy bath and offering of food to the Goddess",

      morningTitle: "Morning Aarti",
      morningTime: "8:00 AM",
      morningDesc: "Sacred morning prayers",

      eveningTitle: "Evening Aarti",
      eveningTime: "7:00 PM",
      eveningDesc: "Divine evening lamp worship",

      sundarkandTitle: "Sundar Kand Path",
      sundarkandTime: "6:00 PM (Tuesday & Saturday)",
      sundarkandDesc: "Recitation of Sundar Kand with devotion",

      amavasyaTitle: "Amavasya Special Kali Pujan",
      amavasyaTime: "On Every Amavasya",
      amavasyaDesc: "Grand worship of Maa Kali",

      guidelinesTitle: "Important Guidelines During Aarti",
      guidelines: [
  "Arrive at least 15 minutes before the Aarti to prepare yourself spiritually.",
  "Maintain complete silence inside the temple premises.",
  "Keep mobile phones switched off or in silent mode.",
  "Follow queue discipline and respect temple authorities.",
  "Accept prasad with devotion and cleanliness.",
  "Wear traditional and decent attire."
]
    },

    hi: {
      title: "दैनिक पूजा एवं आरती समय",
      subtitle: "भक्ति में सम्मिलित हों",
      snanTitle: "माता स्नान एवं भोग",
      snanTime: "प्रातः 5:00 बजे",
      snanDesc: "माँ का पवित्र स्नान एवं भोग अर्पण",

      morningTitle: "सुबह की आरती",
      morningTime: "प्रातः 8:00 बजे",
      morningDesc: "पवित्र प्रातःकालीन आरती",

      eveningTitle: "शाम की आरती",
      eveningTime: "शाम 7:00 बजे",
      eveningDesc: "दीप प्रज्वलन के साथ संध्या आरती",

      sundarkandTitle: "सुंदरकांड पाठ",
      sundarkandTime: "शाम 6:00 बजे (मंगलवार व शनिवार)",
      sundarkandDesc: "भक्ति भाव से सुंदरकांड का पाठ",

      amavasyaTitle: "अमावस्या विशेष माँ काली पूजन",
      amavasyaTime: "प्रत्येक अमावस्या",
      amavasyaDesc: "भव्य रूप से माँ काली का पूजन",

      guidelinesTitle: "आरती के समय महत्वपूर्ण सावधानियाँ",
     guidelines: [
  "आरती से कम से कम 15 मिनट पहले मंदिर पहुँचें ताकि मन शांत और एकाग्र हो सके।",
  "मंदिर परिसर में पूर्ण शांति बनाए रखें और ऊँची आवाज़ में बातचीत न करें।",
  "मोबाइल फोन बंद या साइलेंट मोड में रखें।",
  "लाइन में अनुशासन बनाए रखें और पुजारियों के निर्देशों का पालन करें।",
  "प्रसाद को श्रद्धा एवं स्वच्छता के साथ ग्रहण करें।",
  "सादे एवं पारंपरिक वस्त्र पहनकर आएँ।"
]
    },

    mai: {
      title: "दैनिक पूजा आ आरती समय",
      subtitle: "भक्ति में सहभागी बनू",
      snanTitle: "माता स्नान आ भोग",
      snanTime: "भोर 5:00 बजे",
      snanDesc: "माँ के पवित्र स्नान आ भोग अर्पण",

      morningTitle: "सुबहक आरती",
      morningTime: "भोर 8:00 बजे",
      morningDesc: "पवित्र प्रातःकालीन आरती",

      eveningTitle: "साँझक आरती",
      eveningTime: "साँझ 7:00 बजे",
      eveningDesc: "दीप संग संध्या आरती",

      sundarkandTitle: "सुंदरकांड पाठ",
      sundarkandTime: "साँझ 6:00 बजे (मंगल आ शनिवार)",
      sundarkandDesc: "भक्ति भाव स सुंदरकांड पाठ",

      amavasyaTitle: "अमावस्या विशेष माँ काली पूजन",
      amavasyaTime: "प्रत्येक अमावस्या",
      amavasyaDesc: "भव्य रूप स माँ काली के पूजा",

      guidelinesTitle: "आरती समय जरूरी सावधानी",
    guidelines: [
  "आरती स 15 मिनट पहिले मंदिर पहुँची ताकि मन शांत हो सकै।",
  "मंदिर परिसर में पूर्ण शांति बनाए राखी।",
  "मोबाइल फोन बंद या साइलेंट राखी।",
  "लाइन के पालन करी आ पुजारी के निर्देश मानी।",
  "प्रसाद श्रद्धा स ग्रहण करी।",
  "सादा आ पारंपरिक वस्त्र पहिरी।"
]
    }
  };

  const t = translations[language] || translations.hi;

  const aartiSlots = [
    { time: t.snanTime, title: t.snanTitle, desc: t.snanDesc },
    { time: t.morningTime, title: t.morningTitle, desc: t.morningDesc },
    { time: t.eveningTime, title: t.eveningTitle, desc: t.eveningDesc },
    { time: t.sundarkandTime, title: t.sundarkandTitle, desc: t.sundarkandDesc },
    { time: t.amavasyaTime, title: t.amavasyaTitle, desc: t.amavasyaDesc }
  ];

  return (
    <div className="daily-aarti-container">
      <div className="aarti-header">
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
      </div>

      <div className="aarti-timeline">
        {aartiSlots.map((slot, index) => (
          <div key={index} className="aarti-slot">
            <div className="aarti-time">{slot.time}</div>
            <div className="aarti-details">
              <h3>{slot.title}</h3>
              <p>{slot.desc}</p>
            </div>
          </div>
        ))}
      </div>

     <div className="aarti-guidelines-section">
  <h2 className="guidelines-main-title">{t.guidelinesTitle}</h2>

  <div className="guidelines-grid">
    {t.guidelines.map((item, index) => (
      <div key={index} className="guideline-card-new">
        <div className="guideline-number">
          {index + 1}
        </div>
        <div className="guideline-content">
          <p>{item}</p>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
};

export default DailyAarti;