import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { AppProvider } from './context/AppContext';
import AccessibilityPanel from './components/AccessibilityPanel';
import SearchModal from './components/SearchModal';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Auctions from './pages/Auctions';
import Gallery from './pages/Gallery';
import Tenders from './pages/Tenders';
import Contact from './pages/Contact';
import './index.css';

function AppRoutes() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/auctions" element={<Auctions />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/tenders" element={<Tenders />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
            <AccessibilityPanel />
            <SearchModal />
        </>
    );
}

function App() {
    return (
        <LanguageProvider>
            <AppProvider>
                <AppRoutes />
            </AppProvider>
        </LanguageProvider>
    );
}

export default App;
