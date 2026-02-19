import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="relative py-32 px-8 md:px-16">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="max-w-5xl mx-auto relative z-10"
            >
                <div className="glass-card elegant-hover p-16 md:p-24 text-center space-y-12">
                    <motion.h2 
                        className="text-5xl md:text-6xl font-bold text-black tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        About Me
                    </motion.h2>
                    
                    <motion.div 
                        className="w-32 h-px bg-black/20 mx-auto"
                        initial={{ width: 0 }}
                        whileInView={{ width: 128 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    />

                    <div className="space-y-8 text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            I am a 3rd-year B.Tech student in AI & Data Science, dedicated to mastering the intersections of Data Engineering and Artificial Intelligence.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                        >
                            An aspiring Data Engineer and consistent learner, I am passionate about building intelligent systems that can process and analyze complex datasets to drive meaningful insights.
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
