// src/components/Projects.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { projects } from '../data';



export const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-16 border-t border-zinc-200 dark:border-zinc-800">
            <div className="space-y-4 mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Featured Projects</h2>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base">
                    A collection of full-stack projects showcasing clean code and modern interface design.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true, margin: '-50px' }}
                        className="group flex flex-col justify-between p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300"
                    >
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold tracking-tight group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5 pt-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2.5 py-1 text-[11px] font-mono rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400"
                                    >
                    {tag}
                  </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pt-6 mt-4 border-t border-zinc-200/60 dark:border-zinc-800/60">
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold hover:underline"
                            >
                                Live Demo <ExternalLink size={14} />
                            </a>
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
                            >
                                Code <FaGithub size={14} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};