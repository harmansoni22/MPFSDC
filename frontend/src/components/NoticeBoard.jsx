import React from 'react';

const notices = [
    { id: 1, text: 'Tender Notice: Plantation work in Satpura Range - Due 20 Dec 2023', link: '/tenders', isNew: true },
    { id: 2, text: 'Auction Schedule for Teak Wood - Jabalpur Division updated', link: '/auctions', isNew: true },
    { id: 3, text: 'FSC Certification Renewal Process initiated for FY 2023-24', link: '/about', isNew: false },
    { id: 4, text: 'Recruitment drive for Forest Guards - Apply before 31 Dec 2023', link: '/contact', isNew: true },
    { id: 5, text: 'Annual Report 2022-23 published and available for download', link: '/about', isNew: false },
    { id: 6, text: 'Monsoon Plantation Drive 2023 commenced across all divisions', link: '/projects', isNew: false },
];

const NoticeBoard = () => {
    return (
        <div className="bg-yellow-50 border-y border-yellow-200 overflow-hidden">
            <div className="container mx-auto px-4 flex items-center">
                <div className="bg-yellow-500 text-white px-3 py-2 text-sm font-bold shrink-0 flex items-center gap-2 z-10 shadow-sm">
                    <i className="fas fa-bullhorn"></i>
                    <span className="hidden sm:inline">Notice Board</span>
                </div>
                <div className="overflow-hidden flex-1 relative h-10">
                    <div className="absolute inset-0 flex items-center animate-marquee whitespace-nowrap">
                        {notices.map((notice, i) => (
                            <React.Fragment key={notice.id}>
                                <a href={notice.link} className="inline-flex items-center gap-2 text-sm text-yellow-900 hover:text-green-700 transition mx-8">
                                    {notice.isNew && (
                                        <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded animate-pulse">NEW</span>
                                    )}
                                    <span className="truncate">{notice.text}</span>
                                    <i className="fas fa-external-link-alt text-xs opacity-50"></i>
                                </a>
                                <span className="text-yellow-300 mx-2">|</span>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default NoticeBoard;
