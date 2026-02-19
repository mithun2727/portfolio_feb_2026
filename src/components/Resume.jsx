import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
    return (
        <section id="resume" className="relative py-32 px-8 md:px-16">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="max-w-5xl mx-auto relative z-10"
            >
                <div className="glass-card elegant-hover p-16 md:p-24 text-center space-y-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5">
                        <FileText className="w-48 h-48 text-black" />
                    </div>

                    <div className="space-y-6 relative z-10">
                        <motion.h2 
                            className="text-5xl md:text-6xl font-bold text-black tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Resume
                        </motion.h2>
                        <motion.div 
                            className="w-32 h-px bg-black/20 mx-auto"
                            initial={{ width: 0 }}
                            whileInView={{ width: 128 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        />
                        <motion.p 
                            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            Explore my technical background, academic achievements, and professional journey in detail.
                        </motion.p>
                    </div>

                    <motion.div 
                        className="flex flex-col md:flex-row justify-center gap-6 relative z-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <button className="btn-primary flex items-center justify-center gap-3 text-lg">
                            <FileText className="w-5 h-5" /> View Resume
                        </button>
                        <button className="btn-secondary flex items-center justify-center gap-3 text-lg">
                            <Download className="w-5 h-5" /> Download PDF
                        </button>
                    </motion.div>

                    <motion.div 
                        className="mt-12 bg-white/40 backdrop-blur-sm border border-black/8 rounded-3xl p-12 shadow-inner"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                    >
                        <div className="h-80 flex items-center justify-center text-gray-400 italic text-xl font-light">
                            Resume Preview Illustration
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Resume;
