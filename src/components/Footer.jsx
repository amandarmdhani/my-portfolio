import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-gray-300 pt-10 pb-4">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Tentang</h4>
          <p className="text-sm text-gray-400">
          Hai! Selamat datang di website portofolio saya. Di sini saya berbagi karya dan pengalaman saya dalam dunia web development. Dibuat dengan React dan Tailwind CSS agar tampilannya tetap keren dan nyaman di semua perangkat.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Navigasi</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-300">About</Link></li>
            <li><Link to="/projects" className="hover:text-yellow-300">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Social</h4>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/amandarmdhaniii/" className="hover:text-yellow-300"><Instagram/></a>
            <a href="https://github.com/amandarmdhani" className="hover:text-yellow-300"><Github /></a>
            <a href="https://www.linkedin.com/in/amandarmdhani03/" className="hover:text-yellow-300"><Linkedin /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-10 border-t border-gray-700 pt-4 text-gray-500">
        &copy; 2025 - 152023105 - Amanda Pramitha Ramadhani
      </div>
    </footer>
  );
};

export default Footer;
