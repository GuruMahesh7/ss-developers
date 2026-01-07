import React, { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Updated navigation links to point to routes instead of hashes
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="font-serif text-2xl font-bold tracking-wide flex items-center gap-2 group">
                    <div className={`p-2 rounded-lg ${scrolled || !isHome ? 'bg-brand-gold text-white' : 'bg-white text-brand-dark'} transition-colors`}>
                        <Building2 size={24} />
                    </div>
                    <div className="flex flex-col">
                        <span className={`leading-none ${scrolled || !isHome ? 'text-brand-dark' : 'text-white'}`}>SS</span>
                        <span className={`text-sm tracking-widest leading-none ${scrolled || !isHome ? 'text-brand-dark' : 'text-slate-200'}`}>DEVELOPERS</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={`text-sm font-medium tracking-wider hover:text-brand-gold transition-colors ${scrolled || !isHome ? 'text-slate-600' : 'text-slate-100'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" className="bg-brand-gold text-white px-6 py-2 rounded-full font-medium hover:bg-yellow-600 transition-colors shadow-lg shadow-brand-gold/30 transform hover:-translate-y-0.5">
                        Get in Touch
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ?
                        <X className={scrolled || !isHome ? 'text-brand-dark' : 'text-white'} /> :
                        <Menu className={scrolled || !isHome ? 'text-brand-dark' : 'text-white'} />
                    }
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-lg font-medium text-slate-700 hover:text-brand-gold transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/contact" className="bg-brand-gold text-white px-6 py-3 text-center rounded-lg font-medium shadow-md" onClick={() => setIsOpen(false)}>
                                Get in Touch
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
