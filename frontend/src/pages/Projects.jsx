import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Projects = () => {
    const [filter, setFilter] = useState('all');

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

    const projects = [
        {
            id: 1,
            title: 'Satpura Afforestation Project',
            category: 'ongoing',
            description: 'Large-scale afforestation initiative covering 50,000 hectares in Satpura range with native species plantation and biodiversity enhancement.',
            duration: '2023-2028',
            budget: '₹125 Cr',
            location: 'Satpura Range',
            progress: 35,
            icon: 'fa-mountain',
            color: 'from-green-600 to-green-800'
        },
        {
            id: 2,
            title: 'River Bank Conservation',
            category: 'ongoing',
            description: 'Conservation of river banks across Narmada and Tapti rivers with native species plantation and erosion control measures.',
            duration: '2022-2027',
            budget: '₹85 Cr',
            location: 'Narmada, Tapti',
            progress: 60,
            icon: 'fa-water',
            color: 'from-blue-600 to-blue-800'
        },
        {
            id: 3,
            title: 'Timber Processing Unit',
            category: 'infrastructure',
            description: 'Modern sawmill and timber processing facility at Jabalpur with annual capacity of 15,000 m³ and value-added products.',
            duration: '2023-2025',
            budget: '₹45 Cr',
            location: 'Jabalpur',
            progress: 75,
            icon: 'fa-industry',
            color: 'from-gray-600 to-gray-800'
        },
        {
            id: 4,
            title: 'Bamboo Mission',
            category: 'completed',
            description: 'Comprehensive bamboo development program covering 25,000 hectares with plantation, processing, and market linkages.',
            duration: '2018-2022',
            budget: '₹65 Cr',
            location: 'Balaghat, Mandla',
            progress: 100,
            icon: 'fa-seedling',
            color: 'from-green-600 to-green-800'
        },
        {
            id: 5,
            title: 'Solar Energy Initiative',
            category: 'completed',
            description: 'Installation of solar-powered systems in forest offices and watch towers across 50 locations in remote forest areas.',
            duration: '2019-2021',
            budget: '₹25 Cr',
            location: 'Statewide',
            progress: 100,
            icon: 'fa-sun',
            color: 'from-yellow-600 to-yellow-800'
        }
    ];

    const filteredProjects = projects.filter(project => 
        filter === 'all' || project.category === filter
    );

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Navigation />
            <main className="flex-1">
                {/* Page Header */}
                <section className="bg-gradient-to-r from-green-700 to-green-900 py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-white text-center">
                            <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
                            <p className="text-xl">Transforming Landscapes Through Sustainable Development</p>
                        </div>
                    </div>
                </section>

                {/* Projects Content */}
                <div className="py-16">
                    <div className="container mx-auto px-4">
                        {/* Project Filters */}
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
                                    All Projects
                                </button>
                                <button 
                                    onClick={() => setFilter('ongoing')}
                                    className={`px-6 py-2 rounded-full transition ${
                                        filter === 'ongoing' 
                                            ? 'bg-green-700 text-white' 
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                >
                                    Ongoing
                                </button>
                                <button 
                                    onClick={() => setFilter('completed')}
                                    className={`px-6 py-2 rounded-full transition ${
                                        filter === 'completed' 
                                            ? 'bg-green-700 text-white' 
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                >
                                    Completed
                                </button>
                                <button 
                                    onClick={() => setFilter('infrastructure')}
                                    className={`px-6 py-2 rounded-full transition ${
                                        filter === 'infrastructure' 
                                            ? 'bg-green-700 text-white' 
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                >
                                    Infrastructure
                                </button>
                            </div>
                        </section>

                        {/* Projects Grid */}
                        <section className="mb-16">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredProjects.map(project => (
                                    <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow fade-in project-item" data-category={project.category}>
                                        <div className={`h-48 bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                                            <i className={`fas ${project.icon} text-white text-5xl`}></i>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="text-xl font-bold text-green-800">{project.title}</h4>
                                                <span className={`text-xs px-2 py-1 rounded ${
                                                    project.category === 'ongoing' ? 'bg-green-100 text-green-800' : 
                                                    project.category === 'completed' ? 'bg-blue-100 text-blue-800' : 
                                                    'bg-gray-100 text-gray-800'
                                                }`}>
                                                    {project.category === 'ongoing' ? 'Ongoing' : 
                                                     project.category === 'completed' ? 'Completed' : 'Infrastructure'}
                                                </span>
                                            </div>
                                            <p className="text-gray-700 mb-4">{project.description}</p>
                                            <div className="space-y-2 text-sm text-gray-600 mb-4">
                                                <div className="flex justify-between">
                                                    <span><i className="fas fa-calendar mr-1"></i> Duration:</span>
                                                    <span className="font-semibold">{project.duration}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span><i className="fas fa-rupee-sign mr-1"></i> Budget:</span>
                                                    <span className="font-semibold">{project.budget}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span><i className="fas fa-map-marker-alt mr-1"></i> Location:</span>
                                                    <span className="font-semibold">{project.location}</span>
                                                </div>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                                                <div 
                                                    className={`h-2 rounded-full ${
                                                        project.progress === 100 ? 'bg-blue-600' : 'bg-green-600'
                                                    }`} 
                                                    style={{width: `${project.progress}%`}}
                                                ></div>
                                            </div>
                                            <p className="text-xs text-gray-600 text-right">{project.progress}% Complete</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Project Statistics */}
                        <section className="mb-16">
                            <div className="bg-gradient-to-r from-green-700 to-green-900 rounded-lg p-8 text-white">
                                <h3 className="text-3xl font-bold mb-8 text-center">Project Impact</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    <div className="text-center fade-in">
                                        <div className="text-4xl font-bold mb-2 counter" data-target="250">0</div>
                                        <p className="text-green-200">Projects Completed</p>
                                    </div>
                                    <div className="text-center fade-in">
                                        <div className="text-4xl font-bold mb-2 counter" data-target="500000">0</div>
                                        <p className="text-green-200">Hectares Covered</p>
                                    </div>
                                    <div className="text-center fade-in">
                                        <div className="text-4xl font-bold mb-2 counter" data-target="1500">0</div>
                                        <p className="text-green-200">Crore Investment</p>
                                    </div>
                                    <div className="text-center fade-in">
                                        <div className="text-4xl font-bold mb-2 counter" data-target="100000">0</div>
                                        <p className="text-green-200">Beneficiaries</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Call to Action */}
                        <section className="text-center">
                            <h3 className="text-2xl font-bold mb-4 text-green-800">Partner With Us</h3>
                            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                                We welcome partnerships with government agencies, NGOs, and private organizations for collaborative projects that enhance forest conservation and community development.
                            </p>
                            <div className="flex justify-center space-x-4">
                                <a href="/contact" className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
                                    <i className="fas fa-handshake mr-2"></i>Partner With Us
                                </a>
                                <a href="/tenders" className="bg-white text-green-700 border-2 border-green-700 px-6 py-3 rounded-lg hover:bg-green-50 transition">
                                    <i className="fas fa-file-contract mr-2"></i>View Tenders
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

export default Projects;
