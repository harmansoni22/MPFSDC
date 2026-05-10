import React, { useEffect } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
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
                            <h2 className="text-4xl font-bold mb-4">About MPFSDC</h2>
                            <p className="text-xl">Sustainable Forest Management for a Greener Tomorrow</p>
                        </div>
                    </div>
                </section>

                {/* About Content */}
                <div className="py-16">
                    <div className="container mx-auto px-4">
                        {/* Welcome Section */}
                        <section className="mb-16">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="fade-in">
                                    <h3 className="text-3xl font-bold mb-6 text-green-800">Welcome to MPFSDC</h3>
                                    <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                                        Madhya Pradesh Forest State Development Corporation (MPFSDC), established in 1985 under the Companies Act, 1956, is a wholly-owned Government of Madhya Pradesh undertaking. The corporation was formed with the primary objective of promoting sustainable forest management and conservation while ensuring economic development of the state.
                                    </p>
                                    <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                                        With over three decades of dedicated service, MPFSDC has emerged as a leading organization in forest development, managing vast forest resources across the state. Our commitment to environmental conservation and sustainable development has earned us recognition as a pioneer in the field of forest management.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 mt-6">
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <i className="fas fa-calendar text-green-700 text-2xl mb-2"></i>
                                            <h4 className="font-semibold text-green-800">Established</h4>
                                            <p className="text-gray-700">1985</p>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <i className="fas fa-building text-green-700 text-2xl mb-2"></i>
                                            <h4 className="font-semibold text-green-800">Headquarters</h4>
                                            <p className="text-gray-700">Bhopal, M.P.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="fade-in">
                                    <div className="bg-white p-8 rounded-lg shadow-lg">
                                        <h4 className="text-2xl font-bold mb-6 text-green-800">Key Achievements</h4>
                                        <div className="space-y-4">
                                            <div className="flex items-start space-x-3">
                                                <i className="fas fa-check-circle text-green-600 text-xl mt-1"></i>
                                                <div>
                                                    <h5 className="font-semibold">FSC Certification</h5>
                                                    <p className="text-gray-600">First forest corporation in India to achieve Forest Stewardship Council certification</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                                <i className="fas fa-check-circle text-green-600 text-xl mt-1"></i>
                                                <div>
                                                    <h5 className="font-semibold">2.5 Million Hectares</h5>
                                                    <p className="text-gray-600">Forest area under sustainable management</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                                <i className="fas fa-check-circle text-green-600 text-xl mt-1"></i>
                                                <div>
                                                    <h5 className="font-semibold">75,000 m³ Annual Production</h5>
                                                    <p className="text-gray-600">Sustainable timber and bamboo production</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start space-x-3">
                                                <i className="fas fa-check-circle text-green-600 text-xl mt-1"></i>
                                                <div>
                                                    <h5 className="font-semibold">50,000+ Employment</h5>
                                                    <p className="text-gray-600">Direct and indirect employment opportunities created</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Vision & Mission */}
                        <section className="mb-16">
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <h3 className="text-3xl font-bold mb-8 text-center text-green-800">Vision & Mission</h3>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="fade-in">
                                        <div className="text-center mb-4">
                                            <i className="fas fa-eye text-green-700 text-4xl"></i>
                                        </div>
                                        <h4 className="text-xl font-bold mb-4 text-green-800 text-center">Our Vision</h4>
                                        <p className="text-gray-700 leading-relaxed">
                                            To be the leading forest development corporation in India, setting benchmarks in sustainable forest management, biodiversity conservation, and community development while contributing significantly to the state's economic growth and environmental sustainability.
                                        </p>
                                    </div>
                                    <div className="fade-in">
                                        <div className="text-center mb-4">
                                            <i className="fas fa-bullseye text-green-700 text-4xl"></i>
                                        </div>
                                        <h4 className="text-xl font-bold mb-4 text-green-800 text-center">Our Mission</h4>
                                        <p className="text-gray-700 leading-relaxed">
                                            To manage and develop forest resources through scientific methods, promote afforestation and conservation, ensure sustainable utilization of forest produce, and empower local communities while maintaining ecological balance and contributing to the nation's environmental goals.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Leadership */}
                        <section className="mb-16">
                            <h3 className="text-3xl font-bold mb-8 text-center text-green-800">Leadership Team</h3>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-white rounded-lg shadow-lg p-6 text-center fade-in">
                                    <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <i className="fas fa-user-tie text-green-700 text-3xl"></i>
                                    </div>
                                    <h4 className="text-xl font-bold mb-2">Shri. Arvind Singh Tomar</h4>
                                    <p className="text-green-700 font-semibold mb-2">Managing Director</p>
                                    <p className="text-gray-600 text-sm">IFS Officer with 25+ years of experience in forest management and administration</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-lg p-6 text-center fade-in">
                                    <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <i className="fas fa-user-tie text-green-700 text-3xl"></i>
                                    </div>
                                    <h4 className="text-xl font-bold mb-2">Shri. Ramesh Chand Patel</h4>
                                    <p className="text-green-700 font-semibold mb-2">Chairman</p>
                                    <p className="text-gray-600 text-sm">Senior IAS officer with extensive experience in public administration and policy making</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-lg p-6 text-center fade-in">
                                    <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <i className="fas fa-user-tie text-green-700 text-3xl"></i>
                                    </div>
                                    <h4 className="text-xl font-bold mb-2">Shri. Pradeep Kumar Sharma</h4>
                                    <p className="text-green-700 font-semibold mb-2">Director (Operations)</p>
                                    <p className="text-gray-600 text-sm">Expert in forest operations with 20+ years of field experience</p>
                                </div>
                            </div>
                        </section>

                        {/* Statistics */}
                        <section className="mb-16">
                            <div className="bg-gradient-to-r from-green-700 to-green-900 rounded-lg p-8 text-white">
                                <h3 className="text-3xl font-bold mb-8 text-center">Our Impact</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    <div className="text-center fade-in">
                                        <div className="text-4xl font-bold mb-2 counter" data-target="2500000">0</div>
                                        <p className="text-green-200">Hectares Managed</p>
                                    </div>
                                    <div className="text-center fade-in">
                                        <div className="text-4xl font-bold mb-2 counter" data-target="75000">0</div>
                                        <p className="text-green-200">m³ Annual Production</p>
                                    </div>
                                    <div className="text-center fade-in">
                                        <div className="text-4xl font-bold mb-2 counter" data-target="50000">0</div>
                                        <p className="text-green-200">People Employed</p>
                                    </div>
                                    <div className="text-center fade-in">
                                        <div className="text-4xl font-bold mb-2 counter" data-target="38">0</div>
                                        <p className="text-green-200">Years of Service</p>
                                    </div>
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

export default About;
