import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import NoticeBoard from '../components/NoticeBoard';

const galleryImages = [
    { id: 1, title: 'Teak Plantation', location: 'Satpura Range', icon: 'fa-tree', color: 'from-green-600 to-green-800' },
    { id: 2, title: 'Nursery Operations', location: 'Jabalpur', icon: 'fa-seedling', color: 'from-emerald-600 to-emerald-800' },
    { id: 3, title: 'Timber Harvesting', location: 'Mandla', icon: 'fa-cut', color: 'from-amber-600 to-amber-800' },
    { id: 4, title: 'Community Training', location: 'Balaghat', icon: 'fa-users', color: 'from-blue-600 to-blue-800' },
    { id: 5, title: 'Wildlife Conservation', location: 'Kanha Reserve', icon: 'fa-paw', color: 'from-teal-600 to-teal-800' },
    { id: 6, title: 'Bamboo Plantation', location: 'Dindori', icon: 'fa-leaf', color: 'from-lime-600 to-lime-800' },
];

const quickLinks = [
    { to: '/auctions', icon: 'fas fa-gavel', title: 'E-Auctions', desc: 'Online timber auctions', color: 'bg-green-100 text-green-700' },
    { to: '/tenders', icon: 'fas fa-file-contract', title: 'Tenders', desc: 'Current procurement notices', color: 'bg-blue-100 text-blue-700' },
    { to: '/projects', icon: 'fas fa-project-diagram', title: 'Projects', desc: 'Ongoing & completed projects', color: 'bg-amber-100 text-amber-700' },
    { to: '/gallery', icon: 'fas fa-images', title: 'Gallery', desc: 'Photo & video gallery', color: 'bg-purple-100 text-purple-700' },
    { to: '/services', icon: 'fas fa-cogs', title: 'Services', desc: 'Forest management services', color: 'bg-cyan-100 text-cyan-700' },
    { to: '/contact', icon: 'fas fa-phone-alt', title: 'Contact', desc: 'Get in touch with us', color: 'bg-red-100 text-red-700' },
];

const downloads = [
    { title: 'Auction Rules 2023', size: '1.2 MB', icon: 'fas fa-file-pdf', color: 'text-red-500' },
    { title: 'Tender Guidelines', size: '850 KB', icon: 'fas fa-file-pdf', color: 'text-red-500' },
    { title: 'Annual Report 2022-23', size: '4.5 MB', icon: 'fas fa-file-pdf', color: 'text-red-500' },
    { title: 'Forest Policy Document', size: '2.1 MB', icon: 'fas fa-file-pdf', color: 'text-red-500' },
    { title: 'Bid Document Format', size: '320 KB', icon: 'fas fa-file-word', color: 'text-blue-500' },
    { title: 'Application Form', size: '180 KB', icon: 'fas fa-file-word', color: 'text-blue-500' },
];

const stats = [
    { target: 2500000, suffix: '', label: 'Hectares Managed', prefix: '' },
    { target: 75000, suffix: ' m³', label: 'Annual Production', prefix: '' },
    { target: 50000, suffix: '+', label: 'People Employed', prefix: '' },
    { target: 38, suffix: '', label: 'Years of Service', prefix: '' },
];

