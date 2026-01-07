import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
    const features = [
        { icon: Shield, title: "Verified Listings", description: "100% legally verified properties with clear titles." },
        { icon: Clock, title: "On-Time Delivery", description: "We value your time and ensure projects are delivered as promised." },
        { icon: ThumbsUp, title: "Best Price Guarantee", description: "Premium luxury at prices that fit your budget." }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark">Why Choose SS Developers?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 text-center"
                        >
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold">
                                <f.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark mb-3">{f.title}</h3>
                            <p className="text-slate-600">{f.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Home = () => {
    return (
        <div className="bg-slate-50">
            <Navbar />
            <Hero />
            <Stats />

            {/* Featured Projects Preview (reusing component but we could limit it if it accepted props, for now simplified) */}
            <Projects />

            <WhyChooseUs />

            <section className="py-20 bg-brand-dark text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold mb-6">Ready to Find Your Dream Home?</h2>
                    <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                        Explore our premium layouts and luxury villas designed for your comfort.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/projects" className="bg-brand-gold px-8 py-3 rounded-full font-bold text-brand-dark hover:bg-white transition-colors">
                            View All Projects
                        </Link>
                        <Link to="/contact" className="border border-white/30 px-8 py-3 rounded-full font-bold hover:bg-white hover:text-brand-dark transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;
