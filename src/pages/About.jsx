import React from 'react';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="mb-6 text-gray-700">
      Halo! Saya mahasiswa Informatika, saya berumur 21 tahun, yang suka banget ngulik coding dan bikin proyek web. Saat ini saya lagi fokus mendalami frontend development, terutama dengan React dan Tailwind CSS. Saya senang belajar hal baru dan suka tantangan yang bikin saya terus berkembang di dunia teknologi.
      </p>

      <h3 className="text-xl font-semibold mb-2">Skills</h3>
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">HTML</span>
        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">CSS</span>
        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">JavaScript</span>
        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">React</span>
        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Tailwind CSS</span>
      </div>

      <h3 className="text-xl font-semibold mb-2">Tools & Framework</h3>
      <div className="flex justify-center gap-4 flex-wrap">
        <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">VS Code</span>
        <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">Git</span>
        <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">GitHub</span>  
      </div>
    </div>
  );
};

export default About;
