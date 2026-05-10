import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false
    });

    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');

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

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="inline-block w-4 h-4 border-2 border-white border-t-transparent border-r-transparent animate-spin"></span> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            // Show success message
            setNotificationMessage('Message sent successfully! We will get back to you soon.');
            setShowNotification(true);
            
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                consent: false
            });
            
            // Restore button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Hide notification after 5 seconds
            setTimeout(() => {
                setShowNotification(false);
            }, 5000);
        }, 2000);
    };

    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(prev => prev === index ? null : index);
    };

    const faqItems = [
        {
            question: 'How can I participate in forest auctions?',
            answer: 'To participate in forest auctions, you need to register as a bidder with MPFSDC by submitting required documents (PAN, GST, company registration) and a security deposit. Visit our E-Auction Portal to register and view upcoming auction schedules.'
        },
        {
            question: 'What documents are required for tender participation?',
            answer: 'Required documents include company registration certificate, PAN card, GST registration, audited financial statements for last 3 years, technical qualifications, and experience certificates. Visit our Tenders page to download the complete bid document.'
        },
        {
            question: 'How can I get employment opportunities at MPFSDC?',
            answer: 'Employment opportunities are advertised through official notifications, the MPFSDC website, and leading newspapers. Vacancies are also posted on the Madhya Pradesh government employment portal. Check our website regularly for updates.'
        },
        {
            question: 'What is the process for FSC certification?',
            answer: 'MPFSDC holds FSC Forest Management (FM) and Chain of Custody (CoC) certifications. For suppliers seeking FSC-certified timber, contact our Forest Operations department. We provide certified timber with full traceability documentation.'
        },
        {
            question: 'How do I file a grievance or complaint?',
            answer: 'You can file a grievance through our 24/7 Grievance Cell at 1800-123-4567 or email grievance@mpfsdc.mp.gov.in. You can also use the contact form on this page selecting "Complaint" as the subject.'
        },
        {
            question: 'What types of timber and forest produce are available?',
            answer: 'MPFSDC offers teak, sal, bamboo, and various non-timber forest products (NTFPs). Quality specifications and availability vary by season. Check the Auctions section for current listings or contact the Auction Department.'
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
                            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
                            <p className="text-xl">Get in Touch with MPFSDC</p>
                        </div>
                    </div>
                </section>

                {/* Contact Content */}
                <div className="py-16">
                    <div className="container mx-auto px-4">
                        {/* Contact Information */}
                        <section className="mb-16">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="fade-in">
                                    <h3 className="text-2xl font-bold mb-6 text-green-800">Corporate Office</h3>
                                    <div className="bg-white rounded-lg shadow-lg p-6">
                                        <div className="space-y-4">
                                            <div className="flex items-start space-x-4">
                                                <i className="fas fa-map-marker-alt text-green-700 text-xl mt-1"></i>
                                                <div>
                                                    <h4 className="font-semibold">Address</h4>
                                                    <p className="text-gray-700">
                                                        MPFSDC Bhavan, 5th Floor, Van Bhawan Complex<br/>
                                                        Arera Hills, Bhopal<br/>
                                                        Madhya Pradesh - 462011<br/>
                                                        India
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start space-x-4">
                                                <i className="fas fa-phone text-green-700 text-xl mt-1"></i>
                                                <div>
                                                    <h4 className="font-semibold">Phone</h4>
                                                    <p className="text-gray-700">
                                                        +91-755-2551234 (Office)<br/>
                                                        +91-755-2551235 (Fax)<br/>
                                                        +91-755-2551236 (Direct)
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start space-x-4">
                                                <i className="fas fa-envelope text-green-700 text-xl mt-1"></i>
                                                <div>
                                                    <h4 className="font-semibold">Email</h4>
                                                    <p className="text-gray-700">
                                                        info@mpfsdc.mp.gov.in<br/>
                                                        md@mpfsdc.mp.gov.in<br/>
                                                        support@mpfsdc.mp.gov.in
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start space-x-4">
                                                <i className="fas fa-clock text-green-700 text-xl mt-1"></i>
                                                <div>
                                                    <h4 className="font-semibold">Office Hours</h4>
                                                    <p className="text-gray-700">
                                                        Monday to Friday: 9:30 AM - 6:00 PM<br/>
                                                        Saturday: 9:30 AM - 2:00 PM<br/>
                                                        Sunday: Closed
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="fade-in">
                                    <h3 className="text-2xl font-bold mb-6 text-green-800">Regional Offices</h3>
                                    <div className="bg-white rounded-lg shadow-lg p-6">
                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="font-semibold text-green-700">Jabalpur Division</h4>
                                                <p className="text-gray-700 text-sm">
                                                    Phone: +91-761-2651234<br/>
                                                    Email: jabalpur@mpfsdc.mp.gov.in
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-green-700">Indore Division</h4>
                                                <p className="text-gray-700 text-sm">
                                                    Phone: +91-731-2751234<br/>
                                                    Email: indore@mpfsdc.mp.gov.in
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-green-700">Gwalior Division</h4>
                                                <p className="text-gray-700 text-sm">
                                                    Phone: +91-751-2451234<br/>
                                                    Email: gwalior@mpfsdc.mp.gov.in
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-green-700">Rewa Division</h4>
                                                <p className="text-gray-700 text-sm">
                                                    Phone: +91-7652-223456<br/>
                                                    Email: rewa@mpfsdc.mp.gov.in
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Contact Form */}
                        <section className="mb-16">
                            <h3 className="text-3xl font-bold mb-8 text-center text-green-800">Send us a Message</h3>
                            <div className="max-w-2xl mx-auto">
                                <div className="bg-white rounded-lg shadow-lg p-8">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                                                <input 
                                                    type="text" 
                                                    name="name" 
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required 
                                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                                                <input 
                                                    type="email" 
                                                    name="email" 
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required 
                                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                                                />
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                                                <input 
                                                    type="tel" 
                                                    name="phone" 
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
                                                <select 
                                                    name="subject" 
                                                    value={formData.subject}
                                                    onChange={handleInputChange}
                                                    required 
                                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                                                >
                                                    <option value="">Select Subject</option>
                                                    <option value="general">General Inquiry</option>
                                                    <option value="tenders">Tenders</option>
                                                    <option value="auctions">Auctions</option>
                                                    <option value="projects">Projects</option>
                                                    <option value="services">Services</option>
                                                    <option value="complaint">Complaint</option>
                                                    <option value="suggestion">Suggestion</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                                            <textarea 
                                                name="message" 
                                                rows="5" 
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required 
                                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                                            ></textarea>
                                        </div>
                                        <div className="flex items-center">
                                            <input 
                                                type="checkbox" 
                                                id="consent" 
                                                name="consent" 
                                                checked={formData.consent}
                                                onChange={handleInputChange}
                                                required 
                                                className="mr-2" 
                                            />
                                            <label htmlFor="consent" className="text-gray-700 text-sm">
                                                I agree to <a href="#" className="text-green-600 hover:underline">terms and conditions</a> and <a href="#" className="text-green-600 hover:underline">privacy policy</a>
                                            </label>
                                        </div>
                                        <button 
                                            type="submit" 
                                            className="w-full bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition font-semibold" 
                                        >
                                            <i className="fas fa-paper-plane mr-2"></i>Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </section>

                        {/* Department Contacts */}
                        <section className="mb-16">
                            <h3 className="text-3xl font-bold mb-8 text-center text-green-800">Department Contacts</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition fade-in">
                                    <div className="flex items-center mb-4">
                                        <i className="fas fa-gavel text-green-700 text-2xl mr-3"></i>
                                        <h4 className="font-bold text-green-800">Auction Department</h4>
                                    </div>
                                    <div className="text-sm text-gray-700">
                                        <p><strong>Phone:</strong> +91-755-2551236</p>
                                        <p><strong>Email:</strong> auction@mpfsdc.mp.gov.in</p>
                                        <p><strong>Timing:</strong> 10:00 AM - 5:00 PM</p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition fade-in">
                                    <div className="flex items-center mb-4">
                                        <i className="fas fa-file-contract text-green-700 text-2xl mr-3"></i>
                                        <h4 className="font-bold text-green-800">Tender Department</h4>
                                    </div>
                                    <div className="text-sm text-gray-700">
                                        <p><strong>Phone:</strong> +91-755-2551238</p>
                                        <p><strong>Email:</strong> tender@mpfsdc.mp.gov.in</p>
                                        <p><strong>Timing:</strong> 10:00 AM - 5:00 PM</p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition fade-in">
                                    <div className="flex items-center mb-4">
                                        <i className="fas fa-leaf text-green-700 text-2xl mr-3"></i>
                                        <h4 className="font-bold text-green-800">Forest Operations</h4>
                                    </div>
                                    <div className="text-sm text-gray-700">
                                        <p><strong>Phone:</strong> +91-755-2551240</p>
                                        <p><strong>Email:</strong> operations@mpfsdc.mp.gov.in</p>
                                        <p><strong>Timing:</strong> 9:30 AM - 6:00 PM</p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition fade-in">
                                    <div className="flex items-center mb-4">
                                        <i className="fas fa-users text-green-700 text-2xl mr-3"></i>
                                        <h4 className="font-bold text-green-800">HR Department</h4>
                                    </div>
                                    <div className="text-sm text-gray-700">
                                        <p><strong>Phone:</strong> +91-755-2551242</p>
                                        <p><strong>Email:</strong> hr@mpfsdc.mp.gov.in</p>
                                        <p><strong>Timing:</strong> 9:30 AM - 6:00 PM</p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition fade-in">
                                    <div className="flex items-center mb-4">
                                        <i className="fas fa-rupee-sign text-green-700 text-2xl mr-3"></i>
                                        <h4 className="font-bold text-green-800">Accounts Department</h4>
                                    </div>
                                    <div className="text-sm text-gray-700">
                                        <p><strong>Phone:</strong> +91-755-2551244</p>
                                        <p><strong>Email:</strong> accounts@mpfsdc.mp.gov.in</p>
                                        <p><strong>Timing:</strong> 9:30 AM - 6:00 PM</p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition fade-in">
                                    <div className="flex items-center mb-4">
                                        <i className="fas fa-exclamation-triangle text-green-700 text-2xl mr-3"></i>
                                        <h4 className="font-bold text-green-800">Grievance Cell</h4>
                                    </div>
                                    <div className="text-sm text-gray-700">
                                        <p><strong>Phone:</strong> 1800-123-4567 (Toll Free)</p>
                                        <p><strong>Email:</strong> grievance@mpfsdc.mp.gov.in</p>
                                        <p><strong>Timing:</strong> 24/7 Available</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section className="mb-16">
                            <h3 className="text-3xl font-bold mb-8 text-center text-green-800">Frequently Asked Questions</h3>
                            <div className="max-w-3xl mx-auto">
                                <div className="space-y-3">
                                    {faqItems.map((faq, index) => {
                                        const isOpen = openFaq === index;
                                        return (
                                            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden fade-in">
                                                <button
                                                    onClick={() => toggleFaq(index)}
                                                    className={`w-full px-6 py-4 text-left flex justify-between items-center gap-4 transition-all ${
                                                        isOpen ? 'bg-green-50/50' : 'hover:bg-gray-50'
                                                    }`}
                                                    aria-expanded={isOpen}
                                                >
                                                    <span className={`font-semibold text-sm md:text-base ${isOpen ? 'text-green-800' : 'text-gray-800'}`}>
                                                        {faq.question}
                                                    </span>
                                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                                                        isOpen ? 'bg-green-600 text-white rotate-180' : 'bg-gray-100 text-gray-500'
                                                    }`}>
                                                        <i className="fas fa-chevron-down text-xs"></i>
                                                    </div>
                                                </button>
                                                <div
                                                    className="overflow-hidden transition-all duration-300 ease-in-out"
                                                    style={{
                                                        maxHeight: isOpen ? '500px' : '0px',
                                                        opacity: isOpen ? 1 : 0
                                                    }}
                                                >
                                                    <div className="px-6 pb-5 pt-1">
                                                        <div className="border-t border-gray-100 pt-4">
                                                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </section>

                        {/* Social Media */}
                        <section className="text-center">
                            <h3 className="text-2xl font-bold mb-6 text-green-800">Follow Us</h3>
                            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                                Stay connected with MPFSDC through our social media channels for latest updates, news, and announcements.
                            </p>
                            <div className="flex justify-center space-x-6">
                                <a href="#" className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                                    <i className="fab fa-facebook-f text-xl"></i>
                                </a>
                                <a href="#" className="bg-blue-400 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-500 transition">
                                    <i className="fab fa-twitter text-xl"></i>
                                </a>
                                <a href="#" className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-800 transition">
                                    <i className="fab fa-linkedin-in text-xl"></i>
                                </a>
                                <a href="#" className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-700 transition">
                                    <i className="fab fa-youtube text-xl"></i>
                                </a>
                                <a href="#" className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-green-700 transition">
                                    <i className="fab fa-whatsapp text-xl"></i>
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />

            {/* Notification */}
            {showNotification && (
                <div className="fixed top-4 right-4 px-6 py-4 bg-green-600 text-white rounded-lg shadow-lg z-50 transform transition-transform duration-300">
                    <div className="flex items-center">
                        <i className="fas fa-check-circle mr-3"></i>
                        <span>{notificationMessage}</span>
                        <button 
                            onClick={() => setShowNotification(false)}
                            className="ml-4 hover:opacity-75 transition"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
