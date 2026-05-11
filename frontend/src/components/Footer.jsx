import { Link } from 'react-router-dom';
import { companySnapshot } from '../data/siteData';


const Footer = () => {
    // Footer kept static for public information credibility.
    // Newsletter subscription UI removed intentionally.


    return (
        <footer className="bg-beige-100 text-stone-700 border-t-4 border-gold-400">

            {/* ── Public Information Strip ── */}
            <div className="bg-beige-200 border-b border-beige-300">
                <div className="container mx-auto px-6 py-6">
                    <div className="grid md:grid-cols-3 gap-6 items-start">
                        <div>
                            <h3 className="text-base font-bold text-stone-800">Public Interface</h3>
                            <p className="text-sm text-stone-500 mt-0.5">
                                Official notices and circulars are published in the relevant sections of this portal.
                            </p>
                        </div>
                        <div className="text-sm">
                            <p className="font-semibold text-stone-700">Office Timings</p>
                            <p className="text-stone-500">Mon–Fri, 10:00 AM to 05:30 PM (working days)</p>
                        </div>
                        <div className="text-sm">
                            <p className="font-semibold text-stone-700">Grievance / RTI</p>
                            <div className="mt-2 flex flex-col sm:flex-row gap-3">
                                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-olive-800 hover:text-olive-900 transition-colors">
                                    <i className="fas fa-headset text-gold-500"></i> Contact / Grievance
                                </Link>
                                <Link to="/downloads#rti-rts" className="inline-flex items-center gap-2 text-sm font-bold text-olive-800 hover:text-olive-900 transition-colors">
                                    <i className="fas fa-file-alt text-gold-500"></i> RTI / RTS
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Main Footer Grid ── */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Column 1: About */}
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-11 h-11 bg-white border border-beige-300 rounded-xl flex items-center justify-center shadow-sm">
                                <i className="fas fa-tree text-olive-600 text-lg"></i>
                            </div>
                            <div>
                                <h3 className="text-base font-extrabold text-stone-800 leading-tight">MPRVVN</h3>
                                <p className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">Bhopal, M.P.</p>
                            </div>
                        </div>
                        <p className="text-sm text-stone-600 leading-relaxed mb-5">{companySnapshot.established}</p>
                        <div className="space-y-2 text-sm text-stone-500">
                            <div className="flex items-center gap-2">
                                <i className="fas fa-building-columns text-gold-500 w-4 text-center text-xs"></i>
                                <span>Government of Madhya Pradesh</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <i className="fas fa-scale-balanced text-gold-500 w-4 text-center text-xs"></i>
                                <span>{companySnapshot.legal}</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-5 pb-2 border-b border-beige-300">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { to: '/', label: 'Home', icon: 'fa-home' },
                                { to: '/about', label: 'About MPRVVN', icon: 'fa-info-circle' },
                                { to: '/services', label: 'Our Services', icon: 'fa-cogs' },
                                { to: '/projects', label: 'Projects', icon: 'fa-project-diagram' },
                                { to: '/gallery', label: 'Photo Gallery', icon: 'fa-images' },
                                { to: '/contact', label: 'Contact Us', icon: 'fa-envelope' },
                            ].map(item => (
                                <li key={item.to}>
                                    <Link to={item.to} className="flex items-center gap-3 text-sm text-stone-600 hover:text-stone-900 transition-colors group">
                                        <i className={`fas ${item.icon} text-gold-500 group-hover:text-gold-600 transition-colors w-4 text-center text-xs`}></i>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: E-Services */}
                    <div>
                        <div className="flex items-center justify-between gap-3 mb-5">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400">E-Services</h4>
                            <Link to="/e-services" className="text-xs font-bold text-gold-600 hover:text-gold-700 transition-colors hidden sm:inline-flex items-center gap-2">
                                View all <i className="fas fa-arrow-right" />
                            </Link>
                        </div>
                        <ul className="space-y-3">
                            {[
                                { to: '/e-services', label: 'E-Services Landing', icon: 'fa-laptop' },
                                { to: '/tenders', label: 'Tender Notices', icon: 'fa-file-alt' },
                                { to: '/auctions', label: 'E-Auction Portal', icon: 'fa-gavel' },
                                { to: '/downloads', label: 'Acts & Circulars', icon: 'fa-download' },
                                { to: '/downloads', label: 'Annual Reports', icon: 'fa-chart-bar' },
                                { to: '/directory', label: 'Officers Directory', icon: 'fa-address-book' },
                                { to: '/contact', label: 'Grievance Portal', icon: 'fa-headset' },
                            ].map(item => (
                                <li key={item.label}>
                                    <Link to={item.to} className="flex items-center gap-3 text-sm text-stone-600 hover:text-stone-900 transition-colors group">
                                        <i className={`fas ${item.icon} text-gold-500 group-hover:text-gold-600 transition-colors w-4 text-center text-xs`}></i>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-5 pb-2 border-b border-beige-300">Head Office</h4>
                        <div className="space-y-4 text-sm text-stone-600">
                            <div className="flex gap-3">
                                <i className="fas fa-map-marker-alt text-gold-500 mt-0.5 w-4 text-center flex-shrink-0 text-xs"></i>
                                <span className="leading-relaxed">Van Bhawan, Block-C, 1st Floor,<br />Tulsi Nagar, Bhopal – 462003<br />Madhya Pradesh, India</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <i className="fas fa-phone text-gold-500 w-4 text-center flex-shrink-0 text-xs"></i>
                                <a href="tel:07552674204" className="hover:text-stone-900 transition-colors">0755-2674204</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <i className="fas fa-envelope text-gold-500 w-4 text-center flex-shrink-0 text-xs"></i>
                                <a href="mailto:mdrvvn@mp.gov.in" className="hover:text-stone-900 transition-colors break-all">mdrvvn@mp.gov.in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Bottom Bar ── */}
            <div className="bg-beige-200 border-t border-beige-300">
                <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
                    <p className="text-xs text-stone-500 text-center sm:text-left">
                        © 2026 MP Rajya Van Vikas Nigam Ltd. — Government of Madhya Pradesh. All rights reserved.
                    </p>
                    <p className="text-xs text-stone-400">
                        Last Updated: <span className="text-stone-600 font-semibold">May 2026</span> · Public Information Portal
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
