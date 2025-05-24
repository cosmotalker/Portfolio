import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItemProps } from '../types';

const navItems: NavItemProps[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'More', href: '#more' }
];

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-800 hover:text-blue-600 transition-colors">
          BHUVANESH M
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
              onClick={handleNavItemClick}
            >
              {item.label}
            </a>
          ))}
        </div>
        
        {/* Mobile menu */}
        <div 
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col pt-20 items-center z-40`}
        >
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="py-4 w-full text-center font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
              onClick={handleNavItemClick}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;