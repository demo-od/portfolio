// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import {navLinks} from "../data.ts";

interface NavbarProps {
    darkMode: boolean;
    setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Brand / Logo pointing to #home */}
                <a href="#home" className="font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">
                    <div className="w-11 h-11 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 rounded-full">AO</div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors">
                            {link.name}
                        </a>
                    ))}

                    {/* Theme Switcher */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        aria-label="Toggle Theme"
                        className="p-2 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all cursor-pointer"
                    >
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </nav>

                {/* Mobile controls */}
                <div className="flex items-center gap-3 md:hidden">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        aria-label="Toggle Theme"
                        className="p-2 rounded-full border border-zinc-300 dark:border-zinc-700 transition-all cursor-pointer"
                    >
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                        className="p-2 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white"
                    >
                        {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-6 py-4 space-y-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-sm font-medium py-2 hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};