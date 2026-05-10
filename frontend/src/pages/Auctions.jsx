import React, { useEffect } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Auctions = () => {
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

    const currentAuctions = [
        {
            id: 'AUC/2023/045',
            date: '15 Dec 2023',
            material: 'Teak Wood',
            quantity: '500 m³',
            location: 'Jabalpur',
            reservePrice: '₹25,000/m³',
            status: 'open',
            icon: 'fa-tree'
        },
        {
            id: 'AUC/2023/046',
            date: '22 Dec 2023',
            material: 'Bamboo',
            quantity: '1000 tons',
            location: 'Balaghat',
            reservePrice: '₹8,000/ton',
            status: 'open',
            icon: 'fa-leaf'
        },
        {
            id: 'AUC/2023/047',
            date: '05 Jan 2024',
            material: 'Sal Wood',
            quantity: '750 m³',
            location: 'Mandla',
            reservePrice: '₹18,000/m³',
            status: 'upcoming',
            icon: 'fa-tree'
        },
        {
            id: 'AUC/2023/048',
            date: '12 Jan 2024',
            material: 'Sagwan Wood',
            quantity: '300 m³',
            location: 'Seoni',
            reservePrice: '₹35,000/m³',
            status: 'upcoming',
            icon: 'fa-tree'
        }
    ];

    const recentResults = [
        {
            title: 'Teak Wood Auction - Jabalpur',
            date: '01 Dec 2023',
            auctionNo: 'AUC/2023/042',
            quantity: '450 m³',
            avgPrice: '₹26,500/m³'
        },
        {
            title: 'Bamboo Auction - Balaghat',
            date: '24 Nov 2023',
            auctionNo: 'AUC/2023/041',
            quantity: '800 tons',
            avgPrice: '₹8,200/ton'
        },
        {
            title: 'Sal Wood Auction - Mandla',
            date: '17 Nov 2023',
            auctionNo: 'AUC/2023/040',
            quantity: '600 m³',
            avgPrice: '₹19,000/m³'
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
                            <h2 className="text-4xl font-bold mb-4">Forest Product Auctions</h2>
                            <p className="text-xl">Transparent and Competitive Bidding Process</p>
                        </div>
                    </div>
                </section>

                {/* Auctions Content */}
                <div className="py-16">
                    <div className="container mx-auto px-4">
                        {/* Auction Notice */}
                        <section className="mb-12">
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                                <div className="flex items-start">
                                    <i className="fas fa-exclamation-triangle text-yellow-600 text-xl mr-4 mt-1"></i>
                                    <div>
                                        <h3 className="text-lg font-bold text-yellow-800 mb-2">Important Notice</h3>
                                        <p className="text-yellow-700">
                                            All auctions are conducted as per Madhya Pradesh Forest Produce (Regulation of Trade) Rules. 
                                            Participants are requested to carefully read auction terms and conditions before bidding. 
                                            For any queries, please contact Auction Department.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Current Auctions */}
                        <section className="mb-16">
                            <h3 className="text-3xl font-bold mb-8 text-green-800">Current Auctions</h3>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-green-700 text-white">
                                            <tr>
                                                <th className="px-6 py-4 text-left">Auction No.</th>
                                                <th className="px-6 py-4 text-left">Date</th>
                                                <th className="px-6 py-4 text-left">Material</th>
                                                <th className="px-6 py-4 text-left">Quantity</th>
                                                <th className="px-6 py-4 text-left">Location</th>
                                                <th className="px-6 py-4 text-left">Reserve Price</th>
                                                <th className="px-6 py-4 text-left">Status</th>
                                                <th className="px-6 py-4 text-left">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {currentAuctions.map((auction, index) => (
                                                <tr key={auction.id} className="hover:bg-gray-50 transition fade-in">
                                                    <td className="px-6 py-4 font-semibold">{auction.id}</td>
                                                    <td className="px-6 py-4">{auction.date}</td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center">
                                                            <i className={`fas ${auction.icon} text-green-600 mr-2`}></i>
                                                            {auction.material}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">{auction.quantity}</td>
                                                    <td className="px-6 py-4">{auction.location}</td>
                                                    <td className="px-6 py-4">{auction.reservePrice}</td>
                                                    <td className="px-6 py-4">
                                                        <span className={`text-xs px-2 py-1 rounded-full ${
                                                            auction.status === 'open' 
                                                                ? 'bg-green-100 text-green-800' 
                                                                : 'bg-yellow-100 text-yellow-800'
                                                        }`}>
                                                            {auction.status === 'open' ? 'Open' : 'Upcoming'}
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

                        {/* Auction Process */}
                        <section className="mb-16">
                            <h3 className="text-3xl font-bold mb-8 text-green-800">Auction Process</h3>
                            <div className="grid md:grid-cols-4 gap-6">
                                <div className="bg-white rounded-lg shadow-md p-6 text-center fade-in">
                                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <i className="fas fa-user-plus text-white text-2xl"></i>
                                    </div>
                                    <h4 className="font-bold mb-2">Registration</h4>
                                    <p className="text-sm text-gray-700">Register as bidder with required documents and security deposit</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-6 text-center fade-in">
                                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <i className="fas fa-eye text-white text-2xl"></i>
                                    </div>
                                    <h4 className="font-bold mb-2">Inspection</h4>
                                    <p className="text-sm text-gray-700">Physical inspection of auction material at designated locations</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-6 text-center fade-in">
                                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <i className="fas fa-gavel text-white text-2xl"></i>
                                    </div>
                                    <h4 className="font-bold mb-2">Bidding</h4>
                                    <p className="text-sm text-gray-700">Participate in transparent bidding process at auction venue</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-6 text-center fade-in">
                                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <i className="fas fa-file-contract text-white text-2xl"></i>
                                    </div>
                                    <h4 className="font-bold mb-2">Payment</h4>
                                    <p className="text-sm text-gray-700">Complete payment within stipulated time and collect material</p>
                                </div>
                            </div>
                        </section>

                        {/* Recent Auction Results */}
                        <section className="mb-16">
                            <h3 className="text-3xl font-bold mb-8 text-green-800">Recent Auction Results</h3>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <div className="space-y-4">
                                    {recentResults.map((result, index) => (
                                        <div key={index} className="border-l-4 border-green-500 pl-4 py-2 fade-in">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h4 className="font-bold text-green-800">{result.title}</h4>
                                                    <p className="text-gray-600">Date: {result.date} | Auction No: {result.auctionNo}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm text-gray-600">Total Quantity</p>
                                                    <p className="font-bold">{result.quantity}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm text-gray-600">Avg. Price</p>
                                                    <p className="font-bold text-green-600">{result.avgPrice}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center mt-6">
                                    <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
                                        <i className="fas fa-history mr-2"></i>View All Past Results
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Download Section */}
                        <section className="mb-16">
                            <h3 className="text-3xl font-bold mb-8 text-green-800">Downloads</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition fade-in">
                                    <div className="flex items-center mb-4">
                                        <i className="fas fa-file-pdf text-red-600 text-3xl mr-3"></i>
                                        <h4 className="font-bold">Auction Rules</h4>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">Complete rules and regulations for forest produce auctions</p>
                                    <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition">
                                        <i className="fas fa-download mr-2"></i>Download PDF
                                    </button>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition fade-in">
                                    <div className="flex items-center mb-4">
                                        <i className="fas fa-file-pdf text-red-600 text-3xl mr-3"></i>
                                        <h4 className="font-bold">Bidder Registration Form</h4>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">Application form for new bidder registration</p>
                                    <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition">
                                        <i className="fas fa-download mr-2"></i>Download PDF
                                    </button>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition fade-in">
                                    <div className="flex items-center mb-4">
                                        <i className="fas fa-file-pdf text-red-600 text-3xl mr-3"></i>
                                        <h4 className="font-bold">Rate List</h4>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">Current rates for various forest products</p>
                                    <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition">
                                        <i className="fas fa-download mr-2"></i>Download PDF
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Contact Information */}
                        <section className="bg-green-50 rounded-lg p-8">
                            <h3 className="text-2xl font-bold mb-6 text-green-800">Auction Department Contact</h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold mb-4">Office Address</h4>
                                    <p className="text-gray-700 mb-4">
                                        MPFSDC Auction Department<br/>
                                        5th Floor, Van Bhawan, Arera Hills<br/>
                                        Bhopal - 462011, Madhya Pradesh
                                    </p>
                                    <h4 className="font-bold mb-4">Contact Numbers</h4>
                                    <p className="text-gray-700">
                                        Phone: +91-755-2551236<br/>
                                        Fax: +91-755-2551237<br/>
                                        Email: auction@mpfsdc.mp.gov.in
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-4">Office Hours</h4>
                                    <p className="text-gray-700 mb-4">
                                        Monday to Friday: 10:00 AM - 5:00 PM<br/>
                                        Saturday: 10:00 AM - 2:00 PM<br/>
                                        Sunday: Closed
                                    </p>
                                    <h4 className="font-bold mb-4">Auction Venues</h4>
                                    <p className="text-gray-700">
                                        Auctions are conducted at respective divisional headquarters<br/>
                                        and forest depots. Venue details are mentioned in<br/>
                                        individual auction notices.
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

export default Auctions;
