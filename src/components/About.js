// src/components/About.js
import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import './About.css';

const About = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    en: {
      title: "About Shivshyama Dham",
      subtitle: "A Divine Spiritual Center in Madhupur, Darbhanga",
      intro: "Shivshyama Dham is not just a temple, but a spiritual ecosystem that has been serving humanity for over 39 years. Established in 1973, this sacred place has become a beacon of faith, culture, and social service in the Mithila region.",
      mission: "Our Mission",
      missionText: "To spread spiritual awareness, preserve Sanatan Dharma, and serve humanity through various charitable activities. We aim to provide a platform where devotees can connect with the divine and find inner peace.",
      vision: "Our Vision",
      visionText: "To create a world where spirituality and social service go hand in hand, where every individual can experience the divine presence of Maa Kali and Lord Shiva, and find solutions to their life's problems through faith and devotion.",
      history: "Historical Background",
      history1: "The inspiration for Shivshyama Dham came from the rich spiritual heritage of Bengal and Bihar. The temple was established with the divine blessings of saints and sages who envisioned a place where the worship of both Maa Kali (Shakti) and Lord Shiva could be performed under one roof.",
      history2: "Over the years, the temple has grown from a small shrine to a magnificent complex spanning 5 acres. Today, it includes a grand temple, yagya shala, bhandara hall, meditation center, Sanskrit pathshala, gaushala, and an old age home.",
      architecture: "Temple Architecture",
      architectureText: "The temple showcases a beautiful blend of Bengali and Mithila architectural styles. The main shrine of Maa Kali is adorned with intricate carvings and traditional motifs. The shikhara (spire) rises majestically, visible from miles around.",
      facilities: "Temple Facilities",
      facility1: "Main Temple with Maa Kali and Lord Shiva",
      facility2: "Yagya Shala for Hawan and Yagya",
      facility3: "Bhandara Hall (Community Kitchen)",
      facility4: "Meditation and Yoga Center",
      facility5: "Sanskrit Pathshala",
      facility6: "Gaushala with 50+ cows",
      facility7: "Vridhashram (Old Age Home)",
      facility8: "Ayurvedic Clinic",
      facility9: "Library with 5000+ books",
      facility10: "Prasad Kitchen",
      achievements: "Our Achievements",
      achievement1: "39+ years of continuous service",
      achievement2: "10,000+ devotees served daily during festivals",
      achievement3: "100+ students educated in Sanskrit pathshala",
      achievement4: "50+ cows sheltered in gaushala",
      achievement5: "25+ elderly people cared for in old age home",
      achievement6: "500+ free medical camps organized",
      trustInfo: "Trust Information",
      trustName: "Shivshyama Dham Dharmarth Seva Trust",
      trustReg: "Registration No: 123/1973-86",
      trustPan: "PAN: AAJTS1234D",
      trust80G: "80G Certified: Yes (Tax Exempt)",
      trustFCRA: "FCRA Registered: Yes",
    },
    hi: {
      title: "शिवश्यामा धाम के बारे में",
      subtitle: "मधुपुर, दरभंगा में एक दिव्य आध्यात्मिक केंद्र",
      intro: "शिवश्यामा धाम केवल एक मंदिर नहीं, बल्कि एक आध्यात्मिक पारिस्थितिकी तंत्र है जो पिछले 39 वर्षों से मानवता की सेवा कर रहा है। 1973 में स्थापित, यह पवित्र स्थान मिथिला क्षेत्र में आस्था, संस्कृति और सामाजिक सेवा का केंद्र बन गया है।",
      mission: "हमारा मिशन",
      missionText: "आध्यात्मिक जागरूकता फैलाना, सनातन धर्म की रक्षा करना और विभिन्न धर्मार्थ गतिविधियों के माध्यम से मानवता की सेवा करना। हम एक ऐसा मंच प्रदान करना चाहते हैं जहां भक्त दिव्य से जुड़ सकें और आंतरिक शांति पा सकें।",
      vision: "हमारा दृष्टिकोण",
      visionText: "एक ऐसी दुनिया बनाना जहां आध्यात्मिकता और सामाजिक सेवा साथ-साथ चलें, जहां हर व्यक्ति माँ काली और भगवान शिव की दिव्य उपस्थिति का अनुभव कर सके और आस्था और भक्ति के माध्यम से अपने जीवन की समस्याओं का समाधान पा सके।",
      history: "ऐतिहासिक पृष्ठभूमि",
      history1: "शिवश्यामा धाम की प्रेरणा बंगाल और बिहार की समृद्ध आध्यात्मिक विरासत से मिली। मंदिर की स्थापना संतों और ऋषियों के दिव्य आशीर्वाद से की गई थी, जिन्होंने एक ऐसे स्थान की कल्पना की थी जहां माँ काली (शक्ति) और भगवान शिव दोनों की पूजा एक ही छत के नीचे की जा सके।",
      history2: "वर्षों से, मंदिर एक छोटे से मंदिर से 5 एकड़ में फैले एक भव्य परिसर में विकसित हुआ है। आज, इसमें एक भव्य मंदिर, यज्ञशाला, भंडारा हॉल, ध्यान केंद्र, संस्कृत पाठशाला, गौशाला और एक वृद्धाश्रम शामिल है।",
      architecture: "मंदिर की वास्तुकला",
      architectureText: "मंदिर बंगाल और मिथिला वास्तुकला शैलियों का एक सुंदर मिश्रण प्रदर्शित करता है। माँ काली का मुख्य मंदिर जटिल नक्काशी और पारंपरिक रूपांकनों से सुसज्जित है। शिखर भव्य रूप से ऊंचा है, जो मीलों दूर से दिखाई देता है।",
      facilities: "मंदिर की सुविधाएं",
      facility1: "माँ काली और भगवान शिव का मुख्य मंदिर",
      facility2: "हवन और यज्ञ के लिए यज्ञशाला",
      facility3: "भंडारा हॉल (सामुदायिक रसोई)",
      facility4: "ध्यान और योग केंद्र",
      facility5: "संस्कृत पाठशाला",
      facility6: "50+ गायों के साथ गौशाला",
      facility7: "वृद्धाश्रम",
      facility8: "आयुर्वेदिक क्लिनिक",
      facility9: "5000+ पुस्तकों वाला पुस्तकालय",
      facility10: "प्रसाद रसोई",
      achievements: "हमारी उपलब्धियां",
      achievement1: "39+ वर्षों की निरंतर सेवा",
      achievement2: "त्योहारों के दौरान प्रतिदिन 10,000+ भक्त सेवित",
      achievement3: "संस्कृत पाठशाला में 100+ छात्र शिक्षित",
      achievement4: "गौशाला में 50+ गायें आश्रय प्राप्त",
      achievement5: "वृद्धाश्रम में 25+ बुजुर्गों की देखभाल",
      achievement6: "500+ निःशुल्क चिकित्सा शिविर आयोजित",
      trustInfo: "ट्रस्ट जानकारी",
      trustName: "शिवश्यामा धाम धर्मार्थ सेवा ट्रस्ट",
      trustReg: "पंजीकरण संख्या: 123/1973-86",
      trustPan: "पैन: AAJTS1234D",
      trust80G: "80जी प्रमाणित: हाँ (कर मुक्त)",
      trustFCRA: "एफसीआरए पंजीकृत: हाँ",
    },
    mai: {
      // Add Maithili translations similarly
      title: "शिवश्यामा धाम के बारे में",
      subtitle: "मधुपुर, दरभंगा में एक दिव्य आध्यात्मिक केंद्र",
      intro: "शिवश्यामा धाम केवल एक मंदिर नहि, बलुक एक आध्यात्मिक पारिस्थितिकी तंत्र छि जे पिछला 39 वर्ष सँ मानवता के सेवा करि रहल अछि। 1973 में स्थापित, इ पवित्र स्थान मिथिला क्षेत्र में आस्था, संस्कृति आ सामाजिक सेवा के केंद्र बनि गेल अछि।",
      // Add all other translations...
    }
  };

  const t = translations[language] || translations.hi;

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>{t.title}</h1>
        <p className="subtitle">{t.subtitle}</p>
      </div>

      <div className="about-content">
        <div className="about-intro">
          <div className="intro-text">
            <p>{t.intro}</p>
          </div>
          <div className="intro-image">
            <img src="/images/temple-aerial.jpg" alt="Shivshyama Dham" />
          </div>
        </div>

        <div className="mission-vision">
          <div className="mission-card">
            <h3>{t.mission}</h3>
            <p>{t.missionText}</p>
          </div>
          <div className="vision-card">
            <h3>{t.vision}</h3>
            <p>{t.visionText}</p>
          </div>
        </div>

        <div className="history-section">
          <h2>{t.history}</h2>
          <div className="history-content">
            <p>{t.history1}</p>
            <p>{t.history2}</p>
          </div>
        </div>

        <div className="architecture-section">
          <h2>{t.architecture}</h2>
          <p>{t.architectureText}</p>
        </div>

        <div className="facilities-section">
          <h2>{t.facilities}</h2>
          <div className="facilities-grid">
            {[1,2,3,4,5,6,7,8,9,10].map(num => (
              <div key={num} className="facility-item">
                <span className="facility-icon">✓</span>
                <span>{t[`facility${num}`]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="achievements-section">
          <h2>{t.achievements}</h2>
          <div className="achievements-grid">
            {[1,2,3,4,5,6].map(num => (
              <div key={num} className="achievement-card">
                <span className="achievement-icon">🏆</span>
                <p>{t[`achievement${num}`]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="trust-info1">
          <h2>{t.trustInfo}</h2>
          <div className="trust-details">
            <div className="trust-row">
              <span className="trust-label">ट्रस्ट नाम:</span>
              <span className="trust-value">{t.trustName}</span>
            </div>
            <div className="trust-row">
              <span className="trust-label">{t.trustReg.split(':')[0]}:</span>
              <span className="trust-value">{t.trustReg.split(':')[1]}</span>
            </div>
            <div className="trust-row">
              <span className="trust-label">{t.trustPan.split(':')[0]}:</span>
              <span className="trust-value">{t.trustPan.split(':')[1]}</span>
            </div>
            <div className="trust-row">
              <span className="trust-label">{t.trust80G.split(':')[0]}:</span>
              <span className="trust-value">{t.trust80G.split(':')[1]}</span>
            </div>
            <div className="trust-row">
              <span className="trust-label">{t.trustFCRA.split(':')[0]}:</span>
              <span className="trust-value">{t.trustFCRA.split(':')[1]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;