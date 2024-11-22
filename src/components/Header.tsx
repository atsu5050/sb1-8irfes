import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const navItems = ['About', 'Skills', 'Contact'];

  return (
    <header className="bg-gray-800/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-white">Junya Hanyuda</h1>
            <p className="text-sm text-gray-400">Cancer of Nislab</p>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <button className="md:hidden p-2">
            <Menu className="h-6 w-6 text-gray-400" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;