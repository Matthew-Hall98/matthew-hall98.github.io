
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-retro-navy py-4 px-4 border-t-2 border-retro-blue">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="font-pixel text-retro-white">
          <p>© {new Date().getFullYear()} Matthew Hall. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
