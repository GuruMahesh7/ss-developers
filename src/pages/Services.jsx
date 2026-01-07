import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, PaintBucket, Ruler, ShieldCheck, Home } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const services = [
    {
        icon: Home,
        title: 'Residential Construction',
        description: 'We build dream homes with precision engineering and premium materials, ensuring longevity and aesthetic appeal.',
        image: '/service-residential.png'
    },
    {
        icon: PaintBucket,
        title: 'Interior Design',
        description: 'Our expert interior designers transform spaces into functional works of art, tailored to your lifestyle and preferences.',
        image: '/service-interior.png'
    },
    {
        icon: Ruler,
        title: 'Architectural Planning',
        description: 'Comprehensive architectural planning and 3D modeling services to visualize your project before construction begins.',
        image: '/service-planning.png'
    },
    {
        icon: ShieldCheck,
        title: 'Vastu Consultation',
        description: 'Expert Vastu Shastra consultation to ensure your home brings prosperity, health, and happiness to your family.',
        image: '/service-vastu.png'
    }
];

const Services = () => {
    return (
        <div className="bg-slate-50 min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="container mx-auto px-4 md:px-8 py-12"
                >
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-4xl md:text-6xl font-serif font-bold text-brand-dark mb-6"
                        >
                            Our Services
                        </motion.h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Comprehensive real estate and construction solutions tailored to meet your every need.
                        </p>
                    </div>

                    <div className="space-y-20">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
                            >
                                <div className="flex-1 w-full">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                                        <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500" />
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>

                                <div className="flex-1 space-y-6">
                                    <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold mb-4">
                                        <service.icon size={32} />
                                    </div>
                                    <h3 className="text-3xl font-serif font-bold text-brand-dark">{service.title}</h3>
                                    <p className="text-lg text-slate-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <button className="flex items-center gap-2 text-brand-gold font-bold hover:gap-4 transition-all uppercase tracking-wider text-sm">
                                        Learn More <ArrowRight size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};

export default Services;
