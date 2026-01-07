import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, MapPin, Calendar, Home } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const projectsData = {
    1: {
        title: 'Sri Harivasam',
        location: 'Rajahmundry',
        image: '/project-1.png',
        status: 'Completed',
        type: 'Luxury Villas',
        description: 'Sri Harivasam redefines luxury living in Rajahmundry. These premium villas offer a perfect blend of modern architecture and traditional values. Located in a prime area, it provides easy access to the city while maintaining a serene environment.',
        features: ['Gated Community', '24/7 Security', 'Club House', 'Swimming Pool', 'Landscaped Gardens', 'Children Play Area'],
        price: 'Starting from ₹85 Lakhs'
    },
    2: {
        title: 'Godavari Gardens',
        location: 'Dowleswaram',
        image: '/project-2.png',
        status: 'Ongoing',
        type: 'Gated Community',
        description: 'Experience the tranquility of nature at Godavari Gardens. This expansive gated community is designed to bring you closer to nature with over 40% open spaces and lush greenery.',
        features: ['River View', 'Jogging Track', 'Community Hall', 'Temple', 'Solar Street Lights', 'Underground Drainage'],
        price: 'Starting from ₹45 Lakhs'
    },
    3: {
        title: 'Kaveri Avenues',
        location: 'Rajahmundry',
        image: '/project-3.png',
        status: 'Selling Fast',
        type: 'Premium Plots',
        description: 'Build your dream home at Kaveri Avenues. These premium plots come with all necessary approvals and infrastructure. A perfect investment opportunity in a rapidly developing area.',
        features: ['CRDA Approved', 'Blacktop Roads', 'Avenue Plantation', 'Electricity', 'Water Supply', 'Entrance Arch'],
        price: 'Starting from ₹25,000 per sq.yd'
    }
};

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectsData[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return <div className="min-h-screen flex items-center justify-center">Project not found</div>;
    }

    return (
        <div className="bg-slate-50 min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="container mx-auto px-4 md:px-8 py-10"
                >
                    <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-gold mb-8 transition-colors group">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Image Section */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            </div>
                        </motion.div>

                        {/* Content Section */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <span className="bg-brand-gold text-white px-4 py-1 rounded-full text-sm font-bold uppercase">{project.status}</span>
                                <span className="text-brand-blue font-semibold">{project.type}</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">{project.title}</h1>

                            <div className="flex items-center gap-2 text-slate-500 mb-6 text-lg">
                                <MapPin size={20} className="text-brand-gold" />
                                {project.location}
                            </div>

                            <div className="border-l-4 border-brand-gold pl-6 py-2 mb-8 bg-white/50 rounded-r-lg">
                                <p className="text-xl font-bold text-brand-dark mb-1">{project.price}</p>
                                <p className="text-sm text-slate-500 uppercase tracking-widest">Pricing</p>
                            </div>

                            <p className="text-slate-600 leading-relaxed text-lg mb-8">
                                {project.description}
                            </p>

                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                                <h3 className="text-xl font-serif font-bold mb-4">Project Highlights</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {project.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3 text-slate-700">
                                            <CheckCircle size={18} className="text-brand-gold" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default ProjectDetails;
