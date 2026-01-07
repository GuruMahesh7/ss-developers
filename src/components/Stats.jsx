import React from 'react';
import { Users, Building, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
    {
        id: 1,
        label: 'Years Experience',
        value: '20+',
        icon: Award,
        description: 'Trust built over decades'
    },
    {
        id: 2,
        label: 'Happy Families',
        value: '500+',
        icon: Users,
        description: 'Creating vibrant communities'
    },
    {
        id: 3,
        label: 'Completed Projects',
        value: '15+',
        icon: Building,
        description: 'Delivered with excellence'
    },
];

const Stats = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-20 bg-brand-light relative z-10">
            <div className="container mx-auto px-4 md:px-8">
                <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border-b-4 border-brand-gold group cursor-default"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-brand-gold/10 rounded-lg group-hover:bg-brand-gold transition-colors duration-300">
                                    <stat.icon className="w-8 h-8 text-brand-gold group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-4xl font-bold text-brand-dark">{stat.value}</h3>
                            </div>
                            <p className="text-lg font-semibold text-slate-700 mb-2">{stat.label}</p>
                            <p className="text-slate-500 text-sm">{stat.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
