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
import Downloads from './pages/Downloads';
import Contact from './pages/Contact';
import Directory from './pages/Directory';
import SeoMeta from './components/SeoMeta';
import './index.css';


import ForestryActivities from './pages/ForestryActivities';
import TurnkeyProjects from './pages/TurnkeyProjects';
import Operations from './pages/Operations';
import EServices from './pages/EServices';

function AppRoutes() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<><SeoMeta /><Home /></>} />
                    <Route path="/about" element={<><SeoMeta /><About /></>} />
                    <Route path="/services" element={<><SeoMeta /><Services /></>} />
                    <Route path="/projects" element={<><SeoMeta /><Projects /></>} />
                    <Route path="/auctions" element={<><SeoMeta /><Auctions /></>} />
                    <Route path="/gallery" element={<><SeoMeta /><Gallery /></>} />
                    <Route path="/tenders" element={<><SeoMeta /><Tenders /></>} />
                    <Route path="/downloads" element={<><SeoMeta /><Downloads /></>} />
                    <Route path="/contact" element={<><SeoMeta /><Contact /></>} />
                    <Route path="/directory" element={<><SeoMeta /><Directory /></>} />
                    <Route path="/operations" element={<><SeoMeta /><Operations /></>} />
                    <Route path="/e-services" element={<><SeoMeta /><EServices /></>} />
                    <Route path="/forestry-activities" element={<><SeoMeta /><ForestryActivities /></>} />
                    <Route path="/turnkey-projects" element={<><SeoMeta /><TurnkeyProjects /></>} />

                </Routes>
                <AccessibilityPanel />
                <SearchModal />
            </Router>
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
