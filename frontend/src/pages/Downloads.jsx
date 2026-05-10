import PageShell from '../components/PageShell';

const Downloads = () => {
    const downloadSections = [
        {
            id: 'annual-reports',
            title: 'Annual Reports',
            icon: 'fa-chart-pie',
            files: [
                { name: 'MPFSDC Annual Report 2024-2025', size: '4.2 MB', date: '15-04-2025' },
                { name: 'MPFSDC Annual Report 2023-2024', size: '3.8 MB', date: '20-04-2024' },
                { name: 'MPFSDC Annual Report 2022-2023', size: '4.5 MB', date: '12-04-2023' },
            ]
        },
        {
            id: 'annual-returns',
            title: 'Annual Returns',
            icon: 'fa-file-invoice-dollar',
            files: [
                { name: 'Annual Return Financial Year 2024-25', size: '2.1 MB', date: '10-05-2025' },
                { name: 'Annual Return Financial Year 2023-24', size: '1.9 MB', date: '05-05-2024' },
            ]
        },
        {
            id: 'rti-rts',
            title: 'RTI / RTS',
            icon: 'fa-info-circle',
            files: [
                { name: 'Right to Information Act Manual', size: '1.5 MB', date: '01-01-2024' },
                { name: 'RTS Designated Officers List 2025', size: '800 KB', date: '15-02-2025' },
                { name: 'Proactive Disclosure under Section 4(1)(b)', size: '2.3 MB', date: '10-03-2025' },
            ]
        },
        {
            id: 'management-plan',
            title: 'Management Plan',
            icon: 'fa-book-open',
            files: [
                { name: 'Strategic Vision Document 2047', size: '5.6 MB', date: '01-01-2024' },
                { name: 'Working Plan: Jabalpur Division (2020-2030)', size: '8.2 MB', date: '10-06-2020' },
                { name: 'Working Plan: Seoni Division (2022-2032)', size: '7.4 MB', date: '15-08-2022' },
            ]
        },
        {
            id: 'guidelines-circulars',
            title: 'Guidelines / Circulars',
            icon: 'fa-clipboard-list',
            files: [
                { name: 'Revised Guidelines for E-Auction (2025)', size: '1.2 MB', date: '20-01-2025' },
                { name: 'Circular on CSR Plantation Monitoring', size: '650 KB', date: '05-11-2024' },
                { name: 'NTFP Collection Safety Guidelines', size: '900 KB', date: '12-09-2024' },
            ]
        },
        {
            id: 'acts-rules',
            title: 'Acts / Rules',
            icon: 'fa-balance-scale',
            files: [
                { name: 'MP Rajya Van Vikas Nigam Act', size: '1.8 MB', date: '15-05-1975' },
                { name: 'Forest Conservation Act Guidelines', size: '3.4 MB', date: '10-02-2023' },
                { name: 'MP Transit (Forest Produce) Rules', size: '2.2 MB', date: '01-04-2000' },
            ]
        },
        {
            id: 'publication',
            title: 'Publication',
            icon: 'fa-newspaper',
            files: [
                { name: 'Vikasika - Quarterly Newsletter (Q1 2026)', size: '5.1 MB', date: '01-04-2026' },
                { name: 'Vikasika - Quarterly Newsletter (Q4 2025)', size: '4.8 MB', date: '01-01-2026' },
                { name: 'Brochure: Success Stories in Eco-Restoration', size: '6.5 MB', date: '15-12-2025' },
            ]
        }
    ];

    return (
        <PageShell>
            {/* Header Section */}
            <section className="bg-olive-900 text-beige-50 py-16 md:py-24 border-b-4 border-gold-500">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gold-300">Document Center</h1>
                    <p className="text-lg md:text-xl text-beige-200 max-w-3xl leading-relaxed">
                        Access official reports, policy documents, operational guidelines, and corporate publications of the MP State Forest Development Corporation.
                    </p>
                </div>
            </section>

            {/* Quick Links / Page Navigation */}
            <section className="bg-beige-50 py-6 px-4 border-b border-beige-200">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-3">
                        {downloadSections.map((item) => (
                            <a href={`#${item.id}`} key={item.id} className="bg-white border border-beige-300 rounded-md px-4 py-2 text-sm font-semibold text-olive-800 hover:bg-olive-50 hover:border-olive-400 transition-colors flex items-center gap-2 shadow-sm">
                                <i className={`fas ${item.icon} text-olive-500`}></i> {item.title}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <div className="bg-beige-50 py-12">
                <div className="container mx-auto px-4 max-w-5xl">
                    
                    {/* Navigation Sidebar / Content Grid */}
                    <div className="grid md:grid-cols-4 gap-8">
                        
                        {/* Sticky Sidebar Navigation */}
                        <div className="md:col-span-1 hidden md:block">
                            <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-beige-200 overflow-hidden">
                                <div className="bg-olive-800 text-white font-bold p-4 text-sm tracking-wider uppercase">
                                    Categories
                                </div>
                                <ul className="divide-y divide-beige-100">
                                    {downloadSections.map(section => (
                                        <li key={section.id}>
                                            <a 
                                                href={`#${section.id}`} 
                                                className="block px-4 py-3 text-sm font-semibold text-olive-700 hover:bg-beige-100 hover:text-gold-600 transition-colors"
                                            >
                                                {section.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="md:col-span-3 space-y-12">
                            {downloadSections.map(section => (
                                <section key={section.id} id={section.id} className="scroll-mt-28">
                                    <div className="flex items-center gap-3 mb-6 border-b-2 border-gold-300 pb-2">
                                        <div className="w-10 h-10 rounded-full bg-olive-100 flex items-center justify-center text-olive-600">
                                            <i className={`fas ${section.icon}`}></i>
                                        </div>
                                        <h2 className="text-2xl font-bold text-olive-900">{section.title}</h2>
                                    </div>
                                    
                                    <div className="bg-white rounded-xl shadow-sm border border-beige-200 overflow-hidden">
                                        <ul className="divide-y divide-beige-100">
                                            {section.files.map((file, index) => (
                                                <li key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 hover:bg-beige-50 transition-colors group">
                                                    <div className="flex items-start gap-3 mb-3 sm:mb-0">
                                                        <i className="far fa-file-pdf text-red-500 text-xl mt-0.5"></i>
                                                        <div>
                                                            <h4 className="font-semibold text-olive-800 group-hover:text-gold-600 transition-colors">{file.name}</h4>
                                                            <p className="text-xs text-olive-500 mt-1">Uploaded: {file.date} • Size: {file.size}</p>
                                                        </div>
                                                    </div>
                                                    <button className="self-start sm:self-auto bg-olive-100 hover:bg-olive-800 hover:text-white text-olive-700 px-4 py-2 rounded text-sm font-semibold transition-colors flex items-center gap-2 border border-olive-200 hover:border-olive-800">
                                                        <i className="fas fa-download"></i> Download
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </section>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </PageShell>
    );
};

export default Downloads;
