import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-100 to-rose-50 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-10">
        
        <h2 className="text-4xl font-bold text-rose-800 drop-shadow-sm">
          Tentang Saya
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed font-light">
          Hai! Aku Amanda, mahasiswa Informatika berusia 21 tahun. Aku punya passion besar di dunia pemrograman, terutama frontend development dengan React dan Tailwind CSS. Aku suka belajar hal baru dan senang banget ketika bisa menyelesaikan tantangan coding! 💻✨
        </p>

        <div>
          <h3 className="text-2xl font-semibold text-rose-700 mb-4">🧠 Skill</h3>
          <div className="flex justify-center flex-wrap gap-3">
            {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'].map((skill) => (
              <span
                key={skill}
                className="bg-pink-200 text-pink-900 px-5 py-2 rounded-full text-sm font-medium shadow hover:scale-105 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-rose-700 mb-4">🛠 Tools & Framework</h3>
          <div className="flex justify-center flex-wrap gap-3">
            {['VS Code', 'Git', 'GitHub'].map((tool) => (
              <span
                key={tool}
                className="bg-rose-200 text-rose-900 px-5 py-2 rounded-full text-sm font-medium shadow hover:scale-105 transition"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
