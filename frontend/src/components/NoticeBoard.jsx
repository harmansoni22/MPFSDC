import { Link } from 'react-router-dom';
import { notices } from '../data/siteData';

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
                        {notices.map(notice => (
                            <span key={notice.id} className="inline-flex items-center mx-8">
                                <Link to={notice.link} className="inline-flex items-center gap-2 text-sm text-yellow-900 hover:text-green-700 transition">
                                    {notice.isNew && (
                                        <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded animate-pulse">NEW</span>
                                    )}
                                    <span className="truncate">{notice.text}</span>
                                    <i className="fas fa-external-link-alt text-xs opacity-50"></i>
                                </Link>
                                <span className="text-yellow-300 mx-2">|</span>
                            </span>
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
