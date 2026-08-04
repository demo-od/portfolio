// src/App.tsx
import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export default function App() {
    const [darkMode, setDarkMode] = useState<boolean>(true);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <div className="min-h-screen font-sans selection:bg-zinc-800 selection:text-white dark:selection:bg-zinc-200 dark:selection:text-black">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

            <main className="max-w-5xl mx-auto px-6">
                <Hero />
                <Skills />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}