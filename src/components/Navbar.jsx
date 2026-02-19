import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Resume', href: '#resume' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 bg-white/60 backdrop-blur-[12px] border-b border-black/8 shadow-sm"
        >
            <motion.div 
                className="text-xl font-medium tracking-tight text-black"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                Portfolio
            </motion.div>

            <div className="hidden md:flex space-x-12">
                {navLinks.map((link, idx) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        className="nav-link text-base"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 + 0.4 }}
                    >
                        {link.name}
                    </motion.a>
                ))}
            </div>

            <div className="md:hidden">
                <button className="text-black hover:text-gray-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
