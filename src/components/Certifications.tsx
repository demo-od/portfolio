// src/components/Certifications.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import {certificates} from '../data';

export const Certifications: React.FC = () => {
    return (
        <div className="mt-12 pt-10 border-t border-zinc-200/60 dark:border-zinc-800/60">
            <h3 className="text-sm font-semibold tracking-wider text-zinc-400 uppercase mb-6 flex items-center gap-2">
                <Award size={16} /> Certifications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certificates.map((cert) => (
                    <motion.div
                        key={cert.title}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                        className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 flex items-center justify-between"
                    >
                        <div>
                            <h4 className="text-sm font-bold">{cert.title}</h4>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400">
                                {cert.issuer} • {cert.date}
                            </p>
                        </div>

                        {cert.credentialUrl && (
                            <a
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                                aria-label="Verify Certificate"
                            >
                                <ExternalLink size={16} />
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};