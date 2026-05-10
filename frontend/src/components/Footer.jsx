import { useState } from 'react';
import { Link } from 'react-router-dom';
import { companySnapshot } from '../data/siteData';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) { setSubscribed(true); setEmail(''); }
    };

    return (
        <footer className="bg-gradient-to-b from-green-900 to-green-950 text-white">
            {/* Top section with CTA */}
            <div className="border-b border-green-800/50">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-xl font-bold mb-1">Stay Updated with MPRVVN</h3>
                            <p className="text-green-300/80 text-sm">Get updates on tenders, auctions, projects, and biodiversity initiatives.</p>
                        </div>
                        {subscribed ? (
                            <div className="bg-green-800/50 text-green-300 px-6 py-3 rounded-lg text-sm font-medium">
                                <i className="fas fa-check-circle mr-2"></i>Thank you for subscribing!
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="bg-white/10 border border-green-700/50 rounded-lg px-4 py-2.5 text-sm text-white placeholder-green-300/50 focus:outline-none focus:border-green-500 w-full md:w-64"
                                />
                                <button type="submit" className="bg-green-600 hover:bg-green-500 px-5 py-2.5 rounded-lg text-sm font-semibold transition whitespace-nowrap">
                                    Subscribe
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            {/* Main footer content */}
            <div className="container mx-auto px-4 py-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                <i className="fas fa-tree text-green-300"></i>
                            </div>
                            <h3 className="text-lg font-bold">MPFSDC</h3>
                        </div>
                        <p className="text-green-300/80 text-sm leading-relaxed mb-4">{companySnapshot.established}</p>
                        <div className="text-sm text-green-400/70">
                            <p><i className="fas fa-building-columns mr-2"></i>Government of Madhya Pradesh Enterprise</p>
                            <p><i className="fas fa-scale-balanced mr-2"></i>{companySnapshot.legal}</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-green-400 mb-4">Quick Links</h4>
                        <ul className="space-y-2.5 text-green-300/90 text-sm">
                            <li><Link to="/" className="hover:text-white transition flex items-center gap-2"><i className="fas fa-chevron-right text-[10px] text-green-500"></i>Home</Link></li>
                            <li><Link to="/about" className="hover:text-white transition flex items-center gap-2"><i className="fas fa-chevron-right text-[10px] text-green-500"></i>About</Link></li>
                            <li><Link to="/services" className="hover:text-white transition flex items-center gap-2"><i className="fas fa-chevron-right text-[10px] text-green-500"></i>Services</Link></li>
                            <li><Link to="/projects" className="hover:text-white transition flex items-center gap-2"><i className="fas fa-chevron-right text-[10px] text-green-500"></i>Projects</Link></li>
                            <li><Link to="/auctions" className="hover:text-white transition flex items-center gap-2"><i className="fas fa-chevron-right text-[10px] text-green-500"></i>Auctions</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition flex items-center gap-2"><i className="fas fa-chevron-right text-[10px] text-green-500"></i>Contact</Link></li>
                        </ul>
                    </div>

                    {/* Important Links */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-green-400 mb-4">Important Links</h4>
                        <ul className="space-y-2.5 text-green-300/90 text-sm">
                            <li><Link to="/downloads" className="hover:text-white transition flex items-center gap-2"><i className="fas fa-chevron-right text-[10px] text-green-500"></i>Acts, Rules, Circulars</Link></li>
                            <li><Link to="/tenders" className="hover:text-white transition flex items-center gap-2"><i className="fas fa-chevron-right text-[10px] text-green-500"></i>Tender Notices</Link></li>
                            <li><Link to="/auctions" className="hover:text-white transition flex items-center gap-2"><i className="fas fa-chevron-right text-[10px] text-green-500"></i>Current Auctions</Link></li>
                            <li><Link to="/downloads" className="hover:text-white transition flex items-center gap-2"><i className="fas fa-chevron-right text-[10px] text-green-500"></i>Annual Reports</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition flex items-center gap-2"><i className="fas fa-chevron-right text-[10px] text-green-500"></i>Grievance Support</Link></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-green-400 mb-4">Connect With Us</h4>
                        <div className="space-y-2 mb-5 text-sm text-green-200">
                            <p>Reference public-sector portals:</p>
                            <a href="https://fdcm.co.in/" className="block hover:text-white transition" target="_blank" rel="noreferrer">Forest Development Corporation of Maharashtra</a>
                            <a href="http://rvvn.cgstate.gov.in/hi" className="block hover:text-white transition" target="_blank" rel="noreferrer">Chhattisgarh RVVN</a>
                        </div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-green-400 mb-3">Office Location</h4>
                        <p className="text-green-300/80 text-sm leading-relaxed">
                            Van Bhawan Campus<br/>
                            Bhopal, Madhya Pradesh<br/>
                            India
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-green-800/50">
                <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <p className="text-green-400/60 text-xs">
                        © 2026 MPRVVN, Government of Madhya Pradesh. All Rights Reserved.
                    </p>
                    <p className="text-green-400/60 text-xs">
                        Last Updated: <span className="text-green-300/80">May 2026</span> | Public Information Portal
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
