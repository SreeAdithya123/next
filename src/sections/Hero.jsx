
import React from 'react';
import ModernCard from '../components/ui/ModernCard';
import ModernButton from '../components/ui/ModernButton';
import { Award, CheckCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
    // Note: User said "except home page... are should be centered". 
    // This implies Home page can be as it is (left aligned Hero text on Desktop).
    return (
        <section id="home" className="min-h-[90vh] flex items-center justify-center relative overflow-hidden py-16 md:py-24">

            {/* Soft Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">

                    {/* Text Content */}
                    <div className="text-center md:text-left flex-1 space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 shadow-sm mx-auto md:mx-0">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                            <span className="text-xs font-bold text-orange-600 tracking-wide uppercase">Authorised by Govt. of India (MSME)</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-800">
                            Simplify Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                                Life With Us
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-500 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
                            Master the skills of tomorrow with <span className="font-semibold text-teal-800">NextCareer</span>. Join our ISO 9001:2015 certified institute for a brighter future.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <NavLink to="/courses" className="w-full sm:w-auto">
                                <ModernButton className="w-full">
                                    Explore Courses
                                </ModernButton>
                            </NavLink>
                            <NavLink to="/contact" className="w-full sm:w-auto">
                                <ModernButton variant="outline" className="w-full">
                                    Contact Us
                                </ModernButton>
                            </NavLink>
                        </div>

                        <div className="flex items-center justify-center md:justify-start gap-6 text-sm font-medium text-slate-400">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-green-100 rounded-full text-green-600"><CheckCircle size={14} /></div>
                                <span>ISO 9001:2015</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-blue-100 rounded-full text-blue-600"><CheckCircle size={14} /></div>
                                <span>Govt. Recognised</span>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image/Card */}
                    <div className="relative w-full max-w-md md:max-w-lg flex-1">
                        <div className="absolute inset-0 bg-gradient-to-tr from-teal-200 to-orange-100 rounded-[3rem] rotate-6 transform scale-95 opacity-50 blur-3xl"></div>
                        <ModernCard className="relative p-3 rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden rounded-[2.5rem] border-white/60 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                                alt="Student learning"
                                className="w-full h-[350px] sm:h-[450px] object-cover rounded-[2rem]"
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow max-w-[85%] border border-white/50">
                                <div className="bg-orange-100 p-3 rounded-full text-orange-500">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Certified</p>
                                    <p className="font-bold text-slate-800 leading-tight">Excellence in Education</p>
                                </div>
                            </div>
                        </ModernCard>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
