import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'AI Memory Enhancer',
            description: 'Intelligent tool designed for students to improve recall and study efficiency using AI-driven techniques.',
            tech: ['Python', 'NLP', 'TensorFlow'],
            image: 'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=2073&auto=format&fit=crop'
        },
        {
            title: 'Cervical Cancer Detection',
            description: 'Medical imaging project using Deep Learning to detect early signs of cervical cancer with high accuracy.',
            tech: ['Computer Vision', 'PyTorch', 'CNN'],
            image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop'
        },
        {
            title: 'Smart Ironing System',
            description: 'IoT-enabled ironing solution integrated with intelligent sensor feedback for textile care.',
            tech: ['IoT', 'Arduino', 'Sensors'],
            image: '/ironing-system.png'
        },
        {
            title: 'NLP Patient Feedback',
            description: 'Sentiment analysis and trend extraction from patient feedback to improve healthcare services.',
            tech: ['NLP', 'Python', 'Scikit-Learn'],
            image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop'
        }
    ];

    return (
        <section id="projects" className="relative py-32 px-8 md:px-16 max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-24 space-y-6 relative z-10">
                <motion.h2 
                    className="text-5xl md:text-6xl font-bold text-black tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Selected Works
                </motion.h2>
                <motion.div 
                    className="w-32 h-px bg-black/20"
                    initial={{ width: 0 }}
                    whileInView={{ width: 128 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2, duration: 0.8 }}
                        className="glass-card overflow-hidden group flex flex-col premium-card"
                    >
                        <div className="h-80 overflow-hidden relative project-image-container">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    if (project.title === 'Smart Ironing System') {
                                        e.target.src = "https://images.unsplash.com/photo-1489274495757-95c7c130b9bb?q=80&w=2030&auto=format&fit=crop";
                                    }
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </div>

                        <div className="p-10 md:p-12 flex-1 flex flex-col">
                            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight">{project.title}</h3>
                            <p className="text-gray-600 mb-10 flex-1 leading-relaxed font-light text-lg">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-3 mb-10">
                                {project.tech.map(t => (
                                    <span key={t} className="px-5 py-2 bg-black/5 text-black text-sm font-medium rounded-full border border-black/10 hover:bg-black/10 transition-all duration-500">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-8">
                                <motion.button 
                                    className="flex items-center gap-2 text-black font-semibold hover:text-gray-600 transition-colors duration-500"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Github className="w-5 h-5" /> Code
                                </motion.button>
                                <motion.button 
                                    className="flex items-center gap-2 text-black font-semibold hover:text-gray-600 transition-colors duration-500"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ExternalLink className="w-5 h-5" /> Live Demo
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
