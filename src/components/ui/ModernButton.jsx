
import React from 'react';

const ModernButton = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform active:scale-95 focus:outline-none flex items-center justify-center gap-2 tracking-wide";

    const variants = {
        primary: `
            bg-gradient-to-r from-teal-800 to-teal-700
            text-white 
            shadow-lg shadow-teal-900/20
            hover:shadow-xl hover:shadow-teal-900/30
            hover:to-teal-600
        `,
        accent: `
             bg-gradient-to-r from-orange-500 to-orange-600
             text-white 
             shadow-lg shadow-orange-500/20
             hover:shadow-xl hover:shadow-orange-500/30
             hover:to-orange-500
        `,
        outline: `
            bg-transparent 
            border-2 border-teal-800/20
            text-teal-800 
            hover:bg-teal-50 hover:border-teal-800/40
        `,
        ghost: `
            bg-transparent
            text-teal-700
            hover:bg-teal-50/50
        `
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default ModernButton;
