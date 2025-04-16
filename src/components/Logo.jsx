import React from 'react';
import logoSvg from '../assets/2.svg'; // Update this path to your actual SVG file

const Logo = () => {
  return (
    <div className="fixed top-14 left-10 z-50">
      <div className="rounded-full border-2 border-[#b7ab98] p-1 flex items-center justify-center opacity-75">
        <img src={logoSvg} alt="Appaji Dheeraj" className="w-10 h-10" />
      </div>
    </div>
  );
};

export default Logo;