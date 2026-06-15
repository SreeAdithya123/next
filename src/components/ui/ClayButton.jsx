
import React from 'react';

const ClayButton = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform active:scale-95 focus:outline-none flex items-center justify-center gap-2";

    const variants = {
        primary: `
            bg-teal-800 
            text-white 
            shadow-[6px_6px_12px_rgba(15,76,92,0.25),-4px_-4px_8px_rgba(255,255,255,0.1)]
            hover:bg-teal-900 
            hover:shadow-[8px_8px_16px_rgba(15,76,92,0.3),-6px_-6px_12px_rgba(255,255,255,0.1)]
            border border-teal-700
        `,
        accent: `
             bg-orange-500 
             text-white 
             shadow-[6px_6px_12px_rgba(243,111,33,0.3),-4px_-4px_8px_rgba(255,255,255,0.2)]
             hover:bg-orange-600
             border border-orange-400
        `,
        outline: `
            bg-transparent 
            border-2 
            border-teal-800 
            text-teal-800 
            hover:bg-teal-50
        `,
        ghost: `
            bg-transparent
            text-teal-700
            hover:bg-teal-50
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

export default ClayButton;