const Home = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [scrollTopVisible, setScrollTopVisible] = useState(false);
    const galleryRef = useRef(null);

    useEffect(() => {
        // Fade-in observer
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        );
        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

        // Counter animation
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = +el.dataset.target;
                    const duration = 2000;
                    const start = performance.now();
                    const animate = (now) => {
                        const progress = Math.min((now - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const current = Math.floor(eased * target);
                        if (target >= 1000000) {
                            el.textContent = (current / 1000000).toFixed(1) + 'M';
                        } else if (target >= 1000) {
                            el.textContent = (current / 1000).toFixed(0) + 'K';
                        } else {
                            el.textContent = current.toLocaleString();
                        }
                        if (progress < 1) requestAnimationFrame(animate);
                    };
                    requestAnimationFrame(animate);
                    counterObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

        // Scroll to top visibility
        const onScroll = () => setScrollTopVisible(window.scrollY > 300);
        window.addEventListener('scroll', onScroll);

        // Keyboard navigation for lightbox
        const onKey = (e) => {
            if (!lightboxOpen) return;
            if (e.key === 'Escape') setLightboxOpen(false);
            if (e.key === 'ArrowLeft') setLightboxIndex(i => (i - 1 + galleryImages.length) % galleryImages.length);
            if (e.key === 'ArrowRight') setLightboxIndex(i => (i + 1) % galleryImages.length);
        };
        window.addEventListener('keydown', onKey);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('keydown', onKey);
        };
    }, [lightboxOpen]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const openLightbox = (index) => { setLightboxIndex(index); setLightboxOpen(true); };
    const nextImage = () => setLightboxIndex(i => (i + 1) % galleryImages.length);
    const prevImage = () => setLightboxIndex(i => (i - 1 + galleryImages.length) % galleryImages.length);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Navigation />
            <NoticeBoard />

            <main className="flex-1">
                {/* ===== HERO BANNER ===== */}
                <section className="relative h-[420px] md:h-[520px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900"></div>
                    <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(34,197,94,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(16,185,129,0.2) 0%, transparent 50%)'
                    }}></div>
                    <div className="absolute inset-0 hero-pattern opacity-5"></div>
                    <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
                        <div className="max-w-3xl fade-in">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-green-400/30 rounded-full px-4 py-1.5 text-green-200 text-sm mb-6">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                Government of Madhya Pradesh
                            </div>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
                                Sustainable Forest<br/>Management for a<br/><span className="text-green-300">Greener Tomorrow</span>
                            </h2>
                            <p className="text-lg md:text-xl text-green-100/90 mb-8 max-w-xl leading-relaxed">
                                Promoting environmental conservation and economic development through sustainable forest practices across Madhya Pradesh.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/about" className="bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-xl font-semibold transition shadow-lg shadow-green-900/40 flex items-center gap-2">
                                    <i className="fas fa-info-circle"></i>About MPFSDC
                                </Link>
                                <Link to="/auctions" className="bg-white/10 hover:bg-white/20 backdrop-blur text-white border border-white/20 px-6 py-3 rounded-xl font-semibold transition flex items-center gap-2">
                                    <i className="fas fa-gavel"></i>E-Auction Portal
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Decorative tree silhouettes */}
                    <div className="absolute bottom-0 right-0 opacity-10 text-white hidden lg:block">
                        <i className="fas fa-tree text-[300px]"></i>
                    </div>
                </section>

                {/* ===== QUICK LINKS CARDS ===== */}
                <section className="py-10 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {quickLinks.map((link, i) => (
                                <Link key={i} to={link.to} className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1 fade-in">
                                    <div className={`w-12 h-12 ${link.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                                        <i className={`${link.icon} text-xl`}></i>
                                    </div>
                                    <h3 className="font-semibold text-gray-800 text-sm">{link.title}</h3>
                                    <p className="text-xs text-gray-500 mt-1">{link.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== WELCOME / ABOUT + LEADERSHIP ===== */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Welcome text */}
                            <div className="lg:col-span-2 fade-in">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-1 h-8 bg-green-600 rounded-full"></div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-green-800">Welcome to MPFSDC</h2>
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-4 text-base">
                                    Madhya Pradesh Forest State Development Corporation (MPFSDC), established in <strong className="text-green-700">1985</strong>, is a company fully owned by the Government of Madhya Pradesh. With over three decades of experience, MPFSDC has been instrumental in promoting sustainable forest management, biodiversity conservation, and economic development.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-6 text-base">
                                    We manage approximately <strong className="text-green-700">2.5 million hectares</strong> of forest area and harvest around <strong className="text-green-700">75,000 m³</strong> of timber annually. Our commitment to FSC-certified sustainable practices has set benchmarks across India.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <Link to="/about" className="text-green-700 font-semibold hover:text-green-800 flex items-center gap-2 transition group">
                                        Read More About Us <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                                    </Link>
                                </div>

                                {/* Key highlights row */}
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
                                    {[
                                        { icon: 'fa-certificate', label: 'FSC Certified', sub: 'FM & CoC' },
                                        { icon: 'fa-calendar-alt', label: 'Since 1985', sub: '38+ Years' },
                                        { icon: 'fa-map-marker-alt', label: 'Bhopal', sub: 'Headquarters' },
                                        { icon: 'fa-users', label: '50,000+', sub: 'Employment' },
                                    ].map((item, i) => (
                                        <div key={i} className="bg-green-50 rounded-lg p-3 text-center border border-green-100">
                                            <i className={`fas ${item.icon} text-green-600 text-lg mb-1`}></i>
                                            <div className="text-sm font-bold text-green-800">{item.label}</div>
                                            <div className="text-xs text-green-600">{item.sub}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Leadership Corner */}
                            <div className="fade-in">
                                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                                    <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                                        <i className="fas fa-user-tie"></i> Leadership Corner
                                    </h3>
                                    <div className="bg-white rounded-xl p-5 shadow-sm border border-green-100 text-center">
                                        <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-3 flex items-center justify-center border-4 border-green-50">
                                            <i className="fas fa-user text-green-600 text-3xl"></i>
                                        </div>
                                        <h4 className="font-bold text-gray-800">Shri. Arvind Singh Tomar</h4>
                                        <p className="text-sm text-green-700 font-medium">Managing Director</p>
                                        <p className="text-xs text-gray-500 mt-1">IFS Officer with 25+ years of experience</p>
                                        <div className="mt-3 pt-3 border-t border-gray-100">
                                            <Link to="/about" className="text-xs text-green-600 hover:text-green-800 font-medium">
                                                View All Leadership <i className="fas fa-arrow-right ml-1"></i>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Mini e-auction CTA */}
                                    <div className="mt-4 bg-gradient-to-r from-green-700 to-green-600 rounded-xl p-4 text-white text-center">
                                        <i className="fas fa-gavel text-2xl mb-2 opacity-90"></i>
                                        <h4 className="font-bold text-sm">E-Auction Portal</h4>
                                        <p className="text-xs text-green-100 mt-1 mb-3">Participate in online timber auctions</p>
                                        <Link to="/auctions" className="inline-block bg-white text-green-700 text-xs font-bold px-4 py-2 rounded-lg hover:bg-green-50 transition">
                                            Visit Portal
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== QUALITY INITIATIVES (like FDCM's Special Features) ===== */}
                <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12 fade-in">
                            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-3">Our Special Initiatives</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">Driving excellence in forest management through quality-focused programs and sustainable practices.</p>
                            <div className="section-divider"></div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: 'fa-seedling', title: 'Quality Seeds', desc: 'High-yield, disease-resistant forest seeds certified for optimal germination rates across all plantation zones.', link: '/services' },
                                { icon: 'fa-spa', title: 'Quality Seedlings', desc: 'Modern nursery facilities producing robust, climate-adapted saplings for large-scale afforestation drives.', link: '/services' },
                                { icon: 'fa-tree', title: 'Quality Timber', desc: 'FSC-certified sustainable timber harvesting maintaining the highest standards of forest stewardship.', link: '/auctions' },
                                { icon: 'fa-laptop', title: 'E-Auction Platform', desc: 'Transparent online bidding system for forest produce ensuring fair prices and wide participation.', link: '/auctions' },
                            ].map((card, i) => (
                                <div key={i} className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 fade-in">
                                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-green-200">
                                        <i className={`fas ${card.icon} text-white text-xl`}></i>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">{card.title}</h3>
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{card.desc}</p>
                                    <Link to={card.link} className="text-green-600 text-sm font-semibold hover:text-green-800 flex items-center gap-1 group/link">
                                        Learn More <i className="fas fa-arrow-right group-hover/link:translate-x-1 transition-transform text-xs"></i>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== PHOTO GALLERY CAROUSEL ===== */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-between mb-8 fade-in">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-green-800">Photo Gallery</h2>
                                <p className="text-gray-500 text-sm mt-1">Visual journey through our conservation efforts</p>
                            </div>
                            <Link to="/gallery" className="text-green-700 font-semibold text-sm hover:text-green-900 flex items-center gap-1 transition">
                                View All <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" ref={galleryRef}>
                            {galleryImages.map((img, i) => (
                                <div key={img.id} onClick={() => openLightbox(i)} className="group cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 fade-in">
                                    <div className={`h-36 bg-gradient-to-br ${img.color} flex items-center justify-center relative`}>
                                        <i className={`fas ${img.icon} text-white/30 text-5xl group-hover:scale-125 transition-transform duration-500`}></i>
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                                                    <i className="fas fa-expand text-gray-800"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 bg-white">
                                        <h4 className="font-semibold text-gray-800 text-sm truncate">{img.title}</h4>
                                        <p className="text-xs text-gray-500"><i className="fas fa-map-marker-alt mr-1 text-green-500"></i>{img.location}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== STATISTICS COUNTER ===== */}
                <section className="py-16 bg-gradient-to-r from-green-800 via-green-700 to-green-800 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px'
                    }}></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                            {stats.map((stat, i) => (
                                <div key={i} className="text-center fade-in">
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur border border-white/10">
                                        <i className={`fas ${['fa-map', 'fa-cube', 'fa-users', 'fa-calendar-check'][i]} text-green-300 text-2xl`}></i>
                                    </div>
                                    <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">
                                        <span className="counter" data-target={stat.target}>0</span>
                                        <span className="text-green-300">{stat.suffix}</span>
                                    </div>
                                    <p className="text-green-200/80 text-sm font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== DOCUMENTS DOWNLOAD ===== */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-10 fade-in">
                            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">Important Documents</h2>
                            <p className="text-gray-600 text-sm">Download forms, policies, and official documents</p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                            {downloads.map((doc, i) => (
                                <button key={i} className="group flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md border border-gray-100 transition-all hover:-translate-y-0.5 text-left fade-in">
                                    <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center shrink-0">
                                        <i className={`${doc.icon} ${doc.color} text-lg`}></i>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-semibold text-gray-800 text-sm truncate group-hover:text-green-700 transition">{doc.title}</h4>
                                        <p className="text-xs text-gray-400">{doc.size}</p>
                                    </div>
                                    <i className="fas fa-download text-gray-300 group-hover:text-green-600 transition"></i>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== CALL TO ACTION ===== */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="bg-gradient-to-r from-green-700 to-emerald-600 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden fade-in">
                            <div className="absolute top-0 right-0 opacity-10 text-[200px] leading-none -mr-10 -mt-10">
                                <i className="fas fa-tree"></i>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-3 relative z-10">Partner With Us for a Sustainable Future</h2>
                            <p className="text-green-100 max-w-2xl mx-auto mb-8 relative z-10">
                                We welcome partnerships with government agencies, NGOs, and private organizations for collaborative forest conservation and community development projects.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 relative z-10">
                                <Link to="/contact" className="bg-white text-green-700 px-8 py-3 rounded-xl font-bold hover:bg-green-50 transition shadow-lg">
                                    <i className="fas fa-handshake mr-2"></i>Partner With Us
                                </Link>
                                <Link to="/tenders" className="bg-green-600/50 text-white border border-white/30 px-8 py-3 rounded-xl font-bold hover:bg-green-600/70 transition">
                                    <i className="fas fa-file-contract mr-2"></i>View Tenders
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            {/* ===== LIGHTBOX ===== */}
            {lightboxOpen && (
                <div className="lightbox-overlay active" onClick={() => setLightboxOpen(false)}>
                    <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white transition z-10">
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white transition z-10">
                        <i className="fas fa-chevron-right"></i>
                    </button>
                    <button onClick={() => setLightboxOpen(false)} className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white transition z-10">
                        <i className="fas fa-times text-lg"></i>
                    </button>
                    <div className="text-center" onClick={e => e.stopPropagation()}>
                        <div className={`w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br ${galleryImages[lightboxIndex].color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl`}>
                            <i className={`fas ${galleryImages[lightboxIndex].icon} text-white/40 text-8xl`}></i>
                        </div>
                        <h3 className="text-xl font-bold text-white">{galleryImages[lightboxIndex].title}</h3>
                        <p className="text-green-200/80"><i className="fas fa-map-marker-alt mr-1"></i>{galleryImages[lightboxIndex].location}</p>
                        <p className="text-white/40 text-sm mt-2">{lightboxIndex + 1} / {galleryImages.length}</p>
                    </div>
                </div>
            )}

            {/* ===== SCROLL TO TOP ===== */}
            <button
                onClick={scrollToTop}
                className={`scroll-to-top ${scrollTopVisible ? 'visible' : ''} w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300`}
                aria-label="Scroll to top"
            >
                <i className="fas fa-chevron-up"></i>
            </button>
        </div>
    );
};

export default Home;
