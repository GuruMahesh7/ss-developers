import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg.png"
                    alt="Modern Luxury Home"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-8 pt-20">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-brand-gold bg-black/30 backdrop-blur-sm text-sm font-semibold tracking-widest mb-6 uppercase">
                            Building Dreams Since 2005
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
                            Premium Living <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">
                                Spaces
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 mb-10 font-light max-w-xl border-l-4 border-brand-gold pl-6">
                            "Villa at Apartment Prices" in Rajahmundry. Experience the perfect blend of luxury and affordability.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#projects"
                                className="group px-8 py-4 bg-brand-gold text-white rounded-full font-bold hover:bg-white hover:text-brand-dark transition-all shadow-lg hover:shadow-brand-gold/50 flex items-center justify-center gap-2"
                            >
                                Our Projects
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold hover:bg-white hover:text-brand-dark transition-all flex items-center justify-center"
                            >
                                Contact Us
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
                    <div className="w-1 h-2 bg-white rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
