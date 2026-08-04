// src/components/Skills.tsx
import React from 'react';
import { motion } from 'framer-motion';
import {Certifications} from "./Certifications.tsx";
import {skillCategories} from "../data.ts";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-16 border-t border-zinc-200 dark:border-zinc-800">
            <div className="space-y-4 mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Skills & Tech Stack</h2>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base">
                    Technologies and tools I use to bring full-stack applications to life.
                </p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                {skillCategories.map((category) => (
                    <motion.div
                        key={category.title}
                        variants={itemVariants}
                        className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/40 hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors"
                    >
                        <h3 className="text-sm font-semibold tracking-wider text-zinc-400 uppercase mb-4">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 text-xs font-mono rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 shadow-xs"
                                >
                  {skill}
                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <Certifications />
        </section>

    );
};