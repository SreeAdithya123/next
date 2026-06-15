
import React from 'react';
import ModernCard from '../components/ui/ModernCard';
import { User, Award, BookOpen } from 'lucide-react';

const About = () => {
    const faculty = [
        {
            name: 'G. Saikumar',
            role: 'Chairman & Trainer',
            qualifications: 'M.Tech (CSE)',
            experience: '10 Years Experience',
            color: 'text-teal-700'
        },
        {
            name: 'G. R. Satya Sri',
            role: 'Director & Trainer',
            qualifications: 'MBA',
            experience: 'Experienced Faculty',
            color: 'text-orange-600'
        }
    ];

    return (
        <section id="about" className="py-20 md:py-28">
            <div className="container px-4 md:px-6">
                {/* Centered Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="inline-block px-4 py-1 rounded-full bg-teal-50 text-teal-700 font-bold text-sm mb-4 tracking-wider uppercase">Who We Are</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800 tracking-tight">About the Institute</h2>
                    <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light">
                        Dedicated to empowering students with practical computer skills for a digital future. We bridge the gap between education and industry.
                    </p>
                </div>

                {/* Faculty Grid - Centered */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {faculty.map((member, index) => (
                        <ModernCard key={index} hoverEffect={true} className="flex flex-col items-center text-center p-10 h-full border-t-4 border-t-teal-600">
                            <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 bg-slate-50 border border-slate-100 shadow-inner text-slate-400">
                                <User size={40} />
                            </div>

                            <h3 className="text-2xl font-bold mb-2 text-slate-800">{member.name}</h3>
                            <p className={`font-bold mb-5 text-lg uppercase tracking-wide ${member.color}`}>{member.role}</p>

                            <div className="space-y-3 text-slate-500 font-medium">
                                <p className="inline-block px-4 py-1 rounded-full bg-slate-100 text-sm">{member.qualifications}</p>
                                <p className="block">{member.experience}</p>
                            </div>
                        </ModernCard>
                    ))}
                </div>

                {/* Additional Info / stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center max-w-5xl mx-auto">
                    <ModernCard className="p-6">
                        <h4 className="text-4xl font-bold text-teal-700 mb-2">10+</h4>
                        <p className="text-slate-500 font-medium">Years of Excellence</p>
                    </ModernCard>
                    <ModernCard className="p-6">
                        <h4 className="text-4xl font-bold text-teal-700 mb-2">5000+</h4>
                        <p className="text-slate-500 font-medium">Students Trained</p>
                    </ModernCard>
                    <ModernCard className="p-6">
                        <h4 className="text-4xl font-bold text-teal-700 mb-2">100%</h4>
                        <p className="text-slate-500 font-medium">Placement Assistance</p>
                    </ModernCard>
                </div>
            </div>
        </section>
    );
};

export default About;
