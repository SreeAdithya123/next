
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Monitor } from 'lucide-react';
import ModernButton from './ui/ModernButton';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Courses', path: '/courses' },
        { name: 'Platform', path: '/platform' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
            }`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-3 group">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-teal-800 to-teal-600 text-white shadow-lg transition-transform group-hover:scale-105">
                        <Monitor size={24} />
                    </div>
                    <div>
                        <h2 className={`text-xl font-extrabold leading-tight m-0 tracking-tight ${scrolled ? 'text-slate-800' : 'text-slate-800'}`}>NextCareer</h2>
                        <p className="text-[10px] font-bold text-orange-500 tracking-wider uppercase">Computer Education</p>
                    </div>
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-sm px-2 py-1.5 rounded-full border border-white/50 shadow-sm">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isActive
                                    ? 'bg-teal-50 text-teal-700 shadow-sm'
                                    : 'text-slate-600 hover:text-teal-600 hover:bg-white/50'
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                <div className="hidden md:flex">
                    <NavLink to="/contact">
                        <ModernButton variant="primary" className="text-sm px-6 py-2.5 h-10 shadow-md">
                            Join Now
                        </ModernButton>
                    </NavLink>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 p-2 focus:outline-none bg-white/50 rounded-lg backdrop-blur-sm">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-xl animate-fade-in-down">
                    <div className="flex flex-col p-6 space-y-3">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-center py-3 font-semibold rounded-xl transition-all ${isActive
                                        ? 'bg-teal-50 text-teal-700 shadow-sm'
                                        : 'text-slate-600 hover:bg-slate-50'
                                    }`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <div className="pt-4 border-t border-slate-100 mt-2">
                            <NavLink to="/contact" onClick={() => setIsOpen(false)} className="w-full block">
                                <ModernButton variant="primary" className="w-full justify-center shadow-lg">
                                    Join Now
                                </ModernButton>
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
