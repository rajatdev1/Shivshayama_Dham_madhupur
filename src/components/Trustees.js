// src/components/Trustees.js
import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Trustees.css';

const Trustees = () => {
  const { language } = useContext(LanguageContext);

  const trustees = [
    // President (अध्यक्ष)
    {
      id: 1,
      name: { en: "Shri Giridhari Jha", hi: "श्री गिरिधारी झा", mai: "श्री गिरिधारी झा" },
      role: { en: "President", hi: "अध्यक्ष", mai: "अध्यक्ष" },
      image: "/images/trustees/giridhari-jha.jpg",
      description: {
        en: "Eminent social worker and spiritual leader, guiding the trust with wisdom and dedication since inception.",
        hi: "प्रख्यात समाजसेवी एवं आध्यात्मिक नेता, स्थापना से ट्रस्ट का मार्गदर्शन कर रहे हैं।",
        mai: "प्रख्यात समाजसेवी एवं आध्यात्मिक नेता, स्थापना सँ ट्रस्ट के मार्गदर्शन करि रहल छथि।"
      },
      social: { facebook: "#", twitter: "#", linkedin: "#", email: "giridhari.jha@shivshyamadham.org" },
      avatar: "GJ"
    },
    
    // Vice Presidents (उपाध्यक्ष) - 2 members
    {
      id: 2,
      name: { en: "Shri Shankarnath Jha (Batauhi)", hi: "श्री शंकरनाथ झा (बटोही)", mai: "श्री शंकरनाथ झा (बटोही)" },
      role: { en: "Vice President", hi: "उपाध्यक्ष", mai: "उपाध्यक्ष" },
      image: "/images/trustees/shankarnath-jha.jpg",
      description: {
        en: "Dedicated social worker actively contributing to community development and temple activities.",
        hi: "समर्पित समाजसेवी, सामुदायिक विकास एवं मंदिर गतिविधियों में सक्रिय योगदान।",
        mai: "समर्पित समाजसेवी, सामुदायिक विकास आ मंदिर गतिविधि सब में सक्रिय योगदान।"
      },
      social: { facebook: "#", twitter: "#", linkedin: "#", email: "shankarnath.jha@shivshyamadham.org" },
      avatar: "SN"
    },
    {
      id: 3,
      name: { en: "Shri Yudhishthir Jha", hi: "श्री युधिष्ठिर झा", mai: "श्री युधिष्ठिर झा" },
      role: { en: "Vice President", hi: "उपाध्यक्ष", mai: "उपाध्यक्ष" },
      image: "/images/trustees/yudhishthir-jha.jpg",
      description: {
        en: "Senior social worker and community leader, working tirelessly for temple and social causes.",
        hi: "वरिष्ठ समाजसेवी एवं सामुदायिक नेता, मंदिर एवं सामाजिक कार्यों में तत्पर।",
        mai: "वरिष्ठ समाजसेवी एवं सामुदायिक नेता, मंदिर एवं सामाजिक कार्य में तत्पर।"
      },
      social: { facebook: "#", twitter: "#", linkedin: "#", email: "yudhishthir.jha@shivshyamadham.org" },
      avatar: "YJ"
    },

    // Secretary (सचिव)
    {
      id: 4,
      name: { en: "Shri Prasoon Pankaj Jha", hi: "श्री प्रसून पंकज झा", mai: "श्री प्रसून पंकज झा" },
      role: { en: "Secretary", hi: "सचिव", mai: "सचिव" },
      image: "/images/trustees/prasoon-jha.jpg",
      description: {
        en: "Renowned poet, cultural organizer and dedicated social worker managing temple operations.",
        hi: "प्रसिद्ध कवि, सांस्कृतिक आयोजक एवं समर्पित समाजसेवी, मंदिर संचालन का प्रबंधन।",
        mai: "प्रसिद्ध कवि, सांस्कृतिक आयोजक एवं समर्पित समाजसेवी, मंदिर संचालन के प्रबंधन।"
      },
      social: { facebook: "#", twitter: "#", linkedin: "#", email: "prasoon.jha@shivshyamadham.org" },
      avatar: "PP"
    },

    // Joint Secretary (सह सचिव) - 2 members
    {
      id: 5,
      name: { en: "Shri Amarnath Jha", hi: "श्री अमरनाथ झा", mai: "श्री अमरनाथ झा" },
      role: { en: "Joint Secretary", hi: "सह सचिव", mai: "सह सचिव" },
      image: "/images/trustees/amarnath-jha.jpg",
      description: {
        en: "Active social worker and community organizer, assisting in temple administration.",
        hi: "सक्रिय समाजसेवी एवं सामुदायिक आयोजक, मंदिर प्रशासन में सहयोग।",
        mai: "सक्रिय समाजसेवी एवं सामुदायिक आयोजक, मंदिर प्रशासन में सहयोग।"
      },
      social: { facebook: "#", twitter: "#", linkedin: "#", email: "amarnath.jha@shivshyamadham.org" },
      avatar: "AN"
    },
   
    {
      id: 7,
      name: { en: "Shri Shyam Nandan Jha", hi: "श्री श्याम नन्दन झा", mai: "श्री श्याम नन्दन झा" },
      role: { en: "Joint Secretary", hi: "सह सचिव", mai: "सह सचिव" },
      image: "/images/trustees/shyam-nandan-jha.jpg",
      description: {
        en: "Active social worker contributing to community welfare and temple development.",
        hi: "सक्रिय समाजसेवी, सामुदायिक कल्याण एवं मंदिर विकास में योगदान।",
        mai: "सक्रिय समाजसेवी, सामुदायिक कल्याण एवं मंदिर विकास में योगदान।"
      },
      social: { facebook: "#", twitter: "#", linkedin: "#", email: "shyamnandan.jha@shivshyamadham.org" },
      avatar: "SN"
    },

    // Treasurer (कोषाध्यक्ष)
    {
      id: 8,
      name: { en: "Shri Santosh Kumar Jha", hi: "श्री संतोष कुमार झा", mai: "श्री संतोष कुमार झा" },
      role: { en: "Treasurer", hi: "कोषाध्यक्ष", mai: "कोषाध्यक्ष" },
      image: "/images/trustees/santosh-jha.jpg",
      description: {
        en: "Educator by profession and dedicated social worker, managing temple finances with transparency.",
        hi: "शिक्षक एवं समर्पित समाजसेवी, पारदर्शिता के साथ मंदिर के वित्त का प्रबंधन।",
        mai: "शिक्षक एवं समर्पित समाजसेवी, पारदर्शिता के साथ मंदिर के वित्त के प्रबंधन।"
      },
      social: { facebook: "#", twitter: "#", linkedin: "#", email: "santosh.jha@shivshyamadham.org" },
      avatar: "SK"
    },

    // Members (सदस्य) - 6 members
    {
      id: 9,
      name: { en: "Shri Bimal Jha", hi: "श्री बिमल झा", mai: "श्री बिमल झा" },
      role: { en: "Member", hi: "सदस्य", mai: "सदस्य" },
      image: "/images/trustees/bimal-jha.jpg",
      description: {
        en: "Businessman and active social worker, contributing to various temple initiatives.",
        hi: "व्यवसायी एवं सक्रिय समाजसेवी, विभिन्न मंदिर पहलों में योगदान।",
        mai: "व्यवसायी एवं सक्रिय समाजसेवी, विभिन्न मंदिर पहल सब में योगदान।"
      },
      social: { facebook: "#", twitter: "#", linkedin: "#", email: "bimal.jha@shivshyamadham.org" },
      avatar: "BJ"
    },
    {
      id: 10,
      name: { en: "Shri Pinku Jha", hi: "श्री पिंकू झा", mai: "श्री पिंकू झा" },
      role: { en: "Member", hi: "सदस्य", mai: "सदस्य" },
      image: "/images/trustees/pinku-jha.jpg",
      description: {
        en: "Business professional and dedicated social worker, actively supporting temple activities.",
        hi: "व्यवसायी एवं समर्पित समाजसेवी, मंदिर गतिविधियों में सक्रिय सहयोग।",
        mai: "व्यवसायी एवं समर्पित समाजसेवी, मंदिर गतिविधि सब में सक्रिय सहयोग।"
      },
      social: { facebook: "#", twitter: "#", linkedin: "#", email: "pinku.jha@shivshyamadham.org" },
      avatar: "PJ"
    },
    {
      id: 11,
      name: { en: "Shri Dharmendra Jha", hi: "श्री धर्मेन्द्र झा", mai: "श्री धर्मेन्द्र झा" },
      role: { en: "Member", hi: "सदस्य", mai: "सदस्य" },
      image: "/images/trustees/dharmendra-jha.jpg",
      description: {
        en: "Businessman and social worker, contributing to community development and temple welfare.",
        hi: "व्यवसायी एवं समाजसेवी, सामुदायिक विकास एवं मंदिर कल्याण में योगदान।",
        mai: "व्यवसायी एवं समाजसेवी, सामुदायिक विकास एवं मंदिर कल्याण में योगदान।"
      },
      social: { facebook: "#", twitter: "#", linkedin: "#", email: "dharmendra.jha@shivshyamadham.org" },
      avatar: "DJ"
    },
    {
      id: 12,
      name: { en: "Shri Dharamu Jha", hi: "श्री धरमु झा", mai: "श्री धरमु झा" },
      role: { en: "Member", hi: "सदस्य", mai: "सदस्य" },
      image: "/images/trustees/dharamu-jha.jpg",
      description: {
        en: "Business professional and active social worker, dedicated to temple service.",
        hi: "व्यवसायी एवं सक्रिय समाजसेवी, मंदिर सेवा में समर्पित।",
        mai: "व्यवसायी एवं सक्रिय समाजसेवी, मंदिर सेवा में समर्पित।"
      },
      social: { facebook: "#", twitter: "#", linkedin: "#", email: "dharamu.jha@shivshyamadham.org" },
      avatar: "DH"
    },
    {
      id: 13,
      name: { en: "Shri Suman Kumar Jha", hi: "श्री सुमन कुमार झा", mai: "श्री सुमन कुमार झा" },
      role: { en: "Member", hi: "सदस्य", mai: "सदस्य" },
      image: "/images/trustees/suman-jha.jpg",
      description: {
        en: "Post Office employee and dedicated social worker, serving the community with commitment.",
        hi: "डाकघर कर्मचारी एवं समर्पित समाजसेवी, समुदाय की सेवा में तत्पर।",
        mai: "डाकघर कर्मचारी एवं समर्पित समाजसेवी, समुदाय के सेवा में तत्पर।"
      },
      social: { facebook: "#", twitter: "#", linkedin: "#", email: "suman.jha@shivshyamadham.org" },
      avatar: "SK"
    },
    {
      id: 14,
      name: { en: "Shri Sajan Kumar Jha", hi: "श्री सजन कुमार झा", mai: "श्री सजन कुमार झा" },
      role: { en: "Member & Ward Member", hi: "सदस्य एवं वार्ड सदस्य", mai: "सदस्य एवं वार्ड सदस्य" },
      image: "/images/trustees/sajan-jha.jpg",
      description: {
        en: "Nagar Nigam Ward Member and active social worker, bridging temple and community needs.",
        hi: "नगर निगम वार्ड सदस्य एवं सक्रिय समाजसेवी, मंदिर एवं समुदाय के बीच सेतु।",
        mai: "नगर निगम वार्ड सदस्य एवं सक्रिय समाजसेवी, मंदिर एवं समुदाय के बीच सेतु।"
      },
      social: { facebook: "#", twitter: "#", linkedin: "#", email: "sajan.jha@shivshyamadham.org" },
      avatar: "SJ"
    }
  ];

  // Update the stats to show correct count
  const totalTrustees = trustees.length;

  return (
    <div className="trustees-container">
      <div className="trustees-header">
        <h1>ट्रस्टी गण</h1>
        <p>शिवश्यामा धाम धर्मार्थ सेवा ट्रस्ट के समर्पित ट्रस्टीगण</p>
        <div className="trustee-stats">
          <div className="stat-item">
            <span className="stat-number">{totalTrustees}</span>
            <span className="stat-label">ट्रस्टी</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">39+</span>
            <span className="stat-label">वर्ष सेवा</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">सेवा</span>
          </div>
        </div>
      </div>

      <div className="trustees-grid">
        {trustees.map((trustee) => (
          <div key={trustee.id} className="trustee-card">
            <div className="trustee-image">
              {trustee.image ? (
                <img src={trustee.image} alt={trustee.name[language]} />
              ) : (
                <div className="avatar-placeholder">
                  <span className="avatar-text">{trustee.avatar}</span>
                </div>
              )}
              <div className="trustee-badge">{trustee.role[language]}</div>
            </div>
            <div className="trustee-info">
              <h3>{trustee.name[language]}</h3>
              <h4>{trustee.role[language]}</h4>
              <p>{trustee.description[language]}</p>
              <div className="trustee-social">
                <a href={trustee.social.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href={trustee.social.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href={trustee.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href={`mailto:${trustee.social.email}`}>
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="trustee-message">
        <div className="message-content">
          <h3>ट्रस्टीगण का संदेश</h3>
          <p>"हमारा प्रयास है कि शिवश्यामा धाम को एक आदर्श धार्मिक एवं सामाजिक संस्थान के रूप में विकसित किया जाए, जहाँ हर वर्ग के लोगों को आध्यात्मिक शांति और सामाजिक सहयोग मिल सके।"</p>
          <p className="message-author">- श्री गिरिधारी झा, अध्यक्ष</p>
        </div>
      </div>
    </div>
  );
};

export default Trustees;