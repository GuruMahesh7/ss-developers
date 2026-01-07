import React from 'react';
import { Building2, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-dark text-white pt-20 pb-10 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <Building2 size={32} className="text-brand-gold" />
                            <span className="text-2xl font-serif font-bold">SS Developers</span>
                        </div>
                        <p className="text-slate-400 mb-6">
                            Building premium living spaces that offer luxury, comfort, and affordability. Your dream home awaits.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-gold hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.instagram.com/ss.developers1/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-brand-gold hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-gold hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="#home" className="text-slate-400 hover:text-brand-gold transition-colors">Home</a></li>
                            <li><a href="#projects" className="text-slate-400 hover:text-brand-gold transition-colors">Projects</a></li>
                            <li><a href="#testimonials" className="text-slate-400 hover:text-brand-gold transition-colors">Testimonials</a></li>
                            <li><a href="#contact" className="text-slate-400 hover:text-brand-gold transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Projects */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Our Projects</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-slate-400 hover:text-brand-gold transition-colors">Sri Harivasam</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-brand-gold transition-colors">Godavari Gardens</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-brand-gold transition-colors">Kaveri Avenues</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-brand-gold transition-colors">Prakruthi Vanam</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Newsletter</h4>
                        <p className="text-slate-400 mb-4">Subscribe to get updates on new launches and offers.</p>
                        <form className="flex" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-white/5 border border-white/10 px-4 py-2 rounded-l-lg focus:outline-none focus:border-brand-gold w-full"
                            />
                            <button className="bg-brand-gold px-4 py-2 rounded-r-lg hover:bg-yellow-600 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} SS Developers. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-slate-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
