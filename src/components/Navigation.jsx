import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { to: 'home', label: 'Home' },
    { to: 'diensten', label: 'Diensten' },
    { to: 'certificaten', label: 'Certificaten' },
    { to: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed w-full z-50 px-4 py-2 mt-4">
      <div className={`mx-auto max-w-5xl rounded-full transition-all duration-300 ${
        isScrolled ? 'bg-white/80 shadow-lg backdrop-blur-sm' : 'bg-white/20 backdrop-blur-sm'
      }`}>
        <div className="flex justify-between items-center h-16 px-6">
          <div className={`text-2xl font-bold transition-colors ${
            isScrolled ? 'text-blue-600' : 'text-white'
          }`}>
            MGR Services
          </div>
          <div className="hidden md:flex space-x-8">
            {menuItems.map(item => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-64}
                className={`cursor-pointer transition-colors ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}