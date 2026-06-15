
import React from 'react';
import Hero from '../sections/Hero';
import ModernCard from '../components/ui/ModernCard';
import ModernButton from '../components/ui/ModernButton';
import { ArrowRight, BookOpen, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    // Note: Home page Highlights section can be Centered too for better look, 
    // or keep left aligned as per "except home page" ambiguity.
    // I will make it balanced (text left, but grid centered) which is standard.
    return (
        <div className="pt-20">
            <Hero />

            {/* Highlights Section */}
            <section className="py-20 container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <ModernCard className="p-10 flex flex-col items-start gap-6 h-full hover:border-teal-200 transition-colors" hoverEffect={true}>
                        <div className="p-4 bg-teal-50 text-teal-700 rounded-2xl">
                            <User size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-3">Expert Faculty</h3>
                            <p className="text-slate-500 leading-relaxed mb-6">Learn from industry experts with over 10 years of experience in computer education.</p>
                            <NavLink to="/about" className="inline-block">
                                <button className="flex items-center gap-2 text-teal-700 font-bold hover:gap-3 transition-all">
                                    Meet Our Team <ArrowRight size={18} />
                                </button>
                            </NavLink>
                        </div>
                    </ModernCard>

                    <ModernCard className="p-10 flex flex-col items-start gap-6 h-full hover:border-orange-200 transition-colors" hoverEffect={true}>
                        <div className="p-4 bg-orange-50 text-orange-600 rounded-2xl">
                            <BookOpen size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-3">Premium Courses</h3>
                            <p className="text-slate-500 leading-relaxed mb-6">From DCA to Advanced Python, our curriculum is designed to make you job-ready.</p>
                            <NavLink to="/courses" className="inline-block">
                                <button className="flex items-center gap-2 text-orange-600 font-bold hover:gap-3 transition-all">
                                    Explore Courses <ArrowRight size={18} />
                                </button>
                            </NavLink>
                        </div>
                    </ModernCard>
                </div>
            </section>
        </div>
    );
};

export default Home;
