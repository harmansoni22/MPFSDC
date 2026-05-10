import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Gallery = () => {
    const [filter, setFilter] = useState('all');
    const [lightboxImage, setLightboxImage] = useState(null);

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

        // Counter animation
        const animateCounter = (element) => {
            const target = parseInt(element.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += step;
                if (current < target) {
                    element.textContent = Math.floor(current).toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = target.toLocaleString();
                }
            };
            
            updateCounter();
        };

        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const counterObserver = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounter(entry.target);
                        counterObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            counterObserver.observe(counter);
        });
    }, []);

    const galleryItems = [
        { id: 1, title: 'Teak Plantation', location: 'Satpura Range', category: 'plantation', icon: 'fa-tree' },
        { id: 2, title: 'Nursery Operations', location: 'Jabalpur', category: 'plantation', icon: 'fa-seedling' },
        { id: 3, title: 'Timber Harvesting', location: 'Mandla Division', category: 'harvesting', icon: 'fa-cut' },
        { id: 4, title: 'Community Training', location: 'Balaghat', category: 'community', icon: 'fa-users' },
        { id: 5, title: 'Wildlife Conservation', location: 'Kanha Reserve', category: 'conservation', icon: 'fa-paw' },
        { id: 6, title: 'River Conservation', location: 'Narmada Bank', category: 'conservation', icon: 'fa-water' },
        { id: 7, title: 'Afforestation Drive', location: 'Seoni District', category: 'plantation', icon: 'fa-seedling' },
        { id: 8, title: 'Processing Unit', location: 'Jabalpur', category: 'harvesting', icon: 'fa-industry' },
        { id: 9, title: 'Bamboo Plantation', location: 'Dindori', category: 'plantation', icon: 'fa-leaf' },
        { id: 10, title: 'Self Help Groups', location: 'Tribal Areas', category: 'community', icon: 'fa-hands-helping' },
        { id: 11, title: 'Fire Management', location: 'Summer Season', category: 'conservation', icon: 'fa-fire-extinguisher' },
        { id: 12, title: 'Eco-Tourism', location: 'Pachmarhi', category: 'conservation', icon: 'fa-route' }
    ];

    const videoItems = [
        { id: 1, title: 'MPFSDC Overview', description: 'Complete journey of MPFSDC', duration: '12:45' },
        { id: 2, title: 'Plantation Drive 2023', description: 'Monsoon plantation activities', duration: '8:30' },
        { id: 3, title: 'Community Empowerment', description: 'Livelihood generation programs', duration: '15:20' }
    ];

    const filteredItems = galleryItems.filter(item => 
        filter === 'all' || item.category === filter
    );

    const openLightbox = (item) => {
        setLightboxImage(item);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Navigation />
            <main className="flex-1">
                {/* Page Header */}
                <section className="bg-gradient-to-r from-green-700 to-green-900 py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-white text-center">
                            <h2 className="text-4xl font-bold mb-4">Photo Gallery</h2>
                            <p className="text-xl">Visual Journey Through Our Forest Conservation Efforts</p>
                        </div>
                    </div>
                </section>

                {/* Gallery Content */}
                <div className="py-16">
                    <div className="container mx-auto px-4">
                        {/* Gallery Filters */}
                        <section className="mb-12">
                            <div className="flex flex-wrap justify-center gap-4">
                                <button 
                                    onClick={() => setFilter('all')}
                                    className={`px-6 py-2 rounded-full transition ${
                                        filter === 'all' 
                                            ? 'bg-green-700 text-white' 
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                >
                                    All Photos
                                </button>
                                <button 
                                    onClick={() => setFilter('plantation')}
                                    className={`px-6 py-2 rounded-full transition ${
                                        filter === 'plantation' 
                                            ? 'bg-green-700 text-white' 
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                >
                                    Plantation
                                </button>
                                <button 
                                    onClick={() => setFilter('harvesting')}
                                    className={`px-6 py-2 rounded-full transition ${
                                        filter === 'harvesting' 
                                            ? 'bg-green-700 text-white' 
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                >
                                    Harvesting
                                </button>
                                <button 
                                    onClick={() => setFilter('conservation')}
                                    className={`px-6 py-2 rounded-full transition ${
                                        filter === 'conservation' 
                                            ? 'bg-green-700 text-white' 
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                >
                                    Conservation
                                </button>
                                <button 
                                    onClick={() => setFilter('community')}
                                    className={`px-6 py-2 rounded-full transition ${
                                        filter === 'community' 
                                            ? 'bg-green-700 text-white' 
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                >
                                    Community
                                </button>
                            </div>
                        </section>

                        {/* Gallery Grid */}
                        <section className="mb-16">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {filteredItems.map(item => (
                                    <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group fade-in" onClick={() => openLightbox(item)}>
                                        <div className="h-48 bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center relative overflow-hidden">
                                            <i className={`fas ${item.icon} text-white text-5xl group-hover:scale-110 transition-transform duration-300`}></i>
                                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-semibold text-green-800">{item.title}</h3>
                                            <p className="text-sm text-gray-600">{item.location}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Video Gallery */}
                        <section className="mb-16">
                            <h3 className="text-3xl font-bold mb-8 text-center text-green-800">Video Gallery</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {videoItems.map(video => (
                                    <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow fade-in">
                                        <div className="h-48 bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center relative">
                                            <i className="fas fa-play-circle text-white text-5xl"></i>
                                            <div className="absolute bottom-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">{video.duration}</div>
                                        </div>
                                        <div className="p-4">
                                            <h4 className="font-semibold text-green-800">{video.title}</h4>
                                            <p className="text-sm text-gray-600">{video.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Statistics */}
                        <section className="mb-16">
                            <div className="bg-gradient-to-r from-green-700 to-green-900 rounded-lg p-8 text-white">
                                <h3 className="text-3xl font-bold mb-8 text-center">Gallery Statistics</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    <div className="text-center fade-in">
                                        <div className="text-4xl font-bold mb-2 counter" data-target="500">0</div>
                                        <p className="text-green-200">Photos</p>
                                    </div>
                                    <div className="text-center fade-in">
                                        <div className="text-4xl font-bold mb-2 counter" data-target="50">0</div>
                                        <p className="text-green-200">Videos</p>
                                    </div>
                                    <div className="text-center fade-in">
                                        <div className="text-4xl font-bold mb-2 counter" data-target="25">0</div>
                                        <p className="text-green-200">Locations</p>
                                    </div>
                                    <div className="text-center fade-in">
                                        <div className="text-4xl font-bold mb-2 counter" data-target="10000">0</div>
                                        <p className="text-green-200">Downloads</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Download Section */}
                        <section className="text-center">
                            <h3 className="text-2xl font-bold mb-4 text-green-800">Download Gallery</h3>
                            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                                Download our complete photo gallery and videos for official use. All materials are copyrighted by MPFSDC.
                            </p>
                            <div className="flex justify-center space-x-4">
                                <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
                                    <i className="fas fa-download mr-2"></i>Download Photos
                                </button>
                                <button className="bg-white text-green-700 border-2 border-green-700 px-6 py-3 rounded-lg hover:bg-green-50 transition">
                                    <i className="fas fa-video mr-2"></i>Download Videos
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />

            {/* Lightbox */}
            {lightboxImage && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center" onClick={closeLightbox}>
                    <div className="bg-white rounded-lg p-8 max-w-4xl mx-4" onClick={(e) => e.stopPropagation()}>
                        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={closeLightbox}>
                            <i className="fas fa-times text-2xl"></i>
                        </button>
                        <div className="text-center">
                            <div className="w-96 h-96 bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center mx-auto rounded-lg mb-4">
                                <i className={`fas ${lightboxImage.icon} text-white text-6xl`}></i>
                            </div>
                            <p className="text-xl font-semibold text-green-800">{lightboxImage.title}</p>
                            <p className="text-gray-600">{lightboxImage.location}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
