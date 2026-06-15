
import React from 'react';
import { Monitor, Phone, Mail, MapPin, Instagram, Facebook, Twitter, ArrowRight, Code, Database, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 md:pt-20 pb-8 mt-auto relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-orange-500 to-teal-500"></div>
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-slate-800 rounded-lg">
                                <Monitor size={24} className="text-teal-400" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white leading-none">NextCareer</h2>
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Education</span>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Empowering students with future-ready computer skills. Join us to shape your career with the best industry experts.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-full hover:bg-teal-500 hover:text-white transition-all duration-300 group">
                                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 group">
                                <Facebook size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300 group">
                                <Twitter size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 inline-block">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="/" className="hover:text-teal-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /> Home</a></li>
                            <li><a href="/about" className="hover:text-teal-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /> About Us</a></li>
                            <li><a href="/courses" className="hover:text-teal-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /> Courses</a></li>
                            <li><a href="/contact" className="hover:text-teal-400 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /> Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 inline-block">Our Courses</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-3"><Code size={16} className="text-orange-500" /> Python Programming</li>
                            <li className="flex items-center gap-3"><Code size={16} className="text-orange-500" /> Java Development</li>
                            <li className="flex items-center gap-3"><Monitor size={16} className="text-orange-500" /> PGDCA / DCA</li>
                            <li className="flex items-center gap-3"><Database size={16} className="text-orange-500" /> Data Analytics</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 border-b border-slate-800 pb-2 inline-block">Contact Info</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3 group">
                                <MapPin size={20} className="mt-0.5 shrink-0 text-teal-400 group-hover:text-orange-400 transition-colors" />
                                <span className="group-hover:text-white transition-colors">Tanuku, West Godavari,<br />Andhra Pradesh - 534211</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <Phone size={20} className="shrink-0 text-teal-400 group-hover:text-orange-400 transition-colors" />
                                <a href="tel:+919441871863" className="hover:text-white transition-colors">+91 94418 71863</a>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <Mail size={20} className="shrink-0 text-teal-400 group-hover:text-orange-400 transition-colors" />
                                <a href="mailto:nextcareer9@gmail.com" className="hover:text-white transition-colors break-all">nextcareer9@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
                    <p>&copy; {new Date().getFullYear()} NextCareer Computer Education. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Designed with <Heart size={12} className="text-rose-500 fill-current animate-pulse" /> by NextCareer Team
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
