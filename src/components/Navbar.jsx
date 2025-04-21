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
    <nav className="bg-gradient-to-r from-rose-600 via-pink-500 to-fuchsia-500 text-white shadow-md sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold tracking-wide drop-shadow-md hover:opacity-90 transition">
          MY PORTOFOLIO
        </Link>

        <div className="hidden md:flex space-x-8">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition-all duration-300 ease-in-out text-base font-medium hover:text-yellow-300 ${
                location.pathname === item.path ? 'text-yellow-300' : 'text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 pt-2 space-y-2 bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 transition-all duration-500">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block text-base font-medium hover:text-yellow-300 ${
                location.pathname === item.path ? 'text-yellow-300 underline' : 'text-white'
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


