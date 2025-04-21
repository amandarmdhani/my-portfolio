import React from 'react';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 px-4 py-16">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl text-center">
        <h2 className="text-3xl font-bold text-rose-700 mb-6">Get in Touch 💌</h2>
        <div className="space-y-4 text-gray-700 text-lg">
          <p className="flex items-center justify-center gap-2">
            <Mail className="w-5 h-5 text-rose-500" />
            <span>amandarmdhani.03@gmail.com</span>
          </p>
          <p className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5 text-rose-500" />
            <span>0813-6472-5790</span>
          </p>
          <p className="flex items-center justify-center gap-2">
            <Linkedin className="w-5 h-5 text-rose-500" />
            <a
              href="https://www.linkedin.com/in/amandarmdhani03/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-rose-700 transition"
            >
              linkedin.com/in/amandarmdhani03
            </a>
          </p>
          <p className="flex items-center justify-center gap-2">
            <Instagram className="w-5 h-5 text-rose-500" />
            <a
              href="https://instagram.com/amandarmdhaniii"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-rose-700 transition"
            >
              @amandarmdhaniii
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
