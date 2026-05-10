import React, { useEffect } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Services = () => {
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

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Navigation />
            <main className="flex-1">
                {/* Page Header */}
                <section className="bg-gradient-to-r from-green-700 to-green-900 py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-white text-center">
                            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
                            <p className="text-xl">Comprehensive Forest Management Solutions</p>
                        </div>
                    </div>
                </section>

                {/* Services Content */}
                <div className="py-16">
                    <div className="container mx-auto px-4">
                        {/* Services Overview */}
                        <section className="mb-16">
                            <div className="text-center mb-12">
                                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                                    MPFSDC offers a comprehensive range of forest management services designed to promote sustainable development, conservation, and economic growth. Our services are tailored to meet the diverse needs of stakeholders while maintaining ecological balance.
                                </p>
                            </div>
                        </section>

                        {/* Core Services */}
                        <section className="mb-16">
                            <h3 className="text-3xl font-bold mb-8 text-center text-green-800">Core Services</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow fade-in">
                                    <div className="text-center mb-4">
                                        <i className="fas fa-tree text-green-700 text-4xl"></i>
                                    </div>
                                    <h4 className="text-xl font-bold mb-3 text-green-800">Forest Management</h4>
                                    <p className="text-gray-700 mb-4">
                                        Scientific management of forest resources including plantation, harvesting, and regeneration activities using modern silvicultural practices.
                                    </p>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Silvicultural operations</li>
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Forest inventory and assessment</li>
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Growth monitoring</li>
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Disease management</li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow fade-in">
                                    <div className="text-center mb-4">
                                        <i className="fas fa-leaf text-green-700 text-4xl"></i>
                                    </div>
                                    <h4 className="text-xl font-bold mb-3 text-green-800">Timber Production</h4>
                                    <p className="text-gray-700 mb-4">
                                        Sustainable harvesting and marketing of high-quality timber, bamboo, and other forest products following FSC standards.
                                    </p>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Timber harvesting</li>
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Bamboo extraction</li>
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Quality grading</li>
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Market facilitation</li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow fade-in">
                                    <div className="text-center mb-4">
                                        <i className="fas fa-shield-alt text-green-700 text-4xl"></i>
                                    </div>
                                    <h4 className="text-xl font-bold mb-3 text-green-800">Conservation</h4>
                                    <p className="text-gray-700 mb-4">
                                        Wildlife habitat protection, biodiversity conservation, and environmental monitoring programs to preserve ecological balance.
                                    </p>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Wildlife protection</li>
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Biodiversity assessment</li>
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Habitat restoration</li>
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Anti-poaching measures</li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow fade-in">
                                    <div className="text-center mb-4">
                                        <i className="fas fa-users text-green-700 text-4xl"></i>
                                    </div>
                                    <h4 className="text-xl font-bold mb-3 text-green-800">Community Development</h4>
                                    <p className="text-gray-700 mb-4">
                                        Empowering local communities through employment opportunities and sustainable livelihood programs.
                                    </p>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Employment generation</li>
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Skill development</li>
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Self-help groups</li>
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Alternative livelihoods</li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow fade-in">
                                    <div className="text-center mb-4">
                                        <i className="fas fa-graduation-cap text-green-700 text-4xl"></i>
                                    </div>
                                    <h4 className="text-xl font-bold mb-3 text-green-800">Training & Research</h4>
                                    <p className="text-gray-700 mb-4">
                                        Forestry training programs and research initiatives for sustainable forest management practices.
                                    </p>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Technical training</li>
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Research collaborations</li>
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Workshops and seminars</li>
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Knowledge sharing</li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow fade-in">
                                    <div className="text-center mb-4">
                                        <i className="fas fa-seedling text-green-700 text-4xl"></i>
                                    </div>
                                    <h4 className="text-xl font-bold mb-3 text-green-800">Nursery Operations</h4>
                                    <p className="text-gray-700 mb-4">
                                        Modern nursery facilities for quality sapling production and afforestation programs.
                                    </p>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Quality sapling production</li>
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Species diversification</li>
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Disease-free plants</li>
                                        <li><i className="fas fa-check text-green-600 mr-2"></i>Supply to stakeholders</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Service Statistics */}
                        <section className="mb-16">
                            <div className="bg-green-800 text-white rounded-lg p-8">
                                <h3 className="text-3xl font-bold mb-8 text-center">Service Impact</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    <div className="text-center fade-in">
                                        <div className="text-4xl font-bold mb-2 counter" data-target="1500">0</div>
                                        <p className="text-green-200">Projects Completed</p>
                                    </div>
                                    <div className="text-center fade-in">
                                        <div className="text-4xl font-bold mb-2 counter" data-target="50000">0</div>
                                        <p className="text-green-200">Beneficiaries</p>
                                    </div>
                                    <div className="text-center fade-in">
                                        <div className="text-4xl font-bold mb-2 counter" data-target="98">0</div>
                                        <p className="text-green-200">% Satisfaction Rate</p>
                                    </div>
                                    <div className="text-center fade-in">
                                        <div className="text-4xl font-bold mb-2 counter" data-target="24">0</div>
                                        <p className="text-green-200">Districts Covered</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Call to Action */}
                        <section className="text-center">
                            <h3 className="text-2xl font-bold mb-4 text-green-800">Need Our Services?</h3>
                            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                                Contact us today to learn how our comprehensive forest management services can help you achieve your sustainability goals.
                            </p>
                            <div className="flex justify-center space-x-4">
                                <a href="/contact" className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
                                    <i className="fas fa-phone mr-2"></i>Contact Us
                                </a>
                                <a href="/projects" className="bg-white text-green-700 border-2 border-green-700 px-6 py-3 rounded-lg hover:bg-green-50 transition">
                                    <i className="fas fa-folder-open mr-2"></i>View Projects
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Services;
