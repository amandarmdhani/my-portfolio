import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const menu = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-rose-900 text-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">PORTOFOLIO</Link>

        <div className="hidden md:flex space-x-6">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`hover:underline underline-offset-4 font-medium transition duration-200 ${
                location.pathname === item.path ? 'text-yellow-300' : 'text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-pink-600 text-white">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block font-medium ${
                location.pathname === item.path ? 'text-yellow-300 underline' : ''
              }`}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
