import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-black/8 bg-white/60 backdrop-blur-[12px]">
            <div className="max-w-7xl mx-auto px-8 md:px-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <div className="text-gray-500 font-medium text-center md:text-left">
                        © {new Date().getFullYear()} Mithun K. All rights reserved.
                    </div>
                    <div className="flex gap-6 text-gray-500 font-medium">
                        <a href="#" className="hover:text-black transition-colors duration-300">Privacy</a>
                        <span className="text-gray-300">|</span>
                        <a href="#" className="hover:text-black transition-colors duration-300">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
