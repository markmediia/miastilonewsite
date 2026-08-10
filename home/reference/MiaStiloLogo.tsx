import React from 'react';

interface MiaStiloLogoProps {
  isWhiteHeader?: boolean;
  isDarkBg?: boolean;
  className?: string;
  onClick?: () => void;
}

export const MiaStiloLogo: React.FC<MiaStiloLogoProps> = ({
  isWhiteHeader = false,
  isDarkBg,
  className = "h-9 sm:h-11 md:h-[54px] w-auto",
  onClick,
}) => {
  // Determine dark or light mode background
  const darkBackground = isDarkBg !== undefined ? isDarkBg : !isWhiteHeader;

  // Use the exact official Mia Stilo logo images provided by the user
  const logoSrc = darkBackground
    ? "https://2tru0w9j0bliunku.public.blob.vercel-storage.com/photos/logo%20main/M%C4%B0Amaincolorlight.png"
    : "https://2tru0w9j0bliunku.public.blob.vercel-storage.com/photos/logo%20main/M%C4%B0Amaincolordark.png";

  return (
    <img
      src={logoSrc}
      alt="MİA STİLO"
      className={`${className} object-contain cursor-pointer transition-opacity duration-300 select-none`}
      onClick={onClick}
      referrerPolicy="no-referrer"
    />
  );
};
