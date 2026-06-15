
import React from 'react';
import ModernCard from '../components/ui/ModernCard';

const Terms = () => {
    const policies = [
        {
            title: "Admission",
            content: "Admissions are open to all eligible candidates. Application forms must be filled out completely."
        },
        {
            title: "Fees & Payments",
            content: "Course fees must be paid in advance or in scheduled installments. Late fee penalties apply."
        },
        {
            title: "Attendance",
            content: "Minimum 75% attendance is required to be eligible for the final examination."
        },
        {
            title: "Certification",
            content: "Certificates are awarded only upon successful completion of the course and clearing exams."
        },
        {
            title: "Refund Policy",
            content: "Fees once paid are non-refundable and non-transferable under any circumstances."
        },
        {
            title: "Discipline",
            content: "Students are expected to maintain strict discipline within the institute premises."
        }
    ];

    return (
        <section id="terms" className="py-20 md:py-28">
            <div className="container px-4 md:px-6 text-center">
                <div className="max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1 rounded-full bg-slate-100 text-slate-500 font-bold text-sm mb-4 tracking-wider uppercase">Policies</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-800 tracking-tight">Terms & Conditions</h2>
                    <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light">
                        Please read our institute policies carefully before enrolling.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {policies.map((policy, index) => (
                        <ModernCard key={index} className="flex flex-col items-center text-center p-8 hover:border-teal-200 transition-colors">
                            <h4 className="text-xl font-bold mb-3 text-teal-800 border-b-2 border-teal-50 pb-2">
                                {policy.title}
                            </h4>
                            <p className="text-slate-500 leading-relaxed">
                                {policy.content}
                            </p>
                        </ModernCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Terms;
