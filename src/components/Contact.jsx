import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    const socialLinks = [
        { icon: <Github />, label: 'mithun2727', href: 'https://github.com/mithun2727' },
        { icon: <Linkedin />, label: 'linkedin.com/in/mthun-k', href: 'https://linkedin.com/in/mthun-k-697542379' },
        { icon: <Mail />, label: 'mithunkrishnan.ai@gmail.com', href: 'mailto:mithunkrishnan.ai@gmail.com' },
    ];

    const handleSayHello = () => {
        window.open('mailto:mithunkrishnan.ai@gmail.com?subject=Hello Mithun&body=Hi Mithun,', '_blank');
    };

    return (
        <section id="contact" className="relative py-32 px-8 md:px-16 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative z-10"
            >
                <div className="glass-card elegant-hover p-16 md:p-24 flex flex-col md:flex-row gap-20 items-center">
                    <div className="flex-1 space-y-10">
                        <motion.h2 
                            className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight tracking-tight"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Let's build <br /> <span className="font-light">something great</span> together.
                        </motion.h2>
                        <motion.p 
                            className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            I'm always open to discussing data engineering projects, AI research opportunities, or technical collaborations.
                        </motion.p>
                    </div>

                    <div className="flex-1 w-full space-y-6">
                        <div className="grid gap-6">
                            {socialLinks.map((link, idx) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + idx * 0.15 }}
                                    whileHover={{ x: 10, scale: 1.02 }}
                                    className="flex items-center gap-6 p-8 glass-card hover:bg-white/70 transition-all duration-700"
                                >
                                    <div className="text-black bg-black/5 p-4 rounded-2xl">{link.icon}</div>
                                    <span className="font-medium text-black text-lg">{link.label}</span>
                                </motion.a>
                            ))}
                        </div>

                        <motion.button 
                            onClick={handleSayHello}
                            className="w-full btn-primary flex items-center justify-center gap-3 py-6 text-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Send className="w-6 h-6" /> Say Hello
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
