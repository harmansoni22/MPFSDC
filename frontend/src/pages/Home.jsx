import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';

const Home = () => {
    const [activeTab, setActiveTab] = useState('whatsNew');

    const newsData = {
        whatsNew: [
            "eAuction (New and Withdrawn Teak Timber, Teak Pole, Non Teak Timber) Jabalpur Division",
            "Open Tender (Various Works in Satpura Forest Range) Hoshangabad Division",
            "Offline Tender (Soil and Water Conservation Works) Seoni Division",
            "Notification regarding new guidelines for NTFP collection 2026",
            "Result of eAuction held on 05-05-2026 for Bamboo Bundles"
        ],
        careers: [
            "Recruitment for Assistant Forest Managers - Apply by 25-05-2026",
            "Walk-in Interview for Project Consultants (GIS & Remote Sensing)",
            "Final list of selected candidates for Forest Guard positions 2025-26",
            "Advertisement for the post of Financial Advisor on Deputation"
        ],
        tenders: [
            "Tender Notice for Supply of High-Tech Nursery Equipment - Betul",
            "E-Tender for Construction of Boundary Wall at Central Depo",
            "Expression of Interest for CSR Plantation Partners",
            "Tender for Procurement of Drone Cameras for Forest Protection",
            "Short Term Tender Notice for Vehicle Hiring"
        ]
    };

    const employeeData = [
        "Accountants Final Seniority List Dated 01-01-2026 - Head Office",
        "Assistant Pay and Accounts Officers Final Seniority List Dated 01-01-2026 - Head Office",
        "Pay and Accounts Officers Final Seniority List Dated 01-01-2026 - Head Office",
        "Anukampa List of eligible applicants for Group C and D 12-02-2026 - Central Region",
        "Circular regarding submission of Annual Property Returns 2025-26",
        "Revised Guidelines for TA/DA claims effective from April 2026"
    ];

    return (
        <PageShell>
            {/* Split Hero Section */}
            <section className="bg-beige-100 flex flex-col md:flex-row min-h-[75vh] border-b-4 border-gold-400">
                {/* Left side: Welcome Message */}
                <div className="flex-1 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-olive-900 text-beige-50">
                    <div className="max-w-xl">
                        <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-[0.2em] text-olive-900 bg-gold-400 rounded-full">EST. 1975</span>
                        <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-beige-50">
                            Sustainable Forest Management for a Greener Tomorrow
                        </h1>
                        <p className="mb-8 text-lg md:text-xl text-beige-200 leading-relaxed font-light">
                            Promoting environmental conservation and economic development through sustainable forest practices across Madhya Pradesh.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/about" className="rounded-lg bg-gold-500 px-6 py-3.5 font-bold text-olive-900 hover:bg-gold-400 transition-colors shadow-lg flex items-center gap-2">
                                <i className="fas fa-leaf"></i> About MPFSDC
                            </Link>
                            <Link to="/auctions" className="rounded-lg border-2 border-beige-300 px-6 py-3.5 font-bold text-beige-100 hover:bg-beige-100 hover:text-olive-900 transition-colors flex items-center gap-2">
                                <i className="fas fa-gavel"></i> E-Auction Portal
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right side: Large Photo Banner */}
                <div className="flex-1 relative min-h-[40vh] md:min-h-full overflow-hidden bg-olive-900">
                    <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: "url('/hero-forest.png')" }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-olive-900 via-olive-900/20 to-transparent"></div>

                    {/* Overlay Stats */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 grid grid-cols-2 gap-4 text-beige-50">
                        <div className="bg-olive-800/80 backdrop-blur-md p-4 rounded-xl border border-olive-600/50">
                            <div className="text-3xl font-extrabold text-gold-400">11</div>
                            <div className="text-sm text-beige-200 mt-1">Project Divisions</div>
                        </div>
                        <div className="bg-olive-800/80 backdrop-blur-md p-4 rounded-xl border border-olive-600/50">
                            <div className="text-3xl font-extrabold text-gold-400">732</div>
                            <div className="text-sm text-beige-200 mt-1">JFM Samitis</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links / Information Portal */}
            <section className="bg-beige-50 py-10 px-4 border-b border-beige-200">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { name: 'About Us', icon: 'fa-info-circle' },
                            { name: 'Organisation Chart', icon: 'fa-sitemap' },
                            { name: 'Board of Directors', icon: 'fa-users' },
                            { name: 'Management Plan', icon: 'fa-book' },
                            { name: 'Plantation', icon: 'fa-tree' },
                            { name: 'Nurseries', icon: 'fa-seedling' },
                            { name: 'Monthly Auction', icon: 'fa-calendar-alt' },
                            { name: 'Terms & Conditions', icon: 'fa-file-contract' },
                        ].map((item) => (
                            <Link to="#" key={item.name} className="bg-white border border-beige-300 rounded-md px-4 py-2 text-sm font-semibold text-olive-800 hover:bg-olive-50 hover:border-olive-400 transition-colors flex items-center gap-2">
                                <i className={`fas ${item.icon} text-olive-500`}></i> {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Elaborate Partner With Us Section */}
            <section className="bg-beige-50 py-20 px-4 border-b border-beige-200 border-t border-t-beige-200">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-olive-900 mb-4">Partner With Us for a Sustainable Future</h2>
                        <p className="text-lg text-olive-700 max-w-3xl mx-auto">
                            We welcome partnerships with government agencies, NGOs, and private organizations for collaborative forest conservation, eco-restoration, and community development projects.
                        </p>
                    </div>

                    {/* Partnership Highlights */}
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-beige-200 text-center group hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 mx-auto bg-beige-100 text-olive-600 rounded-full flex items-center justify-center text-2xl mb-6 group-hover:bg-olive-600 group-hover:text-beige-100 transition-colors">
                                <i className="fas fa-handshake"></i>
                            </div>
                            <h3 className="text-xl font-bold text-olive-800 mb-3">Deposit Works</h3>
                            <p className="text-olive-600 text-sm">Execute large-scale plantations on behalf of external agencies to meet afforestation goals.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-beige-200 text-center group hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 mx-auto bg-beige-100 text-olive-600 rounded-full flex items-center justify-center text-2xl mb-6 group-hover:bg-olive-600 group-hover:text-beige-100 transition-colors">
                                <i className="fas fa-leaf"></i>
                            </div>
                            <h3 className="text-xl font-bold text-olive-800 mb-3">CSR Initiatives</h3>
                            <p className="text-olive-600 text-sm">Collaborate on impactful CSR projects focusing on environmental sustainability and carbon offset.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-beige-200 text-center group hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 mx-auto bg-beige-100 text-olive-600 rounded-full flex items-center justify-center text-2xl mb-6 group-hover:bg-olive-600 group-hover:text-beige-100 transition-colors">
                                <i className="fas fa-mountain"></i>
                            </div>
                            <h3 className="text-xl font-bold text-olive-800 mb-3">Eco Restoration</h3>
                            <p className="text-olive-600 text-sm">Partner for scientific reclamation of degraded lands and mined-out areas into green forests.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* News & Employee Corner Section */}
            <section className="bg-beige-100 py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8">

                        {/* Left Column: Tabs (What's New, Careers, Tenders) */}
                        <div className="bg-white rounded-lg shadow-sm border border-beige-300 overflow-hidden flex flex-col">
                            {/* Tab Headers */}
                            <div className="flex border-b border-beige-300 bg-olive-800">
                                <button
                                    onClick={() => setActiveTab('whatsNew')}
                                    className={`flex-1 py-4 text-sm font-bold tracking-wider transition-colors ${activeTab === 'whatsNew' ? 'bg-white text-olive-900 border-t-4 border-t-gold-500' : 'text-beige-200 hover:bg-olive-700 hover:text-white border-t-4 border-t-transparent'}`}
                                >
                                    WHATS NEW
                                </button>
                                <button
                                    onClick={() => setActiveTab('careers')}
                                    className={`flex-1 py-4 text-sm font-bold tracking-wider transition-colors border-l border-olive-700/50 ${activeTab === 'careers' ? 'bg-white text-olive-900 border-t-4 border-t-gold-500' : 'text-beige-200 hover:bg-olive-700 hover:text-white border-t-4 border-t-transparent'}`}
                                >
                                    CAREERS
                                </button>
                                <button
                                    onClick={() => setActiveTab('tenders')}
                                    className={`flex-1 py-4 text-sm font-bold tracking-wider transition-colors border-l border-olive-700/50 ${activeTab === 'tenders' ? 'bg-white text-olive-900 border-t-4 border-t-gold-500' : 'text-beige-200 hover:bg-olive-700 hover:text-white border-t-4 border-t-transparent'}`}
                                >
                                    TENDERS
                                </button>
                            </div>

                            {/* Tab Content */}
                            <div className="p-2 bg-white flex-1">
                                <h3 className="text-xl font-bold text-olive-900 p-4 border-b border-beige-100">
                                    {activeTab === 'whatsNew' && "WHAT'S NEW"}
                                    {activeTab === 'careers' && "CAREERS"}
                                    {activeTab === 'tenders' && "TENDERS"}
                                </h3>
                                <div className="h-[300px] overflow-y-auto px-4 py-2 custom-scrollbar">
                                    <ul className="space-y-0">
                                        {newsData[activeTab].map((item, index) => (
                                            <li key={index} className="py-4 border-b border-beige-100 last:border-0 flex items-start gap-3 group">
                                                <i className="fas fa-arrow-right text-olive-500 mt-1 flex-shrink-0 group-hover:text-gold-500 transition-colors"></i>
                                                <p className="text-sm text-olive-800 leading-relaxed font-medium group-hover:text-olive-600 transition-colors cursor-pointer">
                                                    {item}
                                                    {index < 3 && <span className="inline-block ml-2 px-1.5 py-0.5 text-[10px] font-bold text-white bg-red-500 rounded animate-pulse">NEW</span>}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Employee Corner */}
                        <div className="bg-white rounded-lg shadow-sm border border-beige-300 overflow-hidden flex flex-col">
                            {/* Header */}
                            <div className="bg-olive-800 py-4 px-6 border-b border-beige-300 border-t-4 border-t-olive-800">
                                <h2 className="text-center text-sm font-bold tracking-wider text-white uppercase">
                                    Employee Corner
                                </h2>
                            </div>

                            {/* Content */}
                            <div className="p-2 bg-white flex-1">
                                <div className="h-[355px] overflow-y-auto px-4 py-2 custom-scrollbar">
                                    <ul className="space-y-0">
                                        {employeeData.map((item, index) => (
                                            <li key={index} className="py-4 border-b border-beige-100 last:border-0 flex items-start gap-3 group">
                                                <i className="fas fa-arrow-right text-olive-500 mt-1 flex-shrink-0 group-hover:text-gold-500 transition-colors"></i>
                                                <p className="text-sm text-olive-800 leading-relaxed font-medium group-hover:text-olive-600 transition-colors cursor-pointer">
                                                    {item}
                                                    {index < 2 && <span className="inline-block ml-2 px-1.5 py-0.5 text-[10px] font-bold text-white bg-red-500 rounded animate-pulse">NEW</span>}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Our Partners / Associate Organizations Section */}
            <section className="bg-olive-800 py-16 px-4 border-t-4 border-gold-500">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center text-2xl font-bold text-beige-50 mb-10 tracking-widest uppercase border-b border-olive-700 pb-4 max-w-sm mx-auto">
                        Our Partners
                    </h2>

                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                        {/* Card 1 */}
                        <div className="bg-white w-64 h-32 rounded-lg flex flex-col items-center justify-center p-4 shadow-lg border-2 border-transparent hover:border-gold-400 transition-all group">
                            <div className="text-4xl text-olive-600 mb-2 group-hover:scale-110 transition-transform"><i className="fas fa-bolt"></i></div>
                            <span className="font-bold text-olive-900 text-sm text-center">NTPC Limited</span>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white w-64 h-32 rounded-lg flex flex-col items-center justify-center p-4 shadow-lg border-2 border-transparent hover:border-gold-400 transition-all group">
                            <div className="text-4xl text-olive-600 mb-2 group-hover:scale-110 transition-transform"><i className="fas fa-hard-hat"></i></div>
                            <span className="font-bold text-olive-900 text-sm text-center">Northern Coalfields</span>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white w-64 h-32 rounded-lg flex flex-col items-center justify-center p-4 shadow-lg border-2 border-transparent hover:border-gold-400 transition-all group">
                            <div className="text-4xl text-olive-600 mb-2 group-hover:scale-110 transition-transform"><i className="fas fa-industry"></i></div>
                            <span className="font-bold text-olive-900 text-sm text-center">Western Coalfields</span>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white w-64 h-32 rounded-lg flex flex-col items-center justify-center p-4 shadow-lg border-2 border-transparent hover:border-gold-400 transition-all group">
                            <div className="text-4xl text-olive-600 mb-2 group-hover:scale-110 transition-transform"><i className="fas fa-lightbulb"></i></div>
                            <span className="font-bold text-olive-900 text-sm text-center">Havells India</span>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-white w-64 h-32 rounded-lg flex flex-col items-center justify-center p-4 shadow-lg border-2 border-transparent hover:border-gold-400 transition-all group">
                            <div className="text-4xl text-olive-600 mb-2 group-hover:scale-110 transition-transform"><i className="fas fa-paw"></i></div>
                            <span className="font-bold text-olive-900 text-sm text-center">State Wildlife Board</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dedicated CTA Section */}
            <section className="bg-beige-100 py-20 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-olive-900 mb-6">Partner With Us</h2>
                    <p className="text-lg md:text-xl text-olive-700 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join hands with MPFSDC to create sustainable ecological impact. We are open to innovative collaborations, CSR projects, and large-scale deposit works.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-beige-50 bg-olive-700 hover:bg-olive-800 rounded-lg shadow-md transition-all hover:shadow-lg w-full sm:w-auto gap-2 border-2 border-olive-700">
                            <i className="fas fa-envelope"></i> Contact Us
                        </Link>
                        <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-olive-900 bg-gold-400 hover:bg-gold-300 rounded-lg shadow-md transition-all hover:shadow-lg w-full sm:w-auto gap-2 border-2 border-gold-400">
                            <i className="fas fa-handshake"></i> Partner With Us
                        </Link>
                    </div>
                </div>
            </section>

        </PageShell>
    );
};

export default Home;
