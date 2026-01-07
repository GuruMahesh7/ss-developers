import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';

const ContactPage = () => {
    return (
        <div className="bg-slate-50 min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <Contact />
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;
