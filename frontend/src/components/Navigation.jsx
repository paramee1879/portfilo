import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
            PORTFOLIO
          </a>
          
          <div className="hidden md:flex gap-8 items-center">
            <a href="#home" className="text-gray-300 hover:text-red-500 transition font-medium">Home</a>
            <a href="#about" className="text-gray-300 hover:text-red-500 transition font-medium">About</a>
            <a href="#skills" className="text-gray-300 hover:text-red-500 transition font-medium">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-red-500 transition font-medium">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-red-500 transition font-medium">Contact</a>
            {user && (
              <button onClick={logout} className="px-5 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
                Logout
              </button>
            )}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 bg-gray-900/95 rounded-lg p-4 mt-2">
            <a href="#home" className="block py-2 text-gray-300 hover:text-red-500">Home</a>
            <a href="#about" className="block py-2 text-gray-300 hover:text-red-500">About</a>
            <a href="#skills" className="block py-2 text-gray-300 hover:text-red-500">Skills</a>
            <a href="#projects" className="block py-2 text-gray-300 hover:text-red-500">Projects</a>
            <a href="#contact" className="block py-2 text-gray-300 hover:text-red-500">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;