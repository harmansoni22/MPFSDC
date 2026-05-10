import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const searchIndex = [
    { title: 'About MPFSDC', desc: 'History, mission, vision, and corporate values of the corporation.', path: '/about', tags: 'about us history mission vision' },
    { title: 'Services', desc: 'Afforestation, timber harvesting, nursery management, and consulting.', path: '/services', tags: 'services timber nursery consulting' },
    { title: 'Current Projects', desc: 'Ongoing forest development and conservation projects across Madhya Pradesh.', path: '/projects', tags: 'projects ongoing conservation plantation' },
    { title: 'Auction Schedule', desc: 'Upcoming timber and bamboo auctions with dates and locations.', path: '/auctions', tags: 'auction timber bamboo e-auction bidding' },
    { title: 'Photo Gallery', desc: 'Images of plantations, nurseries, wildlife, and community events.', path: '/gallery', tags: 'gallery photos images media' },
    { title: 'Tenders & Procurement', desc: 'Current tender notices, bidding documents, and procurement details.', path: '/tenders', tags: 'tenders procurement bidding contracts' },
    { title: 'Contact Us', desc: 'Corporate office address, phone numbers, email, and contact form.', path: '/contact', tags: 'contact address phone email office' },
    { title: 'E-Auction Portal', desc: 'Online bidding platform for timber and forest produce.', path: '/auctions', tags: 'e-auction portal online bidding' },
    { title: 'FSC Certification', desc: 'Forest Stewardship Council certification for sustainable management.', path: '/about', tags: 'fsc certification sustainable stewardship' },
    { title: 'Annual Report 2022-23', desc: 'Yearly performance report and financial highlights.', path: '/', tags: 'annual report financial highlights' },
    { title: 'Auction Rules', desc: 'Rules and regulations for participating in timber auctions.', path: '/auctions', tags: 'auction rules regulations guidelines' },
    { title: 'Tender Guidelines', desc: 'Guidelines for submitting bids and proposals.', path: '/tenders', tags: 'tender guidelines bid submission' },
    { title: 'Quality Seeds', desc: 'High-yield certified forest seeds for plantation.', path: '/services', tags: 'seeds quality certified plantation' },
    { title: 'Quality Seedlings', desc: 'Modern nursery producing robust saplings.', path: '/services', tags: 'seedlings nursery saplings plants' },
    { title: 'Forest Policy', desc: 'Official forest policy document for Madhya Pradesh.', path: '/', tags: 'policy document government forest' },
];

const SearchModal = () => {
    const { searchOpen, closeSearch, openSearch } = useApp();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        if (searchOpen) {
            const t = setTimeout(() => {
                setQuery('');
                setResults([]);
                inputRef.current?.focus();
            }, 50);
            return () => clearTimeout(t);
        }
    }, [searchOpen]);

    useEffect(() => {
        const q = query.trim().toLowerCase();
        const debounce = setTimeout(() => {
            if (q.length < 2) { setResults([]); return; }
            const filtered = searchIndex.filter(item =>
                item.title.toLowerCase().includes(q) ||
                item.desc.toLowerCase().includes(q) ||
                item.tags.toLowerCase().includes(q)
            );
            setResults(filtered);
        }, 150);
        return () => clearTimeout(debounce);
    }, [query]);

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') closeSearch();
            // Ctrl+K or Cmd+K to open search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                openSearch();
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [closeSearch, openSearch]);

    if (!searchOpen) return null;

    return (
        <div className="fixed inset-0 z-[3000] flex items-start justify-center pt-20 md:pt-28" onClick={closeSearch}>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            <div
                className="relative w-full max-w-xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up"
                onClick={e => e.stopPropagation()}
            >
                {/* Search input */}
                    <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
                    <i className="fas fa-search text-gray-400 text-lg"></i>
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder="Search pages, documents, services..."
                        className="flex-1 text-base outline-none text-gray-800 placeholder-gray-400"
                    />
                    <button
                        onClick={closeSearch}
                        className="text-gray-400 hover:text-gray-600 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition"
                    >
                        <i className="fas fa-times"></i>
                    </button>
                    <span className="hidden md:inline text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">ESC</span>
                </div>

                {/* Results */}
                <div className="max-h-80 overflow-y-auto">
                    {query.length < 2 ? (
                        <div className="p-6 text-center text-gray-400">
                            <i className="fas fa-search text-3xl mb-3 opacity-30"></i>
                            <p className="text-sm">Type at least 2 characters to search</p>
                            <div className="flex flex-wrap gap-2 justify-center mt-4">
                                {['Auctions', 'Tenders', 'Contact', 'Gallery', 'Projects'].map(tag => (
                                    <button
                                        key={tag}
                                        onClick={() => setQuery(tag)}
                                        className="px-3 py-1.5 bg-green-50 text-green-700 text-xs rounded-full hover:bg-green-100 transition"
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : results.length === 0 ? (
                        <div className="p-6 text-center text-gray-400">
                            <i className="fas fa-search text-3xl mb-3 opacity-30"></i>
                            <p className="text-sm">No results found for "{query}"</p>
                        </div>
                    ) : (
                        <div>
                            <div className="px-5 py-2 bg-gray-50 text-xs text-gray-500 font-medium">
                                {results.length} result{results.length > 1 ? 's' : ''}
                            </div>
                            {results.map((item, i) => (
                                <Link
                                    key={i}
                                    to={item.path}
                                    onClick={closeSearch}
                                    className="flex items-start gap-3 px-5 py-3 hover:bg-green-50 transition border-b border-gray-50 last:border-0"
                                >
                                    <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                                        <i className="fas fa-file-alt text-green-600 text-sm"></i>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-sm font-semibold text-gray-800 truncate">{item.title}</h4>
                                        <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{item.desc}</p>
                                    </div>
                                    <i className="fas fa-chevron-right text-gray-300 text-xs mt-2"></i>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="px-5 py-2.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                    <span>Press <kbd className="bg-white border rounded px-1 font-mono">ESC</kbd> to close</span>
                    <span>Powered by MPFSDC Search</span>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
