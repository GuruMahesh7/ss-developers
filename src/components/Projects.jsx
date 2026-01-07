import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    {
        id: 1,
        title: 'Sri Harivasam',
        location: 'Rajahmundry',
        image: '/project-1.png',
        status: 'Completed',
        type: 'Luxury Villas'
    },
    {
        id: 2,
        title: 'Godavari Gardens',
        location: 'Dowleswaram',
        image: '/project-2.png',
        status: 'Ongoing',
        type: 'Gated Community'
    },
    {
        id: 3,
        title: 'Kaveri Avenues',
        location: 'Rajahmundry',
        image: '/project-3.png',
        status: 'Selling Fast',
        type: 'Premium Plots'
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="text-brand-gold font-semibold tracking-wider uppercase">Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mt-2 mb-4">Our Featured Projects</h2>
                    <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Link to={`/project/${project.id}`} key={project.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-full"
                            >
                                {/* Image */}
                                <div className="aspect-[4/5] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-300" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 w-full p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="mb-2 inline-block px-3 py-1 bg-brand-gold/90 rounded-full text-xs font-bold uppercase tracking-wider">
                                        {project.status}
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold mb-1">{project.title}</h3>
                                    <div className="flex items-center gap-2 text-slate-300 text-sm mb-4">
                                        <MapPin size={16} />
                                        <span>{project.location}</span>
                                    </div>
                                    <p className="text-slate-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {project.type}. Experience luxury living with state-of-the-art amenities and serene surroundings.
                                    </p>
                                    <div className="flex items-center gap-2 text-brand-gold font-bold text-sm tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                                        View Details <ArrowUpRight size={16} />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
