import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-brand-dark text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c29a4b_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <span className="text-brand-gold font-semibold tracking-wider uppercase">Get in Touch</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-6">Let's Discuss Your Dream Home</h2>
                        <p className="text-slate-400 mb-10 text-lg">
                            Visit us at our office or send us a message to schedule a site visit for our premium properties.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="p-4 rounded-full bg-white/5 border border-white/10 text-brand-gold">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-1">Visit Us</h4>
                                    <p className="text-slate-400">SBI Upstairs, Lalacheruvu</p>
                                    <p className="text-slate-400">Rajahmundry, Andhra Pradesh / Telangana</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="p-4 rounded-full bg-white/5 border border-white/10 text-brand-gold">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-1">Call Us</h4>
                                    <p className="text-slate-400">+91 98765 43210</p>
                                    <p className="text-slate-400">Open Mon-Sat, 9AM - 6PM</p>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-8 h-48 w-full bg-slate-800 rounded-2xl overflow-hidden border border-white/10 relative group">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15273.712613149673!2d81.777!3d17.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDAwJzAwLjAiTiA4McKwNDYnMzcuMiJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    className="grayscale hover:grayscale-0 transition-all duration-500"
                                    title="Google Maps"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 text-slate-800 shadow-2xl">
                        <h3 className="text-3xl font-serif font-bold mb-8">Send Message</h3>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-semibold mb-2">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all"
                                    placeholder="+91 00000 00000"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2">Project Interest</label>
                                <select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all">
                                    <option value="">Select a Project</option>
                                    <option>Sri Harivasam</option>
                                    <option>Godavari Gardens</option>
                                    <option>Kaveri Avenues</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full py-4 bg-brand-gold text-white font-bold rounded-lg hover:bg-yellow-600 transition-colors shadow-lg hover:shadow-brand-gold/30 transform active:scale-95">
                                Submit Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
