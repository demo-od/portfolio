// src/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export const Hero: React.FC = () => {
    return (
        <section id="home" className="min-h-[calc(100vh-4rem)] flex flex-col justify-center py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="space-y-6"
            >
                {/* Availability Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Available for new opportunities
                </div>

                {/* Heading */}
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                    Full-Stack Web Developer. <br />
                    <span className="text-zinc-400 dark:text-zinc-500">Crafting high-performance digital experiences.</span>
                </h1>

                {/* Short Bio */}
                <p className="max-w-2xl text-zinc-600 dark:text-zinc-400 text-lg sm:text-xl leading-relaxed">
                    Hey, I'm <strong className="text-black dark:text-white font-semibold">Odusanya Ademola</strong>. I design and build modern, responsive web applications using full-stack tech, focusing on clean architecture and smooth motion design.
                </p>

                {/* CTA Buttons & Social Links */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-medium text-sm hover:opacity-90 transition-opacity"
                    >
                        View Projects <ArrowUpRight size={16} />
                    </a>

                    <a
                        href="#contact"
                        className="px-6 py-3 rounded-xl border border-zinc-300 dark:border-zinc-800 font-medium text-sm hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                    >
                        Contact Me
                    </a>

                    <div className="flex items-center gap-3 ml-2 border-l border-zinc-200 dark:border-zinc-800 pl-4">
                        <a
                            href="https://github.com/demo-od"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="p-2 text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ademola-odusanya-505058393/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="p-2 text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
                        >
                            <FaLinkedin size={20} />
                        </a>
                        <a
                            href="#contact"
                            aria-label="Email"
                            className="p-2 text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};