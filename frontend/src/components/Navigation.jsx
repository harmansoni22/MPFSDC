import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
    { path: '/', label: 'Home', icon: 'fas fa-home' },
    { path: '/about', label: 'About Us', icon: 'fas fa-info-circle' },
    { path: '/services', label: 'Services', icon: 'fas fa-cogs' },
    { path: '/projects', label: 'Projects', icon: 'fas fa-project-diagram' },
    { path: '/auctions', label: 'Auctions', icon: 'fas fa-gavel' },
    { path: '/gallery', label: 'Gallery', icon: 'fas fa-images' },
    { path: '/tenders', label: 'Tenders', icon: 'fas fa-file-contract' },
    { path: '/contact', label: 'Contact', icon: 'fas fa-envelope' },
];

const Navigation = () => {
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 sticky top-0 z-50 shadow-lg border-t border-green-600/30">
            <div className="container mx-auto px-4">
                {/* Desktop nav */}
                <ul className="hidden md:flex flex-wrap justify-center gap-1 py-2">
                    {navItems.map(item => {
                        const active = location.pathname === item.path;
                        return (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                                        active
                                            ? 'bg-green-700 text-white shadow-md'
                                            : 'text-green-100 hover:bg-green-700/50 hover:text-white'
                                    }`}
                                >
                                    <i className={item.icon}></i>{item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile hamburger */}
                <div className="md:hidden flex items-center justify-between py-2">
                    <span className="text-green-200 text-sm font-medium">Menu</span>
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="text-white p-2 rounded-lg hover:bg-green-700/50 transition"
                        aria-label="Toggle menu"
                    >
                        <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                    </button>
                </div>

                {/* Mobile menu */}
                {mobileOpen && (
                    <div className="md:hidden pb-3 animate-fade-in-up">
                        <ul className="space-y-1">
                            {navItems.map(item => {
                                const active = location.pathname === item.path;
                                return (
                                    <li key={item.path}>
                                        <Link
                                            to={item.path}
                                            onClick={() => setMobileOpen(false)}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                                                active
                                                    ? 'bg-green-700 text-white'
                                                    : 'text-green-100 hover:bg-green-700/40 hover:text-white'
                                            }`}
                                        >
                                            <i className={`${item.icon} w-5 text-center`}></i>{item.label}
                                        </Link>
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
