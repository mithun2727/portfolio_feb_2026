import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative pt-36 pb-28 px-8 md:px-16 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex-1 space-y-12 relative z-10"
            >
                <div className="space-y-6">
                    <motion.h2 
                        className="text-gray-500 font-medium tracking-[0.3em] uppercase text-[10px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Data Engineer
                    </motion.h2>
                    <motion.h1 
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-black tracking-tight leading-none whitespace-nowrap"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Mithun K
                    </motion.h1>
                </div>

                <motion.p 
                    className="text-lg md:text-xl text-gray-600 max-w-md leading-relaxed font-light"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    Building AI solutions that solve real-world problems.
                    Focused on architecting intelligent data systems and scalable AI architectures.
                </motion.p>

                <motion.div 
                    className="flex flex-wrap gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                    <a href="#projects" className="btn-primary">View Projects</a>
                    <a href="#resume" className="btn-secondary">Resume</a>
                    <a href="#contact" className="btn-secondary">Contact</a>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="flex-1 flex justify-center md:justify-end relative z-10"
            >
                {/* Soft spotlight behind portrait */}
                <div className="hero-spotlight absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                
                <div className="glass-card p-4 relative group hero-image-wrapper">
                    <div className="w-64 h-80 md:w-72 md:h-96 overflow-hidden rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl">
                        <img
                            src="/profile.jpg"
                            alt="Mithun K - Portrait"
                            className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105"
                            onError={(e) => {
                                e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop";
                            }}
                        />
                    </div>
                    <motion.div 
                        className="absolute -bottom-5 -right-5 glass-card px-6 py-3 hidden md:block shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                    >
                        <span className="text-black font-semibold text-sm tracking-wide">AI & Data Science</span>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
