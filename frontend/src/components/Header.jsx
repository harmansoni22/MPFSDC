import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';

const Header = () => {
    const { lang, toggle: toggleLang } = useLanguage();
    const { openSearch } = useApp();
    const [searchOpen, setSearchOpen] = useState(false);
    const [fontSize, setFontSize] = useState(100);

    const adjustFont = (delta) => {
        const newSize = Math.max(80, Math.min(140, fontSize + delta));
        setFontSize(newSize);
        document.documentElement.style.fontSize = newSize + '%';
    };

    const today = new Date().toLocaleDateString('en-IN', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    return (
        <>
            {/* Government top bar */}
            <div className="bg-gray-800 text-white text-xs py-1.5">
                <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
                    <div className="flex items-center gap-4">
                        <span className="opacity-80"><i className="far fa-calendar-alt mr-1"></i>{today}</span>
                        <span className="text-green-400 opacity-90 hidden sm:inline">|</span>
                        <Link to="/" className="hover:text-green-300 transition hidden sm:inline">Skip to Main Content</Link>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="opacity-70 hidden sm:inline">Screen Reader Access</span>
                        <button onClick={() => adjustFont(-10)} className="bg-gray-700 hover:bg-gray-600 px-2 py-0.5 rounded transition" title="Decrease font">A-</button>
                        <button onClick={() => adjustFont(10)} className="bg-gray-700 hover:bg-gray-600 px-2 py-0.5 rounded transition" title="Increase font">A+</button>
                        <button onClick={toggleLang} className="bg-green-700 hover:bg-green-600 px-2 py-0.5 rounded transition flex items-center gap-1 font-medium">
                            <i className="fas fa-language"></i>{lang === 'en' ? 'हिन्दी' : 'English'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Main header */}
            <header className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white shadow-lg relative overflow-hidden">
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)'
                }}></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex justify-between items-center py-5">
                        {/* Logo area */}
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur rounded-full flex items-center justify-center border-2 border-green-400/30 shadow-inner">
                                <i className="fas fa-tree text-green-300 text-2xl md:text-3xl"></i>
                            </div>
                            <div>
                                <h1 className="text-xl md:text-3xl font-extrabold tracking-tight">MPFSDC</h1>
                                <p className="text-xs md:text-sm text-green-200/90 font-medium tracking-wide">Madhya Pradesh Forest State Development Corporation</p>
                                <p className="text-[10px] md:text-xs text-green-300/70 mt-0.5">Government of Madhya Pradesh</p>
                            </div>
                        </div>

                        {/* Right side */}
                        <div className="flex items-center gap-3">
                            {/* Search */}
                            <button onClick={openSearch} className="bg-white/10 hover:bg-white/20 backdrop-blur px-3 py-2 rounded-lg transition flex items-center gap-2 text-sm border border-green-400/20">
                                <i className="fas fa-search"></i><span className="hidden md:inline">Search</span>
                                <span className="hidden lg:inline text-xs text-green-300/50 bg-green-800/50 px-1.5 py-0.5 rounded font-mono">Ctrl+K</span>
                            </button>

                            {/* Accessibility button */}
                            <button className="bg-white/10 hover:bg-white/20 backdrop-blur px-3 py-2 rounded-lg transition border border-green-400/20" title="Accessibility Options">
                                <i className="fas fa-universal-access text-lg"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
