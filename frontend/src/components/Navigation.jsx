import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur text-white z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-2xl font-bold text-purple-400">Portfolio</a>
          
          <div className="hidden md:flex gap-8 items-center">
            <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
            <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
            <a href="#blog" className="hover:text-purple-400 transition">Blog</a>
            <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
            {user ? (
              <button onClick={logout} className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition">
                Logout
              </button>
            ) : (
              <a href="#login" className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition">
                Login
              </a>
            )}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#skills" className="block py-2 hover:text-purple-400">Skills</a>
            <a href="#projects" className="block py-2 hover:text-purple-400">Projects</a>
            <a href="#blog" className="block py-2 hover:text-purple-400">Blog</a>
            <a href="#contact" className="block py-2 hover:text-purple-400">Contact</a>
            {user && (
              <button onClick={logout} className="w-full text-left py-2 hover:text-purple-400">
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;