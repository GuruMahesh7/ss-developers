import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
    return (
        <div className="bg-slate-50 min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-12"
                >
                    <div className="container mx-auto px-4 md:px-8 text-center mb-0">
                        <h1 className="text-5xl font-serif font-bold text-brand-dark mb-4">Our Portfolio</h1>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Explore our diverse range of completed and ongoing projects, from luxury villas to premium plots.
                        </p>
                    </div>
                    <Projects />
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};

export default ProjectsPage;
