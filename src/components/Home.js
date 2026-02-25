// src/components/Home.js
import React, { useState, useContext } from 'react';
import { LanguageContext } from '../App';
// import AutoSlider from './AutoSlider';
import './Home.css';

const Home = () => {
  const { language } = useContext(LanguageContext);
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState('history');

  const translations = {
    en: {
      marqueeText: "🌸 Jai Shyama Maa || 🙏 Har Har Mahadev || 🌸 Jai Maa Kali || 🔱 Om Namah Shivay || ✨ Jai Mata Di || 🌸 ",
      defaultMantra: "काली महाकाली कालिके परमेश्वरी। सर्वानन्दकरी देवी नारायणि नमोऽस्तुते।।",
      hoverMantra: "ॐ जयन्ती, मङ्गला, काली, भद्रकाली, कपालिनी। दुर्गा, क्षमा, शिवा, धात्री, स्वाहा, स्वधा नमोऽस्तुते॥",
      overviewTitle: "🙏 Welcome to Shri Shivshyama Dham 🙏",
      historyTitle: "📜 Historical Significance",
     history1: "Paying homage to the great poet Vidyapati, Madhupur village in Darbhanga district stands as the spiritual heart of Mithila. According to local belief, during the Treta Yuga, Lord Shri Ram, Lakshman, and Sage Vishwamitra passed through this sacred path while traveling to Janakpur. It is said that they rested here and, pleased by the sweetness of the fruits, named the place ‘Madhur-Puri,’ which later became known as Madhupur.",

history2: "Madhupur is home to an ancient Shiva temple where hundreds of devotees perform Jalabhishek daily. During Maha Shivaratri, thousands gather here for worship. In front of the temple lies a sacred pond from which devotees collect water to offer to Lord Shiva. During Chhath Puja, this pond becomes a center of devotion. Villagers aspire to develop this holy site into a spiritual tourism destination.",

history3: "Within the same premises stands the grand temple of Maa Shyama (Kali). Every year on Diwali, a magnificent five-day Kali Puja festival is organized, attracting thousands of devotees from distant regions. Maa Shyama is believed to bless devotees with children and fulfill their wishes. The Shivshyama Dham Dharmarth Seva Trust manages the temple and actively conducts social welfare activities including marriages for underprivileged girls, medical camps, blanket distribution, and community feasts.",
      templeSignificance: "✨ Temple Significance",
      significance1: "The temple houses a magnificent idol of Maa Kali, crafted with divine proportions and adorned with traditional ornaments. The sanctum sanctorum radiates spiritual energy that devotees feel upon entering.",
      significance2: "Special pujas are performed on Tuesdays and Saturdays, considered highly auspicious for Maa Kali worship. Navratri celebrations draw thousands of devotees from across the region.",
      significance3: "The temple also features a sacred Shiva Lingam, representing the cosmic dance of Lord Shiva. The combination of both deities makes this temple unique in the entire region.",
      templeHighlights: "🏛️ Temple Highlights",
      highlight1: "Grand Kali Idol",
      highlight2: "Ancient Shivling",
      highlight3: "Yagya Shala",
      highlight4: "Bhandara Hall",
      highlight5: "Meditation Center",
      highlight6: "Spiritual Library",
      highlight7: "Prasad Counter",
      highlight8: "Devotee Rest Area",
      dailySchedule: "📅 Daily Schedule",
      morningAarti: "Morning Aarti: 5:30 AM",
      afternoonAarti: "Afternoon Aarti: 12:00 PM",
      eveningAarti: "Evening Aarti: 7:00 PM",
      specialPuja: "Special Puja: Saturdays & Tuesdays",
      visitingHours: "Visiting Hours: 5:00 AM – 9:00 PM",
      upcomingFestivals: "🎊 Upcoming Festivals",
      festival1: "Durga Puja – October 2025",
      festival2: "Diwali – November 2025",
      festival3: "Chhath Puja – November 2025",
      festival4: "Makar Sankranti – January 2026",
      festival5: "Shivratri – February 2026",
      festival6: "Holi – March 2026",
      todaySpecial: "Today's Special",
      specialPujaToday: "Tuesday Special: Sunderkand Path",
      specialTiming: "6:00 PM to 8:00 PM",
      templeHistory: "Temple History",
      templeHistoryText: "Shivshyama Dham was established in 1973. Since then, this temple has continuously been a center of faith for thousands of devotees. Daily darshan, special pujas, and grand festivals fill this sacred space with divine energy and devotion.",
      donationCounter: "🙏 Donation Support",
      donationAppeal: "Support the temple's activities and help us serve the community. Your donations are tax-exempt under section 80G.",
      donationGoal: "Annual Goal: ₹50,00,000",
      currentDonation: "Collected: ₹35,00,000",
      donorsCount: "Donors: 1,500+",
      donateBtn: "🙏 Donate Now",
      liveDarshan: "📹 Live Darshan",
      liveDarshanText: "Live telecast of Aarti from temple",
      watchNow: "Watch Now",
      photoGallery: "📸 Photo Gallery",
      viewAll: "View All",
      upcomingEvents: "🎊 Upcoming Events",
      templeTimings: "Temple Timings",
      summerTimings: "Summer: 4:30 AM – 9:30 PM",
      winterTimings: "Winter: 5:30 AM – 8:30 PM",
      festivalTimings: "Festivals: 4:00 AM – 11:00 PM",
      contactInfo: "Contact Information",
      phone: "+91 1234567890",
      email: "info@shivshyamadham.org",
      address: "Shivshyama Dham, Madhupur, Darbhanga, Bihar – 847101",
      templeRules: "Temple Rules",
      rule1: "Maintain purity in temple premises",
      rule2: "Mobile phones are prohibited inside",
      rule3: "Photography prohibited in sanctum",
      rule4: "Exit only after receiving prasad",
      rule5: "Stand in queue systematically",
      devoteeReviews: "💬 Devotee Experiences",
      review1: "The peace and divinity here is amazing. Just having darshan of Maa brings peace to the mind.",
      review2: "Coming here every Tuesday is a blessing. Maa fulfills everyone's wishes.",
      review3: "The most grand Kali temple in Bihar. Participating in the aarti here is the best experience of life.",
      reviewer1: "— Rajesh Kumar",
      reviewer2: "— Sita Devi",
      reviewer3: "— Amit Jha",
    },
    hi: {
      marqueeText: "🌸 जय श्यामा माँ || 🙏 हर हर महादेव || 🌸 जय माँ काली || 🔱 ॐ नमः शिवाय || ✨ जय माता दी || 🌸 ",
      defaultMantra: "काली महाकाली कालिके परमेश्वरी। सर्वानन्दकरी देवी नारायणि नमोऽस्तुते।।",
      hoverMantra: "ॐ जयन्ती, मङ्गला, काली, भद्रकाली, कपालिनी। दुर्गा, क्षमा, शिवा, धात्री, स्वाहा, स्वधा नमोऽस्तुते॥",
      overviewTitle: "🙏 श्री शिवश्यामा धाम में आपका हार्दिक स्वागत है 🙏",
      historyTitle: "📜 ऐतिहासिक महत्व",
     history1: "कवि कोकिल विद्यापति को नमन करते हुए, मिथिला की हृदयस्थली दरभंगा जिले के मधुपुर ग्राम का परिचय अत्यंत गौरवपूर्ण है। मान्यता है कि त्रेतायुग में भगवान श्रीराम, लक्ष्मण एवं महर्षि विश्वामित्र जनकपुर जाते समय इन पावन मार्गों से होकर गुजरे थे। ग्राम के बुजुर्गों के अनुसार उन्होंने यहाँ विश्राम किया और मधुर फलों के सेवन से प्रसन्न होकर इस स्थल का नाम ‘मधुर-पुरी’ रखा, जो कालांतर में मधुपुर कहलाया।",

history2: "मधुपुर ग्राम में एक अत्यंत प्राचीन शिवालय स्थित है जहाँ प्रतिदिन सैकड़ों श्रद्धालु भगवान भोलेनाथ को जलाभिषेक करने आते हैं। महाशिवरात्रि के अवसर पर यहाँ हजारों भक्तों की उपस्थिति होती है। शिवालय के समीप एक प्राचीन तालाब भी है जहाँ से भक्त जल लेकर शिवलिंग पर अर्पित करते हैं। छठ पूजा के समय यहाँ विशेष आस्था देखने को मिलती है। ग्रामीणों की इच्छा है कि इस पवित्र स्थल को पर्यटन केंद्र के रूप में विकसित किया जाए।",

history3: "इसी परिसर में माँ श्यामा (काली) का भव्य मंदिर स्थित है। दीपावली के अवसर पर पाँच दिवसीय काली पूजनोत्सव का भव्य आयोजन होता है, जिसमें दूर-दराज़ से हजारों श्रद्धालु सम्मिलित होते हैं। माँ श्यामा को संतानदायिनी माता माना जाता है और श्रद्धालुओं की मनोकामनाएँ पूर्ण होने की मान्यता है। शिवश्यामा धाम धर्मार्थ सेवा ट्रस्ट द्वारा मंदिर का संचालन किया जाता है तथा सामाजिक कार्य जैसे गरीब कन्याओं का विवाह, चिकित्सा शिविर, कंबल वितरण एवं भंडारा आदि नियमित रूप से आयोजित किए जाते हैं।",
      templeSignificance: "✨ मंदिर का विशेष महत्व",
      significance1: "मंदिर में माँ काली की भव्य मूर्ति है जिसे दिव्य अनुपात में बनाया गया है और पारंपरिक आभूषणों से सजाया गया है। गर्भगृह की आध्यात्मिक ऊर्जा भक्त प्रवेश करते ही अनुभव करते हैं।",
      significance2: "मंगलवार और शनिवार को विशेष पूजा की जाती है जो माँ काली की पूजा के लिए अत्यंत शुभ माने जाते हैं। नवरात्रि में क्षेत्र भर से हजारों भक्त आते हैं।",
      significance3: "मंदिर में एक पवित्र शिवलिंग भी है जो भगवान शिव के ब्रह्मांडीय नृत्य का प्रतीक है। दोनों देवताओं का संयोजन इस मंदिर को क्षेत्र में अद्वितीय बनाता है।",
      templeHighlights: "🏛️ मंदिर की विशेषताएँ",
      highlight1: "भव्य काली मूर्ति",
      highlight2: "प्राचीन शिवलिंग",
      highlight3: "यज्ञशाला",
      highlight4: "भंडारा हॉल",
      highlight5: "ध्यान केंद्र",
      highlight6: "आध्यात्मिक पुस्तकालय",
      highlight7: "प्रसाद वितरण",
      highlight8: "भक्त विश्राम स्थल",
      dailySchedule: "📅 दैनिक कार्यक्रम",
      morningAarti: "सुबह की आरती: सुबह 5:30 बजे",
      afternoonAarti: "दोपहर की आरती: दोपहर 12:00 बजे",
      eveningAarti: "शाम की आरती: शाम 7:00 बजे",
      specialPuja: "विशेष पूजा: शनिवार और मंगलवार",
      visitingHours: "दर्शन का समय: सुबह 5:00 – रात 9:00",
      upcomingFestivals: "🎊 आगामी त्योहार",
      festival1: "दुर्गा पूजा – अक्टूबर 2025",
      festival2: "दीपावली – नवंबर 2025",
      festival3: "छठ पूजा – नवंबर 2025",
      festival4: "मकर संक्रांति – जनवरी 2026",
      festival5: "शिवरात्रि – फरवरी 2026",
      festival6: "होली – मार्च 2026",
      todaySpecial: "आज का विशेष",
      specialPujaToday: "मंगलवार विशेष: सुंदरकांड पाठ",
      specialTiming: "शाम 6:00 बजे से 8:00 बजे तक",
      templeHistory: "मंदिर का इतिहास",
      templeHistoryText: "शिवश्यामा धाम की स्थापना वर्ष 1973 में हुई थी। तब से यह मंदिर निरंतर भक्तों की आस्था का केंद्र बना हुआ है। प्रतिदिन हजारों भक्त दर्शन के लिए आते हैं और माँ का आशीर्वाद प्राप्त करते हैं।",
      donationCounter: "🙏 दान सहयोग",
      donationAppeal: "मंदिर की गतिविधियों का समर्थन करें। आपका दान धारा 80जी के तहत कर मुक्त है।",
      donationGoal: "वार्षिक लक्ष्य: ₹50,00,000",
      currentDonation: "अब तक: ₹35,00,000",
      donorsCount: "दानदाता: 1,500+",
      donateBtn: "🙏 अभी दान करें",
      liveDarshan: "📹 लाइव दर्शन",
      liveDarshanText: "मंदिर से लाइव आरती का प्रसारण",
      watchNow: "अभी देखें",
      photoGallery: "📸 फोटो गैलरी",
      viewAll: "सभी देखें",
      upcomingEvents: "🎊 आगामी आयोजन",
      templeTimings: "मंदिर समय सारणी",
      summerTimings: "ग्रीष्मकाल: सुबह 4:30 – रात 9:30",
      winterTimings: "शीतकाल: सुबह 5:30 – रात 8:30",
      festivalTimings: "त्योहारों पर: सुबह 4:00 – रात 11:00",
      contactInfo: "संपर्क जानकारी",
      phone: "+91 1234567890",
      email: "info@shivshyamadham.org",
      address: "शिवश्यामा धाम, मधुपुर, दरभंगा, बिहार – 847101",
      templeRules: "मंदिर के नियम",
      rule1: "मंदिर परिसर में शुद्धता बनाए रखें",
      rule2: "मोबाइल फोन का उपयोग वर्जित है",
      rule3: "गर्भगृह में फोटोग्राफी वर्जित है",
      rule4: "प्रसाद ग्रहण करने के बाद ही निकलें",
      rule5: "पंक्ति में व्यवस्थित रूप से खड़े हों",
      devoteeReviews: "💬 भक्तों के अनुभव",
      review1: "यहाँ की शांति और दिव्यता अद्भुत है। माँ के दर्शन मात्र से मन को शांति मिलती है।",
      review2: "हर मंगलवार यहाँ आना सौभाग्य की बात है। माँ सबकी मनोकामना पूर्ण करती हैं।",
      review3: "बिहार का सबसे भव्य काली मंदिर। यहाँ की आरती में शामिल होना जीवन की सबसे अच्छी अनुभूति है।",
      reviewer1: "— राजेश कुमार",
      reviewer2: "— सीता देवी",
      reviewer3: "— अमित झा",
    },
    mai: {
      marqueeText: "🌸 जय श्यामा माँ || 🙏 हर हर महादेव || 🌸 जय माँ काली || 🔱 ॐ नमः शिवाय || ✨ जय माता दी || 🌸 ",
      defaultMantra: "काली महाकाली कालिके परमेश्वरी। सर्वानन्दकरी देवी नारायणि नमोऽस्तुते।।",
      hoverMantra: "ॐ जयन्ती, मङ्गला, काली, भद्रकाली, कपालिनी। दुर्गा, क्षमा, शिवा, धात्री, स्वाहा, स्वधा नमोऽस्तुते॥",
      overviewTitle: "🙏 श्री शिवश्यामा धाम में सबका स्वागत 🙏",
      historyTitle: "📜 ऐतिहासिक महत्व",
      history1: "कवि कोकिल विद्यापति के नमन करैत, दरभंगा जिला के मधुपुर गाम मिथिला के हृदयस्थली मानल जाइत अछि। जनश्रुति अनुसार त्रेतायुग में भगवान श्रीराम, लक्ष्मण आ महर्षि विश्वामित्र जनकपुर जाए के क्रम में एहि मार्ग सँ गुजरल छलाह। गाम के बुजुर्ग लोकनि के अनुसार ओहि ठाम विश्राम कएलनि आ मधुर फल खा कए प्रसन्न भऽ एहि स्थान के नाम ‘मधुर-पुरी’ देलनि, जे कालांतर में मधुपुर कहल गेल।",

history2: "मधुपुर गाम में एक अत्यंत प्राचीन शिवालय स्थित अछि जतय प्रतिदिन सैकड़ों भक्त भोलेनाथ के जलाभिषेक करैत छथि। महाशिवरात्रि पर हजारों श्रद्धालु यहाँ जुटैत छथि। शिवालय के सामने एक प्राचीन पोखरि अछि जतय सँ भक्त जल लऽ शिवलिंग पर अर्पित करैत छथि। छठ पूजा में एहि स्थान पर विशेष श्रद्धा देखल जाइत अछि। ग्रामीण सभ एहि स्थल के पर्यटन केंद्र बनेबाक इच्छा रखैत छथि।",

history3: "एहि परिसर में माँ श्यामा (काली) के भव्य मंदिर सेहो स्थित अछि। दीपावली पर पाँच दिवसीय काली पूजनोत्सव भव्य रूप सँ आयोजित होइत अछि, जतय दूर-दराज सँ हजारों भक्त पहुँचैत छथि। माँ श्यामा के संतानदायिनी माता मानल जाइत अछि आ भक्त सभ के मनोकामना पूर्ण होइत अछि। शिवश्यामा धाम धर्मार्थ सेवा ट्रस्ट द्वारा मंदिर के संचालन कएल जाइत अछि आ सामाजिक कार्य जेकाँ गरीब कन्या विवाह, चिकित्सा शिविर, कंबल वितरण आ भंडारा नियमित रूप सँ कएल जाइत अछि।",
      templeSignificance: "✨ मंदिर के महत्व",
      significance1: "मंदिर में माँ काली के भव्य मूर्ति अछि जेकरा परंपरागत आभूषण सँ सजाओल गेल अछि। गर्भगृह के आध्यात्मिक ऊर्जा भक्त प्रवेश करते महसूस करैत छथि।",
      significance2: "मंगलवार आ शनिवार के विशेष पूजा कएल जाइत अछि। नवरात्रि उत्सव में क्षेत्र भर सँ हजारों भक्त आबैत छथि।",
      significance3: "मंदिर में पवित्र शिवलिंग सेहो अछि जे भगवान शिव के ब्रह्मांडीय नृत्य के प्रतीक थिक। दुनू देवताक संयोजन इ मंदिर के अद्वितीय बनबैत अछि।",
      templeHighlights: "🏛️ मंदिर के विशेषता",
      highlight1: "भव्य काली मूर्ति",
      highlight2: "प्राचीन शिवलिंग",
      highlight3: "यज्ञशाला",
      highlight4: "भंडारा हॉल",
      highlight5: "ध्यान केंद्र",
      highlight6: "आध्यात्मिक पुस्तकालय",
      highlight7: "प्रसाद वितरण",
      highlight8: "भक्त विश्राम स्थल",
      dailySchedule: "📅 दैनिक कार्यक्रम",
      morningAarti: "सुबह के आरती: सुबह 5:30 बजे",
      afternoonAarti: "दोपहर के आरती: दोपहर 12:00 बजे",
      eveningAarti: "शाम के आरती: शाम 7:00 बजे",
      specialPuja: "विशेष पूजा: शनिवार आ मंगलवार",
      visitingHours: "दर्शन के समय: सुबह 5:00 – रात 9:00",
      upcomingFestivals: "🎊 आगामी त्योहार",
      festival1: "दुर्गा पूजा – अक्टूबर 2025",
      festival2: "दीपावली – नवंबर 2025",
      festival3: "छठ पूजा – नवंबर 2025",
      festival4: "मकर संक्रांति – जनवरी 2026",
      festival5: "शिवरात्रि – फरवरी 2026",
      festival6: "होली – मार्च 2026",
      todaySpecial: "आइ के विशेष",
      specialPujaToday: "मंगलवार विशेष: सुंदरकांड पाठ",
      specialTiming: "शाम 6:00 बजे सँ 8:00 बजे तक",
      templeHistory: "मंदिर के इतिहास",
      templeHistoryText: "शिवश्यामा धाम के स्थापना वर्ष 1973 में भेल छल। तब सँ इ मंदिर भक्तों के आस्था के केंद्र बनल अछि। प्रतिदिन हजारों भक्त दर्शन लेल आबैत छथि आ माँ के आशीर्वाद पबैत छथि।",
      donationCounter: "🙏 दान सहयोग",
      donationAppeal: "मंदिर के गतिविधि सबके समर्थन करू। अहांक दान धारा 80जी के तहत कर मुक्त अछि।",
      donationGoal: "वार्षिक लक्ष्य: ₹50,00,000",
      currentDonation: "अब तक: ₹35,00,000",
      donorsCount: "दानदाता: 1,500+",
      donateBtn: "🙏 अखनी दान करू",
      liveDarshan: "📹 लाइव दर्शन",
      liveDarshanText: "मंदिर सँ लाइव आरती के प्रसारण",
      watchNow: "अखनी देखू",
      photoGallery: "📸 फोटो गैलरी",
      viewAll: "सब देखू",
      upcomingEvents: "🎊 आगामी आयोजन",
      templeTimings: "मंदिर समय सारणी",
      summerTimings: "ग्रीष्मकाल: सुबह 4:30 – रात 9:30",
      winterTimings: "शीतकाल: सुबह 5:30 – रात 8:30",
      festivalTimings: "त्योहार पर: सुबह 4:00 – रात 11:00",
      contactInfo: "संपर्क जानकारी",
      phone: "+91 1234567890",
      email: "info@shivshyamadham.org",
      address: "शिवश्यामा धाम, मधुपुर, दरभंगा, बिहार – 847101",
      templeRules: "मंदिर के नियम",
      rule1: "मंदिर परिसर में शुद्धता बनाए रखू",
      rule2: "मोबाइल फोन के उपयोग वर्जित अछि",
      rule3: "गर्भगृह में फोटोग्राफी वर्जित अछि",
      rule4: "प्रसाद ग्रहण केलाक बाद निकलू",
      rule5: "पंक्ति में व्यवस्थित रूप सँ ठाढ़ रहू",
      devoteeReviews: "💬 भक्तों के अनुभव",
      review1: "एतय के शांति आ दिव्यता अद्भुत अछि। माँ के दर्शन मात्र सँ मन के शांति मिलैत अछि।",
      review2: "हर मंगलवार एतय आबए सौभाग्य के बात अछि। माँ सबके मनोकामना पूर्ण करैत छथि।",
      review3: "बिहार के सबसँ भव्य काली मंदिर। एतय के आरती में शामिल होएब जीवन के सबसँ नीक अनुभव अछि।",
      reviewer1: "— राजेश कुमार",
      reviewer2: "— सीता देवी",
      reviewer3: "— अमित झा",
    }
  };

  const t = translations[language] || translations.hi;

  return (
    <div className="home-container">

      {/* ── Top Marquee ── */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span>{t.marqueeText}</span>
          <span>{t.marqueeText}</span>
        </div>
      </div>

  {/* ── Hero Banner ── */}
<div className="temple-banner">
  <div className="banner-overlay" />
  <div className="banner-content">
    <div className="banner-title-wrapper">
      <span className="trishul-icon">🔱</span>
      <h1 className="banner-title">श्री शिवश्यामा धाम</h1>
      <span className="trishul-icon">🔱</span>
    </div>
    <p className="banner-subtitle">मधुपुर, दरभंगा, बिहार</p>
    <div className="banner-divider"><span>🕉️</span></div>
    <div
      className="banner-mantra"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="mantra-text">
        {isHovered ? t.hoverMantra : t.defaultMantra}
      </p>
    </div>
  </div>
</div>

      {/* ── Today's Special ── */}
      <div className="today-special">
        <div className="special-icon">🪔</div>
        <div className="special-content">
          <h3>{t.todaySpecial}</h3>
          <p>{t.specialPujaToday}</p>
          <p className="special-time">{t.specialTiming}</p>
        </div>
      </div>

      {/* ── Main Content + Sidebar ── */}
      <div className="content-wrapper">
        <div className="main-content-area">

          {/* Welcome / Tabs */}
          <section className="welcome-section">
            <h2 className="section-title">{t.overviewTitle}</h2>
            <div className="tabs-header">
              <button className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`} onClick={() => setActiveTab('history')}>{t.historyTitle}</button>
              <button className={`tab-btn ${activeTab === 'significance' ? 'active' : ''}`} onClick={() => setActiveTab('significance')}>{t.templeSignificance}</button>
              <button className={`tab-btn ${activeTab === 'highlights' ? 'active' : ''}`} onClick={() => setActiveTab('highlights')}>{t.templeHighlights}</button>
            </div>
            <div className="tab-content">
              {activeTab === 'history' && (
                <div className="tab-pane">
                  <p>{t.history1}</p>
                  <p>{t.history2}</p>
                  <p>{t.history3}</p>
                </div>
              )}
              {activeTab === 'significance' && (
                <div className="tab-pane">
                  <div className="significance-grid">
                    <div className="significance-item"><span className="sig-icon">🕉️</span><p>{t.significance1}</p></div>
                    <div className="significance-item"><span className="sig-icon">🌸</span><p>{t.significance2}</p></div>
                    <div className="significance-item"><span className="sig-icon">🔱</span><p>{t.significance3}</p></div>
                  </div>
                </div>
              )}
              {activeTab === 'highlights' && (
                <div className="tab-pane">
                  <div className="highlights-grid">
                    {[t.highlight1,t.highlight2,t.highlight3,t.highlight4,t.highlight5,t.highlight6,t.highlight7,t.highlight8].map((h,i) => (
                      <div key={i} className="highlight-chip">{h}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Auto Slider */}
          {/* <div className="slider-section">
            <AutoSlider />
          </div> */}

          {/* Features Grid */}
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⏰</div>
              <h3>{t.templeTimings}</h3>
              <ul className="feature-list">
                <li>{t.summerTimings}</li>
                <li>{t.winterTimings}</li>
                <li>{t.festivalTimings}</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📞</div>
              <h3>{t.contactInfo}</h3>
              <ul className="feature-list">
                <li>📱 {t.phone}</li>
                <li>✉️ {t.email}</li>
                <li>📍 {t.address}</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>{t.templeRules}</h3>
              <ul className="feature-list">
                <li>{t.rule1}</li>
                <li>{t.rule2}</li>
                <li>{t.rule3}</li>
                <li>{t.rule4}</li>
                <li>{t.rule5}</li>
              </ul>
            </div>
          </div>

          {/* Schedule & Festivals */}
          <div className="info-grid">
            <div className="schedule-card">
              <h3>{t.dailySchedule}</h3>
              <ul className="schedule-list">
                <li><span className="time-icon">🌅</span>{t.morningAarti}</li>
                <li><span className="time-icon">☀️</span>{t.afternoonAarti}</li>
                <li><span className="time-icon">🌆</span>{t.eveningAarti}</li>
                <li><span className="time-icon">✨</span>{t.specialPuja}</li>
                <li><span className="time-icon">🕉️</span>{t.visitingHours}</li>
              </ul>
            </div>
            <div className="events-card">
              <h3>{t.upcomingFestivals}</h3>
              <ul className="events-list">
                <li><span className="fest-icon">🎊</span>{t.festival1}</li>
                <li><span className="fest-icon">🪔</span>{t.festival2}</li>
                <li><span className="fest-icon">🌅</span>{t.festival3}</li>
                <li><span className="fest-icon">☀️</span>{t.festival4}</li>
                <li><span className="fest-icon">🔱</span>{t.festival5}</li>
                <li><span className="fest-icon">🎨</span>{t.festival6}</li>
              </ul>
            </div>
          </div>

          {/* Devotee Reviews */}
          <div className="reviews-section">
            <h3 className="reviews-title">{t.devoteeReviews}</h3>
            <div className="reviews-grid">
              <div className="review-card">
                <div className="review-stars">⭐⭐⭐⭐⭐</div>
                <p className="review-text">"{t.review1}"</p>
                <div className="reviewer-name">{t.reviewer1}</div>
              </div>
              <div className="review-card">
                <div className="review-stars">⭐⭐⭐⭐⭐</div>
                <p className="review-text">"{t.review2}"</p>
                <div className="reviewer-name">{t.reviewer2}</div>
              </div>
              <div className="review-card">
                <div className="review-stars">⭐⭐⭐⭐⭐</div>
                <p className="review-text">"{t.review3}"</p>
                <div className="reviewer-name">{t.reviewer3}</div>
              </div>
               <div className="review-card">
                <div className="review-stars">⭐⭐⭐⭐⭐</div>
                <p className="review-text">"{t.review1}"</p>
                <div className="reviewer-name">{t.reviewer1}</div>
              </div>
              
            </div>
          </div>
        </div>

        {/* ── SIDEBAR ── */}
        <aside className="sidebar">
          {/* Donation */}
          <div className="quick-donation">
            <h3>{t.donationCounter}</h3>
            <p>{t.donationAppeal}</p>
            <div className="donation-progress">
              <div className="progress-bar">
                <div className="progress-fill" />
              </div>
              <div className="donation-stats">
                <span>{t.donationGoal}</span>
                <span>{t.currentDonation}</span>
              </div>
              <p className="donors-count">{t.donorsCount}</p>
            </div>
            <button className="donate-quick-btn">{t.donateBtn}</button>
          </div>

          {/* Live Darshan */}
          <div className="live-darshan">
            <h3>{t.liveDarshan}</h3>
            <div className="live-placeholder">
              <div className="live-indicator" />
              <p>{t.liveDarshanText}</p>
              <button className="watch-live-btn">{t.watchNow}</button>
            </div>
          </div>

          {/* Gallery Preview */}
          <div className="gallery-preview">
            <h3>{t.photoGallery}</h3>
            <div className="preview-grid">
              <img src="/images/thumb1.jpg" alt="Temple" />
              <img src="/images/thumb2.jpg" alt="Aarti" />
              <img src="/images/thumb3.jpg" alt="Festival" />
              <img src="/images/thumb4.jpg" alt="Devotees" />
            </div>
            <button className="view-all-btn">{t.viewAll}</button>
          </div>

          {/* Festival Countdown */}
          <div className="festival-countdown">
            <h3>{t.upcomingEvents}</h3>
            <div className="countdown-item">
              <span className="festival-name">🎊 नवरात्रि 2025</span>
              <span className="days-left">शीघ्र</span>
            </div>
            <div className="countdown-item">
              <span className="festival-name">🪔 काली पूजा</span>
              <span className="days-left">शीघ्र</span>
            </div>
            <div className="countdown-item">
              <span className="festival-name">🔱 महाशिवरात्रि</span>
              <span className="days-left">फरवरी</span>
            </div>
          </div>
        </aside>
      </div>

      {/* ── Temple History (Full Width) ── */}
      <div className="history-section">
        <div className="history-content">
          <h2>{t.templeHistory}</h2>
          <p>{t.templeHistoryText}</p>
        </div>
      </div>

    </div>
  );
};

export default Home;