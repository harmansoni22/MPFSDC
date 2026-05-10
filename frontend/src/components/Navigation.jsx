import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../data/siteData';

const Navigation = () => {
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleMouseEnter = (index) => {
        setOpenDropdown(index);
    };

    const handleMouseLeave = () => {
        setOpenDropdown(null);
    };

    return (
        <nav className="bg-olive-800 sticky top-0 z-50 shadow-md border-b border-olive-900 text-beige-50">
            <div className="container mx-auto px-4">
                {/* Desktop nav */}
                <ul className="hidden md:flex flex-wrap justify-center font-semibold text-sm">
                    {navItems.map((item, index) => {
                        const hasDropdown = item.subItems && item.subItems.length > 0;
                        const active = location.pathname === item.path || (hasDropdown && item.subItems.some(sub => location.pathname === sub.path));
                        
                        return (
                            <li 
                                key={index} 
                                className="relative group"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link
                                    to={item.path}
                                    className={`flex items-center gap-2 px-5 py-3.5 transition-all duration-200 border-b-2 ${
                                        active
                                            ? 'bg-olive-700 text-gold-300 border-gold-400'
                                            : 'border-transparent hover:bg-olive-700 hover:text-gold-200'
                                    }`}
                                >
                                    <i className={item.icon}></i>
                                    {item.label}
                                    {hasDropdown && <i className="fas fa-chevron-down text-[10px] ml-1 opacity-70"></i>}
                                </Link>

                                {/* Dropdown menu */}
                                {hasDropdown && openDropdown === index && (
                                    <div className="absolute left-0 top-full min-w-[240px] bg-beige-50 text-olive-900 shadow-xl border-t-2 border-gold-400 rounded-b-lg overflow-hidden animate-fade-in-up z-50">
                                        <ul className="py-2">
                                            {item.subItems.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link
                                                        to={subItem.path}
                                                        className="block px-4 py-2.5 text-sm hover:bg-beige-200 hover:text-olive-700 transition-colors border-b border-beige-200 last:border-0"
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile hamburger */}
                <div className="md:hidden flex items-center justify-between py-3">
                    <span className="text-beige-100 text-sm font-semibold tracking-wider">MENU</span>
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="text-beige-50 p-2 rounded-lg hover:bg-olive-700 transition"
                        aria-label="Toggle menu"
                    >
                        <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                    </button>
                </div>

                {/* Mobile menu */}
                {mobileOpen && (
                    <div className="md:hidden pb-4 animate-fade-in-up">
                        <ul className="space-y-1">
                            {navItems.map((item, index) => {
                                const hasDropdown = item.subItems && item.subItems.length > 0;
                                const active = location.pathname === item.path;
                                
                                return (
                                    <li key={index} className="border-b border-olive-700/50 last:border-0">
                                        <Link
                                            to={item.path}
                                            onClick={() => !hasDropdown && setMobileOpen(false)}
                                            className={`flex justify-between items-center px-4 py-3 text-sm font-medium transition-all ${
                                                active
                                                    ? 'bg-olive-700 text-gold-300'
                                                    : 'hover:bg-olive-700 hover:text-gold-200'
                                            }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <i className={`${item.icon} w-5 text-center`}></i>
                                                {item.label}
                                            </div>
                                            {hasDropdown && <i className="fas fa-chevron-down text-xs"></i>}
                                        </Link>
                                        
                                        {/* Mobile Submenu (expanded by default in mobile for simplicity or could be toggleable) */}
                                        {hasDropdown && (
                                            <ul className="bg-olive-900 py-2">
                                                {item.subItems.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link
                                                            to={subItem.path}
                                                            onClick={() => setMobileOpen(false)}
                                                            className="block px-12 py-2 text-sm text-beige-300 hover:text-gold-300 hover:bg-olive-800"
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
