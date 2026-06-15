
import React from 'react';

const ModernCard = ({ children, className = '', hoverEffect = false, ...props }) => {
    return (
        <div
            className={`
                bg-white/80 backdrop-blur-md 
                border border-white/50 
                rounded-2xl 
                shadow-[0_8px_30px_rgb(0,0,0,0.04)] 
                transition-all duration-300
                ${hoverEffect ? 'hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1' : ''}
                ${className}
            `}
            {...props}
        >
            {children}
        </div>
    );
};

export default ModernCard;
