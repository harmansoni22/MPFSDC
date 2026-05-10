import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { companySnapshot } from '../data/siteData';

const Header = () => {
    const { lang, toggle: toggleLang } = useLanguage();
    const { openSearch } = useApp();
    const today = new Date().toLocaleDateString('en-IN', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    return (
        <>
            {/* Government top bar */}
            <div className="bg-olive-900 text-beige-100 text-xs py-1.5 border-b border-olive-800">
                <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
                    <div className="flex items-center gap-4">
                        <span className="opacity-90"><i className="far fa-calendar-alt mr-1"></i>{today}</span>
                        <span className="text-olive-500 hidden sm:inline">|</span>
                        <a href="#main-content" className="hover:text-gold-400 transition hidden sm:inline">Skip to Main Content</a>
                    </div>
                    <div className="flex items-center gap-3">
                        <button onClick={toggleLang} className="bg-olive-700 hover:bg-olive-600 px-2 py-0.5 rounded transition flex items-center gap-1 font-medium text-white border border-olive-600">
                            <i className="fas fa-language"></i>{lang === 'en' ? 'हिन्दी' : 'English'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Main header */}
            <header className="bg-beige-50 text-olive-900 shadow-sm relative overflow-hidden border-b border-beige-200">
                <div className="container mx-auto px-4 relative z-10 py-4">
                    <div className="flex justify-between items-center">
                        {/* Empty div for flex balance if needed, but we'll use absolute positioning for search to truly center the logo */}
                        <div className="flex-1 hidden md:block"></div>
                        
                        <div className="flex flex-col items-center text-center flex-shrink-0">
                            <img src="/logo_no-bg.png" alt="MPRVVN logo" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
                            <div className="mt-3">
                                <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-olive-900">{companySnapshot.name}</h1>
                                <p className="text-sm md:text-base text-olive-700 font-semibold tracking-wide mt-1">{companySnapshot.tagline}</p>
                            </div>
                        </div>

                        <div className="flex-1 flex justify-end items-center">
                            <button onClick={openSearch} className="bg-beige-100 hover:bg-beige-200 px-4 py-2 rounded-lg transition flex items-center gap-2 text-sm border border-beige-300 text-olive-800 shadow-sm">
                                <i className="fas fa-search"></i><span className="hidden md:inline font-medium">Search</span>
                                <span className="hidden lg:inline text-xs text-olive-600 bg-beige-300/50 px-1.5 py-0.5 rounded font-mono">Ctrl+K</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
