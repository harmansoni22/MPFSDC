import { useState, useEffect } from 'react';

const AccessibilityPanel = () => {
    const [open, setOpen] = useState(false);
    const [settings, setSettings] = useState({
        highContrast: false,
        grayscale: false,
        largeText: false,
        dyslexicFont: false,
        highlightLinks: false,
        underlineLinks: false,
        readableFont: false,
    });

    useEffect(() => {
        const root = document.documentElement;
        const body = document.body;

        // High contrast
        if (settings.highContrast) {
            body.classList.add('accessibility-high-contrast');
        } else {
            body.classList.remove('accessibility-high-contrast');
        }

        // Grayscale
        if (settings.grayscale) {
            body.style.filter = 'grayscale(100%)';
        } else {
            body.style.filter = '';
        }

        // Large text
        if (settings.largeText) {
            root.style.fontSize = '120%';
        } else {
            root.style.fontSize = '';
        }

        // Dyslexic font
        if (settings.dyslexicFont) {
            body.style.fontFamily = "'Comic Sans MS', 'Chalkboard SE', sans-serif";
        } else if (settings.readableFont) {
            body.style.fontFamily = "'Georgia', 'Times New Roman', serif";
        } else {
            body.style.fontFamily = '';
        }

        // Highlight links
        if (settings.highlightLinks) {
            body.classList.add('accessibility-highlight-links');
        } else {
            body.classList.remove('accessibility-highlight-links');
        }

        // Underline links
        if (settings.underlineLinks) {
            body.classList.add('accessibility-underline-links');
        } else {
            body.classList.remove('accessibility-underline-links');
        }
    }, [settings]);

    const toggle = (key) => setSettings(prev => ({ ...prev, [key]: !prev[key] }));

    const resetAll = () => {
        setSettings({
            highContrast: false,
            grayscale: false,
            largeText: false,
            dyslexicFont: false,
            highlightLinks: false,
            underlineLinks: false,
            readableFont: false,
        });
        document.documentElement.style.fontSize = '';
        document.body.style.filter = '';
        document.body.style.fontFamily = '';
        document.body.classList.remove(
            'accessibility-high-contrast',
            'accessibility-highlight-links',
            'accessibility-underline-links'
        );
    };

    const options = [
        { key: 'highContrast', label: 'High Contrast', icon: 'fas fa-adjust' },
        { key: 'grayscale', label: 'Grayscale', icon: 'fas fa-tint-slash' },
        { key: 'largeText', label: 'Large Text', icon: 'fas fa-font' },
        { key: 'readableFont', label: 'Readable Font', icon: 'fas fa-book-open' },
        { key: 'dyslexicFont', label: 'Dyslexic Font', icon: 'fas fa-pen-fancy' },
        { key: 'highlightLinks', label: 'Highlight Links', icon: 'fas fa-link' },
        { key: 'underlineLinks', label: 'Underline Links', icon: 'fas fa-underline' },
    ];

    return (
        <>
            {/* Floating toggle button */}
            <button
                onClick={() => setOpen(!open)}
                className={`fixed left-4 bottom-4 z-[1001] w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                    open ? 'bg-green-700 text-white rotate-90' : 'bg-white text-green-700 hover:bg-green-50 border border-green-200'
                }`}
                aria-label="Accessibility Options"
                title="Accessibility Options"
            >
                <i className="fas fa-universal-access text-xl"></i>
            </button>

            {/* Panel */}
            {open && (
                <div className="fixed left-4 bottom-20 z-[1001] w-72 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in-up">
                    <div className="bg-gradient-to-r from-green-800 to-green-700 px-5 py-4 flex items-center justify-between">
                        <h3 className="text-white font-bold text-sm flex items-center gap-2">
                            <i className="fas fa-universal-access"></i> Accessibility Tools
                        </h3>
                        <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    <div className="p-4 space-y-2 max-h-96 overflow-y-auto">
                        {options.map(opt => (
                            <button
                                key={opt.key}
                                onClick={() => toggle(opt.key)}
                                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                                    settings[opt.key]
                                        ? 'bg-green-50 text-green-700 border border-green-200'
                                        : 'text-gray-700 hover:bg-gray-50 border border-transparent'
                                }`}
                            >
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${
                                    settings[opt.key] ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-500'
                                }`}>
                                    <i className={opt.icon}></i>
                                </div>
                                <span className="flex-1 text-left">{opt.label}</span>
                                {settings[opt.key] && <i className="fas fa-check text-green-600 text-xs"></i>}
                            </button>
                        ))}
                    </div>
                    <div className="p-4 border-t border-gray-100">
                        <button
                            onClick={resetAll}
                            className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition flex items-center justify-center gap-2"
                        >
                            <i className="fas fa-undo"></i> Reset All
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AccessibilityPanel;
