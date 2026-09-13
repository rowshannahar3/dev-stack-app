import { useState } from "react";
import logoText from "../assets/logo-text.png";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
                {/* Left (mobile): hamburger. Left (desktop): logo */}
                <div className="flex items-center gap-3">
                    <button
                        className="md:hidden text-slate-700"
                        aria-label="Toggle menu"
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        {menuOpen ? (
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                            </svg>
                        ) : (
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                            </svg>
                        )}
                    </button>

                    <a href="#home" className="flex items-center">
                        <img src={logoText} alt="Dev Stack" className="h-8 w-auto" />
                    </a>
                </div>

                {/* Center: nav links, desktop only */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                    {NAV_LINKS.map((link, i) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className={i === 0 ? "text-pink-600" : "hover:text-slate-900 transition-colors"}
                        >
                            {link}
                        </a>
                    ))}
                </nav>

                {/* Right: auth buttons, on both mobile and desktop */}
                <div className="flex items-center gap-3">
                    <a href="#signin" className="hidden sm:inline text-sm font-medium text-slate-700 hover:text-slate-900">
                        Sign In
                    </a>
                    <a
                        href="#signup"
                        className="text-sm font-semibold px-4 py-2 rounded-full brand-gradient-bg shadow-sm hover:opacity-90 transition-opacity"
                    >
                        Sign Up
                    </a>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <nav className="md:hidden px-5 pb-4 flex flex-col gap-3 text-sm font-medium text-slate-600 border-t border-slate-100">
                    {NAV_LINKS.map((link, i) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            onClick={() => setMenuOpen(false)}
                            className={`pt-3 ${i === 0 ? "text-pink-600" : ""}`}
                        >
                            {link}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}
