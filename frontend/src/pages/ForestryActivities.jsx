import PageShell from '../components/PageShell';

const ForestryActivities = () => {
    return (
        <PageShell>
            {/* Hero Section */}
            <section className="bg-olive-900 text-beige-50 py-16 md:py-24 border-b-4 border-gold-500">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gold-300">Forestry Activities</h1>
                    <p className="text-lg md:text-xl text-beige-200 max-w-3xl leading-relaxed">
                        Pioneering sustainable forest management through science, innovation, and community engagement. Explore our core operational areas that drive ecological integrity and rural prosperity.
                    </p>
                </div>
            </section>

            {/* Quick Links / Page Navigation */}
            <section className="bg-beige-50 py-6 px-4 border-b border-beige-200">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { name: 'Nursery', icon: 'fa-seedling', link: '#nursery' },
                            { name: 'Plantation', icon: 'fa-tree', link: '#plantation' },
                            { name: 'Forest Protection', icon: 'fa-shield-alt', link: '#protection' },
                            { name: 'Depo Management', icon: 'fa-tractor', link: '#depo' },
                            { name: 'Wildlife Conservation', icon: 'fa-paw', link: '#wildlife' },
                            { name: 'Community', icon: 'fa-users', link: '#community' },
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
                    
                    {/* Activity 1 */}
                    <section id="nursery" className="mb-16 scroll-mt-24">
                        <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-beige-200">
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold text-olive-800 mb-4 border-b-2 border-gold-300 inline-block pb-1">Nursery Management</h2>
                                <p className="text-olive-700 leading-relaxed mb-4">
                                    Transitioning to self-reliant, revenue-generating nurseries with a focus on high-quality planting material. We operate Hi-Tech Nurseries across 7 divisions featuring poly houses, mist chambers, and root trainers.
                                </p>
                                <ul className="list-disc list-inside text-olive-800 space-y-2 font-medium">
                                    <li>Targeting 2 Cr teak root-shoots and 1.25 Cr bamboo seedlings.</li>
                                    <li>1.10 Cr RET/NTFP plants using in-house inputs like Vermicompost and Jeevamrit.</li>
                                    <li>Teak Seed Production Units in Betul & Jabalpur.</li>
                                </ul>
                            </div>
                            <div className="md:w-1/3 w-full bg-olive-100 rounded-xl h-64 flex items-center justify-center border-2 border-olive-200">
                                {/* Placeholder for Nursery Image */}
                                <span className="text-olive-500 font-medium"><i className="fas fa-leaf text-4xl mb-2 block text-center"></i> High-Tech Nursery</span>
                            </div>
                        </div>
                    </section>

                    {/* Activity 2 */}
                    <section id="plantation" className="mb-16 scroll-mt-24">
                        <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-beige-200">
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold text-olive-800 mb-4 border-b-2 border-gold-300 inline-block pb-1">Plantation Drives</h2>
                                <p className="text-olive-700 leading-relaxed mb-4">
                                    Our approach has evolved from Concentrated Regeneration to Site-Specific Conservation-Oriented Forestry. Phase XI focuses on Ecology + Revenue across 11 divisions.
                                </p>
                                <ul className="list-disc list-inside text-olive-800 space-y-2 font-medium">
                                    <li>Key species: Teak, Bamboo, RET & NTFP.</li>
                                    <li>Innovative Sandalwood (Santalum album) plantations with intercropping (Teak, Amla, Jamun).</li>
                                    <li>Canopy density-based plantation focusing on high input and irrigated high-tech methods.</li>
                                </ul>
                            </div>
                            <div className="md:w-1/3 w-full bg-olive-100 rounded-xl h-64 flex items-center justify-center border-2 border-olive-200">
                                {/* Placeholder for Plantation Image */}
                                <span className="text-olive-500 font-medium"><i className="fas fa-tree text-4xl mb-2 block text-center"></i> Teak Plantation</span>
                            </div>
                        </div>
                    </section>

                    {/* Activity 3 */}
                    <section id="protection" className="mb-16 scroll-mt-24">
                        <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-beige-200">
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold text-olive-800 mb-4 border-b-2 border-gold-300 inline-block pb-1">Forest Protection</h2>
                                <p className="text-olive-700 leading-relaxed mb-4">
                                    Implementing sustained protection mechanisms for mature plantations and highly vulnerable species like Sandalwood.
                                </p>
                                <ul className="list-disc list-inside text-olive-800 space-y-2 font-medium">
                                    <li>Deploying chain-link fencing, alarms, solar-cameras, drones, and canine patrols.</li>
                                    <li>Engaging Van Suraksha Samiti (Forest Protection Committees).</li>
                                    <li>Allocating dedicated budgets (up to 66% of cost for high-value species) to secure assets.</li>
                                </ul>
                            </div>
                            <div className="md:w-1/3 w-full bg-olive-100 rounded-xl h-64 flex items-center justify-center border-2 border-olive-200">
                                {/* Placeholder for Protection Image */}
                                <span className="text-olive-500 font-medium"><i className="fas fa-shield-alt text-4xl mb-2 block text-center"></i> Drone Patrol</span>
                            </div>
                        </div>
                    </section>

                    {/* Activity 4 */}
                    <section id="depo" className="mb-16 scroll-mt-24">
                        <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-beige-200">
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold text-olive-800 mb-4 border-b-2 border-gold-300 inline-block pb-1">Depo Management</h2>
                                <p className="text-olive-700 leading-relaxed mb-4">
                                    Efficiently handling harvested timber, bamboo, and NTFP. We practice optimal market-driven thinning and final felling protocols.
                                </p>
                                <ul className="list-disc list-inside text-olive-800 space-y-2 font-medium">
                                    <li>Thinning regimes optimized for maximum yield and forest health.</li>
                                    <li>Transparent e-auction systems for timber and bamboo lots.</li>
                                    <li>Ensuring sustainable supply to industries and local communities.</li>
                                </ul>
                            </div>
                            <div className="md:w-1/3 w-full bg-olive-100 rounded-xl h-64 flex items-center justify-center border-2 border-olive-200">
                                {/* Placeholder for Depo Image */}
                                <span className="text-olive-500 font-medium"><i className="fas fa-tractor text-4xl mb-2 block text-center"></i> Timber Depo</span>
                            </div>
                        </div>
                    </section>

                    {/* Activity 5 */}
                    <section id="wildlife" className="mb-16 scroll-mt-24">
                        <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-beige-200">
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold text-olive-800 mb-4 border-b-2 border-gold-300 inline-block pb-1">Wildlife Conservation</h2>
                                <p className="text-olive-700 leading-relaxed mb-4">
                                    Strategic wildlife management in key corridors. Our plantations support wildlife movement, connecting habitats for tigers, leopards, bison, and deer.
                                </p>
                                <ul className="list-disc list-inside text-olive-800 space-y-2 font-medium">
                                    <li>Maintaining Kanha–Pench, Bandhavgarh, Ratapani, and Satpura–Melghat corridors.</li>
                                    <li>Ensuring year-round hydration via dedicated waterholes.</li>
                                    <li>Eco-friendly harvesting preserving dens and snag trees.</li>
                                </ul>
                            </div>
                            <div className="md:w-1/3 w-full bg-olive-100 rounded-xl h-64 flex items-center justify-center border-2 border-olive-200">
                                {/* Placeholder for Wildlife Image */}
                                <span className="text-olive-500 font-medium"><i className="fas fa-paw text-4xl mb-2 block text-center"></i> Tiger Corridor</span>
                            </div>
                        </div>
                    </section>

                    {/* Activity 6 */}
                    <section id="community" className="mb-16 scroll-mt-24">
                        <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-beige-200">
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold text-olive-800 mb-4 border-b-2 border-gold-300 inline-block pb-1">Community Engagement</h2>
                                <p className="text-olive-700 leading-relaxed mb-4">
                                    People-centric stewardship empowering tribal communities and women through inclusive forest development and Joint Forest Management (JFM).
                                </p>
                                <ul className="list-disc list-inside text-olive-800 space-y-2 font-medium">
                                    <li>732 JFM Samitis protecting 3.26 lakh Ha.</li>
                                    <li>Distributing fruit/medicinal plants and establishing community nutrition gardens.</li>
                                    <li>Creating green jobs: nursery work, plantation watchers, fire guards, and bio-char production.</li>
                                </ul>
                            </div>
                            <div className="md:w-1/3 w-full bg-olive-100 rounded-xl h-64 flex items-center justify-center border-2 border-olive-200">
                                {/* Placeholder for Community Image */}
                                <span className="text-olive-500 font-medium"><i className="fas fa-users text-4xl mb-2 block text-center"></i> JFM Samiti</span>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </PageShell>
    );
};

export default ForestryActivities;
