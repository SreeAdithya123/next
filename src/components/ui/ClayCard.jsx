
import React from 'react';

const ClayCard = ({ children, className = '', variant = 'default', hoverEffect = false, ...props }) => {
  // Base classes
  const baseClasses = `
        relative 
        rounded-[20px] 
        transition-all 
        duration-300
    `;

  // Variants - significantly cleaned up
  const variants = {
    default: `
            bg-white/80 
            backdrop-blur-sm 
            border border-white/60
            shadow-[8px_8px_16px_rgba(166,171,189,0.2),-8px_-8px_16px_rgba(255,255,255,0.8)]
        `,
    primary: `
            bg-teal-800 
            text-white 
            shadow-[8px_8px_16px_rgba(15,76,92,0.3),-4px_-4px_12px_rgba(255,255,255,0.1)]
            border border-teal-700
        `,
    flat: `
            bg-white 
            border border-gray-100 
            shadow-sm
        `
  };

  // Hover effect
  const hoverClasses = hoverEffect ? 'hover:-translate-y-1 hover:shadow-[12px_12px_24px_rgba(166,171,189,0.3),-12px_-12px_24px_rgba(255,255,255,0.9)]' : '';

  return (
    <div
      className={`${baseClasses} ${variants[variant] || variants.default} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default ClayCard;
