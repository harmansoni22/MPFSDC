import PageShell from '../components/PageShell';

const TurnkeyProjects = () => {
    return (
        <PageShell>
            {/* Hero Section */}
            <section className="bg-olive-900 text-beige-50 py-16 md:py-24 border-b-4 border-gold-500">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gold-300">Turnkey Projects</h1>
                    <p className="text-lg md:text-xl text-beige-200 max-w-3xl leading-relaxed">
                        End-to-end plantation solutions through strategic alliances. We execute large-scale, customized deposit works for government and private entities to meet environmental and CSR mandates.
                    </p>
                </div>
            </section>

            {/* Quick Links / Page Navigation */}
            <section className="bg-beige-50 py-6 px-4 border-b border-beige-200">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { name: 'Eco Restoration in Mine Area', icon: 'fa-mountain', link: '#eco-restoration' },
                            { name: 'Miyawaki Forest', icon: 'fa-tree', link: '#miyawaki' },
                            { name: 'Avenue Plantation', icon: 'fa-road', link: '#avenue' },
                            { name: 'CSR Plantations', icon: 'fa-handshake', link: '#csr' },
                        ].map((item) => (
                            <a href={item.link} key={item.name} className="bg-white border border-beige-300 rounded-md px-4 py-2 text-sm font-semibold text-olive-800 hover:bg-olive-50 hover:border-olive-400 transition-colors flex items-center gap-2 shadow-sm">
                                <i className={`fas ${item.icon} text-olive-500`}></i> {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <div className="bg-beige-50 py-12">
                <div className="container mx-auto px-4 max-w-6xl">
                    
                    {/* Project 1 */}
                    <section id="eco-restoration" className="mb-16 scroll-mt-24">
                        <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-beige-200">
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold text-olive-800 mb-4 border-b-2 border-gold-300 inline-block pb-1">Eco Restoration in Mine Area</h2>
                                <p className="text-olive-700 leading-relaxed mb-4">
                                    Reclaiming degraded mining landscapes by transforming them into thriving mixed-species forests. We utilize advanced soil treatment and appropriate native species to restore ecological balance.
                                </p>
                                <div className="bg-beige-100 p-4 rounded-xl mb-4 border-l-4 border-olive-500">
                                    <h4 className="font-bold text-olive-900 mb-2">Key Highlights</h4>
                                    <ul className="list-disc list-inside text-olive-800 space-y-1 text-sm font-medium">
                                        <li><span className="font-bold">Partnering Agency:</span> NCL (Northern Coalfields Limited) & WCL (Western Coalfields Limited)</li>
                                        <li><span className="font-bold">Divisions:</span> Rewa-Sidhi (NCL), Vidarbha region (WCL)</li>
                                        <li><span className="font-bold">Scale:</span> 1.40 crore mixed-species (NCL) & 29 lakh seedlings / ₹150 crore contract (WCL)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="md:w-1/3 w-full bg-olive-100 rounded-xl h-64 flex items-center justify-center border-2 border-olive-200">
                                {/* Placeholder */}
                                <span className="text-olive-500 font-medium"><i className="fas fa-mountain text-4xl mb-2 block text-center"></i> Mine Restoration</span>
                            </div>
                        </div>
                    </section>

                    {/* Project 2 */}
                    <section id="miyawaki" className="mb-16 scroll-mt-24">
                        <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-beige-200">
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold text-olive-800 mb-4 border-b-2 border-gold-300 inline-block pb-1">Miyawaki Forest</h2>
                                <p className="text-olive-700 leading-relaxed mb-4">
                                    Creating dense, native, and rapid-growing urban forests using the Miyawaki technique. Ideal for corporate campuses and urban centers aiming for high-impact carbon sequestration in small areas.
                                </p>
                                <div className="bg-beige-100 p-4 rounded-xl mb-4 border-l-4 border-olive-500">
                                    <h4 className="font-bold text-olive-900 mb-2">Key Highlights</h4>
                                    <ul className="list-disc list-inside text-olive-800 space-y-1 text-sm font-medium">
                                        <li><span className="font-bold">Partnering Agency:</span> Industrial collaborators and Urban Local Bodies</li>
                                        <li><span className="font-bold">Approach:</span> High-density planting (3-4 saplings per sq.m)</li>
                                        <li><span className="font-bold">Impact:</span> Up to 30x denser, 10x faster growth, completely maintenance-free after 3 years.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="md:w-1/3 w-full bg-olive-100 rounded-xl h-64 flex items-center justify-center border-2 border-olive-200">
                                {/* Placeholder */}
                                <span className="text-olive-500 font-medium"><i className="fas fa-tree text-4xl mb-2 block text-center"></i> Miyawaki Technique</span>
                            </div>
                        </div>
                    </section>

                    {/* Project 3 */}
                    <section id="avenue" className="mb-16 scroll-mt-24">
                        <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-beige-200">
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold text-olive-800 mb-4 border-b-2 border-gold-300 inline-block pb-1">Avenue Plantation</h2>
                                <p className="text-olive-700 leading-relaxed mb-4">
                                    Beautifying state and national highways while controlling pollution and providing shade. We execute turnkey avenue plantations ensuring high survival rates with tall saplings and tree guards.
                                </p>
                                <div className="bg-beige-100 p-4 rounded-xl mb-4 border-l-4 border-olive-500">
                                    <h4 className="font-bold text-olive-900 mb-2">Key Highlights</h4>
                                    <ul className="list-disc list-inside text-olive-800 space-y-1 text-sm font-medium">
                                        <li><span className="font-bold">Partnering Agency:</span> NHAI, MPRDC, and Public Works Departments</li>
                                        <li><span className="font-bold">Divisions:</span> Statewide execution across all 11 MPRVVN divisions</li>
                                        <li><span className="font-bold">Species:</span> Neem, Karanj, Peepal, Banyan, and flowering species suitable for local soil conditions.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="md:w-1/3 w-full bg-olive-100 rounded-xl h-64 flex items-center justify-center border-2 border-olive-200">
                                {/* Placeholder */}
                                <span className="text-olive-500 font-medium"><i className="fas fa-road text-4xl mb-2 block text-center"></i> Highway Plantation</span>
                            </div>
                        </div>
                    </section>

                    {/* Project 4 */}
                    <section id="csr" className="mb-16 scroll-mt-24">
                        <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-beige-200">
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold text-olive-800 mb-4 border-b-2 border-gold-300 inline-block pb-1">CSR Plantations</h2>
                                <p className="text-olive-700 leading-relaxed mb-4">
                                    Partnering with major corporations to fulfill their Corporate Social Responsibility (CSR) goals through impactful, large-scale forestry initiatives, focusing on carbon sequestration and community benefits.
                                </p>
                                <div className="bg-beige-100 p-4 rounded-xl mb-4 border-l-4 border-olive-500">
                                    <h4 className="font-bold text-olive-900 mb-2">Key Highlights</h4>
                                    <ul className="list-disc list-inside text-olive-800 space-y-1 text-sm font-medium">
                                        <li><span className="font-bold">Partnering Agency:</span> NTPC & Havells</li>
                                        <li><span className="font-bold">Scale:</span> NTPC (15.03 lakh mixed-species), Havells (21 lakh teak seedlings)</li>
                                        <li><span className="font-bold">Impact:</span> Over 4,30,687 tonnes of CO₂ sequestration potential generated.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="md:w-1/3 w-full bg-olive-100 rounded-xl h-64 flex items-center justify-center border-2 border-olive-200">
                                {/* Placeholder */}
                                <span className="text-olive-500 font-medium"><i className="fas fa-handshake text-4xl mb-2 block text-center"></i> Corporate CSR</span>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </PageShell>
    );
};

export default TurnkeyProjects;
