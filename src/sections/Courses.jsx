
import React from 'react';
import ModernCard from '../components/ui/ModernCard';
import { Code, Database, BarChart, PenTool, Terminal, BookOpen, Monitor, Briefcase } from 'lucide-react';

const Courses = () => {
    // Reorganized data for better alignment
    const courses = [
        { title: 'DCA', icon: <Monitor size={24} />, category: 'Basics' },
        { title: 'PGDCA', icon: <BookOpen size={24} />, category: 'Advanced' },
        { title: 'Python', icon: <Code size={24} />, category: 'Programming' },
        { title: 'Java', icon: <Code size={24} />, category: 'Programming' },
        { title: 'Tally', icon: <BarChart size={24} />, category: 'Accounting' },
        { title: 'Data Analyst', icon: <Database size={24} />, category: 'Analysis' },
        { title: 'Digital Marketing', icon: <BarChart size={24} />, category: 'Marketing' },
        { title: 'MS Office', icon: <Briefcase size={24} />, category: 'Office' },
        { title: 'Web Designing', icon: <PenTool size={24} />, category: 'Design' },
        { title: 'AI Courses', icon: <Terminal size={24} />, category: 'Future Tech' },
        { title: 'School Special', icon: <BookOpen size={24} />, category: 'Foundational' },
    ];

    return (
        <section id="courses" className="py-20 md:py-28 relative overflow-hidden">
            {/* Subtle Background Blob */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="inline-block px-4 py-1 rounded-full bg-orange-50 text-orange-600 font-bold text-sm mb-4 tracking-wider uppercase">Curriculum</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800 tracking-tight">Our Premium Courses</h2>
                    <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light">
                        Industry-relevant curriculum designed to make you job-ready. Choose the path that fits your career goals.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {courses.map((course, index) => (
                        <ModernCard key={index} hoverEffect={true} className="flex flex-col items-center justify-center p-8 text-center h-full min-h-[200px] border-b-4 border-b-transparent hover:border-b-orange-500 transition-colors">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-white shadow-lg transition-transform hover:scale-110 hover:-rotate-3
                  ${index % 2 === 0 ? 'bg-gradient-to-br from-teal-500 to-teal-700' : 'bg-gradient-to-br from-orange-400 to-orange-600'}
              `}>
                                {course.icon}
                            </div>
                            <h4 className="font-bold text-lg text-slate-800 mb-1">{course.title}</h4>
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{course.category}</span>
                        </ModernCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
