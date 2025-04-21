import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 via-rose-200 to-pink-100 text-center px-4 py-10 animate-fadeIn space-y-6">
      
      <img
        src="/profile.jpg"
        alt="profile"
        className="w-36 h-36 rounded-full shadow-xl ring-4 ring-rose-400 hover:scale-105 transition duration-300 ease-in-out"
      />

      <h2 className="text-4xl md:text-5xl font-extrabold text-rose-800 drop-shadow-sm">
        Amanda Pramitha Ramadhani
      </h2>

      <p className="text-gray-700 max-w-2xl text-lg leading-relaxed font-light">
        Mahasiswa Informatika di Institut Teknologi Nasional. Passionate dalam pengembangan web dan desain UI. Jelajahi karya dan perjalanan belajarku di halaman ini.
      </p>

      <div className="space-x-4 mt-4">
        <Link
          to="/about"
          className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full shadow-lg transition duration-300 ease-in-out hover:shadow-pink-400/50"
        >
          Tentang Saya
        </Link>
        <Link
          to="/projects"
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full shadow-lg transition duration-300 ease-in-out hover:shadow-emerald-400/50"
        >
          Lihat Proyek
        </Link>
      </div>
    </div>
  );
};

export default Home;

