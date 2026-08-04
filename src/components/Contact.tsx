// src/components/Contact.tsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
        type: null,
        message: '',
    });

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setLoading(true);
        setStatus({ type: null, message: '' });

        // Fetching keys securely from Vite environment variables
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs
            .sendForm(serviceId, templateId, formRef.current, publicKey)
            .then(
                () => {
                    setLoading(false);
                    setStatus({
                        type: 'success',
                        message: 'Message sent successfully! I will get back to you soon.',
                    });
                    formRef.current?.reset();
                },
                (error) => {
                    setLoading(false);
                    setStatus({
                        type: 'error',
                        message: 'Failed to send message. Please try again or email me directly.',
                    });
                    console.error('EmailJS Error:', error);
                }
            );
    };

    return (
        <section id="contact" className="py-20 border-t border-zinc-200 dark:border-zinc-800">
            <div className="max-w-2xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Let's Connect</h2>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Have a project in mind or want to talk tech? Send me a message below!
                    </p>
                </div>

                {/* Contact Form */}
                <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1 text-left">
                            <label htmlFor="user_name" className="text-xs font-semibold tracking-wide uppercase text-zinc-500">
                                Name
                            </label>
                            <input
                                type="text"
                                name="user_name"
                                id="user_name"
                                required
                                placeholder="John Doe"
                                className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 text-sm focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-500 transition-colors"
                            />
                        </div>

                        <div className="space-y-1 text-left">
                            <label htmlFor="user_email" className="text-xs font-semibold tracking-wide uppercase text-zinc-500">
                                Email
                            </label>
                            <input
                                type="email"
                                name="user_email"
                                id="user_email"
                                required
                                placeholder="john@example.com"
                                className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 text-sm focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-500 transition-colors"
                            />
                        </div>
                    </div>

                    <div className="space-y-1 text-left">
                        <label htmlFor="message" className="text-xs font-semibold tracking-wide uppercase text-zinc-500">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows={5}
                            required
                            placeholder="Tell me about your project..."
                            className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 text-sm focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-500 transition-colors resize-none"
                        />
                    </div>

                    {/* Feedback Status Alert */}
                    {status.type && (
                        <div
                            className={`p-4 rounded-xl text-xs font-medium flex items-center gap-2 ${
                                status.type === 'success'
                                    ? 'bg-zinc-100 dark:bg-zinc-900 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                                    : 'bg-zinc-100 dark:bg-zinc-900 text-rose-600 dark:text-rose-400 border border-rose-500/20'
                            }`}
                        >
                            {status.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                            {status.message}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-black text-white dark:bg-white dark:text-black font-medium text-sm hover:opacity-90 disabled:opacity-50 transition-opacity cursor-pointer"
                    >
                        {loading ? 'Sending...' : 'Send Message'} <Send size={16} />
                    </button>
                </form>

                {/* Footer Info & Social Links */}
                <div className="pt-8 flex items-center justify-center gap-6 border-t border-zinc-200 dark:border-zinc-800">
                    <a
                        href="https://github.com/demo-od"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
                    >
                        <FaGithub size={22} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ademola-odusanya-505058393/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
                    >
                        <FaLinkedin size={22} />
                    </a>
                </div>

                <p className="text-xs text-zinc-400 dark:text-zinc-600 text-center">
                    © {new Date().getFullYear()} Designed & built with React & Tailwind CSS.
                </p>
            </div>
        </section>
    );
};