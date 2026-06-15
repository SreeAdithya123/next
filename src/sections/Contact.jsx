
import React from 'react';
import ModernCard from '../components/ui/ModernCard';
import ModernButton from '../components/ui/ModernButton';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
    const contactInfo = [
        { icon: <Phone size={20} />, label: "Phone", value: "+91 9441871863", link: "tel:+919441871863", color: "text-blue-500", bg: "bg-blue-50" },
        { icon: <Phone size={20} />, label: "Landline", value: "+91 8819796205", link: "tel:+918819796205", color: "text-purple-500", bg: "bg-purple-50" },
        { icon: <Mail size={20} />, label: "Email", value: "nextcareer9@gmail.com", link: "mailto:nextcareer9@gmail.com", color: "text-orange-500", bg: "bg-orange-50" },
        { icon: <MapPin size={20} />, label: "Visit Us", value: "Tanuku, Andhra Pradesh", link: "#", color: "text-green-500", bg: "bg-green-50" },
    ];

    return (
        <section id="contact" className="py-20 md:py-28">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="inline-block px-4 py-1 rounded-full bg-teal-50 text-teal-700 font-bold text-sm mb-4 tracking-wider uppercase">Get In Touch</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800 tracking-tight">Contact Us</h2>
                    <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light">
                        We'd love to hear from you. Reach out to us for any queries or admissions.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
                    {contactInfo.map((info, index) => (
                        <a key={index} href={info.link} className="block h-full group">
                            <ModernCard hoverEffect={true} className="flex flex-col items-center p-8 h-full transition-shadow text-center">
                                <div className={`mb-5 p-4 rounded-full ${info.bg} ${info.color} transition-transform group-hover:scale-110`}>
                                    {info.icon}
                                </div>
                                <p className="font-bold text-slate-400 text-xs mb-2 uppercase tracking-wide">{info.label}</p>
                                <p className="font-bold text-lg text-slate-800 break-words w-full">{info.value}</p>
                            </ModernCard>
                        </a>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <ModernCard className="py-12 px-8 md:px-16 bg-gradient-to-r from-teal-900 to-teal-800 text-white text-center border-none shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        <h3 className="text-3xl font-bold mb-6 relative z-10">Ready to Start Your Journey?</h3>
                        <p className="mb-10 text-lg text-teal-100 max-w-xl mx-auto font-light relative z-10">
                            Visit us today at Tanuku or call us to book your seat in our upcoming batch.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                            <ModernButton variant="accent" onClick={() => window.open('https://wa.me/917981516655', '_blank')} className="px-8 shadow-orange-500/25">
                                Chat on WhatsApp
                            </ModernButton>
                            <button
                                className="px-8 py-3 rounded-xl font-semibold border border-white/30 text-white hover:bg-white/10 transition-colors"
                                onClick={() => window.location.href = 'mailto:nextcareer9@gmail.com'}
                            >
                                Email Us
                            </button>
                        </div>
                    </ModernCard>
                </div>

            </div>
        </section>
    );
};

export default Contact;
