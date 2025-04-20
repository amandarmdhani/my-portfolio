import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center mt-10 space-y-6">
      <img
        src="/profile.jpg"
        alt="profile"
        className="mx-auto w-32 h-32 rounded-full shadow-lg ring-2 ring-blue-500"
      />
      <h2 className="text-4xl font-bold text-gray-800">Amanda Pramitha Ramadhani</h2>
      <p className="text-gray-600 max-w-lg mx-auto">
        Saya adalah seorang mahasiswa jurusan Informatika di Institut Teknologi Nasional. Saya memiliki minat yang besar dalam pengembangan web dan desain antarmuka pengguna. Di sini, Anda dapat menemukan beberapa proyek yang telah saya kerjakan dan informasi lebih lanjut tentang diri saya.
      </p>
      <div className="space-x-4 mt-4">
        <Link to="/about" className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg shadow">
          Tentang Saya
        </Link>
        <Link to="/projects" className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg shadow">
          Lihat Proyek
        </Link>
      </div>
    </div>
  );
};

export default Home;
