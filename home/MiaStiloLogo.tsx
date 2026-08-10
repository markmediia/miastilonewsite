import React from 'react';

interface MiaStiloLogoProps {
  className?: string;
  isDarkBg?: boolean;
}

export const MiaStiloLogo: React.FC<MiaStiloLogoProps> = ({ 
  className = "h-8 w-auto", 
  isDarkBg = true 
}) => {
  // Light logo (white text, for dark backgrounds like Hero)
  const logoLight = "https://2tru0w9j0bliunku.public.blob.vercel-storage.com/photos/logo%20main/M%C4%B0Amaincolorlight.png";
  // Dark logo (dark text, for white/light backgrounds like scrolled header)
  const logoDark = "https://2tru0w9j0bliunku.public.blob.vercel-storage.com/photos/logo%20main/M%C4%B0Amaincolordark.png";

  return (
    <div className={`relative ${className}`} style={{ display: 'flex', alignItems: 'center' }}>
      {/* Light version (visible on dark bg) */}
      <img 
        src={logoLight}
        alt="Mia Stilo Home" 
        className={`h-full w-auto object-contain transition-opacity duration-300 absolute inset-0 ${isDarkBg ? 'opacity-100' : 'opacity-0'}`}
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />
      {/* Dark version (visible on light bg) */}
      <img 
        src={logoDark}
        alt="Mia Stilo Home" 
        className={`h-full w-auto object-contain transition-opacity duration-300 absolute inset-0 ${isDarkBg ? 'opacity-0' : 'opacity-100'}`}
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />
      {/* Spacer to maintain size */}
      <img 
        src={isDarkBg ? logoLight : logoDark}
        alt=""
        aria-hidden
        className="h-full w-auto object-contain opacity-0 pointer-events-none"
      />
    </div>
  );
};
