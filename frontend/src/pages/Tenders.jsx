import React, { useEffect } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Tenders = () => {
    useEffect(() => {
        // Initialize animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        const animateElements = document.querySelectorAll('.fade-in');
        animateElements.forEach(el => {
            observer.observe(el);
        });
    }, []);

    const currentTenders = [
        {
            id: 'MPFSDC/TN/2023/015',
            description: 'Plantation Work in Satpura Range',
            details: 'Afforestation of 5000 hectares with native species',
            workValue: '₹25.50 Cr',
            dueDate: '20 Dec 2023',
            status: 'open'
        },
        {
            id: 'MPFSDC/TN/2023/016',
            description: 'Timber Processing Equipment',
            details: 'Supply and installation of modern sawmill equipment',
            workValue: '₹8.75 Cr',
            dueDate: '25 Dec 2023',
            status: 'open'
        },
        {
            id: 'MPFSDC/TN/2023/017',
            description: 'Nursery Development',
            details: 'Development of modern nursery facilities at 5 locations',
            workValue: '₹12.30 Cr',
            dueDate: '05 Jan 2024',
            status: 'open'
        },
        {
            id: 'MPFSDC/TN/2023/018',
            description: 'Vehicles Procurement',
            details: 'Purchase of 4x4 vehicles for forest operations',
            workValue: '₹3.20 Cr',
            dueDate: '10 Jan 2024',
            status: 'upcoming'
        }
    ];

    const recentAwards = [
        {
            title: 'Fire Fighting Equipment - Jabalpur',
            tenderNo: 'MPFSDC/TN/2023/012',
            awardedTo: 'ABC Fire Solutions Pvt. Ltd.',
            contractValue: '₹2.85 Cr'
        },
        {
            title: 'Office Building Construction - Bhopal',
            tenderNo: 'MPFSDC/TN/2023/011',
            awardedTo: 'XYZ Construction Co.',
            contractValue: '₹15.20 Cr'
        },
        {
            title: 'IT Infrastructure Upgrade',
            tenderNo: 'MPFSDC/TN/2023/010',
            awardedTo: 'Tech Solutions Ltd.',
            contractValue: '₹4.50 Cr'
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Navigation />
            <main className="flex-1">
                {/* Page Header */}
                <section className="bg-gradient-to-r from-green-700 to-green-900 py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-white text-center">
                            <h2 className="text-4xl font-bold mb-4">Tenders & Procurement</h2>
                            <p className="text-xl">Transparent and Competitive Bidding Process</p>
                        </div>
                    </div>
                </section>

                {/* Tenders Content */}
                <div className="py-16">
                    <div className="container mx-auto px-4">
                        {/* Important Notice */}
                        <section className="mb-12">
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                                <div className="flex items-start">
                                    <i className="fas fa-info-circle text-blue-600 text-xl mr-4 mt-1"></i>
                                    <div>
                                        <h3 className="text-lg font-bold text-blue-800 mb-2">Tender Notice</h3>
                                        <p className="text-blue-700">
                                            All tenders are processed through e-procurement portal of Government of Madhya Pradesh. 
                                            Interested bidders are requested to register on the portal and participate in the tender process. 
                                            MPFSDC follows transparent procurement procedures as per government guidelines.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Current Tenders */}
                        <section className="mb-16">
                            <h3 className="text-3xl font-bold mb-8 text-green-800">Current Tenders</h3>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-green-700 text-white">
                                            <tr>
                                                <th className="px-6 py-4 text-left">Tender No.</th>
                                                <th className="px-6 py-4 text-left">Description</th>
                                                <th className="px-6 py-4 text-left">Work Value</th>
                                                <th className="px-6 py-4 text-left">Due Date</th>
                                                <th className="px-6 py-4 text-left">Status</th>
                                                <th className="px-6 py-4 text-left">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {currentTenders.map((tender, index) => (
                                                <tr key={tender.id} className="hover:bg-gray-50 transition fade-in">
                                                    <td className="px-6 py-4 font-semibold">{tender.id}</td>
                                                    <td className="px-6 py-4">
                                                        <div>
                                                            <h4 className="font-semibold">{tender.description}</h4>
                                                            <p className="text-sm text-gray-600">{tender.details}</p>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">{tender.workValue}</td>
                                                    <td className="px-6 py-4">{tender.dueDate}</td>
                                                    <td className="px-6 py-4">
                                                        <span className={`text-xs px-2 py-1 rounded-full ${
                                                            tender.status === 'open' 
                                                                ? 'bg-green-100 text-green-800' 
                                                                : 'bg-yellow-100 text-yellow-800'
                                                        }`}>
                                                            {tender.status === 'open' ? 'Open' : 'Upcoming'}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition">
                                                            View Details
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                        {/* Tender Categories */}
                        <section className="mb-16">
                            <h3 className="text-3xl font-bold mb-8 text-green-800">Tender Categories</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition fade-in">
                                    <div className="text-center mb-4">
                                        <i className="fas fa-hard-hat text-green-700 text-4xl"></i>
                                    </div>
                                    <h4 className="text-xl font-bold mb-3 text-green-800 text-center">Works</h4>
                                    <p className="text-gray-700 mb-4 text-center">
                                        Civil works, plantation, infrastructure development, and construction projects
                                    </p>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Afforestation works</li>
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Building construction</li>
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Road development</li>
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Irrigation projects</li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition fade-in">
                                    <div className="text-center mb-4">
                                        <i className="fas fa-shopping-cart text-green-700 text-4xl"></i>
                                    </div>
                                    <h4 className="text-xl font-bold mb-3 text-green-800 text-center">Procurement</h4>
                                    <p className="text-gray-700 mb-4 text-center">
                                        Purchase of equipment, vehicles, machinery, and office supplies
                                    </p>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Forest equipment</li>
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Vehicles</li>
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Office furniture</li>
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>IT equipment</li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition fade-in">
                                    <div className="text-center mb-4">
                                        <i className="fas fa-user-tie text-green-700 text-4xl"></i>
                                    </div>
                                    <h4 className="text-xl font-bold mb-3 text-green-800 text-center">Services</h4>
                                    <p className="text-gray-700 mb-4 text-center">
                                        Consulting, maintenance, training, and specialized services
                                    </p>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Consultancy services</li>
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Technical services</li>
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Training programs</li>
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Maintenance contracts</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Tender Process */}
                        <section className="mb-16">
                            <h3 className="text-3xl font-bold mb-8 text-green-800">Tender Process</h3>
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <div className="grid md:grid-cols-4 gap-6">
                                    <div className="text-center fade-in">
                                        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white font-bold text-xl">1</span>
                                        </div>
                                        <h4 className="font-bold mb-2">Tender Notice</h4>
                                        <p className="text-sm text-gray-700">Publication of tender notice in newspapers and e-procurement portal</p>
                                    </div>
                                    <div className="text-center fade-in">
                                        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white font-bold text-xl">2</span>
                                        </div>
                                        <h4 className="font-bold mb-2">Bid Submission</h4>
                                        <p className="text-sm text-gray-700">Online submission of technical and financial bids</p>
                                    </div>
                                    <div className="text-center fade-in">
                                        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white font-bold text-xl">3</span>
                                        </div>
                                        <h4 className="font-bold mb-2">Evaluation</h4>
                                        <p className="text-sm text-gray-700">Technical and financial evaluation by expert committee</p>
                                    </div>
                                    <div className="text-center fade-in">
                                        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white font-bold text-xl">4</span>
                                        </div>
                                        <h4 className="font-bold mb-2">Award</h4>
                                        <p className="text-sm text-gray-700">Letter of award and contract agreement</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Recent Awards */}
                        <section className="mb-16">
                            <h3 className="text-3xl font-bold mb-8 text-green-800">Recently Awarded Tenders</h3>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <div className="space-y-4">
                                    {recentAwards.map((award, index) => (
                                        <div key={index} className="border-l-4 border-green-500 pl-4 py-2 fade-in">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h4 className="font-bold text-green-800">{award.title}</h4>
                                                    <p className="text-gray-600">Tender No: {award.tenderNo} | Awarded to: {award.awardedTo}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm text-gray-600">Contract Value</p>
                                                    <p className="font-bold text-green-600">{award.contractValue}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center mt-6">
                                    <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
                                        <i className="fas fa-history mr-2"></i>View All Past Tenders
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Downloads */}
                        <section className="mb-16">
                            <h3 className="text-3xl font-bold mb-8 text-green-800">Downloads</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition fade-in">
                                    <div className="flex items-center mb-4">
                                        <i className="fas fa-file-pdf text-red-600 text-3xl mr-3"></i>
                                        <h4 className="font-bold">Tender Guidelines</h4>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">Complete guidelines for participating in MPFSDC tenders</p>
                                    <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition">
                                        <i className="fas fa-download mr-2"></i>Download PDF
                                    </button>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition fade-in">
                                    <div className="flex items-center mb-4">
                                        <i className="fas fa-file-pdf text-red-600 text-3xl mr-3"></i>
                                        <h4 className="font-bold">Bid Document Format</h4>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">Standard format for technical and financial bids</p>
                                    <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition">
                                        <i className="fas fa-download mr-2"></i>Download PDF
                                    </button>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition fade-in">
                                    <div className="flex items-center mb-4">
                                        <i className="fas fa-file-pdf text-red-600 text-3xl mr-3"></i>
                                        <h4 className="font-bold">EMD & BG Details</h4>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">Earnest money deposit and bank guarantee details</p>
                                    <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition">
                                        <i className="fas fa-download mr-2"></i>Download PDF
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Contact Information */}
                        <section className="bg-green-50 rounded-lg p-8">
                            <h3 className="text-2xl font-bold mb-6 text-green-800">Tender Department Contact</h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold mb-4">Office Address</h4>
                                    <p className="text-gray-700 mb-4">
                                        MPFSDC Tender Department<br/>
                                        4th Floor, Van Bhawan, Arera Hills<br/>
                                        Bhopal - 462011, Madhya Pradesh
                                    </p>
                                    <h4 className="font-bold mb-4">Contact Numbers</h4>
                                    <p className="text-gray-700">
                                        Phone: +91-755-2551238<br/>
                                        Fax: +91-755-2551239<br/>
                                        Email: tender@mpfsdc.mp.gov.in
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-4">E-Procurement Portal</h4>
                                    <p className="text-gray-700 mb-4">
                                        All tenders are processed through official e-procurement portal:<br/>
                                        <a href="#" className="text-green-600 hover:underline">www.mpeprocurement.gov.in</a>
                                    </p>
                                    <h4 className="font-bold mb-4">Grievance Cell</h4>
                                    <p className="text-gray-700">
                                        For any grievances related to tender process:<br/>
                                        Phone: +91-755-2551240<br/>
                                        Email: grievance.tender@mpfsdc.mp.gov.in
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Tenders;
