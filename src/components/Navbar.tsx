
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    
    // Scroll to the section with center alignment
    const targetElement = document.querySelector(href);
    if (targetElement) {
      // Get viewport height and element's position
      const viewportHeight = window.innerHeight;
      const elementRect = targetElement.getBoundingClientRect();
      const absoluteElementTop = window.pageYOffset + elementRect.top;
      const middleScrollPosition = absoluteElementTop - (viewportHeight / 2) + (elementRect.height / 2);
      
      // Add the pixel art animation effect with a short delay
      setTimeout(() => {
        window.scrollTo({
          top: middleScrollPosition,
          behavior: 'smooth',
        });
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-retro-black border-b-4 border-retro-blue z-[100]">
      <div className="container mx-auto flex justify-between items-center p-2 md:p-4">
        <div className="font-press-start text-retro-white text-sm md:text-base">
          <span className="text-retro-yellow">MATTHEW</span> HALL
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-4 font-press-start text-xs">
            {navItems.map((item) => (
              <li key={item.name} className="hover:text-retro-yellow transition-colors">
                <a 
                  href={item.href} 
                  className="px-2 py-1 hover:bg-retro-navy relative group"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-retro-yellow transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <button 
          className="md:hidden text-retro-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-retro-navy border-b-4 border-retro-blue z-[100]">
          <ul className="flex flex-col font-press-start text-xs">
            {navItems.map((item) => (
              <li key={item.name} className="border-b border-retro-black last:border-0">
                <a 
                  href={item.href} 
                  className="block px-6 py-3 hover:bg-retro-blue hover:text-retro-white"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
