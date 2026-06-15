
import React from 'react';
import ModernCard from '../components/ui/ModernCard';
import { Clock, Globe, Users } from 'lucide-react';

const LearningPlatform = () => {
    const features = [
        {
            icon: <Clock size={32} />,
            title: "Flexible Classes",
            text: "Morning, evening, and weekend batches meant for students & professionals.",
            bg: "bg-blue-50",
            color: "text-blue-600"
        },
        {
            icon: <Globe size={32} />,
            title: "Hybrid Learning",
            text: "Seamlessly switch between online and offline modes tailored to you.",
            bg: "bg-green-50",
            color: "text-green-600"
        },
        {
            icon: <Users size={32} />,
            title: "Expert Mentorship",
            text: "Gain insights from trainers with 10+ years of real industry experience.",
            bg: "bg-purple-50",
            color: "text-purple-600"
        }
    ];

    return (
        <section id="platform" className="py-20 md:py-28 bg-white/50">
            <div className="container px-4 md:px-6">
                {/* Centered Heading */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="inline-block px-4 py-1 rounded-full bg-teal-50 text-teal-700 font-bold text-sm mb-4 tracking-wider uppercase">Platform</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800 tracking-tight">
                        Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">Success</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light">
                        We provide a supportive environment that encourages practical learning and creative thinking.
                    </p>
                </div>

                {/* Centered Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, idx) => (
                        <ModernCard key={idx} className="flex flex-col items-center text-center p-10 hover:-translate-y-2 transition-transform duration-300" hoverEffect={true}>
                            <div className={`p-4 rounded-2xl ${feature.bg} ${feature.color} mb-6 shadow-sm`}>
                                {feature.icon}
                            </div>
                            <h4 className="font-bold text-xl text-slate-800 mb-3">{feature.title}</h4>
                            <p className="text-slate-500 leading-relaxed">{feature.text}</p>
                        </ModernCard>
                    ))}
                </div>

                {/* Centered Quote */}
                <div className="mt-16 max-w-4xl mx-auto text-center relative px-4">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-orange-100/50 to-teal-100/50 blur-3xl -z-10 rounded-full"></div>
                    <blockquote className="text-xl md:text-2xl font-light italic text-slate-700 relative z-10">
                        “A great lecturer inspires students not just to learn — but to think, explore, and create.”
                    </blockquote>
                </div>

            </div>
        </section>
    );
};

export default LearningPlatform;
