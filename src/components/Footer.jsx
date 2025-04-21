import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-pink-900 via-rose-800 to-gray-900 text-gray-200 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Tentang */}
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold text-white">✨ Tentang</h4>
          <p className="text-sm text-pink-100 leading-relaxed">
            Hai! Selamat datang di website portofolio saya. Di sini saya berbagi karya dan pengalaman dalam dunia web development. Website ini dibangun dengan ❤️ menggunakan React & Tailwind CSS.
          </p>
        </div>

        {/* Navigasi */}
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold text-white">🧭 Navigasi</h4>
          <ul className="space-y-2 text-pink-100">
            <li><Link to="/" className="hover:text-yellow-300 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-300 transition">About</Link></li>
            <li><Link to="/projects" className="hover:text-yellow-300 transition">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Sosial */}
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold text-white">📲 Social Media</h4>
          <div className="flex gap-6 mt-2">
            <a
              href="https://www.instagram.com/amandarmdhaniii/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-300 transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/amandarmdhani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/amandarmdhani03/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-12 border-t border-pink-700 pt-4 text-sm text-pink-200">
        · Amanda Pramitha Ramadhani · 152023105 · 
      </div>
    </footer>
  );
};

export default Footer;
