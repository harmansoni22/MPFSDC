/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useCallback } from 'react';

export const LanguageContext = createContext({
    lang: 'en',
    setLang: () => {},
    t: (key) => key,
});

const translations = {
    en: {
        home: 'Home',
        about: 'About Us',
        services: 'Services',
        projects: 'Projects',
        auctions: 'Auctions',
        gallery: 'Gallery',
        tenders: 'Tenders',
        contact: 'Contact',
        search: 'Search',
        accessibility: 'Accessibility',
        noticeBoard: 'Notice Board',
        welcome: 'Welcome to MPFSDC',
        heroTitle: 'Sustainable Forest Management for a Greener Tomorrow',
        heroDesc: 'Promoting environmental conservation and economic development through sustainable forest practices across Madhya Pradesh.',
        aboutMpf: 'About MPFSDC',
        auctionPortal: 'E-Auction Portal',
        quickLinks: 'Quick Links',
        leadership: 'Leadership Corner',
        specialInitiatives: 'Our Special Initiatives',
        photoGallery: 'Photo Gallery',
        viewAll: 'View All',
        documents: 'Important Documents',
        partner: 'Partner With Us for a Sustainable Future',
        partnerDesc: 'We welcome partnerships with government agencies, NGOs, and private organizations for collaborative forest conservation.',
        footerAbout: 'Madhya Pradesh Forest State Development Corporation is committed to sustainable forest management, biodiversity conservation, and community empowerment.',
        subscribe: 'Stay Updated with MPFSDC',
        subscribeDesc: 'Get the latest news on auctions, tenders, and forest initiatives.',
        enterEmail: 'Enter your email',
        subscribeBtn: 'Subscribe',
        thankYou: 'Thank you for subscribing!',
        quickLinksFooter: 'Quick Links',
        importantLinks: 'Important Links',
        connect: 'Connect With Us',
        office: 'Office Location',
        rights: 'All Rights Reserved.',
        lastUpdated: 'Last Updated',
        visitorCount: 'Visitor Count',
    },
    hi: {
        home: 'होम',
        about: 'हमारे बारे में',
        services: 'सेवाएं',
        projects: 'परियोजनाएं',
        auctions: 'नीलामी',
        gallery: 'गैलरी',
        tenders: 'टेंडर',
        contact: 'संपर्क',
        search: 'खोज',
        accessibility: 'पहुंचनीयता',
        noticeBoard: 'सूचना पट्ट',
        welcome: 'MPFSDC में आपका स्वागत है',
        heroTitle: 'हरे-भरे कल के लिए टिकाऊ वन प्रबंधन',
        heroDesc: 'मध्य प्रदेश में टिकाऊ वन प्रथाओं के माध्यम से पर्यावरण संरक्षण और आर्थिक विकास को बढ़ावा देना।',
        aboutMpf: 'MPFSDC के बारे में',
        auctionPortal: 'ई-नीलामी पोर्टल',
        quickLinks: 'त्वरित लिंक',
        leadership: 'नेतृत्व क्षेत्र',
        specialInitiatives: 'हमारी विशेष पहल',
        photoGallery: 'फोटो गैलरी',
        viewAll: 'सभी देखें',
        documents: 'महत्वपूर्ण दस्तावेज',
        partner: 'टिकाऊ भविष्य के लिए हमारे साथ भागीदारी करें',
        partnerDesc: 'सहयोगी वन संरक्षण और सामुदायिक विकास परियोजनाओं के लिए हम सरकारी एजेंसियों, एनजीओ और निजी संगठनों के साथ साझेदारी का स्वागत करते हैं।',
        footerAbout: 'मध्य प्रदेश वन राज्य विकास निगम टिकाऊ वन प्रबंधन, जैव विविधता संरक्षण और सामुदायिक सशक्तिकरण के लिए प्रतिबद्ध है।',
        subscribe: 'MPFSDC के साथ अपडेट रहें',
        subscribeDesc: 'नीलामी, टेंडर और वन पहलों पर नवीनतम समाचार प्राप्त करें।',
        enterEmail: 'अपना ईमेल दर्ज करें',
        subscribeBtn: 'सदस्यता लें',
        thankYou: 'सदस्यता लेने के लिए धन्यवाद!',
        quickLinksFooter: 'त्वरित लिंक',
        importantLinks: 'महत्वपूर्ण लिंक',
        connect: 'हमसे जुड़ें',
        office: 'कार्यालय स्थान',
        rights: 'सर्वाधिकार सुरक्षित।',
        lastUpdated: 'अंतिम अद्यतन',
        visitorCount: 'आगंतुक गणना',
    },
};

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('en');

    const t = useCallback((key) => {
        return translations[lang]?.[key] ?? key;
    }, [lang]);

    const toggle = useCallback(() => {
        setLang(prev => prev === 'en' ? 'hi' : 'en');
    }, []);

    return (
        <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
