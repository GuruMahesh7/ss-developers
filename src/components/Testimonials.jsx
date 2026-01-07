import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Rajesh Kumar",
        role: "Homeowner, Sri Harivasam",
        content: "Buying a villa from SS Developers was the best decision we made. The quality of construction is top-notch and the 'Villa at Apartment Prices' promise is genuinely delivered."
    },
    {
        id: 2,
        name: "Lakshmi Priya",
        role: "Resident, Godavari Gardens",
        content: "Professional team and transparent dealings. They helped us find our dream home in a beautiful location. The amenities provided are excellent."
    },
    {
        id: 3,
        name: "Srinivas Rao",
        role: "Investor",
        content: "I have invested in multiple projects with SS Developers. Their reliability and timely completion of projects make them the most trusted developers in Rajahmundry."
    }
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((curr) => (curr + 1) % testimonials.length);
    const prev = () => setCurrent((curr) => (curr - 1 + testimonials.length) % testimonials.length);

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="testimonials" className="py-20 bg-brand-light">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="text-brand-gold font-semibold tracking-wider uppercase">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mt-2 mb-4">Client Experiences</h2>
                    <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full" />
                </div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-8 left-8 text-brand-gold/10">
                            <Quote size={120} />
                        </div>

                        <div className="relative z-10 min-h-[200px] flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="text-center"
                                >
                                    <p className="text-xl md:text-2xl text-slate-700 italic font-light leading-relaxed mb-8">
                                        "{testimonials[current].content}"
                                    </p>
                                    <div>
                                        <h4 className="text-xl font-bold text-brand-dark">{testimonials[current].name}</h4>
                                        <span className="text-brand-gold font-medium text-sm">{testimonials[current].role}</span>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button onClick={prev} className="p-3 rounded-full bg-white shadow-md hover:bg-brand-gold hover:text-white transition-colors text-brand-dark">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={next} className="p-3 rounded-full bg-white shadow-md hover:bg-brand-gold hover:text-white transition-colors text-brand-dark">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
