import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Database, Brain, Terminal } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend/UI',
            icon: <Layout className="w-7 h-7 text-black" />,
            skills: ['Figma', 'React', 'Tailwind CSS']
        },
        {
            title: 'Database',
            icon: <Database className="w-7 h-7 text-black" />,
            skills: ['MySQL', 'PostgreSQL', 'Data Modeling']
        },
        {
            title: 'AI/Data',
            icon: <Brain className="w-7 h-7 text-black" />,
            skills: ['Python', 'Pandas', 'Machine Learning', 'NLP']
        },
        {
            title: 'Tools',
            icon: <Terminal className="w-7 h-7 text-black" />,
            skills: ['Git', 'Linux', 'Vim', 'Docker']
        }
    ];

    return (
        <section id="skills" className="relative py-32 px-8 md:px-16 max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-24 space-y-6 relative z-10">
                <motion.h2 
                    className="text-5xl md:text-6xl font-bold text-black tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Expertise
                </motion.h2>
                <motion.div 
                    className="w-32 h-px bg-black/20"
                    initial={{ width: 0 }}
                    whileInView={{ width: 128 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2, duration: 0.8 }}
                        className="glass-card elegant-hover p-10 group"
                    >
                        <motion.div 
                            className="mb-8 bg-black/5 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-700 group-hover:bg-black/10 group-hover:scale-110"
                            whileHover={{ rotate: 5 }}
                        >
                            {category.icon}
                        </motion.div>
                        <h3 className="text-2xl font-bold text-black mb-6 tracking-tight">{category.title}</h3>
                        <ul className="space-y-4">
                            {category.skills.map((skill) => (
                                <li key={skill} className="flex items-center text-gray-600 font-light text-lg">
                                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-4 group-hover:scale-150 transition-transform duration-500"></span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
